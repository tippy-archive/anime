var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1jVuRWeBRuiSzs3PvH08vY7gFFkojzfkb"
randomimages[1] = "https://lh3.google.com/u/0/d/1Q5hPuG2QTcMMSbA0ImPMiiejdXPCuen2"
randomimages[2] = "https://lh3.google.com/u/0/d/1rQOZz2M4DzcBRUI2LdmSUz030qJFoCkM"
randomimages[3] = "https://lh3.google.com/u/0/d/1P4m5IKPKKDd04otnDY7ULGRNvOu7sOEV"
randomimages[4] = "https://lh3.google.com/u/0/d/12Va9P5HuQIMWROKF8H1vtDZmUzIWq7eW"
randomimages[5] = "https://lh3.google.com/u/0/d/1MquCeKfqrD-wNYN4VQ-04b8sUrNXG5Ee"
randomimages[6] = "https://lh3.google.com/u/0/d/11OroiO_NIailvPqurbDGR3CQ7x9NSphY"
randomimages[7] = "https://lh3.google.com/u/0/d/1ZRwc9so-nn9agtHvAV_ULTqDT-nUBLCi"
randomimages[8] = "https://lh3.google.com/u/0/d/1yGrTbhAqIg-lAMLKwuImBKudsFhlhp89"
randomimages[9] = "https://lh3.google.com/u/0/d/1b72TommWo8IUjautAkqepEKkUdzjubvH"
randomimages[10] = "https://lh3.google.com/u/0/d/1MK5XdAWncZXDv6agHZpWzp3BdReXuTLz"
randomimages[11] = "https://lh3.google.com/u/0/d/1zDmwNPgyB8C0QrXGnuHq309fSTZDjpJr"
randomimages[12] = "https://lh3.google.com/u/0/d/1-CfpNCBYdO-Jq5wOH-Jc3S8jvNo5SfuS"
randomimages[13] = "https://lh3.google.com/u/0/d/1aSjeHRCKeNT5Vtg4fHkYQi74eyY2q1AV"
randomimages[14] = "https://lh3.google.com/u/0/d/1-59iZc97nFLq5Ym7NmKddbYo2ccPuS1l"

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
"https://i.postimg.cc/7Lbp6kgS/01.jpg",
"https://i.postimg.cc/g2zCCRjS/02.jpg",
"https://i.postimg.cc/J45wYKrH/03.jpg",
"https://i.postimg.cc/ht2kcj7S/04.jpg",
"https://i.postimg.cc/JhgSH2qv/05.jpg",
"https://i.postimg.cc/xCzhv3pC/06.jpg",
"https://i.postimg.cc/KjhVJ3C5/07.jpg",
"https://i.postimg.cc/C5C2tLgp/08.jpg",
"https://i.postimg.cc/L4jGhvZQ/09.jpg",
"https://i.postimg.cc/dtvpCd2s/10.jpg",
"https://i.postimg.cc/qMLYxRw8/11.jpg",
"https://i.postimg.cc/T33s76NB/12.jpg",
"https://i.postimg.cc/1zLY3NRZ/13.jpg",
"https://i.postimg.cc/FR3Cds1k/14.jpg",
"https://i.postimg.cc/jjWFThbX/15.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);