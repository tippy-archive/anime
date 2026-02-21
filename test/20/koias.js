var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNgFYdO-RHslVkiQhp7z1ZmArGlLyz2C8SGw9t2K55-3idb0kQ-cLAfHH4OlpGyh1qp2I96FxxKHsxGRP-R_F5HL4kkoZeBcieuk9ej_cKNuJ0Jno4VbfzOe_YMmfZg4nd4GFl3EQiwVevyx3_xVreu=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNaGz0-ItJX37sjxQ8SxEtkm2cOfeKoI0psAoPxtJgDA2iL7Hrr72NGL5vq4ZlyLZMccTWE_1vg_XjZXL4XVnn3hrL7Lca7EQYW2KjsVoQHCoSdmX2-Yk4HSLJIgxsUQ5mfWYwikI-bx2bvzalnPSQL=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMPIhqK9TA2y44WcvXE5bRZTlSWYUK4XC0Ju3mUYnKm9DUA1cd96swwS29PqWXPwy7YsRt4ONFwvsrIlbP4_fJXcu1M3A2N_KtmxrWtZ5dmoJ1awPn82oIFCIS743_ZAGg_SvOBGJWvGg3Az8CnznW0=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOLFv21R1f8fiwVyNnYP7AcpZZ1blTB8PQuEXVuYo662MX4EZGzzqAD88ueSh6HInrZX7JBV7yIDfxeMzQ5lURz07LboA8GbDEE9kX9V72dzNFT1lyedOvkuDpV_9yRRj-u0xSLMMIA1Are44B8LfxI=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMJ15xm32OTw_3LJGkUA7a2fMKDnmLlazKsBzmWsD7La5Mz8hkkiH5ezuVOD0oLDoy0LSt1xz4PdYhdq0OP0FDawtl_nAmcYfqaoybT2_QpOQG11QLeSM8_J70tSPQ_NezttBrJuz2l3c_kDwpR0BOE=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNG1m_mq4-qACYnFnpjXzWm0B-aizHR88eNegQkcMCc9QpSBhmYcrdV0Jw4aEQjhwFGUZ1bPdkav_GOhF8CKLV_g5w0dlb8EtN7IKxYRHce-M2pkkWGgNiOmBEHYfmvuQ7LKlrXbT9GltoCz9hFIB-d=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNDIFV0A3aXn0Yv0wWHSMlnPHlMM6wPJySHZkv-7DGCFYUQ0UNEAfNB0fnkqeVf7prY9rD0_AtwdUsOFBE9Yc29v9qa0fOBieUMr6sddSlW1VIuPzYOfF8BHSG8eJaMCkmCmA1mI4iqRcDXsT54SRcL=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPEyfL_eihmefFHhK8P0Ycyn9fEKKhZiwulcN5t751DzA7EhPjF_jmJWrz_SbwJv8iY7IXJsAizw7AYWr9KhBmlMutc89k7PqMy2X7xpwr0M84_USYC0LXAwNL30vdsceDi6S4AEEXK3uyBFaIkuNRt=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMn5_t3l6lASXVGJRNjr4sfTJiry-S6nlRp27GlVLy7jtiZ3CjJYhPM7RsA7HpLcZmQUOCoavU_IR7zaJfvHR6qSa7ge6zIdWn34oUi900PaKssBLllj3e6IakX2h5fynThxAd6LX0NF4EuI7aA7YsN=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPL1mpbkWLqrcCRJaJHfP-bNLv2X5AfA1-G-5GeQt-9ElK3-LDc2fgEkJuAOZxFvz0HIzCiynY-j_EEjKBJ3gTAHmi19qoXJKXEo2KOqTc8daIHep4ZOPPqaD_sbtbPpV7ZxMtX7T4DgZfVIx0V3Fno=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPyPLc2NB6xtQb8UMopWnjgo3M4Ur833lzepfO2ZXrBr1pyn9PJbwrkqM8w92XhvCKmTFgdZeejpdfkdusJ3ZOlslooT2Ic6w6Ovxp0vHtajNirGLoRRoSfGqWWxupQt2yXQXPWOt2jgkwh-bVamgbD=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOwZCSzVU6lUb0pp2Io19hNPA-JuaOBVEbkIlsKXf4CwxHp_ZKYqrngDoIEN-VxyrrEwZ-xNxS8ezPGJTqzhkTWQFZSoqd0uQ-OuXdE1vo-wHyCyKsubYHJRpUDmFggqG7pHlfwyW1CIF7hXzLnOQzA=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczP290yRIuzI7ul78rB_9JWYYWntpEVyTK2sDa-woTM23qI_HISssWJmcqhhuk_EXV_4GgDaBmklgP2Zkwsqoi0J84taD_UnhgX8WJZui-ewn94y8tQ4rwf9z35Hr7U_njoQE0dje3c7j_ayaKCW9r24=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMlCHQAcMVd_lWiUPats5iCZOjJ0FZINfetZOcobUYymnOMu9fJRcRjI1xy5w2nu9nXZTZ_lm8yuhVX1uMyAQiblEQ6mJpsZAL4oNpjwtSZP8zvyLdeR8V8K86kaEppOA4n-w2z_UmHKWqRlzKawujK=w1920-h1080"

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