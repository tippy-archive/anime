var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPeZU0Rz1Gx_w_byYn94ejOO2sOyevI78x_P6EYqdK4Vpq4S2dPX-YxaeTW0TwAIBNA9HtSiTGKZ-ZYa8lyLVwoof4qEZjv1GyWa_DN_HjzrQ6qhvFT6kjjHavT6ahMSdtRCglz92-mHbdOEuNk2x74=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczP9Lg2tHadSbs8dH9ZNkgnggUFfMg9wsU4nzFTU8h_thctqrXZSXC3JCULFKO9Q2BjJ7UX7DiBwjquCQDKe3NJg7lvadu1elaT2KDQmCNVwHs9zqm1sPgWhvkN0I3ItIYQKjVowczaT0cjVyCL683K_=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMnpzveVQEL6biGqxBlY8K7eBlcY9C0g48wflB3d0SVjq58ACje-wgTWiAGhooicTb1Z0qGbMrsCfSTlVI1JiI-ge0pRZQHEgNiIbwWZaTCPKc0em9LLytIf6dPAamWGSTOITGpnamsNvUUgn6LuznR=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPZ0MPT8NRxo6sIvHv4mnlM0h6ICg-3H7arOuHspnRmpG7CP3Rga3TRnGkLHx0vtqNwW-2ZZMrht4fNPMZC_Yg0ZqNNVIH35ikXudsapU7Foq1iY-4X03XVrlj48T7tcj7lLfpyx-7TObbFs2IRkeos=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczM-dPzMSmEnZ0pbiaw_I9PprHuMCtE853L1UggK7hPIXQx85FTc4ZDgfKLgKn9qlvx0DOm_G5RM3P4q5QqbWd8cQoXLGzRJRjY32U0xefhpyE3TH0Hnop9mFKtIVOeb8JqR8HWgpCC8VZ3IZEF2AcTF=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNXdLMAIKgVwBd9S8JcIkkOpURHR9ttapTScyl1KRebhK27vmERLSr5m3eegRj-69x0NHWtd-miPbkHnXE9PfOoxoab6dSx3NgDzRQTX0gtwh3WK4jSP23Xyl4mdVU8Ek0tJMtsHEVt4eohiTh_fwFt=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOORUK7ud3IH5IvnWE0da0iWYFtLadTuB40vyXaEzwYuw5-N8d5aLhW8qcoZG5iEuKStdntk2vkgFLNiK03vV9IFZpPcvZ84qU4MlwSxnZwt9e0HvlKDp9_LHEs5SzXRmWthqzrm_fpgh_Ya4O4kAH3=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOMihoKL-ysTK9pGTyDJm3Tgp421KZ6pN2RRFk7wfE1vd8ed-HYL-J9G3tZrbHLlvX2zDwTEVb6jESMyzGe-0fSLT1K7b58-VIbu5yQezYvIhQ29r9su1_hFamiZQR8qy6-SVzONs31Zcd3franzHKF=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNUR7yPpkJ0a6M_ZQTa_L-r21cmFYR-WcWjladZZmpuT31kvyEtnBfbChD06I79cYkYRgkswvI2Hid5yXR4QO6ZQmUq0cEXp8DalKwR7ZXrUBy35U115uaxwsQcI4A-dKZZZj9w7chv7f8EVI1YoGnq=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMewXfkBqzPnAUnXgXp1xUNvKewFToCZiZr46c_HPv-dU2U-izI1Zfw6Af1nea2laoUEpzM6SlYbILsBYnQGQAChR7p0P05C9faP0L5PVrYUr3A6EhfE1tsN7iPxSTvil3XW04RlStNmdVXoR7y7i52=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPzmhE5Pklntn8gL3_fOWUj-Ozdjw6SOIxMryDkCPPSszuzGk0a47mV2zKi0QX2yevCYHCBq18Isy0ca8r5dVx9WDenDW5XwMRdxYRMJDy9uNj0JymnJ9SE4YodZYS41VAIKpTMOeme0l6nJaE0iS1p=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMKAJbNSKFsPxxefUP-MFTonUsE9wm90yeyKpdZzCyWOWFDyasf1Rh9WJrGWdIEPQX68uFAEB-u-sqW9ofm8T2enuYjPJpLeEXOgR6OTDNnnoQe983bM5Lr74Sxb1Bj-Vnm_jRhzAEUgIXUjnfb3tdX=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOgXTawkor8R3BS0lzMRYrZ8O27BnKcLbnHvYnps6d2ABb5lIm_76eKJneYDMZRqt3IoooibQ67ZbgHlRqhSslB0LvL4uW-CDeTuy-6PYt-WSN2vrYX50lKy1WGv0a8h3TPpZR8UobRQtH5KwFmY3h4=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMocJUVE4UKyRYrd5ykd1Sl1KTc5EvRvWtDN478bxFzfQyxLTwOnh12vto4mk9BklvaWn3UEO16OrPcijLmfXXu4Ed4yIOxd0XrlFJy00UscvMKh-qAUVi0Vc4Y9HYfO3Dmw9ceO1OqW6GZENQxiMQ2=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPHSQ1hQZTVHrOml1JXw250AqGMJQ4_zEnUDPRNyFPQmMPB5t3WOHHkZgGhFV6Dwv1zb9khlVOYSqEnJxFFmjG6Qd3vr62lY1qdxo2-be2toOtJtf4yCPThL-yUeymh59vwo_0pZdXbTbnHOe2MSsoA=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOrki2UoQOAzFlh8dnF2n3QoT2oatNMfSot5lj5oeWP6OJOE6j0wSCU88B1AQArZhcyMcJkqY0Pr-UVn7ZFxlKSCsurUZEE-lF8pUwdjr7ctpC2-6B-lsjKFj4BPUIGcR686IlAI35XSrVjHfY3fU7f=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOAMgM8d7Zb5COALRvXBTKHBRr9sH3fKJzxZkVdWTnGRRUHu2KAE4S8eeTM_O-VwPva-ZZD2LSQWUJJ8O7oEF8jkEdcuP_XGLhmv1JomAuJk4bvsD-tvd-XV8ZDCbriHURE-XXl3DVtgHxIuB5GbWT7=w1920-h1080"

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