## QA
* 引入第三方库没有 ts声明文件怎么办？
自己写一个ts文件， 然后使用下边的代码，导入到代码上方。
````
	/// <reference path="../../typings/xlsx-style.d.ts" />
	import xlsxs from 'xlsx-style';
	.....
````

xlsx-style.d.ts
````
	declare module 'xlsx-style' {
		interface XLSXTYPE {
			write(wb: any, options: any): any;
		}

		const xlsxs: XLSXTYPE;
		export = xlsxs;
	}

````

* number 和Number区别
  number是Ts的声明类型， Number是js的数字类型