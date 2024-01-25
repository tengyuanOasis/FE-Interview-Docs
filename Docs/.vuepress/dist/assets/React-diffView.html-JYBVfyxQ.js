import{_ as i,r as d,o as s,c as r,a as o,b as e,d as l,f as t,e as u}from"./app-iph3vjA0.js";const a={},c=e("p",null,"文档对比组件封装...",-1),h=u(`<h1 id="react-diff-view" tabindex="-1"><a class="header-anchor" href="#react-diff-view" aria-hidden="true">#</a> react-diff-view</h1><p>https://raw.githubusercontent.com/praneshr/react-diff-viewer.git</p><h1 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add react-diff-viewer

# or

npm i react-diff-viewer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="封装组件-diffview-tsx" tabindex="-1"><a class="header-anchor" href="#封装组件-diffview-tsx" aria-hidden="true">#</a> 封装组件 DiffView.tsx</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import * as React from &#39;react&#39;;

import ReactDiffViewer from &#39;react-diff-viewer&#39;;

export interface DiffViewProps {
	oldValue: string;
	newValue: string;
	splitView?: boolean; //true 分两栏 | false  分一栏
	leftTitle?: string;
	rightTitle?: string;
	style?: object
}

export class DiffView extends React.Component&lt;DiffViewProps&gt; {
	public render() {
		const { oldValue, newValue, splitView = true, leftTitle, rightTitle, style } = this.props;
		return (
			&lt;div style={{
				...style,
				overflowY: &#39;scroll&#39;,
				wordWrap: &#39;break-word&#39;,
				wordBreak: &#39;break-all&#39;
			}}&gt;
				&lt;ReactDiffViewer
					oldValue={oldValue}
					newValue={newValue}
					splitView={splitView}
					leftTitle={leftTitle}
					rightTitle={rightTitle}
				/&gt;
			&lt;/div&gt;

		);
	}
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h1><p>https://raw.githubusercontent.com/praneshr/react-diff-viewer#props</p>`,8),f=e("thead",null,[e("tr",null,[e("th",null,"Prop"),e("th",null,"Type"),e("th",null,"Default"),e("th",null,"Description")])],-1),v=e("tr",null,[e("td",null,"oldValue"),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"''")]),e("td",null,"Old value as string.")],-1),m=e("tr",null,[e("td",null,"newValue"),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"''")]),e("td",null,"New value as string.")],-1),b=e("tr",null,[e("td",null,"splitView"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"true")]),e("td",null,[l("Switch between "),e("code",null,"unified"),l(" and "),e("code",null,"split"),l(" view.")])],-1),_=e("tr",null,[e("td",null,"disableWordDiff"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")]),e("td",null,"Show and hide word diff in a diff line.")],-1),g=e("td",null,"compareMethod",-1),p=e("td",null,[e("code",null,"DiffMethod")],-1),w=e("td",null,[e("code",null,"DiffMethod.CHARS")],-1),x={href:"https://raw.githubusercontent.com/praneshr/react-diff-viewer/tree/v3.0.0#text-block-diff-comparison",target:"_blank",rel:"noopener noreferrer"},V=e("tr",null,[e("td",null,"hideLineNumbers"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"false")]),e("td",null,"Show and hide line numbers.")],-1),y=e("td",null,"renderContent",-1),k=e("td",null,[e("code",null,"function")],-1),T=e("td",null,[e("code",null,"undefined")],-1),D={href:"https://raw.githubusercontent.com/praneshr/react-diff-viewer#syntax-highlighting",target:"_blank",rel:"noopener noreferrer"},L=e("tr",null,[e("td",null,"onLineNumberClick"),e("td",null,[e("code",null,"function")]),e("td",null,[e("code",null,"undefined")]),e("td",null,[l("Event handler for line number click. "),e("code",null,"(lineId: string) => void")])],-1),N=e("tr",null,[e("td",null,"highlightLines"),e("td",null,[e("code",null,"array[string]")]),e("td",null,[e("code",null,"[]")]),e("td",null,[l("List of lines to be highlighted. Works together with "),e("code",null,"onLineNumberClick"),l(". Line number are prefixed with "),e("code",null,"L"),l(" and "),e("code",null,"R"),l(" for the left and right section of the diff viewer, respectively. For example, "),e("code",null,"L-20"),l(" means 20th line in the left pane. To highlight a range of line numbers, pass the prefixed line number as an array. For example, "),e("code",null,"[L-2, L-3, L-4, L-5]"),l(" will highlight the lines "),e("code",null,"2-5"),l(" in the left pane.")])],-1),R=e("tr",null,[e("td",null,"showDiffOnly"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"true")]),e("td",null,"Shows only the diffed lines and folds the unchanged lines")],-1),C=e("tr",null,[e("td",null,"extraLinesSurroundingDiff"),e("td",null,[e("code",null,"number")]),e("td",null,[e("code",null,"3")]),e("td",null,[l("Number of extra unchanged lines surrounding the diff. Works along with "),e("code",null,"showDiffOnly"),l(".")])],-1),P=e("tr",null,[e("td",null,"codeFoldMessageRenderer"),e("td",null,[e("code",null,"function")]),e("td",null,[e("code",null,"Expand {number} of lines ...")]),e("td",null,"Render Prop API to render code fold message.")],-1),S=e("td",null,"styles",-1),I=e("td",null,[e("code",null,"object")],-1),E=e("td",null,[e("code",null,"{}")],-1),B={href:"https://raw.githubusercontent.com/praneshr/react-diff-viewer#overriding-styles",target:"_blank",rel:"noopener noreferrer"},M=e("tr",null,[e("td",null,"useDarkTheme"),e("td",null,[e("code",null,"boolean")]),e("td",null,[e("code",null,"true")]),e("td",null,"To enable/disable dark theme.")],-1),O=e("tr",null,[e("td",null,"leftTitle"),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"undefined")]),e("td",null,"Column title for left section of the diff in split view. This will be used as the only title in inline view.")],-1),W=e("tr",null,[e("td",null,"rightTitle"),e("td",null,[e("code",null,"string")]),e("td",null,[e("code",null,"undefined")]),e("td",null,"Column title for right section of the diff in split view. This will be ignored in inline view.")],-1),A=e("tr",null,[e("td",null,"linesOffset"),e("td",null,[e("code",null,"number")]),e("td",null,[e("code",null,"0")]),e("td",null,"Number to start count code lines from.")],-1);function F(j,H){const n=d("ExternalLinkIcon");return s(),r("div",null,[c,o("more"),h,e("table",null,[f,e("tbody",null,[v,m,b,_,e("tr",null,[g,p,w,e("td",null,[l("JsDiff text diff method used for diffing strings. Check out the "),e("a",x,[l("guide"),t(n)]),l(" to use different methods.")])]),V,e("tr",null,[y,k,T,e("td",null,[l("Render Prop API to render code in the diff viewer. Helpful for "),e("a",D,[l("syntax highlighting"),t(n)])])]),L,N,R,C,P,e("tr",null,[S,I,E,e("td",null,[l("To override style variables and styles. Learn more about "),e("a",B,[l("overriding styles"),t(n)])])]),M,O,W,A])])])}const Y=i(a,[["render",F],["__file","React-diffView.html.vue"]]);export{Y as default};
