### 1、文件夹操作

-  创建文件夹  

```
mkdir "dirname"
```

-  文件或目录改名、或将文件或目录移入其它位置  

```
mv 'dirname' 'newDirname'
mv 'filename' 'newFilename'
```

-  [cp](https://www.runoob.com/linux/linux-comm-cp.html)： 复制 

-  使用指令 cp 将当前目录 test/ 下的所有文件复制到新目录 newtest 下，输入如下命令  

```
cp –r test/ newtest
```

- 压缩文件夹

```
zip -r fileName.zip dirName/
```

- 解压(https://www.runoob.com/linux/linux-comm-unzip.html)

```
unzip filename.zip               //解压压缩文件到当前文件夹
unzip test.zip -d /root/         //解压到指定文件夹
```

### 2、文件

-  创建文件 

-  vi ：1.txt 创建并打开 1.txt 文件 
-  echo ：'1234'>2.txt 创建 2.txt 文件并写入 1234 

-  touch ：touch 3.txt 更改一个文件或目录的时间如果 2.txt 不存在，则创建空文件 2.txt 
-  less、more、cat 

-  三者都是将文件内容输出到标准输出，其中 less 和 more 可以分页显示，cat 是显示全部。 
-  三者可以根据已经存在的文件创建新的文件。假设已经存在文件 1.txt。  

```
- cat 1.txt > 2.txt
- less 1.txt > 3.txt
- more 1.txt > 4.txt
```

-  此时创建的文件内容都和 1.txt 中文件内容相同 

### 3、查看端口占用情况（如80）

```
netstat -nlp   查看服务器端口占用情况
netstat -nlp | grep :3031   直接查找某一端口是否被占用
kill PID  杀掉某一进程
```

