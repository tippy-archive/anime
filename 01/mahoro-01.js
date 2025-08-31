var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/15cV0TKu133d-FLzvNAQXDZpf9rGcM7i6"
randomimages[1] = "https://lh3.google.com/u/0/d/151t8AHnHSmYXjCJWQvoy5KmBlsX5WQe2"
randomimages[2] = "https://lh3.google.com/u/0/d/1GBoxJ7TemqaIG3bdTwJ1uYnw5doPODaF"
randomimages[3] = "https://lh3.google.com/u/0/d/1opOhWHAT9smaa1httbVCI9mkchXPyo2L"
randomimages[4] = "https://lh3.google.com/u/0/d/1S0eyc8USCbVJUdaRvykOAiFNoA8vE8Ye"
randomimages[5] = "https://lh3.google.com/u/0/d/1j7Vzym74k08SqgSnwWwJ09pVetRwPbjl"
randomimages[6] = "https://lh3.google.com/u/0/d/1MP0ptcea28dinz6m7Bu43lwRHBsaPGBK"
randomimages[7] = "https://lh3.google.com/u/0/d/12msyBie5O5oVe9pimV2qT0Fsklo6KT9O"
randomimages[8] = "https://lh3.google.com/u/0/d/1qCBlDbL6ENThej5zI1w-PWhbufnGM_C-"
randomimages[9] = "https://lh3.google.com/u/0/d/1p8COUkyI4x5OPzdJVnZxhYDOvNXxDKuD"
randomimages[10] = "https://lh3.google.com/u/0/d/1rYJk3RVavvI7qoveSIH0o-JW8GtgbFF9"
randomimages[11] = "https://lh3.google.com/u/0/d/14to1lYbT8ZjIQCv0UdeVvQEVvQmLu__q"
randomimages[12] = "https://lh3.google.com/u/0/d/1p4JWTy-JZivTP5J1PNUjTW7rBBV5yNNU"
randomimages[13] = "https://lh3.google.com/u/0/d/1uEn9JEUQ_YulhsBmOuZvN9JmbTWzvLME"
randomimages[14] = "https://lh3.google.com/u/0/d/1Jm3StqTN8H_7t2qXezXdQ0SfdvsQJ1rf"

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
"https://i.postimg.cc/K84YmJtJ/01.jpg",
"https://i.postimg.cc/gkzJTYj9/02.jpg",
"https://i.postimg.cc/Yqd9cJLv/03.jpg",
"https://i.postimg.cc/2SJSyhwm/04.jpg",
"https://i.postimg.cc/MGQKQHPB/05.jpg",
"https://i.postimg.cc/Wz22Cn2m/06.jpg",
"https://i.postimg.cc/76rPM4dW/07.jpg",
"https://i.postimg.cc/XJKjsh07/08.jpg",
"https://i.postimg.cc/mk8bsHDv/09.jpg",
"https://i.postimg.cc/qBLBn9L1/10.jpg",
"https://i.postimg.cc/FsHrxDCN/11.jpg",
"https://i.postimg.cc/HsvpvXF5/12.jpg",
"https://i.postimg.cc/GmBbW91f/13.jpg",
"https://i.postimg.cc/xdMnd78y/14.jpg",
"https://i.postimg.cc/V6w10Rby/15.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);