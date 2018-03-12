window.onload = function () {
	let slides = document.querySelectorAll (".slide");
  	let width = document.querySelector (".slideshow .slidesContainer").clientWidth;
  	let i = slides.length;
  	let offset = i * width;
  	let currentPosition = 0;
  	let numberOfSlides = slides.length;
  	document.querySelector(".slidesContainer").style.overflow = "hidden";

  	let slideInner = document.createElement('div');
	slideInner.setAttribute('id', 'slideInner');
	document.querySelector('.slidesContainer').appendChild(slideInner);
	slides.forEach(function(item, i){
		slideInner.appendChild(item);
		item.style.float = "left";
		item.style.width = width+'px';
		let div = document.createElement('div');
		div.classList.add('dot');
		if (i == 0) {
			document.querySelector('.slideshow .navigation').appendChild(div);
			div.classList.add('active');
		}
		else {
			document.querySelector('.slideshow .navigation').appendChild(div);
		}
	})

	slideInner.style.width = width * numberOfSlides +'px';
	slideInner.style.transition = '1s';
	let leftControl = document.createElement('span');
	leftControl.classList.add('control');
	leftControl.setAttribute('id', 'leftControl');
	document.querySelector('.slideshow').appendChild(leftControl);
	let rightControl = document.createElement('span');
	rightControl.classList.add('control');
	rightControl.setAttribute('id', 'rightControl');
	document.querySelector('.slideshow').appendChild(rightControl);

	manageControls(currentPosition);
	leftControl.style.left = "50px";
	leftControl.style.top = "30%";
	leftControl.style.fontSize = "40px";
	leftControl.innerHTML = "&lt";

	rightControl.style.right = "50px";
	rightControl.style.top = "30%";
	rightControl.style.fontSize = "40px";
	rightControl.innerHTML = "&gt";

	let dots = document.querySelectorAll('.slideshow .navigation .dot');
	offset = 0;
  	i = 0;
  	let dotsArray = new Array();
	for (let j = 0; j < dots.length; j++) {
		dotsArray[dotsArray.length] = dots[j]
	}
  	document.querySelectorAll('.control').forEach(function(item){
  		item.addEventListener('click', controlHandler)
  	})
  	function controlHandler (){
  		currentPosition = (this.getAttribute('id') == 'rightControl')
  		? currentPosition+1 && i+1 : currentPosition-1 && i-1;
  		manageControls(currentPosition);
  		slideInner.style.marginLeft = width*(-currentPosition)+'px';
  		document.querySelector('.slideshow .navigation .active').classList.remove("active");
  		if (this.getAttribute('id') == 'rightControl' ) {
  			dotsArray[++i].classList.add("active");
  		}
  		else {
  			dotsArray[--i].classList.add("active");
  		}
  	}
  	function manageControls (position) {
  		if (position == 0) {
  			leftControl.style.display = "none"
  		}
  		else {
  			leftControl.style.display = "block"
  		}
  		if (position == numberOfSlides - 1) {
  			rightControl.style.display = "none"
  		}
  		else {
  			rightControl.style.display = "block"
  		}
  	}
  	dotsArray.forEach(function(item){
  		item.addEventListener('click', dotsHandler)
  	})
  	function dotsHandler () {
  		document.querySelector('.slideshow .navigation .active').classList.remove('active');
  		this.classList.add('active');
  		i = dotsArray.indexOf(this);
  		offset = i * width;
  		slideInner.style.marginLeft = -offset+'px';
  		if (i == 0) {
  			leftControl.style.display = "none";
  			rightControl.style.display = "block";
  		}
  		else if (i == numberOfSlides-1) {
  			rightControl.style.display = "none";
  			leftControl.style.display = "block";
  		}
  		else {
  			leftControl.style.display = "block";
  			rightControl.style.display = "block";
  		}
      currentPosition = i;
  	}
}