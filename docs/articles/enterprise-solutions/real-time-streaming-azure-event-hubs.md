---
title: "Real-Time Streaming — Azure Event Hubs"
summary: "Defines when Azure Event Hubs should ingest, retain, partition, replay, and distribute high-volume ordered streams for telemetry, logs, clickstreams, financial data, and near-real-time analytics."
document_id: "ES-06"
category: "Enterprise Solutions"
article_type: "architecture"
tags:
  - event-hubs
  - real-time-streaming
  - telemetry
  - kafka
  - stream-processing
  - near-real-time-analytics
  - consumer-groups
  - azure
status: "published"
order: 60
version: "1.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "Cloud Center of Excellence"
audience:
  - enterprise architects
  - data architects
  - platform engineers
  - application teams
  - IoT architects
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
  - ES-02
  - ES-03
  - ES-05
  - DAI-02
  - ORF-06
---

> **Document class:** Enterprise architecture reference model
> **Normative terms:** **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** are requirements levels.
> **Applicability:** High-volume, low-latency event streams that require partitioned ordering, independent consumers, offset tracking, replay, or stream processing.
> **Exception process:** Deviations require a documented risk assessment, compensating controls, named risk owner, and expiry date.

| Control field | Value |
|---|---|
| Document ID | `ES-06` |
| Owner | Cloud Center of Excellence |
| Review cycle | At least annually and after material Event Hubs namespace, partition, protocol, retention, capture, identity, network, or stream-processing changes |
| Evidence | Stream catalog, partition and keying design, producer and consumer contracts, capacity model, checkpoint and replay tests, security review, and operational readiness review |

# Real-Time Streaming — Azure Event Hubs

> **Decision in brief:** Use Event Hubs for high-volume append-only streams with independent consumers and replay. Use Service Bus for settled business work and Event Grid for discrete notifications.

## Purpose

This architecture uses Azure Event Hubs as the high-volume, append-oriented streaming platform for low-latency ingestion and independent consumption of ordered event streams. Producers append events to a partitioned event hub; consumer applications read the stream using offsets and checkpoints, usually through separate consumer groups.

Use Event Hubs for IoT telemetry, application and security logs, clickstreams, financial market data, near-real-time analytics, and Kafka-compatible ingestion. Event Hubs is a streaming platform, not a traditional enterprise work queue. It provides a time-ordered log per partition and consumer-controlled reading; it does not provide Service Bus transactions, sessions, queue settlement, duplicate detection, or sophisticated work-queue semantics.

Microsoft’s messaging distinction is:

| Requirement | Correct service |
|---|---|
| Business commands and reliable work queues | [Azure Service Bus](enterprise-messaging-azure-service-bus.md) |
| Discrete state-change notification | [Azure Event Grid](event-driven-integration-azure-event-grid.md) |
| High-volume telemetry and streams | Azure Event Hubs |

The [Azure Architecture Center messaging guidance](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/messaging) describes Event Hubs as the message broker for event streams: it buffers large volumes at low latency, supports multiple consumers, and lets subscribers manage their position in the stream. [Microsoft: What is Azure Event Hubs](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about)

## Scope and design outcomes

Use this model when a workload needs to:

- ingest a high volume of small events from many producers;
- preserve ordering for events that share a partition key;
- let multiple independent consumer applications read the same stream at their own pace;
- maintain a consumer offset and resume after a restart or temporary outage;
- replay a retained sequence from a timestamp or offset for recovery, backfill, or a new consumer;
- feed Stream Analytics, Data Explorer, Functions, Spark, Flink, Fabric, Synapse, or another streaming processor;
- capture the hot stream to Blob Storage or Data Lake Storage for long-term retention and batch analytics; or
- accept Kafka, AMQP 1.0, or HTTPS producers and consumers through supported Event Hubs protocols.

The target outcomes are:

