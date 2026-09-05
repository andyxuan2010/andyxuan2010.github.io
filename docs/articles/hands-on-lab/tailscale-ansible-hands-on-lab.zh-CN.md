---
title: "跨四个站点的 Tailscale + Ansible"
summary: "为 Linux 和 Windows 学习者跨四个互联网分布式站点构建并验证 Tailscale 子网路由的 Ansible 管理结构。"
document_id: "HOL-09"
category: "动手实验"
article_type: "lab"
tags:
  - hands-on-lab
  - Tailscale
  - Ansible
  - subnet-routing
  - remote-management
  - linux
  - windows
  - networking
status: "published"
order: 90
version: "1.0"
last_updated: "2026-09-01"
review_status: "machine-validated"
review_cadence: "annual"
decision_status: "active"
owner: "云卓越中心"
audience:
  - 云工程师
  - 网络工程师
  - 自动化工程师
  - Systems Manager
  - 安全工程师
environment_scope:
  - development
  - test
cloud_scope:
  - Azure
  - AWS
  - GCP
  - OCI
lab_type: "guided hands-on"
difficulty: "advanced"
estimated_duration: "4-6 hours"
related_document_ids:
  - ES-10
  - ES-09
---
# 跨四个站点的 Tailscale + Ansible

> **文档类型：** 动手实验
> **适用范围：** 一个包含 Tailscale、Ansible、Linux 路由器、Linux 目标和 Windows 管理端点的四站点子网路由实验室。

## 实验室概述

在实验室结束时，站点 B Ansible 控制器和经批准的站点 B 家用 PC 应能够：

- 通过 Tailscale 子网路由器到达四个站点前缀；
- SSH 到 Linux 子网路由器和 Linux 受管节点；
- 通过 WinRM/PSRP 管理 Windows 主机；
- 测试批准的 HTTPS、RDP、SMB 和应用端口，而不将其暴露于公共互联网；
- 在所有四个站点上运行一次 Ansible 验证；
- 演示路由通告、路由批准、Tailscale 策略和主机防火墙策略之间的区别；和
- 可选择测试精确前缀子网路由器故障转移。

本实验为每个站点使用一台路由器作为最小路径。因此，站点 A、C 和 D 在基础实验室中故意存在路由器单点故障。企业设计建议在恢复目标需要的每个站点使用第二个路由器。

## 目标架构

|站点 |局域网前缀 |实验室子网路由器| Ansible 相关系统 |
|-|---|---|---|
|一个 | `192.168.0.0/24` | `tsr-a-01` / `192.168.0.2` Linux 虚拟机 | `a-ad-01` `.10`、`a-ad-02` `.11`、`a-pc-01` 至 `a-pc-10` `.101` 至 `.110` |
|乙| `192.168.10.0/24` | `tsr-b-01` / `192.168.10.2` Linux | `Ansible-b-01` `.20`、5 台 Windows 服务器 `.21` 至 `.25`、5 台 Linux 服务器 `.41` 至 `.45`、10 台虚拟机 `.61` 至 `.70` |
| C | `192.168.30.0/24` | `tsr-c-01` / `192.168.30.2` Linux 工作站 | `c-node-01` `.101`代表 Linux 工作站；其他移动/PC 节点是可选的 Tailscale 客户端 |
| d | `192.168.40.0/24` | `tsr-d-01` / `192.168.40.2` Linux 工作站 | `d-node-01` `.101`代表 Linux 工作站；其他移动/PC 节点是可选的 Tailscale 客户端 |

该示例使用 `.2` 作为站点路由器。保留 DHCP/IPAM 中的地址或将其替换为实际的固定地址。切勿在两个站点使用相同的前缀。

### 流量路径
```mermaid
flowchart LR
    HOME[Site B home PC<br/>or Ansible control node]
    B[Site B subnet router<br/>192.168.10.2]
    TS((Tailscale tailnet<br/>WireGuard overlay))
    A[Site A subnet router<br/>192.168.0.2]
    C[Site C subnet router<br/>192.168.30.2]
    D[Site D subnet router<br/>192.168.40.2]
    ALAN[Site A LAN<br/>AD + PCs]
    CLAN[Site C LAN<br/>Linux + devices]
    DLAN[Site D LAN<br/>Linux + devices]

    HOME --- B
    B --- TS
    TS --- A
    TS --- C
    TS --- D
    A --- ALAN
    C --- CLAN
    D --- DLAN
```
Ansible 控制器应该是直接 Tailscale 节点。如果家庭 PC 需要直接访问远程前缀，也应该运行 Tailscale。站点 B LAN 上的非 Tailscale 客户端需要站点 B 网关上的静态路由和相应的返回路径设计。

