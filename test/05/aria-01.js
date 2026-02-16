var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczP3zETFq3nLzhMZnHmSMXadGkZNtaqm1VH0D2jovFog7GaamsrCphUgW7vmpaLBk9TPfU5mZvychfE7VPBCv9zlTFaQPqC-ct63BfC40b2_mm6gx10COJRBDDVQ922TiygPX9sSF-CHOvAe0PO4Lvb7=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczONRBLaVkcRHEMUc3_WgubD0wXkwshmklkxugNGgjr9OXrIg4Q7l44SHVunr4sfAGyWF9M8eZX5iurvQn4VswtOTaSP8hgg4iFCfnjnLdHoc-dda0Q8fnNGF9RRU2qVdff6Uk0p9QyRkqOe_KP8jw6I=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNo2oPvtB0b-OB0qfVVxS5_HnIhcYaukLXjG20PU_tWf7TIYe_Gq6RQJJLAU6LbBSWuXnuD0xkPMRVeMPgzlwBs67BbIj8Dduxxx05thwcgUZz3-RcCnhUaQoOXThqK_vbHcaxSmvc8zmtNuVaxtvoS=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPOSGcztqKbX0XFaoNRlPag_0UOgKyMhkFX6A9Yu84yQIga7nJ3Iks_Pc5mBfFmcHiZzwLjLPl8DFq9dr8EhFm4JK1e-lo8BPVHB9XddwJ4yjz-4aoI3nqYDfx1KKHn3BAzhscNGrVMbJj2ZwyyBE6L=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPTRQDlhfH6etgC4CJ_8-Z1ufEZqFDiToUFkwjkM3t4h-DZ8qoPNDrfrgFJq3Sizkr8XhLeP7OC86KrIXXNH1EaZYRHIT0-fEisMGygPo0TxEUqEFWJZJfwYCUfe0OYYLLJVfYP8Ns2dhgIDw7eU_7z=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOl9xbNnVgTptUpMo_PHUj5fqxTFi2op7dNliQ2W4GVdPD2zxl0hHIxlxmoqrxz6XoMEKtUXHSA7F2JH4c1el4TH5q5xu1lQFBmcK20BeSBkGYWFURNG9VSqWtUmKjiR9fiHh82NQiAFrjLAalo6kL5=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczN6pC1a1FpuSauugriPWNKnxNZx8_Vq5bXRkHx9TXl2Hia-e1DAemY23MMEy6irIKIUlkICO2ROg4eAUsVbhSYOYNkI3DCt3fYGjlWwGWPHfMOZ7v4nnIO-ZPr1lXEyWbiqFt14p_NZtL7fpTMI_xwU=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOaQTkfd2-GstLzFw5Zo5gqKCF5TFkDiTMF1BasiWPy8xnXi6K6cU7lhLEtnifKssNY1ZOC7c9LGwoOYLhAmqO9650YRvyyGizg_AWilZayraRro-csFNNrK5717IyKgik2N820LVMNh3dtXW5otoxA=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOElf-jVAmHqhZYcX8ejw5YPOZQuOtsyxUX-n5ry56P7pMjT4G3ZOcI8qxR5Fvsf9GwR0627od3YkdSBXp_C49BYZwmeXNents7FFw5S0iTTegYKm3tHTDJdNvv51FhVQuXm77CSqqMmbLm8CZw1cDE=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMxPHW05-n2SGEueWQOFy0Gx7dM633BeAyJ8EtrVO9KPed7bGa1JvrlqNRLlZukSj_lGmh1Gli6-EOJGughxFE-cOPzNHkHc4o--w05V9HsPxSmKhTrOJAFyIRKPlXH8X_jIXcl8u2ARlYJK4j10Xf1=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMAbiRfmgr-ttKtMF57J0lUYRfEgHEaAl67kbtauuKQzrbhFHj_EzQXiJfHzbeQREFQirmf-y6C915Wj_Z65iESDXR3yWMXMolaIb2iXDavW7nTVNtes0koUDeA2rHSId_SKSp_z62H5Zp0KZ8ovUed=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPsrBDtbvvElxgyP-GYRraMzeM4V4YGTIW4GL3igtf8eeBwhbDzbhVTrySMhvxMvk4luLSUcjjaLtNx5V2E6quemFQw4jFYpVYIpYJabNMaOZh2xVWAQGR9oyVxIsFBVKTMKpTAp-16_Y9xPaMCA4dw=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczO-zLOUX5YN7VCC9w1dVCx8iXS37Nd1zkG-CZFWyzGgPFwMitk_-1F7FqhW6YzbJCAVYrgyeqd3acsZqd08XUr32CO4CtljU-_eg3B8bg0F_5aTpCCOyRlVHXcPih4VTINI838ltlyzRsL4z5HgCWHK=w1920-h1080"

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