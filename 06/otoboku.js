var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1u2jamuSo4cONpr0p4rya6BIQ0MBgTH0e"
randomimages[1] = "https://lh3.google.com/u/0/d/1mU5pBkBg4nnUmUiJlKYeCvYCtfPYliZx"
randomimages[2] = "https://lh3.google.com/u/0/d/18wGo_TkrsdUKBevpvqdhiocXpWFkf-G_"
randomimages[3] = "https://lh3.google.com/u/0/d/1p0P0TmrDl2ce5oXNZalTVBT_VJidg7gb"
randomimages[4] = "https://lh3.google.com/u/0/d/1pP10DK1UL2UkDwz4-nemzKc3jYs-izjf"
randomimages[5] = "https://lh3.google.com/u/0/d/1el_FShE7k7k8IQnXPyvfs434cQfJDzoW"
randomimages[6] = "https://lh3.google.com/u/0/d/1sMq2_J7sWlq6QV8NZxSs-aPiFKFF32ug"
randomimages[7] = "https://lh3.google.com/u/0/d/1kDG3W5QCVGOFH5tb_v2rafKgoKvgaOgg"
randomimages[8] = "https://lh3.google.com/u/0/d/1rGgV7U5EIIIEOAoS6AL9dvzP-aQEIuy4"
randomimages[9] = "https://lh3.google.com/u/0/d/1UWTR1uMEHDNxO5Se1-oX9cuEqePg063_"
randomimages[10] = "https://lh3.google.com/u/0/d/188dfwlUnFAAucy3Yf0WFrhjDMXDt-pEu"
randomimages[11] = "https://lh3.google.com/u/0/d/1WPhU2bRW6AFEVwyGpIUAU3F7_oEsSUHC"
randomimages[12] = "https://lh3.google.com/u/0/d/1lnRsfoMKaNxJqUAHyNXkRzxNhkRJHIry"

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
"https://i.postimg.cc/x8qYVz6V/01.jpg",
"https://i.postimg.cc/k4T9HcFy/02.jpg",
"https://i.postimg.cc/HL4TwHrR/03.jpg",
"https://i.postimg.cc/FRrNGqcR/04.jpg",
"https://i.postimg.cc/yx5K18Gg/05.jpg",
"https://i.postimg.cc/PfFTzSqX/06.jpg",
"https://i.postimg.cc/zfj1LjM1/07.jpg",
"https://i.postimg.cc/CLBYvbZj/08.jpg",
"https://i.postimg.cc/xTwQBqHB/09.jpg",
"https://i.postimg.cc/rw5TTcNs/10.jpg",
"https://i.postimg.cc/QMs3xPfb/11.jpg",
"https://i.postimg.cc/mkcx5Grb/12.jpg",
"https://i.postimg.cc/rmw254XR/13.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);