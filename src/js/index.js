import './static';

const brand = document.querySelector('.brand')

console.log(brand);
brand.addEventListener('click', hedlerAddActove)

function hedlerAddActove(event) {
  event.preventDefault();
  if (el.classList.contains('brand__link')) {
    el.classList.toggle('active')
  }
}