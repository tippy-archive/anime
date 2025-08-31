var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1ndViMyHs8bx77E-QRnaH-rvXqNm3zRGC"
randomimages[1] = "https://lh3.google.com/u/0/d/1P8gu7RaTSMUxSgHiIsxAbLGj5t9xcMNL"
randomimages[2] = "https://lh3.google.com/u/0/d/181KU85d7M6e9GRfA1EWZI6GRSuQ9lvV3"
randomimages[3] = "https://lh3.google.com/u/0/d/1PyMxEPP4b16F1ybPEH5Dep9ahF1PqBAA"
randomimages[4] = "https://lh3.google.com/u/0/d/1-Vxk0RGZDGnCX-Wb5DxUq9M6fjgB__mT"
randomimages[5] = "https://lh3.google.com/u/0/d/15l-0gmx076m14w4rpO_S8mrI52bWTa1U"
randomimages[6] = "https://lh3.google.com/u/0/d/1KA58Rx1s_2wUw4c2Xk4wb_LLtEdpW3RN"
randomimages[7] = "https://lh3.google.com/u/0/d/154z4XwAlcL9z6VWEQ_OztmqpZddXPsvK"
randomimages[8] = "https://lh3.google.com/u/0/d/1LoECBcP4boGXJqf5X1p7ucg04mQY2Zrp"
randomimages[9] = "https://lh3.google.com/u/0/d/1TJBeYRkbAKS5QdhLYWFhvV_DqzWl5ETs"
randomimages[10] = "https://lh3.google.com/u/0/d/1WYTbHL69J5x-ylI9B9NU8CDeh0-l7oYL"
randomimages[11] = "https://lh3.google.com/u/0/d/1FZhbyzcTcXrVPcE5YcbcodsyT__L8MLO"
randomimages[12] = "https://lh3.google.com/u/0/d/1slIfDGfwdSX1bXwpuSL7xtGQhGpBMC-t"
randomimages[13] = "https://lh3.google.com/u/0/d/14KyM40Sf3JfLqAVoRi4pK-YM1Zops1ji"
randomimages[14] = "https://lh3.google.com/u/0/d/1b0M8WIcCUjCri7c4juP3SUyzQXCvotxC"
randomimages[15] = "https://lh3.google.com/u/0/d/1ANdbHdMEZwsYnQ5MSVtOUNrBuVkeK0rK"
randomimages[16] = "https://lh3.google.com/u/0/d/19Z2xjnqNzSsS5ahQgxReYryLDXfD-H5x"
randomimages[17] = "https://lh3.google.com/u/0/d/1kWp7Ic7Cnoh2kN2kBxEXV5HJF-rE8nWS"
randomimages[18] = "https://lh3.google.com/u/0/d/1D5fI-IILsvubiv6a8CPn3ftcxkH2BqfN"
randomimages[19] = "https://lh3.google.com/u/0/d/1PYFUm53jCDAh6oeiQfndf1SMV07Gltvi"
randomimages[20] = "https://lh3.google.com/u/0/d/1y_VbrPIQbYHhwkT2PAM6Zm21SCekXdBh"
randomimages[21] = "https://lh3.google.com/u/0/d/1aQK2OPplRvAdW0x5A_YVE6LB0sAN4dsY"
randomimages[22] = "https://lh3.google.com/u/0/d/1iZ0sLNwm1QqO-GDObLehdg-7JrgAC3w_"
randomimages[23] = "https://lh3.google.com/u/0/d/1qhB_QRPSfVgAss9KSpxd_4ihGLio2IiO"
randomimages[24] = "https://lh3.google.com/u/0/d/1e5H2ldsLa0p22mxISfGiqY-uaTutEQ9L"
randomimages[25] = "https://lh3.google.com/u/0/d/1yEEnuSZVLzuCBB0dEh6GNUXNnVZpAHYm"

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
"https://i.postimg.cc/25TPj5bk/01.jpg",
"https://i.postimg.cc/d0JbKC0N/02.jpg",
"https://i.postimg.cc/Tw4FmHJB/03.jpg",
"https://i.postimg.cc/qRRWNdy8/04.jpg",
"https://i.postimg.cc/ZnvgLFfn/05.jpg",
"https://i.postimg.cc/V5yhZrTR/06.jpg",
"https://i.postimg.cc/FF2sXPXP/07.jpg",
"https://i.postimg.cc/v81HKJkg/08.jpg",
"https://i.postimg.cc/7Y0PHgxq/09.jpg",
"https://i.postimg.cc/pLvWppTz/10.jpg",
"https://i.postimg.cc/q7MpxS27/11.jpg",
"https://i.postimg.cc/9QBWTCRS/12.jpg",
"https://i.postimg.cc/fb2D2Cvf/13.jpg",
"https://i.postimg.cc/MTnxhBP2/14.jpg",
"https://i.postimg.cc/hjNggG6J/15.jpg",
"https://i.postimg.cc/wMJzBpYw/16.jpg",
"https://i.postimg.cc/Pf8Tymv1/17.jpg",
"https://i.postimg.cc/4NkZSmpq/18.jpg",
"https://i.postimg.cc/J4NmVMqn/19.jpg",
"https://i.postimg.cc/JzR8Rv6Q/20.jpg",
"https://i.postimg.cc/htMBvsNR/21.jpg",
"https://i.postimg.cc/rpmLrWL0/22.jpg",
"https://i.postimg.cc/VNVPB6Y7/23.jpg",
"https://i.postimg.cc/634JHXqB/24.jpg",
"https://i.postimg.cc/D0VVHM4L/25.jpg",
"https://i.postimg.cc/RhcrBLw8/26.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);