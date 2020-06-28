const paul = document.querySelector('.character');
const paulWidth = Number(getComputedStyle(paul).width.split('px').join(''));

const bodyWidth = getComputedStyle(document.body).width;
const newBodyWidth = Number(bodyWidth.split('px').join(''));

const createRock = () => {
  const newImage = document.createElement('IMG');
  newImage.setAttribute('src', 'images/pedra.png');
  newImage.setAttribute('class', 'rock');
  newImage.style.left = `${Math.floor(Math.random() * newBodyWidth)}px`;
  document.body.appendChild(newImage);
}

let counter = 0;
let direction = 1;

const paulPosition = () => {
  const rocks = document.querySelectorAll('.rock');

  const leftPosition = getComputedStyle(paul).left;
  let newLeft = Number(leftPosition.split('px').join(''));
  newLeft += 8 * direction;
  
  if(!(newLeft < 0) && !((newLeft + paulWidth) > newBodyWidth)) {
    paul.style.left = `${newLeft}px`;
  }
  [...rocks].forEach((rock) => {
      let topRock = Number(getComputedStyle(rock).top.split('px').join(''));
      topRock += 10;
      rock.style.top = `${topRock}px`
  })

  counter += 1;
  if(!(counter % 100)) {
    createRock();
  }
}

//----------- adicionando movimento --------------------
setInterval(paulPosition, 1); 

//------------ mudando a direção do movimento ----------
document.addEventListener('keypress', (event) => {
  direction *= -1;
}); 

//------------ cair aleaoriamente -------------------
// oq  eu quero fazer? eu quero que para cada nova pedra, sua posição horizontal mude
// para isso, eu posso aumentar de forma aleatoria a distância entre a parede esquerda e a pedra em si
// para isso, posso tentar usar a mesma propriedade que usei em paul, mas usando math.random
