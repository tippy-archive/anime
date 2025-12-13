var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPLwjmrIdIsK8utOo-WCzM4ywrWeSkCQsiMuEBNKgWxqxtexTGyQMyxGVldhRe3YUdOVaP_RJUPoek4D6nYIpVHDoWGgUrGMuT1mxDJu28TSQV5FT35MQAY832d7ikW0dpryxrqa_P8EYIhASsJYq1B=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMPbiO4kYfs78yD8g1QIWjlmiX48upuebjHejpFnReuV_3eWg4ha95fHBQ9wKnV8kN-ncj5doXmanzbfd_AG4PdYZEi-DmtsrJ4f0QaOq47ApB5FJmbTdutTyGYuCxc4FJLs2wMNveJDSC-x-Qkqsw3=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPE7XV_taXInXh10ACilQRgiil8f2SOsYZwfYwdb-5nWt4LfiFCewHxO6qu4KOcAQwvERFGwY71-10vb0GIB-DCnHq5rIVMZGhjjyZavym6gUVs0tobZIATpf1L08lqjwtBhZ39_zFfOopvl3W62iJ9=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMBvH2voqLeIaMmpNeDKZEDY9AgRDttGzSV4siuynO4GOkCr3PrFWrk2wLIB6VDuqQIe96m1N6ohByCQSO3qXHUYmjxutiWTdODLMJQexaT0cCYTQV_x4gM1FryldMAsr2w638ldah-mWPrMtHKToVP=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPoqOHzIiVNlDmhka8Uv7p7ASt_8EqDXusKFlc7B9Vnluob6ijRRivFPonLaR96HstYGmx7jN9Lnue-4EDt0ucua3yq_UUx9BZkp-Pc9qD4D4_VhcG5N5C76QtPlrYt33kauzhP3AspEOuhCJKVeZbk=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOCwveKNJ11R7SKSb9Avmm6d6c5kfW2dtuU4sMeOj6zt9JZg0kER99EukgP2V31v8y8J_aScRDqtlCLmVQK1HZhoxihc7_dEAtcSdAtnGf9dST8qy48tqCV1xa_H6x2WyfpW8dXhbQ3CCZ76kGFLz5c=w1920-h1080"

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