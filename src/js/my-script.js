window.$ = window.jQuery =  require('jquery');
window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  

    /* галерея благодарственных отзывов */
    $('.doc-gallery__gallery').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0',      
      variableWidth: true
    });

  /* Open the modal window */
  $('.doc-gallery__img').click( function(e){ 
    e.preventDefault();    
    $('.overlay').show();
    $(this).find('.doc-gallery__modal').clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200); 
  });
  /* Close the modal window */
  $('.overlay').click( function(){ 
    $('.doc-gallery__modal')
      .animate({opacity: 0}, 200,  
        function(){
          $(this).hide();
          $('.overlay').fadeOut(400);
        }
      );
  }); 


    /* списки в формах */
  var regionInput = $('.form__region input');
  var regionList = $('.form__region-list');    
    $(regionInput).click(function() { 
      $(this).closest('.form__region').find(regionList).show();   
    });  
    $(regionList).mouseleave(function(){
      $(this).fadeOut('normal');
    }).find('li').click(function(){
      var regionText = $(this).text();
      $(this).closest('.form__region').find(regionInput).val(regionText);
      $(this).closest(regionList).mouseleave();
    });     

});


