var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPXRZZUJhl-dKdJpWqA52r8yuzuuV1gjfs9NbHmAKEZwF0nQ_PnYgyK2Bzwf_AEZeTgCA2gINTW6Q0ST3tvWkhu27uEYVY_Ql-z2gM77izlI88rwIAYucw3xxCnXMRadfFi3s8jTPY69cArRAuUVvFY=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPwd2K151s2O2e6m414CzqvsxftVpKH7YORWcJ0B5lZd6a_BL-JvRq1JChfqLhJfisqEgr5-siixyUFGNpGB14McfAQaL6w2Vsr3UEF4ccL4G5UVVVLDpIJ3dH8xy6pvIzg45WIFr9o56YPFteiSibm=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOoSDWJvbtT7ht99mLU77OMho6ycw8L2VasY_rVk_fCqVSxXCEZx47KBI9gyAuSa6QdcsClKm9AXm49FpCHjg733KC8PUnKfKqooLg5UX9UYzDPzyT5sYdoolVrva8sXB9UuE5Vr-P4W-MSDLKdflLt=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOah85pk1inJ-XrUP-mUUfcYztEOKo2NrUQNyr-ly33Z6wCbWmgtuDusjccUUe5O2uM1VdMVALlXw56jo-DQnDzwN_yOQEAGlfuQWW1rPiAPsyg67sVFvKmh3EL2arkAiSeZOjsXUtsRhr2BsMXlV4E=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNm4bttYWEiMIc79oJdiECfQRLZ3egUeaeGDlb2k_jvGILIm6GjNUZ-cXe8k_Gxiw1q1AFvg-AyPGoeGteusqiULIA0mvphgZ1lqO1eRdg0Om8paETscWIs64rzdryWRI8KqZn6wfLAJcq0qCjZYIQb=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMof5yrtyQ-vU8pbaHwDtBZSqsiVuUBw95a694gQc7MLdY41rWHqMSWMy5F3FZGI5GNd7I-F3Gcu-0L1QUkz8BOtcUH-ZIAPViWCsmcgBZoedITklL9zZn2a0t9LoB34uGpq22Sn-LbKSYlTBTJUKMh=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOoECNqaqtGTHY6c6dTapJjTrDLw1bkww3ussJs10BlYLFPQtK_ZHgy0Yb_9bjgrbiVBDzgUmtajGV55jPimKMda4I3V0KvZea4rr-c_94Wh7eTtlhp7paTeT4Grt3gjV6RmIc_x_XUO2OexpOPAz-J=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczN15yVrZ3emm6bmAOUD5xpHJV1lm8a0apgKX-zOoDpuKMDoM1vQIpLyCGouEAusb0us8a3GjkeGYVomEh6k6h3fwHsgQLlrQlWI8VpSrvJQxwV0dks5Cf8ejfFgkNaD_O9waz3eFUe-fwIFfmPrJxm2=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczP0DWxlnMLG4_N4w_3iAYJkwVYDbVCYz5wmUYYBM6MuIDEgjmmcD2sNg7b2kZ9f59bogokUMOVvCkMmEtRGa7elZF0UB3RNpoUInEt4P4e2x2Qn-y2qwuHu7avshX5S6WgKkx_VT1uXVnuArSUZV6Qq=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOixsjkohtjoz85NHvAkq5aXL9TNYcZEetn-euiJdCcaXL6aXqQvETf2UqxK0fO_jKj7_WANGuhwcd_3zoP1tA1mdSzSUWkjsEwZZLUgDV9B6HDCxPIcEn4x9Oq0xd1b3HnKNJ8FpBqI84U0cYYKWGa=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN7EORmEDzkQn5yXi4wVzYsFNaWZmxbeXnjjN0bATgoPDOaq-eU3LJ8HZ41PlJO1uZVuC9icCc8AWCH9uBqbPPia0RGsSS-CYfQt9a9sKSiUMCL_19jWO381Pg8sS-OKaNYYIkkjE5p7ED1P_zIQzlf=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczP5GplM80TKROY7rS6MvF6ut6wiFEyZxqU-eEnewo84RwW9M2w2puO72qHwcYZwdEaqo6XJC6T3nGHVrhOg9aabZiorMdFhDOj0nG-m7xF81bsLvJ5t4a_tfPw2mx9g0F4RpjWk-KeBiqrYaSvoO5_k=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPkJEZDsDclgFqWN_KeesPlp94HEJ8QHDsB4VAtK4gC9YTQ7X6GJ9JPJgfsOaPhnxYjVdX6ZkPAMOo8e_KxWe-rYm2QZr-uO4GiuaHIE97lQ2QXyS8LiRR2uUmWtSu3-S7nRGAT0vIkxnH2oK6JdYEN=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPBIhv02G74HoVQhcAoBOgF2qhxDUr8Gsv5MvYHeFP_UpwTx5yywVihDsYUeadonDe7rz8GaE0Pi7nqh_-0wayK9nixigo4caxcr4Bml-AXvGmZa6If88eoUuuw444y0G_1uIC1bZNoh42_7FTZa3Yj=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPHvW44sS3yYIuXA2-i2mjn8bHlp7OM31FR0tAsoku7L_vG9TC1eTBlueCnyxKZi6n5IeEsX2xyb_qyBZKO9xGVC8DpkoLo_tSSjdHH0DIT8TO2gj_l5fg8oVBFULw-f4SACeDs-Ho-my0QhqtRZPJz=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczN3dlNfiW5rWaboGnrlv3JsVrBQMsIZqAYki_WWWCSzQEqR_UV1q9w_avDyzxDF5jhvFwe-i0U4gWlq9pEuExJ8uxMfH6ygP2D4ATFi5cASfmEY359oKdFEtg3uupv24TxvvGav2Y0l8IN3HrEs69JG=w1920-h1080"

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