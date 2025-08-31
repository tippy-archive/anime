var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1zFLH9hCtwgBFMCCJz3LRJkK3TehAQEoR"
randomimages[1] = "https://lh3.google.com/u/0/d/1BBr5YZ-9FF7_aT3-L9g18A5OuSPXYIR0"
randomimages[2] = "https://lh3.google.com/u/0/d/1oIRQgC1Yu8KA7hNmU4-oFCx-Co3ddieL"
randomimages[3] = "https://lh3.google.com/u/0/d/1HcG2FbKNJ-ElU7zd2HmKmZmKmpgIX_gB"
randomimages[4] = "https://lh3.google.com/u/0/d/1w8pWrhfz12qVYZ8vDjOh4XryC5klfHNa"
randomimages[5] = "https://lh3.google.com/u/0/d/1BRNS_ZlrCYk7yBZhvaFjE_oQMiacuhAi"
randomimages[6] = "https://lh3.google.com/u/0/d/1m9ZsDrq2Rv1opblO4fddnSjEVgdTuwoq"
randomimages[7] = "https://lh3.google.com/u/0/d/1IJA8KoVBupQO9lK1OxksPKstAX9qs1fL"
randomimages[8] = "https://lh3.google.com/u/0/d/1AS_rD5drPCPX1ruN1F8falV4tpq6e44I"
randomimages[9] = "https://lh3.google.com/u/0/d/1e4-7srB-pQ-1rNy3hlI8ZpzDHbSszvrU"
randomimages[10] = "https://lh3.google.com/u/0/d/1AtHAJp1ySWyWRD-im9SA8T5S9kpuo4Wm"
randomimages[11] = "https://lh3.google.com/u/0/d/17n3RSlmUNNSc_h6kq48RpYZMrt0Xw6k0"
randomimages[12] = "https://lh3.google.com/u/0/d/15oceCi0Iwx-1ioU95vfYaW8cFZR4UpG3"
randomimages[13] = "https://lh3.google.com/u/0/d/1Zo2BC6LckLJz_ZKDRi82xN185bUlH7IX"
randomimages[14] = "https://lh3.google.com/u/0/d/1kIls20P3zTvLGDCvOuSuMzR3Enut-tUr"
randomimages[15] = "https://lh3.google.com/u/0/d/13uoaLEoUo2OyDquCE6nzhy6svIWDyFIw"
randomimages[16] = "https://lh3.google.com/u/0/d/1UG0_hM3HD8GXmo2bT84pejhvRvvywfRI"
randomimages[17] = "https://lh3.google.com/u/0/d/1F7dC-GVhQZ1IQ1Kp0PAYdC1MC6xOvP5Q"
randomimages[18] = "https://lh3.google.com/u/0/d/1HgMYz1XEZnZAnZq7xRYeOSvZArQzzcZ3"
randomimages[19] = "https://lh3.google.com/u/0/d/13B__AjH3Xe3YbWALmSU1g96xf97_lUwp"
randomimages[20] = "https://lh3.google.com/u/0/d/10StxFWyhm501v3H65TUNxYzZIbETFpdE"
randomimages[21] = "https://lh3.google.com/u/0/d/17lb9ltXJZqOdKL4XYLMsayQoP257zKSD"
randomimages[22] = "https://lh3.google.com/u/0/d/1f1QHUeAHGfpgO2lgWEwHTxynP9vBYCWu"
randomimages[23] = "https://lh3.google.com/u/0/d/1JkyKq4s9J2tMJkOTQw2Wazp2vbhUDEDo"
randomimages[24] = "https://lh3.google.com/u/0/d/1Eo4rL21Nq1G_OK-finCG4GDZQ8bnmwRR"
randomimages[25] = "https://lh3.google.com/u/0/d/1R_HH-8I4jHIwD2ZQnd5OFzN77vYGx9jh"
randomimages[26] = "https://lh3.google.com/u/0/d/1TXLlzv8dowL-CrXGfR7_sFiBkmsuvkhI"
randomimages[27] = "https://lh3.google.com/u/0/d/14OUUUjJr7A-O-XNHzYWYUJZVUke48mMW"

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
"https://i.postimg.cc/BbtMj9sq/01.jpg",
"https://i.postimg.cc/QCBJXQkC/02.jpg",
"https://i.postimg.cc/fRY5tv40/03.jpg",
"https://i.postimg.cc/rsbgWnF5/04.jpg",
"https://i.postimg.cc/g0dsv6dt/05.jpg",
"https://i.postimg.cc/pdZZkXLW/06.jpg",
"https://i.postimg.cc/rsvCzDQJ/07.jpg",
"https://i.postimg.cc/3r6ZtqYv/08.jpg",
"https://i.postimg.cc/k5fQK1TD/09.jpg",
"https://i.postimg.cc/VkPW8bSs/10.jpg",
"https://i.postimg.cc/mrb3cfN0/11.jpg",
"https://i.postimg.cc/HxnQ2wNz/12.jpg",
"https://i.postimg.cc/05645DN7/13.jpg",
"https://i.postimg.cc/Rq5K4jZp/14.jpg",
"https://i.postimg.cc/4NVFVGVd/15.jpg",
"https://i.postimg.cc/BZdVjb8k/16.jpg",
"https://i.postimg.cc/gJxgJbGG/17.jpg",
"https://i.postimg.cc/xdxsn1Ds/18.jpg",
"https://i.postimg.cc/cCYTR7Kj/19.jpg",
"https://i.postimg.cc/JnSPHYhZ/20.jpg",
"https://i.postimg.cc/G3sMnRMQ/21.jpg",
"https://i.postimg.cc/m2Y8hwW1/22.jpg",
"https://i.postimg.cc/NfqdgnSw/23.jpg",
"https://i.postimg.cc/Z5jHx5RT/24.jpg",
"https://i.postimg.cc/CKQ49rkX/25.jpg",
"https://i.postimg.cc/KYzNqhkt/26.jpg",
"https://i.postimg.cc/KjXD8K95/27.jpg",
"https://i.postimg.cc/qR6GrcGR/28.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);