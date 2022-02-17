# <center>devserver实战</center>
项目开发过程中，常见的场景是 前后端对齐接口协议以后，各自进行开发，此时前端需要模拟后端的请求结果，此时 devServe就派上用场了。
### devserver能做什么
1. mock后端数据
2. 部署前端测试服务器

````
devServer: {
    disableHostCheck: true,
    contentBase: path.join(__dirname, '../src'),
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    stats: 'minimal',
    clientLogLevel: 'warning',
    proxy: {
      '/api': {
        target: 'http://9.139.4.73', // 开发环境
        changeOrigin: true,
        bypass: function(req, res, proxyOptions) {
          const apiName = req.path.replace(/\/+$/g, "").split("/").pop();
          if (mockRef[apiName]) {
            res.end(JSON.stringify(require(`../mock/${apiName}`)));
          }
          
        }
      },
      '/bff': {
        target: 'http://localhost:8888',
      },
    },
  },
````

* proxy 是要代理的请求路径，
    target是该proxy要转发的api
    bypass: 如果某些api不想转发到target的时候，可以使用， res.end是返回给前端的结果。
* 此处的api配置是： 
    某些接口走后端联调数据， 某些接口走本地mock数据
