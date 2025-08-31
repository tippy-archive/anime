var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/18xtjADbUWe3SHihLhK8QwaGKH1kQtLS7"
randomimages[1] = "https://lh3.google.com/u/0/d/1DD80DV-xgEufwRO3nNmdRsV1fIRy1IY0"
randomimages[2] = "https://lh3.google.com/u/0/d/1cGFjIWKL9gTHpqFrV1oWG1kw0KDMfFlz"
randomimages[3] = "https://lh3.google.com/u/0/d/13xXvolbrXuUMKGbna8KakMm9jNZyZK65"
randomimages[4] = "https://lh3.google.com/u/0/d/1JMGiYLRbNMGTnCvA4lALCrED5C56tV38"
randomimages[5] = "https://lh3.google.com/u/0/d/1UtKL89NCbKd8zfY8KhwoRSnchYmlvQtP"
randomimages[6] = "https://lh3.google.com/u/0/d/1Qoqd4FStQOIDNVliyHmO1JuXazoHW8iQ"
randomimages[7] = "https://lh3.google.com/u/0/d/1kuMy4GSkU5pkp8RJgcPzXarAG5eG4mkd"
randomimages[8] = "https://lh3.google.com/u/0/d/1iP_zE7_kZOe8pAFqCbabWegOCGiexYpl"
randomimages[9] = "https://lh3.google.com/u/0/d/18K7dJq7fYC9WnGoo7dkZOrdY6gtDA84m"
randomimages[10] = "https://lh3.google.com/u/0/d/1QO7VCZyIT5OX7KI_PTdWCgPdWGJ9alT7"
randomimages[11] = "https://lh3.google.com/u/0/d/1zuCpLicuIMuUYVc0vWqYKvQN1yFj7qzl"
randomimages[12] = "https://lh3.google.com/u/0/d/1cHVLpB_MK5hucTEYhjq19O7ye82wGzeE"
randomimages[13] = "https://lh3.google.com/u/0/d/1Pzew_42mqgt1uxgU6P77eMNfdtxUavAI"
randomimages[14] = "https://lh3.google.com/u/0/d/1VZ8eN4xJ7yjRT5ryLsj7oeQzdqwTS4Ak"
randomimages[15] = "https://lh3.google.com/u/0/d/1SQ2KR-v8u8V_UqYZhLYLhughZzAg6rVJ"
randomimages[16] = "https://lh3.google.com/u/0/d/1EH03WbgWttjwC3Zu6aiGq4tCU_Th8V5R"
randomimages[17] = "https://lh3.google.com/u/0/d/1eyuz1g8StW1zo-5Uewn3lslO2Ej0D4Wl"
randomimages[18] = "https://lh3.google.com/u/0/d/1hImRxxnabokj0K2td-LND8XnBz9JWnGG"
randomimages[19] = "https://lh3.google.com/u/0/d/1AP30JfnVH-t-Ehc5_aLsjuD2ryQLXqe4"
randomimages[20] = "https://lh3.google.com/u/0/d/1B9K_f77PytCwRC6KX7Sx2E11AgK5fnVx"

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
"https://i.postimg.cc/wxmVnZc6/01.jpg",
"https://i.postimg.cc/MThYvmx2/02.jpg",
"https://i.postimg.cc/ZKzcmHV6/03.jpg",
"https://i.postimg.cc/KjBDL3vK/04.jpg",
"https://i.postimg.cc/6p9f23s3/05.jpg",
"https://i.postimg.cc/9FPBQ9nK/06.jpg",
"https://i.postimg.cc/JzPcbLmQ/07.jpg",
"https://i.postimg.cc/vmT7hNZw/08.jpg",
"https://i.postimg.cc/s2LYN4MQ/09.jpg",
"https://i.postimg.cc/3RDX50GL/10.jpg",
"https://i.postimg.cc/KjSnZcrm/11.jpg",
"https://i.postimg.cc/x8vLqrtM/12.jpg",
"https://i.postimg.cc/QN1Qf5hC/13.jpg",
"https://i.postimg.cc/sDzpqXgc/14.jpg",
"https://i.postimg.cc/pXBDHH9t/15.jpg",
"https://i.postimg.cc/BnQ2ZVDP/16.jpg",
"https://i.postimg.cc/7Zs05nMs/17.jpg",
"https://i.postimg.cc/1z86wVv9/18.jpg",
"https://i.postimg.cc/HLFM2WNb/19.jpg",
"https://i.postimg.cc/0jsJTWPQ/20.jpg",
"https://i.postimg.cc/c1R3RSB8/21.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);