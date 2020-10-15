"use strict";

console.log('Created by Alex Myers'); // Init Scrollspy

$('body').scrollspy({
  target: '#main-nav'
}); // Smooth Scrolling

$('#main-nav a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  }
});