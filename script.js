
// 监听页面滚动事件
window.addEventListener('scroll', handleScroll);

// 获取按钮和目标元素
const scrollButtons = document.querySelectorAll('.scroll-button');

// 添加点击事件
scrollButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // 使用 smooth 滚动到目标元素
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const joinButton = document.getElementById('joinButton');
const tooltip = document.getElementById('tooltip');

joinButton.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
});

joinButton.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
});
const fadeElements = document.querySelectorAll('.fade-container');

function isFullyVisible(element) {
    const bounding = element.getBoundingClientRect();
    return bounding.top >= 0 && bounding.bottom <= window.innerHeight;
}

function handleScroll() {
    fadeElements.forEach((element) => {
        if (isFullyVisible(element)) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);
