const hamburgerBtn = document.querySelector('#hamburger');
const hamburgerMenu = document.querySelector('#fs-navigation');

hamburgerBtn.addEventListener('click', function(ev) {
	ev.preventDefault;
	
	
	if (this.classList.contains('is-active')) {
		setTimeout(() => {
			hamburgerMenu.style.display = 'none';
		}, 400);
		hamburgerMenu.classList.toggle('is-active');
	}else {
		hamburgerMenu.style.display = 'block';
		setTimeout(() => {
			hamburgerMenu.classList.toggle('is-active');
		}, 1);
		
	}
	this.classList.toggle('is-active');
});