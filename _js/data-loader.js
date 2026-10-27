const subMap = {"1": "한국어", "2": "일본어", "3": "통합", "4": "제작중", "5": "없음"};
const typeMap = {"1": "TVA", "2": "영화", "3": "OVA", "4": "라이브"};

const MENU_IMAGE_BASE_URL = "https://lh3.googleusercontent.com/pw/AP1Gcz";

const getFullImageUrl = (i) => i.startsWith('data:image') ? i : `${MENU_IMAGE_BASE_URL}${i}`;

(function () {
    const CLEAN_VERSION = "v1.4"; 
    if (localStorage.getItem('tippy_recent_items_version') !== CLEAN_VERSION) {
        localStorage.removeItem('tippy_recent_items'); 
        localStorage.setItem('tippy_recent_items_version', CLEAN_VERSION);
    }

    const listContainers = document.querySelectorAll('.main-list[data-json]');
    window.globalData = [];
    window.yearlyDataStore = {};

    window.dataLoader = (async function () {
        for (const container of listContainers) {
            const jsonUrl = container.getAttribute('data-json');
            const fileMatch = jsonUrl.match(/\/(\d+)\.json/);
            let yearKey = fileMatch ? fileMatch[1] : '';
            if (yearKey) {
                if (jsonUrl.includes('00.json')) {
                    yearKey = '~2000';
                } else {
                    yearKey = parseInt(yearKey, 10) <= 30 ? `20${yearKey}` : `19${yearKey}`;
                }
            }

            try {
                const response = await fetch(jsonUrl);
                const data = await response.json();
                
                // SVG 제외 및 유효한 아이템 필터링
                const validData = data.filter(item => !item.i.includes('data:image/svg+xml'));
                
                // 전역 데이터 및 연도별 스토어에 저장
                window.globalData.push(...validData.map(item => ({ ...item, year: yearKey })));
                window.yearlyDataStore[yearKey] = validData;

                // HTML 렌더링
                container.innerHTML = renderItemsHTML(validData);

                // 모바일 아코디언(클릭 시 3개 <-> 전체) 기능 적용
                setTimeout(() => initMobileCollapse(container), 0);
            } catch (error) {
                console.error(`${jsonUrl} 로드 실패:`, error);
            }
        }

        // 연도 필터 및 이벤트 초기화
        initYearFilter();
    })();

    function renderItemsHTML(items) {
        return items.map(item => {
            const hasBadge = (item.c && subMap[item.c]) || (item.d && typeMap[item.d]);
            
            return `
            <a href="${item.u}" class="list-item" data-c="${item.c || ''}" data-d="${item.d || ''}" data-i="${item.i}">
                <ul class="list-select playlist-main">
                    <li class="list-img">
                        ${hasBadge ? `
                        <div class="badge-container">
                            ${(item.d && typeMap[item.d]) ? `<div class="badge-type">${typeMap[item.d]}</div>` : ''}
                            ${(item.c && subMap[item.c]) ? `<div class="badge-sub">${subMap[item.c]}</div>` : ''}
                        </div>
                        ` : ''}
                        <img src="${getFullImageUrl(item.i)}" loading="lazy" alt="${item.t}"/>
                    </li>
                    <li class="list-title"><p>${item.t}</p></li>
                </ul>
            </a>
        `;
        }).join('');
    }

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

    function initYearFilter() {
        const filterButtons = document.querySelectorAll('.year-filter-btn');
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        const isMobile = window.innerWidth <= 480;
        
        // 새로고침 시 연도에 머물지 않고 항상 '전체'로 시작하도록 해시 초기화
        if (performance && performance.getEntriesByType("navigation")[0]?.type === "reload") {
            history.replaceState(null, null, window.location.pathname);
        }

        const initialHash = window.location.hash.replace('#', '');

        if (initialHash && (window.yearlyDataStore[initialHash] || initialHash === '2000')) {
            const targetKey = initialHash === '2000' ? '~2000' : initialHash;
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-year') === initialHash) {
                    btn.classList.add('active');
                    scrollToCenter(btn);
                } else {
                    btn.classList.remove('active');
                }
            });
            applyFilter(targetKey);
        } else if (!isMobile) {
            applyFilter('all');
        } else {
            filterButtons.forEach(btn => {
                if (btn.getAttribute('data-year') === 'all') btn.classList.add('active');
            });
        }

        // 상단 스크롤 바 버튼 클릭 이벤트
        filterButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                filterButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const selectedYear = this.getAttribute('data-year');
                
                history.pushState(null, null, `#${selectedYear === 'all' ? '' : selectedYear}`);
                
                // 클릭한 버튼을 정확히 정중앙으로 이동
                scrollToCenter(this);

                if (selectedYear === 'all') {
                    restoreOriginalMobileContent();
                } else {
                    const targetKey = selectedYear === '2000' ? '~2000' : selectedYear;
                    applyFilter(targetKey);
                }
            });
        });

        // 우측 사이드바 연도 링크 클릭 이벤트 연동
        const sideLinks = document.querySelectorAll('.row-side a[href^="#"]');
        sideLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (/^#\d{4}$/.test(href) || href === '#2000') {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetYear = href.replace('#', '');
                    const targetKey = targetYear === '2000' ? '~2000' : targetYear;
                    
                    history.pushState(null, null, href);

                    filterButtons.forEach(btn => {
                        if (btn.getAttribute('data-year') === targetYear) {
                            btn.classList.add('active');
                            scrollToCenter(btn);
                        } else {
                            btn.classList.remove('active');
                        }
                    });

                    applyFilter(targetKey);
                });
            }
        });

        // 마우스 휠을 가로 스크롤로 변환
        const scrollContainer = document.getElementById('yearFilterScroll');
        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', function (e) {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    scrollContainer.scrollLeft += e.deltaY;
                }
            }, { passive: false });
        }
    }

