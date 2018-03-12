$(document).ready(function() {
  let slides = $(".slide");
  let width = $(".slideshow .slidesContainer").width();
  let i = slides.length;
  let offset = i * width;
  let currentPosition = 0;
  let numberOfSlides = slides.length;
    
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

  for (let j = 0; j < slides.length; j++) {
    if (j == 0) {
      $(".slideshow .navigation").append("<div class='dot active'></div>");
    }
    else {
      $(".slideshow .navigation").append("<div class='dot'></div>");
      }
    }
  let dots = $('.slideshow .navigation .dot');
  offset = 0;
  i = 0;

  $('.control').css({'top':'30%', 'font-size':'40px'})
    .on('click', function(){

    currentPosition = ($(this).attr('id')=='rightControl')
    ? currentPosition+1 && i+1 : currentPosition-1 && i-1;
        
    manageControls(currentPosition);
    
    $('#slideInner').animate({
      'marginLeft' : width*(-currentPosition)
    });
    $('.slideshow .navigation .active').removeClass("active");
    if ($(this).attr('id')=='rightControl') {
        $(dots[++i]).addClass("active")
    }
    else {
        $(dots[--i]).addClass("active")
    }
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

  $('.slideshow .navigation .dot').click(function(){
    $('.slideshow .navigation .active').removeClass("active");
    $(this).addClass("active");
    i = $(this).index();
    offset = i * width;
    $('#slideInner').animate({
        'marginLeft' : -offset
    });
    if (i == 0) {
      $('#leftControl').hide(),
      $('#rightControl').show()
    }
    else if (i == numberOfSlides-1) {
      $('#rightControl').hide(),
      $('#leftControl').show()
    }
    else {
      $('#leftControl').show(),
      $('#rightControl').show()
    }
    currentPosition = i;
  });
})