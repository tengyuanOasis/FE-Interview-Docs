1、模块加载机制
2、js解析机制 v8
3、cluster机制
4、eventloop机制
[Node内部工作原理解析](https://www.jianshu.com/p/a8f5a8cdc6ab)

事实上一个 Node 进程通常包含：
1 个 Javascript 执行主线程；
1 个 watchdog 监控线程用于处理调试信息；
1 个 v8 task scheduler 线程用于调度任务优先级，加速延迟敏感任务执行；
4 个 v8 线程（可参考以下代码），主要用来执行代码调优与 GC 等后台任务；以及用于异步 I/O 的 libuv 线程池