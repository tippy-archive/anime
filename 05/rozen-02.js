var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1fYuhpRLFQBL0kf7RINF1Ug4Fjg0YwjV6"
randomimages[1] = "https://lh3.google.com/u/0/d/1qPUUSaGK35KSTUAyF4GE3EiXMDp0tgev"
randomimages[2] = "https://lh3.google.com/u/0/d/1yd3eEd4ntlSac518EBob0Wbn1_ChoOYo"
randomimages[3] = "https://lh3.google.com/u/0/d/1HYrMOJ6_NffFuA95gvWadHSYr51FKmcU"
randomimages[4] = "https://lh3.google.com/u/0/d/15EcqQZb94_e2fUmtW9duhjadlKmnto4M"
randomimages[5] = "https://lh3.google.com/u/0/d/1ghWTUtBfjaCeT2FQ3YwWLPRfwOGhP6ly"
randomimages[6] = "https://lh3.google.com/u/0/d/1Sejd25AWoaC-lamREKlGvN-vYtVnCubJ"
randomimages[7] = "https://lh3.google.com/u/0/d/10KpfCEjlWtQmHvCMLofzdRo7Me9ELtTR"
randomimages[8] = "https://lh3.google.com/u/0/d/1IufFrAZN0lPIa7UMKFE1jaxfKmYFokgr"
randomimages[9] = "https://lh3.google.com/u/0/d/15rmykpWFWDjV1GVl8g2MUPwzFszMwYha"
randomimages[10] = "https://lh3.google.com/u/0/d/1Lhf_eleuTB1BjQ2WhIZSI2EyMeJBQc1W"
randomimages[11] = "https://lh3.google.com/u/0/d/1YogLA72ShRLdft6k7WvVqoS3HqtBvFv1"
randomimages[12] = "https://lh3.google.com/u/0/d/14U_k0txtNY1d0jT2E7XwKL-PEPBLK0dX"
randomimages[13] = "https://lh3.google.com/u/0/d/1LlDd_yu1oj9V-YApAHK_NIiq3XGbrJWZ"

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
"https://i.postimg.cc/8PCC7QKG/01.jpg",
"https://i.postimg.cc/rsfFfQp7/02.jpg",
"https://i.postimg.cc/7P96PYNX/03.jpg",
"https://i.postimg.cc/VLHkMGpC/04.jpg",
"https://i.postimg.cc/t4ZCzdGm/05.jpg",
"https://i.postimg.cc/d1Bq04GD/06.jpg",
"https://i.postimg.cc/Jhjrf1nN/07.jpg",
"https://i.postimg.cc/fRGWq3wW/08.jpg",
"https://i.postimg.cc/fLZzZ6t6/09.jpg",
"https://i.postimg.cc/GtmbTGjK/10.jpg",
"https://i.postimg.cc/PJVTWJ3j/11.jpg",
"https://i.postimg.cc/Kc0GSpZH/12.jpg",
"https://i.postimg.cc/qMgkkcqM/13.jpg",
"https://i.postimg.cc/L812PHjc/14.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);