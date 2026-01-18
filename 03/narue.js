var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOHBdxekFzqMKfF8auzmdvdxFYHAkf2cH8IMe3dWYuCYPwrOyZwHlV5bzQj27C7UZPTrhVs5x1w0kOwBS21gXcI4Q1AmbtpRxwOb4r_NN6-DwDfDGYBNC7YAKukkdJVxQUK--i80x9PfnUwVUR01bCD=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPlOva6HrWzftcAvo0bp4Dk9eMJjHrN-CAXpwyWlLT2jTfUtT47PTtkHnRPb3STdrtPBl4ryHVQEs0ZAFUPLZZ3xZNaXHOQv91Muv_rUz6LRGF0fA3AW1Z3ywdo14gwCBRV5VWB7QPFmzSmMUnJceXG=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMsH8uyaX71eehj5DOrXvYY7p0z3jUxsiTYi0kPq89gcFP3dmeFk80uCgiBmNLnsmJycFZZYoGM5pGoMmu2dolQ0d9RadMCEG6p5_7hDNBP-esOGp6F0kqy-kUPGf3AMbWidi0JK4b_RTow2z-V9jmf=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNXL2QESQY8spLOkW7_H6yjQxY6FLd2yBg1Zb8AHikhCQ-4oBH5OFXhdW1PzEJE7peeiNH1WyUdgk1ibtUBZ4hc0K_Gy5Tqk1NALDqAQfG5omL2OjaE0jVTJr_GLbw_yVX8GDPn7pU1Bn2R_jsms1rm=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMwG1uGkKjiAsejHwSAi7OvnVGCgjiu0mKk-KBq-9ltLJCk0r3TCoSVdAsgKyqc4J1mB96w78lWOsVXakuPOPYButglXBPPbIIhO_ESc_dm187AcP-EUoY--plVVXr89d2Pyx4GwNwrGY5GCJ6Jd_7O=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNsHn1lf2kQBKw3vxTpdJL7S7pUDI9SU28sUr9BVvw-Lp1HmpJi6zIXBV4d1JUOlCVtlrqSauq6xEKrEzEvpx7-INLYwcABzIK1hFdX29k_xmYjqrb4QF-nnLuWF0lvEHBRfs89PL6_SKLVNiHpCzM_=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPmw00GDwtKrz1Y3xGGOOQaUt6EztztN-OHx41CWDmzx2f7WWPmyJhV1Srtx_de-SxWxB0Oktw0Qi8bormttsZiZiG5N2owjjfYEpndFjJE73iANH9qkUzpsgTwL2zBrsHfM8drcVDgcb1idwJJZiXe=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNN57PxHYbCwcZ0c6r0H7Kn9RMYUs989TSGeDVX_wGqdWehm94oBXZLqzto4xEykge_MhpeZni2aPYXsu4HyUlb3U6KDZU0k2EYLVUBSpe7W5NTVWavdt347_PKczjv2cMaVmkNATsfGShRsjUIM4qr=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMXiHpwJHyT75gm7lb1ZqTklmvg1a4TMALGMXpQ0-XTWs62JfBQfg5Xr9n54hKN_4DDuGrcCYm0VuKFNtBd7agsqeA2PakLEfmN0PL2xg-RhI3C5Mx38qLPSdDR4SKpDepz4qMOSGYRy7cTVXLrCuC7=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPsVmA8vMZ2kl7tmrY8EXyy0ueSGz45Welrz38OCr__oK8FPiFocQhH2-AKvk8ZWw4FwJtb9JFjDuM0F7DAM8zXpIj0KRHuPCisr48fILe_T8ALHfFFHzihjUbuedu38FQ1cOQLratMR-Bpk8sQcF1a=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN-DFwBQP1BkC8hc4HygcKpDGu2K0NUv5WRrOneZ4fONkxy6Q-xZXDiNAUGIHuxyKTe3HZR7g680h8QZ8jcXbvtYoX_nFAtfUQZ3y64FN28cZDxKqadOyasvI-QXRPe1m5xqQ3u2IAMALYGYiGXs1QQ=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNFhDg7-VzOVVa6RgoGT5brHvXnfCjNvT1SGm9xdZbKvP7kZjJO0ZwUGnxGzetGO_Ys43Dnqkpn7otH4JKaAUwtqgwDrFGFF9MdtQSE0l7KcQoVl-nsXjvD2LhCfyQ3NueVWNdDvveEh4yBAUFnZH3h=w1920-h1080"

var initialImageIndex = Math.floor(Math.random() * randomimages.length);
document.getElementById('image1').src = randomimages[initialImageIndex];
document.getElementById('image1').classList.add('active');
curindex = initialImageIndex;

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

  newImageElement.src = randomimages[curindex];

  newImageElement.onload = function() {
    oldImageElement.classList.remove('active');
    newImageElement.classList.add('active');

    currentActiveImageId = newImageId;
  };
  
  newImageElement.onerror = function() {
    console.error("Failed to load image: " + randomimages[curindex]);
  };
}

var rotationInterval = setInterval(rotateimage, delay);

setTimeout(function() {
  clearInterval(rotationInterval);
  console.log("Image rotation stopped after " + stopAfter / 1000 + " seconds.");
}, stopAfter);