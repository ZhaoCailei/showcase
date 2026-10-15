/* ================= 交互逻辑 ================= */

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    /* 1. 入场动画：卡片依次浮现 */
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    /* 2. 点击卡片任意处跳转（提升体验） */
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // 如果点的不是按钮本身，才触发跳转
            if (!e.target.classList.contains('btn')) {
                const btn = card.querySelector('.btn');
                if (btn) {
                    window.open(btn.href, '_blank');
                }
            }
        });
    });

    /* 3. 控制台输出，确认 JS 加载成功 */
    console.log('作品集页面加载完成 ✅');
});