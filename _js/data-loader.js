const subMap = {
    "1": "한국어",
    "2": "일본어",
    "3": "공통",
    "4": "없음",
    "5": "제작중"
};
const typeMap = {
    "1": "TVA",
    "2": "영화",
    "3": "OVA",
    "4": "라이브",
    "5": "제작중"
};

(function () {
    const listContainers = document.querySelectorAll('.main-list[data-json]');

    window.globalData = window.globalData || [];

    window.dataLoader = (async function () {
        for (const container of listContainers) {
            const jsonUrl = container.getAttribute('data-json');
            try {
                const response = await fetch(jsonUrl);
                const data = await response.json();
                window.globalData.push(...data);

                container.innerHTML = data
                    .filter(item => !item.i.includes('data:image/svg+xml'))
                    .map(item => `
                    <a href="${item.u}" class="list-item" data-c="${item.c || ''}" data-d="${item.d || ''}">
                        <ul class="list-select playlist-main">
                            <li class="list-img">
                                ${(item.c || item.d) ? `
                                <div class="badge-container">
                                    ${item.d ? `<div class="badge-type">${typeMap[item.d]}</div>` : ''}
                                    ${item.c ? `<div class="badge-sub">${subMap[item.c]}</div>` : ''}
                                </div>
                                ` : ''}
                                <img src="${item.i}" loading="lazy" alt="${item.t}"/>
                            </li>
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
            header.onclick = function (e) {
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

function loadRecentItems() {
    const recentList = document.getElementById('recent-list');
    const recentContainer = document.getElementById('recent-container');
    const recent = JSON.parse(localStorage.getItem('tippy_recent_items')) || [];

    if (recent.length === 0) {
        recentContainer.style.display = 'none';
        return;
    }

    recentContainer.style.display = 'block';

    recentList.innerHTML = recent.map(item => `
        <a href="${item.u}" class="list-item is-visible" data-c="${item.c || ''}" data-d="${item.d || ''}">
            <ul class="list-select playlist-main">
                <li class="list-img">
                    ${(item.c || item.d) ? `
                    <div class="badge-container">
                        ${item.d ? `<div class="badge-type">${typeMap[item.d]}</div>` : ''}
                        ${item.c ? `<div class="badge-sub">${subMap[item.c]}</div>` : ''}
                    </div>
                    ` : ''}
                    <img src="${item.i}" loading="lazy" alt="${item.t}"/>
                </li>
                <li class="list-title"><p>${item.t}</p></li>
            </ul>
        </a>
    `).join('');
}

document.addEventListener('click', function (e) {
    const link = e.target.closest('a.list-item');

    if (link) {
        const itemData = {
            u: link.getAttribute('href'),
            i: link.querySelector('img').getAttribute('src'),
            t: link.querySelector('.list-title p').innerHTML,
            c: link.getAttribute('data-c'),
            d: link.getAttribute('data-d')
        };

        let recent = JSON.parse(localStorage.getItem('tippy_recent_items')) || [];
        recent = recent.filter(item => item.u !== itemData.u);
        recent.unshift(itemData);
        if (recent.length > 3) recent.pop();

        localStorage.setItem('tippy_recent_items', JSON.stringify(recent));
        loadRecentItems();
    }
});