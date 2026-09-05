---
title: "Serverless Custom Integration — Azure Functions"
summary: "Defines when Azure Functions should provide custom event-driven integration code alongside Service Bus, Event Grid, APIs, and connector-based workflows."
document_id: "ES-03"
category: "Enterprise Solutions"
article_type: "architecture"
tags:
  - azure-functions
  - serverless
  - event-driven
  - custom-integration
  - service-bus
  - event-grid
  - flex-consumption
  - integration
status: "published"
order: 30
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
  - security engineers
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
  - ES-01
  - ES-02
  - DAI-02
  - ORF-06
---

> **Document class:** Enterprise architecture reference model
> **Normative terms:** **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are requirements levels.
> **Applicability:** Custom code that validates, transforms, adapts, schedules, or processes events when configuration and connectors are insufficient.
> **Exception process:** Deviations require a documented risk assessment, compensating controls, named risk owner, and expiry date.

| Control field | Value |
|---|---|
| Document ID | `ES-03` |
| Owner | Cloud Center of Excellence |
| Review cycle | At least annually and after material Functions runtime, hosting, trigger, identity, or dependency changes |
| Evidence | Function contract, trigger and binding definitions, deployment artifact, security review, load and failure tests, and operational readiness review |

# Serverless Custom Integration — Azure Functions

> **Decision in brief:** Use Functions for bounded custom code with an explicit trigger and contract. Keep messaging, workflow orchestration, API governance, and durable state in purpose-built services.

## Purpose

This architecture uses Azure Functions when an integration requires actual code and cannot be implemented safely with connectors, configuration, or declarative policy alone. Functions provide event-driven, scheduled, and lightweight HTTP execution without requiring the workload team to manage a server fleet.

Use Functions to validate or transform messages, process Service Bus or Event Grid events, implement custom protocol adapters, execute scheduled tasks, expose lightweight HTTP APIs, and build event-driven processing components. Keep the surrounding platform responsibilities with the service designed for them: Service Bus provides durable messaging, Event Grid provides event notification, API Management provides the governed API front door, and Logic Apps provides connector-heavy workflow orchestration.

Azure Functions is a code execution boundary, not a universal integration platform. A function should perform a bounded unit of work with an explicit trigger, input contract, output contract, retry behavior, identity, and operational owner. It MUST NOT become an undocumented message broker, a large stateful application, or a replacement for a workflow and connector platform.

## Scope and design outcomes

Use this model when an organization needs to:

- validate, enrich, normalize, or transform a message before another system receives it;
- consume Service Bus queues, topics, and subscriptions with custom processing logic;
- respond to Event Grid notifications with a bounded action;
- translate a custom or legacy protocol into a supported API or message contract;
- execute a scheduled cleanup, reconciliation, polling, or maintenance task;
- expose a small HTTP endpoint for a narrowly scoped integration function;
- process files, records, or events without maintaining dedicated application servers; or
- implement a code-heavy event-driven component that scales independently from its producer.

The target outcomes are:

- custom code exists only where configuration and connectors cannot meet the requirement;
- every function has a bounded trigger, contract, owner, timeout, retry policy, and failure path;
- message durability and workflow state remain in the appropriate broker or workflow service;
- functions can scale independently without creating unbounded downstream pressure;
- identity, network access, secrets, telemetry, and deployment are standardized;
- retries and duplicate deliveries do not create repeated business side effects; and
- the runtime can be upgraded, tested, and rolled back without hidden coupling to unrelated functions.

## Context and decision drivers

Enterprise integrations often start with a connector or configuration-driven workflow. This is preferable when the task is primarily moving data between supported systems, mapping simple fields, applying standard authentication, or coordinating a known set of steps. Configuration becomes insufficient when the integration needs protocol parsing, nontrivial validation, custom signing, specialized error handling, binary processing, or a domain-specific transformation.

The decision is driven by:

