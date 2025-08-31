var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1qzOGOJZdLK_fAn-Ei4zT0sHPFcDyd-IZ"
randomimages[1] = "https://lh3.google.com/u/0/d/1MoKrShAvvX0ceMUJgs0IMHidXHI7CbMo"
randomimages[2] = "https://lh3.google.com/u/0/d/1pPYUAoWwxKWZMccyRM0vI9I5npVhrxAO"
randomimages[3] = "https://lh3.google.com/u/0/d/118ZOrlpUdrwAMCpW1h4rq9T_BG2pP0nl"
randomimages[4] = "https://lh3.google.com/u/0/d/1pVI3-ggw-rOF1U6zp-va99wlhOd0W5R_"
randomimages[5] = "https://lh3.google.com/u/0/d/1ek0XYH5EhziOPng7pirk-e9IXDU0sCY5"
randomimages[6] = "https://lh3.google.com/u/0/d/1nV7Rv8t4sI-p2NNj4oOlJI9t-y8fEKiR"
randomimages[7] = "https://lh3.google.com/u/0/d/16LUR-jsgELOHjzmqibr1iJpuaNlVijcC"
randomimages[8] = "https://lh3.google.com/u/0/d/1gaVL0opp6zCR8GPeqX2cMeZRts9KJpzV"
randomimages[9] = "https://lh3.google.com/u/0/d/1ieOwaAcsIJHvE1YJaDFoLTsyRpr79zCc"
randomimages[10] = "https://lh3.google.com/u/0/d/141ZmPSw-dyuYzEvbJZIJARHi-EgThnar"
randomimages[11] = "https://lh3.google.com/u/0/d/1nsEtgs_oiXXJcfjoZLBkrZ4fauQ6yKl3"
randomimages[12] = "https://lh3.google.com/u/0/d/1YuONuhhh7FTCaaaHxUhfvT2v023APfA0"
randomimages[13] = "https://lh3.google.com/u/0/d/1-POFhuGYvCIRW2yXvC3rmXv4LpXnjtT1"
randomimages[14] = "https://lh3.google.com/u/0/d/1fohQZNOWdU0tQzUXfl_dFbijRL8CzQF-"
randomimages[15] = "https://lh3.google.com/u/0/d/1IsbL9yKbyeW4YDF8Y-9GwwGVnBxG3Bi-"
randomimages[16] = "https://lh3.google.com/u/0/d/1M9QmumtqOzNm7ZwYRDhhJCCo4u1JfNcT"
randomimages[17] = "https://lh3.google.com/u/0/d/1vKqScWW5MZSjNxp-dmlkMA55VgIXj98m"
randomimages[18] = "https://lh3.google.com/u/0/d/19IE828eSvs7mBVnjSnjV5TlZrvnXFCH4"
randomimages[19] = "https://lh3.google.com/u/0/d/1yuJxu1F0NqP1tRSMf5whOFAiJdzhuBka"
randomimages[20] = "https://lh3.google.com/u/0/d/1y4MdYMPJEd7NtmdonwuHAVFDuKbFEr8j"
randomimages[21] = "https://lh3.google.com/u/0/d/1eG47Goq7ZjdcX-Sw3fo6s4Z32X30RBvL"
randomimages[22] = "https://lh3.google.com/u/0/d/1j56IFSLTGsng-BH-0pcYFdRY9VQr8mIH"
randomimages[23] = "https://lh3.google.com/u/0/d/1vnoSt27cUDltB1Si68cnAU8vPqjhtD4a"
randomimages[24] = "https://lh3.google.com/u/0/d/1NrsRw5wRaBug9SZqObhLkL10byWi9UXl"
randomimages[25] = "https://lh3.google.com/u/0/d/1uFGet9HYf0g5g0zdoE8rxEslWyd2RA4y"
randomimages[26] = "https://lh3.google.com/u/0/d/1140bRMwH8tT49vy1XpK4j3IBwvVMM8U4"

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
"https://i.postimg.cc/6pPvkrzt/00.jpg",
"https://i.postimg.cc/xT0MMTcD/01.jpg",
"https://i.postimg.cc/QdC7Y4Qf/02.jpg",
"https://i.postimg.cc/HsB52DyJ/03.jpg",
"https://i.postimg.cc/d0TywhSd/04.jpg",
"https://i.postimg.cc/xCDbC9WZ/05.jpg",
"https://i.postimg.cc/bJxSSKPw/06.jpg",
"https://i.postimg.cc/kG76QfMF/07.jpg",
"https://i.postimg.cc/J7QBrVKT/08.jpg",
"https://i.postimg.cc/sDDG16N3/09.jpg",
"https://i.postimg.cc/XqxZQdpM/10.jpg",
"https://i.postimg.cc/8PKJvR2M/11.jpg",
"https://i.postimg.cc/7Z5CnC4c/12.jpg",
"https://i.postimg.cc/fR1V2wTb/13.jpg",
"https://i.postimg.cc/fbXJ16Jf/14.jpg",
"https://i.postimg.cc/XJbpWQ5S/15.jpg",
"https://i.postimg.cc/PxQN5YbL/16.jpg",
"https://i.postimg.cc/yx6xgxnL/17.jpg",
"https://i.postimg.cc/3NLRghcY/18.jpg",
"https://i.postimg.cc/NGb5h8fS/19.jpg",
"https://i.postimg.cc/dt1DJ7h1/20.jpg",
"https://i.postimg.cc/VNyN9DDr/21.jpg",
"https://i.postimg.cc/RZJFnjQx/22.jpg",
"https://i.postimg.cc/sDNxxVWJ/23.jpg",
"https://i.postimg.cc/7LgZK0WB/24.jpg",
"https://i.postimg.cc/85NP9s8T/25.jpg",
"https://i.postimg.cc/DZ6yTFFL/26.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);