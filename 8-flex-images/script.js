const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', (e) => {
    panel.classList.toggle('open');
  });
});
panels.forEach((panel) => {
  panel.addEventListener('transitionend', (e) => {
    if (e.propertyName.includes('flex')) {
      panel.classList.toggle('activate-active');
    }
  });
});
