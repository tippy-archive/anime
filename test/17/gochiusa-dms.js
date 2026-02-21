var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOviVW_vXZou-SPtIze_yiuaheNb0DXCe2Ka_Km85PGvIJo6Op4ZCoP9fiJ-jeYWnvxFX9IBQiMscroaLuETZXnpsVRkLC2fyrBcckwX3m1Rt570u5jy1UBLW0cPDhfM3pzGM_3fV2MzoXVrGtF3U_8=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMZDVDNC1qrmAF34zmsFh7eYe3KCllSDLTJur5ccGqTtjZJ64u__U-10hhcVB3H5CicAW9BTYqEhuB7J6thf0dzpE4X8tK_xoZShiOVMfMb5ZHHlKY8OmSH7HptFZGrhGt35XYocQVEKoVKzrbtpMAn=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMQPytPVMeQBNusPgiATxKzyNNnnpn6FAv_HLxR7IpihKoJ7kROyLmYQVmRqMa2La8IeZd_f-d1e7TZUpUMvJrFB-ei7Ko2vdL8W559rmNmUbuid4V6sohFjBLJS_xvHDE4NecTpxjhr3WXNUcWvqWt=w1920-h1080"

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