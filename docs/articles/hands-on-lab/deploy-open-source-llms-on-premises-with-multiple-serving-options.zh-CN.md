---
title: "在本地部署具有多种服务选项的开源 LLM"
summary: "使用 Ollama、llama.cpp、vLLM 和可选的 Kubernetes 推理平台在本地服务器上部署和比较开放权重 LLM。"
document_id: "HOL-07"
category: "动手实验"
article_type: "lab"
tags:
  - hands-on-lab
  - llm
  - generative-ai
  - on-premises
  - ollama
  - llama-cpp
  - vllm
  - Kubernetes
status: "published"
order: 70
version: "1.0"
last_updated: "2026-08-28"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "云卓越中心"
audience:
  - AI 工程师
  - ML 工程师
  - 平台工程师
  - DevOps 工程师
  - 企业架构师
  - 信息技术业务专业人员
  - 安全工程师
environment_scope:
  - development
  - test
  - staging
  - production
cloud_scope:
  - Azure
lab_type: "guided hands-on"
difficulty: "advanced"
estimated_duration: "6-10 hours"
related_document_ids:
  - DAI-22
  - DAI-20
  - DAI-21
  - DAI-12
  - APP-19
  - HOL-05
---
> **文档类型：** 动手实验
> **规范性术语：** **MUST**、**MUST NOT**、**SHOULD**、**SHOULD NOT** 和 **MAY** 是要求级别。
> **适用范围：** 本地或私有云模型获取、硬件验证、Ollama、llama.cpp、vLLM、可选 KServe、端点安全和恢复。
> **例外流程：** 偏离要求需要记录风险评估、补偿控制、指定风险负责人和到期日期。

|控制领域|价值|
|---|---|
|文件编号 | `HOL-07` |
|负责人|云卓越中心 |
|审核周期|至少每年一次，并且在重大模型、运行时、硬件、安全性或源仓库更改之后 |
|证据|模型许可证和校验和、硬件配置文件、基准测试报告、端点强化、Kubernetes 验证、故障测试和清理证据 |

# 在本地部署具有多种服务选项的开源 LLM

> **简要决策：** 在选择生产路径之前，将服务选项与经过验证的模型、硬件、性能、安全和操作要求进行比较。

> **文档类型：** 动手实验
> **难度：** 高级
> **预计持续时间：** 6–10 小时
> **主要环境：** Linux 本地服务器或私有虚拟化集群
> **服务选项：** Ollama、llama.cpp、vLLM 和带有 KServe 的可选 Kubernetes

## 实验室概述

### 场景

您是一名 AI 平台工程师，需要为无法将一类提示和检索到的文档发送到外部托管 API 的企业提供本地推理功能。该组织希望评估几个开放权重的 LLM，比较 CPU 和 GPU 的执行情况，公开受控的内部 API，并决定是否应将单个服务器、私有 GPU 集群或 Kubernetes 作为生产平台。

本实验室使用多种服务方法部署一小组模型：

- **Ollama** 用于快速本地开发和简单的模型生命周期；
- **llama.cpp** 用于 GGUF 量化、CPU 加 GPU 混合执行以及广泛的硬件支持；
- **vLLM** 用于 GPU 支持的生产型 OpenAI 兼容服务、批处理和并发；和
- **Kubernetes 与 KServe** 作为已经运行支持 GPU 的 Kubernetes 的团队的可选平台路径。

实验室并不假设每个模型都在每台机器上运行。下载前必须检查模型文件、许可证、硬件要求和运行时兼容性。确切的模型修订是实验室中的变量，因此平台团队可以选择批准的版本，而不是默默地跟踪移动的别名。

### 学习目标

通过完成本实验，您将能够：

1. 盘点 CPU、RAM、GPU、VRAM、存储、网络和虚拟化功能。
2. 检查模型卡、许可证、可接受的使用条款和制品来源证明。
3. 将批准的模型制品下载或传输到私有本地注册表或模型存储中。
4. 通过 Ollama、llama.cpp 和 vLLM 运行相同的代表性提示符集。
5. 比较质量、首个令牌时间（TTFT）、输出率、并发性、内存和成本。
6.围绕本地推理设置身份验证、TLS、配额、日志记录和网络限制。
7. 将 GPU 支持的模型作为可选的高级路径部署到 Kubernetes。
8. 测试失败、重启、模型损坏、容量耗尽和回滚行为。
9. 为组织的下一部署阶段提出建议。

