import{_ as i,o as n,c as d,a,b as e,d as s,e as l}from"./app-iph3vjA0.js";const t={},r=e("h1",{id:"git-常用命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git-常用命令","aria-hidden":"true"},"#"),s(" GIT 常用命令")],-1),v=l(`<h2 id="_01-git-全局设置" tabindex="-1"><a class="header-anchor" href="#_01-git-全局设置" aria-hidden="true">#</a> 01 - Git 全局设置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- git config --global user.name &quot;xxx&quot; 配置用户名

- git config --global user.email &quot;xxx@xxx.com&quot; 配置用户邮箱

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-创建新版本库" tabindex="-1"><a class="header-anchor" href="#_02-创建新版本库" aria-hidden="true">#</a> 02 - 创建新版本库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone git@raw.githubusercontent.com:userName/repositoriesName.git

cd test

touch README.md

git add README.md

git commit -m &quot;add README&quot;

git push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02-链接远程仓库-已存在的文件夹" tabindex="-1"><a class="header-anchor" href="#_02-链接远程仓库-已存在的文件夹" aria-hidden="true">#</a> 02 - 链接远程仓库(已存在的文件夹)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd existing_folder

git init

git remote add origin git@raw.githubusercontent.com:userName/repositoriesName.git

git add .

git commit -m &quot;Initial commit&quot;

git push -u origin master

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03-已存在的-git-版本库" tabindex="-1"><a class="header-anchor" href="#_03-已存在的-git-版本库" aria-hidden="true">#</a> 03 - 已存在的 Git 版本库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd existing_repo

git remote rename origin old-origin

git remote add origin git@raw.githubusercontent.com:userName/repositoriesName.gi

git push -u origin --all

git push -u origin --tags

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04-开发完毕将要上传代码仓库" tabindex="-1"><a class="header-anchor" href="#_04-开发完毕将要上传代码仓库" aria-hidden="true">#</a> 04 - 开发完毕将要上传代码仓库</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git add .  增加当前子目录下所有更改过的文件至index

git commit -m &quot;xxx&quot; 提交

git push 推送改动到远端

git tag -a v0.0.1 -m &quot;这是一个tag备注信息&quot;  //新建tag及备注

git push --tag //将tag推送到远程仓库

git tag -ln //查看tag及其备注信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-新建分支" tabindex="-1"><a class="header-anchor" href="#_05-新建分支" aria-hidden="true">#</a> 05 - 新建分支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch &lt;分支名&gt; 创建新分支

git checkout &lt;分支名&gt; 切换到该分支

git push 如果是新建分支，push的时候需要跟远端仓库关联，一般会提示 git push --set-upstream 你的分支名 ， 复制提示信息并执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_05-合并分支" tabindex="-1"><a class="header-anchor" href="#_05-合并分支" aria-hidden="true">#</a> 05 - 合并分支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git pull origin master 多人协作，以防master已更新，本地代码版本没有更新，先同步一下master代码，以防产生合并冲突

git checkout master 先切换到主分支再合并

git merge &lt;需要合并到master上的分支名&gt; 合并某一个分支到该分支

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_06-删除本地-远程分支" tabindex="-1"><a class="header-anchor" href="#_06-删除本地-远程分支" aria-hidden="true">#</a> 06 - 删除本地，远程分支</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- git branch -d &lt;分支名&gt; 删除本地某一分支

- git push origin --delete &lt;分支名&gt; 删除远端分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_07-版本回退" tabindex="-1"><a class="header-anchor" href="#_07-版本回退" aria-hidden="true">#</a> 07 - 版本回退</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- git log 查看提交历史和commit 标记

- git reset --hard &lt;commit 后面的字符串&gt; 将代码回退到某一版本

- git push -f 远端仓库版本高于本地版本，需要强制推送上去
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_08-取消所有本地修改" tabindex="-1"><a class="header-anchor" href="#_08-取消所有本地修改" aria-hidden="true">#</a> 08 - 取消所有本地修改</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_09-查看修改" tabindex="-1"><a class="header-anchor" href="#_09-查看修改" aria-hidden="true">#</a> 09 - 查看修改</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git show &lt;commit日志&gt;  显示详细更改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_10-查看某一文件所有修改历史" tabindex="-1"><a class="header-anchor" href="#_10-查看某一文件所有修改历史" aria-hidden="true">#</a> 10 - 查看某一文件所有修改历史</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> git log --pretty=on 相对路径/绝对路径

 git show &lt;commit日志&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-生成-ssh-key" tabindex="-1"><a class="header-anchor" href="#_11-生成-ssh-key" aria-hidden="true">#</a> 11 - 生成 ssh key</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ssh-keygen -t rsa -C &#39;yourEmail@xxx.com&#39;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-其他命令" tabindex="-1"><a class="header-anchor" href="#_12-其他命令" aria-hidden="true">#</a> 12 - 其他命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git tag  查看tag

git tag -v 0.0.1 -m &quot;测试tag&quot;

git push --tag  (git push 不会将tag推送到远程，需要用到该命令)

git pull 从当前分支远端拉取代码

git pull origin &lt;分支名&gt; 拉取某一分支的代码并合并到当前分支

git branch 显示远程仓库分支

git branch -a 显示所有分支

git branch -v 查看分支及其最新一次提交记录

git branch --merged 显示所有已合并到当前分支的分支

git branch --no-merged 显示所有未合并到当前分支的分支

git push origin master 推送到主分支

git pull origin &lt;分支名&gt; 拉取远程分支合并到当前分支

git log 显示提交日志

git diff 显示所有变更

git diff HEAD^ 显示与上个版本的差异

git rm xxx 除某文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function c(u,m){return n(),d("div",null,[r,a("more"),v])}const b=i(t,[["render",c],["__file","Gitmingling.html.vue"]]);export{b as default};
