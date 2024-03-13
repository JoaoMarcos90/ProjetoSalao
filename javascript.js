var $doc = $('html, body');
$('.galeria').click(function() {
  $doc.animate({
      scrollTop: $( $.attr(this,'href')).offset().top
  },500);
  return false;
});

