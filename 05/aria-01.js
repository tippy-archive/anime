var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1WaA7tma2V_6eVpVrEqUbyY6WL7eZ3Xn4"
randomimages[1] = "https://lh3.google.com/u/0/d/1ufVKie4oFu2VAH-In9l_yTcEjOcQmRs5"
randomimages[2] = "https://lh3.google.com/u/0/d/10_GqBVWMVcxwF27DinxGgaO_M3Q_4yHe"
randomimages[3] = "https://lh3.google.com/u/0/d/1CraNBYKA7Wcu7n5BXhLJPip0vmoWRwCE"
randomimages[4] = "https://lh3.google.com/u/0/d/11peV9LhWkSOAGJiEqb73aD53LcOXdKND"
randomimages[5] = "https://lh3.google.com/u/0/d/1d6cLWjdM0BBOWEPi9_VmGQKR75-qG1vj"
randomimages[6] = "https://lh3.google.com/u/0/d/1S7VtvlCwZNjdJcbxfOc9eeTByqx8-rNc"
randomimages[7] = "https://lh3.google.com/u/0/d/1t7bvGjKzryCzFF2LEhNYuUCYwDAGaF3Z"
randomimages[8] = "https://lh3.google.com/u/0/d/12sAx6ZQ7oOe92DdCFcbKqLn_rLEsULO0"
randomimages[9] = "https://lh3.google.com/u/0/d/1xy_x5E9Lj_flDueN45E89P63LOkawfV4"
randomimages[10] = "https://lh3.google.com/u/0/d/1pk8IFWP4Euw0zc8Wj-Fwj-fpXgVYX3Op"
randomimages[11] = "https://lh3.google.com/u/0/d/1OKUcuNH0-0DNqsN1lo4ebXp70-V7sXVk"
randomimages[12] = "https://lh3.google.com/u/0/d/1Iq5yOAVN2a7mLCwVpmBftsrBEua4wFBD"

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