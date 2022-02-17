jsConfig.json是Vscode下用来处理js文件中显示的一个代码。
作用1：
	当我们代码中使用了alias的时候，可以通过添加 paths来解决
````
{
  "compilerOptions": {
    "target": "ES6",
    "jsx": "react",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "module": "commonJS"
  },
  "exclude": ["node_modules", "dist"],
  "include": ["src/**/*"]
}
````
其中 "module": "commonJS" 必须添加，如果不添加这一样， 默认省略index的文件，就会跳转失败。
[TS Paths not working with index.ts when using a wildcard - more explained inside #26859](https://github.com/microsoft/TypeScript/issues/26859)