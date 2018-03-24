var pageC = {
	// 关窗
	closeWindow: function () {
		var dtd = $.Deferred();
		$('.pagec-window-left').css({
			'transform': 'none'
		});
		$('.pagec-window-right').css({
			'transform': 'none'
		});
		dtd.resolve();
		return dtd;
	},
	// 关窗后的背景
	showScene: function () {
		var dtd = $.Deferred();
		$('.pagec-bg').removeClass('pagec-window-bg').addClass('pagec-window-close-bg');
		dtd.resolve();
		return dtd;
	},
	// 让鹿动起来
	runDeer: function () {
		var dtd = $.Deferred();
		$('.pagec-deer').addClass('pagec-deer-run');
		$('.pagec-deer').animate({
			left: '120%',
			bottom: '40%'
		}, 5000, 'linear', function () {
			$('.pagec-deer').addClass('pagec-deer-over');
		})
		.animate({
			left: '-50%',
			bottom: '80%',
			transform: 'scale(0.2)'
		}, 7000, 'linear' ,function () {
			dtd.resolve();
			return dtd;
		});
	}
}

