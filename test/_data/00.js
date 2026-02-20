(function() {
    const currentScript = document.currentScript;
    const parentContainer = currentScript.parentElement;
    const jsonUrl = '_data/00.json';

    window.dataLoader = window.dataLoader.then(async () => {
        try {
            const response = await fetch(jsonUrl);
            const data = await response.json();

            window.globalData.push(...data);

            parentContainer.innerHTML = data
                .filter(item => !item.i.includes('data:image/svg+xml'))
                .map(item => `
                    <a href="${item.u}">
                        <ul class="list-select playlist-main">
                            <li class="list-img"><img src="${item.i}" loading="lazy"/></li>
                            <li class="list-title"><p>${item.t}</p></li>
                        </ul>
                    </a>
                `).join('');

        } catch (error) {
            console.error(`${jsonUrl} 로드 실패:`, error);
        }
    });
})();