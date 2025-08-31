var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMpGziUnOOkROE16vzco7uYT2A1UlKH1Tpim6dn0F4vxeErImPWpOosiv0DpXcF1zKZPOotX1DXu7YkUeGPCJs0SA0DfrXeV75vCsPheAOL-W8Bsc1b7J7-mPFqMT2_AuszGdRVA8gKegovmX4sLwIA=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNN5YgboUcOPBAQIbV2isGZQH7fc04hMR5rfD98HfSjjLz2X9pxe4383zTZcU9bpG3bojhXvCTZFUsyHCLDNXYyv6eecn1a-WMqNm6LXpZY9E7GBp4xqrX9OHV6Edi_2ZzvsJcyUj7-NGOOiZ-s0ez-=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNMuWHQ5iqQ5Tfnf4tbt9pm5QncePg01o5dqLHWendBxW3ZHHZ7XrVwBeVjiSNzvecK55aD_uAkja7LzBQa01DDL5KI5oFIX9bC8eyHKAOs-xAJ0CjD7VinxLT63mLBF7fpfMJzX4mTym3gus8DmPHr=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNNkG_s43FeXniM-J-WLDE3Jq6seNnFaFuq7Cr8IJBlOO5vXTKBkSM-ACdsx51lQjqlBEpZMaDKC6q62O3OAyZXCB2sylZ1riTu5EkV1AjDMyqLa762IIkr3dD1Jj8yuYmRU0dwo6w-D8_HEFO4SlVe=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMsy_f2j6g14IfSY-o4d0uJw3jeQtzrvt0DnTcMd8YHo5asZvrObOJKxLB-aZSXT03HicFRDXFR-BLwQ0M-Rqz_YcG9W1cY73AqnQjCbEPWlY-IYzxzFHmryrBfrFtxygFDtlmgetF8PeRz2GPNQoCl=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPmaJe2pw5i8j5ArDxw4a1YHfx3Gr9757Ff2gjzvdU9HGtNtIX0I1iYrdXqEdTthYu5_XEeyu5Wb3J3Dg0xjHrTsJz3_L2Y2PPvzW_pXXTDRjuX57RzZID4iTw1AF7B1HXmbEdbSf2N6sfFRB5Xjzjo=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNIKWQanxmaWNepsIqbB4W7mT4CYAz33nRYP3EBjjGnW41dq1WtDyipxX6GjuQeW8GQgm2hQ9U5xRzyA4utZ_8Y2wIG288bY8naxFIxfPBOgjWaQZoWxe3vbN6TG8dLH4thdH6syd-EVvCeQCpvhLLP=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNq5naUhvWAC94Rk_2D7-nY7jHWzyE_SJHJLrA9wx38LzqFU_gLvMJbrxjasibLVLv5fh63_IYVZwvO-AUHNZWEgv5bavHLZMkKRpVXuno3WA5Sl_S5YitXjOcXUXP0X8d1f5rHIS5fu9M963Hje-tg=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNtgJOA_qy-FVpmnhk-HVG08FZPMWgEf47jGP2hOEbyzLJiZz_IlpNxIpGG2cuyVxTUpWTSpyKBKdqPxFWIVllrXP20r5gVF-TKDELV_BAxZ_Gpy3_BfJ7xsmgEvAYbwtV29E9iy-Mbk2UkpgvrUrQx=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNUfppst7KJ2qCMme0P5Ai-dlEikLe721mhei5snn5jTSKwfOUtxQE9erwWTeunA8EeCK1qHWq-jb4ydGBR8XX89qZKgqK_4kmYQXMU7HX-BjKAVTPnF9ilP5amz8kRNEDfzQVp3qTXEElLfq5B4NR7=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMj9HZ39cabC-xCfZF9S94MAwCxoH7ZFWGVpQrTZvEGbcUVrHTB22zYHJtNcHhvuh4II6S7M8v4qPbeCz_xMuxZF1s9EHiKlLN7RXFDzKcLzC2J8wg68GeYkS3f95yxVBZIXzfEKCT4r1g05WAEKWy3=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOSgfxbNLVL_ZGELak-95OBYLvhnj2dnx9VfmoLgG31rXSHKdH9azNObTAS2WvtsHpSA_gl0qc_4Loz07aGh4ImYFlKdGo5c404LdzjK4cE3TR4ibXH0Xi3s6N_rbGs13QX6Pj5GfKhlf46Fj2uEaLr=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczO3ZaMidS4SABL535sIZ9s4db0QPR5P8iIYX7sISv-fobBIydO4hAz9WRR8736vjbWRLxCI9DcsDy1u3ZN9gazAfzWvTNLBDVQQtKIvC__zVEOycLU14obiDtmH0AmULWJAkvfBQgUGMisofwkntF5r=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOsNJjqchcBsmt_rpF3QIM8J9CYKooEFUXcIh5koOlTYoJItSb2rrzboLagthUDXbo6rZh4XTJwfxq8w0wD_Q5RsgJgzz0cAzqtA4xR_8jo2lPCnaaKcnBWnPBNwiDSuY9fFsj44epAPOw7pUfZeQx_=w1920-h1080"

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