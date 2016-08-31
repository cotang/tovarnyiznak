// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');


jQuery(document).ready(function($){  


  /* Hamburger */
  if ($(window).width() < 767) {
    $('.nav__hamburger').show();
    $('.nav__list').hide(); 
    $('.hamburger').click(function(e){
      e.preventDefault();
      $('.nav__list').toggle();
    });               
  }

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

  /* открывание ответа по ссылке "читать далее" */
  $('.question__details').click(function(e) {
      e.preventDefault();
      $(this).closest('.question').find('.question__answer').toggle();      
  });

  /* увеличение высоты футера при появлении выпадающего меню */
  $('.footer .nav__item').mouseenter(function() {
    if ( $(this).has('.dropdown-menu') ) {
      var infoHeight = $(this).children('.dropdown-menu').outerHeight(true);
      $('.footer__info').css('height', infoHeight); 
    }  
  });
  $('.footer .nav__item').mouseleave(function() {
    if ( $(this).has('.dropdown-menu') ) {
      var infoHeight = $(this).children('.dropdown-menu').outerHeight(true);
      $('.footer__info').css('height', 'auto'); 
    }   
  }); 

});

