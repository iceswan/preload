# picPreload - picPreload.js API
## Basic Information
update time: 2016.04.14 

author: Liu Guoli

organization: HTML5course

companyUrl: http://www.h5course.com

function: Image preload

## The Environment for Image preload
This code must run on the application server, you can use the wamp software to achieve the server to build.

If you don't know about wamp, you can click this link ——> [wamp的安装与使用方法][2]

## Demo
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
The “files” in the preload function is an array that is used to save the pictures' url.

### progress
1. Function, the system will run the function after each picture is loaded.
2. Optional value.
3. Have two arguments.The first one shows the current loading percentage, and the second one returns the image which is loaded currently.

## introduce
The detailed introduction about picPreload.js ——> [picPreload.js详细讲解][1]

## About image preload
The basic knowledge and principles of image preload is at [图片预加载][3]

[1]: http://www.h5course.com/a/20160420412.html
[2]: http://www.h5course.com/a/20160406406.html
[3]: http://www.h5course.com/a/20160408408.html