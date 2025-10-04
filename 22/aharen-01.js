var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPYSWFQEv2IuDWPiK4_Q_W_5WTIgdgB4GOy_UNE1Ke6zx32LSeGiAtjED80fwdrQk2ameKk5QGh-rPViPRsDP7DzE4gx7eBpfYn3JvzT2m73ldmGMNAE0H80HL4nX-RjIk8AHflfjBpkbxd9gkpregb=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMajWD8-WPvnZDpxE_lcPN2iDjkXDRLwcORk8Hxqzw2t3TArviTjyMscrBMLBVlk8-JY0wnnQWV3Au4Q2MtdQkoN_jSIjdWEJ0O0KpVz4AXhWm8nPKNQuRtMSa8Z2gO5emCD8BAC3q7eZUyDfVv4Xzs=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczN_K38np7mibMBhCSVOYypj4S3_C4alj5E4RWbPvLc0yK1w1bukEf_14w5zvEVrWNIrsNpKTFFwnuprxqqc0HlsEM7z47pWsXEiZFuLW-yRfgcg-Ysg4X7X0qWlAzaHfx0teslJpsg0rwD9kJ4Bz2Wu=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPfYKO2f6Zjn6dDsr7zQiCPpJ9wGX7TBrAQHfZTWOURCkK1wGly0FZgvldYcmiLJhHzUi2kIySyD96-SszWMcYbZGPWdFaMr9n8-B1GkbTboIobAcpkb8R3dX-C9aEIwrvw9Kgt9oatNUkMgEy5kozW=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczO0bLwOm8v3P0iqPUhZm0AGrlSiMvW_7fW8rT8VMiI_kxKtD3XzEA9WEZGiH_QC9e-dngLXC3TxeN5bV8Mjo0vTDRGkRVR_VOWhAaPLY-Iy5LDoYgc1bWWCP75BGujX-HYaW4FOoWzWGfkL2dL3md2O=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNIjyStd20uKIbEh-KF1TobDdABDk7AsRcCfJNegUGtjI_C9-g3iCQiBrW9lwbEEMFA8U8T4Ep3lriMYN4V2JTKE1K0jBlmlxOtReacuVAbS1dymHVfjWK-NuAwofBEczwM5MC-MDFa-L4vY6MUv0BI=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNUrW8bdPEa6W-W24dG2KZ95xBy4rBQRE3YupixxeLBausPXJFFQmEDaPdQJYMpf_SmC9oPpHVwL_0smRa3mHzahwFLtPEcm2u6hzifIKEs23kgVBXKrNyxJvS8JsMuXk2at62Shhhn0XmyVfHvl5js=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMCfKDqYr9DlfqgFtFXUxaZoO7rnQlzSYb0FVYk9pwyyD-wFLFcvyTKPC9_bJVgEPnahnneehuhGpnPA0DPJ4g9WKHsQaaNYnS8o2p-3Mv78YRd8y3OCMTgLrcARLq3lBfE_Ih0k01IDv9ALtBi9yn5=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczO8M3Gw6bPxB0j69oVv147ZN7lWgGPNOo36V84clvN_0hHnbB4FKJ3347XrHnWxX6JHMLAGHOIwFIObv6paXW3ox2xx0yOzRdjUI6i0nB8KQymL-4w2ZfvsNmsgpHhxoV13uOtfjQLT5kNklqf2msuO=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMi0iAPTmEL8GyenEPsR5WQ4TT0bWrIj7Jpj4eo4iz9gx5PCgVr0aF_IloycmZj-B660dHz_ZS34HAgc-7BixJgd8IGjg4IE4l6Oy4fA4L5DcGxIyBuBfKvbLyKHlZO7vgmKcjDKkOYCsYx1hwb0cph=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczM39Uk1MC4v7ISfyFUn4Og2srbynxf0ZYUmosQFDpQgPDIFMEfdskE-uVOVN7NYqzkxa3FKjquOAkAAlSk4em5sIsXXloXUhw2nVjR5qknlAvAHi4hc8iVoCpoASs_NOFIjmsz0r5L3BKFMZt-IQacb=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMvFxOgWYZrkzUNVFv_rCR_WVTrvTdKsijPw90B2Uek4wflh5SMtuZdHRZTDYj7woyIq0sVafCYDo-eVaHl5V7Zh5y4IVmk15-Q5CCo_EUOaApfqyRYHfQxhUGkE9tXGdZYsCWgPkSKlEh15rm0fiL0=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMACW_lxteIY8ODGzsmf1VfKh3-5zI9gsm7Yqhsfrp9zemZQxysZg75x09j2bSUj0J3IFRqHdkdgiTbDWMpJAzhFhUtjHK6qoI_ShnmfDRk9i_0lAmxPV_REE7rDNrYY3cH0Dam9BFFKezH7eVnt7dX=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPrxAXtB-X7OiVJ3uAcEfOyodL8-kyQjxSIyJjSDUApC4ikGE7Q3K5QX7iqve310JtdoxusopYYKffFtOUSEoYvCx4sxCtK5bUb_yOJGHqqspBnEYwwjd5Lscb5frzpVQWM8aRla_4CrguXJdsSxSpU=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczOhNysUmN7AzzmcfJnkdVtiLfrXFkdI9GHKMt4t_KqYZbRZC_KQuZXA03pbRu35sGKRwLw1viZHKyJQfn9vrGi_VZ73Ei04I-JIC4vcN1xTNIWtiYb728Ma850PCbzccEa9yCbm_q8c_zrrstM67fYh=w1920-h1080"

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