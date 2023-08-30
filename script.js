document.addEventListener("DOMContentLoaded", function() {
    // 获取所有滚动按钮
    const scrollButtons = document.querySelectorAll('.scroll-button');

    // 隐藏"JOIN US"按钮和侧边按钮
    const joinButton = document.getElementById('joinButton');
    joinButton.style.opacity = '0';
    scrollButtons.forEach(button => {
        button.style.opacity = '0';
    });

    // 禁用页面滚动
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }

    // 启用页面滚动
    function enableScroll() {
        document.body.style.overflow = 'auto';
    }

    // 锁定窗口
    disableScroll();

    // 监听页面滚动事件
    window.addEventListener('scroll', handleScroll);

    // 添加点击事件到滚动按钮
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

    // 悬停按钮展示提示
    const tooltip = document.getElementById('tooltip');

    joinButton.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });

    joinButton.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });

    // 处理淡入淡出效果
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

    // 监听页面滚动事件来触发淡入淡出效果
    window.addEventListener('scroll', handleScroll);

    // 监听按钮点击事件
    document.getElementById("myButton").addEventListener("click", function() {
        this.style.display = "none"; // 隐藏按钮
        window.location.href = "#module-begin"; // 跳转到下一个界面

        // 启用页面滚动
        enableScroll();

        // 在三秒后缓慢浮现
        setTimeout(() => {
            joinButton.style.transition = 'opacity 1s ease-in-out';
            joinButton.style.opacity = '1';

            scrollButtons.forEach(button => {
                button.style.transition = 'opacity 1s ease-in-out';
                button.style.opacity = '1';
            });
        }, 3000);
    });
});
