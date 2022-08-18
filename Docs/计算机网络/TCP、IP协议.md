### 1、什么是TCP、IP

> TCP/IP 是互联网相关的各类协议的总称

### 2、TCP/IP 分层

> 应用层、传输层、网络层、数据链路层 ；

### 3、TCP/IP 分层的好处

> 1、模块化，便于修改维护
>
> 2、各层只需要协调好接口部分之外，每个层次内部设计可以自由改动

### 4、应用层作用

> 应用层决定了**向用户提供应用服务**时通信的活动
>
> TCP/IP 协议族内预存了各类通用的应用服务。比如：
>
> **FTP**（FileTransfer Protocol，文件传输协议）
>
> **DNS**（Domain Name System，域名系统）服务就是其中两类。
>
> **HTTP 协议**

### 5、传输层作用

> 传输层对上层应用层 ， 提供处于网络连接中的两台计算机之间的数据传输
>
> 在传输层有两个性质不同的协议：
>
> - **TCP**（Transmission ControlProtocol，传输控制协议）
>
>   **TCP 协议为了更容易传送大数据才把数据分割，而且 TCP 协议能够确认数据最终是否送达到对方。**
>
> - UDP（User Data Protocol，用户数据报协议）。

### 6、网络层（又名网络互连层）作用

> 网络层用来处理在网络上流动的数据包（两台pc之间数据传输）。
>
> 数据包是网络传输的最小数据单位。
>
> 该层规定了通过怎样的路径（所谓的传输路线）到达对方计算机，并把数据包传送给对方。
>
> IP（Internet Protocol）网际协议位于网络层

### 7、链路层（又名数据链路层，网络接口层）

> 用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱动、NIC（Network Interface Card，网络适配器，即网卡），及光纤等物理可见部分（还包括连接器等一切传输媒介）。硬件上的范畴均在链路层的作用范围之内。

### 8、TCP/IP 通信传输流

![image-20220212210823593](https://raw.githubusercontent.com/JuntengMa/image/master/image/image-20220212210823593.png)

### 9、TCP三次握手

![image-20220212211759313](https://raw.githubusercontent.com/JuntengMa/image/master/image/image-20220212211759313.png)

> 为了准确无误地将数据送达目标处，TCP 协议采用了三次握手（three-way handshaking）策略。用 TCP 协议把数据包送出去后，TCP不会对传送后的情况置之不理，它一定会向对方确认是否成功送达。
>
> 握手过程中使用了 TCP 的标志（flag） —— SYN（synchronize）和ACK（acknowledgement）。
>
> 1、发送端首先发送一个带 SYN 标志的数据包给对方。
>
> 2、接收端收到后，回传一个带有 SYN/ACK 标志的数据包以示传达确认信息。
>
> 3、最后，发送端再回传一个带 ACK 标志的数据包，代表“握手”结束。
>
> 若在握手过程中某个阶段莫名中断，TCP 协议会再次以相同的顺序发送相同的数据包。

### 10、DNS

> DNS（Domain Name System）服务是和 HTTP 协议一样位于应用层的协议。
>
> 它提供**域名到 IP 地址之间的解析**服务。
>
> 计算机既可以被赋予 IP 地址，也可以被赋予主机名和域名。
>
> 比如www.hackr.jp。用户通常使用主机名或域名来访问对方的计算机，而不是直接通过 IP地址访问。因为与 IP 地址的一组纯数字相比，用字母配合数字的表示形式来指定计算机名更符合人类的记忆习惯。
>
> DNS 协议提供通过域名查找 IP 地址，或逆向从 IP 地址反查域名的服务。

![image-20220212212229926](https://raw.githubusercontent.com/JuntengMa/image/master/image/image-20220212212229926.png)

10、各协议与Http的关系

![image-20220212212414496](https://raw.githubusercontent.com/JuntengMa/image/master/image/image-20220212212414496.png)

11、URI 、URL区别

- URI

  > URI 是 Uniform Resource Identifier 的缩写。RFC2396 分别对这 3 个单词进行了如下定义。
  >
  > - Uniform规定**统一的格式可方便处理多种不同类型的资源**，而不用根据上下文环境来识别资源指定的访问方式。另外，加入新增的协议方案（如http: 或 ftp:）也更容易。
  >
  > - Resource资源的定义是“**可标识的任何东西**”。除了文档文件、图像或服务（例如当天的天气预报）等能够区别于其他类型的，全都可作为资源。另外，资源不仅可以是单一的，也可以是多数的集合体。
  > - Identifier表示**可标识的对象**。也称为标识符。

  > 综上所述，URI 就是由某个协议方案表示的资源的定位标识符。协议方案是指访问资源所使用的协议类型名称。如采用 HTTP 协议时，协议方案就是 http

- URL

  > URL 表示资源的地点（互联网上所处的位置），可见 URL 是 URI 的子集。