const path = require("path");
const webpack = require('webpack');
let config = {
	entry: {
		test: path.resolve(__dirname, `./src/test.tpl`)
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'test.js',
	},
	mode: 'development',
	resolve: {
    extensions: ['.js', '.tpl', '.ts', '.tsx'],
    // Fix webpack's default behavior to not load packages with jsnext:main module
    // (jsnext:main directs not usually distributable es6 format, but es6 sources)
    mainFields: ['module', 'main'],
  },
	module: {
		rules: [{
			test: /\.tpl$/,
			use: {
				loader: path.resolve(__dirname, 'loader/html-loader.js'),
				options: {
					name: 'tt'
				}
			}
		}]
	}
};
webpack(config, (err, stats) => {
	console.log("end...");
	console.log(err );
});
