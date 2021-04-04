// Acessar o browser

// Pegar o HTML todo

// Pegar o botão do HTML

// Verificar se o botão está sendo clicado

// Pegar o .elements

// Mover o .elements para a direita/esquerda

const btnRight = window.document.querySelector('.button-arrow.-right');   // Retorna o button de classe .button-arrow.-right

const btnLeft = window.document.querySelector('.button-arrow.-left');    // Retorna o button de classe .button-arrow.-left

const carouselElements = window.document.querySelector('.elements');

let pixels = 50;

btnRight.addEventListener('click', function() {
    pixels = pixels + 50;    
    carouselElements.style.transform = `translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function() {
    pixels = pixels - 50;
    carouselElements.style.transform = `translateX(${pixels}px)`;    
});