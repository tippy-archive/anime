var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1HLs3CsBJ_43zHCd4IhZkOsUrJ6T33rA9"
randomimages[1] = "https://lh3.google.com/u/0/d/1lZ0G9VtaLItdsplC3Zu5SRBsc6Iis45W"
randomimages[2] = "https://lh3.google.com/u/0/d/1Zf_WUWjDD51SUZFhPQONcKhYO11Aebl1"
randomimages[3] = "https://lh3.google.com/u/0/d/1fEuzKhBrxM47HVUGFJAwBl8jOn2u-1Pp"
randomimages[4] = "https://lh3.google.com/u/0/d/1DBcYh5QXUhMiyerJrk4_IG1BgHyeYOcD"
randomimages[5] = "https://lh3.google.com/u/0/d/1g8w7RgCpYpxD5ntOdEjRw0jd-gT4EkQa"
randomimages[6] = "https://lh3.google.com/u/0/d/1nTSZhD8JqMc8KTeMxsyTK6HhfmHTVnzw"
randomimages[7] = "https://lh3.google.com/u/0/d/1c2Qo4Kj40qUs1HrF9oPrcteKgGK17u2B"
randomimages[8] = "https://lh3.google.com/u/0/d/145gYL9CtfESOVsT1PhhXSkkZKGBCJ0aZ"
randomimages[9] = "https://lh3.google.com/u/0/d/1UdQhBOSotZR4dgDw-iIdeh155znTmMkR"
randomimages[10] = "https://lh3.google.com/u/0/d/1mT3TkPMcj6pa5ly0qaIZkMgK00I66KQP"
randomimages[11] = "https://lh3.google.com/u/0/d/1Dfs46RvprK1Vl6odYEwM6mJ41y8i4gYs"
randomimages[12] = "https://lh3.google.com/u/0/d/1EFZnbqezs6hFZguyPtU6m1d9BRoxalKn"

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
"https://i.postimg.cc/6304r6L6/01.jpg",
"https://i.postimg.cc/Wz1FXRXG/02.jpg",
"https://i.postimg.cc/g03Z0HxZ/03.jpg",
"https://i.postimg.cc/mDRF1196/04.jpg",
"https://i.postimg.cc/Wp5Jt31X/05.jpg",
"https://i.postimg.cc/jdCnfbWK/06.jpg",
"https://i.postimg.cc/FsqdgBcS/07.jpg",
"https://i.postimg.cc/HkyJS94h/08.jpg",
"https://i.postimg.cc/YSBvTLdq/09.jpg",
"https://i.postimg.cc/26zVSRps/10.jpg",
"https://i.postimg.cc/DzQShfNQ/11.jpg",
"https://i.postimg.cc/zB03Lt8V/12.jpg",
"https://i.postimg.cc/2yyynQST/13.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);