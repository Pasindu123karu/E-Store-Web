// Hide the preloader when the page is fully loaded
window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader');
  preloader.style.opacity = '0';
  preloader.style.pointerEvents = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling
});

const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}



