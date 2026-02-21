var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNvlgq_CZeohO2MEk9AYihUH4lZZwPMJrniW2WoQbyl7-80Hhk6phSDxgQSSXSr3J-prEQ-885WKJnzsFnMu8r9RNaecmn7w6tkoEtYfUZTlC-eCWHxk4twPmg8ncn8-S2ct6xtyhrRxqq0AQVYLQ8i=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOsCFvvT3la-dHXKG9iKnrn63Rff85nbCj13XLWtCkR-FhniQkUyiX20MEMZqL7PoHc-s76iuXrUXKvlYVFvp3Ydfr3ww9NOuheHLaMnFNE6_sL6RkStEofvg43hkhrPa-KOGrjUhC25k_Qj9L8qfVH=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNIYQWU3yD1zyi9eVct_LZl-AgW03tKoJb84-1LtjM77JSU5s91X5Y9cZxGG_Bwmi2CefzQfxL9Jwd0-R2TIOVrY4_zBk6Y2UVOwDmHW4o6sAN54Pr0kf-j5uGIJASG1ip3OTv-K1rYgOzTmOlZTyav=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPuJ275r5QZKTfGDDnhE_nuwyfCzLaYaG__UFeGESWHGl7aON17l_T8db3V2vEPfsCdg0YtBOsehMPVS8HFLjNHv_wcMy3lvP7SihtyxvxBns375N74ZdkZ4NQpRNBG5RTSLshhVZ06D7bec-7B_duQ=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPiOQbVMOOBqoBobjGWQSRtvaHq8sQygYx48zEuwTI1K9NzEgEWqYAiQHPZ-8PYvo0fyzFFVUntJsgKnM838b7NzAXCouBT75fHTM1yPs__pvH2gxzZIn2Pw0FSvFzL8CzOLlPAkK6chGTa8Dv00NnJ=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPP8cmxvr4TMNut3BF7YDN7G-NWKTqZGWrC1jgT7sB09XO8EvdQVO90z0kRqunSPVciST6dNoMpgeuKMWGA2NeYykMp8Tw030xM13Fr61P-IB2Wo2_3eCdbrtHFYeMkl6i20B-ybEzkZ4EQTAAiTM-d=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOQrNyjcNJmTBsCYAvAdQPFlBst0Y_jvzAsR_tGBgcO_qi5Nf2i5H347emHZSmxtHXcn6JYsOgHncPPoJenvyiofIGZoLQZXrlej4-V_J9W8hftCE1PNJQ0-HqwkbFIJeZtOnPYTZmdPb5o_UoNNDpa=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNak-Qn7M5mgc59fza-xIpxqZ-dGy3OEORaUw4DQKlt6JYwo2eTW7QDskvJuqcrU1OEVJVJbWv8ZaTK5kGi9YQNDHg2pW1RBJelTQMkV2FBhtZoBRq3M_d1TfeklMQvFs8Yv12KjGM2f5YOmbXE2qe4=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczM600UGz2Zw94dGQLN32IhV7dbI4z18aKAkDBL423f9nBI_zPOoimg9j6oWIHdAfhBW9ev4njIcQayp4Ls18koIImHyP5KBRes9VrvXfkgde4tDamIq0ZzQvkTRSsOGvatq3SJPzh1_DE8aNq4jH5P0=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMe-LGR3tKPPQujxzqRW3IMiHIsBbiD-L6i-n8V5jig61nQlCGi0bZncQD-yXrTP3ReSDM1ioyvs8Tp3-ykz0wFjyKqiBIHedsrVzyy4kzYzyGV-7eJoEbqlh0Aq78ZiID6tPg17-9sQhwfaAxDOYYU=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOw4oJjyD81LQzb-ZncwC3DljaBO72OFEUdPlrMTuAhlHt_1RIemjklmlRYO4GyvT7X_fHGTa0A6pyfSy_QgXoeT1RjmCkzBIxVdFvnF8zfGWx333Rs9L5yaWykr9WI5xSkCJeWTFIiUGO6ZlkdAQ03=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMkodtabzCcy46BEgC_VMvFyclwkwn7A3x-tn6Gb_ACG3g6AW_nxhITXj1Qxf9D4ZR--9POq93nvbK66XYqC6iVUkoy-h_c2t6XO60-cjq9pzb9N6eVMl7g1K7cZz1gAR1ZnkwbnLhYU4LAJmQHXfkB=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOxXPvC1fuQc0OWmDyAj5gbziEcX7Z0oRfamdTfVDTjisffsAj3QMLzqhoa8LETeyI9klD4d8WjNx4KZ45DBHSxz9GEKEHniUejZjQbB8blONqaiqsR7ODqWaWHCOo2HBPZ5kSiM6qCe-4d4dktggR9=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMVJK2eeNwAHlEOUk4vLXWFy7ul4YdT8HGthYNqrKdzkUiWZox-ndY1Snowt217eXcr2wjTJsJF5yw5FWMHjJkYMEJmjc9931YQC-uPRME40UYBWGDYeBnI29vmH18fQFK1rkBau_gJdD5r5f3AEgWW=w1920-h1080"

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