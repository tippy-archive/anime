var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczM6RXc-eEb0C5rspKNY8edIvXYsfUPf-6r25B6Df2T4J0lFaZt2i9lBA9nEp45Y6mJe2uLmEawjlXoa63kqquBs7BGtYm7djaC3JE-O7QGUIzEt-00280oWsVFmOLOvEWRu8NScd3QR0gLHoCbhgSV7=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOrju0HvJRnSfYqJfEv3NxjvofDighQzJnq6LVTax0mjxWJ9GUDqXf5J6ktjS6fPDKrCxepg3b9N0-29k9vQ2atFmEtOGVY0j9vFTFsuRy1nDqnPJXzW9zCKhcQwQENKvZpRwisjRpJNMQtwBdgsyEN=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOaAjfXuI2AFAvZ9-aIVMSXOhlRZY4x-aX0AFiquEcx3eLZQkqtwcNaN5WCbwi0klWjGq59REEu3zz4eVZIOt7eEA3xfBwaDFLNQKlo3lGrMWSRGenkEWL6zjoCqdD_Rctju_SKXzATPfmwm9mbDqza=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczO7oQsr8yH3tm2OZkPbboibDLcpWLDwtLoRwypb12R2FSW36zF0jG1WdPY6_k_4IMYCb_Mx2bCVoAdQTxd_hUyOfBZrkPANU4sTVOyrFu0KbMg8-QhH98btg7iHcDkH7T4H7AcKWNkkUIY-q34vohVs=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOHi4wkPkNZZxBfsaTNTbz_0eGT1VWgh66RuuQmcJgOFVssT5WDC4Pje9Zcy8qhikqHi30VPDW87nPNpR95AjAvcASGO671BrJYxIzD4ibfTMN5qavjPpW4Z7Ipzt5gsfnbvsAEVG4XeDdzUg1hYICi=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOwHe3GR5rDEfmhxlV26iFd4BKGHdWOEXYWqMVD4VP_7bxVpGnrbe7jpuKzvJlGC7y65y9ad0M9piHJ-MT3eo58odY3oqCxa-QTQ3Evy6AD_M0kYcam_VVZ7Z6KeJF2zi1dbWBDmz8kQwLkbuxWdCdF=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczN3rWN4SUPTT39A-HwjBrk_P0HWnN6UOJ8V2nlwFhBxidLHy2RJSFwOH1OBr9jyeJjAjXEX8rVYt26zhng5YFtd77BkLXSKUx-MFRDvj-NFedQS15E0r9ivJXR60Im8dtv_7H8K83pmQCsrAeakrMA0=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOAK0TCdBW9I2Kdlq1u6LfkGGTAKeneUM5FujfoiL-SaA3c-uHDuhyjNbr_sHioZ9I9BcmoKWn1rwEVivuPEPGF69ZS6nT9WRY6ZVx_1GqV-pd5hGA4HxIqUqEcmlTCxr1XGbOn4-2PJ7YFI0GRQUWN=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMybH7uL7Pg0eOhvGtU8ptLEp7StwWHYLX6-9CuTNNVtsBzoYKKPBxB7UgZ0TqN8wozzs2lX-awalZtd10ewWANwi1RwsYBSS16WG0iabXHdTzW03mxHH2J9D2xPhb4L1qU0yPIti3c6niuNtg0yRKm=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczM94pqCdhXwMsOyKgQW3jwxAOqxG2agtPzvXjAl7tEa4u_kqPpTq5LmHgV9mCy9uEajW1l_1RjJws7GSbYIv_hSBbtSk5rvg2tZrOV2blcF3pSNB9K21KBL0Di5MFQ7W93zSw0xTfUCZKUn2xu0cKjR=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNJIV2IcSeSd_YQgBerx_nK7CvxebZ3vEcCdQ44ZHtBDgal4P4BZ4jO3fNgof6J4kNABkqeBufsQZtVM_c6BEMsr1EF0bLyRkGNOlu0smPgrpDb7K_hhm6meQdAlFRpvIIYf1tNLuien75_bnyc-cXf=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczP7oaOmC3XtSpacmxvHlUP_zM7f4i-xtzKA-UlDQ_JY8ZvJyF4uNlISJ5p6qK9k_KfjpwhvQNqrQRc5Br4ZJym6j47Ikp1peBD5sSmV9Qg2Iks3m4AyxuftLvJm0In_nEcwjK3VC-hPmlxAm02YRF0G=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNeImeK6FaL51MJaur6dyqVkajZHW_VRwCY5KRyM6tmo6_JTpxzxIdenOpR-uYsp6_rbV9X2imjkDx09u_04jBJFLghurIpQgEfFsTDmsfhfwBF6R579y4RlZwYCHVrlZDNJKOEEuHREo9DHq-lpthd=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczN7eNCCERklCWaRd9cRDeYlqDuEKmsro61J46jWlbe_-GcULlxie2ueBsS91240Oiy99MYQjaNTwa82A9QNbkNiYWJIkNiOpSh8C39MGrMetbCMNywMUCVy_GC59tXgPTdn7txpkbTuoyvifCe6nr1p=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczO4qG3NMqrYrajgHKXUBF_ad2Coy4vrX0sGgl4vSPFUmX8tlgY-acglLB59zQTEvTYZFdv8Xxgt3srlCq8oGX_6VGHGCAzpyOqN-gL1dbM2Cp3K5u2eM_8InXf5gm3zpzPL4Cwr04GLsFZkMpwMvSfM=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczP19VoFKw3EYKsLhMiV4XCfsKCYcPdVwMzFZmhjyHpANIfdkKNfYM2pysxQa10xu2TSoJlqSvQdb5FG4ffMRqrz7LKHhjVYQ5gePjsQS8yC1HTn-prh5P4Xkxl8ieUSeN-b-MruaVL8tc3Es0IqPjoI=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOEXci4r3zhEEbE2aet4afrPYmvPnA7HDKy8K0cacJ2E601mjdDGYpyF7G-eo1DY5t2JfvKf3WLwLtXLI9Y-jw4QfNSGoXKe3px6XHq0GWTkZD8NWxY5oML8t4mgBnxICpH_TiZSgdK-aDgBeb723Bv=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczM8k1KcoChd_dWtnrsGipgUTxx8P7SzHIikhvxrTThoV_7jDQcEygI8aQmRtO6sU_1jkdE0emJtZ9TBUCg878VWaugPiYuBZRgpfNDY8Z8BZS2wWYEjua0gJRMaTGWf4wZz_udSLvwAc42BR5TiC-iZ=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczPNrRLwV61qyhhRycA9DJU4obwAH851nYnyjlpo48qar6NM-m-wwp2iIcT9nII6BIJTQp4_Rn3VJKKzTNdKde7HkWrLlFLb3t_nO-tjMdm6HFqe1uBGxjXJAEXx23bclN0Dv1yYhf9xELk03WmeyAHX=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczN1uGLTxzGmKTh09PylvlHd9RxpJmgd_SvOz9xVZTbNXoCx569A7efg62iymAxa6LfM-Zs61Kf2CJ2BzUCrPeJM03lSjG7ryO2jEzVIy8YKwUlYBezJoZIR4syeopKh1e8l5oGL3z04l-K4qsN1dhV0=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczMeoUiWQT_WDzdI8Epwb8Z0WDDgY-iCaqmSYxCIcR4bJ7dim0zwKTkREY_OoIRIBEva8zn9Bsenkc6v9i6kdD8RcSMInld3vr1WJ7V1TPrNyGWXpmXtvVwW3b447oPCYckAfXcQ8M1nj_d9EiRI5WlO=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczN2MMjCdg_Zjt4yEEVRRc4IjxrSJbYem9lFqQ2IIZKZBg2vr3xbrWDSad0QPsetcknNc-JN_4UMAGtVOyJS4jKTk7mve5zb55BZoBuDvRoszQ13isP5sauKcZKDJAgnOiX_qPGoytNQQysWiFb1JMxC=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczOyNKIiptf8yfiCg2wAaLsfr0TtmHwCXAIzjSwN4diAY8c5dxe5T5qTXkaxABgFVc7ZCKokmQn08m6ys7AEV-VBBw_IwSW5J6puKbz0IW1siiv3PMYOA6lkkYGy1QH2rl-VQb1iF1Hi-SIBhlcd2M-r=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczNHxAMdftP1rYqNjDaNFxhT8Hd3hJ1lztbWD-yMcMIRuHIgms_MPXCKKCXQMUZXeDMSRaKNfkdjdGeY7znHRWwiVSiI79b_TxWVxJm1VN178mOtT2ZKVTAdjglRJzuLHAZAV-TvpHwFjr17p1oZ05Y2=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczMqFO0NpzBsd3xqLOqWROiwGmBEvg5CHQfDF-pkwIyRe2aTzhG-j2Wq-9sSE1HuhI093tOtksyZWSRtvRLeUG4xxfHpaxPI3MSlntRTbu7D078W8RmC48VtYHEDjo2eDfsVXZL3d7bAH5YXS5Cy0SLw=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczN2HLswehw44xuAsbgtR5TvNPnJ_-2KixrMcaF5nXalMoBqikegBnFcxNoDuwtxJKLG511WmGD-YhaZQJnDjL-zGcO4rqwuJ4AFflFQwlVHB9zdeQNc0PlK85zps-oRSgyDY2GcbGjMoXJjdEUDn70l=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczOj7vFacTg3R9oz_ZqKN9GlF02wfy5TOWeFZcLD5wDKtLhiOrX2ohtuF86X9iaPLGP0mUIQzZfNxuBxXnrLR1qDNiT9vYYBCtHXG2fpsbdOch687QQnAoUADDM6um5I3PZ_9QdZA0z6sZ-a04Y4oAH_=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczPUD-8BcDviYCop4el-er-9QpmJAdnIom_nLXs023mkb6lk6Y4g_bcoN7n39lUHa5w1_UPTeNy0yKjXmxc-WSPN-XKu4NYVCzat2LkrHgQqspZkS3ztsHtpD18wIhjTPh_6I3OXLe0RQrQvEOb3Bwer=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczNo8EguvXk3U07UjUUjTFY7OYwfLG8gFedBrK48Gh0IwhICDRodddKZlGUij9-0OraxRrd9vcbaywFhmLJZShG3MFHtzRExsQYiUS1uaF3WIso305k8vwI3kptZms3PZohKyae761nVbPpyQyB_LUK4=w1920-h1080"

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