### 实验室执行流程
```mermaid
flowchart LR
    PREP[Prepare policy and scoped keys] --> ROUTE[Enroll routers and advertise exact /24 routes]
    ROUTE --> APPROVE[Approve routes and accept them on controller]
    APPROVE --> TEST[Validate SSH, WinRM, and approved services]
    TEST --> HA[Optionally test exact-prefix failover]
    HA --> CLEAN[Cleanup: revoke keys, routes, and temporary firewall rules]
```
执行流程使清理成为有意的边界：采集证据后不应保留临时注册密钥、路由通告、防火墙例外或实验室账户。

## 先决条件

### 必填

- 组织管理的 Tailscale tailnet 和管理员，可以创建标签、身份验证密钥、授予和路由批准。
- 每个站点都有一个可访问 Internet 和 LAN 的 Linux 系统。站点 A 的 Linux VM 和站点 C/D Linux 工作站满足实验室最低要求。
- 站点 B 上有一个单独的 Linux Ansible 控制节点。它不能是企业模式的唯一站点 B 子网路由器。
- 至少一个可访问的 Linux 目标和一个可访问的 Windows 目标用于验证。代表性路径发挥作用后，可以扩展完整清单。
- 对 Windows 主机的本地管理员访问权限和对 Linux 主机的 `sudo` 访问权限。
- 身份验证密钥、SSH 私钥、WinRM 凭据和 Ansible Vault 密码的受保护位置。

### 安全规则

- 请勿将真实的 Tailscale 身份验证密钥、密码、私钥或证书粘贴到此仓库中。
- 不要从实验室节点通告生产前缀。
- 不要为本实验启用默认路由或退出节点。
- 请勿在公共接口上公开 TCP `22`、`3389`、`445`、`5985` 或 `5986`。
- 下面的 WinRM HTTP 路径是仅限实验室使用的快捷方式。生产 Windows 管理必须使用 WinRM HTTPS 或批准的域/Kerberos 设计。
- 从允许的源和故意拒绝的源运行连接测试，以便验证而不是假设访问策略。

## 实验室模块

按顺序完成以下模块。每个模块在打开下一个范围之前都有一个检查点或验证命令。

## 准备 Tailscale 策略

创建这些标签并将标签所有权限制为网络运营组：

|标签 |目的|
|---|---|
| `tag:subnet-router-a` |站点 A路由通告者|
| `tag:subnet-router-b` | 站点 B路由通告者|
| `tag:subnet-router-c` | 站点 C路由通告者|
| `tag:subnet-router-d` |站点 D路由通告者|
| `tag:Ansible-control` |站点 B Ansible 控制器 |
| `tag:linux-managed` |直接注册 Linux 被管节点|

