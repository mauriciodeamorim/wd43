function mudaImagem(id, caminhoDaImagem){

	$("#" + id).click(function(){
		$('#produto_imagem img').first().attr('src', caminhoDaImagem);
		$(this).hover(
			function(){
				$(this).css('opacity', '1');
			},
			function(){
				$(this).css('opacity', '0.5');
			}
		);
	});
}

$(document).ready(function(){
	mudaImagem('preto', "images/produto_foto_grande_1.jpg");
	mudaImagem("azul", "images/produto_foto_grande_2.jpg");
	mudaImagem("cinza", "images/produto_foto_grande_3.jpg");
});

//Slideshow
$(document).ready(function(){
	var position = 0;
	var slideWidth = 725;
	var slides = $('.slide');
	pages = slides.length;

	$('#slides_container').css('overflow', 'hidden');

	slides
		.wrapAll('<div id="slide_inner"></div>')
		.css({
			'float': 'left',
			'width': slideWidth
		});

	$('#slide_inner').css('width', slideWidth * pages);

	$('#slideshow')
		.prepend('<span class="control" id="left_control">left</span>')
		.append('<span class="control" id="right_control">right</span>');

	manageControls(position);

	$('.control')
		.bind('click', function(){
			position = ($().attr()== 'right_control') ? position+1 : position-1;
				manageControls(position);
				$('#slide_inner').animate({'marginLeft' : slideWidth*(-position)});			

			});
});

//mostra/esconde controle dependendo da posicao
function manageControls(position){
	//esconde o primeiro controle se posicao for 1
	if(position==0) {$('left_control').hide()} else{$('#left_control').show();}
	//esconde o primeiro controle se posicao for 2
	if(position==pages-1) {$('right_control').hide()} else{$('#right_control').show();}
}
