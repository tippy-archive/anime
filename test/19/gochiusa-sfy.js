var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOaq-YbHEnDRmNH4aGpSPUecQwgQFwumaxWRFnFr1pgEr6py5LC1WiwfPvyjvR0KYeHZ1wk4Y5zwgTKg9bqnu7PrL5IHhOffMIhuujKPH1k8EejEtd4HJeV4i4bsz4kw7KdhPmwJJvEk95ePVfFv8Nq=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPh5rImBn97QH5nyBFx4cCt0Vffu-sOU89OJmVjT1K1Tx3P_PkLwmTx-aw1Ji_jdorZD4OinvzhIupaXVi5XqYR2i8K2RBesNs4hKPqizpUHpGG7UOs2clboTzqowobMSg51jsFhpn8GexR2PWTRW64=w1920-h1080"

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