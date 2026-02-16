var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMtES7qAi4efAKilGmtH7AD8cFzvFQGjQ7w8mE471TsbNtaVabI7xWJtV6-JbcAS3b1jsfbLdMbwKwuDLl8oIWAB4g-n3ndq3e9dDgviwAVp_8yW4uc6H0GuVsH50hqY8_zregHGCBCEzN9xwZYKRHe=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOGqzwT7KeOOPnfNujKGj-ZZj4Sinj-sgnOpYa5krx1SLTKc5QzCJRx7QyEUQOUWaVsRb-AzC_xuH3CCij7ysKN4ButkufcdaREKe8INh2QbQOEQPxK5-A1j-feXFp_SFa2rR59Nh0vi6vAVIHcEF9A=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMRGRG0AuSr_71ZS3EE19P4ZkM8pohwNMyiylJARg6LK3Uj4irSL6GWkguXYrW6L2Psg7f6na_GMDarKTHajPQJYjT9Nab64bWkQEnkGNC35MvtZ-PPmUyiYRtMhyKDwh-bnDoaoBQ9jygYFxoee_gD=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOqZpblZgIoyYcfxgfLfOh91DifUYrRr_7Rlfk5ZP_WM31V6WefPBZkmaWimzCpDsnDyBZpoNjLHslrxBX_44sAXtnBLONKt_FJt2_NYAHWyGJABi4sFn6i2eF_2w9k6NozEUw2KAf1sj7TXLWbaonU=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNt7k_ug-XHvI9xyag5e4xhFqsXpjInNVV3pZ5Bm9nkzrWq6d6KbBV_cA2gVTQiBjVFka8rLZ5rPfno309oF83r3Ztgs4UTYHRblzHA2v9WF5v1lp6NWDC0JTUW0wlg9Zpf1fFt1xXuuFennkh7ZjUe=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOOOlhpH8OVQY3qcpfdqIi1WtG73vEBf1Bsnk593bt6UNs-L5zzS7KZp7QQJEqSjLroQnKkGVB1oL4lZvhkwb9i1D8tQLUNEXR6JFKYC9FEWdtnxVfx_Wrx7z89gkMPc57uCWYKI-CZyVuAks25stM2=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNzSXGc2yiiS77A2ck8Kd05tmG3L4m8Z127asEsCF-6GVnJA8M4yyNQJI6j6cy3O0cBRg0QMn4rA5w3Rg57dhNcZEZNNdSe9rW9CVrVtv_TgvH0WnLorcv0yp5eFAeS06AOnR7zoc5_XZaFrqqGWqJX=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMGCXUswV2-7rPqEM2R81idGu8oQtWudNK-ZuX83hnKhjqjBmx03i8oBIgHF1np921Xs8PjxKfTP3_Sp1adEh71Hunzj9BQmqKqoqs-wYkHbgBJnnV9wHNY0amkRnRUukIAFbYB78GCNve9NaR1hu5B=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczM-vZDouDGfTof54mth9ZmVdeHPx9AM4HCLj_ZurorPJXw63W4-q25PBrsESbDKSzdN9he3PYn8FG0ARAivi7vW00MTWCjFEr-KMhWLHMzQNGznpxvBgttiZ-YV2ujQbk3CQpu8__PhRxtSv9QQlAGx=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPcHeHXKBH01Mq_mfieOeubv76KYooTWTrqJspiEKBS98BBBEXSMpKsD6Z5Cm5hdZj2-tR-IzFYY1zgKMzFVnlEJshLncwq4JiAS-27Ji9Jj58bfKGKkmfkAQu-g58R7DbsFaL04tS9tYFgeL4xDajw=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczO__8hC9fOmVg8lsKj2I_8bADC4GelsJKlZOh3rn6Qqfyip4WLP1WhtsTPT0aL39ZrSc6lDX-khOHACbG5AvNPMCYhKXOk-zGXedX18EnUmxo0bGI4b4r7PwG7YzxZRCct0hf9CqQSnomSTkUjS1vn9=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOhFUBCENeMqPOdIbR2ZLOWTPfjXfqT7f4qaBQUyoyU9BruTN9Q2QSAaMChNR_MfZgGWk5Ijok2c33fE8oEyT7wlquS_ChoIAG6ULRT3YLcxro4rAhlEmmwgqJpW_DUyDZpBpeC2vbnso34vq_H4Wqs=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOkf64LnqYiUflu8jt462o8ud_2jkcunNfo9Rx3CAYyd5mkOeBq0InT_zy4Q4UQFhHQZ1GpEeGNlvZf-qFa9BTSuNjnhKylEp2w2FX_e1AjdS_mdF8rT46x8gVOwu7kYQZ1Giu1HNA78PI2Lu6ZkILo=w1920-h1080"

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