- **Code necessity:** A real runtime is required for logic that cannot be represented by connectors, mappings, or policies.
- **Bounded execution:** The work can complete within the selected trigger and hosting limits or is delegated to a durable workflow pattern.
- **Event-driven scale:** Invocations may arrive sporadically or in bursts and should scale independently from the caller.
- **Failure behavior:** The design defines retries, duplicate delivery, poison inputs, timeouts, partial outcomes, and operator recovery.
- **Dependency control:** External APIs, databases, brokers, and file systems have bounded connection, rate, and concurrency behavior.
- **Operational clarity:** Function ownership, logs, metrics, traces, deployment history, and support runbooks are visible.
- **Platform fit:** The application is better served by serverless code than by Logic Apps, Service Bus, API Management, a containerized service, or a long-running application host.

## Options considered

### Connector and configuration-based integration

Use Logic Apps or another approved connector platform when the integration is primarily connector calls, conditional routing, standard mappings, approvals, notifications, or business-user-managed workflow. Connectors reduce custom code and often provide built-in authentication, retry, and monitoring. Do not introduce Functions merely because a connector workflow has not yet been designed clearly.

### Azure Service Bus

Use Service Bus when the requirement is durable business messaging: queues, topics, subscriptions, dead-lettering, sessions, duplicate detection, scheduled delivery, or broker transactions. Functions can consume or publish Service Bus messages, but they MUST NOT recreate those broker features in process memory, local storage, or custom database tables. See [Enterprise Messaging — Azure Service Bus](enterprise-messaging-azure-service-bus.md) for the messaging boundary.

### Azure Event Grid

Use Event Grid when the requirement is event notification and routing, particularly for resource changes or application events. Functions are a natural event handler for Event Grid, but the function must define idempotency and failure handling. If the event represents durable business work that must wait for a consumer or be replayed operationally, place it on Service Bus or another suitable durable broker.

### Azure API Management

Use API Management as the controlled front door for internal, partner, and public APIs. A Function can implement a lightweight HTTP backend or adapter behind APIM, but it should not independently reproduce product management, consumer onboarding, throttling, JWT policy, discovery, and API governance. See [API-Led Integration — Azure API Management](api-led-integration-azure-api-management.md).

### Containerized or long-running application service

Use a container, App Service, Kubernetes workload, or another continuously running service when the process needs persistent in-memory state, specialized runtime control, long-lived connections, predictable always-on latency, large dependencies, or execution beyond the selected Functions limits. A serverless label does not remove the need to match the runtime to the workload.

### Selected direction: Azure Functions

Use Azure Functions for bounded custom code invoked by HTTP, Service Bus, Event Grid, timer, storage, database, or other supported triggers. Use bindings where they reduce integration plumbing, but keep contracts and behavior explicit in source control. For new serverless applications, select Flex Consumption unless the workload has a documented reason to use Premium, Dedicated, Container Apps, or another hosting option. Treat the legacy Windows Consumption plan as an existing-workload compatibility option, not the default for new applications.

## Reference architecture

![Serverless custom integration architecture with Azure Functions](../../assets/serverless-custom-integration-architecture.svg)

The trigger source owns the event or request boundary. The Function app validates the input, executes bounded custom code, and emits a result through the appropriate output boundary. Service Bus remains responsible for durable message storage and settlement; Logic Apps remains responsible for connector-heavy orchestration; API Management remains responsible for API consumer governance. Azure Monitor and Application Insights provide execution and dependency evidence.

The graphic shows logical boundaries rather than a mandatory single deployment. A workload may use one function app per bounded capability, multiple function apps by trust or scaling boundary, or a function deployed to a different supported hosting option. Do not combine unrelated high-volume triggers into one app merely to reduce the resource count when independent scale, identity, or failure behavior is required.

## Trigger and binding model

Choose a trigger based on the source contract and desired execution semantics:

| Trigger | Appropriate use | Boundary to preserve |
|---|---|---|
| Service Bus | Custom processing of durable business messages | The broker owns durability, delivery, settlement, sessions, and dead-lettering |
| Event Grid | Event notification and bounded event reaction | The event source owns notification; the function owns idempotent handling and failure response |
| HTTP | Lightweight request-response adapter or webhook | APIM owns external API governance; the function owns bounded request processing |
| Timer | Scheduled cleanup, polling, reconciliation, or maintenance | The timer starts work; a durable store or broker owns long-running progress |
| Blob or storage | File validation, metadata extraction, or controlled transformation | Storage owns the artifact; the function owns processing and output evidence |
| Database or change feed | Bounded response to a supported data change | The data platform owns the source of truth and change semantics |

