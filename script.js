// navigation bar
const navShowBtn = document.querySelector('.nav-show-btn');
const navHideBtn = document.querySelector('.nav-hide-btn');
const navMenu = document.querySelector('.navbar-collapse');

navShowBtn.addEventListener('click', () => {
	navMenu.classList.add('showNav');
});

navHideBtn.addEventListener('click', () => {
	navMenu.classList.remove('showNav');
});

// shocase bg slider
const dottedBtns = document.querySelectorAll('.dotted-btns span');
let slideCount = 0;

dottedBtns.forEach((item) => {
	item.addEventListener('click', () => {
		slideCount = item.dataset.id;
		slideShowcase();
	});
});

function slideShowcase() {
	const displayWidth = document.querySelector('.showcase').clientWidth;
	document.querySelector('.showcase-content').style.transform = `translateX(${-slideCount * displayWidth}px)`;
}

window.addEventListener('resize', slideShowcase);