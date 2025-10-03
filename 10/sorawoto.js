var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczP54QLkIGC_c2ifkPIJIMiMxcXIsHcYMr1cTqFF23SGZOjKFIL-PAf90qbdE-VU45m3zZaXk-lMURmDzj1cOIaFV9JtGzveZIT3QAxKnNnl5DiXyLQgWScQXMUyMtKIXMcNPoSszLxK2EWawsdR7_Qu=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOQtnRlij9lxxSeIKTQe_UIZlYKSIXfadP2o-5FO-CLm-TlOmh9-2W6dKj3P8cFs6bgDxJ-m8mUsnLJ54_GMpTbMCxWQRyuKBw8B4mxzMq7unEAMbAzvQ_K5mt0Bqjtex0wKOsfxnME1esFYxSYkXMa=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPH2pWHNzErYEWZy-mDk2WvQkoLG8hzQ6ggYeF2pvzHB4ebJdOFPWQLztNKITneOfHln6EHEPAEIItNV7IRUk8wsGx0uqgoybdvOHuN3rjBBfxVOEqyWIkr9R9oOnFd6s8snpyYdD6R6vtgQBPM5sRw=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczM56gkjCYrFkqt03vwFKFWtQj2watsbEyV1i4a1daVaZS6xdCi9U3jK9NynDmE0BIb3WCBYohRjVGnsLIN7nIr7L46Ia-NSIZI5-WO7Lm8aK0tCCrCu-ubkfBWkj1g-0hHCFD2kvlqSkPxbF0SUO1lT=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczP_Cz1JSW7gopaiESZwo3kcJoUjpuvl3PvHBSi1lgthjQGZ2Q41KIK2zudgGP1OUJs5sjVA9bWNJaLQhhKYw35x_32JzByJterNVAIHlO-_4GnMOmccc2hqMWaOaf0CikKrWZsI2zYenxZ4UaaqskWN=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMbgXaKMaVUg2v96ruwQl5yjOm5qOqUUgU3RQbd0emIT29h5FwMqJxz6888RKeI9GK_MOoxxpVL3huI1AbNuXZv8-E_dVLn6p96GcGjRlhUuHtf7cF-i3LV9j4p01_AdWMoXufqLaVg-RWk6Q55GiQp=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOEvGfbvZuSclw5RJ2HkEkhhjmfIkzqwpwyB5-G-_c0SegV2GcWSa2ChcmPt9djlhGwiqtSB3m43U4b-SLpSWJ_ESLDo6FguuGC-enuY8gCto-C1wgdJxZBEjW5wG28YRhs4MZrxxGe4VdHM9QGi0Ja=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNvU-YlSEJV48E_u-xeh7iSKvhCCphDow5b1C4-HTcQH-nkJ0dnzGEV4mmjQ04Oqiit_p_-S0Xrbe2wH9Ed8uQLaSTL9ikgZrFoVebi54Ye6GlBvd5ncCImTlZdUwm6i7EIenCYYHGA1fnlQlb5q0Jq=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOMKK7eAb8AVSX-3mS7oysaCrOhYNGZCxKFxMuknUuj9PXuCxI81zbIQTGGHY6cp5byzYrCOqb6mt9nncTP8LDLasPVIn8QTEU-RdDu8rMokNfBN_Fwf20OLHASlatdYeWR2A8ohubCk48JtEaSRqw4=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNgN7WxJozCPTBPIKH2xiBS4Q4lZnuGc10DWusvg0a6gNJNtiXku_sWHsTfPO6SIwJJkszvDkHIF4JtSHspNnxLKG3b1UJsmfovIK8Wgfvhw8Xt25NispICORVhT6QyUMB3vXvXbNAVKM7A9uGnaAh4=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMf-Qgvn7dOerMHPlc-fRZwEX-dl2BE1l-AMByCFAIMoStgZ4JY_vnb7LExlZtFFTdNI22hUr5R3moKDC0LMFBm-RydUupzP5zSxRkGlNFj77Xx4laSyAYRd28eDEIReZ5nk5iam9yxn33wKorp9OGO=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczO3wYoJeRDTubCeDGuPC_dHsOU2X3lcyB2FyrRp3fEd2SamBkEfBZ4X8ZQC0Ici5SKIWay7ox7P0Ne_9XYHVfCk2eytggdTVmkEIzIvqWaRB_GnI2Tujc_EIFxSdnusrbXZxi1Z1p63b_yVtQE7KxTF=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczO2bErGM3ZwlLZE_JbYA6ItGrhATJoZR_EZJovzA0lOH__xTsYfcbpxIP_KVLsTv2lUVmhjQ9iG17HGZlwn_3nUqGjCsHVWgYh-_kRhSUSJxncdgjO13GEa4e5NT9x8ZTY4zg8oI8Tp66NgSVLLdVYu=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOdwvvtJVhZbTDHmEmH_rpZnRHsODjygdh2vTNMrgsAeuyeaxRA3go-hJy-ah_6sK0tiBRaqnfVXi-kjdaL5RgzJ4LIBe-OzR-3PE8HODv0vXbDr-HjrITXfjM2j0Gn4bE__zBczsMgddzLI5DVAvyM=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPXj2RBB1iNz1Y3PgNisWqn7BUKwUvH2bBqXVq_8o24TSDvn9165pSrOBZ8F2nvjZf_r1G8lTIaYGnPV4TDVkjaMvr1_PdwZk0y3rJ3_D-2X1-Mx8DYiRQjGYS-MaCpcFSn0sgOg6OlJ5jfr7-xF5jI=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOZm0gw6VxsTJxoI_jKsBGzhg6G8dXbSPUbyP98r_42RLy-CtZnhV9ebhrTahAJYs7iRTJMH313XGCgwfSZwTa0xOXci-f-H6bsZ_8f2XOsC9awYbTrF9cD8pQ-eD-3rtXkmIACdSWpRFSS4NsTU2SS=w1920-h1080"

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