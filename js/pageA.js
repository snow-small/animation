var pageA = {
	// 让鹿动起来，完成之后，停止
	runDeer: function () {
		var dtd = $.Deferred();
		$('.deer').addClass('deer-ground');
		$('.deer').animate({
			bottom: '2%',
			left: '55%',
			transform: 'scale(1.2)'
		}, 10000, 'linear', function () {
			$('.deer').addClass('deer-stop').removeClass('deer-ground');
		});
		dtd.resolve();
		return dtd;
	},
	// 让窗户开
	runWin: function () {
		var dtd = $.Deferred();
		$('.window-left').css({
			'transform': 'scale(0.95) rotateY(60deg) translateX(-45px)'
		});
		$('.window-right').css({
			'transform': 'scale(0.95) rotateY(-60deg) translateX( 45px)'
		});
		dtd.resolve();
		return dtd;
	}
}


