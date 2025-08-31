var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1l7Da0t-4am9FBdupWoPsjxOeXNUBytaX"
randomimages[1] = "https://lh3.google.com/u/0/d/1S8Y4SnnISPuq0Xuhe11vZpY34tEaouGt"
randomimages[2] = "https://lh3.google.com/u/0/d/1fNHhFv68-b3ecJBJDz4XY6HM45JGcPAh"
randomimages[3] = "https://lh3.google.com/u/0/d/14dumC8hr6AGINUU0w8qZLLgZYQ8IG9xe"
randomimages[4] = "https://lh3.google.com/u/0/d/17Vk4P74KD8a9JzejSBiepapvzN4V0flC"
randomimages[5] = "https://lh3.google.com/u/0/d/1FRf-QT4HbwoNe16Ajg-p1QTLdmvHitGQ"
randomimages[6] = "https://lh3.google.com/u/0/d/1XdmzhQOY3dE-TrIkYSrJ6AUgMwiCyt0a"
randomimages[7] = "https://lh3.google.com/u/0/d/1XjfU4hRUFFE6-L2mdPuFD8552uwN-7x5"
randomimages[8] = "https://lh3.google.com/u/0/d/1oh09GWF0dgr_tEtEEdCObdBrXCwUlSnZ"
randomimages[9] = "https://lh3.google.com/u/0/d/1Gcmu5VzoTxVphn171jWUdwlIPcG0MD-k"
randomimages[10] = "https://lh3.google.com/u/0/d/1i8zHlYqZfA8AD7_AVGfRskzE6XSn0wGZ"
randomimages[11] = "https://lh3.google.com/u/0/d/18eloR7ZgAoCOhYmXNcGFI8_wrduEjbAE"
randomimages[12] = "https://lh3.google.com/u/0/d/1-eW-IKgumdsm92lddCc0Y-rbzRzwWESB"
randomimages[13] = "https://lh3.google.com/u/0/d/1peoWmyZyx1LbA3HV6WAh7hKY3aZkN0aZ"
randomimages[14] = "https://lh3.google.com/u/0/d/1qC8oP_Hk_lWi-6zVE_Jhjg8VTdVfDwis"
randomimages[15] = "https://lh3.google.com/u/0/d/1qLEmuMYXVhPZi_9EiI1wPEeWXBt5O8zQ"
randomimages[16] = "https://lh3.google.com/u/0/d/1tbGD861t3wSR-G1Wyfzu2vSJEzMRbilh"
randomimages[17] = "https://lh3.google.com/u/0/d/1LquQtuAQnhvhOQN_bTmaiiGCtadqmUt2"
randomimages[18] = "https://lh3.google.com/u/0/d/1RmtGgglvDd58IggiY_OsVonPrNjZu_fO"
randomimages[19] = "https://lh3.google.com/u/0/d/13LYO5tP2OgeDUCAtSKov1sVcuGdkGb0I"
randomimages[20] = "https://lh3.google.com/u/0/d/1IcnrVlguS88QfsktTfZPCh1DyewmlgfS"
randomimages[21] = "https://lh3.google.com/u/0/d/1gk-UjX3O9AhCTEK0yCHs2eG17ujgc_JT"
randomimages[22] = "https://lh3.google.com/u/0/d/1LDZc-xybBnHJkZKrzviJ1fg4sgVXt9yH"
randomimages[23] = "https://lh3.google.com/u/0/d/1GntQ139oOi0ocaSHhGYwW2wGy9dxi9Xu"
randomimages[24] = "https://lh3.google.com/u/0/d/1uarz7-UpeHHN-dVP3u7PLRW19pHke2Nd"
randomimages[25] = "https://lh3.google.com/u/0/d/1fyATkeiYF1mt6cF_mHHdPIftwzl0vciz"
randomimages[26] = "https://lh3.google.com/u/0/d/1V22Jp7bXnI6dJSquvLWHbjf-Q_Zqvni1"
randomimages[27] = "https://lh3.google.com/u/0/d/1AfOqN-FOQKbjKxOmFol8gmwmNkEHxQGf"
randomimages[28] = "https://lh3.google.com/u/0/d/1kSg31UG5Cwxc3Q9coCz0-aTpNPPU-87t"
randomimages[29] = "https://lh3.google.com/u/0/d/12f3d9t5meVZOabVGCpjoIgqt9zCEZKOA"
randomimages[30] = "https://lh3.google.com/u/0/d/1H_sPwVFaZ-OHSp6MwppuaZ1P3dx3e5Ow"
randomimages[31] = "https://lh3.google.com/u/0/d/11NmNMS8ujj-cDfZFG_SlrYsAOYbfTs3W"
randomimages[32] = "https://lh3.google.com/u/0/d/1tThd2-SxH7gBCsq8l3lIrHUI45ZpzL90"
randomimages[33] = "https://lh3.google.com/u/0/d/12c6_9nj1Kp64Y9UCMbmQkNmUstv0JRGr"
randomimages[34] = "https://lh3.google.com/u/0/d/1aFj3mTNXlSh7ZiR3Gb0VYtWV5Qr1A-fq"
randomimages[35] = "https://lh3.google.com/u/0/d/1i9qH5f741qm-SbC1jTeUykr9IJ1U5kXO"
randomimages[36] = "https://lh3.google.com/u/0/d/10P8TQn3DcUMlpbygmo0go16h8yvfH9er"

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
"https://i.postimg.cc/6pCsXZyy/01.jpg",
"https://i.postimg.cc/VNF3Sc9w/02.jpg",
"https://i.postimg.cc/5NhcTg9h/03.jpg",
"https://i.postimg.cc/CM6pHY3L/04.jpg",
"https://i.postimg.cc/PJCcFpgf/05.jpg",
"https://i.postimg.cc/CM29n78R/06.jpg",
"https://i.postimg.cc/D0RDVfhr/07.jpg",
"https://i.postimg.cc/BvJzfwrV/08.jpg",
"https://i.postimg.cc/zGZM0f05/09.jpg",
"https://i.postimg.cc/3JDVXGjn/10.jpg",
"https://i.postimg.cc/vZrKjdNn/11.jpg",
"https://i.postimg.cc/R0GDSL9V/12.jpg",
"https://i.postimg.cc/d11SLZtR/13.jpg",
"https://i.postimg.cc/9MngTXr6/14.jpg",
"https://i.postimg.cc/90w8B39r/15.jpg",
"https://i.postimg.cc/XXM2H2Kx/16.jpg",
"https://i.postimg.cc/NGyBn57r/17.jpg",
"https://i.postimg.cc/tRLpGp2v/18.jpg",
"https://i.postimg.cc/P5HHNKGm/19.jpg",
"https://i.postimg.cc/hPTgS6YD/20.jpg",
"https://i.postimg.cc/cLcS3YZP/21.jpg",
"https://i.postimg.cc/s2DR4Xgx/22.jpg",
"https://i.postimg.cc/Zq7z7SWc/23.jpg",
"https://i.postimg.cc/qRNVW5nd/24.jpg",
"https://i.postimg.cc/RF25mLQJ/25.jpg",
"https://i.postimg.cc/XqFMYBQH/26.jpg",
"https://i.postimg.cc/GhwwSzmZ/27.jpg",
"https://i.postimg.cc/zGqmqBW7/28.jpg",
"https://i.postimg.cc/Jzxf0L5L/29.jpg",
"https://i.postimg.cc/65rJsR7T/30.jpg",
"https://i.postimg.cc/JhdS35FY/31.jpg",
"https://i.postimg.cc/jdrmh58T/32.jpg",
"https://i.postimg.cc/fLGFpTDx/33.jpg",
"https://i.postimg.cc/3N26T5xz/34.jpg",
"https://i.postimg.cc/253K5B5Q/35.jpg",
"https://i.postimg.cc/sD98Hr8h/36.jpg",
"https://i.postimg.cc/fRzP6Png/37.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);