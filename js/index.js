// 放音乐
function playAudio(url, loop)
{
	var audio = new Audio();
	audio.src = url;
	audio.autoplay = true;
	audio.loop = loop || false;
	audio.play();
}

$(function () {
	// myAudio();
	playAudio('./images/carousel/1.mp3', true);
	pageA.runDeer()              // a页鹿跑起来
	.then(function () {
		setTimeout(function () {
			pageA.runWin();        // a页鹿停止后，开窗
		}, 10000);
		setTimeout(function () {
			$('.page-a').addClass('page-out');    // a页开窗后，a页消失，b页出现
		}, 13000);
	})
	.then(function () {
		setTimeout(function () {
			boyActive.walk();              // b页，小男孩走过来
		}, 20000);
	})
	.then(function () {
		setTimeout(function () {
			girlActive.stand();            // b页，小女孩站起来
		}, 26000);
		
	})
	.then(function () {
		setTimeout(function () {
			girlActive.walk();             // b页，小女孩走过来
		}, 27000);
	})
	.then(function () {
		setTimeout(function () {
			boyActive.upwrap();            // b页，小男孩脱外套
		}, 30000);
	})
	.then(function () {
		setTimeout(function () {
			boyActive.overClose();        // b页，全都脱光
		}, 33000);
	})
	.then(function () {
		setTimeout(function () {
			girlActive.girlRun();          // b页，小女孩跑过去抱他
		}, 36000);
	})
	.then(function () {
		setTimeout(function () {
			$('.page-c').addClass('page-in')          // c页出现，b页消失
		}, 40000);
	})
	.then(function () {
		setTimeout(function () {
			pageC.closeWindow()        // c页，关窗
		}, 45000);
	})
	.then(function () {
		setTimeout(function () {
			pageC.showScene();        // c页，显示窗户背影
		}, 48000);
	})
	.then(function () {
		setTimeout(function () {
			pageC.runDeer();          // c页，鹿跑走了
		}, 50000);
	})
});


