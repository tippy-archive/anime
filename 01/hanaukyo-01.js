var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1cfu6eUrCVA8lnYeurIEwuNEHnXjlU08D"
randomimages[1] = "https://lh3.google.com/u/0/d/1m-XaJuutXDR-6K8xb28XKtlG_2xibl7p"
randomimages[2] = "https://lh3.google.com/u/0/d/1vx2EowoTumdjAT9sE-_mv7YRubjNqAV7"
randomimages[3] = "https://lh3.google.com/u/0/d/1xMOHxmuVIMSYTfecAxCOBzoTNxOc8gvS"
randomimages[4] = "https://lh3.google.com/u/0/d/1HZzaGuuPltFVzMZfVuzx3fCIwTrF3Ayx"
randomimages[5] = "https://lh3.google.com/u/0/d/1AwR9w0pkrMSZ9gDZMQxYP6JrRHsZ1fDL"
randomimages[6] = "https://lh3.google.com/u/0/d/1UFT_JngMJXk95Px52pqgRX99e_RUOobW"
randomimages[7] = "https://lh3.google.com/u/0/d/1NiIwaKYquNiJ4rHuv11EBb8PK9Gqizp-"
randomimages[8] = "https://lh3.google.com/u/0/d/1ddRU-d2MnYP7Rh4y4iUkNiYXgAcWmLvo"
randomimages[9] = "https://lh3.google.com/u/0/d/1u8igfdnIL3MsSzWnfxnhYItQ9LPtGJQU"
randomimages[10] = "https://lh3.google.com/u/0/d/11LhZ0PGGErcGEqZHhoYJnDNbzA9XQBSz"
randomimages[11] = "https://lh3.google.com/u/0/d/11ZyfadDLO7PT2hSYk13ehHF-HTtNwkuy"
randomimages[12] = "https://lh3.google.com/u/0/d/1XM2lj_f9DsCmwscVxUlwcwJBKXZjEm7Q"
randomimages[13] = "https://lh3.google.com/u/0/d/1nQKZA1qSvNsOWRh-j2aNSCJhpKoK7tex"
randomimages[14] = "https://lh3.google.com/u/0/d/1l91iiRIIkjvPmsMzM9PS96FERxfHNjJs"

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
"https://i.postimg.cc/pTjhRqbg/01.jpg",
"https://i.postimg.cc/wMdtvL93/02.jpg",
"https://i.postimg.cc/6Qg2kFSr/03.jpg",
"https://i.postimg.cc/5t6QkfP9/04.jpg",
"https://i.postimg.cc/D0dSb0z6/05.jpg",
"https://i.postimg.cc/Y21GPnxF/06.jpg",
"https://i.postimg.cc/MKqMJ7sF/07.jpg",
"https://i.postimg.cc/kXsVJ2zX/08.jpg",
"https://i.postimg.cc/T3PKpRvj/09.jpg",
"https://i.postimg.cc/DwY8Gt79/10.jpg",
"https://i.postimg.cc/xdJq3tCc/11.jpg",
"https://i.postimg.cc/wvDvSMDz/12.jpg",
"https://i.postimg.cc/wBCMfLyF/13.jpg",
"https://i.postimg.cc/C5NKx2v6/14.jpg",
"https://i.postimg.cc/3N7R7hZv/15.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);