const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  menuClose = document.querySelector('.menu__close'),
  darkMode = document.querySelector('#light'),
  social = document.querySelector('.social'),
  body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
  hamburger.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  hamburger.classList.remove('active');
});

let menuLink = document.querySelectorAll('.menu__link');

[].forEach.call(menuLink, function (el) {
  el.onclick = function (e) {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  };
});

darkMode.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  body.classList.toggle('lightmode');
});



const counters = document.querySelectorAll('.skill__percent'),
  lines = document.querySelectorAll('.skill__progress .skill__ready');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

const pageUp = document.querySelector('.pageup');

document.querySelector('window').scroll(function (){
  if (window.scrollTop() > 1600) {
    pageUp.classList.add('active');
  } else {
    pageUp.classList.remove('active');
  }
});