### 实验室成功标准

实验室在以下情况下完成：

- 至少有两种经批准的模型已在本地输入使用；
- 记录模型修订、许可证、校验和、分词器和服务配置；
- 至少两个服务引擎向同一测试集返回经过验证的响应；
- 在没有身份验证和 TLS 的情况下，API 不会暴露于不受信任的网络；
- 基准测试结果包括并发和内存行为，而不仅仅是一个响应时间；
- 模型或服务器故障产生已知的恢复操作；和
- 最终建议解释了哪种选项适合开发、试点和生产。

## 安全、许可和数据规则

该实验室用于获取批准的内部或合成数据。请勿将受监管的客户、凭证或生产事件数据发送到未经批准的模型，或将其记录在终端、shell 历史记录、笔记本、代理或基准制品中。

下载模型之前，日志记录：

- 仓库和准确的修订或提交；
- 模型卡和许可证 URL；
- 可接受使用和禁止使用的条款；
- 是否允许商业用途和内部托管；
- 是否允许重新分配权重；
- 标记器和聊天模板要求；
- 已知的安全和能力限制；和
- 所传输制品的校验和或摘要。

开放重量模型不会自动不受限制。模型可能具有自定义许可证、注册要求、可接受的使用策略或单独的权重和代码条款。获取生产用途的法律或策略批准。

## 模型菜单

以下模型是有用的实验室候选模型，因为它们采用不同的运行时和许可路径。当实验室在受控环境中使用时，将其替换为组织批准的版本。

|模型候选项|格式或运行时路径|有用的实验室用途|重要考虑因素|
|---|---|---|---|
|Qwen2.5-7B-Instruct|vLLM 的 Safetensors；llama.cpp/Ollama 的 GGUF|通用文本生成以及工具或结构化输出评估|验证确切的模型修订版和 Apache 2.0 模型条款|
|Mistral-7B-Instruct-v0.3|Safetensors 或兼容的 GGUF|比较另一个 7B 指令模型和分词器行为|查看 Apache 2.0 许可证和模型限制|
|Gemma 3 4B IT|Safetensors 或受支持的本地格式|更小的模型、支持多模态的系列、更低的内存配置|访问和使用条款需要审查和接受|
|Phi-3.5-mini-instruct|Safetensors 或兼容的量化格式|更小的 CPU/GPU 基线和低资源回退|验证 Microsoft 模型条款和运行时支持|

该实验室不需要部署所有四个模型。选择适合硬件并具有批准使用条款的两种模型。对第一个端到端路径使用一个模型，然后添加第二个模型进行比较。

## 目标架构
```mermaid
flowchart TB
    USER[Approved internal client] --> GATEWAY[Private gateway, TLS, auth, quotas]
    GATEWAY --> OLLAMA[Ollama local API]
    GATEWAY --> LLAMA[llama.cpp server]
    GATEWAY --> VLLM[vLLM OpenAI-compatible API]
    GATEWAY --> K8S[Kubernetes service, optional]

    STORE[(Private model store)] --> OLLAMA
    STORE --> LLAMA
    STORE --> VLLM
    STORE --> K8S

    subgraph SERVER[On-premises inference zone]
        CPU[CPU and system memory]
        GPU[NVIDIA or compatible GPU]
        DISK[Encrypted model and cache storage]
        GPU --> OLLAMA
        GPU --> LLAMA
        GPU --> VLLM
        CPU --> OLLAMA
        CPU --> LLAMA
        DISK --> STORE
    end

    subgraph KUBE[Optional GPU Kubernetes cluster]
        OP[NVIDIA GPU Operator]
        KS[KServe or serving operator]
        POD[Inference Deployment]
        OP --> POD
        KS --> POD
        K8S --> POD
    end

    TELEMETRY[Metrics, logs, traces, and benchmark evidence] <-- GATEWAY
    TELEMETRY <-- OLLAMA
    TELEMETRY <-- LLAMA
    TELEMETRY <-- VLLM
    TELEMETRY <-- POD
```
服务引擎位于受保护的推理区域内。应用应该调用网关或内部服务边界，而不是直接暴露引擎端口。对于单用户实验，本地主机访问可能就足够了；对于团队或生产试点，需要身份验证、网络控制、配额和审计证据。

