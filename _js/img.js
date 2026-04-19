var delay = 6000;

var curindex = 0;
var currentActiveImageId = 'image1';
var randomimages = [];
var rotationInterval;

function getPageKey() {
    const fullPath = window.location.pathname;
    const fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);
    return fileName.split('.')[0]; 
}

function getResponsiveImageUrl(baseUrl) {
    var screenWidth = window.innerWidth;
    var param = screenWidth < 480 ? "=w480" : "=w1920";
    return baseUrl + param;
}

function initRotation() {
    if (randomimages.length === 0) return;

    var initialImageIndex = Math.floor(Math.random() * randomimages.length);
    curindex = initialImageIndex;

    var initialImgElement = document.getElementById('image1');
    initialImgElement.src = getResponsiveImageUrl(randomimages[initialImageIndex]);
    initialImgElement.classList.add('active');

    rotationInterval = setInterval(rotateimage, delay);
}

function rotateimage() {
    var oldImageElement = document.getElementById(currentActiveImageId);
    var newImageId = (currentActiveImageId === 'image1') ? 'image2' : 'image1';
    var newImageElement = document.getElementById(newImageId);

    var tempindex = Math.floor(Math.random() * randomimages.length);
    if (curindex === tempindex) {
        curindex = (curindex + 1) % randomimages.length;
    } else {
        curindex = tempindex;
    }

    var targetUrl = getResponsiveImageUrl(randomimages[curindex]);
    newImageElement.src = targetUrl;

    newImageElement.onload = function() {
        oldImageElement.classList.remove('active');
        newImageElement.classList.add('active');
        currentActiveImageId = newImageId;
    };
}

async function loadAndInit() {
    try {
        const pageKey = getPageKey();
        const response = await fetch('_data.json');
        const data = await response.json();

        const listData = data[pageKey];
        if (listData && listData.length > 0) {
            randomimages = listData.map(item => item.i);
            initRotation();
        } else {
            console.error(`${pageKey}에 해당하는 데이터가 없습니다.`);
        }
    } catch (error) {
        console.error("데이터 로드 실패:", error);
    }
}

window.addEventListener('DOMContentLoaded', loadAndInit);