Bindings can reduce boilerplate for connections and common trigger/output paths. They do not remove the need to understand delivery, lock, checkpoint, retry, serialization, network, and authentication behavior. Use the SDK directly when the required operation or reliability control is not expressed safely by a binding, and document the reason.

## Custom integration responsibilities

### Message validation and transformation

Validate message identity, schema version, required fields, data classification, tenant or business scope, and allowed state transitions before invoking downstream systems. Reject malformed input deterministically and route it to the source broker’s dead-letter or failure path with enough metadata for diagnosis.

Transform only at a deliberate boundary. Preserve the source message ID, correlation ID, causation ID, producer, schema version, and original timestamp in the output or processing record. Mapping code should be versioned, tested with representative edge cases, and backward compatible where consumers are upgraded independently.

Do not use a Function to conceal an unstable contract indefinitely. If multiple consumers need the same transformation, consider a canonical contract, shared library, API facade, or dedicated integration component with an owner and lifecycle.

### Service Bus processing

A Service Bus-triggered function should complete a bounded unit of work and settle the message only after the required durable outcome is recorded. It should handle lock duration, delivery count, transient exceptions, dependency throttling, and poison messages according to the queue or subscription policy.

Assume at-least-once delivery. A function can fail after a side effect and before message settlement, so the same input may execute again. Use idempotency keys, an inbox record, a unique business constraint, or an atomic outbox/inbox design. Do not store the only copy of a business result in function memory or a temporary local file.

Use Service Bus sessions when related messages require ordered handling; do not implement ordering by assuming function invocation order. Use a queue or topic for durable buffering; do not build an in-process queue to compensate for slow dependencies.

### Event Grid processing

Event Grid handlers should treat events as notifications that may be retried or delivered more than once. Validate the event type, subject, source, event ID, time, data version, and authorization before acting. Store a processed-event record or use an equivalent idempotent operation when the handler changes external state.

If event handling can exceed the trigger’s practical execution boundary, publish a durable work message to Service Bus and return from the event handler after the handoff is accepted. The Function should not hold an Event Grid delivery open while performing a multi-step workflow that belongs in a broker or durable orchestrator.

### Custom protocol adapters

Use a Function to translate a bounded legacy or specialized protocol into an approved HTTP, Service Bus, storage, or event contract. Keep parsing, validation, authentication, and mapping separate from the domain service where possible. Capture protocol-level failure details without logging credentials or regulated payloads.

An adapter should define:

- supported protocol versions and message sizes;
- connection, timeout, retry, and concurrency limits;
- authentication and certificate rotation;
- source and destination correlation;
- partial-send and acknowledgement behavior;
- dead-letter, quarantine, or manual recovery; and
- a deprecation path when the legacy protocol is retired.

### Scheduled tasks

Use timer-triggered Functions for bounded jobs such as cleanup, reconciliation, cache refresh, polling, or certificate and metadata checks. Make the task idempotent and safe to rerun after a timeout or host restart. Use a durable checkpoint, lease, or work queue when the job spans many items or may exceed a single invocation.

Timer schedules should use an explicit time zone policy, documented missed-run behavior, concurrency guard, and alerting. A timer trigger is not a replacement for a durable scheduler when every occurrence must be recorded, independently retried, canceled, or audited as a business obligation.

### Lightweight HTTP APIs

Functions may expose a small HTTP endpoint for a webhook, adapter, health-aware integration action, or bounded transformation. For internal, partner, or public APIs, place API Management in front when the interface needs authentication policy, rate limiting, products, subscriptions, versioning, or centralized discovery.

Keep HTTP functions stateless and bounded. Reject oversized or unsupported requests, set explicit timeouts, use correlation IDs, avoid returning internal exception details, and do not perform long-running work synchronously. Accept the request and enqueue durable work when the caller does not need the final result immediately.