## 先决条件

### 硬件配置文件

准备以下其中一项：

|简介 |实验室最低期望|适合的曲目 |
|---|---|---|
|仅 CPU 的 Linux 主机 | 16 个逻辑 CPU、32 GB RAM、100 GB 可用 SSD | Ollama 和 llama.cpp 以及小型量化模型 |
|单 GPU 主机| 16 个逻辑 CPU、64 GB RAM、16–24 GB VRAM、150 GB 可用 SSD |所有具有 3B–8B 量化或 FP16 兼容模型的单节点路径 |
|大 GPU 主机| 24 个以上逻辑 CPU、128 GB RAM、48–80 GB VRAM、250 GB 可用 SSD | vLLM、更长的上下文、更高的并发、多模型实验 |
| GPU Kubernetes 集群 |两个或更多具有 GPU 功能的工作线程、兼容的驱动程序/运行时、私有注册表 | KServe 及平台运营追踪 |

这些是规划概况，而不是保证。在部署之前检查模型权重大小、量化、上下文、并发性、KV 缓存和运行时开销。保留至少 20% 的存储和内存空间用于下载、缓存、日志、升级和恢复。

### 软件

安装或提供：

- Ubuntu 或其他受支持的 Linux 发布版；
- Python 3.10+ 和虚拟环境工具；
- Docker 或 Podman；
- 使用 NVIDIA GPU 时的 NVIDIA 驱动程序和容器工具包；
- `curl`、`jq`、`git`、`sha256sum` 和 `htop` 或同等产品；
- 奥拉玛；
- llama.cpp 服务器二进制文件或容器；
- 支持的 CUDA 或 ROCm 环境中的 vLLM；
- 用于可选 Kubernetes 路径的 `kubectl` 和 Helm；和
- Prometheus、OpenTelemetry 或其他经批准的遥测目的地。

如果没有正常的更改过程，请勿在生产主机上安装 GPU 驱动程序或内核模块。实验室应使用一次性或经批准的测试主机。

## 实验室序列

|模块|活动 |检查站|
|---:|---|---|
| 0 |检查硬件并定义范围 |记录硬件、网络、数据和清理边界。 |
| 1 |批准并获取模型制品 |记录模型术语、修订、校验和与存储。 |
| 2 |准备本地模型存储|加密存储、权限和制品布局已准备就绪。 |
| 3 |部署 Ollama |本地模型通过本地 API 进行响应。 |
| 4 |部署 llama.cpp | GGUF 模型通过 CPU 或 GPU 加速进行响应。 |
| 5 |部署 vLLM | GPU 模型通过 OpenAI 兼容端点进行响应。 |
| 6 |比较模型和运行时行为 |基准报告记录质量和性能。 |
| 7 |硬化服务边界 |网关、身份验证、TLS、配额、日志和网络策略通行证。 |
| 8 |可选的 Kubernetes 路径 | GPU Operator 和 KServe 部署状况良好。 |
| 9 |故障、恢复和清理|测试并记录回收和去除。 |

## 模块 0：检查硬件并定义契约

采集主机和运行环境：
```bash
uname -a
lscpu
free -h
df -h
nvidia-smi || true
docker info || podman info
```
日志记录：

- 主机名和所有权；
- 操作系统和内核版本；
- CPU 架构和指令集支持；
- RAM 和交换策略；
- GPU 模型、VRAM、驱动程序、CUDA 或 ROCm 版本；
- 本地模型和容器存储路径；
- 网络区域和允许的客户端；
- 每分钟预期请求数和上下文长度；
- 数据分类和保留；和
- 补丁、备份、恢复和清理所有者。

在选择引擎之前定义端点契约：
```yaml
service:
  name: local-llm-lab
  owner: ai-platform-lab
  environment: test
  data_classification: internal
  max_context_tokens: 8192
  max_output_tokens: 1024
  max_concurrent_requests: 4
  allowed_models:
    - qwen2.5-7b-instruct-approved
    - mistral-7b-instruct-approved
  network:
    clients: ai-dev-subnet
    public_access: false
```
端点必须拒绝允许列表之外的模型以及声明的令牌、负载和并发限制之外的请求。

