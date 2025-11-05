var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPyKJXJ81pAUsjaTPqFG6s--hZYly2tQsl58yGSE8P0XqLaJcpJ55VZBXtTps8v_UAWMKciocV3VK2aCDZqXVXYWGsYqbfrQhqOUeocU8wa4whFIBgsXA4VHhv0zURHrihejnbufY9ZJ2BHeUiDArYq=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOTn-vv_DD343G1DQozyncfXJ8bgE8WbJDwGdA41mXFPrJQYiyl8e0DDzf3Kqq0MHZ4-e0XlSf-XDYTqKphB634e8f-Om6569VgyaK_HC-u-DBwsF91ysj_pWqR0P_h9Up_iODvg--pqsithIhoK5nJ=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOqcUVZPbcQzjMp6AA_dQAV28z_hHrEFauTfwd2uqjebMlZcZuQXIYCtYUE9rAaC0N9UeecRDA93j2-pm3crqrl9XdCKy2213wbnh8nL0mb3WTNGCK8G3wmmvfX7Qobb-tRkLGgUu-iONxBk81bRwvp=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPXh-l_m0EEnwr_2svsx9CXvS04dda21r8oRtOazwOcfDXsahk_1E9vMi-oQ-IO2qmx_TMVsLsuEjQZMn1j_jvEzw4LlXPKGQ9KeqUCsIcoshi55EH9gF6S9YsSQuYE7khYYyY-SCOMAP2d1JWNxivj=w1920-h1080"

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