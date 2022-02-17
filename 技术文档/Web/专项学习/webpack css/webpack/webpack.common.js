const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
	context: path.join(__dirname, '../src'),
	entry: {
		index: path.resolve(__dirname, `../src/common/index.ts`),
		test3: path.resolve(__dirname, `../src/common/test2.ts`),
		"react/index": path.resolve(__dirname, `../src/react/index.tsx`),
	},
	output: {
		path: path.resolve(__dirname, '../build'),
    publicPath: '/',
	},
	resolve: {
    extensions: ['.js', '.ts', '.tsx', ".tpl"],
    mainFields: ['module', 'main'],
  },
	module: {
		rules: [
			{
        test: /\.tsx?$/,
				use: [
					'ts-loader',
				],
        exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{
            loader: 'style-loader',
          },
					{
            loader: 'css-loader',
          },
				],
			},
		]
	},
	plugins: [
		//多页面，多js，分别打包
    new HtmlWebpackPlugin({
			chunks:['index'],
			filename:'index.html',
      template: path.join(__dirname, '../src/common/index.html'),
      hash: true,
		}),
		new HtmlWebpackPlugin({
			chunks:['test2'],
			filename:'test2.html',
      template: path.join(__dirname, '../src/common/index.html'),
      hash: true,
		}),
		new HtmlWebpackPlugin({
			chunks:['react/index'],
			filename:'react/index.html',
      template: path.join(__dirname, '../src/react/index.html'),
      hash: true,
    }),
	],
	
};

module.exports = config;