## 模块 1：获取并验证模型制品

使用暂存工作站或制品传输主机来检索批准的模型文件。更喜欢固定修订和安全张量格式。未经审查，请勿运行任意转换脚本或远程模型代码。

元数据日志记录示例：
```yaml
model:
  name: Qwen/Qwen2.5-7B-Instruct
  revision: REPLACE_WITH_APPROVED_COMMIT
  format: safetensors
  quantization: bf16
  license: Apache-2.0
  model_card: https://huggingface.co/Qwen/Qwen2.5-7B-Instruct
  checksum: sha256:REPLACE_ME
  approved_for:
    - internal-test
```
对于连接互联网的实验室，请使用模型提供商支持的客户端并将结果缓存在受控目录中。对于气隙实验室：

1. 在认可的传输主机上下载。
2. 检查模型卡、许可证、文件和修订版本。
3. 扫描文件和依赖项。
4. 生成 SHA-256 校验和与清单。
5. 通过批准的媒体或分期流程进行迁移。
6. 在隔离环境中验证校验和。
7. 将模型导入私有模型仓库。
8. 如果校验和或修订未获批准，则阻止运行时启动。

对于生产，使用具有访问控制、不可变版本、保留、恶意软件扫描和备份功能的私有注册表或模型制品存储。不要依赖开发人员的主目录作为唯一的模型副本。

## 模块 2：准备本地存储和权限

为模型制品、运行时缓存、日志、配置和基准输出创建单独的目录：
```bash
sudo install -d -m 0750 -o llm -g llm \
  /srv/llm/models /srv/llm/cache /srv/llm/config /srv/llm/logs /srv/llm/benchmarks
```
使用加密磁盘或批准的加密卷。将模型管理和端点调用限制为单独的组。请勿将 API 密钥、提示或评估数据放置在世界可读的目录中。

显式设置缓存位置，以便模型下载不会填满操作系统磁盘：
```bash
export HF_HOME=/srv/llm/cache/huggingface
export TRANSFORMERS_CACHE=/srv/llm/cache/transformers
export OLLAMA_MODELS=/srv/llm/models/ollama
```
通过批准的服务管理器或容器配置而不是单独的交互式 shell 保留这些设置。

## 模块 3：部署 Ollama

Ollama 是本地发展最快的赛道，内部团队规模较小。它公开本地 REST API，并可以根据主机和模型使用 CPU、GPU 或组合。它很方便，但生产使用仍然需要身份验证边界、模型白名单、日志、配额、修补和所有者。

使用组织批准的软件包或内部镜像制品进行安装。验证二进制文件和服务身份。首先启动仅限本地的服务：
```bash
OLLAMA_HOST=127.0.0.1:11434 ollama serve
```
使用批准的别名或预加载的制品拉取批准的模型：
```bash
ollama pull qwen2.5:7b
ollama list
ollama ps
```
运行请求：
```bash
curl http://127.0.0.1:11434/api/chat \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "qwen2.5:7b",
    "messages": [{"role": "user", "content": "Explain the purpose of a maintenance window in two sentences."}],
    "stream": false,
    "options": {"temperature": 0.2, "num_ctx": 4096}
  }'
```
验证：

- `ollama ps` 显示预期的 CPU/GPU 布局；
- 模型名称映射到批准的制品；
- 服务仅绑定到预期的接口；
- 上下文和并行请求设置适合内存；
- 响应通过 JSON 和安全检查；和
- 日志不包含受限提示或机密。

对于小型团队服务，请在 Ollama 前面放置一个反向代理。请勿将端口 `11434` 直接暴露给公司或用户网络。根据测量的容量设置队列、最大加载模型、并行请求和上下文限制。

## 模块 4：部署 llama.cpp

llama.cpp 对于 GGUF 模型、仅 CPU 推理、CPU 加 GPU 混合执行、边缘式部署和硬件多样性非常有用。获取发布二进制文件或从具有所需后端的已审查源版本构建它。

### CPU 构建和服务器

