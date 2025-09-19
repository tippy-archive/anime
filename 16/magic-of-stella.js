var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOPNc7K_IeEOG0h0AhVh75gNBqS5Q8Y3tSy9qMmxKitK7NoUltcni1mCBPPNZ02ywAU8eSVp92vGXPtrorX-0hb0jRNmZtrezywow4hd9pEF--NnI1xTzlP-zNzqq5pI1XDg6XUVfTtidw4C2hwjIMj=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczN-SvQt3VuRdKM5tN720dguhEEhYVKpu_luhReg12l4hOEYkfdbzIc8y4z57Sce8LQJdlHRYgB3EXlnRdcocK0gCbEycn_h1OP0mtRGIOcs2BhIuAx7oDV-7wJoY0j_GRvt-B6-0TSdbDw_pUnFVRel=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczO-y_sRYHVB8RYTxMI5NzMSuDyQHZTvSpuBiBhFtjvQVYQGRVNZPgRyPJb2mWLS1e_Sc1NcicQnpb5zDomjrQTJuWyM84MysOJY0MZ3HEAIF6oBJqSP8LHRH5Jpr1BcH-MxBnsVoQKBYRZWQ956QdzZ=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOcKJzS3JRmDWj7Gdlm4EwNIVlolrFfD64Nw4gLp5cHBJS6qeQYOD_BKjPQpQeXe0CuQ0W_uWBQOs9ZjknWJbGGBJF4oZ1iAiWb8kCJHisubNf6G-_9VvLr4xPjrabFgf6zeOFpFB-3lnFozIgOTeYC=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOp1fKW9LpMC9MLAVCthmNOzgNCRhzFIyktXnB5T1gxLa-yxBT_f8ZGzegucTzoEoaxEFhsdBDlOsr3MVSpwPHVY1mjffHz8oQzriY29evh-DdhuZXlY66YOw2_0RGqrqNJfvQxUZ6teznnKLKXkR-y=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPP6tvKxGD0JzykvFGyf-0xDljSwaJVKxDRWN8y6SLn3Ghjtbk0CKSYlRvb3ROkZDOOJ87uOsgxX5lpPCPZ44KLQ2VbhpJapPEsxYke9RQhQY6d6AyJdxNjVlZ99FzdWRtnmfPtOx39DOddOSqoPdK7=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNcnTHoSEfL3bN1SOI2bjbAf7-PjkOgS-Tpuv7_L6ZzIFBN-3_hXla2I3MBN0sI9wysGWq5HG27c04Hrt1qjxBAjCkaepTHiV1YTuWh3kFD5CZOXnM6tbd9WqOlLX40KNC5Oex3L4iKIB3VzWpcul3Q=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMrresqCh6gBBTWajvL3OPUmgiUG8ooVjr1GZOCjtd2CGHqi2HDvyvrKRfwmZMY8jBZV1y3Y3WOLPiLtiSbzCmNVJBYAmXy-WXEy7ad4S80sLVw8Oh25q7O4ShFDPSx6sMuWjJJNG1BWoZp0X-WlVCV=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNlmvLzWlh_ldpJJtbzEPXnFh7FfUeqt1J0BtgLSvhwRgO6ZDq7xSy5ZFa543zdoWUW-AWsbwlLqG7GBNYajEysEtFKiXBuCo96VLBS_HnvpraaB3oLsS-kFT1vI8tcCVtFoCuoZQpbOQuZ4X74K22i=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMYbH_piRjWJpxJMLm1Uw-OPVs2bEBzBiAYppsYDJEdcXaoYryylyG5iE2oSlDv2n42vB6UsbxdHAaT716haLf8alJFKtxM34TNpJsL-zRupn-8oWZLYST2PEBjBVy40XBypQtZxJm6TuG87gZ6WcKc=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOyswXOT7loTcrfEVT4YoJSnqqYzBfjqPGyj1jRND3DUd0z6lGmjq81cKOoQmM5j3lB29qbKuHEJ3QMySRdd3uQfmLB29orZV-DKKEJa0Te0R1dmlFCBS8b7Y464_q6uc3-nKA-yW5e4-zF10yA-TcY=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNvQzhjMKbhrzM0lwG5sfJMPB1RH7F0w9LL2kimYuaf6B5Pk3W4_zoH1SSJJjDUhtlYfvvwnfTDi-of_up4lDcl4bksbZYY2hfywDrOT2-3s30vl_R8Qjs4VnMNPQi_lzlJJaSpJCzY3ChG4DNaPP0h=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOfLAMsILPxxwIHr_qDSV-2mK7THvPYys_UkU-9vyUEN0WJrBHmxyYFcJoQA1C50LDaXpZJ2ZCSqPEDZDw0wpDKfxIkr8YNXrCkPL_vVZBWdIKJMFrgul2LhcxmIRJhzb8mxFm7aWnolbZoDtoV0aEN=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOnIryEs1OJevpvOm7xUk1rxAz7zJQMBqhK-SNWbxpfcxROnxcCkMu9d5XEfpDIRW0r_lJTM193pAVPVvOO5jbYQu_rmIau2XBLXVpYcZSp8ujyplqmH0W1dviFeRmrkno2hyxx1G1ictFyCPwcoR1f=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczM6RkuDFrBcHOIqz4Y4RvjfRufpsIPTnm1oWTuZnY-vqCxvzhOV-qK_ABCEraBxZ35fw8veQw3Zy0BVBvHS3K5CZJxZA5rZGcf-GxP5T6wMB8hABoytQdQ_WQChyP_EZrprHaZGSbUhxWDfD3q8V4gg=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczMFs_540OpV2i0OqQ8FpSThLgf8dCo835AJuBHVXDgq5ClpqCEDzkodTae64GgwYdcD3UT_cQcdhIavwuTs6wRIHkjXh7Zv6E39-S_gJYYNteS4w8SDVMG7wq-Iq4NvdC8yNgNT-7QD7t_bQCeL_Smy=w1920-h1080"

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