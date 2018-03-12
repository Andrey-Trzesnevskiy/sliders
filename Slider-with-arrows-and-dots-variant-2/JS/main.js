window.onload = function() {
	let slid = document.querySelectorAll('.Slideshow .SlidesContainer .Slide');
	let wd = document.querySelector('.Slideshow .SlidesContainer').clientWidth;
	let numOfSli = slid.length;
	let off = numOfSli * wd;
	let currPosition = 0;
	document.querySelector(".SlidesContainer").style.overflow = "hidden";

	let slideInner = document.createElement('div');
	slideInner.classList.add('SlideInner');
	document.querySelector('.SlidesContainer').appendChild(slideInner);
	slid.forEach(function(item, i) {
		slideInner.appendChild(item);
		item.style.float = 'left';
		item.style.width = wd + 'px';
		let div = document.createElement('div');
		div.classList.add('Dot');
		if (i == 0) {
			document.querySelector('.Slideshow .Navigation').appendChild(div);
			div.classList.add('Active');
		}
		else {
			document.querySelector('.Slideshow .Navigation').appendChild(div);
		}
	})
	slideInner.style.width = wd * numOfSli + 'px';
	slideInner.style.transition = '1s';
	let j = 1;

	let rightControl = document.createElement('span');
	rightControl.classList.add('Control');
	rightControl.setAttribute('id', 'rightControl');
	document.querySelector('.Slideshow').prepend(rightControl);

	let leftControl = document.createElement('span');
	leftControl.classList.add('Control');
	leftControl.setAttribute('id', 'leftControl');
	document.querySelector('.Slideshow').prepend(leftControl);
	
	let currNumSli = document.createElement('div');
	currNumSli.classList.add('number_of_slider');
	document.querySelector('.Slideshow').appendChild(currNumSli);
	
	currNumSli.insertAdjacentHTML('afterBegin', '<span class="curr">'+j+'</span>'+'/'+numOfSli);
	let curr = document.querySelector('.curr');

	manageControls(currPosition);
	leftControl.style.left = "50px";
	leftControl.innerHTML = "prew";
	rightControl.style.right = "50px";
	rightControl.innerHTML = "next";
	let dot = document.querySelectorAll('.Slideshow .Navigation .Dot');
	off = 0;
	j = 0;
	let dotsArray = new Array();
	for (let i = 0; i < dot.length; i++) {
		dotsArray[dotsArray.length] = dot[i];
	}
	document.querySelectorAll('.Control').forEach(function(item){
  		item.addEventListener('click', controlHandler);
  		item.style.top = 0;
  		item.style.fontSize = '18px';
  	})
  	function controlHandler () {
  		currPosition = (this.getAttribute('id') == 'rightControl')
  		? currPosition+1 && j+1 : currPosition-1 && j-1;
  		manageControls(currPosition);
  		slideInner.style.marginLeft = -wd * currPosition+'px';
  		document.querySelector('.Slideshow .Navigation .Active').classList.remove("Active");
  		curr.innerHTML = currPosition+1;
  		if (this.getAttribute('id') == 'rightControl' ) {
  			dotsArray[++j].classList.add("Active");
  		}
  		else {
  			dotsArray[--j].classList.add("Active");
  		}
  	}

  	function manageControls (position) {
  		if (position == 0) {
  			leftControl.style.visibility = "hidden"
  		}
  		else {
  			leftControl.style.visibility = "visible "
  		}
  		if (position == numOfSli - 1) {
  			rightControl.style.visibility = "hidden"
  		}
  		else {
  			rightControl.style.visibility = "visible"
  		}
  	}
  	dotsArray.forEach(function(item){
  		item.addEventListener('click', dotsHandler)
  	})
  	function dotsHandler () {
  		document.querySelector('.Slideshow .Navigation .Active').classList.remove('Active');
  		this.classList.add('Active');
  		j = dotsArray.indexOf(this);
  		offset = j * wd;
  		curr.innerHTML = j + 1;
  		slideInner.style.marginLeft = -offset+'px';
  		if (j == 0) {
  			leftControl.style.visibility = "hidden";
  			rightControl.style.visibility = "visible";
  		}
  		else if (j == numOfSli-1) {
  			rightControl.style.visibility = "hidden";
  			leftControl.style.visibility = "visible";
  		}
  		else {
  			leftControl.style.visibility = "visible";
  			rightControl.style.visibility = "visible";
  		}
  		currPosition = j;
  	}
}