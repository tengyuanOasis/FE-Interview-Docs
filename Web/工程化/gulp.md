---
title: 玩转Gulp~~~
cover: 'https://source.unsplash.com/user/erondu/1440x960'
coverWidth: 1200
coverHeight: 750
date: 2021-01-18 20:56:34
categories: Gulp
tags: Gulp
top:
permalink:
---

### 01、 Gulp 是什么？

Gulp 则一种前端工作流的工具，帮忙实现业务过程的自动化。

<!--more-->

### 02、Gulp 用来做什么？

前端构建工具，代码压缩等功能

### 03、Gulp Demo？

```js
const gulp = require('gulp');
const del = require('del');
const zip = require('gulp-zip');
const merge = require('merge2');
const appName = require('./package.json').name;
const appVersion = require('./package.json').version;

gulp.task('copy-public', function () {
	return gulp.src('./public/**').pipe(gulp.dest('./build/static'));
});

gulp.task('clear-prebuild', function () {
	return del([
		'./build/server/**',
		'./build/static/**',
		'./build/archive/**',
		'./build/*.zip',
	]);
});

gulp.task('move', function () {
	// const buildId = fs.readFileSync('build/BUILD_ID', 'utf8');
	const archiveNodePath = 'build/archive/nodejs';
	const archiveCDNPath = 'build/archive/cdn';
	return merge(
		// CDN
		gulp
			.src(['./build/static/**', '!./build/static/**/*.map'])
			.pipe(gulp.dest(`${archiveCDNPath}/_next/static/`)),
		gulp.src(['./public/**']).pipe(gulp.dest(`${archiveCDNPath}/`)),
		// Node
		gulp.src(['.npmrc']).pipe(gulp.dest(`${archiveNodePath}`)),
		gulp
			.src([
				'./**',
				'!./node_modules{,/**}',
				'!./build/static/**',
				'!./build/cache/**',
				'!./build/archive/**',
				'!logs{,/**}',
				'!docs{,/**}',
				'!sourcemaps{,/**}',
				'!config{,/**}',
				'!gulpfile.js',
				'!external{,/**}',
				'!*.lock',
				'!README.md',
				'!CHANGELOG.md',
			])
			.pipe(gulp.dest(`${archiveNodePath}`))
	);
});

gulp.task('zip:cdn', function () {
	return gulp
		.src('build/archive/cdn/**', { base: './build/archive/cdn', dot: true })
		.pipe(zip(`${appName}-archive-cdn.zip`))
		.pipe(gulp.dest('./build/archive'));
});

gulp.task('zip:nodejs', function () {
	return gulp
		.src('build/archive/nodejs/**', {
			base: './build/archive/nodejs',
			dot: true,
		})
		.pipe(zip(`${appName}-archive-nodejs.zip`))
		.pipe(gulp.dest('./build/archive'));
});

gulp.task('ci', gulp.series(['copy-public', 'move', 'zip:cdn', 'zip:nodejs']));


```
