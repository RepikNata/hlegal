// Показувати чи приховувати меню на телефонах
function showMenu() {
	var element = document.getElementById("menu-toggle");
	element.classList.toggle("show");
}


// Таби на головній сторінці
$('.js-tab').click(function(e) {
	
	// Заборонояємо стандартне виконання html
	e.preventDefault();

});


// Галерея фото
$('.js-gallery-col-4').slick({
	dots: true,
	infinite: false,
	arrows: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

$('.js-gallery-single').slick({
	dots: true,
	infinite: false,
	arrows: false,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1
});

