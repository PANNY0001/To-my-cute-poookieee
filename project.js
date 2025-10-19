const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn');

// When the mouse hovers over "No" button, move it to a random position
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// When clicking "Yes"
yesBtn.addEventListener('click', () => {
  alert('Yay! See you on October 31 💖🐹');
});
