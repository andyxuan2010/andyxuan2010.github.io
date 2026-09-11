---
title: "Event-Driven Integration — Azure Event Grid"
summary: "Defines when Azure Event Grid should distribute discrete state-change notifications across Azure services, applications, SaaS partners, devices, and event handlers."
document_id: "ES-05"
category: "Enterprise Solutions"
article_type: "architecture"
tags:
  - event-grid
  - event-driven
  - pub-sub
  - cloud-events
  - mqtt
  - notifications
  - integration
  - azure
status: "published"
order: 50
version: "1.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "Cloud Center of Excellence"
audience:
  - enterprise architects
  - integration architects
  - platform engineers
  - application teams
  - IoT architects
  - operations engineers
environment_scope:
  - development
  - test
  - staging
  - production
cloud_scope:
  - Azure
  - AWS
  - GCP
  - OCI
related_document_ids:
  - ES-02
  - ES-03
  - ES-04
  - ORF-01
  - ORF-06
---

> **Document class:** Enterprise architecture reference model
> **Normative terms:** **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are requirements levels.
> **Applicability:** Discrete state-change notifications, event routing, event fan-out, and MQTT publish/subscribe scenarios.
> **Exception process:** Deviations require a documented risk assessment, compensating controls, named risk owner, and expiry date.

| Control field | Value |
|---|---|
| Document ID | `ES-05` |
| Owner | Cloud Center of Excellence |
| Review cycle | At least annually and after material Event Grid topic, namespace, delivery, protocol, identity, network, or event-contract changes |
| Evidence | Event catalog, source and subscription definitions, filter tests, delivery and retry policy, identity and network review, handler contract tests, and operational readiness review |

# Event-Driven Integration — Azure Event Grid

> **Decision in brief:** Use Event Grid for discrete state-change notifications and routing. Use Service Bus for durable business work and Event Hubs for high-volume streams.

## Purpose

This architecture uses Azure Event Grid to distribute notifications that a meaningful state change occurred. An event announces a fact such as a blob being created, an Azure resource changing, an order completing, a device changing state, or a SaaS partner emitting an event. Subscribers decide whether and how to react.

Event Grid is a managed publish-subscribe service for event distribution. It supports HTTP event delivery, CloudEvents 1.0, filtering, push and pull consumption, and MQTT messaging scenarios. Use it to connect event sources to webhooks, Functions, Logic Apps, Event Hubs, and other approved event handlers. [Microsoft: Introduction to Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/overview)

Event Grid is an event-notification and routing boundary, not a general-purpose application runtime or transactional business broker. Do not use it as a substitute for [Enterprise Messaging — Azure Service Bus](enterprise-messaging-azure-service-bus.md) when the requirement includes transactional messaging, sessions, ordered processing, sophisticated queue semantics, durable business commands, or dead-letter-driven work recovery. A common pattern is Event Grid for notification and Service Bus for the durable work that follows the notification.

## Scope and design outcomes

Use this model when a workload needs to:

- announce that a resource, entity, process, or device changed state;
- fan out one event to multiple independently owned subscribers;
- filter events by type, subject, source, or other event attributes;
- connect Azure system events, application events, partner events, or device events to handlers;
- use CloudEvents 1.0 for interoperable event envelopes;
- deliver events to an HTTP endpoint through push delivery;
- consume namespace-topic events through HTTP pull delivery when the consumer needs control over receive and acknowledgment timing;
- publish and subscribe to MQTT topics for supported IoT and device scenarios; or
- notify a workflow, Function, data pipeline, or durable messaging boundary without coupling the source to each consumer.

The target outcomes are:

- every event type has a source owner, semantic meaning, schema, version, data classification, and lifecycle;
- an event represents a fact or notification rather than an unbounded command or hidden workflow step;
- each event subscription has an accountable owner, filter, destination, identity, retry behavior, and support path;
- handlers are idempotent and tolerate duplicate, delayed, out-of-order, and missing notifications according to the event contract;
- filters reduce irrelevant delivery without becoming an undocumented authorization boundary;
- push, pull, and MQTT delivery modes are selected from consumer availability, network, latency, scale, and operational requirements;
- event failures are observable and lead to an explicit replay, reconciliation, quarantine, or durable-work path; and
- transactional business messaging remains in Service Bus or another purpose-fit broker.

## Context and decision drivers

