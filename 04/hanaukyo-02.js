var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1Bf3wkF8J5FgFdsATBebxRBVUKYZZXhgd"
randomimages[1] = "https://lh3.google.com/u/0/d/1q7tfdQ757Uw5eJULNdSbLLCM7gO334QZ"
randomimages[2] = "https://lh3.google.com/u/0/d/1NZHiRC-quz41b8ZTTFuk9bUqD5ZqtKT-"
randomimages[3] = "https://lh3.google.com/u/0/d/1p3J-EfOPVlrSwn8zY8InARBzqrsAdCGo"
randomimages[4] = "https://lh3.google.com/u/0/d/1npZyc3iVBwRdEplSEpKTIrcDP_R6gQVC"
randomimages[5] = "https://lh3.google.com/u/0/d/1c8cf3b_mZ2_maaDZzRFvC7Z84EgTDWHU"
randomimages[6] = "https://lh3.google.com/u/0/d/1jpt8yqa_6CDQLkz9NuncjB6iM_ttiKYH"
randomimages[7] = "https://lh3.google.com/u/0/d/1ldWh76jAMK1TdByEmbUSyxghKV8BygTQ"
randomimages[8] = "https://lh3.google.com/u/0/d/1oy8946IA2JEUh9hJ6a9VL6-ysbJVCrGC"
randomimages[9] = "https://lh3.google.com/u/0/d/1UaedPstsLi7Anweg5BpBLfs6xUxU_fxe"
randomimages[10] = "https://lh3.google.com/u/0/d/1ndQB7X1OK_LU43WLpqHg9_D_eb39ICF8"
randomimages[11] = "https://lh3.google.com/u/0/d/11yHcR5uYANMUnqUIWlIrLG1owCIF3Zcf"

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
"https://i.postimg.cc/Hn5pHBZJ/01.jpg",
"https://i.postimg.cc/QtvXRRbG/02.jpg",
"https://i.postimg.cc/Gp73jBTp/03.jpg",
"https://i.postimg.cc/NMKsCgRk/04.jpg",
"https://i.postimg.cc/v868WZYQ/05.jpg",
"https://i.postimg.cc/MK7WF3fN/06.jpg",
"https://i.postimg.cc/zGqJZwnB/07.jpg",
"https://i.postimg.cc/sDdjKCx5/08.jpg",
"https://i.postimg.cc/xdCnq0pV/09.jpg",
"https://i.postimg.cc/cJbZnVPg/10.jpg",
"https://i.postimg.cc/fy4NHYzM/11.jpg",
"https://i.postimg.cc/j5nTQMr8/12.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);