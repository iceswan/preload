# picPreload - picPreload.js 中文API
## 基本信息
更新时间: 2016.04.14 

作者: 刘国利 - 利利 - 独行冰海

组织: HTML5学堂

官网: http://www.h5course.com

函数功能：实现图片的预加载

## 图片预加载运行环境
图片预加载需要在服务器端运行，可以使用wamp工具，搭建服务器

如果对wamp工具不是很了解的，可以查看 [wamp的安装与使用方法][2]

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
## demo相关说明
### files
files为一个数组，用于存放需要加载的图片文件的路径

### progress
1. 功能函数，每一张图片加载完毕之后均会运行该函数
2. 该函数可选，在不需要时可以不书写
3. 函数两个参数，第一个表示当前的加载百分比，第二个表示当前被加载的图像

### complete
功能函数，所有图片加载完毕之后执行

## 关于框架的详细介绍
如果你希望了解这个框架具体的制作步骤，可以查看[picPreload.js详细讲解][1]

## 关于图片预加载
关于图片预加载的基本知识和实现原理，我在原来的一篇文章中曾经书写过，如果希望了解此方面，可以点击 ——> [图片预加载][3]

## 后话
第一次写中英文的说明文档，表示英语好久不用，忘的好严重啊~(英文文档是README - en.md)


[1]: http://www.h5course.com/a/20160420412.html
[2]: http://www.h5course.com/a/20160406406.html
[3]: http://www.h5course.com/a/20160408408.html