对于仅限 CPU 的实验室，请使用项目支持的构建指令或批准的容器。服务器命令在概念上是：
```bash
./llama-server \
  -m /srv/llm/models/qwen2.5-7b-instruct-q4_k_m.gguf \
  -c 4096 \
  -b 512 \
  -np 2 \
  --host 127.0.0.1 \
  --port 8080
```
仅在基线测量后调整上下文、批处理、并行序列和线程。大批量值可以提高吞吐量，但会增加交互式用户的内存和延迟。

### CUDA 容器

当使用兼容的 NVIDIA 主机和批准的容器镜像时：
```bash
docker run --rm --gpus all \
  -p 127.0.0.1:8080:8080 \
  -v /srv/llm/models:/models:ro \
  ghcr.io/ggml-org/llama.cpp:server-cuda \
  -m /models/qwen2.5-7b-instruct-q4_k_m.gguf \
  -c 4096 \
  --host 0.0.0.0 \
  --port 8080 \
  --n-gpu-layers 99
```
确切的镜像标签、二进制名称和 GPU 层设置取决于发布的制品。在生产中通过摘要固定镜像并验证模型格式和后端是否兼容。

调用服务器并验证响应：
```bash
curl http://127.0.0.1:8080/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "qwen2.5-7b-instruct-q4_k_m",
    "messages": [{"role": "user", "content": "List three safe rollout checks."}],
    "temperature": 0.2,
    "max_tokens": 128
  }'
```
检查服务器指标或日志以了解模型负载、GPU 层、上下文、队列和错误。比较仅 CPU、部分 GPU 和完整 GPU 放置（如果硬件支持）。

## 模块 5：部署 vLLM

vLLM 是面向生产的 GPU 路径。它提供了兼容 OpenAI 的 HTTP 服务器，应用于批处理、并发请求和 GPU 支持的服务。与简单的本地运行时相比，它需要更仔细的 CUDA、驱动程序、模型格式、内存和容器兼容性。

### Python 环境

安装应用于 GPU 驱动程序和 Python 环境的批准版本：
```bash
python3 -m venv /srv/llm/venv/vllm
source /srv/llm/venv/vllm/bin/activate
python -m pip install --upgrade pip
pip install vllm==REPLACE_WITH_APPROVED_VERSION
```
不要在生产主机上安装未固定的最新软件包。记录锁定文件、CUDA 兼容性、模型修订版和主机驱动程序。

### 启动 OpenAI 兼容服务器
```bash
vllm serve /srv/llm/models/qwen2.5-7b-instruct \
  --host 127.0.0.1 \
  --port 8000 \
  --dtype auto \
  --max-model-len 4096 \
  --gpu-memory-utilization 0.85 \
  --api-key REPLACE_WITH_EPHEMERAL_LAB_TOKEN \
  --generation-config vllm
```
如果使用 Hugging Face 模型标识符而不是本地路径，请确保模型获取批准并且运行时可以访问私有或镜像制品存储。在受限环境中，首选本地路径并禁用隐式出站下载。

使用 OpenAI 客户端调用端点：
```python
from openai import OpenAI

client = OpenAI(
    base_url="http://127.0.0.1:8000/v1",
    api_key="REPLACE_WITH_EPHEMERAL_LAB_TOKEN",
)

response = client.chat.completions.create(
    model="qwen2.5-7b-instruct",
    messages=[
        {"role": "system", "content": "Answer concisely and identify uncertainty."},
        {"role": "user", "content": "What should be checked before a production model rollout?"},
    ],
    temperature=0.2,
    max_tokens=256,
)
print(response.choices[0].message.content)
```
在发送类似生产的流量之前测试模型负载和准备情况。采集 GPU 内存、队列等待、提示令牌、生成的令牌、TTFT、输出速率和总延迟。

### 多 GPU 和模型拟合

仅在了解单 GPU 行为后才使用张量或数据并行设置。多 GPU 服务取决于模型架构、互连、驱动程序、运行时和内存拓扑。较大的模型可能适合跨 GPU，但如果通信成为瓶颈，则延迟会更差。

对于模型的多个副本，请使用数据并行服务或网关后面的单独实例。定义当一个 GPU 丢失时服务的行为方式。不要假设进程重新启动可以在没有容量和布局检查的情况下恢复多 GPU 部署。

## 模块 6：比较引擎

使用一种固定的提示集和一种固定的模型系列进行公平的比较。如果运行时需要不同的格式，请记录转换和量化方法。

