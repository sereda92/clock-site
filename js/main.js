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

// --------------------FIXED-HEADER-------------------------
const header = document.querySelector('.header__menu-background ');
const first = document.querySelector('.header__item-contant');
const headerLink = document.querySelectorAll('.header__link');

const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	if (scrollDistance >= firstHeight + headerHeight) {
		header.classList.add('header--fixed');
		headerLink.forEach(link => link.classList.add('header__link-fixed'));
	} else {
		header.classList.remove('header--fixed');
		headerLink.forEach(link => link.classList.remove('header__link-fixed'));
	}
	if (scrollDistance === 0) {
		header.classList.remove('header--fixed');
		headerLink.forEach(link => link.classList.remove('header__link-fixed'));
		first.style.marginTop = null;
	}
	lastScrollTop = scrollDistance;
});


// ----------------------search----

const searchBtn = document.getElementById('search_btn')
const searchInp = document.getElementById('search_inp')


searchBtn.addEventListener('click', function(){
	if(searchInp.classList.contains('search__active')){
		searchInp.classList.remove('search__active');
	}else{
		searchInp.classList.add('search__active')
	}
})