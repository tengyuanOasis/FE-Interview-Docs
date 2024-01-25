/** @format */

const fs = require('fs');
const path = require('path');

function walkDir(dir, prefix = '') {
	let result = [];

	fs.readdirSync(dir).forEach((item) => {
		const absolutePath = path.join(dir, item);
		const stat = fs.statSync(absolutePath);

		if (stat.isDirectory()) {
			const children = walkDir(absolutePath, `${prefix}${item}/`);
			if (children.length > 0) {
				result.push({
					text: item,
					link: `/${prefix}${item}`,
					children
				});
			}
		} else if (stat.isFile() && path.extname(item) === '.md') {
			const text = path.basename(item, '.md');
			result.push({
				text,
				link: `/${prefix}${text}.md`
			});
		}
	});

	return result;
}

// 调用函数，假设你的docs目录位于当前工作目录下
const sidebar = [...walkDir('./docs')];

// 将结果写入到当前目录下的map.json文件
fs.writeFileSync('./docs/.vuepress/map.json', JSON.stringify(sidebar, null, 2), 'utf-8');

console.log('侧边栏数据已成功写入map.json文件');
