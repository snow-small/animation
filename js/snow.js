var canvas = document.querySelector('#snow');
var ctx = canvas.getContext('2d');
var width = document.querySelector('.page-c').offsetWidth;
var height = document.querySelector('.page-c').offsetHeight;
var snow = [];
// 随机生成x轴、y轴、半径，和透明度
function randNum ()
{
	for (var i=0; i<200; i++) {
		snow.push({
			x: Math.random()*width,
			y: Math.random()*(height),
			r: Math.random()*8,
			a: Math.random()
		});
	}
}
// 画雪
function drawSnow ()
{
	ctx.clearRect(0, 0, width, height);
	for (var i=0; i<snow.length; i++) {
		ctx.beginPath();
		ctx.arc(snow[i].x, snow[i].y, snow[i].r, 0, Math.PI*2);
		ctx.fillStyle="rgba(255, 255, 255, "+ snow[i].a +")";
		ctx.closePath();
		ctx.fill()
		snow[i].y += 1;                // y轴加一，就可以让雪向下走
		if (snow[i].y > (height - 120)) {     // 判断雪太低，就消失，在上面生成
			snow[i].y = Math.random()*10;
		}
	}
}

$(function () {
	randNum();
	setInterval(function () {
		drawSnow ();
	}, 100);
});