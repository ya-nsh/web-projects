const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentToggle = 1;

next.addEventListener('click', () => {
  currentToggle++;
  prev.disabled = false;

  if (currentToggle > circles.length) {
    currentToggle = circles.length;
  }

  domUpdate();
});

prev.addEventListener('click', () => {
  currentToggle--;

  if (currentToggle < 1) {
    currentToggle = 1;
  }

  domUpdate();
});

const domUpdate = () => {
  circles.forEach((circle, index) => {
    if (index < currentToggle) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentToggle === 1) {
    prev.disabled = true;
  } else if (currentToggle === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};
