var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczP9nOHcGIRo2E8_KnQ28O2G1NMLqxkEZ9LHGzR1A6lQp1Xi0gU8tkaSMTFDgRUk54s8O-YgjfTUW0v17JuR5sqbcrtq4WK6Ab2fdLKj2vL5l3EqgWaUG87C_anuG61O3U5YUubFQJbEch02MFKtzq2J=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOsSGnGDycLZC9rQTErsdeSmH6G2UbYv26Xd12YZVxA_qny4Tl--YcgEpEfiRQHb5jhvSEGMFvPphbPpnWWuCWEMhfouddBkaIkPbEwNewp4VW8DPP7wdgKMW_Byrfb-xsAuNBsTI6szCe_HIMW37S5=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMiUMxLBQvpTLzoQsJHmet75QW8w5OaMoCJRk9-pHhglVRFtU5BK65XL1WbTgSZqoTPXSwx5vfGrTLw4gwtyNLUhCR1JcE0rQdzkcbcfK50zWO-hLgNISPD_mJ4X9_7xC0eZerRqzaVQyrUy3HYQuKO=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNfoFI7HVS03PJoDIoDiRC_8lmeb5vU21JPHXTnemyDn3CI1fjcnWcDrTsJOT4iK0FBhBvl0sKG9beJ7FtFqyvUYeBkxrqAF3HdQkjjMe57UEGOuXPestApQIZHVrAa0XUBn4V2_QRclaQFYrrBWSm6=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPraqFj4O26izyAHNhy3gCfDn5g_hDCFoQJu6W8bBLygZtN4sqgjdYJf5zmcFa6MXgmoL5b5SiqRdBqDT-2dEjK-7Z7QgSvGzxQ3uQNq1FaTg73vyykR8bH27PkXwQxRcDudeoYRVC0Sx_Xdq36-L5J=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPJ2XovpOJeqi3o2y2uCQeYnMvC27Y-Z7IwJAX6GIToqyrEnStsTEweVaDHxUjoYf6liFoKiOZXD5iShW2m4PWMydOpOi8nPKCm8uDj1N6Z0GHZwMh63BaZhUiOXF_JXJkLgukVsIblaWMCxQnr_Mqf=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPYLPRJDgIo0u3J9BkGn55rdt8ewn9fgiSvpJ0WZNGXv8n4t_ZGmWkvKV3D36ABePHLm3T-lNdozMMSyBGojV2DhlcVGN4kDoCv_b-Z3xQ7T-Njz2vItV9Vv8W_m5fW1gzyVA690UMXOyEUQYblttiB=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczO6s-NZVzj3cTpmauxAfEy16xTZhZROODQIxoeW9fp-jzRsc8aHYOVBCHtiavDELlg5hx6mKjysd7M6vihVWL2zAnQc0AoKbfHRqIvnlb3rPRqtZWAwFeDpVhd55GbbOGmWa9rFVL98y0fNANaoUsp8=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMqyrDqQFZeeHfxAlKMrAGSktDwPRGSd4Altp-VYpcOwWYPXAAENYdV45VJnTIjvcAZkdfHBcCYZvlmJso6eKck0DDtmubh-qfE8S-oxFEzLmP1qVIoNhzuQf0zA9YxpKkfe0QnPKrYGj1e3nIKYwyB=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPdVyrAfah5N2KOXg6D3TJdXzVeZpdEt1zokSQ06sWY6p2YeH7EszVgRt8TJJHZex7Azpp9juIbMWfNVXIZC_gfc041SK1rp-AS5BOUioDa_x7Hwu5x0WR1TcBGHT0nypS6ZQi2DjaRbfKqlmR1ezOP=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczO1T3FtP2mqb-Uh3ljt8FLnM155vrDNUle0qBl5nJ-Rfib-eYRUqx4INYbvcDsBf-4zTb0tPhfa3jpfYj37F05Gkm4Je2gBxiw8khyfrlQhHkHNSmshtwv7q0V0VGUxHGjsEHLlzCCXf4BYAFoXQTT3=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMuWeVdIOWpBVgq1algyaNeSAnfIqmAOwykIiw_l5cMn-cjRtL6tnU4spN-_poWnCIxEPBp0bhqrZadlUU7_LbR_T2nGYvzaO-QXb0Mo-EUJPU535ZdiFqVwHR4PEQiHIMLwgIdGAHIS6Ft5gAILf7j=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMGMFzQOJytosyNPUX3cc9pSYZmTKYzTjBCfhLSg-NoGbs9o3af5vWgOhiK9zYGpBVslEFNbAaa5WpxCm_GckwaNABYpCi5B_LJcSIgMZgXzise9Q6hkD7cAKCDoiOe_0loh4aSssDaTuWw5-PVumwv=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMmVNEy1mn0J6gSRmYzhinsRMGBizTYmaSDELPmtcFnQo60_RsJX8e7MqfUJlBufPUYudgVoHnrTlNFJlEXhPyxqwkGsdPwhB1o3XfRLF1TzOVILVSRzX3SbYb_miTGcRisRy5XGSd2XVOCkrk5cT3D=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPka2LF_s__3_l_LPBq7k46LyDH6GvL4rmkODycjP-rGLKpB7UoF6smOY2zuLqaCDxiJaBJuKJ9hP53_7XV8Z1-6FVBiFOCWyZol2-AYydxDC9vZLats25dhGyU1158n_27RuZXsjmu6iTl0_y7FOs1=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPOVniGkbQ8Z554fljePtPXzsP_OEVvuTmHhiVQRPo_AD9ckrK7W-v5wHNYe34Ck8x3QlFRLajjmPCfuc9pBletLq0O6rFo0UYdO95rhJLjnPlcQMPGsC4iwHM8Ytv9OY2FOKUEtrxqozMqbFMbgnaz=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczMhi_NPWpacs35b7ke7ptfcCPE3L1azBmStkEeh5TH-0TOrn2JveUV4vAsz8yo5mTpouWDQmVDvSubMHMVoOYjDqQ9Ho949aUVA9Af2Ozq1uU6g6O6UlpRGB5o8RRV7UwqivbcuNPAXsE4MEErCsJ-W=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczN6vka-nRAI9U7wpuUVOnaBvWCbm7hQk8s63jYQkEZweoIPowBhwLu8cLpGm-pKTlc9CU2sEg56lwc03lGrvsoGeG1GkmxSj8TKPXV-faO4x8wuSSOHlUh0eId0s_aMsusliGWi_fEn6Ic72G9VWqSC=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczPF1JoTybCYmgwgb7FzoMsmSJWXRIIpw8Mix8LNSP45xijmOiD8bR9Bkaf8yB7sf2an8Czw3vVP9S3VWuBoW4o8LRM-cfHNRFZBzle7RYwrXsRHKAkQdqmSY-Db0KNbbffyu9HlqK8AeA49zWTU8E44=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczMRVzPC38dQ4HqiAcvi_exr4O0fs0Crv_A6HZtzmaLMFfBsGEwlfkwvYswG2SRVoxdFqTGodhzzjknxsJR06eAOpXqj2AFRIw3xGLYXbO8P_po2ULjuogkNLem-l_lflbHwHW2HLlX55NhdSImmMpJm=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczP2ZMv7IDtWr6LdWXn0SwfFLA6CbmeRqst0gqXLGsTolLDr2Yq2spR8EZzNpdRD04Mpkkkx9FM-2trMp--Xbz8WFUWd0PzUht3GjHX72V8bWErkuo2xI3CQyizMkgqCPmvHen8C0-6XwtX5G0-1rn6p=w1920-h1080"

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