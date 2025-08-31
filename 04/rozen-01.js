var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1bo1wupZTNoCiEbdT5E7OlPxZQUH7mw1U"
randomimages[1] = "https://lh3.google.com/u/0/d/1nYbZ8rqNTbtaUSsTBTAQivEDFoDYRAid"
randomimages[2] = "https://lh3.google.com/u/0/d/1C-NE7A81SjYheGmXLBeE2s9rBassAqpJ"
randomimages[3] = "https://lh3.google.com/u/0/d/11Xu_uYx7vHpDnjvElVVHMXgsNDFi_YlG"
randomimages[4] = "https://lh3.google.com/u/0/d/1D_kskvO6O_GpKeHGcxxz954nWDP2RwML"
randomimages[5] = "https://lh3.google.com/u/0/d/1eIsc7crQNrfmA6L-8zaZTR2W0jM58u2o"
randomimages[6] = "https://lh3.google.com/u/0/d/1NTT7RY5YVOQBlgGaidybVqUt4tjErKzO"
randomimages[7] = "https://lh3.google.com/u/0/d/1rTvyyE218Pby25P7rcAXuwbv7SQors6m"
randomimages[8] = "https://lh3.google.com/u/0/d/1OoJOb57LVaDebpESjB6JI2nqK020vYol"
randomimages[9] = "https://lh3.google.com/u/0/d/1Ajz51gNvydHNlVVvDuAUyIl28EXmfWZx"
randomimages[10] = "https://lh3.google.com/u/0/d/1sKEn2UohXvXu4XcyLcZVNLzjwTZenTrD"
randomimages[11] = "https://lh3.google.com/u/0/d/11Veo-v-jb9A1HwvRTl5XfSpCuWNaYufU"
randomimages[12] = "https://lh3.google.com/u/0/d/1ns7YTV6pNnvVYuj3TiuBBfpi3GDvLmPw"
randomimages[13] = "https://lh3.google.com/u/0/d/1KTG_ABm2ngralXxGsCixVHgcib-70Vqs"

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
"https://i.postimg.cc/fRWhgzNS/01.jpg",
"https://i.postimg.cc/VsM1JZgv/02.jpg",
"https://i.postimg.cc/rFNkJdvL/03.jpg",
"https://i.postimg.cc/Qx3D1gYb/04.jpg",
"https://i.postimg.cc/GpHndX9c/05.jpg",
"https://i.postimg.cc/6pHxkkWj/06.jpg",
"https://i.postimg.cc/HLRDxb7b/07.jpg",
"https://i.postimg.cc/NMXhrL1S/08.jpg",
"https://i.postimg.cc/C5p3CY71/09.jpg",
"https://i.postimg.cc/Bb5dMy7C/10.jpg",
"https://i.postimg.cc/qB8VJhBC/11.jpg",
"https://i.postimg.cc/PrTGPXNV/12.jpg",
"https://i.postimg.cc/qMLPKP3J/13.jpg",
"https://i.postimg.cc/K88dD0Pn/14.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);