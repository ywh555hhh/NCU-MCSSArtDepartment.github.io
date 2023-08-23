// Add a glowing effect to the title on hover
const title = document.querySelector('.glow-text');

title.addEventListener('mouseenter', () => {
    title.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.9)';
});

title.addEventListener('mouseleave', () => {
    title.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.7)';
});