## Workflow and messaging boundaries

Functions and Logic Apps are complementary but have different centers of gravity:

| Requirement | Preferred boundary | Reason |
|---|---|---|
| Connector-heavy workflow with standard service integrations | Logic Apps | Configuration, connectors, workflow state, and integration operations are the primary concern |
| Custom parsing, validation, transformation, or protocol code | Azure Functions | Actual code is required and the unit of work is bounded |
| Durable business command or event buffering | Azure Service Bus | Broker durability, delivery, sessions, dead-lettering, and settlement are required |
| Event notification and resource-change reaction | Event Grid plus Functions | Event routing and custom event handling are separate concerns |
| Long-running code-centric orchestration | Durable Functions or an approved workflow runtime | Durable state and coordination are explicit rather than hidden in a single invocation |
| Governed API exposure | API Management plus Function backend | Consumer policy and custom implementation remain separate |

Do not put Service Bus semantics inside Functions. Do not put a connector catalog, visual workflow, or long-running orchestration inside a large Function method. If an integration requires both code and workflow, keep the boundaries explicit and pass durable contracts between them.

## Hosting and scale

For new serverless Function apps, use Flex Consumption as the default starting point unless workload requirements justify another plan. Flex Consumption provides event-driven scaling, per-function scaling behavior for supported triggers, virtual network integration, and pay-as-you-go billing. Confirm the current supported language, trigger, region, networking, instance, memory, concurrency, and execution constraints before standardizing a workload.

The legacy Windows Consumption plan may remain appropriate for existing applications that are not being migrated yet, but it should not be the default for a new application. Premium provides always-ready instances and additional networking and execution characteristics. Dedicated plans and Container Apps may be preferable when predictable capacity, existing App Service commitments, or container-level control outweigh serverless elasticity.

Plan scale around the complete dependency chain:

- trigger arrival rate and batch size;
- per-invocation duration and memory;
- maximum concurrent executions;
- downstream API, database, broker, and storage limits;
- connection reuse and socket exhaustion;
- cold-start and warm-instance behavior;
- deployment package size and dependency initialization; and
- backlog drain time after an outage or scale event.

Do not allow automatic scale-out to overwhelm a dependency. Use bounded concurrency, backpressure, rate limits, queue-based load leveling, and dependency-specific retry policies. A Function app that scales quickly but causes database throttling or partner blocking is not resilient.

## Security and networking

Use managed identity or workload identity for Azure resource access where supported. Scope identities to the exact Service Bus entity, storage container, Key Vault secret, Event Grid operation, database, or API required by the function. Separate deployment identity from runtime identity and keep production credentials out of application settings managed outside the approved secret pattern.

Apply:

- Microsoft Entra authentication for HTTP endpoints where appropriate;
- private endpoints, virtual network integration, or approved egress paths for sensitive dependencies;
- Key Vault references or an equivalent secret-management pattern for certificates and external credentials;
- input validation, request-size limits, content-type checks, and safe serialization;
- TLS validation and certificate rotation for custom protocol adapters;
- restricted CORS and function-key use only where the compatibility need is documented; and
- diagnostic redaction for tokens, credentials, message bodies, and regulated data.

The function is not automatically trusted because it runs inside Azure. Validate the caller, trigger metadata, message contract, tenant or resource scope, and dependency response before applying a side effect. Treat event payloads and external API responses as untrusted input.

## Reliability, retries, and state

Implement explicit exception classes for validation failure, transient dependency failure, authorization failure, throttling, and permanent business rejection. Retry only transient failures with bounded attempts, exponential backoff, and jitter. Do not retry malformed input or an authorization denial until the underlying condition changes.

Design every trigger for duplicate delivery and partial execution. Record a stable operation key before a non-repeatable side effect, or use an atomic application pattern that makes the side effect and processing record consistent. When a function publishes a message after updating a database, use a transactional outbox or another reliable publication mechanism rather than assuming two independent calls are atomic.

