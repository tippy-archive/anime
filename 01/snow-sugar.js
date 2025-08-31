var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1BrW74ZWsivGUPTowcfXLmDR0Ki_qdoWd"
randomimages[1] = "https://lh3.google.com/u/0/d/1dupT10Mpd7PUz2Cp0so6WnWt9QQrAOsm"
randomimages[2] = "https://lh3.google.com/u/0/d/1luGSnlAVzC4aXqxik8TqaOIEal1acdMI"
randomimages[3] = "https://lh3.google.com/u/0/d/1-T13jOhHP7Y_OfbgJgonMf7WBaDobWNo"
randomimages[4] = "https://lh3.google.com/u/0/d/1anWGfnoCjJXvlQE_-5pWePAIBTFENhg1"
randomimages[5] = "https://lh3.google.com/u/0/d/1ZAbNkFmUyh0kycm0DLDE93ugASSpVwto"
randomimages[6] = "https://lh3.google.com/u/0/d/1TP0VjL23iqFrh-W-BKNLlC0nqQkrrpD3"
randomimages[7] = "https://lh3.google.com/u/0/d/1pVtzMNMRKTqDJks5uHoRPV_y8UrdutR_"
randomimages[8] = "https://lh3.google.com/u/0/d/1qZ4woJm3nRjDSP2x0R5hAZYYqgovCR_a"
randomimages[9] = "https://lh3.google.com/u/0/d/1HTc8gWFY9x-msA522ik7LPlk0bd8ukIN"
randomimages[10] = "https://lh3.google.com/u/0/d/11HeXk8DU7x1BhEpjLO1gT6jPnC1ovdee"
randomimages[11] = "https://lh3.google.com/u/0/d/1u9lXYTO6_frHG5SzyNG9-0L1HONAV8_y"
randomimages[12] = "https://lh3.google.com/u/0/d/1_7qXQJDg7APf4mf5S-wX274V8sUS0YG6"
randomimages[13] = "https://lh3.google.com/u/0/d/1a5Bd4PSuA4qmu4tx2lq54WBLrT29dowk"
randomimages[14] = "https://lh3.google.com/u/0/d/1EKLPjW60U5cap4UIJ6IHTliSm38Feg4f"
randomimages[15] = "https://lh3.google.com/u/0/d/1MQKvrXaLmXNeyfUZQ1MbYJJ_g2YI4k-6"
randomimages[16] = "https://lh3.google.com/u/0/d/1w_jpHpxt7DP_6lZxW7RF2nExUk0NfZ6c"
randomimages[17] = "https://lh3.google.com/u/0/d/1yTCeyptpM2yd4NG1A6aSeYQrTopJwjt2"
randomimages[18] = "https://lh3.google.com/u/0/d/1GKtpFXBR0WkuHdTX_628WeI0v8d9jgpb"
randomimages[19] = "https://lh3.google.com/u/0/d/1f_-GoTJ9LuZom9yJfX3dCYOXAppu7KEC"
randomimages[20] = "https://lh3.google.com/u/0/d/1m3znVZ5sG8PEdXNfhjx-isKUIIuBjH_Q"
randomimages[21] = "https://lh3.google.com/u/0/d/1cGoNWEMEX9c7WY3Ds59-e-d5h0bw3zAG"
randomimages[22] = "https://lh3.google.com/u/0/d/1woW15zNQYpoIG3JY8v5afDBFs-b8lM2h"
randomimages[23] = "https://lh3.google.com/u/0/d/1yMtApv0nI0_nkQxViis2R4nk7_VxP5eh"
randomimages[24] = "https://lh3.google.com/u/0/d/1YOhLI5EMtu1NKQks4H0EL9telxEGKTRm"
randomimages[25] = "https://lh3.google.com/u/0/d/1oHrcghbJnPJe-CRYWk_qfi5JLWw7s7xe"
randomimages[26] = "https://lh3.google.com/u/0/d/1Gize_MPsZ_Uv1D68uihGq6Ak1FI2jFoa"
randomimages[27] = "https://lh3.google.com/u/0/d/16_gPGZjwklVcrbb-hwHsokluPv3O_tyh"
randomimages[28] = "https://lh3.google.com/u/0/d/1qAMsEDJskoDzWmTf9w2IFbqAfZtycssE"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="random-img">')

function rotateimage() {
  var tempindex = Math.floor(Math.random() * randomimages.length);

  if (curindex === tempindex) {
    curindex = curindex === 0 ? 1 : curindex - 1;
  } else {
    curindex = tempindex;
  }

  var img = new Image();
  img.src = randomimages[curindex];

  img.onload = function() {
    document.images.defaultimage.src = randomimages[curindex];
  };

  img.onerror = function() {
    console.error(`Failed to load image: ${randomimages[curindex]}`);

    // 대체 이미지 배열
    var placeholderImages = [
"https://i.postimg.cc/L65SPhhs/01.jpg",
"https://i.postimg.cc/pLnt07fb/02.jpg",
"https://i.postimg.cc/N0qvZ4Dy/03.jpg",
"https://i.postimg.cc/KvW2DFgD/04.jpg",
"https://i.postimg.cc/gJGF22fm/05.jpg",
"https://i.postimg.cc/7L3r42tK/06.jpg",
"https://i.postimg.cc/0QZgMqsm/07.jpg",
"https://i.postimg.cc/90f6yNmk/08.jpg",
"https://i.postimg.cc/T27MTGQv/09.jpg",
"https://i.postimg.cc/4yFrPbnx/10.jpg",
"https://i.postimg.cc/sDqkZctn/11.jpg",
"https://i.postimg.cc/bNZXJMFD/12.jpg",
"https://i.postimg.cc/FKQwTKF3/13.jpg",
"https://i.postimg.cc/rw4vG4Tq/14.jpg",
"https://i.postimg.cc/JhcvvWtg/15.jpg",
"https://i.postimg.cc/rmV3LYrp/16.jpg",
"https://i.postimg.cc/tTBfRt3N/17.jpg",
"https://i.postimg.cc/zv3QybpZ/18.jpg",
"https://i.postimg.cc/x874MfFk/19.jpg",
"https://i.postimg.cc/J7dg9x41/20.jpg",
"https://i.postimg.cc/X7Gh35p9/21.jpg",
"https://i.postimg.cc/3JsqwwvV/22.jpg",
"https://i.postimg.cc/RZwDJz1F/23.jpg",
"https://i.postimg.cc/8CDnhnwb/24.jpg",
"https://i.postimg.cc/tg5vDtMG/25.jpg",
"https://i.postimg.cc/qqtmJfMp/26.jpg",
"https://i.postimg.cc/TwN7v2xk/27.jpg",
"https://i.postimg.cc/DZwjNJ9J/28.jpg",
"https://i.postimg.cc/3NPtWLdm/29.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);