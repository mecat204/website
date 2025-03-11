### **1. GitBash-Command**
1. 查看github克隆库的信息 user | user.email
``` bash
cd repository
git log --pretty=format:"%h -%an <%ae>"
```

### **2. 推送本地库到github**
1. 进入项目
   ``` bash
   cd repository
   ```
1. 初始化 Git 仓库（如果尚未初始化）
   ``` bash
   git init 初始化
   ```
1. 将 GitHub 仓库作为远程仓库添加到本地 Git 仓库
   ``` bash
   git remote add origin https://github.com/your-username/your-repository.git 
   ```
1. 查看当前文件的更改：
   ```bash
   git status
   ```
1. 将所有更改添加到暂存区：
   ```bash
   git add .
   ```
1. 提交更改：
   ```bash
   git commit -m "Initial commit"
   ```
1. 执行推送命令：
   ```bash
   git push -u origin master
   ```
   或者如果你使用的是 `main` 分支（GitHub 默认的分支名称）：
   ```bash
   git push -u origin main
   ```
1. 输入 GitHub 用户名和密码
如果是第一次推送，Git 可能会提示你输入 GitHub 的用户名和密码。你也可以使用 **GitHub Token** 代替密码，按照 GitHub 的 [帮助文档](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) 创建 Token。

1. 验证推送
---
### SSH-KEYGEN
1. 生成密钥
``` bash
ssh-keygen -t rsa -b 4096 -C "user.email"
Generating public/private rsa key pair
Enter file in which to save the key (/c/user/me.cat/.ssh/id_rsa):/c/user/me.cat/.ssh/id_rsa_gmail
Enter passphrase for "/c/user/me.cat/.ssh/id_rsa_gmail" (empty for no passphrase):
Enter same passphrase again: 
```
- Enter passphrase:设置密码，可以为空
---
---
## git@github.com: Permission denied (publickey). fatal: Could not read from remote repository.
  - 你的错误信息 `Permission denied (publickey).` 表示 Git 无法使用 SSH 访问 GitHub，通常是因为 SSH 公钥未正确配置或未被 GitHub 识别。你可以按照以下步骤来排查和解决这个问题。  

---

#### **1. 检查 SSH 密钥是否存在**
首先，看看你的本地 `~/.ssh/` 目录下是否已有 SSH 密钥：
```sh
ls -l ~/.ssh/id_*
```
如果你没有看到 `id_rsa.pub` 或 `id_ed25519.pub`，说明你还没有生成 SSH 密钥。

#### **生成新的 SSH 密钥**
如果没有密钥，可以生成一个新的：
```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```
如果你的 GitHub 账户较早，或者你的环境不支持 Ed25519，你可以改用：
```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
一路回车，默认会生成 `~/.ssh/id_ed25519` 和 `~/.ssh/id_ed25519.pub`（或 `id_rsa` 和 `id_rsa.pub`）。

---

#### **2. 添加 SSH 密钥到 ssh-agent**
确保 SSH 代理正在运行，并将私钥添加进去：
```sh
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519  # 或者 ~/.ssh/id_rsa
```

---

#### **3. 添加 SSH 公钥到 GitHub**
将你的公钥 (`~/.ssh/id_ed25519.pub` 或 `~/.ssh/id_rsa.pub`) 复制并添加到 GitHub：

```sh
cat ~/.ssh/id_ed25519.pub  # 或 ~/.ssh/id_rsa.pub
```
然后：
1. 复制输出的公钥内容。
2. 打开 [GitHub SSH Key 设置页面](https://github.com/settings/keys)。
3. 点击 **New SSH Key**，粘贴公钥，并保存。

---

#### **4. 测试 SSH 连接**
确保 SSH 连接到 GitHub 没问题：
```sh
ssh -T git@github.com
```
如果配置正确，你应该看到类似的消息：
```
Hi <your_github_username>! You've successfully authenticated, but GitHub does not provide shell access.
```

---

#### **5. 检查 Git 远程仓库 URL**
确保你的 Git 远程仓库使用的是 SSH，而不是 HTTPS：
```sh
git remote -v
```
如果你看到的是 HTTPS 连接（如 `https://github.com/xxx.git`），需要改成 SSH：
```sh
git remote set-url origin git@github.com:your_username/your_repository.git
```

---

#### **6. 检查 `~/.ssh/config` 配置（可选）**
如果仍然有问题，可以编辑 `~/.ssh/config`（如果文件不存在，就创建一个）：
```sh
nano ~/.ssh/config
```
然后添加以下内容：
```
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519  # 或 ~/.ssh/id_rsa
    AddKeysToAgent yes
```
保存后，尝试重新连接：
```sh
ssh -T git@github.com
```

---

#### **7. 确保你的 SSH 端口未被防火墙拦截**
如果你仍然遇到问题，可以尝试使用 GitHub 提供的备用端口：
```sh
ssh -T -p 443 git@ssh.github.com
```
如果这样可以成功连接，说明你的公司或网络可能屏蔽了默认的 SSH 端口（22）。

---

#### **总结**
如果你仍然遇到 `Permission denied (publickey).`，可以按照以下步骤排查：
1. 确保 SSH 密钥存在 (`ls ~/.ssh/`)，如果没有，则生成一个 (`ssh-keygen`）。
2. 确保 `ssh-agent` 正在运行，并添加密钥 (`ssh-add`）。
3. 把公钥 (`id_ed25519.pub` / `id_rsa.pub`）添加到 GitHub。
4. 测试 SSH 连接 (`ssh -T git@github.com`）。
5. 确保 Git 远程仓库 URL 使用 SSH (`git remote -v`）。
6. 检查 `~/.ssh/config` 配置是否正确。
7. 尝试使用备用 SSH 端口 (`ssh -T -p 443 git@ssh.github.com`）。
