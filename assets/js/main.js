// Function to toggle the visibility of the right navbar
function toggleMenu() {
    const navbarRight = document.querySelector('.navbar-right');
    if (navbarRight) {
        navbarRight.classList.toggle('active');
    } else {
        console.error("Element '.navbar-right' not found.");
    }
}