const path = require('path');
const nodeExternals = require('webpack-node-externals');
let config = {
  mode: 'production',
  context: path.join(__dirname, '../tsserver'),
  target: 'node', //这样不会打包 内置方法
  devtool: 'source-map',
  entry: {
    index: path.resolve(__dirname, `../tsserver/index.ts`),
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
  },
  resolve: {
    extensions: ['.js', '.ts'],
    mainFields: ['module', 'main'],
  },
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader',
            options: {
              // 加快编译速度
              transpileOnly: true,
              // 指定特定的ts编译配置，为了区分脚本的ts配置
              configFile: path.resolve(__dirname, '../tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    // Server 中不压缩混淆，避免出错看不到位置
    minimize: false,
  },
};

module.exports = config;
