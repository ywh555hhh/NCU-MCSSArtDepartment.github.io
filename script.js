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
                button.classList.add('button-animation')
            });
        }, 3000);

        function toggleButtonVisibility() {
            // 显示按钮
            joinButton.style.transition = 'opacity 1s ease-in-out';
            joinButton.style.opacity = '1';

            // 过渡消失
            setTimeout(() => {
                joinButton.style.transition = 'opacity 1s ease-in-out';
                joinButton.style.opacity = '0';

                // 持续隐藏
                setTimeout(() => {
                    joinButton.style.transition = 'opacity 1s ease-in-out';
                    joinButton.style.opacity = '0';

                    // 循环
                    setTimeout(() => {
                        toggleButtonVisibility();
                    }, 7000); // 7秒后重新出现
                }, 5000); //5秒后持续隐藏
            }, 7000); // 7秒后过渡消失
        }

        // 调用循环函数开始循环
        toggleButtonVisibility();
    });
});

//debug 每次刷新后应该回到最头上
window.onload = function() {
    // 将视窗滚动位置回到锚点的位置
    window.location.hash = "#one";
};

const tabs = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默认的链接行为
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetSectionId = tab.getAttribute('href');
        sections.forEach(section => {
            if (`#${section.id}` === targetSectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});

//针对不同设备返回不同链接
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 获取链接元素
const qqLink = document.getElementById('qq-link-1');

// 设置不同设备的链接
if (isMobileDevice()) {
    qqLink.href = 'https://qm.qq.com/q/62cHpxNbSo';
} else {
    qqLink.href = 'tencent://message/?uin=1916647616&Site=qq&Menu=yes';
}

