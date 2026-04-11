(function() {
    if (window.innerWidth > 480) return;

    const loadingImages = [];
    const randomImg = loadingImages[Math.floor(Math.random() * loadingImages.length)];

    document.write(`
        <div id="mobile-loader" style="
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #fff; z-index: 9999; display: flex; flex-direction: column;
            align-items: center; justify-content: center; transition: opacity 0.5s ease;
        ">
            <div id="loader-text" class="loader-dots" style="font-size: 24px; color: #CBA2FF; font-weight: bold;">Loading</div>
        </div>
    `);

    let dotCount = 0;
    const dotInterval = setInterval(function() {
        const loaderText = document.getElementById('loader-text');
        if (loaderText) {
            dotCount = (dotCount + 1) % 4;
            loaderText.innerText = 'Loading' + '.'.repeat(dotCount);
        }
    }, 300);

    window.addEventListener('load', function() {
        const loader = document.getElementById('mobile-loader');
        if (!loader) return;

        const startTime = Date.now();
        const minDisplayTime = 500;

        Promise.all([
            window.dataLoader || Promise.resolve(),
            new Promise(resolve => setTimeout(resolve, minDisplayTime))
        ]).then(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                clearInterval(dotInterval);
            }, 500);
        });
    });
})();