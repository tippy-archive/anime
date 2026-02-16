var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNECFnVU6Mcs0dXSfh4s2B2RWmA6WMF0OoW_1sBcgQFnnFASJOYOcvCrHdRgnTASxGEZHsoPY7f8mw0Q5YlP1snbdEBT-pVt6IP14wQd7r4bLf2zBq-qW3rIPg-E9gDtvH1e7jI8hTHaa0qh3U8zzqu=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczP99VlO3GRgNgfPpMR9TdSWUNgWx-xx3lK3iLa9gtuplrmYeP_JXP1Ng3mdEF6cQtEDDjON9-t7RgCgEAf0Ym3RJO4FUQn4LbVLNZOxvD-M253YZ-lNotLZgYZhyDI8cOs5TeneVo4nzQfZcd3tHUB2=w1920-h1080"

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