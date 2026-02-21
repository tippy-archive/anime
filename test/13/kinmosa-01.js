var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOxhN642pqTLdZ9nuGTo01q8SiW2Nt9nepq4KfMW3F6y4kbliCLfJDJVZLBNH4Axoomyz3Ps_cKxVL-XQOjAgfOmTi3TokkAFLSCow_WTl2e_vmA5fMsMohGYvGskq_B6io2KyYYGdJ2s81DPxH3kLj=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczORKp_NLar3p0II6e1EzmN9PT2JZEQoHc6Y7fSY3yWctyCGk7JsxGCX2YGQLc52tV3DFrdtTCiOTF7w83S6PY6fMuSOCl9qYvpegEoplxD0G9F_P84Ka97qadS7xaWZDuBCkNb2_ulcd5YCIvKZS2W_=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOxPmdECCOPrB7-4GkXhleeAGXQNl0KTiLSE1tvM3-S3dDywnYSdfH1S93uPt56tu6fpJZID2ZOojdLSA0amyx4UOtecEXNdTxieFXKxfUX7MXFs9DO8YdNEJ505922TtQifaTltk2__IH3vzl0K6qE=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOWTTdyR_CP1t2Qn9OwrHePPQW7bKm7PU5SJvkpC88l8PMNREL_LwL0HCuk4QbZ8In6ErT88-MHlrl7FxzHdVXo36eMXkCKlpo2AQbP5j6tYarmQTtFcs2cVcnADHMcu4z0D4JAX4JCfd1EJ_p15fqa=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMVMLY9IjQk2DSDTW_7WGOR_DzLDLrJeDVCN47etc7Kr4eri15aHSF_jKRV_8vmTGSNusTCWI6z3zEqzobhelatUOb53pgI5oZbXlz_Ic-WFFMwLdVaA_I1iSPIAKUNkqnWpUUixex7SpRsHA7SybFk=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOqMjktkHS9HrEKVGYR1syF76QxJI9xKmWZ2rSL2x1ahNliCNSs2GjjIyj0An9ghe-LnwTWQw4KVDaHu8vC9bwTxJHptTPkXEudM62OYBO1Xwrg1-iiMv9BZcCE8pUymUnqIPGWU5bWC0SAvIg90zAh=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOWa6br44e2M8F4LjJ8bNdL9cr44RaSDssyAEORtmEN5xoW93Oyct1LtJaFzaOs3oCk8az2nIgSsUNtts_VeG5xZkFe27dzJNsqbN_qFonRpC1_SKZlOr06KridFxmeS4TYknVjE2H7fn5dXfq8pnKa=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNfpWPm_Ihtr0AWdFvjFHyil7YAwdsGeJ_x1VU3vA4TpyD3sOrLUy7GNPkuZYhl6AyurXl_1l_LCu3hncrMUJlNVa4eaEGsxT8FvJ_vsLwU-_lo3VixrY5ubkiJiCU9ls0TC8ynuRc0aKf7OsBqdC4Q=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczM4D1-5BJXgF7o7KMW8IphxCW-crwMcJs4qASGX3Q7qwnrfeG0afMnvPqT1Dm-JzxzDN-BUFsP1RWhwejB_qtG2NeJqec-MAy_J1jUNoyEDQfYjRLWqFR5cSfU-IbNEoaUB8UZ5Kp8jXfHLkIX3s1lj=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMxWO6c3fTIcVkJLTuSCJgNzB3O6k5Fy2k3TTz0heCNIaHkqDC4_sz320R5z-hgBkDnuMAbGcR6UMnzPjr1gzdK0D669vDdXtaQEiyDmzMcRICBDwzk7jsMCJECK5fRepYyZSCqa-oIDNBG6_aJ4igw=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczM8Zvx1abgZ6Bp-urANg85WSBnJv6cxzkHktJYPQdHoR3JqXlr3iaGYHbNUpAHhzkrpKCm56ySo6G2f6eOEHDUKi3MF6eh8veLXAsHaRUq-YBEqPYfHYHsb4_m2mx6RBESYXq1kSJma3yzyfq2dERhk=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczM1FTygxKCOggozoUCBP6hDVRllKurQqLMYN2cDD6HR7XXtpIrSYvRES4fe3FI6nKiksGuZ1oYXPUp-hYFbwPMqFuYUyuey0FS7XJCtpBIS5s0aMTP2GX8r9eVFS5ZS-VDNT0KONAP0ApK9C_5Iooq0=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOpuWii8BvW-CR8TIGcfrCxfV0bFiGhelxz9sTAbkn2E-WAbGAE9iYse0UlTrfxLiaima4RDV28_47ptbFp4ZZAQUhg1AnATPC1UN1dXQs60luqzhlQ7J20jY9E57xe-BDSozWbE6-yd3WJXLhtFjmv=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPhJ6MMdr1e2GGfg0uexhj_0gLyFwFgday2UqQt1Iyi_GRAPLVWFjWHrxyAt-h40qv-as_6CIqLbwKKZAe_Uu9mp8J56DLib_RkYecFeOdDSNaZ8pJTZeb_nxVASXLHMr5WBml5gAu2V2b5lCW7RC6t=w1920-h1080"

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