const path = require("path");
const { merge } = require('webpack-merge');
const webconfig = require("./webpack.common");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = merge(webconfig, {
	mode: 'development',
	devtool: "source-map", //源代码查看map
	devServer: {
		port: 80,
		disableHostCheck: true,
		contentBase: path.join(__dirname, '../assets/'), //访问静态文件的路由
		//publicPath: "/asset/", //URL的开始路径； 可以写host，只接收对应host的相应
		hot: true,
		inline: true,
		historyApiFallback: {
				disableDotRule: true,
		},
		stats: 'minimal',
		clientLogLevel: 'warning',
	},
});

module.exports = config;
