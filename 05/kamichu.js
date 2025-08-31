var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1nLtdNk-Ei6dP_pGNppWlworZcGsdrkua"
randomimages[1] = "https://lh3.google.com/u/0/d/1H1R-5iBr9Lc5sENY9vlSfJHvbVmCPykl"
randomimages[2] = "https://lh3.google.com/u/0/d/1Sh_J02u3zJ5dhkDsTLA_BGsnQNrQ98aW"
randomimages[3] = "https://lh3.google.com/u/0/d/1iNIddyXKUWyTwI1ncfdCcikYPG3cbwvl"
randomimages[4] = "https://lh3.google.com/u/0/d/1pT07yNV7TOWeI7CywKXojAkofwlF1cRN"
randomimages[5] = "https://lh3.google.com/u/0/d/1lOU0rKyL8Z-He51IwoSiLRrQZaph4Jm2"
randomimages[6] = "https://lh3.google.com/u/0/d/1MWHKE7upW6FDpRq_Jjs1bbnthKo4mk7u"
randomimages[7] = "https://lh3.google.com/u/0/d/1eyN3YRHqDxhqUTioZ7YATEH7dDMr7bdg"
randomimages[8] = "https://lh3.google.com/u/0/d/1U8wShS4J_pa22EJGck_aFnCh7C8O6Wpk"
randomimages[9] = "https://lh3.google.com/u/0/d/1zBGgEdBBWd9c-ccah3y9ogzZOw5JE8gw"
randomimages[10] = "https://lh3.google.com/u/0/d/1rGi7dBpoB6WmlhVsqOiGGE_x4D75nnfH"
randomimages[11] = "https://lh3.google.com/u/0/d/1JAib4qMpudHzQGxti6zmYUn9ykQS62fs"
randomimages[12] = "https://lh3.google.com/u/0/d/1tw07SCmffeNs91syc-i5ZE6Ecw5VNnnN"
randomimages[13] = "https://lh3.google.com/u/0/d/139_ZU1Cet-XYt9TAmLNP3-Q9NzP7Aq_W"
randomimages[14] = "https://lh3.google.com/u/0/d/1ytzysa4lyL4HyGUlm0wxyCgFF14vuCP7"
randomimages[15] = "https://lh3.google.com/u/0/d/1xSEZhhOrTZkk9Eaj1Z0B5MAwkDZqwxov"

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
"https://i.postimg.cc/7Lh6T1t6/01.jpg",
"https://i.postimg.cc/MGLG0cgY/02.jpg",
"https://i.postimg.cc/RFnZgSBx/03.jpg",
"https://i.postimg.cc/vTFHjJYg/04.jpg",
"https://i.postimg.cc/cCR4NFCD/05.jpg",
"https://i.postimg.cc/KcBYL8fn/06.jpg",
"https://i.postimg.cc/28YSxN9g/07.jpg",
"https://i.postimg.cc/5NmN7KZy/08.jpg",
"https://i.postimg.cc/SxNQw7hr/09.jpg",
"https://i.postimg.cc/DwjfFJfK/10.jpg",
"https://i.postimg.cc/bvZyvydS/11.jpg",
"https://i.postimg.cc/cJPsgp89/12.jpg",
"https://i.postimg.cc/pT8PDsf2/13.jpg",
"https://i.postimg.cc/RhB4Gwdw/14.jpg",
"https://i.postimg.cc/wMQHr34Z/15.jpg",
"https://i.postimg.cc/RVG4Q6Hn/16.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);