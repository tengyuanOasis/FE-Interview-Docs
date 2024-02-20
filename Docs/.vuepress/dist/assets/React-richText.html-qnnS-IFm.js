import{_ as e,o as n,c as i,a as s,b as t,d,e as l}from"./app-1sZ14lpL.js";const r={},a=t("h2",{id:"富文本编辑器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#富文本编辑器","aria-hidden":"true"},"#"),d(" 富文本编辑器")],-1),v=l(`<p>https://www.yuque.com/braft-editor/be/gz44tn#wx1vkv</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React, { Component } from &#39;react&#39;;
// 引入编辑器组件

import BraftEditor from &#39;braft-editor&#39;;
// 引入编辑器样式
import &#39;braft-editor/dist/index.css&#39;;

import { UploadFn } from &#39;./UploadFn&#39;;

export class RichText extends Component {
	constructor() {
		super();
		this.state = {
			editorState: BraftEditor.createEditorState(null),
		};
		RichText.submitContent = this.submitContent.bind(this);
	}

	async componentDidMount() {
		// 假设此处从服务端获取html格式的编辑器内容
		let htmlContent = this.props.htmlContent || null;
		// 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
		this.setState({
			editorState: BraftEditor.createEditorState(htmlContent),
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.htmlContent !== this.state.htmlContent) {
			this.setState({
				editorState: BraftEditor.createEditorState(nextProps.htmlContent),
			});
		}
	}

	submitContent = async () =&gt; {
		// 在编辑器获得焦点时按下ctrl+s会执行此方法
		// 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
		const htmlContent = this.state.editorState.toHTML();
		return htmlContent;
	};

	handleEditorChange = editorState =&gt; {
		this.setState({ editorState });
	};

	render() {
		return (
			&lt;BraftEditor
				value={this.state.editorState}
				onChange={this.handleEditorChange}
				onSave={this.submitContent}
				onBlur={() =&gt; {
					const htmlContent = this.state.editorState.toHTML();
				}}
				// excludeControls={[&#39;options&#39;]}
				media={{ uploadFn: UploadFn }}
			/&gt;
		);
	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function c(o,m){return n(),i("div",null,[a,s("more"),v])}const b=e(r,[["render",c],["__file","React-richText.html.vue"]]);export{b as default};
