var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMLkYlxe2RI5kpmaLApPl-rL0H3JnQiARuyICbBT5YVAIuEIP-hg-6e39JQhtYKCzK6eXGpuuuzSWlfLC7-1rhHKZwPTdd__2gnkpu8TBm_PpW3Ua7ccBqR8hVpyP-rHSOhuC7osmSXypMzSp9Y4skW=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMkMS56OawG0xkw-FWuNxz6m1_RrOraAd49TjUMHjbKoMj65ABFP3m64N34kB8I0t5BFxFD6vJOzsB50qDyEZUR_2kW3kCyKJeH3Vv02RID8IFWRvvfXqqWNQwn0mprUaFUtazjj6O3zwr2ZCGVqYzF=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNaJoO7-nIUryfcfJvLaERwymJY6DljC0EAvCSrzQueXNrG3sWDcMGbTQ_1ixIO_Ulmj9Een3lzat02ExjLQV4uyV2zOpi5GQUYtImBlbjulikCz5FHNL_UZH9yBIOHr6GjMZyBqVQvP22nlxe0rohJ=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPMEbkubTwonjytYuR9LOy0dpN0JAawkZd9DPcDBtDywrfi6cWjXzJ0SK91dsXaYPBGZpYD6aDieNr6-FI8rjsfvqZNP4GxvSsuCaqvyrUnsLJtjLY7npJohhbi7xXNjFYBEJBlZk7CDUNUBGSkpJue=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOdnKsP0Orj4QY3riSLr4NIDKpqw28KMPXSjLkdfCq3WfgB6qiwPMdt2bO_R0bb-To4avOSgDDggTzGSGuLOMkDJXbPUdXOeUbeEa5lzSG3c_GQKRu2Wh7DHhPqQpxBoZ4j8_fNrRZBbot7lFkfz7lA=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPv2qxUHVQIwIcDX0jJdHqdxiwQT1IMpT109WJrBoVQaE7vBUdzNPTT4jPwUGKJYfsFPamGTVb3iaLDj6nQpBLqeUksvwdZkcAQmkGxQ0GbjfqKyXovLwTTW5lfp62ABeL74NI9XwXko6qcQBMjVmbD=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMCdz6AarQtpBBMlrDx9q2qEp4T9RbvAoF3imbhU6BNKohG3GJSzglj23Zv1oZbmhTpN_UfM_-DFAv3o7RVA6KLph9T58ib4jRh6Svo4lyl0khfOFqDwvParNZ37NsWQz2YTj4ibRz97QczwrT0lpeB=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNshhVenSLBqJlCtlnjpUUoRnocqjVi2Vlhk-32AecQVw1KEbge25N72IuoaJoxmJyspoNCY1S-HQlUY4MkoxM_AuqnYIXgbxMxY1pn3UF8gOt4dZOI7nYeisV6QIjxH54dyf-UJgUlyabkNttgHafh=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczP8p5n5f4hc5kVJHn2OwOCk1GEEuGOLMX0pzzqhATRrGe0Jthfo7cO6DQr4SFA-lK3CKllTMyZyh-73cC3RsjzPYh-Nr3lvjGxu0zkyQ40MLUKAyTnKyKP06f-qSKK0tHO89vOZmE1aXLJ9imKKJqYA=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNkFYgDd-Hi6pJA0QDIqq4iIb1wcHVa21Glm6ihkKsKnErHuo5t8-aDANOPkTfRSEqQoyMujAKQ-bKTpAtxPm_Bt6W06syiB1rOVfPY_tUfbIfN1b4Tgc1IibrCKNjgB_zU65UjcajFXksmzGmu0hyk=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN4MR1VBMfTAuAdM9h0SN6M7eQc94by8TMjZmBh53waaOlTSNLc_By2CbCoUNqc65vC7LNZKU4AFU63iB_X7WDGuBZadQv_iqPKXOhQzQG8BPcPc9cEoMYkGyj45xxAMMsvQOh-xD_cIy_2u81Hpkkc=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMGRcToId0S59Usf3dPScJCJPBdqOR81yB2pdfDzf2OuOPxSOLa1iQxHbdu0orYz9Vv8hB0JjLzImlwUSPy6uZy4SHGq-pjJYkwZ_Y8Y3nb4jxK1hxURH4KQj5iRwfXuAjvcwfqLpqFOxkrUmHA6eEN=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPeh340oiPCT1916RaYi8tr4AjgKSSKbJUCuiyMXU1Hhs67KlAuSz18-wSifa7moDIcgE0KZ_lsfQgHACY5LYZbfqb7JmHKQBxoXTGElRXpXeaAej4M7XfPamQzrlJlsE-trGSD2RBlw_sdMsVwTvEI=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPyFwJCYzLkUsT3anm3rI1rgSE46VaiDXgyNvQpJBN_wotxnSHLVZDzpLanpLKKazzGzg0oyrlsCto22aOFj6EHaUI-fYatLChcx4E5EiUr9OsqZSSuvJPfGFeTK_UBAz8SKUaGlCUMI-kvyWLouj9r=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczOe2goY0dWvuR0CSi12q_mnB3MNhKIJNU6oDrxb2xb8lLbgObJ8YBlSQZCIqOuFSVPR-IjBDngv-eTTH5EZlx3RqJol3A9u9XGJqsmtD_UZQ4NiOK_vFe5g2bS4d-cwBswvswExROIjP9zGVh7a8QiJ=w1920-h1080"

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