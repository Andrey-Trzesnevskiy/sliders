window.onload = function () {
	let slideItem = document.querySelectorAll('.SlShow .SlContainer .Slider');
	let height = document.querySelector('.SlShow .SlContainer').clientHeight;
	let numSlides = slideItem.length;
	let offset = numSlides * height;
	let i = 0;
	document.querySelector('.SlContainer').style.overflow = "hidden";
	document.querySelector('.SlContainer').style.height = height+'px';
	let slideInner = document.createElement('div');
	slideInner.classList.add('SlideInner');
	slideInner.style.transition = '1s';
	document.querySelector('.SlContainer').appendChild(slideInner);
	slideItem.forEach(function(item, i){
		slideInner.appendChild(item);
		item.style.height = height+'px';
		let div = document.createElement('div');
		div.classList.add('Dots');
		if (i == 0) {
			document.querySelector('.SlShow .Nav').appendChild(div);
			div.classList.add('Act');
		}
		else {
			document.querySelector('.SlShow .Nav').appendChild(div);
		}
	})
	offset = 0;
	let DotsArr = new Array();
	let Dots = document.querySelectorAll('.SlShow .Nav .Dots');
	for (let j = 0; j < Dots.length; j++) {
		DotsArr[DotsArr.length] = Dots[j]
	}
	DotsArr.forEach(function(item){
		item.addEventListener('click', dotsHandlerClick)
	})
	function dotsHandlerClick(){
		document.querySelector('.SlShow .Nav .Act').classList.remove('Act');
		this.classList.add('Act');
		i = DotsArr.indexOf(this);
		offset = i * height;
		slideInner.style.marginTop = -offset + 'px';
	}
}