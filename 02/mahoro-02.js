var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1uYe3o4wY2EXhcF0W2h91JUKPXyXnoj1N"
randomimages[1] = "https://lh3.google.com/u/0/d/1b3x3aHC4t_tcyzrqbtrGKtsWp892G-Lw"
randomimages[2] = "https://lh3.google.com/u/0/d/130TIIh1No9XcXhOeM0PDyP1BrkY8cX9_"
randomimages[3] = "https://lh3.google.com/u/0/d/1j3DwfAxXrPox4195B1iV7i6Xk5X_fh8U"
randomimages[4] = "https://lh3.google.com/u/0/d/1AEFIVvsMvCuQKssvcgwvRgr9WcxsEZ4l"
randomimages[5] = "https://lh3.google.com/u/0/d/1LN5Xn4bvMxglxdxi6cCZHIF081pdRiof"
randomimages[6] = "https://lh3.google.com/u/0/d/1bnaxbYRidRkVHxqEzyRqbpTQ2Ufsp8By"
randomimages[7] = "https://lh3.google.com/u/0/d/1wcx3VsmUQiqntnBFQhBhOzBv27IqW5DW"
randomimages[8] = "https://lh3.google.com/u/0/d/1ue4I0sR59JbCTf4DbSwNTRnLxyp59n33"
randomimages[9] = "https://lh3.google.com/u/0/d/1i3YUsIvVFlzQx9g08FPY0cJ0u8Dym9Kz"
randomimages[10] = "https://lh3.google.com/u/0/d/10OQTJtY5RR559c4qkrWhljgBm8nTxBZ3"
randomimages[11] = "https://lh3.google.com/u/0/d/1X3sHJT6cYOr3sM5nBJttTSp79oRf2N12"
randomimages[12] = "https://lh3.google.com/u/0/d/1CbypntyHq8xAgjIoaz4Ua6AKdFT833LV"
randomimages[13] = "https://lh3.google.com/u/0/d/1Pm3rKiXwVs4PIlxCwP6fXip06kQig-CD"
randomimages[14] = "https://lh3.google.com/u/0/d/1Ob6CdSvOFuL61EUMse9A6wvz9cMvTgxh"
randomimages[15] = "https://lh3.google.com/u/0/d/1ZtJapv9chNp6ILsGFYaIEv6Og5zZBmxH"

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
"https://i.postimg.cc/T1G4cNRx/01.jpg",
"https://i.postimg.cc/fTzPtP2j/02.jpg",
"https://i.postimg.cc/mZNqr4wg/03.jpg",
"https://i.postimg.cc/gjDBtyJZ/04.jpg",
"https://i.postimg.cc/7L2trrhD/05.jpg",
"https://i.postimg.cc/DyxMqcRV/06.jpg",
"https://i.postimg.cc/YCVDPCpb/07.jpg",
"https://i.postimg.cc/8zsnw6V7/08.jpg",
"https://i.postimg.cc/d1cHqNZC/09.jpg",
"https://i.postimg.cc/qRcmgc25/10.jpg",
"https://i.postimg.cc/T1Rtby9Y/11.jpg",
"https://i.postimg.cc/br339zC0/12.jpg",
"https://i.postimg.cc/RVZPVHhg/13.jpg",
"https://i.postimg.cc/VsRG8RfS/14.jpg",
"https://i.postimg.cc/CLrcZxfS/15.jpg",
"https://i.postimg.cc/0y6c71pm/16.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);