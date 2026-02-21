var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNPUxCOrq62HnEeJ4RViesd0JQIyq7o_44UbbDkxBdKqaudq3VhaVKwABhhSSHQWPC087vIv7tmmio7rDsbK4gJBGEGI7HxvU-kAsG6p-2g8l3T0N56Nt0vxcnFjEvs-sCFqvoJOuOBvmxeFtg5YukY=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOy2d5ZIZIi-kh7JdsvCxNjZBXi7dkwK7bdYHdJUx5qqIqWeHvcvlkRM1yz-_GdTS6LSDS4z38wefTFMGfcAgEnwr2KVVs29ae89V0xGZ6gcKKbhSJeEb1_6_klX0AISIunXSQ7QenCOA0bRkkKwaRJ=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNPcVHhB4WfGRQrVe0dhWHj6TlKocxPWTl6CitWAzTcQUtqv57c6AGSqpNAOgzIXw00g5PAnhVlU3-5OtCIF6KTHGCk5GfonMeBTv0CqZOd0IYUTcki1oyqzolNRh51TQOmkrTyE2qW3Py3dTrKPz5_=w1920-h1080"

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