Many systems need to react when something changes without requiring the source to know every consumer. A blob store should not call each processor directly, an order service should not hard-code every notification subscriber, and an Azure resource provider should not embed application-specific workflows in the resource owner. Event Grid provides a routing boundary that lets the source publish a state-change event while subscribers evolve independently.

The decision is driven by:

- **Event meaning:** The payload describes a discrete state change or notification that consumers can interpret independently.
- **Fan-out:** Multiple subscribers need the same event with independent filters, destinations, ownership, and processing rates.
- **Loose coupling:** The producer should not contain consumer-specific endpoints, workflow logic, or retry behavior.
- **Protocol fit:** Consumers need HTTP push, HTTP pull, CloudEvents, or MQTT for device and application pub/sub.
- **Latency:** Consumers should react near the time of the state change without polling the source.
- **Filtering:** Subscribers should receive only events that match type, subject, source, tenant, or business scope.
- **Operational model:** The team can define delivery, retry, duplicate, replay, and reconciliation behavior for each subscription.
- **Durability boundary:** The workload can distinguish a notification from durable business work that requires broker semantics.

## Options considered

### Azure Service Bus

Use [Enterprise Messaging — Azure Service Bus](enterprise-messaging-azure-service-bus.md) when the event is actually a business command or durable work item that requires queues, topics and subscriptions with broker semantics, dead-letter queues, sessions, ordering, duplicate detection, scheduled delivery, or transactions. Event Grid MAY publish or route a notification that causes a Service Bus message to be created, but Event Grid does not replace the durable processing boundary.

### Azure Event Hubs or another streaming platform

Use Event Hubs, Kafka, Fabric Eventstreams, or another streaming platform for high-volume telemetry, append-oriented streams, event-time processing, consumer offsets, and analytics over a continuous data stream. Event Grid MQTT can route device messages and events to downstream services, but Event Grid should not be chosen solely because a high-volume data point is called an event.

### Azure Logic Apps

Use [Workflow Orchestration — Azure Logic Apps](workflow-orchestration-azure-logic-apps.md) when the response is primarily a multistep connector workflow involving approvals, schedules, SAP, SFTP, B2B, SaaS, or cloud-to-on-premises control flow. Event Grid can trigger a Logic Apps workflow, but Event Grid remains the notification and routing boundary.

### Azure Functions

Use [Serverless Custom Integration — Azure Functions](serverless-custom-integration-azure-functions.md) when the event handler requires actual code for validation, transformation, protocol adaptation, or a bounded custom action. Functions should acknowledge or complete the event according to the delivery contract and hand durable work to Service Bus when the processing cannot safely remain within the event handler boundary.

### Polling or direct synchronous calls

Polling introduces delay, load, duplicate reads, and source-specific coordination. Direct calls can be appropriate when the caller needs an immediate response or a request result, but they couple source availability to every consumer. Use Event Grid when a source state change should notify multiple consumers without synchronous consumer calls.

### Selected direction: Azure Event Grid

Use Event Grid for discrete state-change notifications: a blob was created, an Azure resource changed, an order completed, a device changed state, or a SaaS partner emitted an event. Select the event topic and delivery model from the source and consumer topology. Select Service Bus when the downstream requirement is durable business work with transactional, ordered, session, duplicate-detection, or sophisticated queue semantics.

## Reference architecture

![Event-driven integration architecture with Azure Event Grid](../../assets/event-driven-integration-event-grid-architecture.svg)

Azure system topics, custom application topics, partner topics, namespace topics, and MQTT clients publish events. Event Grid applies event-subscription filters and delivers the relevant event through HTTP push, HTTP pull, MQTT, or an approved event handler. Functions, Logic Apps, webhooks, and data services react to notifications; Service Bus receives durable work when a notification must become a business command or recoverable processing item.

The source owns the meaning and publication contract. Event Grid owns distribution and subscription routing. Each handler owns validation, idempotency, authorization, business processing, and its own outcome. No component should infer successful business completion merely because Event Grid delivered an event.

The [Asynchronous messaging options](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/messaging) guidance places Event Grid in the discrete-event and publisher-subscriber category, and shows a common composition where Event Grid sends workflow-relevant events to Service Bus while notification events go to Logic Apps. Apply that composition when event notification and durable business work have different reliability and processing requirements.

## Event model and event catalog

### State-change semantics

An event MUST describe something that already happened or a state transition that the source is authorized to announce. Examples include:

