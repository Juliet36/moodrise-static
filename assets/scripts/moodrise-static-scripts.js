$(document).ready(function() {
    // $('.body__title-container').addClass('active');
    // $('#subtitle').addClass('active');
    $('.devices__grid-cell').each(function() {
      $(this).addClass('devices__grid-cell--active')
    })
    // $('.device-img').each(function () {
    //   $(this).addClass('active');
    // });
    // $('.device-description').each(function () {
    //   $(this).addClass('active');
    // });
    // $('.download-links').each(function () {
    //   $(this).addClass('active');
    // });
    $(window).scroll(function() {

    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.devices__grid-cell--device-img');
        if ($window.scrollTop() < 220) {
          $('.devices__grid-cell--first-group').each(function() {
            $(this).addClass('devices__grid-cell--active-mobile')
          });
        }
          // Change 33% earlier than scroll position so colour is there when you arrive.
          var scroll = $window.scrollTop() + ($window.height() / 3);
          $panel.each(function () {
            var $this = $(this);
            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
              $this.addClass('devices__grid-cell--active-mobile');
              if ($this.hasClass('devices__grid-cell--second-group')) {
                $('.devices__grid-cell--second-group').each(function() {
                  $(this).addClass('devices__grid-cell--active-mobile')
                })
              } else if ($this.hasClass('devices__grid-cell--third-group')) {
                $('.devices__grid-cell--third-group').each(function() {
                  $(this).addClass('devices__grid-cell--active-mobile')
                })
              } else {
                $('.devices__grid-cell--first-group').each(function() {
                  $(this).addClass('devices__grid-cell--active-mobile')
                })
              }
            }
          });

    }).scroll();
  });
