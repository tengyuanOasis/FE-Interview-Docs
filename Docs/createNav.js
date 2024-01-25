const fs = require("fs");

const dirPath = "./Docs/";

let source = [];
let map = {};

const writeFile = (filePath, fileName, content) => {
	fs.writeFile(filePath + fileName, content, err => {
		if (err) throw err;
	});
};

const getSource = (files, path, fatherPath) => {
	files.forEach((item, index) => {
		let currentPath = path + item;
		fs.stat(currentPath, (err, st) => {
			if (err) {
			} else {
				if (st.isDirectory()) {
					const childrenPath = currentPath + "/";
					const childrenFileList = fs.readdirSync(childrenPath);
					const childrenFatherPath = path;
					getSource(childrenFileList, childrenPath, childrenFatherPath);
				}
				source.push({
					dirPath: path,
					fullPath: path + item,
					title: item.split(/.jpeg|.jpg|.png|.JPEG|.PNG|.JPG/)[0].replace(".md", ""),
					isDir: st.isDirectory()
				});
			}
		});
	});
};

(() => {
	getSource(fs.readdirSync(dirPath), dirPath, "./");
})();

setTimeout(() => {
	/** 创建source.json备份 */
	writeFile("./", "source.json", JSON.stringify(source));

	/** 创建map.md */
	source.forEach(item => {
		const { dirPath, fullPath, title, isDir } = item;
		if (title.match(/(_sidebar|README)/g)) return;

		if (!map[dirPath]) {
			map[dirPath] = [item];
		} else {
			map[dirPath].push(item);
		}
	});

	writeFile("./", "map.json", JSON.stringify(map));

	/** 创建_sidebar.json备份 */
	Object.keys(map).forEach(path => {
		const children = map[path];
		let content = `* [📂Home](/Docs/README)
`;
		children.forEach(({ title, fullPath, isDir }) => {
			if (isDir) {
				const readmeContent = `This is ${title}`;
				writeFile(fullPath + "/", "README.md", readmeContent);
				content += `* [${title}](${fullPath.replace(path, "./")}/README.md)
`;
			} else {
				content += `* [${title}](${fullPath.replace(path, "./")})
`;
			}
		});
		writeFile(path, "_sidebar.md", content);
	});
}, 1000);
