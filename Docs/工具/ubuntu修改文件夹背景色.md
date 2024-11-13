在WSL环境下修改文件夹的颜色

给 Windwos 11 装了个 WSL，配合 wsltty，用起来挺舒服。但就是每次`ls` Windows下的文件夹的时候，一片绿色闪瞎眼。
搜了一圈都让你去找`/etc/DIR_COLORS`,然而 Ubuntu 里并没有这东西。
Ubuntu下要这么做。

```css
cd ~/
dircolors -p > .dircolors
```

然后就可以修改了。
推荐使用 Vim，因为可以预览颜色。

```undefined
vi .dircolors
```

> 俗语云「进入 Vim 之后，双手离开键盘，先什么都不要按。」

修改这几行，光标移动到具体位置后，按`i`进入编辑模式。
下面的是我修改好的样子。

```php
<略>
DIR 04;34 # director.
<中略>
STICKY_OTHER_WRITABLE 04;32 # dir that is sticky and other-writable (+t,o+w)
OTHER_WRITABLE 04;34 # dir that is other-writable (o+w) and not sticky
<略>
```

修改过程中可以预览效果。
修改完毕后，先按`esc` ,之后输入`:wq`，保存并退出。

------

常见样式参考：

```javascript
00 　　　 //默认
01 　　 　//加粗
04 　 　　//下划线
05 　 　　//闪烁
07 　 　　//反显
08 　 　　//隐藏
文字颜色 
30 — Black   //黑色
31 — Red     //红色
32 — Green   //绿色
33 — Yellow  //黄色
34 — Blue    //蓝色
35 — Magenta //洋红色
36 — Cyan    //蓝绿色
37 — White   //白色
背景颜色 
40 — Black 
41 — Red 
42 — Green 
43 — Yellow 
44 — Blue 
45 — Magenta 
46 — Cyan 
47 – White
```