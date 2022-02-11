# Typora设置图片自动上传图床教程

终于可以快乐的写markdown文档啦~~~！！！！

#### 1、准备

​	注意软件不要随便无脑装，找一个固定装软件的目录，方便管理~~

- 安装 Typora（一个贼好用的md文件编写软件）, [传送门](https://typora.io/)
  <img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131541743.png" alt="image-20210813154137085" style="zoom:80%;" />
- 安装 Picgo（图片上传工具） , [传送门](https://molunerfinn.com/PicGo/)
	<img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131600909.png" alt="image-20210813160030285" style="zoom:50%;" />
- gitee (用来做git图床，github会因为网络问题经常上传不上，国内还是用gitee好一点) , [传送门](https://gitee.com/)
	<img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131605235.png" alt="image-20210813160521603" style="zoom:150%;" />

#### 2、配置

- ==**Typora**==

  - 打开【设置】-【偏好设置】- 【图像】- 勾选【上传服务设定】

  - 上传服务设定配置

    <img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131705563.png" alt="image-20210813170551377" style="zoom:80%;" />

- **==gitee==**  

  - 进入gitee先申请一个账号，并创建一个账号（这里不过多赘述，不懂的自行百度~）
  - 创建一个自己用来存储图片的项目
    <img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131617088.png" alt="image-20210813161701787" style="zoom:80%;" />
  - 点击右上角【头像】- 【设置】- 进入设置页面
  - 点击左侧菜单栏 - 【个人令牌】
    <img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131619837.png" alt="image-20210813161918589" style="zoom:80%;" />
  - 点击【+生成新令牌】创建个人令牌，描述随便写一点 ，选项只需要勾选projects即可，然后点击提交 ，然后会有弹窗提示验证密码，密码通过之后会生成一个秘钥 ， **这个弹窗暂时不要关，将私人令牌复制下来备用**
    <img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131620624.png" alt="image-20210813162018056" style="zoom:80%;" />
    <img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131622542.png" alt="image-20210813162223542" style="zoom:80%;" />
    <img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131623036.png" alt="image-20210813162349668" style="zoom:80%;" />

- ==**Picgo**==

  - 安装完成picgo之后会看到这个页面，如果么找到这个软件的话建议找找桌面图标，或者window右下角隐藏的图标，点出来

    <img src="https://gitee.com/JuntengMa/imgae/raw/master/202108131626114.png" alt="image-20210813162608955" style="zoom:80%;" />

  - 点击【插件设置】，搜索gitee，安装截图中插件，另外两个插件是同样的功能，也可以选择安装他们🤣

    ![image-20210813162743609](https://gitee.com/JuntengMa/imgae/raw/master/202108131627328.png)

  - 点击【图床设置】，找到gitee，如下图
    ![image-20210813162948624](https://gitee.com/JuntengMa/imgae/raw/master/202108131630986.png)

  - **repo ： 仓库路径，具体位置参考下图，把圈起来的部分copy出来粘贴进去即可**

    ![image-20210813163440151](https://gitee.com/JuntengMa/imgae/raw/master/202108131634547.png)

  - **token: 将gitee生成的【私人令牌】贴进去即可**

  - **branch：分支默认写master即可**

#### 3、验证

- 配置完成之后，点击picgo 上传区，随意上传一张图片测试，注意: 这里上传成功之后不会有什么提示，但是会自动复制上传成功后的链接

![](https://gitee.com/JuntengMa/imgae/raw/master/202108131656206.gif)

- 如果如图可以生成gitee链接，并且gitee仓库也会上传好这张图片
- 这时打开typora, 粘贴或者插入图片，右键图片，选择上传，就能自动上传并替换图片路径了~~~~（ps: 要是不能就关掉typora然后重启，再不行的话就看看哪里操作出问题了，或者自行百度）
- 这里补充一下，后续上传图片不需要开启picgo这个软件，typora可以完成所有操作哦
- 然后。。。。快乐的写md去吧😁😁😁

#### 4、小技巧

typora - 文件 - 偏好设置 - 图像  修改为以下设置可以插入图片默认上传

![image-20210816094914657](https://gitee.com/JuntengMa/imgae/raw/master/202108160949776.png)

![abc](https://gitee.com/JuntengMa/imgae/raw/master/202108160949794.gif)

