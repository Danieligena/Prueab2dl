$(document).ready(function(){

	$('.text').on('keyup change', function(){
		var remain = parseInt($('.text').attr('maxlength')) - $('.text').val().length ;
		$('.count').text('Quedan ' + remain + ' caracteres');
	})
	
	$('form').submit(function(e){
		var name = ['Androide', 'Vegeta', 'Saiyajin', 'Ninja', 'Samurai', 'Piñera', 'Capitán', 'Dinosaurio'];
		var name_random = name[Math.floor(Math.random() * name.length)];
		var lastname = ['Del Futuro', 'del Amor', 'Fitness', 'Bélico', 'Corpulento', 'Sensual', 'Obvio', 'Bandido'];
		var lastname_random = lastname[Math.floor(Math.random() * lastname.length)];
		var user = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8'];
		var user_random = user[Math.floor(Math.random() * user.length)];
		var text = $('.text').val();
		var part1 = '<div class="row tweet">'
					+ '<img class="img-responsive avatar_tweet" src="assets/img/'
					+ user_random
					+ '.jpg">'
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
			+ '</p></div>'
			+ '<div class="heart">'
			+ '<span class="glyphicon glyphicon-heart" aria-hidden="true"></span>'
			+ '<span class="count_heart"> 0</span>'
			+ '</div>'
			);

		$('.text').val('');
		$('.text').focus();
		$('p.count').text('Quedan 140 caracteres');
		var count_heart = $('span.count_heart').text();

	})

	$('.right').on('click', '.remove', function(){
		$(this).parent().fadeOut(500);
	})

	$('.right').on('click', '.heart', function(){
		$(this).addClass('likeable');
		var count_heart = $(this).children().last();
		var num = parseInt(count_heart.text());
		count_heart.text(num + 1);
	});
});