| Event | Source | Typical subscribers | Boundary |
|---|---|---|---|
| Blob created | Azure Storage system topic | Malware scanner, metadata indexer, notification workflow | A file processor owns processing; the event does not guarantee the file remains available forever |
| Azure resource changed | Azure resource provider system topic | Policy evaluator, inventory indexer, operations alerting, compliance workflow | Resource event is a notification; query the current resource state before applying a policy action |
| Order completed | Order or commerce application | Customer notification, fulfillment view, analytics, loyalty service | Use Service Bus for a durable command such as payment capture or provisioning work |
| Device changed state | IoT or device application using HTTP or MQTT | Device twin update, alerting, telemetry routing, control-plane reaction | Use a streaming or device platform for telemetry and explicit command semantics for control actions |
| SaaS partner emitted an event | Partner topic or partner webhook integration | CRM sync, case management, reconciliation, notification | Validate partner identity, contract version, signature, and duplicate behavior |

Events SHOULD be named for a meaningful fact or transition, such as `OrderCompleted`, `BlobCreated`, `ResourceUpdated`, or `DeviceStateChanged`. Avoid names that hide commands or implementation details. If a consumer must perform an action on behalf of a caller, model the action as a command at a durable command boundary rather than relying on an event name to imply guaranteed execution.

### Event envelope

Use CloudEvents 1.0 for interoperable HTTP event contracts where the source and consumers support it. At minimum, define:

- event ID and source;
- event type and subject;
- event time and data content type;
- CloudEvents specification version and schema or data version;
- correlation and causation identifiers where a business process exists;
- tenant, organization, or resource scope where applicable;
- data classification and retention handling; and
- a payload or claim-check reference with integrity and authorization rules.

The event ID identifies the notification occurrence. It is not automatically an idempotency key for every downstream business action. A handler may need a business key, source version, entity version, or operation ID in addition to the event ID to distinguish a duplicate notification from a legitimate subsequent state change.

Do not place credentials, access tokens, excessive regulated data, or large binary content in an event. Use an authorized reference to an approved store when the handler needs to retrieve a large or sensitive payload. The reference MUST have an owner, expiry or retention policy, access check, integrity protection, and recovery behavior.

### Versioning and compatibility

Event schemas MUST be versioned independently from producer deployment versions. Additive changes SHOULD preserve existing consumers; breaking changes require a new type, versioned schema, or a compatibility boundary. Consumers MUST tolerate unknown fields and should validate required fields before applying side effects.

Maintain an event catalog containing event type, purpose, source, schema, example payload, owner, subscribers, data classification, retention, expected frequency, duplicate behavior, deprecation date, and support path. Do not publish an event that has no accountable source owner or consumer contract.

## Topics, subscriptions, and filtering

### Topic selection

Use system topics for Azure service events, custom topics for application-published events, partner topics for supported SaaS partner events, domains when a publishing boundary needs multiple domain topics, and namespace topics for the Event Grid namespace HTTP and pull-delivery model.

Topic ownership MUST reflect the source or publishing domain. Separate topics or namespaces when lifecycle, identity, data classification, region, network exposure, throughput, or operational ownership requires isolation. Do not put unrelated sensitive events into one topic merely because the producer uses the same SDK.

### Event subscriptions

An event subscription defines which events a consumer receives and where they are delivered. Each subscription should have:

- an owner and business purpose;
- source topic and environment;
- event types, subject patterns, and advanced filter rules;
- destination or pull-consumer identity;
- retry, dead-letter, expiration, and disablement behavior;
- network and authentication path;
- data classification and diagnostic policy; and
- dashboards, alerts, runbooks, and a retirement date.

A subscription is not an authorization system. Filters reduce delivery and cost, but the handler MUST revalidate event type, source, tenant, subject, resource scope, and current authorization before applying a side effect.

### Filtering

Filter on stable event attributes such as event type, subject, source, data version, tenant, resource group, or business scope. Prefer a small number of clear subscriptions over a broad consumer that receives every event and filters only in application code.

Treat filters as versioned policy. Test positive and negative cases, case sensitivity, missing attributes, schema changes, default behavior, and events that match multiple subscriptions. A change to a filter can change which consumers see business-relevant events; review it with the source and subscriber owners.

Do not use filters to implement a hidden workflow, authorization decision, or data-retention policy. If different consumers require materially different contracts or security controls, publish explicit event types or use a governed transformation boundary.

## Delivery models

### HTTP push delivery

