var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMaBlbdaiOrruHubNIf_rHJsFwB_Rjoagl0LHnyb6uf9GQFE8pTAgMXSqp71bR_Ccq8luTI7aKNto-rfvC_2teKzFtAXSfckERc3yM3k14ZPp4mIcIUTPTS0A76kWZGAwCIg-aTHt6g0XO21idIIpWt=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOYochI9996eV3vE7rkQzKF4-VRztusEebpdvDRiTDgyhgLuCL1K3DjQk2MD8FyHCkPyLwgd4RJGCC8Sb4pPsaY89UsjEG6MmN_6r_C-Iceq5fh1sq0I8RZBKRzyjA5_9SUePTwz2IWoSzu_w9HHdyV=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMH_k6dw8yhmJBkVHU0WSs9D0lxriaF3DqVZ4wi1cQt1Djln6xF9eH-OlkEjuvZuLusAPWeQT1-R_xkp7CQrpo3u4Tj6AKsZe2rk0t3LvQLsfoete7Oo9rwac3xQEM5aKT9bneHZsXNnqTstGV8wrF9=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczP8I_tmhoXB0CvA-PN4yi8jS3phutqvcurfArk3G2WOCyo9H5D6MfeGrogQo30PXYQludLxsOvL-m9j0hSOVltD2LknOPOn4vIUsJzW9GhDVmSFmw3fqafotvg54W-F1keySJH1AROjJsocGAru6fZ4=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOYgD_R7kW02pNaFnL-UN4_EQMoHMphrZJMezqAqjad08jy_y8TZIQ8CrOWpPvS7QOvsMq4vz8AE744CletYFbIPgHFEN0gUKgSA3ll_6FDTuGuG48YAI-JTUZ5Iwq9rYL59rIaAvWlS-y-7Aoxs438=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczN8PjGqFy0wsynXU4QPN3J5LpAyA4EjBGvIpuQXdcwbJHHtuLTxgA9wmSynTmUik4LpDiTPt3GjuZ7Wz4gJbp5PI18eVajcYqXxyTRKyUgbtY3G4cLLuP_Jrxfx4KRU-HuydXOwJ4QYiyzO3UFGnZhv=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOJSWieFNGqjbBxUJoylNab8e8NAuFu8COLIWTRyyQrkWz-g7mkTSXqNRCWglrQVWZkKKMl2-7uRRPT-5GQQzNZ0uwdyD4BsQvXe-eryUcl6owwRNbhQYsEZ9oCN53A5iK_YhShXUZJNlue66UIuG_J=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczM9QSaoqzxZ1K54YIB0ncZij8YTxFhwNOhqoKZU6hNBuwGBU5afcuKTcie36-fo5saD1a_o9qmzUANES_f86fEw1ofcam_Vmc76UmihFBtCLQ4aiOfRPyDaYCjwowPr81YavpycgNgeqIry4CRXmeIO=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNwiHaYayRVcNmzVZI_QEC8xnAzTm3HYAqC23kdOy8TPM2ZQlotoU9GLj3w3ecev9FblyveHknhPEuVAHRTagKSljYsvvzyL072qwNYsAE0qFuJvWd2-4_xJaTy3sGpokDUVTOxgDciNMb_RppX758G=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPAqBBr0tMxSWeFt6NSPgg9BFEh-NqW9HWJKk-XbNkOHALwtIMu0Hnw4AepWOPjjdHGYzZblskoZbD3VljY7oNIhJJnetQqtSRiacgweUsw2-jz67ws-4r6FLcTWdW5b44B7pb5GGYw4k8bHl_umdHI=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNtSXnAARHrqRAGAHE49L0KpHQf7Uretasr-TTxSC5ikMJ37dplXMKTDYIq3jqURDrZ8jbvVqsI70EMHih62T9mTjvaJtUJxQor80SKo-qoZ8I1oMgmhuCwx4aUG3L8epjBjJW9CqBf1qHHxgfAO_Cr=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPH1vaxm6HDknyoLnRPR9DS-QV-YanoU2Ntn--nvyeCqrVAGb3iyodBMIp2ZoMP8ehlHQt3L3HXKHA3b57HIVb3p4GhCfeD4a7a9LoIx7R6wCyOLU7DmqQuI1pDgf-9KOIjCfQnybSEXt_PN_y4uoNa=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNDcOu326kt5zLaA0Kf5m3H8d3Af6orGmNnkwesBOeLSPqcVlcnKFP79aM7a6yr8ykKccw0X5w8ZpHVSedjomTTSqYWw6F1Xc2dqUcuYtzHOg920S13J-4ND9hMPF_SA5db7utD1AdQq8JhuP4mfvN8=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOV9oegQkuncKGhkzi1iYQ_KqtqdTtYlAEL8P8wKy2Tvbu-SsZBrrPP27_BP9k3nIMiEjd9ctbz8NfpJVO_OdZo1WnLljpqhSQmtSBvme-GVbVuv__6bc6dF_RRpr2HMjNRxm6tA8en2MHBh74qCkAf=w1920-h1080"

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