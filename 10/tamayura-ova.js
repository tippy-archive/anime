var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMFl_1m6YDNmfUASlnxGK_RIN23lShq0FzcsG3RJ8n8A4OTO9oKRBR86QXdYZcvV1l5Xv8EQsNjaZgJw1YomvM-24rSVDPI2ZgtPLZ_phmRS_PfAJYDDXuGHMM0yGM8OqGET60RbqC1sJCvsEItwREL=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczP8EPQK-OlGz1zuLDCno7yuB4b7RplNR4AGS2wMScHiBQbf30iUhOmtZDNK_A56ih8cVu4YyegXV0Sbtbz85t7kA7BKKkszgNacsPnIn07g-spmk7wXVE2_UEaeU2bwWBdiZhty84FmTPyvOB7IFs6O=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNJcgD6zEZDUPY8TiefmxOz4uXUyBAUwb1eUiWtZJecXxphcz0N3koLBg8FYy1BBvlgHr_a0tMWOdmU4JpzG7T5VV7cI_1GVrU3FDDa9umFR9KnaGkFLDjaNUd4OMIB3AM9GXZsBdYfmxoaWboEOk1I=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMrlgM2D7_7C_qbyOpfGk7rBtXwKZ1Bwy8AWAOX10vdouh0TJbyH_tWE4kK2nh27P8V-OeJ02qjaL_oNbQXlOFwOTZkjUByoog70XvVDBxcyvb5PWK0nBzSLu3l5NFGXs1LGZ5y-HI8d9qDGs_LD4_0=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPPhHQyMdFEpiWqKh9EV-25OCupnUvJSlhcVdLDg2m_V3U8ziosJ1zVcblj_GFephVIlrw0ANNvGhCgYNT_9IsrfkMvNw_4tuJ2U8f9-CDWujSA_iwxiDeze7UQTvkKdLLB38E5GKk-j9gRigDpNJu6=w1920-h1080"

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