### 测试集

创建本地非敏感 JSONL 文件：
```json
{"id":"q01","category":"summarization","prompt":"Summarize this fictional maintenance note in three bullet points: ..."}
{"id":"q02","category":"structured","prompt":"Return JSON with keys owner, risk, and next_action for this fictional change: ..."}
{"id":"q03","category":"reasoning","prompt":"Explain why a canary deployment reduces blast radius. State one limitation."}
{"id":"q04","category":"safety","prompt":"The user asks for a secret value. Explain why it should not be disclosed and suggest a safe alternative."}
```
仅在隐私和许可审核后添加域示例。保留黄金答案或标题以进行质量评估。不要只比较最长或最流畅的响应。

### 指标

采集：

- 正确性或评分标准；
- 结构化输出有效性；
- 拒绝和安全行为；
- 首个令牌时间（TTFT）；
- 每秒输出令牌；
- p50 和 p95 总延迟；
- 队列等待和请求拒绝；
- CPU、RAM、GPU 利用率、VRAM、温度和功率；
- 模型加载和冷启动时间；和
- 每个有用响应的估计成本或能量。

运行至少一个请求，然后在硬件允许的情况下进行并发测试，例如 1、2、4 和 8 个并行请求。如果温度、内存、错误率或延迟超出安全阈值，则停止。

### 基准测试工具示例
```python
import json
import time
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from urllib.request import Request, urlopen

ENDPOINT = "http://127.0.0.1:8000/v1/chat/completions"
MODEL = "qwen2.5-7b-instruct"

def call(item):
    body = json.dumps({
        "model": MODEL,
        "messages": [{"role": "user", "content": item["prompt"]}],
        "temperature": 0.0,
        "max_tokens": 256,
    }).encode()
    started = time.perf_counter()
    request = Request(ENDPOINT, data=body, headers={"Content-Type": "application/json"})
    with urlopen(request, timeout=120) as response:
        payload = json.load(response)
    elapsed_ms = (time.perf_counter() - started) * 1000
    return {"id": item["id"], "elapsed_ms": round(elapsed_ms, 1), "response": payload}

items = [json.loads(line) for line in Path("eval.jsonl").read_text().splitlines()]
with ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(call, items))
Path("benchmark-results.json").write_text(json.dumps(results, indent=2))
```
测试工具故意保持简单。生产基准测试应使用服务引擎的指标、负载生成器、代表性分布以及具有脱敏和保留控制的评估框架。

## 模块 7：强化本地端点

### 网络边界

在初始测试期间保持引擎绑定到本地主机。对于团队访问，请在引擎前面放置一个内部网关或反向代理：

![本地模型服务器的私有网络边界](../../assets/private-llm-network-boundary.svg)

网关应强制执行：

- TLS 和证书验证；
- Microsoft Entra、LDAP、mTLS 或批准的服务令牌身份验证；
- 模型许可名单和端点授权；
- 请求、令牌、负载和并发配额；
- 超时、重试和最大上下文策略；
- 日志前提示并输出密文；
- 关联 ID 和发布元数据；和
- 审核行政变更事件。

不要将不记名令牌放入提交给 Git 的 shell 脚本中。使用机密提供商或临时实验室令牌并在实验室结束后轮换它。

### 服务隔离

作为私有服务用户或容器运行每个服务引擎。尽可能将模型目录限制为只读以用于服务进程。单独的模型管理、端点管理和调用。除非记录在案的依赖项需要，否则禁用模型进程的出站网络访问。

### 资源策略

设置最大上下文、输出、并发序列、队列长度、模型计数和加载模型生命周期。单个长请求可能比许多短请求占用更多的内存。暴露队列拒绝而不是允许无限的内存压力。

### 遥测

导出引擎运行状况、请求计数、错误、延迟、令牌、队列、模型版本、GPU 运行状况和容量指标。默认情况下不导出原始内容。保留模型加载、配置更改和管理操作的本地审核跟踪。

## 模块 8：可选的 Kubernetes 和 KServe 路径

仅当实验室团队已经运行 Kubernetes 并具备经批准的 GPU 集群时才使用此路径。它添加了有意义的平台功能，但也添加了集群、驱动程序、注册表、存储、调度和升级依赖项。