- every stream has an accountable owner, purpose, schema, source, classification, retention, partition key, and consumer inventory;
- partitioning is based on an explicit ordering and load-distribution requirement rather than an arbitrary field;
- producers use stable schemas, bounded event sizes, batching, backpressure, and a documented delivery contract;
- consumers use independent consumer groups where processing, checkpointing, or release cadence differs;
- checkpoints, lag, replay, retention, and poison records are observable and recoverable;
- the stream is treated as an append-only data source rather than a queue of individually settled work items;
- high-volume telemetry and analytics remain in Event Hubs while durable business commands remain in Service Bus; and
- identity, private networking, schema governance, and data protection are enforced across producers, the namespace, consumers, and storage sinks.

## Context and decision drivers

Applications, devices, security controls, and financial systems generate data continuously. A synchronous call for every data point couples producers to downstream availability and cannot absorb a burst without either blocking the producer or dropping data. A traditional work queue is also a poor fit when many independent consumers need to observe the same ordered stream, maintain separate offsets, and replay a historical interval.

The decision is driven by:

- **Volume:** The system ingests events at a rate or burst profile that benefits from a partitioned streaming service.
- **Latency:** Consumers need low-latency access to newly appended data for alerts, dashboards, detection, or operational decisions.
- **Ordering:** Events must be ordered within a business or device key, not globally across the entire stream.
- **Fan-out:** Multiple consumers need independent positions, processing logic, scaling, retention, or replay behavior.
- **Replay:** A consumer must resume from a checkpoint or read a retained interval again after recovery, correction, or onboarding.
- **Protocol compatibility:** Existing Kafka producers or consumers should use a managed Azure streaming service without managing Kafka clusters.
- **Analytics integration:** The stream feeds real-time processors, data exploration, machine learning features, or a cold path for batch analysis.
- **Workload boundary:** The payload is telemetry, log, clickstream, market, or other stream data rather than a command that requires per-message business settlement.

## Options considered

### Azure Service Bus

Use [Enterprise Messaging — Azure Service Bus](enterprise-messaging-azure-service-bus.md) for high-value business commands and work queues such as purchase orders, payment instructions, provisioning requests, and inventory updates. Service Bus provides queue and topic semantics, settlement, dead-letter queues, sessions, ordering, duplicate detection, scheduled delivery, and transactions. Event Hubs does not replace these capabilities.

### Azure Event Grid

Use [Event-Driven Integration — Azure Event Grid](event-driven-integration-azure-event-grid.md) for discrete state-change notifications such as a blob being created, a resource changing, an order completing, a device state notification, or a SaaS partner event. Event Grid routes notifications with filtering and push or pull delivery; Event Hubs retains and distributes a high-volume stream for independent consumers.

### Azure Data Factory, Fabric, Synapse, or batch data processing

Use [Azure Data Factory and Data Integration](../data-ai-integration/dai-azure-data-factory-and-data-integration.md), Fabric, Synapse, Spark, or another data platform for bulk movement, large joins, historical transformations, warehouse loading, and analytical batch processing. Event Hubs can provide the streaming ingress or Capture output, but it is not the transformation engine or analytical system of record.

### Kafka cluster or another streaming platform

Use Event Hubs with Kafka compatibility when the workload needs Kafka producer or consumer protocol compatibility without operating a separate Kafka cluster. Choose a self-managed or another managed streaming platform when its ecosystem, topology, protocol, control, cross-cloud portability, or feature set is a documented requirement. Compare partition behavior, retention, schema governance, security, operations, and cost rather than assuming protocol compatibility means full feature equivalence.

### Direct API calls or storage polling

Direct calls are appropriate when a caller needs a synchronous response, validation, or a single current-state read. Polling a database, blob store, or API for every data point adds delay and source load and does not provide independent consumer offsets. Use Event Hubs when the source produces a continuous stream that multiple consumers need to process independently.

### Selected direction: Azure Event Hubs

Use Event Hubs for high-volume, low-latency, append-oriented streams. Partition the stream by a key that preserves the required per-key ordering while distributing load. Give each logically independent application a consumer group, checkpoint progress in an approved store, and use retention or Event Hubs Capture according to the recovery and analytical requirements.

## Reference architecture

