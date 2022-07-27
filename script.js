$(window).scroll(function () {
  $('header').toggleClass('solid', $(this).scrollTop() > 10);
});