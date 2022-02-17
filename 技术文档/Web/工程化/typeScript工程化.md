# Typescript 工程化
## Node服务工程化
Node服务工程化， 主要涉及到亮点： 
* 1 开发环境搭建
* 2 生产环境搭建
### 开发环境搭建
开发环境主要需要满足：
* 1、能够直接运行ts代码
  使用ts-node进行执行
* 2、能够监听文件变化，并自动重新加载代码
  这里还是使用nodemon来监听变化
* 3、能够在vscode中调试
	由于ts-node没有 inspect的调试选项，所以需要使用 node 运行 ts-node/register来执行。
* 前后端代码在一个根目录下，如何区分加载tsconfig
	ts-node执行区分加载tsconfig，是通过设置环境变量实现，主要是TS_NODE_PROJECT 的环境变量，设置为需要配置的卢金哥就可以

以下是最终的启动项目的命令：
	nodemon
		--ext 监听哪些文件后缀
		--watch 监听哪个目录的文件
	cross-env 
		设置环境变量
	node
		-r  ts-node/register 支持ts文件解析
		--inspect=9227 调试端口号
````
nodemon --ext 'ts' --watch './server' --exec 'cross-env NODE_ENV=local cross-env TS_NODE_PROJECT=server/tsconfig.json node -r  ts-node/register  --inspect=9227  ./server/index.ts'
````
### 生产编译环境
生产编译环境，主要有两种：
* 1、webpack打包，会将所有文件打包斤一个最终文件
* 2、tsc直接打包，每个文件对立生成编译后的文件。
由于后端代码不需要发布到线上，所以其实不需要打包到一个文件夹下， 并且文件独立有利于查看问题。因此采用tsc的方式打包。

以下是最终的启动项目的命令：
tsc
	--build 指定tsconfig的位置
````
rimraf dist/* && tsc --build tsconfig.build.json
````

### tsconfig.json配置
* 开发环境
	主要写几个重要的参数：
  	noEmit: 是否编译后生成文件，如果选择为true的话，就不会生成文件。 开发环境设置为 true, 生产编译环境设置为false。
		esModuleInterop: 主要解决倒入的问题 [esModuleInterop](https://zhuanlan.zhihu.com/p/148081795)
		module： esnext ，前端多用
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "sourceMap": true,
    "jsx": "react-jsx"
  },
  "include": [
    "src",
    "server",
    "typings"
  ],
  "extends": "./paths.json"
}
	
	
* 生产环境
  target：node环境可以兼容es2017，所以可以编译后的代码使用es2017,
	module： 对应的模块系统不一样。
````
{
	"extends": "./tsconfig.json",
  "compilerOptions": {
    "noEmit": false,
		"outDir": "./dist",
		"baseUrl": "./server",
		"target": "es2017",
    "module": "commonjs",
  },
  "include": ["src", "server", "typings"],
  "exclude": ["./paths.json", "node_modules", "dist", "src"]
}

````
## 前端服务工程化
	主要是使用 ts-loader