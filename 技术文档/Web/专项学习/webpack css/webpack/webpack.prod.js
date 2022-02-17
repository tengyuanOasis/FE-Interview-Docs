const { merge } = require('webpack-merge');
const webconfig = require("./webpack.common");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let config = merge(webconfig, {
	mode: 'production',
	output: {
		filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js',
    publicPath: '//img.test.com/qcintl/',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
            loader: 'css-loader',
          },
				],
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
		}),
	],
});
module.exports = config;
