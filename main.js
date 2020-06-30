alert('Pressione espaço para fazer Paulo desviar das pedras');

const paul = document.querySelector('.character');
const paulWidth = Number(getComputedStyle(paul).width.split('px').join(''));
const paulHeight = Number(getComputedStyle(paul).height.split('px').join(''));

const bodyWidth = getComputedStyle(document.body).width;
const newBodyWidth = Number(bodyWidth.split('px').join(''));

const startTime = Date.now();

let cont = 0;
const createRock = () => {
  const newImage = document.createElement('IMG');
  newImage.setAttribute('src', 'images/pedra.png');
  newImage.style.left = `${Math.floor(Math.random() * newBodyWidth)}px`;
  newImage.setAttribute('class', 'rock');
  newImage.setAttribute('id', `rock${cont}`);
  document.body.appendChild(newImage);
  cont += 1;
  console.log(cont);
}

let counter = 0;
let direction = 1;
const hitByARock = [];
let life = document.querySelectorAll('.life-image');
console.log(life);

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
      rock.style.top = `${topRock}px`;

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
          if(!(hitByARock.indexOf(rock.id) !== -1)) {
            life[hitByARock.length].style.display = 'none';
            hitByARock.push(rock.id);
          }
        }
        if(hitByARock.length === 3){
          clearInterval(game);
          const time = (Date.now() - startTime) / 1000;
          alert('GAME OVER');
          alert(`Você salvou Paulo durante ${time} segundos`)
          window.location = window.location
        }
    }
  });

  counter += 1;
  if(!(counter % 40)) {
    createRock();
  }
}

//----------- adicionando movimento --------------------
const game = setInterval(paulPosition, 15); 

//------------ mudando a direção do movimento ----------
document.addEventListener('keypress', (event) => {
  direction *= -1;
  paul.style.transform = `scaleX(${-direction})`;
}); 
