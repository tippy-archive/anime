var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNN-c6ycwAxTReTwMrjTagul8yQjERcMLZBVo5ZDtVNX_Y2stSDNEqPRlj6Vqd6_BR_0pKtrhJbPdwW8ULxBbnfAtj2j3nixFLzM9Z3kpZ7HJtOY7zsu8DFjiyuwLuKf-VkkI4oHXgTIt-6UcqdjdN1=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczObdQFQE-dKtTmWuoBz8gg6AUDKPhVjIxtHYU2IeDAAq5ADSILCV3bRmqE2jjGyfbaeXzhhJo48xMZOYTHPiTyGiPaZwE1vwNFa19adLysoY6cAnlkrTuft0aNhLaRH4IrXJy1F06y4VRnAuVYXJ85O=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMWAaYaDE88qiBmloP05l0ah1uPDnRY4uyUlW55tf6Da-UjXdDFhdtplgm2YvAJcYAfKLlDahqzEMQxhylKec_xKg9XPNY_dkuct3Nhzlj6nrOsvNh0W2kukpu2TFVZDvubbRaR4H8TGiPfvm5qQLWX=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPb6c4OyXM0H46QhD7HLjDgbUP5w7ytd-jNkw3MRTMVFlzSibaYPxZMIa9XyEENvaEPPZzm18gRgKMsx1LQHgIYzWYzYy_1JEpJTRuU0NACQhXITnHODffhCqWYS2lRUiDVfgzruycatIx82t1l4yuX=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOmhHFlVLkv3nM5p60O6YdlvFvSPsvArgOVTRh32WSIi5ffDbn1AB8_R747RqXJlcaM_LMrD-Kb6Lnp-J28881hDwFj5RVR86UCWoxcVQRLl7ayuwBwBsL9eqYKnUdby7Id_sNMvTyFiIb7ksJcmaCH=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOaqGNRAcE4Ub_ualMpQyUgua4ghs52z1dcpMrwKxTEvrnMpqJFyTBNCfSYhBh9q9L0ZKPFyMEcFodGR61a1sgvgyCXHrVi_c1zYafnGD7oTTwv-9HnYH9681xivbdoGk0BX9lE1ESgOXS_nCexZVwh=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPePaKgJGx1-g_iKSrBzNNxjWD_86FaRCVcNBvYOtyriQncXjClnIENfXRWe_wJD5rq0q2pzeSqBZthwSeMGdX3K0BR4A0-eaya4H6BcEQyRG6Njm_ZhiYv9VABtZKO0OqnWdK6aQJRoPAMWAP1ZHwD=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOKuZrzlwX67ehQJnqbNu82yVCQulVjXJ2RbmRYBc1HtE7RT4jUmJgxrwxF8cThvcZs4iChunKRtQgY_rxbjs_DapgFbJy8oyTL3XT--V6ulKy8edPJHzdTsBnFdw_BJemlAmwGTf1_qNVlt3Y_mnK4=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczO0sn3ISLdznC1HxEFdG-EeSVY_JUfeNGWxhrJOhFg5Wvy7MueUKVLiAcYk_JkcTV3MxMGbMyKPxU0_52YULvp4wTwFw5USEqztX8znqYbhQCYcLjBcmzqwWdtpgQwItf8cv8VWw8D_5MHG9jlZB_pq=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNtQbYijKG8VyIrXAzkYM0SCA3P4eIdqibg_QeM8hNs1jyGK2usF0BkONyHl4xMSHi8U-S5eC9pOUz_HKmP7CNRGsjyAs8zrA17DlSm1xh3x-p010PE4GZk3F37fYiJd9fb7dHG7Vh5XlL753-CAN9B=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNnrpHKXaygs7fEp5Y6UZuaG1Ex4YlVxmCZMxnxy5tfBqZudvNodRKyZqg43gp88FGhqp1OHtZLyFh-LaLhLbeImH8QIUq84FQ56DzNJ3YB6ztg8wigU7zmjzTLGrj3KPIH57PfmtM34LAChg-ETDLt=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOdrvEUEMSRpNCEs1Tgv5JsH6SEetOdKx2MPYBAKGT54cijTdSaUyzCzjsNWJ792ILmDExdREiznBu3OC2J06OBI96oUunQ6QWedGTG482XHxGKdixNdCvkBJggW_qkFISTU4tR7xQkrCQX4AGAAk8U=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNs2sflNGR7X3nkZRiVtQcsiXs0y4e79LaEQvrAt1Y5pR2zUgen20KH6b75vUVsM2zamaixrN6xWpO5MGNlGB9wc-z__TfWPFcuCaOMg75BOYd-upus4WOR6gPlEFblgJlWw-pWuyTzc9XpqE6Vfe9C=w1920-h1080"

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