Use push delivery when the consumer exposes an approved endpoint and should receive events when changes occur rather than poll. Event Grid sends events to the configured destination, which may include webhooks, Functions, Logic Apps, Event Hubs, or another supported handler.

The push endpoint MUST:

- authenticate Event Grid or validate the configured identity and source;
- handle subscription-validation events as a controlled provisioning step;
- validate CloudEvents or the selected event schema before processing;
- return success only after the event has been safely accepted according to the handler’s contract;
- return a retryable failure for transient unavailability and a non-retryable response for permanent rejection where supported;
- be idempotent because events can be delivered more than once;
- avoid holding the delivery open while performing unbounded business work; and
- expose response, latency, retry, and rejection metrics without logging sensitive payloads.

Event Grid push delivery retries transient failures according to its delivery policy. A retry policy is not an end-to-end business recovery process. Define what happens after retry exhaustion, including dead-letter or quarantine behavior where supported, alerting, replay, reconciliation, and consumer disablement.

### HTTP pull delivery

Use pull delivery for Event Grid namespace topics when the consumer needs control over when it receives events, cannot expose an endpoint, needs private-link access to consume events, or must control the consumption rate and timing. Pull consumers receive events and use the supported operations to acknowledge, release, reject, or renew locks according to the namespace delivery contract.

Pull delivery provides queue-like consumption controls for namespace topics, but it MUST NOT be assumed to provide all Service Bus semantics. Evaluate the required transaction boundary, session ordering, duplicate detection, dead-lettering, message deferral, scheduled delivery, retention, and consumer coordination before selecting it for business work.

A pull consumer should:

- limit receive concurrency to its downstream capacity;
- renew or release locks safely when processing cannot finish within the delivery window;
- acknowledge only after the handler has recorded a safe outcome;
- reject or quarantine malformed events without creating an infinite release loop;
- record event ID, source, type, lock or attempt state, outcome, and correlation; and
- monitor receive age, active locks, release count, acknowledgment latency, rejects, and backlog.

### MQTT publish and subscribe

Use Event Grid’s MQTT broker capabilities for supported IoT and device scenarios that need MQTT v3.1.1 or v5 pub/sub, custom topic structures, many-to-one ingestion, one-to-many distribution, or device-to-service routing. Define topic spaces, client groups, permission bindings, certificate or identity authentication, retained-message behavior, shared subscriptions, and routing to Azure services.

MQTT events and telemetry are not automatically durable business commands. For high-rate telemetry, time-series analysis, or event-stream processing, use Event Hubs, Fabric Eventstreams, IoT Operations, or another purpose-fit data platform where appropriate. For device control, authenticate the caller, authorize the command, use an explicit command contract, and define delivery and device-acknowledgment behavior.

MQTT support has service, region, quota, protocol, client, and feature constraints that change over time. Confirm current tier, region, throughput, retained-message, shared-subscription, authentication, private networking, and routing support before production design.

## Reliability, duplicates, and recovery

### Notification is not completion

Event Grid delivery means that the event system accepted or delivered a notification according to the selected delivery model. It does not prove that a downstream workflow completed, a payment settled, a device applied a command, or a database transaction committed.

The source MUST expose a way to query current state or reconcile event history when the business outcome matters. Consumers should treat events as hints to read or reconcile authoritative state when appropriate. A missing, delayed, duplicate, or out-of-order event must not cause an irreversible action without a safe business check.

### Idempotent handlers

Every handler that changes state MUST define its idempotency strategy. Use an event ID, business operation key, entity version, source sequence, inbox record, unique constraint, or an equivalent mechanism. Bind the processed record to the event type, source, consumer version, outcome, and business key where reconciliation requires it.

Event ID deduplication alone may be insufficient when a producer emits a new event ID for the same business operation or when an event is intentionally repeated after a correction. Define which duplicates are safe, which are stale versions, and which represent a new state transition.

### Failure and replay

Classify failures as validation, authentication, authorization, transient dependency, throttling, timeout, permanent business rejection, or consumer defect. Retry only transient conditions with bounded attempts and backoff. Do not retry malformed events or authorization failures indefinitely.

Every subscription needs a recovery plan for delivery failure, disabled endpoints, expired destinations, poison events, schema incompatibility, partner outage, and handler regression. The plan should identify whether to replay from an Event Grid capability, republish a corrected event, query authoritative state, create a Service Bus work item, or reconcile manually.

Never create an automatic infinite replay loop. A replay MUST have a new attempt boundary, an operator or approved automation owner, a bounded rate, a reason, and a stop condition. Preserve the original event ID and correlation data while recording the replay attempt separately.

