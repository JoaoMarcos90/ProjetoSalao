var $doc = $('html, body');
$('.galeria').click(function() {
  $doc.animate({
      scrollTop: $( $.attr(this,'href')).offset().top
  },500);
  return false;
});

$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});


const sr= ScrollReveal({
  distance :'20%',
  duration: 2000,
  delay: 5,
  reset:true
});
sr.reveal('.pag1',{delay:-600, origin:'left'});
sr.reveal('.titulo',{delay:-300, origin:'left'});
sr.reveal('.titulo2',{delay:-300, origin:'right'});
sr.reveal('.imagens1',{delay:-600, origin:'right'});
sr.reveal('.borda',{delay:-600, origin:'right'});
sr.reveal('.minigaleria',{delay:-700, origin:'top'});
sr.reveal('.logo',{delay:-200, origin:'left'});