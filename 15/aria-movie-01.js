var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczO8C2W6Q68yxen0dMVZ_u6Gv1CIesFfR59CuWm4354cGoYC6alQWHR1atrLQN1afQ7-nM7wwMcawUbzmqRPio9uyoSq1Pv6-hvSJBdYd5b4P5bfGbM9x9uM1FQhewGmAgJnUJ4T7wwIlL4D-jGyKHTV=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczM1-qN4qErld4NHiTJq_ou3ZHZM2YK8xkfNFlFSAPrOBJ-k6UtMK9c6yEYJp_VauMz02L_VsO3gDa1r1TUlUuSJlXrqOtm5q6WT7rqjqu2qawRJEJn4x8izg8B84jFMHAkdPaA8iNDvnRf9CrpiwMY5=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPoQMdzJapXjVNSC6JoM5m3E7X_38AWaBGm95f1I-Mra7SxZS9Q4k80WxHYfnlPd08TokmODZNojbl5HMGVQ5aP4OkMO--BC3iLoM_M94PyRPAJVF8fJ6VXWnA7famvbL0wmeVBCo26U4m_Kjp6gBKz=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczO6ml8W0bvQGpp1HYbzf3IFlvdUYa2Nsn8JiJkeIJ5OEmBZWb5w-kIQmgo8DA33mc-LwTMSwHW1noeXZrlzvRRpmKmaPMvYCZdx57gpCJt1nK2IVhyOoWIZGy0XI5uQBg4fnss6ebgqjScTuQTievna=w1920-h1080"

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