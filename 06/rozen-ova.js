var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1KHm3NzILh70o1df5o0zWgeGrlqYj-CAr"
randomimages[1] = "https://lh3.google.com/u/0/d/17jKn4JLvD_yWPhTmeBxX_wfzo86phW0y"
randomimages[2] = "https://lh3.google.com/u/0/d/1-EUpQ7IwRLEUAS8f9lRaOewiC189qZS1"
randomimages[3] = "https://lh3.google.com/u/0/d/1xak3aBI3y1bFvkqO4H1sdB7ijRM7sTFU"

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
"https://i.postimg.cc/7PcrTbBb/01.jpg",
"https://i.postimg.cc/YCBcbZBH/02.jpg",
"https://i.postimg.cc/pXFbQx7C/03.jpg",
"https://i.postimg.cc/hvHFF3JV/04.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);