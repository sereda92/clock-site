const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
   anchor.addEventListener("click", function(event){
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}


// -----------------------------------------------------------------
// --------------------ФИКСИРОВАННЫЙ HEADER-------------------------
// -----------------------------------------------------------------
const header = document.querySelector('.header__menu-background ');
const first = document.querySelector('.header__item-contant');
const btnArrow = document.querySelector('.btn-arrow');
const arrow = document.querySelector('.arrow');

const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (scrollDistance >= firstHeight + headerHeight) {
		header.classList.add('header--fixed');
        arrow.classList.add('arrow-fixed')
		// first.style.marginTop = `${headerHeight}px`;
	} else {
		header.classList.remove('header--fixed');
		// first.style.marginTop = null;
        arrow.classList.add('arrow')
	}

	// if (scrollDistance > lastScrollTop) {
		// header.classList.remove('header--fixed');
		// arrow.classList.remove('arrow-fixed')
		// first.style.marginTop = null;
	// } else {
		// header.classList.add('header--fixed');
		// arrow.classList.add('arrow-fixed')
		// first.style.marginTop = `${headerHeight}px`;
	// }

	if (scrollDistance === 0) {
		header.classList.remove('header--fixed');
        arrow.classList.remove('arrow-fixed')
		first.style.marginTop = null;
	}

	lastScrollTop = scrollDistance;
});