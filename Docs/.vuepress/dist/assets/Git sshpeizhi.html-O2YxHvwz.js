import{_ as i,o as s,c as n,a,b as e,d,e as t}from"./app-iph3vjA0.js";const r={},l=e("h3",{id:"git-配置多个-ssh-key-方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-配置多个-ssh-key-方法","aria-hidden":"true"},"#"),d(" Git 配置多个 SSH-Key 方法")],-1),c=t(`<p>一般情况下，当有多个 git 账号，如果没有咧，都去尝试一下，例如：</p><ul><li>gitee 账号，国产 github，码云值得拥有</li><li>github 账号，全球最大同性交友网站</li><li>gitlab 账号，公司内部的工作开发</li></ul><p><strong>解决方案</strong></p><p>解决办法很简单，新建一个 config 文件就可以了。</p><h4 id="_1、本地生成-ssh-key" tabindex="-1"><a class="header-anchor" href="#_1、本地生成-ssh-key" aria-hidden="true">#</a> 1、本地生成 SSH-Key</h4><p>生成一个 gitee 用的 SSH-Key</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ssh-keygen -t rsa -C &#39;xxxxx@163.com&#39; -f ~/.ssh/gitee_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成一个 github 用的 SSH-Key</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ssh-keygen -t rsa -C &#39;xxxxx@163.com&#39; -f ~/.ssh/github_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成一个公司用 gitlab 的 SSH-Key</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ssh-keygen -t rsa -C &#39;xxxxx@company.com&#39; -f ~/.ssh/gitlab_id_rsa
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在默认以下地址会生成ssh文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>~/.ssh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若报以下错误，用gitbash重新输入上面的命令即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Saving key “~/.ssh/gitee_id” failed: No such file or directory 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、git-平台设置中" tabindex="-1"><a class="header-anchor" href="#_2、git-平台设置中" aria-hidden="true">#</a> 2、git 平台设置中</h4><p>将 .pub 文件中内容复制到相应的平台 SSH 设置中，例如：</p><p>gitee_id_rsa.pub 中的文件内容复制到码云的 SSH 公钥中。</p><h4 id="_3、新建-config-文件" tabindex="-1"><a class="header-anchor" href="#_3、新建-config-文件" aria-hidden="true">#</a> 3、新建 config 文件</h4><p>在 ~/.ssh 目录下新建一个 config 文件，添加如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># gitee

Host raw.githubusercontent.com
HostName raw.githubusercontent.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitee_id_rsa

# github

Host raw.githubusercontent.com
HostName raw.githubusercontent.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/github_id_rsa

# gitlab

Host xxxx.com
HostName xxxx.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/gitlab_id_rsa

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 Host 和 HostName 填写 git 服务器的域名，IdentityFile 指定私钥的路径。 实在不晓得 Host 和 HostName 怎么填的呢，譬如不知道公司内部的服务器域名，可以在 known_hosts 文件中查看。</p><h4 id="_4、测试是否联通" tabindex="-1"><a class="header-anchor" href="#_4、测试是否联通" aria-hidden="true">#</a> 4、测试是否联通</h4><p>用 ssh 命令分别测试，@后面跟着的是域名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ssh -T git@raw.githubusercontent.com
$ ssh -T git@raw.githubusercontent.com
$ ssh -T git@xxxx.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You&#39;ve successfully authenticated, but GitHub does not provide shell access.</p><p>当出现这句话的时候说明你已经配置完成啦</p>`,27);function u(o,v){return s(),n("div",null,[l,a("more"),c])}const m=i(r,[["render",u],["__file","Git sshpeizhi.html.vue"]]);export{m as default};
