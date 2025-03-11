## GitHub Desktop
### 1. [GitHub Desktop](https://desktop.github.com/)

---
---


## gitbash_command
### 1. 设置全局参数
``` gitbash
git config --global user.name "user.name"
git config --global user.email "user.email"
```
---
## 问答
### 1. **question1:**
``` gitbash
git fatal:unable to access 'https://github.com/user/website.git':failed to conncet to 127.0.0.1 port 10809 after 2042ms
```
  - 你的 Git 连接 GitHub 失败，错误信息表明 Git 试图通过 `127.0.0.1:10809` 这个代理端口连接，但没有成功。可能的原因和解决方案如下：  

### **可能的原因和解决方法**
#### **1. 代理设置错误**
你可能之前设置了一个 HTTP 代理，但这个代理不可用或已经失效。可以尝试取消代理设置：
```sh
git config --global --unset http.proxy
git config --global --unset https.proxy
```
然后再尝试 `git clone` 或 `git push`。

#### **2. 直接查看当前代理设置**
你可以运行以下命令检查当前的 Git 代理：
```sh
git config --global --list | grep proxy
```
如果输出包含 `http.proxy=http://127.0.0.1:10809` 或 `https.proxy=http://127.0.0.1:10809`，说明你的 Git 代理确实设置了这个端口。

#### **3. 使用系统代理**
如果你的网络访问 GitHub 需要代理，可以尝试使用 `export` 命令临时设置代理（适用于 Linux/macOS）：
```sh
export https_proxy="http://你的代理IP:端口"
export http_proxy="http://你的代理IP:端口"
```
Windows 可以用：
```sh
set http_proxy=http://你的代理IP:端口
set https_proxy=http://你的代理IP:端口
```
然后再试试 `git push` 或 `git clone`。

#### **4. 直接使用 SSH 方式连接 GitHub**
如果你可以使用 SSH 连接 GitHub，建议切换到 SSH 方式，而不是 HTTPS：
```sh
git remote set-url origin git@github.com:user/website.git
```
然后尝试 `git push` 或 `git clone`。

#### **5. 代理软件是否运行**
如果你本来就是通过代理访问 GitHub，请确保代理软件（如 Clash、V2Ray、Shadowsocks）正常运行，并且监听的端口正确。如果你的代理端口不是 `10809`，可以尝试更改 Git 代理：
```sh
git config --global http.proxy http://127.0.0.1:你的代理端口
git config --global https.proxy http://127.0.0.1:你的代理端口
```

#### **总结**
1. 取消 Git 代理设置（如果不需要代理）。
2. 确保代理软件正常运行（如果需要代理）。
3. 考虑切换到 SSH 方式访问 GitHub。

- 你可以先尝试 `git config --global --unset http.proxy` 之后，再试试 `git clone` 或 `git push`，看看是否恢复正常。
---
### 将本地 Git 仓库推送到 GitHub 的详细步骤如下：
将本地 Git 仓库推送到 GitHub 的详细步骤如下：

### 1. 创建 GitHub 仓库
1. 登录 GitHub 账户（[github.com](https://github.com/)）。
2. 点击右上角的 **+**，选择 **New repository**。
3. 输入仓库名称和其他相关信息，点击 **Create repository**。

### 2. 配置本地 Git 仓库
如果你还没有本地 Git 仓库，首先需要初始化一个：

1. 打开终端（Terminal）。
2. 进入你的项目文件夹：
   ```bash
   cd /path/to/your/project
   ```
3. 初始化 Git 仓库（如果尚未初始化）：
   ```bash
   git init
   ```

### 3. 添加远程 GitHub 仓库
将 GitHub 仓库添加为远程仓库：

1. 获取 GitHub 仓库的 URL（可以通过仓库页面上的 **Clone or download** 按钮复制 URL）。
2. 在终端中运行以下命令，将 GitHub 仓库作为远程仓库添加到本地 Git 仓库：
   ```bash
   git remote add origin https://github.com/your-username/your-repository.git
   ```

### 4. 添加并提交更改
确保你已经将更改添加到本地仓库并提交：

1. 查看当前文件的更改：
   ```bash
   git status
   ```
2. 将所有更改添加到暂存区：
   ```bash
   git add .
   ```
3. 提交更改：
   ```bash
   git commit -m "Initial commit"
   ```

### 5. 推送到 GitHub
将本地仓库推送到 GitHub 仓库：

1. 执行推送命令：
   ```bash
   git push -u origin master
   ```
   或者如果你使用的是 `main` 分支（GitHub 默认的分支名称）：
   ```bash
   git push -u origin main
   ```

   这将把本地仓库的提交推送到 GitHub 上的仓库。

### 6. 输入 GitHub 用户名和密码
如果是第一次推送，Git 可能会提示你输入 GitHub 的用户名和密码。你也可以使用 **GitHub Token** 代替密码，按照 GitHub 的 [帮助文档](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) 创建 Token。

### 7. 验证推送
