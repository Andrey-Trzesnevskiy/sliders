window.onload = function () {
	let slides = document.querySelectorAll ('.slider');
	let width = document.querySelector ('.slshow .slContainer').clientWidth;
	let slideNum = slides.length;
	let offset = slideNum * width;

	document.querySelector('.slContainer').style.overflow = "hidden";
	let slideInner = document.createElement('div');
	slideInner.classList.add('slideInner');
	document.querySelector('.slContainer').appendChild(slideInner);
	slides.forEach(function(item, i){
		slideInner.appendChild(item);
		item.style.float = "left";
		item.style.width = width+'px';
		let div = document.createElement('div');
		div.classList.add('dots');
		if (i == 0) {
			document.querySelector('.slshow .nav').appendChild(div);
			div.classList.add('act');
		}
		else {
			document.querySelector('.slshow .nav').appendChild(div);
		}
	})
	slideInner.style.width = width*slideNum+'px';
	slideInner.style.transition = '1s';
	let dots = document.querySelectorAll('.slshow .dots');
	offset = 0;
	slideNum = 0;
	let dotsArr = new Array();
	for (let j = 0; j < dots.length; j++) {
		dotsArr[dotsArr.length] = dots[j]
	}
	dotsArr.forEach(function(item){
		item.addEventListener('click', clickHandler)
	})
	function clickHandler () {
		document.querySelector('.slshow .act').classList.remove('act');
		this.classList.add('act');
		slideNum = dotsArr.indexOf(this);
		offset = slideNum * width;
		slideInner.style.marginLeft = -offset+'px';
	}
}