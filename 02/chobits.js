var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1-h_D9Zby5fXYEBOrfwbOd9CTxMNmehfC"
randomimages[1] = "https://lh3.google.com/u/0/d/1IqPwvQNvMJMhIV_rO4F8b3cqQU_jF-R0"
randomimages[2] = "https://lh3.google.com/u/0/d/1y99ik-U2OXUpfDT47KdXIkxOmeKnt742"
randomimages[3] = "https://lh3.google.com/u/0/d/1fqoLu70RLvv3VmOjqsEDKRv1mXUtGIIj"
randomimages[4] = "https://lh3.google.com/u/0/d/1U4J55kTdhT-nYDICwuEdWPsG09ifNENM"
randomimages[5] = "https://lh3.google.com/u/0/d/1zib6r9wTn42yPyvV-BJZz1dfi6VXhY6K"
randomimages[6] = "https://lh3.google.com/u/0/d/1ONlVgX8ogIPdFwArjN5X-O7F-5EM1MXz"
randomimages[7] = "https://lh3.google.com/u/0/d/1qYDTweNhdgLzjFBweUltviWqSoeZhz6W"
randomimages[8] = "https://lh3.google.com/u/0/d/1o-cQPE37Zo1by76k1jMCsaxKxLp-y_1e"
randomimages[9] = "https://lh3.google.com/u/0/d/1lwMGGCl2lBiJ1Nh6DNlAXb-hjrlLPwzW"
randomimages[10] = "https://lh3.google.com/u/0/d/1cJXrOlkyprD_d73kMrdsqtAH59IwFtFu"
randomimages[11] = "https://lh3.google.com/u/0/d/1tBlP6FkdZqjH-lhIPouJDi8quYqfZBex"
randomimages[12] = "https://lh3.google.com/u/0/d/1Q1Utf26zXOt2v61Y1glZxZQZK9YM6a0P"
randomimages[13] = "https://lh3.google.com/u/0/d/1095IMNIcHeVouyAzL88TJEysg7fxcK9Y"
randomimages[14] = "https://lh3.google.com/u/0/d/1uurrp8w5kVZx6g-047kOwQobedl9wwEh"
randomimages[15] = "https://lh3.google.com/u/0/d/1_54F_Q9v31A-B6imxuVqJ9hd4Rc2ueop"
randomimages[16] = "https://lh3.google.com/u/0/d/1kO1YJlI6vwlPnWufiRTXganHNlidm0Wl"
randomimages[17] = "https://lh3.google.com/u/0/d/1MHb2cuu1lUogr1Hp7v1iL7HJF5JzZBbv"
randomimages[18] = "https://lh3.google.com/u/0/d/1bhNpeUHOgrKYgdWV-E6F-oKq-ZvmNqg0"
randomimages[19] = "https://lh3.google.com/u/0/d/1MH4_5J8ikhB_UcLSeXWl7du7821-WkbM"
randomimages[20] = "https://lh3.google.com/u/0/d/1uMDrbN2qDsgjxpAcIluiNAUCLR-WoDZA"
randomimages[21] = "https://lh3.google.com/u/0/d/14jPSimbziAheDw75uRjCsLUqbVav0bHe"
randomimages[22] = "https://lh3.google.com/u/0/d/13__E1MXASxFNAsvEvx7cyZQX_tRmDlOE"
randomimages[23] = "https://lh3.google.com/u/0/d/1_wii0l9vyx-VuCeZvVq7urQWBzgcjAaX"
randomimages[24] = "https://lh3.google.com/u/0/d/1Roo8VuvL5PRONfwU-nP-Xls4h8Ep2bzQ"

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
"https://i.postimg.cc/ZYMbV6GN/01.jpg",
"https://i.postimg.cc/d3pJ3K26/02.jpg",
"https://i.postimg.cc/5NQxG6JR/03.jpg",
"https://i.postimg.cc/Jzw1WM44/04.jpg",
"https://i.postimg.cc/wjh9qZ75/05.jpg",
"https://i.postimg.cc/Bv44XpKr/06.jpg",
"https://i.postimg.cc/8C4DWvdj/07.jpg",
"https://i.postimg.cc/j5jThjvv/08.jpg",
"https://i.postimg.cc/j5kb3rFT/09.jpg",
"https://i.postimg.cc/hvzqH3kd/10.jpg",
"https://i.postimg.cc/wMCdHQzb/11.jpg",
"https://i.postimg.cc/8k9GhNvB/12.jpg",
"https://i.postimg.cc/XY00zLQr/13.jpg",
"https://i.postimg.cc/FKrX9Rtm/14.jpg",
"https://i.postimg.cc/W45LtvjZ/15.jpg",
"https://i.postimg.cc/Y9jcWsqs/16.jpg",
"https://i.postimg.cc/HxNq49rs/17.jpg",
"https://i.postimg.cc/J0B9THX3/18.jpg",
"https://i.postimg.cc/c6yPP17p/19.jpg",
"https://i.postimg.cc/BZLbWhcp/20.jpg",
"https://i.postimg.cc/NG3MQ1dc/21.jpg",
"https://i.postimg.cc/BQ2vbXz1/22.jpg",
"https://i.postimg.cc/sgygh3FH/23.jpg",
"https://i.postimg.cc/Nj4f8ZBs/24.jpg",
"https://i.postimg.cc/BvnZmNnx/25.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);