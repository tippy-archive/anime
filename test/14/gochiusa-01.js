var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczP8crmHMcBMLiZU_T0INJTSINEXekutFu4kKerSW57VBKDAqR0dbULXXocd3yt6oVO4YlQnm8hmvJA8ZpuMEJ85lyD7bCiKPPb5qBGpkEZk5x7OL1wFQRFvkd8xy7Ko2kQDRJvupiHXbd1D3QstXD7T=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczM6jKnlqxohfV2Nut7Sw64paQqsGbuH-ZgH-2R_j7CL-2IQSfsAffH74Crb4hngtVdayRiuS56gc4R3WgrYcqHwbK5GmEkrdIr-XaB-NFmF1-rG3wTzIElsrE4kh6Aw3A3Xo7EQIOus6QxWlLqSWhs5=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMC2bl3c8k8Qo93AOVXzeLMmDdct8E7d5VmwDMbYGs5yNoKQVMurGj_MIWIAH0Wvo__J0-UbWSZ5oS3deITmefVWuP2iP7spZ3aDefMrLjI8c9gWGTl3DvjIE3JHLXeC-QGuNTNgFqcMROcH4sTOkKK=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczN8M8Ql95BNUyuSAghE57492QisA5u2ufYn-FOkEHORCB3QLgUpYvlcFsawsSU_3cyB54wYittPEIwSV6krusu8QQJmLuNG90qsp_bFh7c6T3ZonP-9McZawZuaM2tJxk6HZ1Me9Izlb89qRIycBevA=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPYjkAUDwmqsfeGH4mRft9WF8WYLJF4N3NCTTRZf9UqhUcyAm2cNSv477TG3nAwXsN6bKyqi6JbE72q8Lb3YRx_8GyYKR8nVlUtLFtRLU9mWlEnvSPkednZJDz3zwqx0HzRi-X5g-mCv510Ch18NjaG=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczO6Gaov_nEwIdVkvMIvvpyzMXrELrGt0khXApLIuDvUj7njg9I8o_hrDypgvSG5aKXBVC1T7RUq1yiO93pm6rLhU_H2c8jnzrcGcMlFDoGK00GtLHgB34H31ti9QjxrB_21TduoSLK8jjT9Bj5XfNGo=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNdnnLgmOGq25XEDZU7m6b_UysNY4WSDgrjvoqK6KmSD726SbeNHWRErTGfplBe8lgMphmXRdXCo5-R_UUTYWomFLLBAcvKI0DdLaWfu-nYyoI3yVW1APzEH0AQMxKgcmfLjGDx6H1RFd6azdPVNF17=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPZJ_iANOM3WyXsI7DSa2xuggoBz1ebl_MN9xsB8QPh4-EY--SxSszr45sX2C79lBEKiox12q8UXeEeI8o1EIx8tlyrWUySCr74lQkKtiVmSPmWV-3fsqF8EUog55uGZXhqXaQMFvvtb1IhXkTtP4oE=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOX3E1KXzqF3pdpIXNGvlvMhJB2OyK69W0c25KKI6JDBTCiVnoUdzFggiXSTfnnnKYIjIUkpIy35xcx2qfceg9paWktwbkRyLr1-OkoTt2rXxJtlAgKNFhQzZ0_7P5-4kow1zetbnuppGWOKb6RhuGd=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPiMGehmYWiAri7fvIp72h5tp-LDExchRRvk3WoYP6tyRm3vcXLgitvZi0CwIxwEHE17XEYcuuUWUTJ4ORY7axDzf1vixem_teTFFeUW6trWJAP4_xtMxreuTKxp1OKH9zyVJSUmiCb-87H-cyjF84i=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNgT6X2LMppNcLy8fObEqeXKEUl8Au9avt1DwhRpO9sNuSXurw5lsEwf8i7fpAXZ3Ys9mbRAAI-qGIaeSCuOyaUe8KDGKwAj-AYDjiJKD9J8E2MyrL62QAdSqdnBel-DBYYswFB6e9IDRn328erkfuB=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMlN3TpqqPpXlhLD5YgxdtTTm0zT1XcwHIYZnFFhubhPJMn0qiu_OczZLgCNQQR3e6ZF9ULoShhStgle6gyhWY4ygiI4OW_WR9FfShzT7bJLi7lDwnSXWuALlw14CEFuTA008SO_x0aDTcemlomFB6b=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMm-2pu2NlMVlcNZfCG0MF1P5HHYo_wztZO0pIWsrmarzBqLRCbuqKpgkZ3oxCaoQrOnpSxQYIkn2LGLEhvZYRir7alcugZdfdJj1Ank4OKjtCHvhbSIVBucBtD8clVgHS_qpfmcjYXqZIzP7os7f15=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPuEQM7BKJmyar9K7mdydCOOgXvs9PuspJxmImM2jkk80ZvQqoEcXyMrA0LQKTJojYxnxIpBpmxy0ve1ZIFWmJa8pk2j-_OrDfbokfiMIXm8XLFL_kxUvT23-EOPCZhbJLhkS5Zii_nTWujNAeAWVZ9=w1920-h1080"

var initialImageIndex = Math.floor(Math.random() * randomimages.length);
document.getElementById('image1').src = randomimages[initialImageIndex];
document.getElementById('image1').classList.add('active');
curindex = initialImageIndex;

function rotateimage() {
  var oldImageElement = document.getElementById(currentActiveImageId);
  var newImageId = (currentActiveImageId === 'image1') ? 'image2' : 'image1';
  var newImageElement = document.getElementById(newImageId);

  var tempindex = Math.floor(Math.random() * randomimages.length);

  if (curindex === tempindex) {
    curindex = (curindex + 1) % randomimages.length;
  } else {
    curindex = tempindex;
  }

  newImageElement.src = randomimages[curindex];

  newImageElement.onload = function() {
    oldImageElement.classList.remove('active');
    newImageElement.classList.add('active');

    currentActiveImageId = newImageId;
  };
  
  newImageElement.onerror = function() {
    console.error("Failed to load image: " + randomimages[curindex]);
  };
}

var rotationInterval = setInterval(rotateimage, delay);

setTimeout(function() {
  clearInterval(rotationInterval);
  console.log("Image rotation stopped after " + stopAfter / 1000 + " seconds.");
}, stopAfter);