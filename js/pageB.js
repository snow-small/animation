// 小男孩的动作
var boyActive = {
	// 小男孩走进来，之后停止
	walk: function () {
		var dtd = $.Deferred(); 
		$('.boy').animate({
			right: '20%'
		}, 5000, 'linear', function () {
			$(this).addClass('boyWalkStop').removeClass('boy-walk');
			dtd.resolve();
		});
		return dtd;
	},
	// 停止后脱外套
	upwrap: function () {
		var dtd = $.Deferred();
		setTimeout(function () {
			$('.boy').addClass('boy-unwrap-1').removeClass('boyWalkStop');
		}, 1000);
		setTimeout(function () {
			$('.boy').addClass('boy-unwrap-2').removeClass('boy-unwrap-1');
		}, 1200);
		setTimeout(function () {
			$('.boy').addClass('boy-unwrap-3').removeClass('boy-unwrap-2');
			$('.carousel').css({
				'display': 'block'
			});
			dtd.resolve();
			return dtd;
		}, 1400);
	},
	// 把衣服都脱完
	overClose: function () {
		var dtd = $.Deferred();
		setTimeout(function () {
			$('.boy').removeClass('boy-unwrap-3').addClass('boy-unwrap');
		}, 1000);
		setTimeout(function () {
			$('.boy').removeClass('boy-unwrap').addClass('boy-unwrap-stop');
			dtd.resolve();
			return dtd;
		}, 2000);
	}
}

// 小女孩的动作
var girlActive = {
	// 先站起来
	stand: function () {
		var dtd = $.Deferred();
		setTimeout(function () {
			$('.girl').addClass('girl-count-1');
		}, 500);
		setTimeout(function () {
			$('.girl').addClass('girl-count-2').removeClass('girl-count-1');
		}, 600);
		setTimeout(function () {
			$('.girl').addClass('girl-count-3').removeClass('girl-count-2');
		}, 700);
		setTimeout(function () {
			$('.girl').addClass('girl-count-4').removeClass('girl-count-3');
		}, 800);
		setTimeout(function () {
			$('.cat').addClass('catBook');
			dtd.resolve();
			return dtd;
		}, 800);
		
	},
	// 走路
	walk: function () {
		var dtd = $.Deferred();
		$('.girl').addClass('girl-walk');
		$('.girl').animate({
			left: '25%',
		}, 3000, 'linear', function () {
			$('.girl').addClass('girl-stop').removeClass('girl-walk');
			dtd.resolve();
		});
		return dtd;
	},
	// 跑过去抱小男孩
	girlRun: function () {
		var dtd = $.Deferred();
		$('.girl').addClass('girl-run').removeClass('girl-stop');
		$('.girl').animate({
			left: '48%'
		}, 2000, 'linear', function () {
			$('.girl').addClass('girl-run-stop').removeClass('girl-run');
			dtd.resolve();
		});
		
		return dtd;
	}
}

