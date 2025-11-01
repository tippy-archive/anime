var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPkvuhSYD8l_4gITBVCRjnqM9Csj-Co39J76s889X_xNlUZcd0fM31jon01bpDzPeYYjH0T1Qbs3c-Dxhwn6BLr9zQ1Jy2yub1AWwVYE6KJyEU-lXOUK5onb8EQAZ9XFd28SeNf-gtnpC8Xz3mcC2qR=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMm1Oy_Oklv3UMDuPLthQEBFzZKdRwhi5mI5_xjiY8wj60azxYNdvyF07Np20FFX_ZdD7b-M0QXzfavDR-K4X883kyt76IazdFCi1hR4vMV50v-UU5RVNrmqS5Oe2QGM9P7Crmul2HZHl-YhnNCAxkd=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczO4VKIboWjp1jd6hvEQ6BXL69vjfVsmqQjfAJoJ9NusNhUF61q_bky3qHqgLiXR9dnNztqi4i9QRzKiKCo8cKu-106x_TV_-fj6Xfz0HNyQioJM6a4c2T_E6j49J3chxF21dBGujz_N8c87tqOevJVR=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMvUC187FbKR8OyyvlTzRTk2SsdXzZJEQ2dXGCJbxbkbJQngGYDzYd3ziPGTj8J0Ar0Lc57q6KvG-i_WqHGQCNGBfVit8mGQCV6BHAW4ezTDBPbKEHRLbIR186oZ6NgQdk6A0OwbQIFLvySeuTlLigd=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOAsj_ud0lCKZ2Mb-_sSP_V-dOKFRMyTGRXerb4kTDd72DPs-qwP8NGyZ7zCU0fBBwBjzuZ5qw-AkZyaHnFHzRW3spHgWhArrvOIkiE-OafFVK1mNgeG-yVw_2igPHPXftttD3jbL-ptYtdK2jlHqGV=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNjXLkit9DaBvipqi-a7HtErEOjiPdcx6S88ZUVPZM_aPfYeOGtVkA3gFG54qwAR8IDu0Uil0u6kXL2xr0RT97R-ZpmxTsefDCw0R4HApHSlpxKSnnOdNsO_NUHHvGGJMZdSAlvViw7UkkTilZcEqeV=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPHBFB3kvKcxQasAldQyEbZPpB_TtNgyKG3J0n3Wx_AKKQaPoUQgrKSsBlX9WmuDqhl4qfUNH16aiGvp_04_Vb2km8vu1geMEoyNcQuHmTuc829H6gYVJ3Y-gnh8bRG8gpj2EmVKQ1zHsGbbuHMg1vq=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNvI6p0qOad5rHviM4pySTyzbJ4CVpkxGKYVgCZvMx-wwsJQttX-8YGMSNnZ-06112Z3Xg5YVgPN6AdxCvwo7ylSdNsWW4yM4Sd5hZS5Bja4eVt3WQabaDLAwljn4jUdJMXwfrVB9TdTqRt1zq_Avu_=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMlrvAAAfFknfyqbKWnum41x08y9JBdPFf1euGGStya1a79TX5rb8PaQ5AQbvQK4aP443RGTFzAuSmQCasTM0am4HtJsRrV9S_psnfaStiq_SlccNYw2juQf9QNeFHN-QksKqQcy-kYdOgMm8sUuG3H=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPCFdl1OlNYvVHSlxioVlaivcCHqNDnEiAHkMpO2s9bVDB_nmbjmBMZ8euoVbPEM3qvF07ogFn88K2Mg_uRpmExC0Uq577og9K_uSAFhOREwc0LX8oqd9Vg9LF5fU5Ua878y9yw82-JGoAx4uM75xN-=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNeuDFeQRK6ZkCn71T0EGWKeO-VRaatJf3WIiUnWWLHmCUBRStboJykywhI1m1lDIeo5agI9wTRMiCbdPZm2CxfW1CnBTnzx-XGlnv8f8SLPqf0B5jXRGKoIKv-m0UstI_2IuUEoca75ZYGYZIs6zSY=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNNDl0dGmQQ7oIoKghHw26VR9emqBuCKSNcID9Rvb_vUNO6eOkrCNmPCW-NHPSws90FIlC_GX7mwiJt-OcsAgOIToCXFrhRwpuraQ6iK3xSwggJDWBRuCXBgT7qs9ybomo9jUBPShymAqOoGs1Vw3Ab=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczM8hFwMoqYyDeUrE014QtFgmgifoSjt36Wd6CL_EAp612Eklw97V_cyEL6jEop_wnK8gkCZahNnYBQJUhuPy6lp4zXrj6l_7qsbYLazfU-q_PFvpibnYrwxrpB9AoWiWoLaTfwxdYYP7-52b_A-r3RN=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPJWWUFuDzfSfYVTncF64z9FchDzJ2JkaqY0_NoCjSzuE2ZZkxQcltO1JBV5wKYPqhpEeleVW4utrMnl6jfZhO7gcodBuyNOeMonpTBowttX7eW9-oxrJOFCLEcy0sI5y7g0ufifn9l5UY0zRkn1xPE=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMFXbGWCFx-xoCZyaPMsjjXWzSxx1v-0r7q7HTHp-Nsihujh_zgnwGWAl16cqMfl6FSUo4XdGy0pNbkZMGAPUAG7VNUUPUialGPrJ2EY8BLt7-oWQpRrXwfG71l4O-BjzdHlMk0WrHuzn2ysav-QWI8=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOnIGplzJmVP7c51vYmaamvHDPYHwG1SWGcAWBb9vO2OLVG6vRPVIP9lc2FEIC8q0ZydmxbSLhpwgJ_HZlV6tLgX2uKewaJr3HZkG1QWqYxph2b1rHv0FaCaQEgbhVP7mOfMeD-EjZPWdF_ZCuQJNO8=w1920-h1080"

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