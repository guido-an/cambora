// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in he her

AOS.init();


// $(document).ready(function(){
//   $('.carousel').slick({
//   slidesToShow: 3,
//   dots:true,
//   centerMode: true,
//   arrow: false
//   });
// });
$(document).ready(function(){
  $('.slick-slider').slick({
    centerMode: false,
    slidesToShow: 3,
    appendArrows: $(arrows),
    prevArrow:"<p class='arrow-right'><</p>",
    nextArrow:"<p class='arrow-left'>></p>",
  });
  $('.mobile-slider').slick({
    centerMode: false,
    slidesToShow: 1,
    appendArrows: $(arrowsmobile),
    prevArrow:"<p class='arrow-right'><</p>",
    nextArrow:"<p class='arrow-left'>></p>",
  });
  
});





