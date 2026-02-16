var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPuP5fqZbD1DeAbm3tprJqzF8Enz5K71NPFQ5gO50aavQ8pBLrOjyPOE4rO93AAI8AWlcg79r3_X4HJZymKkAo8DpO0q-EwqH90lh4gVt4kgQHqU98LuHI3gdvDuzR81V9QbLPyM87eQ8UxT0qaRpo7=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczO-tPzL_dyhJVcCHRA-rIT4jpG_NhMCA6q9FGDbUvLQBReiwpS2O5zP3jrs712WE0ulLwKIfOPSqEhfQ_yYDauQGILVkBJW24cQyGLgKuzRAR9f_q-J4hVHug-B7pLQSW_MA2HqQc-Zd3Apwo9A7ekE=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczM3v-StWBtZywx6bYsGetGJyDrxyMqGnEF6iays64JmGqqsCFnyfVBIDGxBEHnSEsbqKEAtl4_MeGtS8N9X5l46fAozvPFat6zct_0s9y7fZ-iFM2hN4C-FNsGjXzs0srcSP5bPEQYe-bMcFFDBK1-O=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOaD42ry6vFzuhtAtUzM4TPeAtRvm5Df19Iu6L3s7OUaoPDP-MUsFqUXMT7ek8mbV5bvbjLzyCZhpNPxWVe253KkqurqzpLSUfXo7EpYcMBlSXuOGMwAxGIfhNWFJyry5rhGJMU6D_kybdzObkF6Z4I=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOShV2bdMJMYJ1zTU88_Wl8a2dF37zKi25OhKQqe0aI3wsCm5zk-0b469aeUxRuHAHMfRtCSKSw_v6s3J0bTcsvh8J7s_pSidO6WktFUqInM-yUnbiX8D9btSV11EoaRrKC8WCrPpMMXu6-GeJNxp2N=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczN9enrwdzT6PVwUd8RttaAmTBXBnqF5l6cTlwSJrXXPQYgq8vocSjX9WZmkJJJ2CaNuJMh_450BJ0uIQdKvBWKfyfHDGi7jO1uahtD5Dzo9Li6Q7CiYVEPOyCD3qz5NS322bZkAMnkHy6y1zjEhkJbq=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPm7mM_ikLNajn3fUjj-jBg-Qafz_phC3cPT-0Gb5Bb_N7RrwR4eLz_zrLkesc0-wCNVyLutqf_MtRibfGOq-Wc-jtGukCYgj6_oIwW6IpW3RacK1eV6qdHqWs78BCqNn9eGWvaD5g4tNZqiL9zwF7J=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPStgh622MKJEtP0ji8IG67_nxzewRJ4nK-TEhJwzqZp3ugkLMbbVgBIdE_Czpmoiai3KBMp6pUq3FIKi2LrYwcj5PHXOdtFAUpgd9jPMTikcNxAE0lrSYfs5ceMf92Z1ZV5K_hxSR6dVl6GSPH-iVX=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPh3sns-t9IO-Eq-OeMOB5AHt1IU_pnVulmpbiAxILtwS8L2BjFdokXpPJXx9oNKqMMf_jCAFKhurLO54bjTkOgNpckjofxWfySw-S7jvcqxoWj7HjrmM_AuTx6YxV3X37C9eTrWkukWNIOiky-fzor=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPhb8quxmI2VNZcEBRIl8pctiHpkeEPpGOfyjYemk59wqcAwEUaPVvO5c6tILUu3ECpSvq4273fzFdvx-EunxZrqDareOI0qoL7FR9oaraAi3-eh9zRZu_cWT5MTCfA3H11kA-6KCet2KhLUtRs406u=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN7yc58O3TXh0Qnf3NkMMuGAE5cngK6nQq97mC5yd7kY9cUNc3J4K3xFi93R_0-OyzgUdPcFUQ2SRFf0bGF4Z1RvYw8TS_sDeDc3kKWjMN8hUGHk7tDaTnXMudhzbOc0T_ufE7_W45n4Naxksa7cHvO=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPIO8JlO9pTzQGFdxCirc3ikciPWsKCI-R8IInKdB2IE_Pf_hpbqwLpMUbfOuRG3LZ1eAiIhVIJkve81CvJ5ahpPmo_DeeMY3vEIGPugi-AXKQK3Y3Dv87I1oRrMwUueaZBVudx2ypG6CrdCSMdraE5=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczM3EV7g9iJhViBjal7dDcXHjb7Q2SvtwyCUvT2BJdggBDwSuFMueHuY9UEt8l5wI2urQIPLcYIFncD-ylGLgy5PsPdNq9jmej_vMy4_sihYCoe6OKkZQ6d0ptkOxTY6VBlZCcma_zMBXIX-50W3nfp6=w1920-h1080"

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