从与[企业设计](../enterprise-solutions/tailscale-ansible-enterprise-solution.md#illustrative-grants-policy) 中的示例等效的策略开始。对于实验室来说，最低逻辑要求是：

1. 仅自动批准匹配路由器标记的四个确切站点路由，或在管理控制台中手动批准它们；
2. 允许ICMP、TCP `22`、TCP `443`、TCP `5986`上的站点前缀使用`tag:Ansible-control`；
3. 如果使用 HTTP 路径，则允许实验室专用的 WinRM TCP `5985`；
4. 允许操作员到达 TCP `22` 和 TCP `443` 上的子网路由器；和
5. 仅针对直接注册的 Linux 节点和批准的本地用户添加 Tailscale SSH 规则。

Tailscale 路由审批和访问策略是分开的。路由可能出现在客户端路由表中，但仍被策略拒绝，或者策略可以允许某个地址而不注入路由。

## 创建范围注册密钥
为路由器角色创建单独的预先批准的标记身份验证密钥，并为 Ansible 控制器创建单独的密钥。在以下命令中使用占位符：
```bash
# Examples only; obtain keys from the Tailscale admin console or approved secret manager.
export TS_AUTHKEY_ROUTER_A='tskey-auth-REDACTED-A'
export TS_AUTHKEY_ROUTER_B='tskey-auth-REDACTED-B'
export TS_AUTHKEY_ROUTER_C='tskey-auth-REDACTED-C'
export TS_AUTHKEY_ROUTER_D='tskey-auth-REDACTED-D'
export TS_AUTHKEY_ANSIBLE='tskey-auth-REDACTED-ANSIBLE'
```
每个站点使用单独的密钥，以便撤销站点 C 注册不会影响站点 A 或控制节点。仅在注册期间将实际值存储在 shell 环境、Secret Manager 或 CI 机密存储中。

### 多个直接节点的静默安装

对于直接 Tailscale 客户端，使用经批准的节点管理系统中的以下一行命令。使用 root 权限运行 Linux 命令或 Ansible `become`；从提升的 PowerShell 或部署上下文运行 Windows 命令。这些命令仅安装客户端。保持注册分开，以便每个节点接收其预期的身份验证密钥、主机名、标签和路由。仅通过子网路由器到达的主机不需要直接的 Tailscale 客户端。

Linux：
```bash
curl -fsSL https://tailscale.com/install.sh | sh && sudo systemctl enable --now tailscaled
```
Windows（64 位 x86 MSI 示例；使用与节点架构匹配的 MSI）：
```powershell
msiexec.exe /i C:\Installers\tailscale-setup-amd64.msi /qn TS_NOLAUNCH=1 TS_UNATTENDEDMODE=always /L*v C:\Windows\Temp\tailscale-install.log
```
## 准备每个 Linux 子网路由器

在每个站点的 Linux 路由器上运行以下命令。在生产中使用发布版的包仓库；安装脚本对于一次性实验室来说很方便。
```bash
# Install Tailscale on a supported Linux distribution.
curl -fsSL https://tailscale.com/install.sh | sh
sudo systemctl enable --now tailscaled

# Enable IPv4 forwarding for subnet routing.
echo 'net.ipv4.ip_forward = 1' | sudo tee /etc/sysctl.d/99-tailscale-router.conf
sudo sysctl -p /etc/sysctl.d/99-tailscale-router.conf

# Confirm the router has a LAN route and an Internet path before continuing.
ip -4 addr
ip route
```
如果 IPv6 是实际站点设计的一部分，请启用 IPv6 转发。不要仅仅因为实验室不使用 IPv6 就启用它。

### 注册并发布站点路由

在每个路由器上运行特定于站点的命令：
```bash
# Site A
sudo tailscale up --auth-key="$TS_AUTHKEY_ROUTER_A" --hostname=tsr-a-01 --advertise-tags=tag:subnet-router-a
sudo tailscale set --advertise-routes=192.168.0.0/24

# Site B
sudo tailscale up --auth-key="$TS_AUTHKEY_ROUTER_B" --hostname=tsr-b-01 --advertise-tags=tag:subnet-router-b
sudo tailscale set --advertise-routes=192.168.10.0/24

# Site C
sudo tailscale up --auth-key="$TS_AUTHKEY_ROUTER_C" --hostname=tsr-c-01 --advertise-tags=tag:subnet-router-c
sudo tailscale set --advertise-routes=192.168.30.0/24

# Site D
sudo tailscale up --auth-key="$TS_AUTHKEY_ROUTER_D" --hostname=tsr-d-01 --advertise-tags=tag:subnet-router-d
sudo tailscale set --advertise-routes=192.168.40.0/24
```
将 auth-key 值替换为特定站点的密钥。使用 `Tailscale status`、`Tailscale ip -4` 和 `Tailscale status --json` 确认节点已注册并通告预期路由。

### 路由器防火墙转发

子网路由器必须允许从 `tailscale0` 转发到 LAN 接口并允许返回流量。确切的实现取决于 `nftables`、`iptables`、`firewalld` 或 UFW。以下是一个实验室示例；将 `eth0` 替换为真正的 LAN 接口，并使用发布版的防火墙管理工具保留规则。
```bash
LAN_IF=eth0
sudo iptables -A FORWARD -i tailscale0 -o "$LAN_IF" -m conntrack --ctstate NEW,ESTABLISHED,RELATED -j ACCEPT
sudo iptables -A FORWARD -i "$LAN_IF" -o tailscale0 -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```
如果主机使用 firewalld，请确保firewalld 中允许转发和所需的伪装或无 SNAT 行为，而不是添加非托管 iptables 规则。不要在所有接口上使用广泛的 `ACCEPT` 策略。

### 选择实验室路由模式

对于第一次实验运行，保留默认子网路由 SNAT。它最大限度地减少了对四个现有网关的更改，并允许直接注册的站点 B 控制器到达远程路由器后面的主机。

对于企业型扩展，仅在静态返回路由准备就绪后禁用 SNAT：
```bash
sudo tailscale set --snat-subnet-routes=false
```
no-SNAT 模式保留原始地址，但要求每个 LAN 网关通过本地子网路由器返回远程前缀。该扩展记录在[第 14 节](#14-optional-no-snat-site-to-site-extension) 中。

## 批准并检查路由

在 Tailscale 管理控制台中：

1.打开**机器**；
2. 过滤广告子网的设备；
3. 检查每个路由器上发布的确切路由；
4、仅批准`192.168.0.0/24`、`192.168.10.0/24`、`192.168.30.0/24`、`192.168.40.0/24`；和
5. 确认路由已分配给预期的路由器和标签。

如果使用 `autoApprovers`，请记住更改策略不会追溯批准已待处理的路由。重新公布路由或手动批准。

## 注册站点 B Ansible 控制器

在 `Ansible-b-01` 上：
```bash
curl -fsSL https://tailscale.com/install.sh | sh
sudo systemctl enable --now tailscaled
sudo tailscale up --auth-key="$TS_AUTHKEY_ANSIBLE" --hostname=ansible-b-01 --advertise-tags=tag:ansible-control

# Linux clients do not automatically accept subnet routes in every setup.
sudo tailscale set --accept-routes

tailscale ip -4
ip route
```
确认控制器具有所有四个前缀的路由。控制器不需要通告站点 B的路由，除非它也是子网路由器；在企业设计中将这些角色分开。

### 注册家庭电脑

在站点 B 家用 PC 上安装 Tailscale 客户端，使用批准的用户身份对其进行身份验证，并验证客户端是否收到批准的子网路由。 Windows 客户端通常会自动接受子网路由，但会在客户端状态中并使用 PowerShell 确认路由和策略：
```powershell
Test-NetConnection 192.168.0.10 -Port 22
Test-NetConnection 192.168.30.2 -Port 22
Test-NetConnection 192.168.40.2 -Port 22
```
如果家庭 PC 没有直接注册，则它本身无法使用 tailnet 覆盖。通过站点 B 子网路由器在站点 B 网关上为远程前缀添加静态路由，并在启用广泛的家庭 LAN 访问之前设计返回路径。

## 在 Ansible 之前验证原始连接

从 `Ansible-b-01` 运行：
```bash
# Check the directly enrolled routers.
tailscale ping tsr-a-01
tailscale ping tsr-b-01
tailscale ping tsr-c-01
tailscale ping tsr-d-01

# Check routed LAN addresses. Use only hosts that actually exist.
ping -c 3 192.168.0.10
ping -c 3 192.168.10.41
ping -c 3 192.168.30.2
ping -c 3 192.168.40.2

# Check required management ports.
nc -vz -w 5 192.168.0.10 22
nc -vz -w 5 192.168.0.10 5986
nc -vz -w 5 192.168.30.2 22
```
Ping 可能被主机防火墙禁用。 ping 失败并不能得出结论；使用服务端口测试和主机防火墙日志。失败的 TCP 测试可能表示未批准的路由、拒绝的授权、丢失的返回路由、本地防火墙规则或未侦听的服务。

## 引导 Linux SSH

在每个 Linux 目标上，创建一个专用的自动化账户并安装控制器的公钥。使用现有批准的管理方法运行引导程序，而不是通过新路径，直到路径经过验证。
```bash
sudo useradd --create-home --shell /bin/bash ansible
sudo install -d -m 0700 -o ansible -g ansible /home/ansible/.ssh
sudo install -m 0600 -o ansible -g ansible /tmp/ansible-b-01.pub /home/ansible/.ssh/authorized_keys

# Prefer a narrow sudoers policy per role. This broad lab rule is not a production standard.
echo 'ansible ALL=(ALL) NOPASSWD: ALL' | sudo tee /etc/sudoers.d/ansible-lab
sudo chmod 0440 /etc/sudoers.d/ansible-lab
```
从控制器：
```bash
ssh -i ~/.ssh/ansible_ed25519 -o IdentitiesOnly=yes ansible@192.168.0.2 hostname
ssh -i ~/.ssh/ansible_ed25519 -o IdentitiesOnly=yes ansible@192.168.30.2 hostname
ssh -i ~/.ssh/ansible_ed25519 -o IdentitiesOnly=yes ansible@192.168.40.2 hostname
```
对于直接注册的 Linux 路由器，可以启用 Tailscale SSH，以便操作员使用 `sudo Tailscale set --ssh` 进行访问。它是可选的，并且必须在 tailnet 策略中允许。它不是用于访问子网路由器后面的任意 Linux 主机的机制。

## 引导 Windows 管理

Ansible 通过 WinRM/PSRP 或 SSH 支持 Windows。本实验使用 WinRM，因为它对于 Windows Server、AD 服务器和 Windows 工作站很常见。在将 Windows 主机添加到清单之前配置它们。

### 仅供实验室使用的 WinRM HTTP 路径

在 Windows 测试主机上作为提升的 PowerShell 会话运行。使用默认 Tailscale SNAT 路径时，将 `$allowedRouterIp` 设置为该站点的子网路由器的 LAN 地址。
```powershell
Enable-PSRemoting -Force

# NTLM over HTTP uses WinRM message encryption in the lab profile.
Set-Item -Path WSMan:\localhost\Service\Auth\Basic -Value $false
Set-Item -Path WSMan:\localhost\Service\AllowUnencrypted -Value $false

$allowedRouterIp = '192.168.0.2'  # Use 192.168.10.2, .30.2, or .40.2 at other sites.
Disable-NetFirewallRule -DisplayGroup 'Windows Remote Management'
New-NetFirewallRule -DisplayName 'Ansible WinRM lab from Tailscale router' -Direction Inbound -Action Allow -Protocol TCP -LocalPort 5985 -RemoteAddress $allowedRouterIp -Profile Any
```
仅在孤立的实验室或 Tailscale 路径和主机防火墙已明确批准的地方使用此功能。不要将 `AllowUnencrypted` 设置为 `$true`，并且不要启用 HTTP 上的基本身份验证。

### Enterprise WinRM HTTPS 路径

对于生产，使用 Ansible 控制器信任的证书创建 WinRM HTTPS 侦听器，将 Windows 防火墙限制为批准的管理源，并使用 TCP `5986`。在域环境中，当 DNS、SPN 和委派设计准备就绪时，Kerberos 是首选。对于本地账户，请使用 NTLM 或通过受信任的 HTTPS 进行证书身份验证。

请按照当前的 [Ansible Windows 远程管理指南](https://docs.ansible.com/projects/ansible-core/devel/os_guide/windows_winrm.html) 进行侦听器创建、身份验证、加密和 CA 信任。使用 `ansible_winrm_server_cert_validation: ignore` 的自签名证书仅是实验室例外，不得成为生产配置。

## 在控制器上安装 Ansible

在 `Ansible-b-01` 上使用专用的 Python 虚拟环境：
```bash
sudo apt-get update
sudo apt-get install -y python3-venv python3-pip openssh-client
python3 -m venv ~/venvs/ansible-tailscale
source ~/venvs/ansible-tailscale/bin/activate
python -m pip install --upgrade pip
python -m pip install ansible-core pywinrm
ansible-galaxy collection install ansible.windows
```
当清单使用 PSRP 连接插件时，安装 `pypsrp` 代替 `pywinrm` 或除了 `pywinrm` 之外还安装 `pypsrp`。将版本固定在实际项目中，并在暂存 tailnet 中测试升级。

## 构建 Ansible 清单

创建 `inventory/hosts.yml`。这是一个具有代表性的全站点骨架；仅当剩余的移动和 PC 节点公开批准的管理协议时才添加它们。
```yaml
all:
  children:
    site_a:
      children:
        site_a_linux: {}
        site_a_windows: {}
    site_b:
      children:
        site_b_linux: {}
        site_b_windows: {}
    site_c:
      children:
        site_c_linux: {}
    site_d:
      children:
        site_d_linux: {}

    site_a_linux:
      hosts:
        tsr-a-01:
          ansible_host: 192.168.0.2
    site_a_windows:
      hosts:
        a-ad-01:
          ansible_host: 192.168.0.10
        a-ad-02:
          ansible_host: 192.168.0.11
        a-pc-01:
          ansible_host: 192.168.0.101
        a-pc-02:
          ansible_host: 192.168.0.102
        a-pc-03:
          ansible_host: 192.168.0.103
        a-pc-04:
          ansible_host: 192.168.0.104
        a-pc-05:
          ansible_host: 192.168.0.105
        a-pc-06:
          ansible_host: 192.168.0.106
        a-pc-07:
          ansible_host: 192.168.0.107
        a-pc-08:
          ansible_host: 192.168.0.108
        a-pc-09:
          ansible_host: 192.168.0.109
        a-pc-10:
          ansible_host: 192.168.0.110

    site_b_linux:
      hosts:
        ansible-b-01:
          ansible_host: 192.168.10.20
        tsr-b-01:
          ansible_host: 192.168.10.2
        b-linux-01:
          ansible_host: 192.168.10.41
        b-linux-02:
          ansible_host: 192.168.10.42
        b-linux-03:
          ansible_host: 192.168.10.43
        b-linux-04:
          ansible_host: 192.168.10.44
        b-linux-05:
          ansible_host: 192.168.10.45
        b-vm-01:
          ansible_host: 192.168.10.61
        b-vm-02:
          ansible_host: 192.168.10.62
        b-vm-03:
          ansible_host: 192.168.10.63
        b-vm-04:
          ansible_host: 192.168.10.64
        b-vm-05:
          ansible_host: 192.168.10.65
        b-vm-06:
          ansible_host: 192.168.10.66
        b-vm-07:
          ansible_host: 192.168.10.67
        b-vm-08:
          ansible_host: 192.168.10.68
        b-vm-09:
          ansible_host: 192.168.10.69
        b-vm-10:
          ansible_host: 192.168.10.70
    site_b_windows:
      hosts:
        b-win-srv-01:
          ansible_host: 192.168.10.21
        b-win-srv-02:
          ansible_host: 192.168.10.22
        b-win-srv-03:
          ansible_host: 192.168.10.23
        b-win-srv-04:
          ansible_host: 192.168.10.24
        b-win-srv-05:
          ansible_host: 192.168.10.25

    site_c_linux:
      hosts:
        tsr-c-01:
          ansible_host: 192.168.30.2
    site_d_linux:
      hosts:
        tsr-d-01:
          ansible_host: 192.168.40.2

    linux:
      children:
        site_a_linux: {}
        site_b_linux: {}
        site_c_linux: {}
        site_d_linux: {}
      vars:
        ansible_connection: ssh
        ansible_user: ansible
        ansible_become: true
        ansible_python_interpreter: /usr/bin/python3
        ansible_ssh_private_key_file: ~/.ssh/ansible_ed25519

    windows:
      children:
        site_a_windows: {}
        site_b_windows: {}
      vars:
        ansible_connection: winrm
        ansible_user: ansible_admin
        ansible_password: "{{ vault_windows_password }}"
        ansible_port: 5985
        ansible_winrm_transport: ntlm
        ansible_winrm_message_encryption: always
```
对于企业配置文件，将 Windows 更改为 TCP `5986`，设置 `ansible_winrm_server_cert_validation: validate`，并在使用私有 CA 时配置`ansible_winrm_ca_trust_path`。将 Windows 密码保存在 Ansible Vault 文件中，而不是清单中。

清单布局遵循 Ansible 支持的稳定别名、`ansible_host` 连接地址和单独组变量的模式。连接前使用 `Ansible-inventory --graph` 验证组层次结构。

## 可选的无 SNAT 站点到站点扩展

首先完成基础 SNAT 实验室。然后，如果站点网关在您的控制之下，请在禁用 SNAT 之前添加静态路由。

### 网关路由规划

每个路由将远程站点前缀指向本地子网路由器。如果远程 LAN 主机必须将流量返回到直接注册的 tailnet 客户端（无需 SNAT），请添加 Tailscale CGNAT 范围的路由。

|网关|通过本地路由器的静态路由|
|---|---|
|站点 A网关| `192.168.10.0/24`、`192.168.30.0/24`、`192.168.40.0/24` 以及可选的 `100.64.0.0/10`（通过 `192.168.0.2`）|
| 站点 B网关| `192.168.0.0/24`、`192.168.30.0/24`、`192.168.40.0/24` 以及可选的 `100.64.0.0/10`（通过 `192.168.10.2`）|
| 站点 C网关| `192.168.0.0/24`、`192.168.10.0/24`、`192.168.40.0/24` 以及可选的 `100.64.0.0/10`（通过 `192.168.30.2`）|
|站点 D 网关 | `192.168.0.0/24`、`192.168.10.0/24`、`192.168.30.0/24` 以及可选的 `100.64.0.0/10`（通过 `192.168.40.2`）|

确切的 CLI 是特定于提供商的。确认网关在转发表中安装了路由，并且主机防火墙允许源和目标范围。

### 禁用 SNAT 并测试
```bash
# Run on each subnet router only after the gateway routes are active.
sudo tailscale set --snat-subnet-routes=false

# On the controller, keep route acceptance enabled.
sudo tailscale set --accept-routes

ip route get 192.168.0.10
traceroute -n 192.168.0.10
nc -vz -w 5 192.168.0.10 22
```
确认目标的日志显示预期的源地址。如果连接在 SNAT 下工作正常但在没有 SNAT 的情况下失败，则首先怀疑的是返回路由和目标防火墙。

## 运行 Ansible 验证

创建`validate_fabric.yml`：
```yaml
---
- name: Validate Linux management paths
  hosts: linux
  gather_facts: false
  tasks:
    - name: Verify SSH and sudo path
      ansible.builtin.ping:

    - name: Collect Linux hostname
      ansible.builtin.command: hostname --fqdn
      register: linux_hostname
      changed_when: false

    - name: Show Linux site target
      ansible.builtin.debug:
        msg: "{{ inventory_hostname }} -> {{ linux_hostname.stdout }}"

- name: Validate Windows management paths
  hosts: windows
  gather_facts: false
  tasks:
    - name: Verify WinRM path
      ansible.windows.win_ping:

    - name: Collect Windows hostname
      ansible.windows.win_shell: '$env:COMPUTERNAME'
      register: windows_hostname
      changed_when: false

    - name: Show Windows site target
      ansible.builtin.debug:
        msg: "{{ inventory_hostname }} -> {{ windows_hostname.stdout | trim }}"
```
在不断扩大的范围内运行清单和验证：
```bash
source ~/venvs/ansible-tailscale/bin/activate
ansible-inventory -i inventory/hosts.yml --graph
ansible-inventory -i inventory/hosts.yml --list > /tmp/tailscale-ansible-inventory.json

ansible-playbook -i inventory/hosts.yml validate_fabric.yml --limit tsr-a-01,tsr-c-01,tsr-d-01
ansible-playbook -i inventory/hosts.yml validate_fabric.yml --limit a-ad-01,b-win-srv-01
ansible-playbook -i inventory/hosts.yml validate_fabric.yml
```
第一次运行限制了爆炸半径。在代表性的 Linux 和 Windows 节点通过之前，不要移动到完整清单。

## 测试其他批准的服务

从 `Ansible-b-01` 开始，对每个目标类别使用单独的服务测试。不要推断 SSH 成功意味着允许 SMB、RDP 或应用端口。
```bash
# Linux/SSH
nc -vz -w 5 192.168.0.2 22
nc -vz -w 5 192.168.30.2 22

# Windows WinRM HTTPS production path
nc -vz -w 5 192.168.0.10 5986

# HTTPS application endpoint, if explicitly approved
curl --fail --connect-timeout 5 https://192.168.30.101/health

# Optional file-management path; use only for named servers
nc -vz -w 5 192.168.10.21 445
```
对于从家庭 PC 进行 RDP 和 Windows 端检查：
```powershell
Test-NetConnection 192.168.0.10 -Port 3389
Test-NetConnection 192.168.10.21 -Port 445
Test-NetConnection 192.168.30.101 -Port 443
```
在 Tailscale Grants 和本地防火墙中添加或删除端口作为单独的更改，并具有所有者和审核日期。

## 可选的精确前缀故障转移实验室

要测试 Tailscale 子网路由器故障转移，请在同一 LAN 上部署第二个 Linux 路由器，并使用相同的站点标记通告完全相同的前缀：
```bash
# Example for a second Site B router.
sudo tailscale up --auth-key="$TS_AUTHKEY_ROUTER_B" --hostname=tsr-b-02 --advertise-tags=tag:subnet-router-b
sudo tailscale set --advertise-routes=192.168.10.0/24
```
如果未启用自动批准，则批准第二个广告。开始连续允许的服务测试，在 `tsr-b-01` 上停止 Tailscale，并验证通过 `tsr-b-02` 是否可以使用确切的 `/24` 路由。为记录在案的故障转移行为留出大约 15 秒的时间，并记录观测到的结果。

请勿在一台路由器上使用 `/16` 并在另一台路由器上使用 `/24` 作为 HA 测试。这些不是等效的故障转移候选者。对于通告相同本地前缀的 HA 路由器，除非设计特别需要，否则不要在备用路由器上启用 `accept-routes`，因为备用路由器可以选择其自身本地路由的远程副本。

## 故障排除指南

|症状|可能的原因 |检查 |
|---|---|---|
|路由在控制器上不可见 |控制器不接受路由、路由未批准或自动批准未应用 | `sudo Tailscale set --accept-routes`，管理控制台路由状态，`Tailscale status --json` |
|路由器显示在线但 LAN 主机无法访问 | IP 转发、路由器防火墙、主机防火墙或返回路由 | `sysctl net.ipv4.ip_forward`、转发规则、`ip route`、主机日志 |
| Tailscale 路由存在但连接被拒绝 |授予或主机防火墙拒绝协议/端口 |查看 `grants`、源标记、目标 CIDR 和本地防火墙日志 |
| SSH 到 Linux 超时 | `sshd` 未监听、TCP 22 被阻止或返回流量不对称 | `ss -lntp`、`nc -vz`、防火墙规则、路由模式 |
| WinRM 在 5985 上失败 |侦听器、NTLM、本地账户、防火墙范围或消息加密不匹配 | `winrm enumerate winrm/config/listener`、Ansible 连接变量、Windows 事件日志 |
| WinRM HTTPS 在 5986 上失败 |证书名称/信任、CA 路径、侦听器或端口不匹配 |证书 SAN、`ansible_winrm_server_cert_validation`、CA 信任、`Test-NetConnection` |
| Tailscale SSH 无法到达路由的 Linux 主机 |目标不运行 Tailscale SSH |通过子网路由使用标准 SSH 或直接注册目标 |
|只有支持 Tailscale 的客户端才能工作 | LAN 网关缺少非 Tailscale 客户端的路由 |添加网关路由和返回路由，或将范围限制为已注册的客户端 |
|不发生故障转移 |路由不同，第二条路由待定，或策略不允许备用 |比较确切的前缀、批准状态、标签和策略 |
| DNS 名称失败但 IP 有效 | MagicDNS 无法解析任意路由的 LAN 主机 |使用内部 DNS/搜索后缀或清单中的稳定 IP；解决 DNS 策略不弱|

## 验证

实验室在以下情况下完成：

- 所有四个确切的站点路由均已公布、批准并在控制器上可见；
- 控制器到达每个站点的一名 Linux 和一名 Windows 代表；
- Linux 验证通过 SSH，Windows 验证通过 WinRM/PSRP；
- 家用电脑只能访问经批准的远程服务；
- 至少记录了一项被拒绝的源/端口测试；
- 日志记录路由模式、源 NAT 行为和返回路径；
- Ansible 清单已成功呈现，并且完整的验证过程是幂等的；
- 临时 WinRM HTTP 异常被删除或明确记录为仅限实验室状态；和
- 如果测试了 HA，则第二个路由器会通告完全相同的前缀，并记录观测到的故障转移时间。

## 清理

实验室完成后：

1. 删除或禁用四个实验室路由通告；
2. 删除或撤销临时注册密钥；
3. 从 tailnet 中删除实验室节点并删除过时的设备日志记录；
4. 删除实验室防火墙规则和临时 WinRM 侦听器；
5. 从目标系统中删除实验室 SSH 账户和密钥；
6.删除临时 Vault 材料和清单导出；和
7. 测试结果、策略版本、路由规划、经验教训等与机密分开保存。

## 相关主题

- [企业 Tailscale + Ansible 多站点管理解决方案](../enterprise-solutions/tailscale-ansible-enterprise-solution.md)
- [企业多云 Ansible 自动化参考架构](../enterprise-solutions/enterprise-ansible-automation-reference-architecture.md)

## 相关仓库

- [Tailscale/Tailscale](https://github.com/tailscale/tailscale) — 实验室使用的 Tailscale 客户端和子网路由器实现。
- [Ansible/Ansible](https://github.com/ansible/ansible) — 控制器使用的 Ansible 自动化引擎。

## 参考文档

- [Tailscale 子网路由器](https://tailscale.com/docs/features/subnet-routers)
- [Tailscale 站点到站点网络](https://tailscale.com/docs/features/site-to-site)
- [Tailscale 路由注入](https://tailscale.com/docs/reference/route-injection)
- [Tailscale 子网路由器高可用性](https://tailscale.com/docs/how-to/set-up-high-availability)
- [Tailscale Grants 语法](https://tailscale.com/docs/reference/syntax/grants)
- [Tailscale 授权密钥](https://tailscale.com/docs/features/access-control/auth-keys)
- [Tailscale SSH](https://tailscale.com/docs/features/tailscale-ssh)
- [在 Linux 上安装 Tailscale](https://tailscale.com/docs/install/linux)
- [使用 MSI 在 Windows 上安装 Tailscale](https://tailscale.com/docs/install/windows/msi)
- [无人值守运行 Tailscale](https://tailscale.com/docs/how-to/run-unattended)
- [Ansible 清单指南](https://docs.ansible.com/projects/ansible/latest/inventory_guide/intro_inventory.html)
- [使用 Ansible 管理 Windows 主机](https://docs.ansible.com/projects/ansible/latest/os_guide/intro_windows.html)
- [Ansible Windows 远程管理指南](https://docs.ansible.com/projects/ansible-core/devel/os_guide/windows_winrm.html)
- [Ansible WinRM 连接插件](https://docs.ansible.com/projects/ansible/latest/collections/ansible/builtin/winrm_connection.html)
