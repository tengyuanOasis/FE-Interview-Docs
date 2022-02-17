1、模块路径获取，
	1）如果内置模块，就直接内置模块路径
	2）否则从当前路径开始，往上找所有的node_modules
2、如果有cache,用绝对路径作为key，直接放回
3、内置模块直接放回
4、其他模块，加载模块，并放入cache中。
[require() 源码解读](http://www.ruanyifeng.com/blog/2015/05/require.html)