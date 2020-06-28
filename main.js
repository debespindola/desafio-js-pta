const paul = document.querySelector('.character');
const paulWidth = Number(getComputedStyle(paul).width.split('px').join(''));
const paulHeight = Number(getComputedStyle(paul).height.split('px').join(''));

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
  let leftPaul = Number(leftPosition.split('px').join(''));
  leftPaul += 8 * direction;
  
  if(!(leftPaul < 0) && !((leftPaul + paulWidth) > newBodyWidth)) {
    paul.style.left = `${leftPaul}px`;
  }
  [...rocks].forEach((rock) => {
      let topRock = Number(getComputedStyle(rock).top.split('px').join(''));
      topRock += 10;
      rock.style.top = `${topRock}px`

      const bottomRock = Number(getComputedStyle(rock).bottom.split('px').join(''));
      const leftRock = Number(getComputedStyle(rock).left.split('px').join(''));
      const widthRock = Number(getComputedStyle(rock).width.split('px').join(''));
      const rightRock = Number(getComputedStyle(rock).right.split('px').join(''));
      const rightPaul = Number(getComputedStyle(paul).right.split('px').join(''));

      if(bottomRock <= paulHeight && bottomRock > 0) {
        if(
          !(leftPaul > (leftRock + widthRock))
          && !(rightPaul > (rightRock + widthRock))
        ){
          clearInterval(game);
          alert('GAME OVER');
          window.location = window.location;
        }
      }
  })

  counter += 1;
  if(!(counter % 100)) {
    createRock();
  }
}

//----------- adicionando movimento --------------------
const game = setInterval(paulPosition, 1); 

//------------ mudando a direção do movimento ----------
document.addEventListener('keypress', (event) => {
  direction *= -1;
  paul.style.transform = `scaleX(${-direction})`;
}); 