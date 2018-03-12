$(document).ready(function () {
  let Sli = $(".SlShow .SlContainer .Slider")
  let Height = $(".SlShow .SlContainer").height();
  let Numberslides = Sli.length;
  let OffSet = Numberslides * Height;
  let i = 0;
  $('.SlContainer').css({'overflow':'hidden', 'height':Height});
  Sli.wrapAll('<div class="SlideInner"></div>')
  .css({
      'height' : Height
    });
  $('.SlideInner').css({'height': Height * Numberslides,
  });

  for (let j = 0; j < Sli.length; j++) {
      if (j == 0) {
        $(".SlShow .Nav").append("<div class='Dots Act'></div>");
      }
      else {
        $(".SlShow .Nav").append("<div class='Dots'></div>");
      }
    }
    OffSet = 0;
      $('.SlShow .Nav .Dots').click(function(){
          $('.SlShow .Nav .Act').removeClass("Act");
          $(this).addClass("Act");
          i = $(this).index();
          OffSet = i * Height;
          $('.SlideInner').animate({
          'marginTop' : -OffSet
        });
      });
})      