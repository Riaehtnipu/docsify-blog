var sidebarTxt = '- [**README**](\README.md)\n';
var path = require('path');
// docs文件夹，可以修改
var curPath = path.resolve('./../docs');
var baseDirArr = [];

function walkSync(currentDirPath, callback) {
	var fs = require('fs'),
		path = require('path');
	fs.readdirSync(currentDirPath).forEach(function (name) {
		var filePath = path.join(currentDirPath, name);
		var stat = fs.statSync(filePath);
		if (stat.isFile()) {//是文件
			callback(filePath, stat);
		} else if (stat.isDirectory()) {
			walkSync(filePath, callback);
		}
	});
}

walkSync(curPath, function (filePath, stat) {
	if (".md" == path.extname(filePath).toLowerCase()//后缀是.md
		&& "_" != path.basename(filePath).substr(0, 1)
		&& path.basename(filePath).includes(`.md`)) {

		var relativeFilePath = filePath.substr(curPath.length + 1);
		if (relativeFilePath == path.basename(filePath)) {//如果最后的string和原来的一样
			return;
		}
		var relativeFilePathArr = relativeFilePath.split('\\')//这里可以看情况改

		for (var i = 0; i < relativeFilePathArr.length; i++) {
			if (baseDirArr[i] == relativeFilePathArr[i]) {//相同就continue
				continue;
			}
			baseDirArr[i] = relativeFilePathArr[i]//记录
			for (var j = 0; j < i; j++) {
				sidebarTxt += '  '
			}
			if (i != relativeFilePathArr.length - 1) {//如果不是md文件就输出文件夹
				sidebarTxt += '- **' + relativeFilePathArr[i] + '**\n';
			}
			if (i == relativeFilePathArr.length - 1) {//输入md文件夹
				// 这里可以修改
				sidebarTxt += '- [' + path.basename(relativeFilePathArr[i],".md") + '](' + "docs/" + relativeFilePath + ')\n';
			}

		}
	}
});

var path = require('path');
var fs = require('fs');

// 替换反斜杠
// sidebarTxt = sidebarTxt.replace(/\\/g, '/');
console.log(sidebarTxt);

// docs文件夹，可以修改
fs.writeFile(path.resolve('./../docs') + '/_sidebar.md', sidebarTxt, function (err) {
	if (err) {
		console.error(err);
	}
});