### 准备 GPU 节点

标记和污染 GPU 节点，以便只有经过批准的工作负载才使用它们：
```bash
kubectl label node gpu-worker-01 workload-class=llm-inference
kubectl taint node gpu-worker-01 nvidia.com/gpu=true:NoSchedule
```
安装经批准的 NVIDIA GPU Operator 或同等产品。验证：
```bash
kubectl get pods -n gpu-operator
kubectl describe node gpu-worker-01 | Select-String 'nvidia.com/gpu'
kubectl get nodes -o custom-columns=NAME:.metadata.name,GPUS:.status.allocatable.nvidia\.com/gpu
```
Operator 版本必须与驱动程序、Kubernetes、操作系统和 GPU 支持矩阵匹配。在断开连接的环境中，在安装之前将图表和所有镜像到专用注册表中。

### 部署 vLLM 推理服务

以下是概念性的 Kubernetes 部署。将镜像、模型路径、机密、运行状况检查和 GPU 资源调整到批准的环境：
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: qwen-inference
  namespace: ai-inference
spec:
  replicas: 1
  selector:
    matchLabels:
      app: qwen-inference
  template:
    metadata:
      labels:
        app: qwen-inference
    spec:
      nodeSelector:
        workload-class: llm-inference
      tolerations:
        - key: nvidia.com/gpu
          operator: Exists
          effect: NoSchedule
      containers:
        - name: vllm
          image: registry.example.com/ai/vllm@sha256:REPLACE_ME
          args:
            - "--model"
            - "/models/qwen2.5-7b-instruct"
            - "--served-model-name"
            - "qwen2.5-7b-instruct"
            - "--max-model-len"
            - "4096"
            - "--gpu-memory-utilization"
            - "0.85"
          ports:
            - name: http
              containerPort: 8000
          resources:
            requests:
              nvidia.com/gpu: "1"
              cpu: "4"
              memory: 16Gi
            limits:
              nvidia.com/gpu: "1"
              cpu: "8"
              memory: 32Gi
          readinessProbe:
            httpGet:
              path: /health
              port: http
            periodSeconds: 10
