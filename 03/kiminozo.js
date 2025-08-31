var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1vc7CnK7UP9AqQE4gd0rh9yBTdG5FnJmq"
randomimages[1] = "https://lh3.google.com/u/0/d/127Vo-BDtCK9CFJ9qaltZswLs_GqHozFN"
randomimages[2] = "https://lh3.google.com/u/0/d/1OuqNlDXfLsJb0byodmL_gADFV-jmEw_M"
randomimages[3] = "https://lh3.google.com/u/0/d/12ByYwOiNJESMIHQdPTnwMDMvij40d8O5"
randomimages[4] = "https://lh3.google.com/u/0/d/1qEDiE3QfNdygtMJ0vQyG-vdDb5XqbfPX"
randomimages[5] = "https://lh3.google.com/u/0/d/1afnsS6UTkyvQrtp8Vxkq_5MvgmNT6A7t"
randomimages[6] = "https://lh3.google.com/u/0/d/1Pnr4uoCutv0M_z_Vs5vDyNTpKKFg5EDL"
randomimages[7] = "https://lh3.google.com/u/0/d/1UNQp7rIOxcJ_btME7exmZ1DNXHqX7njg"
randomimages[8] = "https://lh3.google.com/u/0/d/1S1EkTV3LmC-VUfqvwNNswqBC3grlaViI"
randomimages[9] = "https://lh3.google.com/u/0/d/1rvbmF7wbVYC4uxZMuoPOXm_QsSQT0_7d"
randomimages[10] = "https://lh3.google.com/u/0/d/10tsliXgABQa-pfJmJeEx6232nqQcpcXI"
randomimages[11] = "https://lh3.google.com/u/0/d/1OCATH-L3tsVUOWLXnmGfT2F9bYVEJsJC"
randomimages[12] = "https://lh3.google.com/u/0/d/1d6KHW81eGMV-0tHY2h6JG-h1BlbcdNQR"
randomimages[13] = "https://lh3.google.com/u/0/d/1PJ1Kz__OKfQu5i-84SPkxIgswceowiu7"
randomimages[14] = "https://lh3.google.com/u/0/d/11bo9MHuz5uv_NyAF5K09wNjmU9tPUBXe"
randomimages[15] = "https://lh3.google.com/u/0/d/1K7hq9f1ygm9OGwHiYrqzwqYTwgEC-jej"
randomimages[16] = "https://lh3.google.com/u/0/d/1LsBr-AwZhCUVUDgKrEY1P0mEmcam16Qt"
randomimages[17] = "https://lh3.google.com/u/0/d/1n5vqE9fa5dODpPQri5S83XUlMyyaoPKv"
randomimages[18] = "https://lh3.google.com/u/0/d/1Qv0NPOsEtUwPQsJq85qOovMXuaIVj4Fg"
randomimages[19] = "https://lh3.google.com/u/0/d/19d6RGhg1J7nPHTtIJYHM-amyafqy-9im"

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
"https://i.postimg.cc/bY5NK2Jc/01.jpg",
"https://i.postimg.cc/4yjftjMN/02.jpg",
"https://i.postimg.cc/L5J4Jmxb/03.jpg",
"https://i.postimg.cc/NMJfGKkX/04.jpg",
"https://i.postimg.cc/zXRX5XbL/05.jpg",
"https://i.postimg.cc/0yR5NRDV/06.jpg",
"https://i.postimg.cc/T3VdL7cf/07.jpg",
"https://i.postimg.cc/W4SsSdKy/08.jpg",
"https://i.postimg.cc/tTTpcXG4/09.jpg",
"https://i.postimg.cc/850NQqTB/10.jpg",
"https://i.postimg.cc/brS8z3JX/11.jpg",
"https://i.postimg.cc/gr9pr8Xx/12.jpg",
"https://i.postimg.cc/J7SHjFjk/13.jpg",
"https://i.postimg.cc/L4JZYSgS/14.jpg",
"https://i.postimg.cc/jdNwchhk/15.jpg",
"https://i.postimg.cc/sgrBNZ6f/16.jpg",
"https://i.postimg.cc/ZqYWTzz1/17.jpg",
"https://i.postimg.cc/fbHJyqwk/18.jpg",
"https://i.postimg.cc/k4BDbN4s/19.jpg",
"https://i.postimg.cc/76dhMCJk/20.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);