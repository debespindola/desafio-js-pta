const paul = document.querySelector('.character');
const rock = document.querySelector('.rock');
const bodyWidth = getComputedStyle(document.body).width;
const newBodyWidth = Number(bodyWidth.split('px').join(''));
const paulWidth = Number(getComputedStyle(paul).width.split('px').join(''));
let direction = 1;

const paulPosition = () => {
  const leftPosition = getComputedStyle(paul).left;
  let newLeft = Number(leftPosition.split('px').join(''));
  newLeft += 5 * direction;

  if(!(newLeft < 0) && !((newLeft + paulWidth) > newBodyWidth)) {
    paul.style.left = `${newLeft}px`;
  } 
  
  const topPosition = getComputedStyle(rock).top;
  let newTop = Number(topPosition.split('px').join(''));
  newTop += 5;
  rock.style.top = `${newTop}px`;  
}

//------- adicionando movimento ----------------
setInterval(paulPosition, 1); 

//------------ mudando a direção do movimento-----------
document.addEventListener('keypress', (event) => {
  direction *= -1;
}); 
