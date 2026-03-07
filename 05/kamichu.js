var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczN4FDB63_cufbDoGGTe8Vx1hvaveLpcPjUYIl75ONay4cEwEWV9ocQBDKPB9cU8J0hoIbLGy9YRuKPp7hZ1m1WzvmrI_f2ev6oHOEaU97fGr-qxkX5xL4OX_XoQlCN8iTNGAq14smc4aRLaXd_zG8xa=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMZEytPL9CutPbbyI0Lm0WoHoO85KXjorcGxbitTnAq2dCMGYgLnthH48f5t-5zvDh1pRTuGJMROo4x_rcX2ooRsw1tY_QVPjDqGaXNSRN38DHcpuB2XfAatNuoz5Q2Y1PlzRqbDXmTWf_91xojWUnR=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPz9NiSA3wWBupns3kflxfBzsVfZjKQlvEUnzafQF1he8IPU84QPuZyNE14yXqjpZJ8AVWcvD7x641UhyXGtClj82k_i_zX1Tudiyv-osml61pdCbcKE9pGXc-IC2sPog7w9QcT9ZseV5saGkEUFFi6=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOdyrSzQ546uIpYPGj5lAGP-_0kqRil1cFO_7JXIHw-oEA3T-2BzLHg391gHFI4_vBnB_WS_nBMmo1YKG1CcHHm9Q7gc3K5CpXHEhTIq_nq0klxUAOxTJBHTZZ5uZ0JAgAQaW22Qfg4Omt8zvCMgZPM=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPnMyiuiAeJRoY-UFZpYLdgph3gaE6wllC8F9pCGpQbOFLiv6JjT70KSBDCL7-Gpab90mILkzrgJWoLRMKhnGTAWYpelg7ZrErAp_ZtDuy7CDbXhY-28AKKFP7d-diTHC5ZQuMjMGiYag3EPFhLTZbJ=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMU4RYqNCIc6SZLY23VWFERi6_YuLtpzn8z9EbFOOrLQTQkAn58qSTy23KzYaVPDQsvsQvMk7mR96QneNHxZdcVXomkadz-lMj-oay95g7adhl767zITzE7Nncy4A_4-5KutLwkhHiuugv-RCYNPqlw=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNLc1NEIiiS4nPBtDYKiK_dT47XBqV8udmPQdWRVi5tFXlMEHzznZaTcjd6IPqDZvb6zbjrhQMvbNOs9WG043NjrJbugsV1cR_lwpLSLHHZzHlhqaR_3zCMtoOWEfXt-cxufObxR76tx3Z4lK_sYRv0=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMbyPHQd9d6gia0u4GX8QfLWLr2SfjuFnEgWDlVkJPQMxGQTjRLuG0LpXRcqrIyyv2x65_kEOn8-e9UtIHXMDVLpFmsUH5br-I6z_WN1KxmmJIm3e_OfGi2f2vaZfUWjmhMVlwKyvFS2R-WVNAj1Uj3=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPZcLf0yBm3hoD71sWzmFMiBIFikJHJr09Fi2SvOeo8JzCBIarXArEZFhLfyO9UJylIBFP5LabGT9MPc2SZq3ItO8HxvPlzA4a2mhpscEYOlFYvbsIs2yk1_sLVbLT0fPc2QiCKd5oXsJZ7VO6s886N=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOXegj7A_iXhc2Wus_JzXmfINR4gTMRrfN7bO27WMHkn0ROkgJJGsdLuyf9RX8gr7h3oFK11q3J2l0pTBkrFldGuGs2ONaUOWWKtLlf-5Cj2Kmc2K2u8ekmtdshIS48kdBz_a269npjhvDBNmPxxbaI=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPdTjBfv9rUzV0zwBi2lNZEyN-mb-QbOB3uCjDp8Y41zbIW2FrVKqGw7Fr8CJZ5q4F0vBFNkVgoOUYF5Azmqbb8oN_H9mTmnCz76xa5LR402313efcdiIX2LMT-jsOiNpfHCBEyNK6afuLqhYxA65nQ=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczP_zpximYnIOXP5GnHH4PR26cJcuO2642Ucfu0bOxaU1N0XQgBGUSKHh3drl-DOH4SF-1vRdCJBqdVRjWdJMJQpEOTcIE7ZfACwXPqgeP4TNcjlIxTaan9GapCFWRl_1p1U3FKNwBVW4axUWS_U6shN=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOBsSUWNaqF8kgnQGQedADz9HcdEuWSPOilkG3v6vw8-sQTELVPflGrudRNrr6wSoaNarWdgR158DCIj1jhR_cpJgNZzUBRwfCrhTF9brecGbF8Wtu7SwOkk6WMzLWSo3C5XZx_dwPBYZ1XuigQss_2=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMrRikZB9fOgsYAM-FFBRN7FiTVXu8e71ktFFETEct63zbrNEdUfwGfARIfRfM-IoTt0LPLeK0FlYsjr5_695AWgouvYr_wWaW5SjV6dVQvc0iOAWKCsp7yMNmwCH50vdMJCIABnwTQbFroSo87ZlY_=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMxW2kg8zL3XIFKzZyDRvs_lQ2lrmJ3qS7_VxJkO-pWN3bmTYiY1ZKVBiz1jSQLHdBCfpxEjYIPEEngNslekmgoOBGBHGcUDM-sFbDXho3T-voX6beFkT_G6aCuN8IKd4P47Fr9FbqRctQ9Ub7gVh9s=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczO5AjC2WGT9NMPHQTlMHXgUM8crOCPwD1DUtdQuFSeZa-cL5uS2FVqNUkF9ms0xagqUDnnUrZ2vaI9UcbK61x-s3QL1qEQpWkhKa0x9GvMv25r8ofeJcwKoHINcQngTBVsS3OPIlizOsxmEBYvBMQLa=w1920-h1080"

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