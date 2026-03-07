var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczN-KJ9K8lgjVgZjielFcfz-1cfPytauodbRFFiPoJyTXSYZ-8BWZOIGXbRqx4JRs-uTBCI9fx54m6P5DAnzPpgxtQmGVPIipj60GeIkL8gshUKyCDfjdPF5TfGU1gEYuZici8pIVqMECZKyq0AbcN5D=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczM7P8MuCgRrI8w8nkqpVn3RF_5AeoRdRxNKdR33injXk1GZM6hrr59wBfitnCgn7bpu_OJ06bBVOUi01xwy-N0KXD62xD2IcZtQ0n2vNc4zJGxXM2SpjJKPj45GHH84JIw64dxQ7satnu8ktnjo1ma8=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczP4QUDdq-1AGdc46vvckEWjOG3u1J_cPAUl7tyZbj64xcmcP2qdb3pxY2Tb_qga_sjqgp0Zk8sb4EGyhbEyxyir2Fldz6tn0d6J0qhJj0-u1miTEabdM_tUtEs7vos7S6I54mZB5nInjvwA31eYdiAf=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPYuzzDOi6GqVhGpDo_PqIMEUVcsrsSNIJyQQRFYwkpu_k8V6Ck-zsBCdyvVl0PENe8CxEYzvUgm6CqFY1YrzPAG83iKvHW8KKXuSiXsEi5tMmgg1pX2syqIjCUf8qxlMIIh0o1rKkyweqjqv2voGrH=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczN_7u2odWNlYoUVflxH09l4xmRPoAqBRktd1ukzzJ6x3Li0AVg8KNJNraVGjs_a90dowbGyN_wy9RdcIUexlfto8x5unBiVdI7F2n3Losqa2eNZlBLgqE1xC1C38EwWkgt75BYd3c16UJENznSmvNiM=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPEpRI4Ew7s4GNqcfhblTJB7dJSt0cygLsGBy70thqgOEzyLl8KZvST4JQ4UV4a1xZMndy1_KDUOiYOF4HHQitPZxa11sWz4IiznVPLbiOXq8nJsp0PkHQwL7mtgU0LbQMmXuc0QiMdwcXTYdC9qgex=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczN-8m12RXKuUVy1rdfgl8clmpAZUm1txw9G-D4a9-flB3aYu8zvLFGcCrD7Pafvw_UNHGpCfXG9Gu_JqVAfqYt4C3eLSRLx4kRIZCaBFl9m5_S-6_bOQ986zAvZYdi70eWdaHKYSFUmrvI_Z7BfC_Ei=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNFNxoHwKK2heBoNHRS76uLom80s_lxMlTMp-x9kzFJFQ75GKbc3mnE7bjM-AJ7j6RYEyfajjjs5XD8EnlBlORnOEpbfbZtp9hkei560EdIgouLAGbImzcEMM5oOZ-6W9cBm37X6nNNboIkZrk5qVT6=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczM8oF-3CyYTkemJ4T73ChrEMhaH5mLTOmQO6RaRCSa1MbOE6ML3lBMEtYcbvhaGihFy_UWXXCee-vo3Iptc-uj6YMDAennUJFFBstGGjBBpxeCHnHRjsW1VE6AEuGvwZu9EYfGg6HNot-Jwe72turwo=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczN046ji0_clTVFEMlXvgRkB-_loUrRqvn0-vBXnaZIRrSnUs7s3KbWfQHnde6-Oa9bdME456KtMul6KHGG9hpW4xNiCo4VktSKb9gVXNXX49X9oQv4segRgaeH-7WLHsurgVPyy1szJ3UrNts7cHkhI=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN5igufeTqqJ5Tb4ZzAN8KiHODJHRzxVwmr__KATdeJAr9l36aOhhLI4DZyUdPt6r2nVs4zvyToxPh0sqbt4ZFes7dzTnbAjNJzZ9i0pdE1ddNhywRQnghQb1OuQnls9rlKTXsg9frrlNvcC7-lyb97=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNmHnlkkDUz-ku9Mhu3qoEyVTdKWD8-Ud-oszpkqKDIDpla0q2a32xOMFe_9GzhveHpx-VU9N-osGAqeLXQQ8HYSnAX1Kl1zZo-aNO39k_FYyjS8pWs4D8zyw04YM-4fxXlwe-vNtGyuKajk-c5Xv63=w1920-h1080"

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