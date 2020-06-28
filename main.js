const paul = document.querySelector('.character');
let direction = 1;

const paulPosition = () => {
  const leftPosition = getComputedStyle(paul).left;
  let leftArray = Number(leftPosition.split('px').join(''));
  leftArray += 5 * direction;
  paul.style.left = `${leftArray}px`;
}

//------- adicionando movimento ----------------
setInterval(paulPosition, 10); 

//------------ mudando a direção do movimento-----------
document.addEventListener('keypress', (event) => {
  direction *= -1;
}); 
