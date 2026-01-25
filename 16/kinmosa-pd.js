var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMLR2cbCvMsMEBfFteY4_pjUCHu_vrHhWV7-QIQh87RRN5VynDUy-zgtekUSzHZGR1KINacdVZ9x39mehIZ8oDSVBWX6ufSAXxFOJfuWBR0QjpP2fmSdJnnurJDgsm2_Q0iMQDnXF4hOSf69rXPsVCt=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOOl9TxB8ijhh1Nb9fgrMWbKnWLgHne4Th9_zBF5Vam5AmtBhpJ0TNjfR9IyzprfE0zqxutCN-p6agIIE2P2xi5qYtrHaR0laP4lFak08JMAQ_C0v8BgZp32NXMkOXsTubdPAbjfux0e1BZX0NoyJBL=w1920-h1080"

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