var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1sRMbuZtUgHQByDi74Z0jQfGy0wm8YaXh"
randomimages[1] = "https://lh3.google.com/u/0/d/1gL5zh_oYNtHaoUs5xlWGXUYsDiqnmRgv"
randomimages[2] = "https://lh3.google.com/u/0/d/1SEE6pWygI6oY8sGGzNX_rPsSRjRpdEN3"
randomimages[3] = "https://lh3.google.com/u/0/d/1JSMjiEG8eY3CqK873fxw5CdlJc9hv0NI"
randomimages[4] = "https://lh3.google.com/u/0/d/1c2ytzdCaVsWTnw_5mJzOmS_JJN2TR8W1"
randomimages[5] = "https://lh3.google.com/u/0/d/1U8fnvdSpjzjoChyXyXdTeRMkp15QlYnP"
randomimages[6] = "https://lh3.google.com/u/0/d/1csPPvgcNSmmoD7F39GRBu1qsHhthodD5"
randomimages[7] = "https://lh3.google.com/u/0/d/1FRoo6ImCghnjlPUhWNlOntEpZlbBxtwk"
randomimages[8] = "https://lh3.google.com/u/0/d/18b60BfaBSTP0oapMJrIJZBrl1mkLDCjF"
randomimages[9] = "https://lh3.google.com/u/0/d/133NzdjQp1fmblU1nTpJURljy85NpTxHP"
randomimages[10] = "https://lh3.google.com/u/0/d/12Qw2AC1588FHO52Tnb3h3RkH8jqkkgsZ"
randomimages[11] = "https://lh3.google.com/u/0/d/1CLSx83_ECedajt-1NCtoBPurrXOY5VF-"
randomimages[12] = "https://lh3.google.com/u/0/d/1QTKCl5lWHIFmO-0jEkwrGxjidmPP9-b0"
randomimages[13] = "https://lh3.google.com/u/0/d/1Di97KLrn4zdwT95oax5IJQzOEqPXqwpo"
randomimages[14] = "https://lh3.google.com/u/0/d/1dBS6K73mmo_1v8Oj4uPSKtzfMrQWf-1b"
randomimages[15] = "https://lh3.google.com/u/0/d/1wDrTbProUK6j8E2zOCsuDVCqi993rVMo"
randomimages[16] = "https://lh3.google.com/u/0/d/1h_nK4GOtVJo9N4z_N3n0cRY3z6bvPX9i"
randomimages[17] = "https://lh3.google.com/u/0/d/13i8sgZYr0B88A9Y0_U21j0wc3buvyeAz"
randomimages[18] = "https://lh3.google.com/u/0/d/1mc2if3HKeWloj5w4TwOl3elm0o3EXH4I"
randomimages[19] = "https://lh3.google.com/u/0/d/19Hzddn8sbk8Lci6cMn4Jg78B3AAqskes"
randomimages[20] = "https://lh3.google.com/u/0/d/1CLjBocMmJHddGzz6Een5PY1XM0uEGalX"
randomimages[21] = "https://lh3.google.com/u/0/d/177ISnmOLnnI8XojXkgpvNdK4R_MXwbfZ"
randomimages[22] = "https://lh3.google.com/u/0/d/19jX4stKc31_9lHIsqZoTBlAZcX1LA0SN"
randomimages[23] = "https://lh3.google.com/u/0/d/1ZbfLvg9mmD5S90jzAffNidICtNf1i_rT"
randomimages[24] = "https://lh3.google.com/u/0/d/1R50W7H1Ur2fWw769AZh6ZvpHB03XVGMH"
randomimages[25] = "https://lh3.google.com/u/0/d/1Jj2xDFPRuKFIGJ492vTu9PNjJ16kT3cU"
randomimages[26] = "https://lh3.google.com/u/0/d/1xPKhkYjDfpQF7SMQMAMGSW67FkuAsRd0"
randomimages[27] = "https://lh3.google.com/u/0/d/1P7L9t1oA8H9L1zgBVXQWvlCJ40sU8fA1"
randomimages[28] = "https://lh3.google.com/u/0/d/15GK7ifqdb0Wjhy1Sb-DbGFtsVRDAzDcp"

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
"https://i.postimg.cc/1t1HzzMv/01.jpg",
"https://i.postimg.cc/nr0YTGxW/02.jpg",
"https://i.postimg.cc/BbqBxwrD/03.jpg",
"https://i.postimg.cc/V69F0cVm/04.jpg",
"https://i.postimg.cc/XN88V45g/05.jpg",
"https://i.postimg.cc/CxZHH8Qv/06.jpg",
"https://i.postimg.cc/bwK06JXq/07.jpg",
"https://i.postimg.cc/rFZNrjQ0/08.jpg",
"https://i.postimg.cc/Xvdftb3d/09.jpg",
"https://i.postimg.cc/MTYyKmnG/10.jpg",
"https://i.postimg.cc/1RJpkMxC/11.jpg",
"https://i.postimg.cc/j2gPyqQ0/12.jpg",
"https://i.postimg.cc/MKHyqRqW/13.jpg",
"https://i.postimg.cc/vZ6f6s4k/14.jpg",
"https://i.postimg.cc/7L3zmnMN/15.jpg",
"https://i.postimg.cc/43kt6Std/16.jpg",
"https://i.postimg.cc/G2byNTXn/17.jpg",
"https://i.postimg.cc/d1nyKQfk/18.jpg",
"https://i.postimg.cc/SQTMTs8H/19.jpg",
"https://i.postimg.cc/NFz25JBQ/20.jpg",
"https://i.postimg.cc/02zJLs0j/21.jpg",
"https://i.postimg.cc/BQR13Vmg/22.jpg",
"https://i.postimg.cc/bwbSw9Mj/23.jpg",
"https://i.postimg.cc/q7ThhCV6/24.jpg",
"https://i.postimg.cc/g0HwvkmS/25.jpg",
"https://i.postimg.cc/wM778XJZ/26.jpg",
"https://i.postimg.cc/xCsc4xkL/27.jpg",
"https://i.postimg.cc/GtV9c4x2/28.jpg",
"https://i.postimg.cc/WpHdmycv/29.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);