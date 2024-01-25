/** @format */

import { defineUserConfig, defaultTheme } from 'vuepress';
import { recoTheme } from 'vuepress-theme-reco';
import map from './map.json';
export default defineUserConfig({
	lang: 'zh-CN',
	title: `腾远'FE`,
	description: '',
	theme: recoTheme({
		navbar: map,
		colorMode: 'dark',
		docsDir: '/docs',
		primaryColor: '#3aa675'
	})
});
