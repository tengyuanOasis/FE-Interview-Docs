# PM2基础知识

### 01、pm2是什么？

pm2 是一款强大的node进程管理工具 ， 具体自行百度~



### 02、学习资料 

https://www.kancloud.cn/daiji/pm2/395273



### 03、PM2官网 

https://raw.githubusercontent.com/shipengqi/PM2-docs-Zh-CN/blob/master/guide/startup_hook.md



### 04、使用



#### 1、安装pm2



```shell
  npm i -g pm2
  #or
  npm install cnpm -g --registry=https://registry.npm.taobao.org
```



#### 2、显示所有的进程



```shell
    pm2 ls
```



#### 3、启动某个进程



先进入项目pm2.json文件目录下



```shell
    pm2 start pm2.json
```



#### 4、查看调试的打印输出



```shell
    #pm2日志
    pm2 logs
    
    # 按id输出某个进程的日志
    pm2 logs 0

    # 按name输出某个进程的日志
    pm2 logs www_baidu_com
```



#### 5、关闭进程



```shell
    # 停止所有进程
    pm2 stop all
    
    # 按id停止某个进程
    pm2 stop 0
    
    # 按name停止某个进程
    pm2 stop www_baidu_com
```



#### 6、重启进程



```shell
    # 重启所有进程
    pm2 restart all
    
    # 按id重启某个进程
    pm2 restart 0
    
    # 按name重启某个进程
    pm2 restart www_baidu_com
```



#### 7、杀死进程



```shell
    # 杀死全部进程
    pm2 delete all 
    
    # 按id杀死指定的进程
    pm2 delete 0 
    
    # 按name杀死指定的进程
    pm2 delete www_baidu_com
```



#### 8、重载进程



```shell
    # 重载全部进程
    pm2 reload all 
    
    # 按id重载指定的进程
    pm2 reload 0 
    
    # 按name重载指定的进程
    pm2 reload www_baidu_com
```



#### 9、查看指定进程的总体信息



```shell
    pm2 show www_baidu_com
```