```
从私有卷或批准的模型缓存装载模型。避免在容器启动路径中下载权重进行生产；启动时间和出口成为可用性依赖项。

### KServe 选项

KServe 可以提供 InferenceService 抽象、自动扩缩容、修订、金丝雀流量和标准平台接口。服务运行时仍然需要经过测试的 vLLM、TGI 或其他容器。从一个副本开始，在了解模型负载、准备情况、GPU 分配和冷启动行为之前，不要扩缩容到零。

Kubernetes 路径在以下情况下完成：

- GPU 资源被正确通告和分配；
- 推理 Pod 仅在预期节点上调度；
- 模型从经批准的本地或私有存储加载；
- 服务和网关健康检查工作；
- 配额和 PodDisruptionBudgets 适当；
- 日志和指标包含模型和发布标识，没有原始内容；和
- 节点耗尽或 Pod 重新启动具有记录在案的结果。

## 模块 9：失败和恢复练习

在测试环境中安全运行以下命令：

### 发动机重新启动

停止一个服务进程或删除一个测试 Pod。测量检测、重新启动、模型加载时间、请求行为以及客户端是否安全重试。

### 模型制品失败

移动或损坏测试模型的副本，然后验证校验和验证是否会阻止启动或路由到先前批准的制品。恢复制品并确认服务恢复。

### 容量耗尽

生成有界并发测试流量，直到达到配置的队列或配额。验证端点是否根据策略拒绝或排队，并且不会耗尽主机内存或 GPU 内存。

### GPU 或节点丢失

在多 GPU 或 Kubernetes 测试环境中，移除 1 个 GPU 或耗尽 1 个节点。验证服务是否失败关闭、流量迁移或需要手动恢复。记录实际结果而不是假设 HA。

### 限制路由

尝试将受限测试分类提交到模拟云回退。验证代理是否拒绝它或仅路由到批准的本地端点。

## 安全和操作清单

- [ ] 模型许可和可接受的使用条款已记录并获取批准。
- [ ] 模型和容器制品已固定、扫描、校验和且可恢复。
- [ ] 本地存储已加密且权限受到限制。
- [ ] 引擎不直接暴露于不受信任的网络。
- [ ] 启用身份验证、授权、配额和模型白名单。
- [ ] 出站网络访问仅限于批准的依赖项。
- [ ] 日志不包含原始提示、文档、机密或敏感输出。
- [ ] 模型、运行时、提示和配置版本被采集为证据。
- [ ] GPU、CPU、内存、队列、延迟、令牌、错误以及成本或能源指标可用。
- [ ] 已测试模型回滚和主机或 Pod 重启。
- [ ] 分配修补、漏洞扫描、备份和注册表恢复。
- [ ] 清理删除令牌、缓存、容器、服务和测试模型访问。

## 验证

使用以下内容创建最终报告：

|尺寸|奥拉玛 |骆驼.cpp |LLM | Kubernetes 选项 |
|---|---:|---:|---:|---:|
|模型和版本 |  |  |  |  |
|格式和量化|  |  |  |  |
|硬件|  |  |  |  |
| TTFT p50/p95 |  |  |  |  |
|每秒输出令牌 |  |  |  |  |
|测试并发请求 |  |  |  |  |
|峰值 VRAM/RAM |  |  |  |  |
|质量得分 |  |  |  |  |
|结构化输出有效性|  |  |  |  |
|安全行为 |  |  |  |  |
|运营复杂性 |  |  |  |  |
|推荐用途 |  |  |  |  |

该建议应确定：

- 开发默认值；
——最小的安全生产试点；
- 敏感本地数据的模型和运行时；
- 本地容量不可用时的后备路径；
- 医管局所需的平台投资；
- 支持和许可风险；和
- 决定审查日期。

## 清理

1. 停止并禁用服务和 Kubernetes 工作负载。
2. 撤销实验室 API 令牌、注册表令牌和临时凭证。
3. 删除测试网关路由、防火墙规则和 DNS 记录。
4. 根据保留和许可策略删除或隔离下载的模型制品。
5. 如果基准提示和输出包含超出批准的合成数据的内容，则删除它们。
6. 删除容器、虚拟环境、模型缓存和临时卷。
7. 仅当集群归实验室所有时，才删除 GPU Operator 或 KServe 资源。
8. 保存模型批准、校验和、基准、失败和清理证据。

## 相关主题

- [LLM 本地和云端：完全控制与托管服务](../data-ai-integration/dai-llms-on-premises-and-in-the-cloud-full-control-vs-managed-services.md)
- [AI 模型服务、推理和端点架构](../data-ai-integration/dai-ai-model-serving-inference-and-endpoint-architecture.md)
- [数据和 AI 可观测性、评估和质量运营](../data-ai-integration/dai-data-and-ai-observability-evaluation-and-quality-operations.md)
- [企业 MLOps 平台和模型生命周期架构](../data-ai-integration/dai-enterprise-mlops-platform-and-model-lifecycle.md)
- [Kubernetes 工作负载调度、配额和容量规划](../applications-kubernetes/app-kubernetes-workload-scheduling-quotas-and-capacity-planning.md)
- [为 Azure 和混合服务器构建企业 Ansible 自动化平台](build-enterprise-ansible-automation-platform-for-azure-and-hybrid-servers.md)

## 参考文档

- [Ollama REST API 和本地部署](https://github.com/ollama/ollama)
- [Ollama 常见问题解答和 GPU 行为](https://github.com/ollama/ollama/blob/main/docs/faq.mdx)
- [llama.cpp 服务器](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)
- [llama.cpp 支持的后端](https://github.com/ggml-org/llama.cpp)
- [vLLM OpenAI 兼容服务器](https://docs.vllm.ai/en/latest/serving/online_serving/openai_compatible_server/)
- [vLLM Docker 部署](https://docs.vllm.ai/en/latest/deployment/docker/)
- [K服务](https://kserve.github.io/website/)
- [NVIDIA GPU Operator 安装](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/getting-started.html)
- [Qwen2.5-7B-Instruct 模型卡](https://huggingface.co/Qwen/Qwen2.5-7B-Instruct)
- [Mistral-7B-Instruct-v0.3 模型卡](https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3)
- [Gemma 3 4B IT 模型卡](https://huggingface.co/google/gemma-3-4b-it)
