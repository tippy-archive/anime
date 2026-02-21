var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczM6FzWjL3SPm5_o0ZE7DFL0ohx3UoSEiEv-kXMiCIJs4oeGJg2zu6SKnlI-WKhpHyx6u2W3Yrkgzq46lvSG_QH9A0kFVaeNwy2ltNFjfDO0-Qyqzrfb2Yl6XzWL7jMcHe8MwEdk6T_ijIQHWKJsglPC=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPY5YN5-veknWUGpkGxMVoSCN7YlGNgSBV4xdaonWA96EeIRRjEhZvsIeOkKgUZrdb6vMsyiJ6ihO8oYC-tU74nAYHmT04pLjGs-AkvawBec0ZWQZddSH2vVgLgWU-UO4AYztxaX-YViXmolqCWv-oL=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOyhrhTTtUv2m8N2O7xzH5sZdtLWXeCt5TeZKOQWSxkts1EOMGTi9JJ4wxUQAHRcm1PZsVWwJKmN27d4R2KNWtkpC3xwdM8cAHskM1KRkaT5NknrOmXMtGSEcbkTktK6h0RHFMbx7UMq7ulxx0ifrlt=w1920-h1080"

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