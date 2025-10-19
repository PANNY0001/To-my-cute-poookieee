const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');

noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

yesBtn.addEventListener('click', () => {
  alert('Yay! See you on October 31 💖🐹');
});
