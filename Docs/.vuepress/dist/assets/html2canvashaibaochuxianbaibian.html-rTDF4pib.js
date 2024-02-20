import{_ as n,o as s,c as t,e as a}from"./app-1sZ14lpL.js";const e={},i=a(`<h2 id="使用html2canvas-出现白边" tabindex="-1"><a class="header-anchor" href="#使用html2canvas-出现白边" aria-hidden="true">#</a> 使用html2canvas 出现白边</h2><p>html2canvas 引起白边的原因 大致有以下几个</p><ol><li>生成海报dom的父级元素的 margin/padding 都有可能造成出现白边的情况</li><li>页面的滚动造成生成海报时出现偏移，可以设置 html2canvas options 中的 x, y/ scrollX,scrollY 为 0</li><li>生成海报dom的页面布局使用的时 position：absolute 布局，而父元素又设置了relative，那么生成海报的dom就会随着页面滚动，可在父元素设置overflow：hidden 属性（注意：如果父元素需要超出滚动则不能设置此属性，可尝试去除父元素的relative属性）</li></ol><p>absolute 的特性文档：https://juejin.cn/post/6844903874252242951</p><p>html2canvas 中文文档 https://allenchinese.github.io/html2canvas-docs-zh-cn/docs/html2canvas-configuration.html</p><h2 id="使用html2canvas-绘制海报" tabindex="-1"><a class="header-anchor" href="#使用html2canvas-绘制海报" aria-hidden="true">#</a> 使用html2canvas 绘制海报</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">generateImg</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">shareContent<span class="token punctuation">,</span>dpr<span class="token punctuation">,</span>options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>shareContent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 滚动值置为0，避免白边</span>
        shareContent<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        shareContent<span class="token punctuation">.</span><span class="token punctuation">.</span>scrollLeft <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        window<span class="token punctuation">.</span>pageYOffset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        window<span class="token punctuation">.</span>pageXOffset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollLeft <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollLeft <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> html2canvas <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>&#39;html2canvas<span class="token string">&quot;)  // html2canvas使用稳定版本 &quot;</span>html2canvas<span class="token string">&quot;: &quot;</span><span class="token number">1.0</span><span class="token number">.0</span><span class="token operator">-</span>rc<span class="token punctuation">.</span><span class="token number">4</span>&quot; 
        
        <span class="token keyword">let</span> width <span class="token operator">=</span> shareContent<span class="token punctuation">.</span>offsetWidth<span class="token punctuation">;</span>
        <span class="token keyword">let</span> height <span class="token operator">=</span> shareContent<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">;</span>
        shareContent<span class="token punctuation">.</span>style<span class="token punctuation">.</span>opacity <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> pxDpr <span class="token operator">=</span> window<span class="token punctuation">.</span>devicePixelRatio<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dpr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            pxDpr <span class="token operator">=</span> dpr<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">let</span> scale <span class="token operator">=</span> pxDpr<span class="token punctuation">;</span>

        canvas<span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
        canvas<span class="token punctuation">.</span>height <span class="token operator">=</span> height<span class="token punctuation">;</span>

        <span class="token keyword">let</span> opts <span class="token operator">=</span> <span class="token punctuation">{</span>
            scale<span class="token punctuation">,</span>
            canvas<span class="token punctuation">,</span>
            <span class="token literal-property property">logging</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            width<span class="token punctuation">,</span>
            height<span class="token punctuation">,</span>
            <span class="token literal-property property">useCORS</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">allowTaint</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token literal-property property">dpi</span><span class="token operator">:</span> scale <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token operator">...</span>options
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token function">html2canvas</span><span class="token punctuation">(</span>shareContent<span class="token punctuation">,</span>opts<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">canvas</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> img <span class="token operator">=</span> Canvas2Image<span class="token punctuation">.</span><span class="token function">convertToImage</span><span class="token punctuation">(</span>
                canvas<span class="token punctuation">,</span>
                canvas<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
                canvas<span class="token punctuation">.</span>height
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> img<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javaScript line-numbers-mode" data-ext="javaScript"><pre class="language-javaScript"><code>// Canvas2Image 文件
/**
 * covert canvas to image
 * and save the image file
 */

export const Canvas2Image = function () {
	// check if support sth.
	var $support = function () {
		var canvas = document.createElement(&#39;canvas&#39;),
			ctx = canvas.getContext(&#39;2d&#39;);

		return {
			canvas: !!ctx,
			imageData: !!ctx.getImageData,
			dataURL: !!canvas.toDataURL,
			btoa: !!window.btoa
		};
	}();

	var downloadMime = &#39;image/octet-stream&#39;;

	function scaleCanvas (canvas, width, height) {
		var w = canvas.width,
			h = canvas.height;
		if (width == undefined) {
			width = w;
		}
		if (height == undefined) {
			height = h;
		}

		var retCanvas = document.createElement(&#39;canvas&#39;);
		var retCtx = retCanvas.getContext(&#39;2d&#39;);
		retCanvas.width = width;
		retCanvas.height = height;
		retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
		return retCanvas;
	}

	function getDataURL (canvas, type, width, height) {
		canvas = scaleCanvas(canvas, width, height);
		return canvas.toDataURL(type);
	}

	function saveFile (strData) {
		document.location.href = strData;
	}

	function genImage(strData) {
		var img = document.createElement(&#39;img&#39;);
		img.src = strData;
		return img;
	}
	function fixType (type) {
		type = type.toLowerCase().replace(/jpg/i, &#39;jpeg&#39;);
		var r = type.match(/png|jpeg|bmp|gif/)[0];
		return &#39;image/&#39; + r;
	}
	function encodeData (data) {
		if (!window.btoa) { throw &#39;btoa undefined&#39;; }
		var str = &#39;&#39;;
		if (typeof data == &#39;string&#39;) {
			str = data;
		} else {
			for (var i = 0; i &lt; data.length; i ++) {
				str += String.fromCharCode(data[i]);
			}
		}

		return btoa(str);
	}
	function getImageData (canvas) {
		var w = canvas.width,
			h = canvas.height;
		return canvas.getContext(&#39;2d&#39;).getImageData(0, 0, w, h);
	}
	function makeURI (strData, type) {
		return &#39;data:&#39; + type + &#39;;base64,&#39; + strData;
	}


	/**
	 * create bitmap image
	 * 按照规则生成图片响应头和响应体
	 */
	var genBitmapImage = function (oData) {

		//
		// BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
		// BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
		//

		var biWidth = oData.width;
		var biHeight	= oData.height;
		var biSizeImage = biWidth * biHeight * 3;
		var bfSize = biSizeImage + 54; // total header size = 54 bytes

		//
		//  typedef struct tagBITMAPFILEHEADER {
		//  	WORD bfType;
		//  	DWORD bfSize;
		//  	WORD bfReserved1;
		//  	WORD bfReserved2;
		//  	DWORD bfOffBits;
		//  } BITMAPFILEHEADER;
		//
		var BITMAPFILEHEADER = [
			// WORD bfType -- The file type signature; must be &quot;BM&quot;
			0x42, 0x4D,
			// DWORD bfSize -- The size, in bytes, of the bitmap file
			bfSize &amp; 0xff, bfSize &gt;&gt; 8 &amp; 0xff, bfSize &gt;&gt; 16 &amp; 0xff, bfSize &gt;&gt; 24 &amp; 0xff,
			// WORD bfReserved1 -- Reserved; must be zero
			0, 0,
			// WORD bfReserved2 -- Reserved; must be zero
			0, 0,
			// DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
			54, 0, 0, 0
		];

		//
		//  typedef struct tagBITMAPINFOHEADER {
		//  	DWORD biSize;
		//  	LONG  biWidth;
		//  	LONG  biHeight;
		//  	WORD  biPlanes;
		//  	WORD  biBitCount;
		//  	DWORD biCompression;
		//  	DWORD biSizeImage;
		//  	LONG  biXPelsPerMeter;
		//  	LONG  biYPelsPerMeter;
		//  	DWORD biClrUsed;
		//  	DWORD biClrImportant;
		//  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
		//
		var BITMAPINFOHEADER = [
			// DWORD biSize -- The number of bytes required by the structure
			40, 0, 0, 0,
			// LONG biWidth -- The width of the bitmap, in pixels
			biWidth &amp; 0xff, biWidth &gt;&gt; 8 &amp; 0xff, biWidth &gt;&gt; 16 &amp; 0xff, biWidth &gt;&gt; 24 &amp; 0xff,
			// LONG biHeight -- The height of the bitmap, in pixels
			biHeight &amp; 0xff, biHeight &gt;&gt; 8 &amp; 0xff, biHeight &gt;&gt; 16 &amp; 0xff, biHeight &gt;&gt; 24 &amp; 0xff,
			// WORD biPlanes -- The number of planes for the target device. This value must be set to 1
			1, 0,
			// WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
			// has a maximum of 2^24 colors (16777216, Truecolor)
			24, 0,
			// DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
			0, 0, 0, 0,
			// DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
			biSizeImage &amp; 0xff, biSizeImage &gt;&gt; 8 &amp; 0xff, biSizeImage &gt;&gt; 16 &amp; 0xff, biSizeImage &gt;&gt; 24 &amp; 0xff,
			// LONG biXPelsPerMeter, unused
			0,0,0,0,
			// LONG biYPelsPerMeter, unused
			0,0,0,0,
			// DWORD biClrUsed, the number of color indexes of palette, unused
			0,0,0,0,
			// DWORD biClrImportant, unused
			0,0,0,0
		];

		var iPadding = (4 - ((biWidth * 3) % 4)) % 4;

		var aImgData = oData.data;

		var strPixelData = &#39;&#39;;
		var biWidth4 = biWidth&lt;&lt;2;
		var y = biHeight;
		var fromCharCode = String.fromCharCode;

		do {
			var iOffsetY = biWidth4*(y-1);
			var strPixelRow = &#39;&#39;;
			for (var x = 0; x &lt; biWidth; x++) {
				var iOffsetX = x&lt;&lt;2;
				strPixelRow += fromCharCode(aImgData[iOffsetY+iOffsetX+2]) +
							   fromCharCode(aImgData[iOffsetY+iOffsetX+1]) +
							   fromCharCode(aImgData[iOffsetY+iOffsetX]);
			}

			for (var c = 0; c &lt; iPadding; c++) {
				strPixelRow += String.fromCharCode(0);
			}

			strPixelData += strPixelRow;
		} while (--y);

		var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);

		return strEncoded;
	};

	/**
	 * saveAsImage
	 * @param canvasElement
	 * @param {String} image type
	 * @param {Number} [optional] png width
	 * @param {Number} [optional] png height
	 */
	var saveAsImage = function (canvas, width, height, type) {
		if ($support.canvas &amp;&amp; $support.dataURL) {
			if (typeof canvas == &quot;string&quot;) { canvas = document.getElementById(canvas); }
			if (type == undefined) { type = &#39;png&#39;; }
			type = fixType(type);
			if (/bmp/.test(type)) {
				var data = getImageData(scaleCanvas(canvas, width, height));
				var strData = genBitmapImage(data);
				saveFile(makeURI(strData, downloadMime));
			} else {
				var strData = getDataURL(canvas, type, width, height);
				saveFile(strData.replace(type, downloadMime));
			}
		}
	};

	var convertToImage = function (canvas, width, height, type) {
		if ($support.canvas &amp;&amp; $support.dataURL) {
			if (typeof canvas == &quot;string&quot;) { canvas = document.getElementById(canvas); }
			if (type == undefined) { type = &#39;png&#39;; }
			type = fixType(type);

			if (/bmp/.test(type)) {
				var data = getImageData(scaleCanvas(canvas, width, height));
				var strData = genBitmapImage(data);
				return genImage(makeURI(strData, &#39;image/bmp&#39;));
			} else {
				var strData = getDataURL(canvas, type, width, height);
				return genImage(strData);
			}
		}
	};



	return {
		saveAsImage: saveAsImage,
		saveAsPNG: function (canvas, width, height) {
			return saveAsImage(canvas, width, height, &#39;png&#39;);
		},
		saveAsJPEG: function (canvas, width, height) {
			return saveAsImage(canvas, width, height, &#39;jpeg&#39;);
		},
		saveAsGIF: function (canvas, width, height) {
			return saveAsImage(canvas, width, height, &#39;gif&#39;);
		},
		saveAsBMP: function (canvas, width, height) {
			return saveAsImage(canvas, width, height, &#39;bmp&#39;);
		},

		convertToImage: convertToImage,
		convertToPNG: function (canvas, width, height) {
			return convertToImage(canvas, width, height, &#39;png&#39;);
		},
		convertToJPEG: function (canvas, width, height) {
			return convertToImage(canvas, width, height, &#39;jpeg&#39;);
		},
		convertToGIF: function (canvas, width, height) {
			return convertToImage(canvas, width, height, &#39;gif&#39;);
		},
		convertToBMP: function (canvas, width, height) {
			return convertToImage(canvas, width, height, &#39;bmp&#39;);
		}
	};

}();


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[i];function d(v,c){return s(),t("div",null,l)}const u=n(e,[["render",d],["__file","html2canvashaibaochuxianbaibian.html.vue"]]);export{u as default};