## Security and networking

Use Microsoft Entra managed identities or workload identity for publishers, subscribers, and event handlers where supported. Scope permissions to the exact topic, namespace, event subscription, MQTT topic space, client group, route, or destination required. Separate publishing, subscription administration, consumer, and operational permissions.

Protect webhook secrets, certificates, MQTT client credentials, partner authentication, and destination connection data with Key Vault or an approved secret-management service. Rotate credentials with an owner, overlap procedure, validation test, and rollback path. Validate partner events with the supported authentication, signature, or certificate mechanism before processing.

For sensitive or internal event flows:

- use private endpoints and approved private DNS for supported Event Grid and namespace access paths;
- determine whether push or pull delivery matches the required network direction, since private-link consumption may be supported for pull scenarios while push requires an appropriate destination endpoint;
- restrict ingress, egress, IP filtering, topic spaces, client groups, and event subscriptions to approved boundaries;
- validate event source, subject, tenant, resource scope, and current authorization in the handler;
- classify and redact event payloads, diagnostics, dead-letter or quarantine records, and run history;
- prevent event data from crossing environment, region, tenant, or regulatory boundaries without approval; and
- audit topic, namespace, subscription, filter, route, identity, certificate, and network changes.

Event Grid filtering and topic access do not authorize a business action. The consumer remains responsible for authorization, tenant isolation, input validation, and protection against event spoofing or confused-deputy behavior.

## Performance, cost, and workload boundaries

Plan capacity and cost around event ingress, egress, event size, subscription count, filter complexity, delivery mode, retry volume, pull concurrency, MQTT clients, topic spaces, throughput units, private endpoints, destination execution, telemetry, and cross-region or egress traffic. Use current Event Grid tier, quota, limit, and pricing documentation for estimates.

Use filters and event contracts to avoid delivering irrelevant data. Partition topics or namespaces by lifecycle, region, tenant, data classification, or throughput when a single shared boundary would create noisy-neighbor or security risk. Do not create a topic or subscription per individual event instance.

Event Grid is suitable for event distribution and event-driven reactions. It is not the correct engine for:

- large analytical joins, aggregations, or batch transformations;
- durable purchase-order, payment, provisioning, or inventory work requiring queue semantics;
- global ordering or sessions across related events;
- distributed transactions across a database and multiple external systems;
- long-running, connector-heavy business workflows; or
- arbitrary application code, stateful domain logic, or a system of record.

Use Service Bus, Event Hubs, Data Factory, Fabric, Synapse, Logic Apps, Functions, or an application runtime according to the dominant requirement. Event Grid can remain the notification trigger or routing step that hands work to those services.

## Deployment and lifecycle

Manage topics, namespaces, event subscriptions, filters, routes, identities, network controls, certificates, client groups, topic spaces, and handler configuration as versioned deployment inputs. Environment-specific endpoints and credentials MUST come from approved configuration and secret stores.

Each event-subscription release SHOULD include:

- source event contract and example payload;
- filter positive, negative, missing-field, and schema-version tests;
- authentication, authorization, network, private DNS, and endpoint validation;
- duplicate, delay, out-of-order, retry, timeout, rejection, and replay tests;
- destination throttling, downstream outage, and backpressure behavior;
- topic, namespace, subscription, MQTT, or partner artifact changes;
- telemetry, alert, dashboard, runbook, and support-owner updates; and
- a cost, quota, throughput, and retention review.

Version event schemas, filters, and handlers together when a change can alter subscriber behavior. Define whether old consumers remain subscribed, whether events are dual-published, how in-flight deliveries are handled, and when the old event type or subscription is retired.

## Observability and operations

The integration platform team owns approved Event Grid tiers, namespaces, topic patterns, identity, network integration, shared policy, telemetry, and service standards. Source teams own event meaning, schema, versioning, publication behavior, and current-state reconciliation. Subscriber teams own handler correctness, idempotency, authorization, downstream dependencies, SLOs, and recovery. Security and governance teams define data protection, network, audit, retention, and exception requirements.

Every production event type and subscription should have an operational record containing the source, event type, schema version, owner, purpose, classification, expected volume, topic or namespace, filter, destination, delivery model, identity, network path, retry and replay policy, support path, and retirement or review date.

Monitor at least:

