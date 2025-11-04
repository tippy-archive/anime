var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMGpdWGrt5SYAzT89ri_oBJuTi0-iOIvFM1PLIDk7BOkDb42dP__WsUs0VaQ9ZD4nI5JrABMkxXazQZAXpcZR9AFYlE_JW6MkhM6HowbM-n9UGE1Y32OmAnKFZj7SwqzHvQjj96GJn1lyFMGUu0eanQ=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPWqaKQyffMX-3xf9zmZyAFyxRjTsDWTF6DOktLGgu-ShvWb5jN3FcmlA95RZfSKOQL9dZaFEU6mVmj3V5KpBPP7135v0gVlcWTh_Uwz7eP5lw58C8WKh0UkknGJa_f_t8rTOYS9HAviKJWYoin0LNO=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOidwXSDyO2l4YK94g7wROnK0YmR8mde7HRD8mbJL-zG6dtC_Fsx1CcODLFEimh1z_zzRfO0iuuqUywbQhmv6KXUc0OeLaI2IlkIvOmt847oI3R7xgtKnZSi22wmP59MS46pY2k-WNmJk1-9CVbSHyY=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMsUb3TIwRbf1XZkplwFz59q7GpFtXkVpbh1hjmxdeqVdkAQXRVZ3yMsuTJtLt9IeK6471lYDT2NwTghpQaeeKUq2QaMeezqNh0VHg1JjUSpELYlNFwXz9ocrku2kDJnJB54THXdCwut4JzNws0k7xT=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczME2T5jR_O5QDewHvPgioX7SqNgKc3Xho24S7nq8_4LdV0YtRQbpPi_T9LrduJoQd29RwM4TTx75zpeOtHlLSn0uOKB2Uqz6-GaayT5gkddPtpegX5XVk9OXrCHmIKcxXowDRySYNavGJhSV91s1LKN=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOF3AEg0WemLEqrxlHmKa_E0SoXI1GYETapUXEDYWaCKV33yp0Lc8xLVswCZ24dBHW8RAYUbKx0BD7iGP38Rwh6xyrQgF0aPJaWWQnDokHwfGFC_LzsQRCLFOMZDVhydNSKkPRXviW5Rm4sjXh-NpxH=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOD1zaFmiamZnyPUoa4vLuZXTU6-wYA1hr7pXbDFJEvHFeEiv-KLtLYz-HEQT6RKw3DhtzjSmDWombiF4Rg6gIwvnzImBh-Z2hl8tQ0FpgPz2lUCi64G4Kyy0r6XOHLIF_yFipf0BhwKrT7XaI7kJb2=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOQWK_zPBH4LiIsF3_8gZ754yUQD1VpgwheE9Py_vIHd_zRJKmKSoOv3wFkw-0PudnW1ARs-kOFBp_2AV_SNm8ydyeU0CqPgsOEE1RpPA7OyRMvf3YT1KnWr4KU5DcsFkODDj_3s8o6mX2TZ6bsHDBc=w1920-h1080"

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