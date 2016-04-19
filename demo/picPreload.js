/*
 * 更新时间：2016.04.14 利利-独行冰海
 * http://www.h5course.com
 * 调用方法：
 	preload({
		files : [],
		progress : function(precent, currentImg) {
			具体代码
		},
		complete : function() {
			具体代码
		}
 	})
 *
 */
(function(){
	function filePreLoad(obj) {
		this.files = obj.files;
		this.progress = obj.progress;
		this.complete = obj.complete;
		// 当前加载数量为0
		this.current = 0;
		// 容器设置
		this.box = document.createElement('div');
		this.box.style.cssText = 'overflow:hidden; position: absolute; left: -9999px; top: 0; width: 1px; height: 1px;';
		document.body.appendChild(this.box);
		this.getFiles();
	}

	// 获取每一个图片
	filePreLoad.prototype.getFiles = function() {
		var fileArr = [];
		for (var i = 0; i < this.files.length; i++) {
			fileArr[i] = this.files[i];
			this.loadImg(fileArr[i]);
		};
	}

	// 加载图像
	filePreLoad.prototype.loadImg = function(file) {
		var _this = this;
		var newImg = new Image();

		newImg.onload = function(){
			newImg.onload = null;
			_this.loadFtn(newImg);
		}

		newImg.src = file;
	}

	// 执行相关回调
	filePreLoad.prototype.loadFtn = function(currentImg) {
		this.current++;
		this.box.appendChild(currentImg);
		if (this.progress) {
			var precentage = parseInt(this.current / this.files.length * 100);
			this.progress(precentage, currentImg);
		};
		if (this.current == this.files.length) {
			if (this.complete) {
				this.complete();
			};
		};
	}

	function preload(obj) {
		return new filePreLoad(obj);
	}
	
	window.preload = preload;
})();