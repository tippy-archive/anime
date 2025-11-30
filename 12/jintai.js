var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMoMxo5EWAUVgdGHT55ud1aOluJ_0ITXkLl6ES2XLarrJ-8WehR9XGPyNcN7wxcRq9kdBhbiZhkwSybTbAmKXQ22bzw70uHEzsJVo9AX1gCGz_g0itkzqtxcsGwlya4sEyQ26D1DrlVmFTHGPSJ1Cmx=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczP4pL_5HURQ2KHq7bFBE049X3FNLqgNvLacYt3WaaxyFsD5JHQuUS_ch3y-CsTIRyK-6TA7X6xqEbXcN028gYVFjDV8MAs6tQZSf-C3-o3hVpBX0OypYPbntU-NFuCnIhJ5Cmw-_oBQbZuXn14yxfvw=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPj8L7g_KLRvhNKkNLyuHkEO_3sONNcHo377YZGslx7TxB2DL6A9UcwfgkCRJ1iyZ3I4bFtyB4-3VbFKkzxr4gmbbPFZn1aV8k9goWkw_RVylN5bLypztf1VSqVYlAUL7_wENtPvMgXLellMXnTJudG=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMVQldWGDUdHMD5BB6NyOprImMpFLZEfuL27Cb_nMZ_D-sBLIr1viMF88yWTkKYFxK3XaTOQCTfEVsuewyFvCZwYdktTwT_la64PvxMVAYs8NMw3Mi6TgDZOjdPtA9jTPXTIR0MQbj1jAOxNLgxKBxX=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPN3hXF59t0F5Ou8qyr96UtOo8H38oZSex2dip91rraVO6LDMDL79_JsUvDRP_QMzMZ6jRBWBloyS6Wbf18k1w6BavrWTd8MzTYBb7ZaVL98l_uKOiwvVccrwcvA3caYTzZC14Q8S7aHESKVaCnZoAz=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczP0mmd9YX-vSdNp8VL9TvHVFj0_lNwGTl95B_-LwXVwds871KmpBNcROZqu8bgWUOCXdNpcgeTFNNx0y4hyK5zBZrJPsUNluF2thgrY9ogYqQvu_Cfe_QZsiWpmbJcRNQ4lAIFcbevueZ-4RYZLZwt2=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOxLlS3RW9a1piPBpmjnrYQycQ7aD-8x3S6G0_3AboESa_wqWc-qJHQxUZ4Lw2hVp2aYgdMdM00WIizPGB82ZlurE6OuhEIx-R363jdme2eyMwtx_inko15X0ahH2FVu5CuU1AJTYtRDnNlApQdXhuU=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOYyQ4yB6DQfnU4qt0PmcsfW9PWR4wBRfhjudMNQfvL2w6QYW2j6MhWF-qUSA6m-_KlrPylXS7pZigqPC1csJQyWh3v-agKk3MBuwn_rGczKlslPwm0WtLIt7lDuom-6EVKNQ1TMAKeaDT4vJbtCTes=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNw0RZp7eENkU0MRz_iun4LVm46cHJisqVCN4QojiRRZ5pK73oXs5s-h9xr3UklEmlRqcxXRe8DDmFjkDSfmyd7E5M2ch_x2yJ1CtQXBr1iocL6bpYo-zReO2lkw_37U1HLuDINZDREUVyAynT58MOA=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMJlF0vzdPeEPm3mBhiUmEft1TSRgKpcpY6bGvgcKMf6WRFt5CqmeKZ5aY8VzzWs5Q7ykJaA6b7G1q6-AhHReQj0wn8NOYpNd4Sme7WM3gZOtxcznaxFEaagwVZn67KoOrUqTNtD0JCec27eiWoLbOW=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOBWMISb2JJa2jQpYS7e8N9eXu5DRwyhJLEtOCRWjIBmHAiNWXb7KVbXDhvMfgqb75IIcmDVHVY8eKoECEidxb_M7wyPtzH9gxjZ3JcUKiOLn5d6npw15S3FsfM4dvnVKlQPvO-JaDDuLAnFWkxWNsm=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNG5jMV_2Kr-IJaRyY6fhExLChjqSWIixv-w-642FQAY-mz6Dbb9z_4FyCydKKtrieeHRw95PH86XB5bVa7sz-5_fd6EPbpIEtLMWJin0O5aCyAtXbGnGrIQkQEJhIaXpvueuBbixZy1rs-fgqYMntB=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNZod2wyN95vWGXTGJYL3QJG1VnfzBeCMl6EcOrG1ywiChhvxVBo5w3dg4QwM_dXYvlSj7BnKr-7EnzKZJ7rLz_uJe7JsKNpJ8a7QmEj_64yrYKodEEch6CW7s84x84XYEBwoPzdZky6lCPoYtTWx_N=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNofHR7XZOKfhXJw7x0PoI2da0MQ5aSDVOjdFDNZq22oPxOUwFHsH-IYDaEkYf337WgLFmD4gEk9yw9P8CdvaiXtgrzNXcfE23cDb26c3FTHEi6EMmR4Nx7E0UjBh9bAVML7AshI6YbuRv4680XELQl=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMVRVHcT6XaLaAxgXvMGzXv4j-1rDBLnbbiMpVSrTw7j6zCs18TtLbIY9GCG3aD4pd4mVqcvDGQTBG2zCQGZ94xrXgtdc5sgVilNuKR_WVWDhR8Qytdfrv0J948eN3hTtsNKLcnnmfq3wETZYlHl9oG=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNvAFisNRO4riL_n_TJ93rbKwKzbJ8zz8nQUKdq2ub_8eR5b6xYOPDWQMSVVPaIekvfTWQPuWAATdURAByTFBgUV5P13PdBLFYq92Ev78OcOfdDnh2rtZybLjPKa1vxHrajD01r4QlvU-x1SfXdGV2Z=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOV1ofINCea8CfMn_tVnLyAeqPOvVVwiYk6pfFQYZgfnp7i1N-VVmJr6ZrzspvMK_LyFV9eE8WG9SnQkRSDZ_0oMyBPJqbnHnLI5eRPDRtkxhQyqAKo2YYodhGwbFHrmYoSjjrs4bp0IOpDOzKZl-EZ=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczMYIfsC_Mzc0z2MFMBP09Hv5_NA1TtWTPJHYZDfwPODbUoha_4QeseKliYWK-BtkSlCtnZynuYdgI1KUp6uUfUkhTb7PB1_Ho9c55-TS5J-QVXld666I0yrCZ3BIMwfQfGh47XT-rmobCKlF53OO5Qm=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczP6PbAxtBGa7pISqGUtV9j57tuh2gIbClJYZTbJqMA-BoZVMskw_HP97mZ10DZYLG9ZEI12uVjWAxeC6J959qS4vT5eL5SguTEp0DzSdv13ddYrFzOjzZREosDdTrtXS0Ei5nugPdRqeXB3ueJipvox=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczMjUGoGd0Rb8ymq9_x9cGDR_fxcgJ7xFDsNzJzvXq2HIVGDBLqJGJM5e2gNIXrq0puis-eW1LOYcFWjyUEnQOp9qyZI2Z6hxVUSvWipe6YdJXPxQyj7Xq_b1MXsgTdLRfFK45QAHWa8IhoKzK72y_FE=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczOfSi2luyr9rzu3O_5pTn2ZZZurqOficoWYIN2Cc4M_VHBBXo8IwAN4C5glbDCHugF7yOISwrJ4_-6QIoSlYZgirMyRhs5uuh2rSSFKqA2QKAfT_BB44oLmoIICASivDnmM_UbtdwihvbsGDansaYej=w1920-h1080"

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