- published, matched, delivered, acknowledged, rejected, released, expired, and dead-lettered events;
- delivery latency, event age, retry count, retry exhaustion, destination response, and handler duration;
- filter match rate, dropped or unmatched events, subscription changes, and unexpected fan-out;
- duplicate, stale-version, out-of-order, malformed, unauthorized, and permanent-rejection counts;
- HTTP push endpoint availability, response code, latency, throttling, TLS, and authentication failures;
- HTTP pull receive, lock, release, renew, acknowledgment, reject, and backlog behavior;
- MQTT connected clients, authentication, authorization, publish, subscribe, retained, shared-subscription, and routing behavior;
- topic, namespace, throughput-unit, quota, region, private endpoint, and network health;
- downstream Service Bus backlog, Function failures, Logic Apps runs, Event Hubs lag, and data-pipeline status where Event Grid hands off work; and
- event-contract, filter, topic, namespace, identity, certificate, network, route, and deployment changes.

Runbooks should cover publisher failure, topic or namespace outage, subscription misconfiguration, filter regression, push endpoint outage, pull consumer lag, lock or acknowledgment failure, MQTT client or certificate failure, partner event rejection, schema incompatibility, duplicate side effect, retry exhaustion, Service Bus handoff failure, and controlled replay or reconciliation.

## Validation

- [ ] The event represents a discrete state change or notification, and the source, semantic owner, schema, version, and current-state reconciliation path are documented.
- [ ] Event Grid is not being used as a substitute for Service Bus transactional messaging, sessions, ordered processing, sophisticated queue semantics, or durable business work.
- [ ] The topic, namespace, system/custom/partner source, MQTT topic space, and environment boundary are appropriate and owned.
- [ ] Every event subscription has an owner, purpose, event filter, destination, identity, network path, retry policy, failure path, and retirement or review date.
- [ ] CloudEvents 1.0 or the selected event envelope defines ID, source, type, subject, time, data version, correlation, scope, classification, and payload or claim-check behavior.
- [ ] Event contracts are versioned, backward compatibility is tested, and unknown fields or stale versions are handled safely.
- [ ] Push endpoints validate source, authentication, subscription events, schema, idempotency, response semantics, and retry behavior.
- [ ] Pull consumers define receive, lock, acknowledge, release, reject, renew, concurrency, private-network, and backlog behavior.
- [ ] MQTT scenarios define protocol version, client identity, topic spaces, permissions, retained messages, shared subscriptions, routing, and device acknowledgment where applicable.
- [ ] Filters have positive, negative, missing-field, case, version, overlap, and default-behavior tests and are not treated as business authorization.
- [ ] Handlers are idempotent and tested for duplicate, delayed, out-of-order, malformed, unauthorized, stale, and replayed events.
- [ ] Retry, quarantine, dead-letter or equivalent recovery, replay, reconciliation, and infinite-loop prevention are documented and tested.
- [ ] Large analytical transformations, durable business commands, long-running workflows, distributed transactions, and application logic are delegated to purpose-fit services.
- [ ] Identity, certificates, secrets, private endpoints, DNS, network direction, tenant isolation, payload redaction, and audit controls are verified.
- [ ] Dashboards, alerts, event-catalog evidence, support contacts, dependency SLOs, cost and quota limits, and operational runbooks are ready before production.

## Related topics

- [Enterprise Messaging — Azure Service Bus](enterprise-messaging-azure-service-bus.md)
- [Serverless Custom Integration — Azure Functions](serverless-custom-integration-azure-functions.md)
- [Workflow Orchestration — Azure Logic Apps](workflow-orchestration-azure-logic-apps.md)
- [API-Led Integration — Azure API Management](api-led-integration-azure-api-management.md)
- [Validation, Testing, and Operational Readiness](../operations-reliability-finops/validation-testing-and-operational-readiness.md)

## References

- [Introduction to Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/overview)
- [Push delivery with HTTP](https://learn.microsoft.com/en-us/azure/event-grid/push-delivery-overview)
- [Concepts for Event Grid namespace topics](https://learn.microsoft.com/en-us/azure/event-grid/concepts-event-grid-namespaces)
- [MQTT broker in Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/mqtt-overview)
- [Choose the right Event Grid tier](https://learn.microsoft.com/en-us/azure/event-grid/choose-right-tier)
- [Asynchronous messaging options](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/messaging)
- [Architecture best practices for Azure Event Grid](https://learn.microsoft.com/en-us/azure/well-architected/service-guides/azure-event-grid)
