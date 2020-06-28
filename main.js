const paul = document.querySelector('.character');

const paulPosition = () => {
  const leftPosition = getComputedStyle(paul).left;
  let leftArray = Number(leftPosition.split('px').join(''));
  leftArray += 5;
  paul.style.left = `${leftArray}px`
}

// setInterval(paulPosition, 20) adicionando movimento
