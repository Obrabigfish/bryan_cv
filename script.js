// Dark Mode Toggle
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Collapsible Sections
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(section => {
  const heading = section.querySelector('h2');
  heading.addEventListener('click', () => {
    section.classList.toggle('collapsed');
  });

  // Collapse by default on small screens
  if (window.innerWidth < 768) {
    section.classList.add('collapsed');
  }
});
