var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOup2WgaL4H0H_gUKbrMeXCIdmDU62g1w6sx8xEiDCqCtrv6pcTgrssYFlZZeWsvqFF1xyDXRoY3HK2mPa0_nVVRx2RcDuJ9KwQbTITaEYrkl3DyvAXCMkaCGIO6kZQQ18G4aZQjP_ALD9IlJJD6X_h=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMnsMnBsYKgxALDeMTjv9Uiyj8Lt2ylA_qOVLpSDYEW7hTlt038uTGFtDeA7PCyBv4EepGfh8j8W1KfS6fwi94SJdn9CmSj0R05N_UVxQ5lvTXkasrXL6tafvY2Vx4KkjhCjMiev7T9I1Lcb_PO--NV=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNoLHZdEDqoMSwMfI3tFJnT6kI_sYvaXrSn1BtLnrzfFYdQfhcShGqQntpVRyOHHGBJN9nUWKulVSiFXYAtdLQfgz1PX8wzFinSiofhU7pMHJ07FZbseBKz4Y1NTwLm5Twzidq1cbpzoPVIISfedPpu=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPI2VomalEDtGZK2v-2uZlO8JoyR3n1n2ikTe42g4-DtoCW8nBBA5_iFNuxeYcYdIMwAsYKoXmK_LDYcqASPU5PwW4xug-XkeVocI2G7h5G0B01Hs63ygDorhaJUKVQ_KXW2tERzKGRKpMAnWoMWymF=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPHr-VQhKK420Jkt3L04SUnq7tTyxQm7UtemDtm4FMn81mm2tjveeknnH5g-b5tS9deblh_hlog11kENKIcrux1jcFxa---8CnFsxaQLChXhKI8Au_WZH13H4DuhCtYCFYN-3V5Za5Af0z5MGCTAbGf=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNmQfNsrvuTlfRwpOuqwk3uQf8dRgUBPsxgoCTG-Z7DO7kEycQfdBubjnL-fFDJSHJZyj1X5BnsvEHW1_cuUs6GV3Bk_UE4aSL2gEO2NqvfFN4tlIhHhzvO55-y2Vm4goMjKZqrSRuYqL0hyNzTm7Wv=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOB6DeFOhFePVulXDpALS1nvfgGhxGU2LFW3EDVmeptYYIRfnUyPYjSQZGv9jzuSkbuJgsYpD2jHAxGrphSuB8cv-NFT9ciLRPKKu69Q7fPlBQAALGq5Vp5yjgcHdl2_6JZSSl2z720dtG_qNNAxlf5=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPPJI4KA7rl2xRjP7W9X0RxNDNoiRJs7wkyEOHTt-2jgjkW3Z2iiiKv8G6bIsswoKwil2uBLADsv5WRHJ1TPDqABUfDCq2ZFquR9xoY1SGkbdNX3Atu3M1w59WCWqNyyFo8iwR3LwIUVJN5GrLwGt8C=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNM7iSKtDzEVOg2e6iIaooKKz2FUcye3ykRvLPCpyjdyVWkQ-I4wZIu47QS_oO8Yj7-6IJ0ax0TcKDHwHaqHpr7yHid9xQqcVO_yIBuAyTiz9jIkw9EKGQdyifd7-7cVXL4PeSr3_PiLBIUulMa8Ajn=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczP3xN9qqSJCD40ACqvdwCQe5kcqfjGNLibWpYvdATNTklnqasXIT-QbskVQ1NWbdTvdQngOKPHyCESXKEtPk9BwNEEXIusoUBHeurWcs4qX8o85i-Xgt-gyG5OddR0VB1RWc8VWgqh_p8p9TOno3-ne=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN1MvRjWNPfEn32QpkF0MzT_WOTguwsCpOju9NUu25O7km8jTfde_Ynsvbt8kQ2cHVurUnG1IGbyOuhUXbY1o6T9RzoFknnFxILxC0AUHPQZuqI5Dh0DLKY1flskotv_Hi8Q8LlEqu1YsmiDlyveO9m=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPCF33htvJycTtWY59N7P868InG9dhqne7UOvopGG1gq2CubibdKf8E9D3UL5nnA0Pt9Y1oL7yIAsjrAubIZ-QSTIfG8l-sje0c59_jVx7hyyCaD9VNKIN5K3qcGGBeRFv8_Ytky-NXqb72rVxveHoz=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMPF9Cj1twgXS3esaxXRTpiMEgtP6EvKTQQk-x9metjysHIZwr7OdTgtyRhPW2H0zclb7rTRUtDTYsJvbSqKKm7CW3pyD29Qa30Z74iTWjhy1hxG8eslApmjbCGzQlbT1qYUe4ZAjum0ff628ga5Hu3=w1920-h1080"

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