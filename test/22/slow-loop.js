var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOX7THn-FQvT0XKvfWw8NGkr5UlBejAJrPK1QTory14SKZMDiiwRcY_hbJLhECWHgG0ZKns14Stu6IRbaG_MwRCxFcn9wdBG05pLly6Z4VbFqECKK1Iir2xcX5kFoHNsP2AOK0YA-jgRVnugEvKEO-b=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPluiLUyrk6JTc4kK2JVO7IWiqZzGKTLn8tUmXkgFy7YjEDObn56TT1rbrwscFcKgul4BVFhZ_6Zl-HyUX9ao_HNAGJeetBKLdArZmdaQFjQFoujhoN8iureNxfz5kE6YPiOrJg4v-dKgwKNXfNcvBS=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOrJEwgloHwNzHlzyo5FxBDHpbIGpFV3i0pIYDXzbFBfeoMYC23LrK1BTLcx1FN4rcRos4w_hbB1QAZ11hRvqOPhId2T4mNNL2l21_5oz6m9OAptnUUa5Exyf4DYsepomv8AzcVdUHbMQLLgZ4cG2pw=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMULbZjuoPgOtiv9rrGh7xmnDIhDvE3y5BRZp1mWnaqlRyEC_Ppb597bIEEOpsebUZqGj5ORxeuMpgxg8FoDfB74DeSls0a1NypkTgK_b3JKKSQVEpevJBWQauedcc9lAoJ2ZRJ4CjZNdrt2t_LGTgG=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNLB5BQ96GEa-7e_l_UHvJwJj3HRWrN-Zvk9n1oHfSZ7WdJKsdHBMxiP_wfbi8pLAX2cyQ63XQcJQowEC7Ff9ZlgC6NZxKjuXaObX8bHkjKY6NBhaHx_3CUCI81MMCyU1-qpeG01YfZktgS_hoRnBg5=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNso9_uKCW8aCfXJqYwWxBZ9SP11y1RtqCKhufushNYEmSMo95c5hHkAPv7iz9E4Nm4UJah-6uOj52ccP-H6frUdlLCB-cO2KtY6BdWQikM13j_e-6tw4_7UceCzmeZ4en4q6XVWZaAuaMDrFqIglhb=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNAT0Iw4fGaRPlK0WJZJmPv2kJWdumRQ_eJ65WaO6oVsb7zBNS3znmljkQ1wOn_UinEs-sHkvfaqxzh-AAt5wwKCUSsIc5U85FIafZvFVGtARqNuohWuOty9_DzQX8RcCMSHTlbPlGRm_XzmR5GzPLo=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPNquND1D7xD44i2OuUzN9g4Plw4UaKcOXXX9sgAYwaiOmgD7bzpdW19iHLHmAW87a6tI6pO8lTXseauLyIT757gWCtilId9_PSlLUZM6Mfj43aYLyICCgE9NLIVEKpfsV7cvM7GiCC4dYWyxO4VBOs=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNxVL9nvR0vCWhcKMH2eVCGXiYm7Jdnt3YsyBnqXqXXPMMvNsaxWVxER77gT2nwXY9zjjQQ0CZRPUiJaxGkz8kevMEjUUzIqJwM-2jHH11K8y1ilQq8bMG0T4fCXqKqRJtxhLnXOUGrdN_SheR59p29=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMd4rjRw-ILbcCnZSHDxNHlcgnJQHPfCIxIOrZcLgrsZzCMTnw9CmNbd8iJ-N4vOgL8spSFqcc9i-dHm0wNhvZQscZLsHXzjAOBWZZbo_4nwUVtcR_1P2HMYtlt-K88RZidTmbLk9egFh8ngzevSM54=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOoKxAhBb1M15tPVs-ZfHxT_rGis6F_9ynTSkfwEielU3I2WQdAiinlIlLLcrgeEACmBD76e-Q_zrzq6Tysi9lK6QfaQhKHVGzFL0NbOUfdJ3zzNmR1apPAiFWGD1ZyS1WOSVEUUwVaO3BEphR0g2VK=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPCTJYMsMJ_8ulVJwUuC3azrmgB0GD-f3lq53yVo4bXv4bXiKCXnbBRBdqHlVRWRetdHGU3iYlumHt35_64B-TST_fcw4rca43LY2iFeTEd-4H93AO71iowl15GnbvZOGIR7GE40g4BwdQreFkp9lDw=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMeWinW8zqrF6eXGTqxp-3HdpCuNmBiD9X2U_3RmYg1vuKlM9vMB9mSdIfg_8nqOxQIfdRp2oP_-g52npUuESrj7GyBeRT7RLaE-jtPY-pIMFBd3NIy46SkTD6KHFHwA6YfaJ8SCFpl8KByiCEtuT6H=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOF1DJOQErZF4Vo-BdJlmreUaq-3p-lALX7BmoaJjVA_QMF54-0P5SYzHP9d-l4g-cEuefiRxDHs2TFosZmVM_dM2wcneOawi4ryb3oIB_wZ76jSSyh0y9IfUeyBy0_xwuCs8w7cFHauLMu_yqeITL5=w1920-h1080"

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