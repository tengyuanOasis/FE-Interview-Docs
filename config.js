window.$docsify = {
	loadSidebar: true, // 加载 _sidebar.md
	loadNavbar: true, //加载 _navbar.md
	onlyCover: false, //只在访问主页时加载封面。
	coverpage: true, //加载封面
	auto2top: true, //切换页面后是否自动跳转到页面顶部。
	subMaxLevel: 6, //表示只显示h1~h5的标题，对应#和##。
	maxLevel: 6, //最大支持渲染的标题层级。
	relativePath: true, // 启用相对路径
	autoHeader: true, //自动为每个页面增加标题
	mergeNavbar: true, //小屏设备下合并导航栏到侧边栏。
	routerMode: "hash", // 'hash' or history
	// toc: {
	// 	//右侧toc
	// 	tocMaxLevel: 6,
	// 	target: "h2, h3, h4, h5, h6"
	// },
	// 全文搜索
	search: {
		depth: 6,
		noData: "没有搜到!",
		placeholder: "搜索...",
		// 避免搜索索引冲突,同一域下的多个网站之间
		namespace: "website-1"
	},
	// 底部导航
	// pagination: {
	// 	previousText: "上一页",
	// 	nextText: "下一页",
	// 	crossChapter: true,
	// 	crossChapterText: true
	// },
	count: {
		countable: true,
		fontsize: "0.9em",
		color: "rgb(90,90,90)",
		language: "chinese"
	}
};
