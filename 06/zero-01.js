var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1nZuYlbtb-kn3U26DDZWOZff8HJFGhqF6"
randomimages[1] = "https://lh3.google.com/u/0/d/10Ey_6TbbU5pmWFOHeV4VMd7s344ou1gy"
randomimages[2] = "https://lh3.google.com/u/0/d/1jj8n8dvGNO4iK3UqLWRE7vCnro6jZIsG"
randomimages[3] = "https://lh3.google.com/u/0/d/1j6i5Sl3ljaNWo-4a10pYp2c962YOVKsM"
randomimages[4] = "https://lh3.google.com/u/0/d/1NLZAZydLGs2ZQL9YOEpykyhgsr95PhBw"
randomimages[5] = "https://lh3.google.com/u/0/d/1bE1BoNwCLHIGOcgR-ktnVqKROw0rtPwV"
randomimages[6] = "https://lh3.google.com/u/0/d/1SysNOnmCb6lUqvsyPXHC1hV6fxBqoKiD"
randomimages[7] = "https://lh3.google.com/u/0/d/1Ut3Lq_pVYUb0u9hz_OAzkVA-7ekuMbxW"
randomimages[8] = "https://lh3.google.com/u/0/d/1WAryOx3g43Q6rq-1nMoAmVdzY_ulZdkj"
randomimages[9] = "https://lh3.google.com/u/0/d/1sj3rUV_zPARfP7P_DCtD2PHROZFTv6op"
randomimages[10] = "https://lh3.google.com/u/0/d/1IDjl_fqu9m1zQ0Z0EpBZUV69xhZ8Weh2"
randomimages[11] = "https://lh3.google.com/u/0/d/1XUMJeuxmgAL_S-0xtm57_FQOm1yOeAkE"
randomimages[12] = "https://lh3.google.com/u/0/d/1ai7fh331yslp0fetnNmKjGNO13W1HA4J"
randomimages[13] = "https://lh3.google.com/u/0/d/18ts9qohzXp_WvX549Xu5rOceHNH3temw"
randomimages[14] = "https://lh3.google.com/u/0/d/14T7lniAwdtBZ8v91MV8_r8ECfH9LwMvA"

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
"https://i.postimg.cc/ZYPDJR11/01.jpg",
"https://i.postimg.cc/5Nn7Fr9g/02.jpg",
"https://i.postimg.cc/gjKMsSVY/03.jpg",
"https://i.postimg.cc/NfgCFttL/04.jpg",
"https://i.postimg.cc/sgxnPJvr/05.jpg",
"https://i.postimg.cc/nhW33QDQ/06.jpg",
"https://i.postimg.cc/W4JXCbGY/07.jpg",
"https://i.postimg.cc/HxDBgD3Y/08.jpg",
"https://i.postimg.cc/26QTjcX4/09.jpg",
"https://i.postimg.cc/brqgZxK4/10.jpg",
"https://i.postimg.cc/5yp3LHJy/11.jpg",
"https://i.postimg.cc/G3jzZfDR/12.jpg",
"https://i.postimg.cc/YqnRSm8y/13.jpg",
"https://i.postimg.cc/GhhzrjPy/14.jpg",
"https://i.postimg.cc/SxHG6FB6/15.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);