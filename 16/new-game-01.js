var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPOMGisDs-LOPLvuM0BY-WnAnAcT2pBidVS-VajKxDfhuWujVNDphcuvpmP1Tvvz_C8IQBejwk33NrHY5V0B1UNVc3ZeV23AekPr7sJ6vLRN0BqElY-RSYi71-A0riRKTfVcU6W1L_CHW9vwh32bhUz=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPoByPVAT_1Xur7EEK94ofP5kNG_HlSpYhTdwBWAwZsdp2HMIxrYykRjFStbZMEQHDqa46GdgJWH025JcbOX9RjKF50ZLKPvsRK00gLLon7WcQ9QX8vo47vEzZ_erQ2kdlSi6Yxvk-EyVo6D-LfXB4R=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczN425nAJvsUdpWqB3lYUD8iRYC9gIK438vFwI1PVoEWbxeONbhfDuaTczfTl_BZdwX3HslT12A70pokMhV2uVyWXbjL8aTYVTfjroVMX2HdKUlLqgyWmMjwa7nFNPAOYjoPhXLy0p4cLbchz906tD98=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczM9GpwfcZ4JqaXEEa0w4kFht2Tn9T971cS64mSMPBHacgm9NltISwGDZdrVOBGlZyqx4vOwUDXBqP5ofFRBeZYfAGcbiptnO_4YIk0Txyy3s7qzLBMMl3u0KKVjOALkxcXGKiO-IxjIlG3guu5D3nNB=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczONqF9-FlEaBVAnD344WuOY3eyfinCcN5k6X80AGDaIcK3Di00shoxX5sEUM3gJ0LghvPldM168kd5idejPwt7G8LBWwC1SYnO-ghOwIqbLHTx5LOLhNbBPPD9WidJVJr1oUix1VMQh7pZ5IGCcHbwg=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczP4-ap6SILKMp6q-zGxCluAyePOYGgyDmbPYPLIyT96O7y-FcBQIo7xIIe4TpEmpH-Gk0i8FezYB1BhGFDU8W4gt8lFWlN0D11ZJu2NklQMvQ7aXOJolc-gpKg0EN0bSevdgDJxpIzypJfspizqdXdD=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNNM-jgDXh3uVkjzNb995LjZXuyDlp3mY47MLnom_YA5an9_J1NQyZGfBnzT43n5K4q-LShdREP6722M-uo1G9MhKuNz_BGJcgNaISociUH9qg4z0-OzILJLnMxJ1uwHjmct4n9dngk-ABWmAVLDtZd=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMW4bTNsOIx4iBdKvWsyGjhnibAilEmo3B1PEVdwje3TgboRIzi_kKFcvUvFoIMZ_r4xAXRAUVvayHwwiKwvtszIWTYlhq-rribE0VF9qrGk74l0ws5V1ZBGuAKYNjxW8dnZcHOB-Wlb1GJLAay0v43=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNS-_du_OktBpuh6BM73WJhDkcJx4tVPuW1Py_Jtnt7NVIDxx1V9QAoCSEOaRCK9PNugqYUMWbnJuVmYRmuKWNyNExYzVetGTWGyU6BNxHkqPPLZCP8EpvQgjj9hC3gAlxQId5pMbaKtuF85M7qB56U=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczN7LwgvBr_7L8DrQ9BBNFax-2e7_KAdcM45fik9BM0sgD3X-vkIQDqEVuIlgKzfSTA4wLU9zgS4XoC7jmVkbXyLWaHdwFoL-T9ACT4BpPyV9JyTz26L9rL-uG9ArYWr7S2uwj4rHMm5iUFBsLxrvkC7=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPVbadY3_xuvP1gR8nSb5n6CU3HnhrDH7NTmiVYrMLNcD_iUh0FX_oOSK-FIvONNwSbmaW4Zpx5ASPeVKW0cfgZcFtnf2VQSpBY9GqdaDAB8Ukj8PpALhBFHJqjC1sEa1i_unbvHsCGW3gp9OD1_S3A=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOGaJ54oTVzot4eUOJmyXFkCWAH1rk6Od5Q0Hx_8PZBPyZj6-3lDsg7q4Hr9nzTFJNxd_zo00OApj32J7oA3N6xHF5czyiI-66PDzomxhIjaa_oL5QZQIgLFUZNyQx_mOniUzJaAhP7l1wTsv4z_Yom=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczN7rEX0PE53ePXXFQ7AzUA0TuA792m-ODj6W29b9lQW8TaZzbcwy3N7c94AB-eIs0KyMlg3gZC88fLi_EdC1JntjRasiTVP4r9S6CZyaGPZZgtaw8URzP2mGAES4ORNyTrytIVZKDNK3QemvP8ZiuKs=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOzqFWLSH1dx2FIxfrYJY_lmzPk7uc0xosCbhRY40Sac8qfx8O0Q7SymJo23qh8xIT61nDzonuR4K8f53N7ZYw4ku6iZLabjIGXpbzi_TyNGYd2i_ZFY1HEg_yCZsrvAKTVnTl7yL_Zcdp3-rqh-Zje=w1920-h1080"

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