var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNdTna4kpFTVi5nbja5FVu9V2E6HinzMlM3458xfXgeQ8So4cfP9SttFJKhGo0dAxuctzcYrzhgkJl1ChJe15AQdFeHKUYcicKpPwSd0Lh-VSNsI3Tv6X1dHjYOn5fLs6ZSmeEy-VbBdGMhfZSb1-BF=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczM6o5jXNYx2H0yZVd3z9GzLBpRce1MtkoP_ER7qUYfsCuCYDDJNiNiL7s8Vi7us1GVey2q_gUq5MUxHWB6TJeNzwZpyQCXigeyBfmpNzFIahn05-wEz0gwN_ichRFd53xwTj7Z12cE8G0p5uu9GZHrT=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczN8gAVuMEuGBZpyTtHyCfJVk1H7y5vH-19M2k2I2h2OckmF4vqmKT2UonlXsBA6LgJ8K-QOuSH8z4cxQ1px6Pzjj7dJOcNPceLOP4S1XtvfE3OFvTuQNY2Ems5Fit2mMUhQsQJkH4B8Rx7HVSANwW-Q=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczN4jtNKr6C5j6EO86SheEWVMz2ScjZxwF_BNZXKBLLLKLecQtX24vaaKxRkuYjm3kKLHCZOr5pwESO6vnft-PbrB1JZqLklavgw6TBqoea4n5pvF_tC2jrn41ZnWQluLEoJ2xLKEqZ8zAbICbpwtMJj=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNg75U7bBxwxDCQUhByDJ-Aj1rODw_yzLWwb6mXAwXwk8JO3Xu9mmeRXwVkEL-0n3Q3QGTn78khkNjXZrro9d8dOqQEryNb-yy5lTTuULmG0J9asC9AkRZsX3Tb8bWatk9KlzC0_3GkNInOg2aCqMeF=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNOXM-t06rtvSJdemn8zq9tSSx6watFaZjumiRsZ5izDKakUmHDFwiIB0PXyHQSKcXookfYn913yX_ZoD-8Z_BD_cOOAiF_sJEeQS1OVDplzal0BBVFgrQ5UCjuXRQ6nW5bcwchrlvejyLLxU22mwvE=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczON3vskASGWfHbY7F-oV2ZDHwGuz8h_nq1XdD862ZjYh6aw3oUxlkCvLWa751pDf0GIXuT2dQrh_y6d7w5iVA5WYmNCF8Jo56ULq1ebVKl4mz-C28ZzZtFsjoJCp8_KxacUsctdK-gMQTysenzXsHIk=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOzNmj5-xvEDpXgbwuqaNbdl_DlKdWuzaY4Y6uT7A5aj54Pw1iDXsFt7Os5hgjJ4UhQvM9bzQPoHN4MLJ0ZEFUcWzN19PyLNhsvQhIp2ZN2AePFM3WPqKySq-cVYPoI_BpqdqJBkksT0h5Cgwzjo2pX=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczM5MNglJkyn_XfHHoP1iobWjGt0EBUlxYZdh5XKV_vUtWyBaesgFe1jly3blIbc0eubCYqaHb-OVKUXPY5OSDP6JDh9OK7tIDcCusVdRJo_kOkwkyQB9_DL8aw2UAwOuQ2c4jLtzVv-jBu-nGWwv4dM=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPQiSJAo_bU50B17YQZ_0Dew1Kln6dssPjM3GHeGFlSdpKgy5j6YcLuAOwxk6kYcvqiScGN00QjTjy8I4F7ozUa6RSvpIeoAkoSdhQ7xKC21RDatIVgBsOHU8kG35frgi0FMxGwKjxgwffImfN9VE9q=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPmdln8sljOnfpSgGtF_-ypkgZjbsn-I6np4DkLuAJntCy4phxB3hVEW9J5iO6KF6TTcrJEG3zzHaIU9STS9Iw656ZPcaBNa_-Ux7hJvVecfxQv4bxxX5sd3_Lb1yRqdOUMMSP8SlBG0tOgyrgzGx2A=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOXFBAC6rPL_ja76L-gexiHQijY4us8vePIxP9wEcpMW9HyHHcVdbTUaPKNodfGeOkk31wmvgEdf7sYp5j3zW50UxqtmJ99JWNHZYTEINH876RNarLK1mPgno_5o4sYG7K4bX7_IDuvumdm8KQ0Nds6=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczO2hopd8G8kFJ7lPTMIslsDo1LEvVwqiMugp4fUOSjI28NHb3WgbCW3rainMRxyst5b3mN7BqGx37OABC7_nRCHgrf6hnnBHpfwqS5UKripIW6ebI6sOCJriZieHYIGJ12Qyac5P45ButyT2-z_xwDY=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOJ-fe3UvA8_aEHuiBo_uwGQt8yryAjAIl8cGfenhQewvxiXjpAGQARCSPtSBdt4cOTAxgsY6Slqu4PdY1PPL5BpGS5OaPTgghBE06C_xVt9Uzymqj0l3DpMl7oF7PHg10C8aCmDT3DfoOADORyUr8u=w1920-h1080"

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