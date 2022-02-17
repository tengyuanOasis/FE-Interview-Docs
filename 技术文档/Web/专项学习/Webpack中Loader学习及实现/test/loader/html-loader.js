const loaderUtils = require('loader-utils');
const { validateOptions } = require('schema-utils');

module.exports = function(source) {
		console.log("in..", source);
		var opts = loaderUtils.getOptions(this) || {};
		let result = source.replace(/tt/g, "sss");
		let t = `module.exports = () => {${result}}`
		console.log("loader1:", t);
    return t;
};