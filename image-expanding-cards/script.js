const allPanels = document.querySelectorAll('.panel');

const deassignActive = () => {
  allPanels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

const assignEvents = (panel) => {
  panel.addEventListener('click', () => {
    deassignActive();
    // Adding the class of active to the cliced panel
    panel.classList.add('active');
  });
};

allPanels.forEach(assignEvents);

// Gradients
