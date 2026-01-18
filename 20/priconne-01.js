var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPSix4S_X6k4-56QvdKrGGhxdAiASVznyYbMIEhO6ttSVBi83hX1BP-z_jRPLsTn5J_SYuoIbIYhy5zBTbEsGToFOr-00GZIGuSuN77NwzxxIU3hFAC3QqeROQY8b5ND9AgFmTHECP1cJC6cQ-xN__9=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNcISvUWrB7Tdum0kbKSH38dEw2DrJhTauOGfsIwIGOcl-yh3Mp5ZFZFCYpQ6EfS-Uq3bU94fvoUGTW-apzZolN3gIEQv2xGWuJVsNwTIql7kgtAsqH2roFRepu0ROOu1lJ-NbIltO8mvtHSL9gvi0J=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPrKHdHMjKkHpK4sVY3C1jSazk2o2cIeOV9ReiUUl0NeMzxm-QBzoSB82kLuTrwob2AoBSkwETmc5pxdzNcxwB5M2vL1-z1t4PnsizfrVzVCSuQNKpd_ZPetLCRklyzQRbFjyeEGci-vqoa4wZlwkF4=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczN65n9Y6H7q79ZCE648nDoIZtYp-7BRWLfWCBWvdlD69fctu7plyWe0ypSI_3nVJ-aJEu2Lr-lGEDTD0oHw8tWeKDjASwEL8Iw50RBmkpU4-gJ0w2FBDotbU-vSnTegt53AMQxfOq8E3rAMrDhs9AVD=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNqkJf1zzw8g6EQwdkukWo5R1Kl_7S9g3XVHXJA1453yEGy6IWtMNDp-sk1Opm5Hbl921imhm73ZCLC0dQWaQnWQ4XWrlRLgMIXgkZOwA6T5T7aI76_CBMRobiUmMuPKL3SsIacNLq2fKZGn5qjOpEH=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNNXY0HveRV4oWpSZ-wsLyOYJvwtKFlUZkK4sdhlMZBeX0X62mxawe9E586Q268yI00ygKNXOoZoc3vLXjR4I88EAfEmVOEjponzNz2eRzQKje43X4gewXPo2QfLOEAOY9W1yGyzh81_dbfUwKX9brJ=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczP6Fz8wtI9hTcPC_RVQ4PNzaUO31QjfFrehDdYrExwF8dtN1TRoFJsoXPMZpi8rYzUb7F6Z0TcvjMv79VuiJJFy9eOLEMrot1cj7DdcQvn4llaziJNjztEAaV8pSsZdhKT18ICa8sTvMtctk1a3bwbF=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNptxV6S3tH0f4WWiv4UTcQxZtqGO5wHuw7aPz0yBNerOCrZoY0SmBK4DWwADekkmUigyc4geLrlJqRuC_ANjN4hC-XyfZDdXjRuc7wzx8PzPTciWYXMOixpPX94Yv2tK_v2HvAx2cCicKTddZSfCUD=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczM9jBzrLi3oqD_ZJiAR01GzcOktnhARYa5UevKgH2Xsp3LEuugVadQjckssb_QibsPRRTih7J_tgOEymSFSjIVQEM8UCdzwxejWrXpZuYNpXMf3np4-IXn3efntdQySC68hFMtFW9Lb6KMwhY75rWKq=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPjaANw4IKehzEJe2pRqvU-rJO7sYWYDiYXFfPkeZHnmqpLuF3olpK71KHpEFfvfvDuZ6r6Gn5KlgZobhY3vaqVF9a4YnRZ0z9HQChO9XRX5hN5eUm-agmf-IHs8TP1AvZ9A_-Phck9Q7Sn0o-pMd-d=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOYx48ySSegC_8ekx6S8cz1rPVWJccL51nXevgTAzmbpI7lWIhdPkMUV9NdKjxk8l4VammsZ5dhmcY2AKUo05ltjlo-0xDosrO2Xp7TkzNW1Qw2HoA-Vrp9wWkNQhFxVJWG-yIaXXHYK77PwqyZ6aYv=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPhbMNcSXK3ZApU8Xq9jHZXqaEF0KtbH_8vdw9c7jXo0ugSsyTUqxielZ_KMKoYKJyjRfOI8CGjFAlrkagspfM8XgKN7m95cVYUKxFSv0VDgBo2DUvzdBApvnbYa1WX8W98UM0x45yUD7__fhf8hw4y=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNFlVctZNebSgIlog84ucx8cD8Gyz88StslaSdewrITP2y2xXgdqFnqJcykT-DOvnof_MVSSZh4sqkNMEXjJ9mqMV14az6KsiTpM0Zkk7lCkf1mIWhU93wkbStbyPNXTjNzv6_-B5aruF4VXQHH5OEh=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNW1UHnlZDXR6mOAMuTNFEKiMiSPxHUtFsR-aSjuTPwJmTWj3ahMNqf6TDHL6Wqbko7ECDbO9PiLVpCmiEsQ6FlPGdYXQMKnw5ghqRk3Encsybz7RUQID5RhLhNXTwN53ZLQWA0mgZ2L8l6CA0OgByj=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczP_vIF7pba03NiFBRDhX-sDLIojnqsHFOVAr7dBuNHFsxcEpKFRVoDg9SwIltOfWrCGTlUeYHGRa4pQtZrSMvhm4lW9W1HwEZnSTeQdqsC8DMV_9ifrZRritCmM8-M7A_qd8gAl1UMAFuB9AUu9gESh=w1920-h1080"

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