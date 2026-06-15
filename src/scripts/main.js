'use strict';

const burgerBtn = document.querySelector('.header__menu');
const burgerMenu = document.querySelector('.burger__menu');
const burgercross = document.querySelector('.burger__cross');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger__menu--open');
});

burgercross.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger__menu--open');
});
