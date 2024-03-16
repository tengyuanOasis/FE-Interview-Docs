const fs = require('fs');
const readline = require('readline');
const { once } = require('node:events');
const ncp = require('copy-paste');
const path = require('path');

/**
 * 执行标题自动编号
 *
 * @param destMdFilePath MD 文件路径
 */
function doTitleAutoNumbering(destMdFilePath) {
	// 获取标题自动编号的MD文件内容
	const mdFileContent = getAutoTitledMdContent(destMdFilePath);
	mdFileContent.then((res) => {
		// 执行保存（覆盖原文件）
		saveMdContentToFile(destMdFilePath, res);
	});
}

/**
 * 获取标题自动编号的MD文件内容
 *
 * @param destMdFilePath MD 文件路径
 * @return
 */
async function getAutoTitledMdContent(destMdFilePath) {
	// 标题编号
	/*
        标题编号规则：
        - 一级标题为文章的题目，不对一级标题编号
        - 二级、三级、四级、五级、六级标题需要级联编号
     */
	let titleNumber = [0, 0, 0, 0, 0];
	// 存储md文件内容
	let mdContent = '';

	const md = readline.createInterface({
		input: fs.createReadStream(destMdFilePath),
		output: process.stdout,
		terminal: false
	});

	// 一行一行读取数据
	md.on('line', (line) => {
		// 判断是否为标题行，如果是标题，是几级标题
		const curTitleLevel = calcTitleLevel(line);
		if (curTitleLevel !== -1) {
			// 插入标题序号
			line = insertTitleNumber(line, titleNumber);

			// 重新计算标题计数器
			reCalcTitleCounter(curTitleLevel, titleNumber);
		}
		mdContent = mdContent.concat(line, '\r\n');
	});

	// 等待监听事件完成
	await once(md, 'close');
	return mdContent;
}

/**
 * 计算当前标题等级
 *
 * @param curLine 当前行的内容
 * @return -1 ：非标题行；大于等于 2 的正数：当前行的标题等级
 */
function calcTitleLevel(curLine) {
	// 由于一级标题无需编号，所以从二级标题开始判断
	let isTitle = curLine.startsWith('##');
	if (!isTitle) {
		// 返回 -1 表示非标题行
		return -1;
	}

	// 现在来看看是几级标题
	return curLine.indexOf(' ');
}

/**
 * 向标题行中插入标题序号
 *
 * @param curLine     当前行内容
 * @param titleNumber 标题计数器
 * @return
 */
function insertTitleNumber(curLine, titleNumber) {
	// 标题等级（以空格分隔的前提是 Typora 开启严格模式）
	let titleLevel = curLine.indexOf(' ');
	// 标题等级部分
	let titleLevelStr = curLine.substring(0, titleLevel);
	// 标题内容部分
	let titleContent = curLine.substring(titleLevel + 1);
	// 先去除之前的编号
	titleContent = removePreviousTitleNumber(titleContent);
	// 标题等级递增
	let titleIndex = titleLevel - 2;
	titleNumber[titleIndex] += 1;
	// 标题序号
	let titleNumberStr = '';
	switch (titleLevel) {
		case 2:
			titleNumberStr = `${titleNumber[0]}`;
			break;
		case 3:
			titleNumberStr = `${titleNumber[0]}.${titleNumber[1]}`;
			break;
		case 4:
			titleNumberStr = `${titleNumber[0]}.${titleNumber[1]}.${titleNumber[2]}`;
			break;
		case 5:
			titleNumberStr = `${titleNumber[0]}.${titleNumber[1]}.${titleNumber[2]}.${titleNumber[3]}`;
			break;
		case 6:
			titleNumberStr = `${titleNumber[0]}.${titleNumber[1]}.${titleNumber[2]}.${titleNumber[3]}.${titleNumber[4]}`;
			break;
	}
	titleNumberStr += '、';
	// 插入标题序号
	titleContent = titleNumberStr + titleContent;
	// 返回带序号的标题
	curLine = titleLevelStr + ' ' + titleContent;
	return curLine;
}

/**
 * 去除之前标题的编号
 * @param titleContent 标题内容
 * @return 去除标题编号之后的标题内容
 */
function removePreviousTitleNumber(titleContent) {
	// 寻找标题中的 、 字符
	let index = titleContent.indexOf('、');
	if (index > 0 && index < 10) {
		// 之前已经进行过标号
		return titleContent.substring(index + 1);
	} else {
		// 之前未进行过标号，直接返回
		return titleContent;
	}
}

/**
 *  重新计算标题计数器的值
 *
 * @param titleLevel  当前行的标题等级
 * @param titleNumber 标题计数器
 */
function reCalcTitleCounter(titleLevel, titleNumber) {
	// 二级标题更新时，三级及三级以下的标题序号重置为 0
	let startIndex = titleLevel - 1;
	for (let i = startIndex; i < titleNumber.length; i++) {
		titleNumber[i] = 0;
	}
}

/**
 * 保存MD文件
 *
 * @param destMdFilePath MD文件路径
 * @param mdFileContent  MD文件内容
 */
function saveMdContentToFile(destMdFilePath, mdFileContent) {
	// 不保存空文件
	if (mdFileContent == null || mdFileContent === '') {
		return;
	}
	// 执行保存
	fs.writeFile(destMdFilePath, mdFileContent, (err) => {
		if (err) {
			return console.log(err);
		}
		console.log('数据写入成功！');
	});
}

function getNcpPath() {
	return new Promise((resolve, reject) => {
		ncp.paste((err, p) => {
			if (err) {
				reject(err);
			} else {
				if (typeof p === 'string') {
					resolve(p);
				}
			}
		});
	});
}

(async () => {
	const arguments = process.argv;
	let mdPath = '';
	// 可以使用循环迭代所有的命令行参数（包括node路径和文件路径）
	// 命令行输入参数的情况
	if (arguments.length >= 3) {
		// 解决路径带空格的情况
		for (let i = 2; i < arguments.length; i++) {
			mdPath = mdPath.concat(arguments[i], ' ');
		}
		mdPath = mdPath.trim();
	}

	// 没有输入参数的情况，则去粘贴板寻找是否有文件路径
	if (arguments.length < 3) {
		mdPath = await getNcpPath();
	}

	let stat = null;
	try {
		// 路径带空格，需要输入双引号
		stat = fs.lstatSync(mdPath);
	} catch (err) {
		console.log('参数错误，文件不存在');
		return;
	}
	if (stat.isFile()) {
		if (!mdPath.endsWith('.md')) {
			console.log('参数错误，请输入md文件的路径');
			return;
		}
		// 执行标题自动编号
		doTitleAutoNumbering(mdPath);
	}
	if (stat.isDirectory()) {
		let dirFiles = fs.readdirSync(mdPath);
		dirFiles.forEach((item) => {
			let filePath = path.join(mdPath, item);
			if (filePath.endsWith('.md')) {
				// 执行标题自动编号
				doTitleAutoNumbering(filePath);
			}
		});
	}
})();
