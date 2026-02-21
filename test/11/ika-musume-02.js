var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMRZSQwERSc7F4e7emyudJ7r_3kAH0kV3Nq0_CRjKlbqARKHqkN_nocyGX361g055gfQI2qUUt0r36Zd90Z51Xw174Og8YQVpOZuzMI78Eb9woYVqQ7zz21N8sbkSAlx_LzY3GCio0VVSXUp0Dk0e6t=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOUKdPmv-3Bksjwi3za79qxZxt5nikGNh-NgUtK7ygeGYW0vIJ9eRgauRRJ021Y0dw_OtQWW3gYZ6auO_Vpk2cncqMuMcyRcO1P43hdU8k-_yVHKFO2vbgWZNsQW_Bth1LeQgqWHNVmzct7cx1yxGVi=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOFQVklc67mZMP1Z_OsUBjQCenAWBZYKLESS0MMH0pvYTjMtypWUzPRY_imn-x-x9XOhLPhF5aUs6pVEuPYdEX7M81GYaS10SZytY_C-MCFnffoN6PEMWj7c4kMEBnoJVGUqSDh-lcpjUcu8-bQuGcx=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMaHGs8NfSCSx-PEnvO9teMaRZseMnUzzn9vyjeHfAA8KNen3tSz6WDWTLDQNGiwDN-gEmFYn2SGuOR193VCCDmvuohklDyJAjhrlcCgCYdKDYaH4-gpKCBp98WecaNPsuu-hI9RdBwGjji4dujk_dv=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOJ2KtkL2A1aZO9-Kp-vRK1IAZplyPiVZMHWq4cUGfKXU1lI6P9ibarvUmbYaQsMP1rMlvOwvWxPk00hYyLK2RKW4ETxKw6dkdVpRqV5CZuoV_K0an5RScmf8vTNYt6yL4KapfRnCM2X8FMTHr_EhYl=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOTd7G90oMjktsZjP4NWy7rdxqdQNN-l3eGFyv74-tDoWga8v02H_HGuEK19loFbrIedretMIVhUgREU8Gp2w-_V90NDh67DcqZgPMeKbkzUfVLBj9O8NWNGSYUvLWcoikttyBbvnjaGaxqtcZ1etHg=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNpbP9Csm-Up3jq7rabsTjFVJ5XzJkes1ap2rqzoIwEh1to17yAScgDAUxSYfXdnfvvIjNxKBMBkks5Jr41cIh3U_YmjyNxCEgELtcsjQr8WyJO8Aj8rWh5zHyZ1VnbjVV-lRSPXPiQ6XIhoR_7vrAE=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOdretlzLbaJtFN9q9Wj8bf9CX99leV57Xp7uOJvzLWXXI9XGCbCFLszoq7PoTIxC-KB0XWqQOfHVkJbIHG1PQ85UVQSN88sW1ToKaNeMNJ8gKpNHxxZzdKDgR1HFr1Oq63dJjWgJAxIaoTVmj_dE0F=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMCxTHUgVvMyvs-7f14EGn1qhh4jkNsSz8KiwDTbactjFWiR6cf_fjd7QzhUUmQBxHDZHcmCm_rMH0883TaTd1MK5CZYyDpelG-mMyIALm8Zjr-OnLUH3w9X6cKMUIBEPqut3WofANwgD8qCS1c6nrL=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOg57AaNLWNtl3XrlT2Mofjol2Mt0XL0Rrm1bbVzdatdPzrGYpsv16wHiK5LJvUpJlcF3VGctRaWuD8oBgXuoMNWfC9pBS3zPaFCAp88RlwHPeCybHmSRFvw4AVGQMFw9Zk3nBkwpdZCXCtIl2x3L_c=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMw2Gv7ux6klAwnt_Q58A5vLGu3__pLSRC7X273MftPqqW5zq76YYCoJFcFJtJPNdUS_ixLxawjHpsTE_mVtGCxU1nNWAKYLLDlEjRorHqUmHqJiHa_K2sFBBsSzM9AgpsCqPa9h3WEit8ND3_Wjyuq=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMGnZXQmpm2nEJvOb61tNmpnXjeNXaUS3DtZ99r81lQiIiC96dePi1hrCV9LB7M10gjEtG84hcPtCW6UGLbV6DK60i9SzrMOVYHrHJ1l7fWBN-0smggbY9jj-ISlTAHfV3tIhSXiXLBlllrb3Pu1wEq=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNd8AzxbtnbbzJPWOLsKuiUd6B3dxtx1ERMPJHlayJSpgfdHzQvliVUhXiwtG6DU0NqCy6ix89RPKDTjWAJexcziC5fPFmoz15stRu3iNQs2qsK486N7_OnPA98DO25K3iWESA0dhJbhKO7N_1b4Db7=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczP04G9nFShG1L1rO8G7Yul0jy_HDlabm-9XQ4H0P0qpMZ73HfgFhDWhNAKpTeIkFlCmyC6ENHg1WXcdSf70CY6gG6RWohwM6Damjb8PYOsQS-9zok0kMNxWkiJyq5mM9c5AKcBsdQgNHH0e-6E9HCqp=w1920-h1080"

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