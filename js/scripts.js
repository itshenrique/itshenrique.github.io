/*!
 * Start Bootstrap - Grayscale v6.0.2 (https://startbootstrap.com/themes/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
// const ENV = require('./env.json');

(function ($) {
  ('use strict'); // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 70,
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100,
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink');
    } else {
      $('#mainNav').removeClass('navbar-shrink');
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  var ENV;
  $.getJSON('../env.json', function (ENV) {
    console.log('->      ' + ENV.HOST + 'assets/img/ht.gif');
  });

  const date = new Date();

  $.getJSON('/js/content.json', function (content) {
    $('.job').text(content.job);
    const aboutMe = content.aboutMe.replace(
      'EXP_TIME',
      date.getFullYear() - new Date('2018-09-01').getFullYear()
    );
    console.log(aboutMe);
    $('.about-me').text(aboutMe);
  });

  $('.copyright').text('Copyright © Henrique Pereira ' + date.getFullYear());
})(jQuery); // End of use strict
