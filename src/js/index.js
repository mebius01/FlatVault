import './static';
const {
  minus,
  sum
} = require('./sum')

const brand = document.querySelector('.brand')
const footer_link = document.querySelector('.footer__link')
const form = document.querySelector('.form')
const callform = document.querySelector('.callform')

footer_link.addEventListener('click', hendlerCallForm)
brand.addEventListener('click', hedlerAddActive)


function hedlerAddActive(event) {
  event.preventDefault();
  const el = event.target;
  if (el.classList.contains('brand__link')) {
    el.classList.toggle('active')
  }
}

function hendlerCallForm(e) {
  e.preventDefault();
  console.log(form);
}