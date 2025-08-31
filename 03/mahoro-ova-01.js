var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1K-1_k-YPvI0Y09JcTvsYkrGP9fsT7h9t"
randomimages[1] = "https://lh3.google.com/u/0/d/1w-uD1cyzFU-5G_UipBhw18Wy7Y-awHiJ"
randomimages[2] = "https://lh3.google.com/u/0/d/1mpmrp0XyPAYMfSQ4y7wKjHqwzw5768Yh"

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
"https://i.postimg.cc/X7DF1JMp/01.jpg",
"https://i.postimg.cc/g2XhCWd4/02.jpg",
"https://i.postimg.cc/qM7yGK5P/thumb.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);