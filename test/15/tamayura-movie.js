var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMAMiK66vKDTohLOPC9CQX5xLPlycU9qtXvaYyRqwF8sd2kaHgDCqgW4iVx7hFfnAaO5Tk-BqSAsWnbYjWI0rGwd-xfmcf2VK3fMmNyjGQ3OERsT27301Axyy2dYZJPy2F5OUi7_Ea6jqiEFbHRcdMk=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPkjQ3TNEAY5DhDQu5MI2P911KNN5r7j2KEfpEt1p-h5yx_9NALHT9fNV9JEcZp9rwNCJOMAv7Sqr8wp8FAHJ4g_mlCPuFaRdeUo1xfieyP7sQgqMHY0DfpUBoS-e-CEQfaKFwgv632PEyYMJDllZCQ=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczM8rp7CxXYVIv6SfGLggY4jLeH6e9BPJPxK8Ok8Xa08cv5lr85Khs2tFfczCKkRFkmfxQWjgYrsMHpXblPI1ZcVnCYfOgprVVGaUKSwnBCyrpQgxkwnZ8nisgnp8jJHHK8wqqF_aqX5SpoV1JWvLfL8=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOSV8B_R3_EJdTALst04sG-3dporQtehhZ3SmEWaYe6ZBC796OTB8kNp7LEY5d3iZmXo1_wS6_WnYMVJukVLiHfvKaF5OSnq6kZuCvCp15j8QWc7YWa2Do-Rm0FBiOVlA6lnUMxd0CB1lETUXMtc4Qf=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMsqgNGiIrXB4m5Yfl-xyMKbfwrvOuOcsqebcmhzsD-NXLE3M8bZBpM-BNEuudwidbDvdPBkGPvnZMOgj0upDowUFRKlb-Ya3V9y54Dv7nH-kp52oICpHO5CcwKE9G96dUZswDwdKIXVDGMbeE14yei=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczODd1j-oJagzbzw4CL62hr9qC7tivRCDvgFkNTO3vfI8-oruOAP9rhiOdtw81vnMsYvzreMpyNHnXUrYVdVP_friQjFCUIntUOzj8v1Yy6uIHxg7dicXVP3-4plWRp29HxCBORjEKJIxRynAnBF7DNY=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOC3Efk-RAsBBQht3FNHc8fWkYpjP7YzN2WopdGnAdtankX0M1G3cNpF4b487DixfJGQ5Zwyw90lxbNT7gpxLaOzIWixNnyK4xBFvM3XgWqzgRK724nVF2wq1VIKklBhLCXl1RSPIXstT_6J9IN5oRR=w1920-h1080"

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