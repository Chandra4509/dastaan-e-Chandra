// Simple example of a rotating animation on page load
window.onload = function() {
    const graphic = document.querySelector('.graphic-element');
    graphic.style.transition = 'transform 1s ease-in-out';
    graphic.style.transform = 'rotate(360deg)';
};