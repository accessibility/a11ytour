$(document).ready(function() {
  function setCurrent() {
    $('.navbar li').each(function() {
      if ($(this).hasClass('active')) {
        $(this)
          .find('a')
          .attr('aria-current', true);
      } else {
        $(this)
          .find('a')
          .removeAttr('aria-current');
      }
    });
  }

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($('.navbar').offset().top > 50) {
      $('.navbar-fixed-top').addClass('top-nav-collapse');
    } else {
      $('.navbar-fixed-top').removeClass('top-nav-collapse');
    }

    setCurrent();
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function() {
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top
          },
          1500,
          'easeInOutExpo'
        );
      event.preventDefault();
    });
  });

  setTimeout(function() {
    setCurrent();
  }, 100);
});
