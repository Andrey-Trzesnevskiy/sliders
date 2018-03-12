$(document).ready(function(){
  var Slides = $(".slshow .slContainer").children(".slider"); // Получаем массив всех слайдов
  var Width = $(".slshow .slContainer").width(); // Получаем ширину видимой области
  var ii = Slides.length; // Получаем количество слайдов
  var Offset = ii * Width; // Задаем начальное смещение и ширину всех слайдов
  var SlideWidth = 560;
  var NumberOfSlides = Slides.length;
    // Убираем прокрутку
  $('.slContainer').css('overflow', 'hidden');
    // Вставляем все .Slides в блок #slideInner
  Slides.wrapAll('<div class="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
  .css({
      'float' : 'left',
      'width' : SlideWidth
    });
    // Устанавливаем ширину .slideInner, равную ширине всех слайдов
  $('.slideInner').css('width', SlideWidth * NumberOfSlides);

  for (j=0; j < Slides.length; j++) {
      if (j==0) {
        $(".slshow .nav").append("<div class='dots act'></div>");
      }
      else {
        $(".slshow .nav").append("<div class='dots'></div>");
      }
    }
    var Dots = $('.slshow .nav').children('.dots');
    Offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
    ii = 0; // Обнуляем номер текущего слайда


      $('.slshow .nav .dots').click(function(){
          $('.slshow .nav .act').removeClass("act");
          $(this).addClass("act");
          ii = $(this).index();
          Offset = ii * Width;
          $('.slideInner').animate({
          'marginLeft' : -Offset
        }); // Смещаем блок со слайдами к следующему
      });
}  