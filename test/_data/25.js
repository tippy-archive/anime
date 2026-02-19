window.globalData = window.globalData || [];

(async function() {
    const currentScript = document.currentScript;
    const parentContainer = currentScript.parentElement;

    try {
        const response = await fetch('_data/25.json');
        const data = await response.json();

        window.globalData.push(...data);

parentContainer.innerHTML = data
    // 1. data:image/svg+xml가 '포함되지 않은(!)' 데이터만 걸러냅니다.
    .filter(item => !item.i.includes('data:image/svg+xml')) 
    // 2. 걸러진 데이터로만 HTML을 생성합니다.
    .map(item => `
        <a href="${item.u}">
            <ul class="list-select playlist-main">
                <li class="list-img"><img src="${item.i}" loading="lazy"/></li>
                <li class="list-title"><p>${item.t}</p></li>
            </ul>
        </a>
    `).join('');

    } catch (error) {
        console.error("데이터 로드 실패:", error);
    }
})();