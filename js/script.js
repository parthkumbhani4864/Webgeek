$(window).scroll(function(){
    var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

    if (scroll >= 80) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});


// -Preloader start-------------------------------------------------------------- //
$(document).ready(function(){
  setTimeout (function(){
    $('.preloader').fadeOut();
  },3000)
})
// -Preloader end-------------------------------------------------------------- //


// -Testimonial start-------------------------------------------------------------- //
$('.single_testimonial').on('click', function(event) {
    event.preventDefault();
    var active = $(this).hasClass('active');
    var parent = $(this).parents('.all_testimonial');
    if (!active) {
        var activeBlock = parent.find('.single_testimonial.active');
        var currentPos = $(this).attr('data-position');
        var newPos = activeBlock.attr('data-position');
        activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
        activeBlock.attr('data-position', currentPos);
        $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
        $(this).attr('data-position', newPos);
    }
});
// -Testimonial start-------------------------------------------------------------- //


// --Animation Start-----------------------------------------------------------------
AOS.init();
// --Animation End-----------------------------------------------------------------

// --Wow Start-----------------------------------------------------------------

$(document).ready(function () {

  var owl = $('#s1');
  owl.owlCarousel();
  owl.on('changed.owl.carousel', function(event) {
    new WOW().init();
  })
  
  wow = new WOW(
    {
      boxClass:     'wow',     
      animateClass: 'animated',
      offset:       0,         
      mobile:       true,      
      live:         true       
    }
    )
    wow.init();
})

new WOW().init();
// --Wow Start-----------------------------------------------------------------


  
// --Upwrw start-----------------------------------------------------------------
var btn = $('.uparw');
btn.hide();
$(window).scroll(function () {
  if($(window).scrollTop()>500)
  {
    btn.fadeIn();
  }
  else
  {
    btn.fadeOut();
  }
});

btn.on('click',function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop:0},'300');
});

// --Upwrw End-----------------------------------------------------------------