Use Durable Functions when the workload truly needs code-centric durable orchestration, checkpoints, timers, fan-out/fan-in, or compensation. Durable Functions still requires careful state, versioning, replay-safe code, and external dependency controls. Use Logic Apps when connector-heavy workflow visibility and integration operations are more important than code-centric orchestration.

## Observability and operations

Every function should emit structured telemetry containing function name, version, invocation ID, correlation ID, message ID or event ID, trigger type, tenant or business scope where allowed, dependency, outcome, duration, retry attempt, and failure class. Do not log full payloads by default.

Monitor at least:

- invocation count, success rate, failure rate, duration, memory, and concurrency;
- cold starts, instance count, scale decisions, throttling, and host health;
- trigger lag, queue age, delivery count, checkpoint or lock failures, and event retry behavior;
- downstream dependency latency, status, throttling, connection errors, and circuit state;
- dead-letter, quarantine, duplicate, validation-rejection, and permanent-failure counts;
- timer lateness, missed executions, overlapping runs, and reconciliation age;
- HTTP status codes, authentication failures, request size, and rate-limit outcomes; and
- deployment version, configuration changes, secret rotation, and runtime upgrade state.

The function owner is accountable for code, contract, dependency behavior, tests, deployment, alerts, dashboards, runbooks, and cost. The platform team owns approved hosting baselines, identity patterns, networking, diagnostics, runtime support, and deployment guardrails. Service owners retain ownership of their message brokers, APIs, data stores, and workflow semantics.

Runbooks should cover trigger outage, dependency outage, retry storm, poison message, duplicate side effect, timeout, memory exhaustion, scale saturation, failed deployment, secret or certificate expiry, network path failure, schema incompatibility, and controlled replay or reconciliation.

## Validation

- [ ] The requirement needs custom code and cannot be met safely by approved connectors, configuration, or policy.
- [ ] The function has one or more explicit triggers, input contracts, output contracts, owners, and supported execution boundaries.
- [ ] Service Bus remains the durable messaging boundary and Logic Apps remains the connector-heavy workflow boundary.
- [ ] Service Bus and Event Grid handlers are idempotent and tested for duplicate, retry, timeout, and crash-after-side-effect behavior.
- [ ] Message validation, transformation, protocol adaptation, and schema evolution have representative tests.
- [ ] HTTP endpoints are bounded, authenticated, size-limited, and fronted by API Management when governance is required.
- [ ] Timer jobs define time zone, missed-run, overlap, checkpoint, cancellation, and reconciliation behavior.
- [ ] Flex Consumption or the selected alternative is justified against scale, networking, latency, execution, dependency, and cost requirements.
- [ ] Runtime and deployment identities are separate, least-privileged, rotated, and auditable.
- [ ] Private networking, secret management, certificate validation, payload redaction, and egress controls are verified.
- [ ] Retry, backpressure, concurrency, downstream limits, and poison-input behavior are tested under burst and outage conditions.
- [ ] Function telemetry includes correlation, trigger, dependency, outcome, retry, duration, and failure-class evidence.
- [ ] Dashboards, alerts, deployment rollback, runtime upgrade, incident, and reconciliation runbooks are current.
- [ ] The function does not contain an unbounded message broker, hidden workflow state, or connector-heavy orchestration that belongs elsewhere.

## Related topics

- [API-Led Integration — Azure API Management](api-led-integration-azure-api-management.md)
- [Enterprise Messaging — Azure Service Bus](enterprise-messaging-azure-service-bus.md)
- [Azure Data Factory and Data Integration](../data-ai-integration/dai-azure-data-factory-and-data-integration.md)
- [Validation, Testing, and Operational Readiness](../operations-reliability-finops/validation-testing-and-operational-readiness.md)

## References

- [Azure Functions overview](https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview)
- [Architecture best practices for Azure Functions](https://learn.microsoft.com/en-us/azure/well-architected/service-guides/azure-functions)
- [Event-driven architecture style](https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven)
- [Get started with Azure Functions](https://learn.microsoft.com/en-us/azure/architecture/web-apps/serverless/architectures/web-app)
- [Anti-Corruption Layer pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer)
