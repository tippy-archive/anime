var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPNIKP6qZQNVZCbK8g5Dk4DNU61K7aojg8_b7UxIDpLroyUxmAVI8t37fdfELOEGMRW9b9DH4aklfOSFgf8OShLqwB2CoprejdSm_R1_aWW6oc8bZZGpsmuEprIgyIC9cYkP3GvNIKsjE9VhZLKJ4YM=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMITXWLRZ1UeeJ9n6rYjkFHzBNHnZLOKvN-DjTtqP11ED4QxtTQtbje0tlFHRPBghsCJwUIvciO0lKQX4hhIC8VHcDqxiezqxQtyIQ8-v8RexBE-X_j6tUCGmHuT0hP9ETwEokaenCBCn6Xo30-7335=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMnHKatr3AAI9YHMzovruTM_VHcd90pzrM7fFkSqoHj0LkPoUKaYboKcOZS1mdD9jBjI0SFHRqx7tuTRvQMX8UZaQX4LmOz5a9kA94Sh4U3HLzoFWB0Y13CvqAqOZK-Dae6luh0nuhGliAiivDOOLcH=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPeRpLBzqMCbUMkFfIsPoSIYn64EuIMRayBoG7mUL2MFz8e0upGqRJLhzTO4srei9s_q_gLrLBGzyG6fAT1COIX8yl9UdCWh5hVI1kzXJB5NLl6ITMwxmH9dFLzYh6TMbMxiWtGTiq1Q9cD4Xds-3Dy=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOvXfEzAlKUUahpB8s8tOMHnzo1y9kIV1uR81jnbBRxY1vy4v_hu1R-pNFPB7dY3tX_dKJzqhBnWT_BsAuHuKFMcT7eYxgLMLkQy9riV4pQJsJM_ytQevJPS9bEzUnoeqQIyC25ujVYUg85DBqNjxkN=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMerBb6wRpGyp6VNc3Ec5F7pX7YJqSNkdBBny4_VhKR2fJ9s5G3Mj2Rf3jpnfXOKZMvIESWQYnuqJnZeCNMa3ShcXmgurG0CbKrzkbNChSNjPK2Ial_TNC0L0PSXjlN-e5izonFfwIJP_Q4sEHyXKiS=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMuVdtbCMgPf7kKBP3SRUiHnPLcvb4AJy5vrBCTob3peWWdS6fjVpyXaf_lgYI9K_V8kglW9kC7jBgnODZwkKm7ApLirnoaVZW9f0JzIJrGZd1MV5mkTw-RaOuKUTPqi1GFnY6-Bc9jJ6T-pVj7vLeP=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMUVp2ZaPTDQgFX67xPu5VeH61W2n9Nlz-w3y9sWlt4wBS9ZEyyUpo8XNHX1dbMOzEK70G1CVz2YwiQ4PL2JqjuHNokYONrwNu182ft_Pg1Uo7QNaapT9b7at1CT5Zo8uMHVmgtRZggHjs6qE95qCZ6=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNf8MqdzboFK7_oFtGNx15aa0q57AmhXiKTMUXIjNGCKAhCS60NtDjcOpfw2rDihQkVTkqia3RLWJgW8kG30Odm7eGRsWW3VlH6CWId-Dk4H7lA9nbiKeTBPoVTmJVXRe11QK7BWhoBLJKpoO6h5mr1=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNdUCdEZeSWmLXLT-puDYqjiCtLPl9z5LxcJoU_qy9r-coFiatLYSYB4qlLBRvPZ6mwzmnTXXNUSlXCintDke9Stsq_P6-fPB8YVgj58JESQ-s4sKWx-TzYWvmFreYMmsngZ8E7RDMmyUous03UQbUg=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPcAB7qYqI4uZYwwbHE5NQXghPQ0EazOe3QGT-x2LkZKeF85OSz99yc91W0Y77L59g7836_pvvA-9mpzxHoX1pv9fMwh01sb4lFqb9Ae0vkpwS3rJSZUkSAvNEItSREA5yeIOMBY9GM1xOS7r1exzoQ=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczN8GdWKb1jd0sHvaXjMAwMNMwxN42v25pMq2O63FTQmrznM5yw8yRDJwmQKvRXYRVpCVKexDYS2q_Oa21pWL3kQSqrktIWxd2foib5JrWwIzyJN3wMcrTOo7U3jErVRHQVtXpGnRj9Oxy5c9tBlZJk0=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczO963YhaAauLEsug3daldw1svsN7Fug1RETDkNz3l_2xSLeCPYXStnUyqWOODlVFAd--FukifuzIn7X4op7V_EIRBlmNjumeyhUkOc9w9FkpaViGbXbiP4qO2trIJodVVaDtoboEL58MA7bcY4EtzJb=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczP5PDqEWv7TLFVbaBrUdCosNOfuMS4FvhFXQxDCWjP6QbjAWOLo9FMjIBUmHMXSC3spfxGqzTMjNSBDn2wzr7u4HScX8Mr3P5N62A8f6URFyZchSR4q_ZW2deDHMKN02sBR3KfAR-PQYLU2AMspAmsV=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNG87oXhgCvazM8pm1Rem2jnnBwevmCd0cdq4Avr87z0RJ_eoMUcIXQsIm-z152KW556Y_eDEwvxuavzorKvhORr47h5_whLN6fzEem7Twy6gF_SXmvVCgUZCoM5Pt9cKgo0kFYsWDw1Z9adU_WNV7H=w1920-h1080"

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