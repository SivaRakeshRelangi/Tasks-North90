// Get the toggle button and the left menu
const toggleMenuButton = document.getElementById('toggleMenu');
const leftMenu = document.querySelector('.left-menu');

// Add event listener to toggle the collapsible menu
toggleMenuButton.addEventListener('click', () => {
  leftMenu.classList.toggle('collapsed');
});
// Function to adjust page size based on screen width
function adjustPageSize() {
    const width = window.innerWidth;
  
    if (width >= 992 && width <= 1600) {
      document.body.style.transform = 'scale(0.9)';
      document.body.style.transformOrigin = 'top left';
    } else if (width >= 700 && width <= 767) {
      document.body.style.transform = 'scale(0.8)';
      document.body.style.transformOrigin = 'top left';
    } else if (width >= 600 && width <= 700) {
      document.body.style.transform = 'scale(0.75)';
      document.body.style.transformOrigin = 'top left';
    } else if (width <= 600) {
      document.body.style.transform = 'scale(0.5)';
      document.body.style.transformOrigin = 'top left';
    } 
  }
  
  // Add event listeners for resizing and loading the page
  window.addEventListener('resize', adjustPageSize);
  window.addEventListener('load', adjustPageSize); // Initial adjustment on page load
  