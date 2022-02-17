使用JSON-schema定义数据，此时知道了数据的结构。
然后根据json-schema的数据定义，提前生成转成字符串的函数，使用Function方法生成对应的方法
，此时比普通的 stringify会少了一个判断类型的过程。
[源码](https://github.com/fastify/fast-json-stringify.git)