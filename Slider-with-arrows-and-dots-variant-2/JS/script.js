$(document).ready(function(){
  let slid = $(".Slideshow .SlidesContainer .Slide");
  let wd = $(".Slideshow .SlidesContainer").width();
  let numOfSli = slid.length;
  let off = numOfSli * wd;
  let currPosition = 0;

  $('.SlidesContainer').css('overflow', 'hidden');

  slid.wrapAll('<div class="SlideInner"></div>')

  .css({
      'float' : 'left',
      'width' : wd
    });

  $('.SlideInner').css('width', wd * numOfSli);
  let j=1;
  $('.Slideshow').prepend('<div class="number_of_slider"><span class="curr">'+j+'</span>'+'/'+numOfSli+'</div>');

  $('.Slideshow').prepend('<span class="Control" id="rightControl">next</span>')
  .prepend('<span class="Control" id="leftControl">prew</span>');

  manageControls(currPosition);
  $('#rightControl').css({'right':'50px'});
  $('#leftControl').css({'left':'50px'});

  for (let j=0; j < slid.length; j++) {
      if (j==0) {
        $(".Slideshow .Navigation").append("<div class='Dot Active'></div>");
      }
      else {
        $(".Slideshow .Navigation").append("<div class='Dot'></div>");
      }
    }
    let dot = $('.Slideshow .Navigation .Dot');
    off = 0;
    j = 0;

    $('.Control').css({'top':'0%', 'font-size':'18px'})
      .on('click', function(){
    
        currPosition = ($(this).attr('id')=='rightControl')
      ? currPosition+1 && j+1 : currPosition-1 && j-1;
        manageControls(currPosition);
        $('.SlideInner').animate({
          'marginLeft' : wd*(-currPosition)
        });
        $('.Slideshow .Navigation .Active').removeClass("Active");
         $('.number_of_slider .curr').html(currPosition+1);
        if ($(this).attr('id')=='rightControl') {
            $(dot[++j]).addClass("Active")
        }
        else {
            $(dot[--j]).addClass("Active")
        }
      });

    function manageControls(position){
      if(position==0){ $('#leftControl').addClass('non-vis') }
      else{ $('#leftControl').removeClass('non-vis') }
      if(position==numOfSli-1){
      	$('#rightControl').addClass('non-vis')
      }
      else{
      	$('#rightControl').removeClass('non-vis')
      }
      };

    
  	$('.Slideshow .Navigation .Dot').click(function(){
  		$('.Slideshow .Navigation .Active').removeClass("Active");
  		$(this).addClass("Active");
  		j = $(this).index();
  		off = j * wd;
      $('.number_of_slider .curr').html(j+1);
  		$('.SlideInner').animate({
          'marginLeft' : -off
        });
      if (j==0) {
        $('#leftControl').addClass('non-vis'),
        $('#rightControl').removeClass('non-vis')
      }
      else if (j==numOfSli-1) {
        $('#rightControl').addClass('non-vis'),
        $('#leftControl').removeClass('non-vis')
      }
      else {
        $('#leftControl').removeClass('non-vis'),
        $('#rightControl').removeClass('non-vis')
      }
      currPosition = j;
  	});
})    