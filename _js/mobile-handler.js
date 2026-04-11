(function() {
    if (window.innerWidth > 480) return;

    const loadingImages = [
        "https://lh3.googleusercontent.com/pw/AP1GczO0fgif17Ugtkd7VukgNGQtLM0KgJToR6Qbo40tuWKTKgntw5jGHOFBWVq1S1MNtg6zW5hZvFHjEFxuh3mUR8zqmIVwkOLpcQFAooNSXljMv72AmQzFXf2eEXJjjRlWL3vnNm_F4PJpgDNl4W4N1utd=w400"
    ];
    const randomImg = loadingImages[Math.floor(Math.random() * loadingImages.length)];

    document.write(`
        <div id="mobile-loader" style="
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #fff; z-index: 9999; display: flex; flex-direction: column;
            align-items: center; justify-content: center; transition: opacity 0.5s ease;
        ">
            <img id="mobile-loader-img" src="${randomImg}" style="width: 90%; max-width: 400px; border-radius: 15px; margin-bottom: 20px;">
            <div class="loader-dots" style="font-size: 14px; color: #CBA2FF; font-weight: bold;">Loading...</div>
        </div>
    `);

    window.addEventListener('load', function() {
        const loader = document.getElementById('mobile-loader');
        if (!loader) return;

        const startTime = Date.now();
        const minDisplayTime = 1000;

        Promise.all([
            window.dataLoader || Promise.resolve(),
            new Promise(resolve => setTimeout(resolve, minDisplayTime))
        ]).then(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        });
    });
})();