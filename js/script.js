$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

// Snippet below taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname == this.pathname && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        },1000);
        return false;
      }
    }
  });
});