function scrollToCenter(btn) {
        const container = document.getElementById('yearFilterScroll');
        if (!container || !btn) return;

        // [핵심] getBoundingClientRect를 사용하여 사이드바 유무나 부모 오프셋 오차 없이 정확한 상대 위치 계산
        const containerRect = container.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();
        const currentScroll = container.scrollLeft;

        const btnLeftRelative = btnRect.left - containerRect.left + currentScroll;
        const containerWidth = container.clientWidth;
        const btnWidth = btn.offsetWidth;
        
        let scrollTarget = btnLeftRelative - (containerWidth / 2) + (btnWidth / 2);
        
        container.scrollTo({
            left: scrollTarget,
            behavior: 'smooth'
        });
    }

    async function restoreOriginalMobileContent() {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        let htmlContent = `
            <div id="recent-container" style="display: none;">
                <div class="main-middle"><p>최근 시청한 항목</p></div>
                <div id="recent-list" class="main-list"></div>
            </div>
        `;

        const sortedYearKeys = Object.keys(window.yearlyDataStore).sort((a, b) => {
            if (a === '~2000') return 1;
            if (b === '~2000') return -1;
            return parseInt(b) - parseInt(a);
        });

        for (const yearKey of sortedYearKeys) {
            const validData = window.yearlyDataStore[yearKey];
            
            let filePrefix = '';
            if (yearKey === '~2000') {
                filePrefix = '00';
            } else {
                filePrefix = yearKey.startsWith('20') ? yearKey.slice(2) : yearKey;
            }
            
            const displayLabel = yearKey === '~2000' ? '~2000년' : yearKey + '년';
            const displayId = yearKey === '~2000' ? '2000' : yearKey;

            htmlContent += `
                <div class="main-middle">
                    <p id="${displayId}">${displayLabel}</p>
                </div>
                <div class="main-list" data-json="_data/${filePrefix}.json">
                    ${renderItemsHTML(validData)}
                </div>
            `;
        }

        mainContent.innerHTML = htmlContent;
        loadRecentItems();

        const listContainers = mainContent.querySelectorAll('.main-list[data-json]');
        listContainers.forEach(container => {
            initMobileCollapse(container);
        });
    }

    function applyFilter(year) {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;

        if (year === 'all') {
            restoreOriginalMobileContent();
        } else {
            const yearData = window.yearlyDataStore[year] || [];
            const displayLabel = year === '~2000' ? '~2000년' : year + '년';
            mainContent.innerHTML = `
                <div class="main-middle">
                    <p>${displayLabel}</p>
                </div>
                <div class="main-list">
                    ${renderItemsHTML(yearData)}
                </div>
            `;
        }
    }
})();

function loadRecentItems() {
    const recentList = document.getElementById('recent-list');
    const recentContainer = document.getElementById('recent-container');
    if (!recentList || !recentContainer) return;

    const recent = JSON.parse(localStorage.getItem('tippy_recent_items')) || [];

    if (recent.length === 0) {
        recentContainer.style.display = 'none';
        return;
    }

    recentContainer.style.display = 'block';

    recentList.innerHTML = recent.map(item => {
        const hasBadge = (item.c && subMap[item.c]) || (item.d && typeMap[item.d]);
        
        return `
        <a href="${item.u}" class="list-item is-visible" data-c="${item.c || ''}" data-d="${item.d || ''}" data-i="${item.i}">
            <ul class="list-select playlist-main">
                <li class="list-img">
                    ${hasBadge ? `
                    <div class="badge-container">
                        ${(item.d && typeMap[item.d]) ? `<div class="badge-type">${typeMap[item.d]}</div>` : ''}
                        ${(item.c && subMap[item.c]) ? `<div class="badge-sub">${subMap[item.c]}</div>` : ''}
                    </div>
                    ` : ''}
                    <img src="${getFullImageUrl(item.i)}" loading="lazy" alt="${item.t}"/>
                </li>
                <li class="list-title"><p>${item.t}</p></li>
            </ul>
        </a>
    `}).join('');
}

document.addEventListener('click', function (e) {
    const link = e.target.closest('a.list-item');
    if (link) {
        const itemData = {
            u: link.getAttribute('href'),
            i: link.getAttribute('data-i'),
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

window.addEventListener('DOMContentLoaded', loadRecentItems);