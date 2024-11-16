window.addEventListener('DOMContentLoaded', function(){
    $(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	});

	window.addEventListener('scroll', function() {
		let sections = document.querySelectorAll('#propaganda, #feature, #polizei');
		sections.forEach(function(section) {
			let scrollPosition = window.scrollY / 1900;
			section.style.backgroundPositionY = `${scrollPosition}px`;
		});
	});
	
})