(function() {
    const listContainers = document.querySelectorAll('.main-list[data-json]');

    window.globalData = window.globalData || [];

    window.dataLoader = (async function() {
for (const container of listContainers) {
    const jsonUrl = container.getAttribute('data-json');
    try {
        const response = await fetch(jsonUrl);
        const data = await response.json();
        window.globalData.push(...data);

        container.innerHTML = data
            .filter(item => !item.i.includes('data:image/svg+xml'))
            .map(item => `
                <a href="${item.u}" class="list-item">
                    <ul class="list-select playlist-main">
                        <li class="list-img"><img src="${item.i}" loading="lazy" alt="${item.t}"/></li>
                        <li class="list-title"><p>${item.t}</p></li>
                    </ul>
                </a>
            `).join('');

        initMobileCollapse(container);
    } catch (error) {
        console.error(`${jsonUrl} 로드 실패:`, error);
    }
}
    })();

function initMobileCollapse(container) {
        const items = Array.from(container.querySelectorAll('.list-item'));
        if (items.length <= 3) return;

        container.classList.add('is-collapsed');
        updateMobileRandomItems(items);

        const header = container.previousElementSibling;
        if (header && header.classList.contains('main-middle')) {
            header.style.cursor = 'pointer';
            header.onclick = function(e) {
                if (window.innerWidth > 480) return;

                e.preventDefault();

                const isCollapsed = container.classList.toggle('is-collapsed');
                
                if (isCollapsed) {
                    updateMobileRandomItems(items);
                } else {
                    items.forEach(item => item.classList.add('is-visible'));
                }
            };
        }
    }

    function updateMobileRandomItems(items) {
        items.forEach(item => item.classList.remove('is-visible'));
        const shuffled = [...items].sort(() => 0.5 - Math.random());
        shuffled.slice(0, 3).forEach(item => item.classList.add('is-visible'));
    }
})();