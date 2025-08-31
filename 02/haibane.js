var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/18B_mR5QKga49Esm-XKfaLawK4KNybZeo"
randomimages[1] = "https://lh3.google.com/u/0/d/19u6sPPYvLVJ46pnFXMvMOrA7gNRN5JWY"
randomimages[2] = "https://lh3.google.com/u/0/d/185xPpbOngaUEdQqkUMNsVFFn4txuqatO"
randomimages[3] = "https://lh3.google.com/u/0/d/11C7DgtYqATeW7BRdYDHSXquvc7q2xtHH"
randomimages[4] = "https://lh3.google.com/u/0/d/1z9FA2i5lIJSP2kBeLW2mzdbE8hKlv-7t"
randomimages[5] = "https://lh3.google.com/u/0/d/1jmmXxyubJ2WJ_nzWK6MZu2duhuuL_00D"
randomimages[6] = "https://lh3.google.com/u/0/d/1hA-a5f0dStVWz_WYGIOoXs1RsoPNLvtu"
randomimages[7] = "https://lh3.google.com/u/0/d/1MJl2AHzvX-UP6EIgXLopRm1tYa53A5W0"
randomimages[8] = "https://lh3.google.com/u/0/d/1IeCqbQO8q-a_5qsRKoQ6t0GZ0eqWD1rS"
randomimages[9] = "https://lh3.google.com/u/0/d/1KdW0c7FcRl5EbX8xGkY4zlO7h8bLjEMA"
randomimages[10] = "https://lh3.google.com/u/0/d/1ci5DXEvhn1XRsZrJbVd4CLxAnbakVlKH"
randomimages[11] = "https://lh3.google.com/u/0/d/1gYpIHGOqkyeJhhsvKwQS0T-fP0z4R15_"
randomimages[12] = "https://lh3.google.com/u/0/d/1vPlGY3Dg2rWu25dxmqkIhj7Z8p6xueOP"
randomimages[13] = "https://lh3.google.com/u/0/d/1V9W2jwvyR2xjNNpiLjKSz24mBKYK5mSh"
randomimages[14] = "https://lh3.google.com/u/0/d/1W6b3zr-dwyZstivaMnBs1FT2zOS_dEUP"

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
"https://i.postimg.cc/LsLD0kQ8/01.jpg",
"https://i.postimg.cc/0Qvng6hd/02.jpg",
"https://i.postimg.cc/j2dh5pxD/03.jpg",
"https://i.postimg.cc/cHcmdxSq/04.jpg",
"https://i.postimg.cc/SRTfzgRD/05.jpg",
"https://i.postimg.cc/rFsJL2Zb/06.jpg",
"https://i.postimg.cc/3rnB6x1m/07.jpg",
"https://i.postimg.cc/ncW1FS6L/08.jpg",
"https://i.postimg.cc/PqszZpfs/09.jpg",
"https://i.postimg.cc/4xhQmbgQ/10.jpg",
"https://i.postimg.cc/Zq8PLb09/11.jpg",
"https://i.postimg.cc/cHdR9p8F/12.jpg",
"https://i.postimg.cc/wvFhSwXg/13.jpg",
"https://i.postimg.cc/yxdFB0j9/14.jpg",
"https://i.postimg.cc/5yR8tjKr/15.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);