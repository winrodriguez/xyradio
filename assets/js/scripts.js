'use strict';

$(document).ready(function(){

  // ----------- Animsition -----------
  $(".animsition").animsition({
    inClass: 'fade-in',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });


  // ----------- Smooth scroll -----------
  $('html').smoothScroll();


  // ----------- Slider -----------
  $('.slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true
  });

});


// ----------- ScrollReveal -----------
window.sr = ScrollReveal({ duration: 400 });
sr.reveal('.scroll-reveal');


// ----------- Parallax -----------
jQuery(window).trigger('resize').trigger('scroll');

window.setTimeout(function(){
    $(window).resize();
},500);


// ----------- Collapse expanded bootstrap nav -----------
$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});


// ----------- Scroll Spy -----------
$('body').scrollspy({
  target: '#nav-1', offset:80
});
