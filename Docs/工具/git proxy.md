# macOS 给 Git(Github) 设置代理（HTTP/SSH）

## 分辨需要设置的代理

- HTTP 形式：
  > git clone https://github.com/owner/git.git
- SSH 形式：
  > git clone git@github.com:owner/git.git

## 一、HTTP 形式

### 走 HTTP 代理

```bash
git config --global http.proxy "http://127.0.0.1:8080"
git config --global https.proxy "http://127.0.0.1:8080"
```

### 走 socks5 代理（如 Shadowsocks）

```bash
git config --global http.proxy "socks5://127.0.0.1:1086"
git config --global https.proxy "socks5://127.0.0.1:1086"
```

#### 指定域名

```bash
git config --global http.https://github.com.proxy "socks5://127.0.0.1:1086"
git config --global https.https://github.com.proxy "socks5://127.0.0.1:1086"
```

### 取消设置

```bash
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 二、SSH 形式

修改 `~/.ssh/config` 文件（不存在则新建）：

```
# 必须是 github.com
Host github.com
   HostName github.com
   User git
   # 走 HTTP 代理
   # ProxyCommand socat - PROXY:127.0.0.1:%h:%p,proxyport=8080
   # 走 socks5 代理（如 Shadowsocks）
   # ProxyCommand nc -v -x 127.0.0.1:1086 %h %p
```

[Configure Git to use a proxy](https://gist.github.com/evantoli/f8c23a37eb3558ab8765)
