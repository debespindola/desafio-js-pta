const paul = document.querySelector('.character');

const paulPosition = () => {
  const leftPosition = getComputedStyle(paul).left;
  console.log(leftPosition);
}

