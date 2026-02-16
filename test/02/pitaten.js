var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOThqhYr3PGrVCZZXqiJ3i8LzJ44-gq10YYIikqPnGgIeqdYr9yVH3DkQu15ygurYv5-YvV_lk5amahRFA7og3ojlclVqPnmTOEG7sXgxNoAtY87I_KLZF7bO09IJAiuxBuMcS1Ez0XdNd-a7Z07Jtd=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNsUovg2jpTHxS-bsnOLyRKSfHGDtra44Mw9Wgo5MoKPBlZTxhhRIzW42eKcRdwKQ3x3kv5z1f9wxvp9xpz8ubigre1UASKirU6R3l-MJAcuYYjFJhjhts-v88q5XykXcWb-UbW5-bshQ-trsmimsW4=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNQTLBlp2jeDEEzofNlFduChCrq3sNOYgc7emWK9ZVEgcvAGAiMhA2vL1nL1tNg4ydWRcnl7pCczulVtOaQ8_0GdzkNwZIIHN_R2oi0yvAVaFHDd2Hig-yG659VUvO7MYZhm_Vwy2XKZmogjR0Gbjfn=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMEpTSkkyjqO8kBzTxqmawZ2mRgndk4rbnLZWbZGB14l6i0Udujy_fBES3tXHCXuExE08AGX32AwMUW3jUEKU-cVhnm-rDp7Ovo3YdfGAO1c9Ck1pmjLkglhrg0wfWn1KvKXVAY8flW--qNC4M-skSU=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPTj5EYjX8u_bT-h2Z4alBrnymeOOW6F5I7jzGerpfufm4JXFWRkl_MLLGFZlCubD476Q1TdSPy8r5f_anaD8wK5yOFd1rNd57ItwVDqXSJjSJB2KetttWgSm6inUWmbJt-RXMO5CcmwfGCBYA9Q3Gq=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMXQwvKBSbjvIzkmLPYS9_jqYaqQyVEF3MZEbTqanikEdNfJWigGcLlpIBpPc3EXp1RFCY1EW_igr6K4uacJrGy-oT8u0pag3H4-7t4t2fceHmGs2e3jdEjejRTI9K_jkqVQQEv_cg97esJOg3SnGim=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMVOdF8YBrLrpqjJBwhOwBHU8X3AEqLlZ6qrQq3udqpqf9rHc4LZeEAlE0i9PsltELEBlbqh850Jvbi0YoMBBlSYVgsDIkXo8M_tBNs5aqZlnZ_RmD_Nila5TDIoKxACOTAKjTAmNiIs9f9MyaeWteu=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczM5XtnWlRm9caoyrLU-gyrzrZLZmyVK7XZkV5xxMdSyBdbX6RBcMNG3CYsORKnYhZ-epaCA5zZVBSXVhl6RywApISqWCosaGiT0zSjrPNjTAsnGZ8W_VQWEHDRCe2R14K9JPkgbBcVp3NRowPmvutTO=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMmqsjvafozsg-MBi5057g_hKito74c2pBojAs4dEs3kB4OciV4umsLvIPvb2irpHQhGUvlmpey2TXQt4CAGpet1cw7WHmC8qjVI_YVREvXAZkXjBlRIkF_pa9XVPwz3wB-PHSiF18cUCEMMG2llkXH=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPAX6IX2nPdG0g-T6sbBr92iuWqyg-5fN8lqgJceHm2VEFr_WV3lpaFsu0OZg-kUCUB3P1g5HBL4gpO2GdCsD4xOPHhYyWVZdoYJKVA2gbDKJJlP4410qB1DLPyA8CSAuN_VRKAS1KOmeuiYWe3iosn=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPNBO4mqQC_NqKZk0Okh-iVQHO726M1EhV2PeJq-VSLCmZukG929WaBTLWRauvUEaYphm8b55EsS2HhCdDzePu8IJDWY2_Khu3GEOWFHbacB8FL-4RYsrUOjexWdSsJ-rsYASq0wq3L8NX8PFoDzaX7=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOtWOIvTlKt_DMQ1zsj0W73aZirKbkmj4LiXHQDOsigNRAEEzHKnLdoIzMQRcd8WhUAAktUGRER-jhRMldtLoWqlMrapuQ1dNnTm1y48djGg-oL0ELiRIPIXZJQE5p_CtiAo6oegycDpzH0a4lLjwRP=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczP5uCi1u5fxb_kqs9Sa3zD1gA4ry6oJSBT0EpajB0OYRD1yIGZ_p-o3FmLyyYuStmQVdBnKM-s1fvpI8QgqrhwjTHCfbZeNCSxrWFMnlCF8wbnlrylMbrjvck1gHFeoPkNi7uCp9NJcLUsqu-0_lqyI=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPRPtCPYKdFvoPEootv6vlKHLilgVcsITZKB_1ARcJ_RlLTTqVeO38gqtYt0-qxbGltDicGT42Kyh0ENlTEkwBoSjMW0ZQqDHAQdixQXiqCCashBLvxdGF2_Oe2EBHoymUZBYSLipnQz2K7hRxdFbfg=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczM6UYr8z35yqy9n3o49_lv8vo4q0pbSxCSqtQH-cluBdAS-QVyH5xJihA0B2YLICbMB-jMZICt4JhpJAPHfDfpoA2EyGPWU7V3VAMVoIgoB8XZFzZ4HGRwiFKtIvJixTZetlqd2J229NKDz1gCjLvmf=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNrjbiGi-FpHe_uKOn35a1B20JpC_Ls_T54NwpIx-P4LGMldc9qH-uHyomuYrqeJGBjUqlHFCSaFNzmbvdHNI_7yaWk_UHnIOm8PS4vUejOzDXg_6vQBdh5RfHCeJ8ykVZBxZe8bxrTXSqAaL7xL_Hg=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczMLC6q8kOBZKr4AxuBCbicL4Ip7Mp1nuCReUnJLiCN5oManZSCQu21keBjnh0el_WVbNeuXp8iNn3HAucnxkwRvzRpm2VyrqrK3YTF7SMQb485kTFfyibexu0-Y1_abfrXKqzXRHikbQCAh0v_RsCEZ=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczMinhmmipSwAXVBkYX3iox-rPD0Kx_n7s350u3zrI1q2CSsTmRpUM4LQ2JbKNqHXkw5YozNPSsVxiHWPmPXeuHbVfSwhp95SiTFsEee7IdInhExLPqW687nBJRyPST3iwXO-73henFsewfi6cQfjrC2=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczM7Auvl_VJGxnAclu1ZCPEzGQS8THmCYiUrBLdkcAF88tatn1IgqZostJ5H5HztZCap-CO_HCPi4MFWP6z0DGFKn1IsuHqjB3NF0yhDgzDMkaHm0CGNdlxFlr11itL1ESm3RhcAGu2ffWRfjGKRqGVN=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczO1M1g1SelkNplNsuw2EKYQinwSV8KLlzs-3eRgLgPQ-85C0g33jGFLOgNtrC4C1yV0AmIKLyLRDhNFAsvgGmO-SMinNKHM5pPozANeiWcOShaEuSaDj_Od82sabDI__LYEu7ubxu7zVM1OpF_EqZ-y=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczORTMMf7NUC3DjHU4VvVLjYaKSKftTcFBJCPc2_a9RVnkU9ioXRI4vaiEc9QjrdyRGcfytIOIJx9Xgcet1b4u5I5BFt1tWmJc9xRTGDAZvNdhE19y-gjSumyIm-xgDFLKANleUyUvz7EypL4iqZM3yw=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczOEO3aw-uzQE7fr03TvfS2kBO9sdiVEp2z4eS2PKZaJLoXW9yBwVUr5B5jpEiVBmrvh4KmJLQ11DZfxBN7wfKuRvoDnkVkswKJlb1N7sKq_GpMThyCJdpWaHrM3Z1JzMmGD2cm-fOOjzeu_vDG0DjWP=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczNf-g71gKAAgsG3ZtYzGQK-LoI4fcFhAddsOcfAjDSxKE4FkxjzU8t5Dxd3Rhphqe8DQsPKs_STmWk14x5zbidgc0eD6vSjuQ6Wiw9NhNGpynepk7nLC90VkiyW6pvKIV00nMnT_6R9qqFHsGGGlryU=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczPkR6_RLChEe0qHMKqEzQWSAF4rlYF-dqgCwkgKo5bYCvYemYPtXptlQBH-J8lP9Q2-QPua8flBgVdWOZvXLgFyVxFsWUoYNe7GI8z03ISJ9klHp0wx8AX17c1LvicU5rINuiHUt9uKTRff6ZUn6S5b=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczPvP4iBYovGweF5ohdEJSrcUXy-Y_44D89Rpzhk6WGM9XYjI-5MERTUcQg5_sVDdeYtBzANB5vXXuC0fsEYOByS_AO9xTZCK10eLVffWa132ZE6wGtYNFIGRtqVSsJC4GUvFxeQVcOD3D5reetYWUjt=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczOwr9u3ZxRKKhfPvwYpxWm_CLy8vk2yEclDUEWP8R1r4PJDte7IQvu0CZnVUPEFWHcW8f01PGM9Ny-NsO6uay3FI0TvTI1TN6wbN4ar4sF6dmALWkFadYoP7wY1bBzQGe17IEE7PtEsx95GBFnwYbG4=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczPEksP4mofjzuWrkJJavvN6L1vk4fkqnXD7nDoOxbUOkLDl2bV0h1pWXegB17hlXsGgnmjsH4VyAoitpchy79IJGMYQKYZFvnvV3ZNB5d6s8FMWHquSn7fjoFdflO0Vf9Y77uoA0tC3klkMwf7MnY1z=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczOgmwrEuAyFo1oX-zpb8rjNkzCAbnpOL7kIescRUXlK--DEE0wWcMi8IyvxY1584uCH0hcAc9UQ2RZnkdKEmH2bmTOO9b3Zx8XZopDrSWOzUf3YrdY0VqVCN8ZwCZTUmL-KnTS9YkFX82Ax6SUBf5kS=w1920-h1080"

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