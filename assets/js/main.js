$(document).ready(function(){

	$('.text').on('keyup change', function(){
		var remain = parseInt($('.text').attr('maxlength')) - $('.text').val().length ;
		$('.count').text('Quedan ' + remain + ' caracteres');
	})
	
	$('form').submit(function(e){
		var name = ['Androide', 'Vegeta', 'Saiyajin', 'Ninja', 'Samurai', 'Piñera', 'Capitán', 'Dinosaurio'];
		var name_random = name[Math.floor(Math.random() * name.length)];
		var lastname = ['Del Futuro', 'Amatorio', 'Fitness', 'Bélico', 'Corpulento', 'Sensual', 'Obvio', 'Bandido'];
		var lastname_random = lastname[Math.floor(Math.random() * lastname.length)];
		var text = $('.text').val();
		var part1 = '<div class="row tweet">'
					+ '<h4>'
					+ name_random
					+ ' '
					+ lastname_random
					+ ': </h4>'
					+ '<div class="remove">'
					+ '<span class="glyphicon glyphicon-remove"></span>'
					+ '</div>'
					+ '<div class="row"></div>'
		e.preventDefault();
		$('.right').prepend(
			part1
			+ '<div class="text_tweet">'
			+ '<p>'
			+ text
			+ '</p>'
			+ '</div>'
			+ '<span class="glyphicon glyphicon-heart heart" aria-hidden="true">0</span>'
			);

		$('.text').val('');
	})

	$('.right').on('click', '.remove', function(){
		$(this).parent().fadeOut(500);
	})

	$('.right').on('click', '.heart', function(){
		$(this).addClass('likeable');
		var like_num = parseInt($(this).text());
		$(this).text(like_num + 1);
	})
})