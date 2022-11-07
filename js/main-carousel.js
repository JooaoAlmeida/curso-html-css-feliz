const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const itens = window.document.querySelector('.main-carousel .itens');
let pixels =0;

btnRight.addEventListener('click', function(){
    pixels = pixels+80;
  itens.style = `transform: translateX(${pixels}px)`;
})

btnLeft.addEventListener('click', function(){
    pixels = pixels-80;
  itens.style = `transform: translateX(${pixels}px)`;
})