$(document).ready(function(){
	var lArr = $('<i data-direction="right">&lt;</i>').css('left','-200px');
	var rArr = $('<i data-direction="left">&gt;</i>').css('right','-200px');
	
	$('.slider')
		.append(lArr)
		.append(rArr)
		.css('position','relative');
	
	$('.slider_item')
		.wrapAll('<div class="slider_items" />');

  
  
	$('.slider_items')
		.css({'display':'flex','align-items': 'center', 'overflow':'hidden','width':'100%'});
	
	
	$('.slider i')
		.css({'padding':'20px','font-style':'normal', 'position':'absolute','top':'40%', 'cursor':'pointer','font-size':'40px', 'color':'#666d89'})
		.click(function(){
			var direction = $(this).data('direction');
			if(direction == 'right') {
        $('.slider_item').first().clone().appendTo('.slider_items');
				$('.slider_item').first().animate({marginLeft:'-=200px'},1000,function(){ 
					$(this).remove();
				});
			} else if (direction == 'left') {
				$('.slider_item').last().clone().prependTo('.slider_items').css('margin-left','-160px');
				$('.slider_items').animate({paddingLeft:'+=200px'},1000,function(){ 
					$('.slider_item').last().remove();
					$('.slider_item').first().css('margin-left','5px');
					$('.slider_items').css('padding-left',0);
				});
			}
		});  
});