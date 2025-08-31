var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1HqVQdg43OWcLb1FCuxHmIqh-d6b0TVK-"
randomimages[1] = "https://lh3.google.com/u/0/d/11gKyEt0sn9rpOmyNAyBaDuiYLvM3JGrA"
randomimages[2] = "https://lh3.google.com/u/0/d/1l2VCe7X21JVj4lkNKOWKAQgalntTekL9"
randomimages[3] = "https://lh3.google.com/u/0/d/1Qy9Dqbt-o_EhM-7zpS57t5L-PR9L1RPS"
randomimages[4] = "https://lh3.google.com/u/0/d/1Blyyvfx6qcS-BNJzxt1l-SPyvva39n9-"
randomimages[5] = "https://lh3.google.com/u/0/d/1t9mrk6MaZtYcqUPPY7M4i5uw3MaVyGgk"
randomimages[6] = "https://lh3.google.com/u/0/d/1FqTnYw-6_eUqFzvuyfLKfcdYC0v3hDym"
randomimages[7] = "https://lh3.google.com/u/0/d/1vsZDrgyf9PdJVLmSjhGiDtVz2j72X5T7"
randomimages[8] = "https://lh3.google.com/u/0/d/1HECDrQbc9COw9XSf65c6qo2xio8-XWZa"
randomimages[9] = "https://lh3.google.com/u/0/d/1wdh3C6kQhr33dqtyME8LZ2_rc-GbebzD"
randomimages[10] = "https://lh3.google.com/u/0/d/1_UA9QHQr2yNbnOstZQ-CyCyOy42Ysned"
randomimages[11] = "https://lh3.google.com/u/0/d/1mmmr_fcQVqo4Op8R_VPSYa6rXWYmXtLB"
randomimages[12] = "https://lh3.google.com/u/0/d/1ZjeaD-6tA1h1gJcywAo5p9litwZ9DogP"

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
"https://i.postimg.cc/MKP0p3fL/01.jpg",
"https://i.postimg.cc/BnjTL5xn/02.jpg",
"https://i.postimg.cc/YCT1143f/03.jpg",
"https://i.postimg.cc/jd5Nm634/04.jpg",
"https://i.postimg.cc/GpYvzcg0/05.jpg",
"https://i.postimg.cc/mDsC50KP/06.jpg",
"https://i.postimg.cc/NMkmqdwp/07.jpg",
"https://i.postimg.cc/h4MT2ZsG/08.jpg",
"https://i.postimg.cc/LszZLxh2/09.jpg",
"https://i.postimg.cc/R0rHWkSg/10.jpg",
"https://i.postimg.cc/pTR5ZKn8/11.jpg",
"https://i.postimg.cc/3Jd4n8WL/12.jpg",
"https://i.postimg.cc/qqZt4YDX/13.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);