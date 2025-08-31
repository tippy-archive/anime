var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1O6TpPk3B-_i-53IFsyKY552RdarLQaiD"
randomimages[1] = "https://lh3.google.com/u/0/d/1Iz8wK4aFsgICaN4beGCkUn85WBz-1wSm"
randomimages[2] = "https://lh3.google.com/u/0/d/1k-db9FKy1OzEzF6n4Kb36Sbq8lZxv_NX"
randomimages[3] = "https://lh3.google.com/u/0/d/13sAoxxoaRCezC4IFeld75sdWG2DHYGAk"
randomimages[4] = "https://lh3.google.com/u/0/d/1LBSorK3z97sd2BbbMZNFFya5TD8ReW-_"
randomimages[5] = "https://lh3.google.com/u/0/d/1ULF4RO76qrhDsCxjgtVx-SZEJeikWFV_"
randomimages[6] = "https://lh3.google.com/u/0/d/1kHXylKjHD8u8L8_1GEUX0A3o1DuAZjGG"
randomimages[7] = "https://lh3.google.com/u/0/d/1ze9bnSdUQaALNOV1s1ytg43US69qMXNr"
randomimages[8] = "https://lh3.google.com/u/0/d/1pvB72aV82pxaI63wRO4SOogHUVtXQaMA"
randomimages[9] = "https://lh3.google.com/u/0/d/1Je6CdJhmvAzTqlrPz0rWHvtWuQZ9Infv"
randomimages[10] = "https://lh3.google.com/u/0/d/18InKTArTmJMojjj6yxbUSzBnCqb_TeKh"
randomimages[11] = "https://lh3.google.com/u/0/d/19UjLjuuoROtAm1BWb3UVJK2A6SLsj-0j"
randomimages[12] = "https://lh3.google.com/u/0/d/1wqR1DFBV5Cl3LMmQx6Bty3POsUtFUnlA"
randomimages[13] = "https://lh3.google.com/u/0/d/1qIMbnZrY-d9JahS8Lcah4S6Mp1h7O6wi"
randomimages[14] = "https://lh3.google.com/u/0/d/1da-mMfE5ZK2oBcQrDQxqhr2L9_zZjpl1"
randomimages[15] = "https://lh3.google.com/u/0/d/1XnTrZnEkJ5Zu98SUshiqKdf1dYtGAO9u"
randomimages[16] = "https://lh3.google.com/u/0/d/1ANm7QaTXRIA9hgfZQL4DbQx0w54Ik2ir"
randomimages[17] = "https://lh3.google.com/u/0/d/18n_DWKWU99oBWOQf9Nn029BOHsmDNiqu"
randomimages[18] = "https://lh3.google.com/u/0/d/1JOnAT_ojT-W-0IX3I6xG2NMsijwjwYP2"
randomimages[19] = "https://lh3.google.com/u/0/d/1g6zD8vvN8vHWwks2CFYE0Ilynrf7ghio"
randomimages[20] = "https://lh3.google.com/u/0/d/1DeEJMK8za37P-7VKkvf3RPBTQaKpzVYh"
randomimages[21] = "https://lh3.google.com/u/0/d/1M4mc9UX_YFs6xvdMzkSjvIqXy9SSf1Jp"
randomimages[22] = "https://lh3.google.com/u/0/d/1pjcCNvT_TolTUzkxAjsnQrzD0xMre5FG"
randomimages[23] = "https://lh3.google.com/u/0/d/1N0c4DCMjzYPi_M6s4diigffvHL6xy5PG"
randomimages[24] = "https://lh3.google.com/u/0/d/1ig0uC9PfmM3CxFHzGv8xqMvIfsDxnCsf"
randomimages[25] = "https://lh3.google.com/u/0/d/1xYJ0jH9U5BZskzlrYq3hk5TIcbBPXHnw"
randomimages[26] = "https://lh3.google.com/u/0/d/1YdYFjEPwH03QW0hjYE2ohG86AspOHpIY"

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
"https://i.postimg.cc/fTQwGMbW/01.jpg",
"https://i.postimg.cc/sDPVybBY/02.jpg",
"https://i.postimg.cc/1Xwy8jvZ/03.jpg",
"https://i.postimg.cc/Y2WrDvMy/04.jpg",
"https://i.postimg.cc/YCbMLgzj/05.jpg",
"https://i.postimg.cc/52xftpvZ/06.jpg",
"https://i.postimg.cc/bv5P3hMh/07.jpg",
"https://i.postimg.cc/nLrZ4z32/08.jpg",
"https://i.postimg.cc/wvsprr8s/09.jpg",
"https://i.postimg.cc/wM8pYkg4/10.jpg",
"https://i.postimg.cc/Xqf0jyvj/11.jpg",
"https://i.postimg.cc/G3GRJ6xW/12.jpg",
"https://i.postimg.cc/bNPh6L6s/13.jpg",
"https://i.postimg.cc/sg6Cgz3h/14.jpg",
"https://i.postimg.cc/Wb7PxrKS/15.jpg",
"https://i.postimg.cc/mg2G4kW4/16.jpg",
"https://i.postimg.cc/mrPfcnr6/17.jpg",
"https://i.postimg.cc/0Nhg7CM5/18.jpg",
"https://i.postimg.cc/V6txgbnq/19.jpg",
"https://i.postimg.cc/Vvc3VLW3/20.jpg",
"https://i.postimg.cc/MHbh22sX/21.jpg",
"https://i.postimg.cc/PfWG8Yth/22.jpg",
"https://i.postimg.cc/J4Mf30nX/23.jpg",
"https://i.postimg.cc/tCkLBbZM/24.jpg",
"https://i.postimg.cc/52tDGr8N/25.jpg",
"https://i.postimg.cc/P5F0kMMb/26.jpg",
"https://i.postimg.cc/MGMNZjsC/27.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);