## Npm 、 Yarn、Pnpm 命令对比

| 命令               | npm                               | yarn                           | pnpm                           |
| ------------------ | --------------------------------- | ------------------------------ | ------------------------------ |
| 安装依赖           | `npm install`                     | `yarn install`                 | `pnpm install`                 |
| 安装指定版本的依赖 | `npm install <package>@<version>` | `yarn add <package>@<version>` | `pnpm add <package>@<version>` |
| 卸载依赖           | `npm uninstall <package>`         | `yarn remove <package>`        | `pnpm remove <package>`        |
| 更新依赖           | `npm update`                      | `yarn upgrade`                 | `pnpm update`                  |
| 查看全局安装的依赖 | `npm list -g --depth 0`           | `yarn global list`             | `pnpm ls -g`                   |
| 查看本地安装的依赖 | `npm list --depth 0`              | `yarn list`                    | `pnpm ls`                      |
| 启动项目           | `npm start`                       | `yarn start`                   | `pnpm start`                   |
| 构建项目           | `npm run build`                   | `yarn build`                   | `pnpm run build`               |
| 运行测试           | `npm test`                        | `yarn test`                    | `pnpm test`                    |
| 清除缓存           | `npm cache clean`                 | `yarn cache clean`             | `pnpm store prune`             |

## Pnpm

1. 节省磁盘空间
2. 提高安装速度
3. 创建一个非扁平的 node_modules 目录

参考文档：

- [pnpm 的出现解决了什么问题？](https://juejin.cn/post/7168767071264702471)
