# preload
## picPreload.js
update time: 2016.04.14 

author: Liu Guoli

organization: HTML5course

companyUrl: http://www.h5course.com

function: 

## picPreload.js 中文
更新时间: 2016.04.14 

作者: 刘国利 - 利利 - 独行冰海

组织: HTML5学堂

官网: http://www.h5course.com

函数功能：实现图片的预加载

## 图片预加载运行环境
图片预加载需要在服务器端运行，可以使用wamp工具，搭建服务器

如果对wamp工具不是很了解的，可以点击——> [wamp的安装与使用方法][2]

## 用户调用demo
<pre>
<code>
preload({
	files : [],
	progress : function(precent, currentImg) {
		// 具体代码
	},
	complete : function() {
		// 具体代码
	}
})
 </code>
</pre>
### demo相关说明
The “files” in the preload function, is an Array be used to save the pictures' url

files为一个数组，用于存放需要加载的图片文件的路径



## introduce
The detailed introduction about picPreload.js ——> [picPreload.js introduction][1]

## 后话
第一次写中英文的说明文档，表示英语好久不用，掉的略严重啊~

关于图片预加载的基本知识和实现原理，我在原来的一篇文章中曾经书写过，如果希望了解此方面，可以点击 ——> [图片预加载][3]

[1]: http://www.h5course.com
[2]: http://www.h5course.com/a/20160406406.html
[3]: http://www.h5course.com/a/20160408408.html