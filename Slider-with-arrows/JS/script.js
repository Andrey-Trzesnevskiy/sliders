$(document).ready(function() {
  let slides = $(".slide");
  let width = $(".slideshow .slidesContainer").width();
  let currentPosition = 0;
  let numberOfSlides = slides.length;
  let offset = numberOfSlides * width;
  
  $('.slidesContainer').css('overflow', 'hidden');
     
  slides.wrapAll('<div id="slideInner"></div>')
   
  .css({
      'float' : 'left',
      'width' : width
    });

  $('#slideInner').css('width', width * numberOfSlides);
     
  $('.slideshow').prepend('<span class="control" id="leftControl">&lt</span>')
  .append('<span class="control" id="rightControl">&gt</span>');

  manageControls(currentPosition);

  $('#rightControl').css({'right':'50px'});
  $('#leftControl').css({'left':'50px'});

  offset = 0;

  $('.control').css({'top':'30%', 'font-size':'40px'})
    .on('click', function(){

    currentPosition = ($(this).attr('id')=='rightControl')
    ? currentPosition+1 : currentPosition-1;
        
    manageControls(currentPosition);
    
    $('#slideInner').animate({
      'marginLeft' : width*(-currentPosition)
    });
  });

  function manageControls(position){
    if(position == 0){ 
      $('#leftControl').hide()
    }
    else{
      $('#leftControl').show()
    }
    if(position == numberOfSlides-1){
      $('#rightControl').hide()
    }
    else{
      $('#rightControl').show()
    }
  };
})