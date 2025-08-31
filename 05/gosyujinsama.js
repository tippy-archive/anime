var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1a5lP4KQR4gazGjxq6Aa6Q8l-NzUuKjSm"
randomimages[1] = "https://lh3.google.com/u/0/d/19Ly2-fZBKUrrMcRMnVXGrrQIcwoOR4jo"
randomimages[2] = "https://lh3.google.com/u/0/d/1USsqxfE-KFqklUR_Em3OBBGSjDVPR3Qc"
randomimages[3] = "https://lh3.google.com/u/0/d/1QHaMcOX7qn8R0PSSZF2WeoN43psxIdJK"
randomimages[4] = "https://lh3.google.com/u/0/d/1VBWulC-P01Rtc_ZCrqqSyPVXEKfqhRal"
randomimages[5] = "https://lh3.google.com/u/0/d/1Mb2L8gJFybv410VU6ruRR0Go6j8HrfOw"
randomimages[6] = "https://lh3.google.com/u/0/d/1ElSA2V_FyixE4kXq7lAUPShLdz9nnLFB"
randomimages[7] = "https://lh3.google.com/u/0/d/1EAZLx3Bd0dEFZSnIN4y8eoLd10xSCDTb"
randomimages[8] = "https://lh3.google.com/u/0/d/1liXgeFDbGmB7efFnT-3bZfK03Ee89-Ia"
randomimages[9] = "https://lh3.google.com/u/0/d/17Te0FMiNWmh5JWs8Qu414yBLMhK9yjQj"
randomimages[10] = "https://lh3.google.com/u/0/d/1ObLAI1h_9K5I_QsV_lCrUYDAFcqxTsHq"
randomimages[11] = "https://lh3.google.com/u/0/d/1XT8HKC622mtIK4itwvDZVOisJ9K20DN6"

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
"https://i.postimg.cc/50GfzZYK/01.jpg",
"https://i.postimg.cc/vTVbt35Y/02.jpg",
"https://i.postimg.cc/fLkwJwL0/03.jpg",
"https://i.postimg.cc/SjbqTCGW/04.jpg",
"https://i.postimg.cc/MZMQLwDT/05.jpg",
"https://i.postimg.cc/mZvHfnXS/06.jpg",
"https://i.postimg.cc/xTLb0PBV/07.jpg",
"https://i.postimg.cc/XY8G5YV2/08.jpg",
"https://i.postimg.cc/VNkSWPvz/09.jpg",
"https://i.postimg.cc/rpZDhZRx/10.jpg",
"https://i.postimg.cc/G2BH6PvN/11.jpg",
"https://i.postimg.cc/vBpcy1zm/12.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);