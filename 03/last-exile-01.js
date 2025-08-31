var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1CLMMI3_yZmABr1OuH2jOb9JGkR9f9EAP"
randomimages[1] = "https://lh3.google.com/u/0/d/1dFSUQWVt0nP3cHW6AwJBtE6-JdmRY4fP"
randomimages[2] = "https://lh3.google.com/u/0/d/1wanrn61K7cXtqBBxFF6npIRnvqP2mZxl"
randomimages[3] = "https://lh3.google.com/u/0/d/1xR5jPj1O0X0ba8zFLOml3VIdhl-Fnpp-"
randomimages[4] = "https://lh3.google.com/u/0/d/1shxW562OhbVoE62WCvO1PMNext0uTta9"
randomimages[5] = "https://lh3.google.com/u/0/d/1eVs70uc5ys_Eubbqee7_15m05h4NRas0"
randomimages[6] = "https://lh3.google.com/u/0/d/1gPcO6hhsIYbI5Wtg9vPq9cnYALOH9GpS"
randomimages[7] = "https://lh3.google.com/u/0/d/1nF5URqUwNvZhmB77uE7YqSJhc1qhuxnc"
randomimages[8] = "https://lh3.google.com/u/0/d/11u3fyF3K5biOQIqhvpo56zonw0voR5nF"
randomimages[9] = "https://lh3.google.com/u/0/d/14N2kUVwTvFkKwZzKoMT6g6dPeII2kb64"
randomimages[10] = "https://lh3.google.com/u/0/d/12LFPRFozCKI8gRFbQDz2T_ZJhXtK6YuH"
randomimages[11] = "https://lh3.google.com/u/0/d/1tbkAnCWXUL_kxZlRw6y4YUBvL4r-5YLy"
randomimages[12] = "https://lh3.google.com/u/0/d/1oMB0eYctYgDjPgwhde6cRbP-E_mqVT6T"
randomimages[13] = "https://lh3.google.com/u/0/d/1SLlGyCMhY9PLqd6RfkbAt_ICcXmDcdrN"
randomimages[14] = "https://lh3.google.com/u/0/d/1XogyQAafZcs4jKNTLDA3AZ4oNAuBd3Zy"
randomimages[15] = "https://lh3.google.com/u/0/d/1MLZGl7NMsKa-KgTG1M_yMgHOf0XV7lle"
randomimages[16] = "https://lh3.google.com/u/0/d/14cvH7_XRzpr6Q4SG58sBX9KsVpEWzvAq"
randomimages[17] = "https://lh3.google.com/u/0/d/1rLybts_UEmXupEbZW1mJRMWa3-JmtYY_"
randomimages[18] = "https://lh3.google.com/u/0/d/1A2ZMniGd6gen_epy8kH0Z6c7eLPj1MPp"
randomimages[19] = "https://lh3.google.com/u/0/d/1uyJHC0qP6T6mHhf-hBDMUWE-9stndI2z"
randomimages[20] = "https://lh3.google.com/u/0/d/1qXWYG3ITNiBHRCeum0CNds-kQFV75Yj9"
randomimages[21] = "https://lh3.google.com/u/0/d/1Q9OusrhA7i7dLrP7QSNFF-n_h7k1McsD"
randomimages[22] = "https://lh3.google.com/u/0/d/1QB-Tvi0RvdjHAhOmJjrGPdQRxbr0Jbtr"
randomimages[23] = "https://lh3.google.com/u/0/d/1wy6jb6ri0wWWUYmhEXJ_YqmK8vRHcav5"
randomimages[24] = "https://lh3.google.com/u/0/d/1o7eLLGHnkaHhHS5FabQoHm7QFxu8sujm"
randomimages[25] = "https://lh3.google.com/u/0/d/19KfrCifoqdlXIN13qI484EZpI4oYZnf5"
randomimages[26] = "https://lh3.google.com/u/0/d/1MW61SWdDFbG9wIbNy8eoWQFkIaINrAKe"
randomimages[27] = "https://lh3.google.com/u/0/d/1lbm8AuZCZvuZgd_J-hsIrwsua3DTomMh"

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
"https://i.postimg.cc/15K78DNb/01.jpg",
"https://i.postimg.cc/BnYhgspg/02.jpg",
"https://i.postimg.cc/jSdgPCH2/03.jpg",
"https://i.postimg.cc/TPKtNSHX/04.jpg",
"https://i.postimg.cc/rp7QBJvR/05.jpg",
"https://i.postimg.cc/2yDT65jz/06.jpg",
"https://i.postimg.cc/yxyjSzW0/07.jpg",
"https://i.postimg.cc/MTRdqBSP/08.jpg",
"https://i.postimg.cc/gcVN734r/09.jpg",
"https://i.postimg.cc/gk44zdCW/10.jpg",
"https://i.postimg.cc/Prd2nNFy/11.jpg",
"https://i.postimg.cc/MpT5XNwj/12.jpg",
"https://i.postimg.cc/bwBTngYV/13.jpg",
"https://i.postimg.cc/Ss0fTKMW/14.jpg",
"https://i.postimg.cc/LsgV3Pn9/15.jpg",
"https://i.postimg.cc/DZqdtKrR/16.jpg",
"https://i.postimg.cc/j2tQTkv2/17.jpg",
"https://i.postimg.cc/6qcVpL10/18.jpg",
"https://i.postimg.cc/DfPP6nyX/19.jpg",
"https://i.postimg.cc/TY2qHFpH/20.jpg",
"https://i.postimg.cc/VL7Bygts/21.jpg",
"https://i.postimg.cc/2SVdCWdQ/22.jpg",
"https://i.postimg.cc/g2QVj04f/23.jpg",
"https://i.postimg.cc/DzGqXKMm/24.jpg",
"https://i.postimg.cc/hjbT21gB/25.jpg",
"https://i.postimg.cc/gJP3yBCs/26.jpg",
"https://i.postimg.cc/Y0rgZLqm/27.jpg",
"https://i.postimg.cc/6qMRX6yb/28.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);