![Real-time streaming architecture with Azure Event Hubs](../../assets/real-time-streaming-event-hubs-architecture.svg)

Devices, applications, security tools, market-data sources, and Kafka clients publish events to an Event Hubs namespace. Event hubs are partitioned append-only logs. Stream processors consume through independent consumer groups, track offsets, and produce operational or analytical outputs. Event Hubs Capture writes a cold-path copy to Blob Storage or Data Lake Storage for long-term retention or batch analysis.

Service Bus and Event Grid appear as adjacent boundaries, not as interchangeable components. A business command should be published to Service Bus, and a discrete state-change notification should be published to Event Grid. Event Hubs is the correct center of gravity for the high-volume stream.

The [real-time event processing reference architecture](https://learn.microsoft.com/en-us/azure/stream-analytics/stream-analytics-real-time-event-processing-reference-architecture) shows the common pattern of Event Hubs ingestion followed by real-time processing and downstream analytical or operational destinations. Adapt it to the organization’s identity, network, partitioning, schema, retention, and failure requirements.

## Stream model and contracts

### Append-only event stream

An event hub is a distributed append-only log. Producers append events; consumers read the stream and maintain their own position. A consumer’s progress does not remove an event for other consumers, and one consumer group’s checkpoint does not advance another consumer group’s checkpoint.

The stream contract MUST define:

- event type, producer, source, and schema version;
- event ID, event time, ingestion time, and correlation or trace ID;
- partition key and the business ordering guarantee it provides;
- payload size, encoding, compression, and data classification;
- duplicate, late, out-of-order, correction, and tombstone behavior;
- retention and replay horizon;
- consumer-group ownership and checkpoint behavior; and
- authoritative source or reference for current state where the stream is not the system of record.

The stream should represent facts, measurements, logs, or state observations. Do not hide a transactional command contract in a telemetry stream. If an event instructs one worker to perform an irreversible action and requires settlement or a durable dead-letter path, publish a command to Service Bus instead.

### Event envelope

Use a versioned event envelope that is consistent across producers. At minimum, include:

- `eventId`: unique event identifier from the source;
- `eventType`: semantic event name or measurement category;
- `schemaVersion`: compatible schema version;
- `source`: producer, device, application, or system;
- `eventTime`: time the event occurred at the source;
- `ingestTime`: time the platform accepted the event where available;
- `partitionKey`: key used to select the partition;
- `correlationId` or trace context where a request or operation exists;
- `tenant`, site, device, account, or organizational scope where applicable;
- `dataClassification`: handling and retention classification; and
- `payload` or an approved claim-check reference.

Event time and ingestion time are different. Stream processors MUST define how they handle clock skew, late data, duplicate data, and events that arrive after a processing window. Do not use an untrusted device timestamp as proof of financial or security chronology without source validation.

### Schema governance

Schemas MUST be versioned and discoverable. Use Azure Schema Registry or an approved schema catalog when it provides the required protocol and serialization support. Avro, JSON, Protobuf, and other formats MAY be used according to the client and processing ecosystem.

Additive changes SHOULD preserve existing consumers. Breaking changes require a new schema version, compatibility boundary, migration plan, or parallel stream. Consumers MUST tolerate unknown fields and validate required fields before processing. A producer MUST NOT silently change units, timestamp semantics, partition-key meaning, or identifier format.

Maintain a stream catalog containing the event hub, source, event type, schema, partition key, expected rate, retention, consumer groups, destinations, data classification, owner, cost center, SLO, and retirement date.

## Partitions, ordering, and scale

### Partition selection

Partitions are independent ordered sequences. Event Hubs can preserve order for events sent to the same partition, but it does not provide one global order across all partitions. Choose a partition key such as device ID, account ID, session ID, security principal, market instrument, or other business stream key when related events must be processed in order.

The partition key SHOULD:

- keep all events that require ordering in the same partition;
- distribute active keys across partitions sufficiently to avoid a hot partition;
- remain stable for the life of the ordering contract;
- avoid embedding sensitive data directly in routing metadata; and
- be documented so every producer uses the same semantics.

Do not partition by a high-cardinality value merely because it looks unique if the client or service hashes it into a hot distribution. Do not partition all events by one tenant, region, or application if that creates a single hot partition. Conversely, do not use random round-robin partitioning when a consumer requires per-device or per-account order.

### Consumer groups

Create one consumer group for each logically independent application or processing view. Examples include real-time alerting, security detection, operational dashboarding, feature generation, cold-path capture, and audit export. Each consumer group reads the same event hub independently and maintains its own offset.

Do not create a consumer group for every transient deployment instance or team experiment in production. Consumer groups are a governance, scale, and cost boundary. Define ownership, expected lag, retention needs, access permissions, and retirement behavior for each group.

Within a consumer group, use a supported event processor or equivalent coordination model to distribute partitions across instances. Consumers MUST handle partition ownership changes, instance loss, rebalancing, checkpoint latency, and temporary duplicate processing.

### Throughput and capacity

Capacity planning MUST include ingress and egress volume, event size, batch size, producer count, consumer-group count, partition count, protocol, peak burst, retention, capture, processing latency, and downstream throughput. Model normal traffic, reconnect storms, regional recovery, consumer catch-up, and replay load.

Avoid scaling producers and consumers without considering partition availability and downstream capacity. More consumers in one consumer group do not create more parallelism than the group’s assigned partitions. A consumer that falls behind may need more partitions, more instances, optimized processing, reduced per-event work, or a separate stream.

Use batching and asynchronous clients where supported. Apply backpressure at the producer or processing boundary when downstream systems cannot accept the stream rate. Do not use unbounded in-memory buffering to hide a persistent capacity mismatch.

## Consumption, offsets, and replay

### Checkpointing

A consumer checkpoint records the position it has durably processed. Checkpoint only after the consumer has completed or durably recorded the result for the selected processing boundary. Checkpointing before a side effect can lose work; checkpointing only after a side effect can create duplicate processing after a crash. The handler MUST be idempotent or use an atomic application pattern appropriate to the destination.

Checkpoint data should include consumer group, event hub, partition, offset or sequence, processing version, timestamp, and outcome where needed for audit or replay. Protect checkpoints with identity and access controls and monitor checkpoint age.

### At-least-once processing

Design consumers for at-least-once delivery. A crash after a side effect and before a checkpoint can cause the event to be processed again. Use event ID deduplication, an inbox record, unique business key, upsert, source version check, or another idempotent operation before a non-repeatable side effect.

Event Hubs does not provide Service Bus-style duplicate detection or a transactional receive-and-settle operation. A consumer’s checkpoint is not a distributed transaction with a database, API, SaaS system, or file store. Use an outbox, idempotent sink, reconciliation job, or durable work queue when cross-system consistency matters.

### Replay and backfill

Use retained offsets or timestamps to replay events after consumer recovery, bug fixes, new consumer onboarding, data correction, or analytical backfill. A replay SHOULD use a separate consumer group or an explicitly isolated checkpoint path so it does not move the production consumer position unintentionally.

Before replay, define:

- starting timestamp, offset, partition set, and stopping condition;
- consumer code and schema version;
- destination and whether side effects are read-only, upserted, or compensating;
- rate limit and downstream capacity;
- duplicate and stale-event behavior;
- monitoring, audit, and operator ownership; and
- reconciliation evidence and rollback or correction procedure.

Retention is not an unlimited archive. Use Capture or another approved cold path for the retention period, legal hold, audit, or analytical history required by the business. Do not promise replay beyond the configured retention or capture availability.

## Workload scenarios

### IoT telemetry

Use Event Hubs to ingest measurements from devices, gateways, vehicles, and industrial systems when the data is high-volume, time-oriented, and processed by multiple consumers. Partition by device, site, vehicle, or another key that matches ordering and load distribution. Validate device identity, timestamp quality, units, calibration, and data classification before analytics.

Use IoT Hub or another device-management service when the workload requires device identity lifecycle, twin state, command delivery, device provisioning, or device-specific management features. Event Hubs can remain the streaming ingress or downstream processing boundary.

### Application and security logs

Use Event Hubs to centralize high-volume application, infrastructure, network, audit, and security logs for streaming detection, dashboards, correlation, and export to analytics or SIEM platforms. Define source identity, timestamp normalization, severity, tenant, retention, redaction, and chain-of-custody requirements.

Do not treat log ingestion as proof that an application action was authorized or completed. The application, identity provider, and authoritative audit store retain responsibility for business or security evidence. Protect sensitive fields and prevent log amplification during an incident.

### Clickstreams

Use Event Hubs for page views, clicks, sessions, feature interactions, and other behavioral events that feed near-real-time dashboards, experimentation, personalization, or data science. Define bot filtering, consent, privacy, tenant, user identifier, and retention policies before publishing click data.

Keep clickstream events separate from transactional order or payment commands. A click may be duplicated, delayed, or omitted; it should not be the authoritative record for a financial or fulfillment state.

### Financial market data

Use Event Hubs for high-volume market data, pricing updates, order-book observations, fraud signals, or risk inputs when the stream’s ordering, latency, retention, and replay model meets the business requirement. Partition by instrument, venue, account, or another key that reflects the required ordering.

Financial workloads MUST separately define clock synchronization, sequence numbers, gap detection, late-data behavior, immutable storage, reconciliation, access controls, encryption, and regulatory retention. Event Hubs ingestion does not by itself provide exchange-grade ordering, exactly-once processing, transaction settlement, or a legally sufficient record.

### Near-real-time analytics

Use Event Hubs with Stream Analytics, Data Explorer, Fabric, Spark, Flink, Functions, or another approved processor for windows, aggregations, anomaly detection, alerts, and operational dashboards. Design both the hot path for rapid insight and the cold path for replay, backfill, audit, and historical analysis.

Define event-time windows, watermarking, lateness, state checkpointing, aggregation correction, and sink idempotency. A dashboard result is an analytical view, not necessarily authoritative business state.

### Kafka-compatible ingestion

Use the Kafka endpoint when existing Kafka producers, consumers, connectors, or frameworks are a significant investment and Event Hubs provides the needed compatibility. Validate authentication, topic-to-event-hub mapping, partition semantics, consumer groups, offsets, headers, compression, quotas, client versions, and unsupported Kafka features.

Kafka protocol compatibility reduces migration effort but does not make Event Hubs a self-managed Kafka cluster. The service’s partition, retention, throughput, namespace, networking, monitoring, and operational model remain Azure Event Hubs concepts. Test the full producer-to-consumer path with representative client versions and failure behavior.

## Capture and analytical storage

Use Event Hubs Capture to write the stream to Blob Storage or Data Lake Storage for long-term retention, batch analytics, recovery, and cold-path processing. Capture enables the real-time and batch paths to use the same incoming stream while keeping the event hub’s hot retention window separate from the analytical archive.

Capture is not a substitute for an analytical data model, governance catalog, lifecycle policy, legal hold, or validated archive. Define file format, partitioning, capture interval, storage account, managed identity, encryption, path convention, schema, late-arrival handling, retention, and downstream ingestion.

Captured files and hot-stream processing can have different timing and completeness. Consumers MUST define whether a file is a processing trigger, a batch boundary, or merely an archive artifact. Monitor capture lag, file arrival, empty or partial intervals, storage authorization, and downstream processing state.

## Security and network architecture

Use Microsoft Entra managed identities or workload identity for producers, consumer applications, Capture destinations, processors, and operators where supported. Scope permissions to the exact namespace, event hub, consumer group, storage container, schema artifact, or processing resource required. Separate publish, consume, manage, checkpoint, capture, and replay permissions.

For Kafka clients, use the supported Microsoft Entra or SAS authentication model according to the client and compatibility requirements. Store SAS keys, certificates, connection strings, and client secrets in Key Vault or an approved secret-management service. Rotate credentials with an overlap, validation, and rollback procedure.

For sensitive or internal streams:

- use private endpoints, approved private DNS, network rules, firewalls, and egress controls where required;
- restrict namespace and event-hub access by identity, network, topic, consumer group, and environment;
- validate source authentication, tenant or site scope, event schema, and data classification before accepting events;
- encrypt payloads in transit and at rest and use customer-managed keys where required;
- redact tokens, credentials, personal data, payment data, secrets, and unnecessary payload fields from logs and diagnostics;
- separate production, non-production, restricted, and partner streams according to trust and lifecycle boundaries; and
- audit namespace, event hub, partition, consumer group, network, identity, capture, schema, and replay changes.

Network reachability does not authorize publishing or consuming a stream. Consumer groups and offsets do not authorize a business action. Every handler remains responsible for authentication, authorization, tenant isolation, input validation, and safe downstream side effects.

## Performance, cost, and workload boundaries

Plan cost and capacity around throughput units or processing units, dedicated capacity where applicable, partition count, event size, ingress, egress, consumer groups, protocol, Capture, storage, private endpoints, cross-region traffic, telemetry, and replay. Include peak bursts, producer reconnects, consumer catch-up, disaster recovery, and backfill in the model.

Event Hubs is suitable for high-volume stream ingestion and distribution. It is not the correct engine for:

- one-at-a-time business work requiring lock, settlement, or dead-letter semantics;
- transactional coordination across a database and external services;
- sessions or global FIFO ordering;
- discrete notification routing where Event Grid filtering and push delivery are the dominant need;
- large analytical joins or batch transformations; or
- arbitrary business logic, stateful application behavior, or a system of record.

Use Service Bus, Event Grid, Data Factory, Fabric, Synapse, Stream Analytics, Functions, or an application runtime according to the dominant requirement. Event Hubs can feed those components as the streaming boundary.

## Deployment and lifecycle

Manage namespaces, event hubs, partitions, authorization rules, private endpoints, network rules, consumer groups, Capture, schemas, alerts, processors, and downstream bindings as versioned deployment inputs. Environment-specific endpoints and secrets MUST come from approved configuration and secret stores.

Each stream release SHOULD include:

- producer and consumer contract tests with representative event sizes and rates;
- partition-key, ordering, hot-partition, batching, and throughput tests;
- checkpoint, crash-after-side-effect, duplicate, restart, rebalancing, lag, and replay tests;
- schema compatibility, malformed event, late event, timestamp, and version tests;
- network, identity, private DNS, Kafka compatibility, Capture, and storage authorization tests;
- downstream throttling, processor outage, sink failure, and backpressure tests;
- alert, dashboard, runbook, support-owner, and data-catalog updates; and
- capacity, retention, replay, cost, and recovery reviews.

Partition-count, partition-key, schema, retention, consumer-group, and protocol changes can affect existing producers and consumers. Define migration, dual-publish, replay, parallel-consumer, and decommission procedures before making a breaking change.

## Observability and operations

The streaming platform team owns approved Event Hubs namespaces, capacity, networking, identity patterns, partitioning standards, retention, Capture, telemetry, and platform runbooks. Source teams own event meaning, schema, production rate, partition-key contract, data quality, and source availability. Consumer teams own processing correctness, checkpoints, lag, idempotency, destinations, SLOs, and replay. Security and governance teams define access, data protection, retention, audit, and exception requirements.

Every production stream should have an operational record containing the namespace, event hub, source, event types, schema, partition key, expected and peak volume, retention, Capture destination, consumer groups, downstream processors, data classification, owner, SLO, cost center, support path, and retirement or review date.

Monitor at least:

- ingress and egress volume, event count, batch size, event size, throughput, throttling, and errors;
- partition utilization, hot partitions, partition distribution, capacity, quota, and scaling state;
- consumer-group lag, checkpoint age, partition ownership, rebalancing, processing latency, and backlog;
- duplicate, malformed, late, stale, out-of-order, rejected, and schema-incompatible events;
- producer authentication, authorization, connection, retry, timeout, and protocol failures;
- processor success, failure, duration, state-store health, sink latency, throttling, and output freshness;
- Capture file age, interval, size, storage authorization, path, schema, and downstream ingestion status;
- Event Hubs namespace, event hub, private endpoint, network, DNS, identity, certificate, and region health;
- replay, backfill, consumer-group creation, checkpoint reset, partition, retention, and configuration changes; and
- downstream Service Bus backlog, Event Grid delivery, Functions failures, Logic Apps runs, and analytical query freshness where the stream hands off work.

Runbooks should cover producer outage, reconnect storm, hot partition, quota exhaustion, namespace or region failure, consumer lag, checkpoint corruption, duplicate side effect, schema regression, Kafka client failure, Capture storage outage, processor state loss, sink throttling, controlled replay, backfill, and stream retirement.

## Validation

- [ ] The workload is high-volume, low-latency streaming and is not a transactional business work queue or discrete notification route.
- [ ] The service selection distinguishes Event Hubs from Service Bus for business commands and reliable work queues and from Event Grid for discrete state-change notifications.
- [ ] The stream catalog defines source, event types, schema, owner, classification, expected rate, peak rate, retention, consumers, and replay policy.
- [ ] Partition count, partition key, per-key ordering guarantee, hot-key behavior, and scale assumptions are documented and tested.
- [ ] Producers use stable schemas, bounded event sizes, batching, backpressure, authentication, and retry behavior.
- [ ] Each independent application has an owned consumer group, checkpoint store, permission scope, lag SLO, and retirement plan.
- [ ] Consumers are idempotent and tested for duplicate delivery, crash after side effect, restart, rebalancing, late data, and out-of-order data.
- [ ] Checkpoint timing, offset reset, replay source, replay rate, downstream capacity, audit evidence, and reconciliation are documented.
- [ ] Event-time, ingestion-time, clock skew, watermark, lateness, aggregation correction, and sink idempotency behavior are defined where analytics use them.
- [ ] Event Hubs Capture or another approved cold path meets historical retention, replay, batch analytics, data quality, and legal evidence requirements.
- [ ] Kafka compatibility, protocol, client version, authentication, offsets, partition semantics, headers, quotas, and unsupported features are tested where applicable.
- [ ] Identity, private networking, DNS, firewalls, encryption, keys, secrets, tenant isolation, payload redaction, and audit controls are verified.
- [ ] Capacity, burst, consumer catch-up, producer reconnect, downstream throttling, region failure, and cost behavior are tested.
- [ ] Large analytical transformations, durable business commands, transactions, sessions, queue settlement, and application logic are delegated to purpose-fit services.
- [ ] Dashboards, alerts, stream-catalog evidence, support contacts, consumer-lag thresholds, cost limits, replay controls, and runbooks are ready before production.

## Related topics

- [Enterprise Messaging — Azure Service Bus](enterprise-messaging-azure-service-bus.md)
- [Event-Driven Integration — Azure Event Grid](event-driven-integration-azure-event-grid.md)
- [Serverless Custom Integration — Azure Functions](serverless-custom-integration-azure-functions.md)
- [Workflow Orchestration — Azure Logic Apps](workflow-orchestration-azure-logic-apps.md)
- [Azure Data Factory and Data Integration](../data-ai-integration/dai-azure-data-factory-and-data-integration.md)

## References

- [What is Azure Event Hubs](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about)
- [Choose between Azure Event Grid, Event Hubs, and Service Bus](https://learn.microsoft.com/en-us/azure/service-bus-messaging/compare-messaging-services)
- [Asynchronous messaging options in Azure](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/messaging)
- [Capture streaming events with Azure Event Hubs](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-capture-overview)
- [Azure Event Hubs for Apache Kafka](https://learn.microsoft.com/en-us/azure/event-hubs/azure-event-hubs-kafka-overview)
- [Reference architecture: Real-time event processing with Azure Stream Analytics](https://learn.microsoft.com/en-us/azure/stream-analytics/stream-analytics-real-time-event-processing-reference-architecture)
