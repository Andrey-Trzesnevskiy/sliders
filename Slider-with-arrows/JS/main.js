window.onload = function () {
    let slides = document.querySelectorAll (".slide");
  	let width = document.querySelector (".slideshow .slidesContainer").clientWidth;
  	let currentPosition = 0;
  	let numberOfSlides = slides.length;
    let offset = numberOfSlides * width;
  	document.querySelector(".slidesContainer").style.overflow = "hidden";

  	let slideInner = document.createElement('div');
    slideInner.setAttribute('id', 'slideInner');
    document.querySelector('.slidesContainer').appendChild(slideInner);
    slides.forEach(function(item, i){
		slideInner.appendChild(item);
		item.style.float = "left";
		item.style.width = width+'px';
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

	
	 offset = 0;
  	
  	document.querySelectorAll('.control').forEach(function(item){
  		item.addEventListener('click', controlHandler)
  	})
  	function controlHandler (){
  		currentPosition = (this.getAttribute('id') == 'rightControl')
  		? currentPosition+1 : currentPosition-1;
  		manageControls(currentPosition);
  		slideInner.style.marginLeft = width*(-currentPosition)+'px';
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
}