/* ------- FUNCAO ANCORA --------*/
var $doc = $('html, body');
$('.galeria').click(function() {
  $doc.animate({
      scrollTop: $( $.attr(this,'href')).offset().top
  },500);
  return false;
});
/* ------- FUNCAO SUBIR ANCORA --------*/
$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});

/* ------- ANIMACAO NOS ELEMENTOS --------*/
const sr= ScrollReveal({
  distance :'10%',
  duration: 2000,
  delay: 5,
  reset:true
});


sr.reveal('.pag1',{delay:-600, origin:'left'});
sr.reveal('.titulo',{delay:-300, origin:'left'});
sr.reveal('.titulo2',{delay:-300, origin:'right'});
sr.reveal('.botaozap',{delay:-200, origin:'right'});
sr.reveal('.imagens1',{delay:-600, origin:'right'});
sr.reveal('.borda',{delay:-600, origin:'right'});
sr.reveal('.minitexto',{delay:-500, origin:'left'});
sr.reveal('.buttonn',{delay:-500, origin:'left'});
sr.reveal('.minigaleria',{delay:-500, origin:'top'});
sr.reveal('.logo',{delay:-200, origin:'left'});