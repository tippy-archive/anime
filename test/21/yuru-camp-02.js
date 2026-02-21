var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMaEh2jVWWj4TYdIoOuUIFWNI64rRycQvJ6XqMQ9CECzkoiT_6GykfMP0QrXXjdjBdwegHrnyNG5lvVNz5iSggZxwZ6wsP1xkJwNSYFQq9-tnd0ya9e7fK1zgLhXx07ONTZaj_da5J4oujUBSQI3sCw=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMezhUBjnTLd1uynSOZky8Uy5BRul0KiQO5H0Pb8KlL6qeS4giMtEpI-KPKOVJMC8CLk_HewyFBLZabMJKny2VpVQhUp3qVKa89rpxjGOrwiiWxdPbWfH6Hs6kx6dpX6UH-MlAaM8q0_EeGLY85fw_o=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOFwO83EAejEjSKkFeZc9PqQPv_u34XLdiKErZAJKv9tyLIxhce8uSBMCIL2uLSPdZf5tj1_K5ISiE72zN-wqsk675GsiK2KRQqFLX9DCIkdVYcN6oyOfu-Y7W1M0nX7hNfg01vLaWpEOBLYy18rE5L=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPidujbJDwD09hebdtd_Q5zL5v309JWezVrnQn4e-0IOCEPMCEfi3T6A2IyJccdLIXFQR_aUph_7YAUqFht57_Shec4net3qkOWyin4H45a1oVQp30YydPzfZK5eqpuIRLo1Fh7f4l5qtYW6iLtZ1bt=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczP3mcStmieTLdr5UGbVUA4sZKM9OZvNJbkaAbID9kakaTcLW0E1ncDOy9VpwWXwFxARr4nJ12o1LaXZcMchfPdtdz1ZZ0wZgyR22O8sXRDfbknGz1AX7apOP9LpC5h4Lu1bjMvqVpVd-9gthZcOB2cD=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczP5e7jDzxqDl0m-btngY2_ADBtm1EokjDhVj729sz83li-hry-Us_dskCzjAl9h4cfNV1GrnV-kzYJViJ4gJJMUEEuyjB9kC5z85Ym6SzMyuhcMnfTM5OqBiXqE_X-HqlZ1FokFNmMO1Y0mDhOfuPhD=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNwoZ6OQrckX0822M8koohbfv9hRTmzG7pf_khWorN8yBwfleXEToRiTmCZfR59Sgimoh3OcprbbV81-ue_YAe85BE63rar__j6fOY6YxbNoDx9mM1PHElE3mGrTRsTBjz1EtjJcOj2b6uGX5fR1I4R=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNJIJbAWirKlCyMfDST6ECSUrywOoALvCvoMT2jJTi_0TtoRLhM9m7-3Q564lfBiGp7R2aNaLq8wbv-v3DAUUfKWXyT2MJSsEL4Toz0Lpl8eMPY56sb2_7cxhtoBoxU6-x4aDmVAzahmNzzU_oNTr7A=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczO57XcnDsNSf_OugBN-JG0j1cCB7N0loKv29PBzGpjcWAHbeIANaha0-vxufinmUVML6-ulxVmD6WUUSM0vMFnNdyLqM3b2oSvQhPF-Rs3Z_5Mc2HMjYb0fnQ-NRD1FXSKG6haMbPlzEUOpBNK63O9a=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOph038Mptk6H0_UO7oy5HujA4rVVLNIO-1PZkHKKZAd1rz3OwItsNVszYpwiJlzR4o1fSFk-xZHRN_KJ4wGH6K86WrouFSYCT-rEyV42dd3X6e8_biO2ZxQ6VUlCicKwWnHkphhmHq4F3xL4sToBhF=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczO1h222YSH-KtHDFLdGlAxLyBZZ_tL3dkwRkXhKlV2lxqjYVAhhON1Td_DQz2I8WxFvSSAsG2_Oga4JSnF0AGGo2nxLHnLUTJNjQH8EREeuqHpnrhhgbdR_6TPIMlDqe2XCVeyP2fsLQPNLYDKNCN0C=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOSwJZd5l90akH1xBQUBvTGj0A7a0EULXtneoF-ssVqYOgCNLbqk-cnJfbr-fK-7d_TYHr-HB-RhEjr3QhAvb6NFt9TPpVsvKx4qjb35Zh6-YoDi-B74IorHjL6ygm6y0GLpFpuBFjnrTYHR88woV4f=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNH8FClHCdk9allLiWYMWjR1FJnTAj944RSOjxXfa6bbnChDc0pTo1aEJ11py-3FvfdjEwawvDSVcX5TNIOtZ_RrVNk8g6JiwAsQHxuPZ2d0xm9fnQ2tIvt2DLMqh7F9Pojlv7jJ8bq9QbDOMprxj_9=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPTb7P6Zxr_MELYgmW6MdTfC95IGtZ81WujxrDfg0EPcc6xHGYPadlsmDFiXc_fAGlQgEmAogyskXImJY5k8t7PEeN9dgOGVvrNVFlwxZRWMlEyMYsyhHmS2Go1_yevouqz5xeCoS7whajnqkFJM9sw=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczM0aAKZ3NrL64BF0G_vuKFvFT8TK_-ZgqcvRvuZyEX-ZRmTxGTOzvk1b92Br5h968zLuI4ja90bp2EbUiwj5y7Radwu8j5VbCpH1g_Grl2VM8aH2dM8aVgq8wGNro7c_OwMpLg6Mp8J19dNX2BNc2p3=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOkxQ2OB8tupVRGoP2gB8q1l6_tAuSUSxt7DQpGHV1KsB6SmuXXpRGH3uTeBEe4fb1KMFavOQ_ltwfg5Bsq8nE63Mbd3wln4k1EieQUnGfUDfAoFfpPTs33sBMS2KGk9UtLPECifhwO_t5ReL0MyrH8=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczNQ-5uku_RSR3VYhyo8mxI_V-0ZeiyvF1tmCiJt-MMhbwND7auABG3lTX8uR2cZYPKvEMuUSAnxWhAI8Yp1eEKnLWQz7N9RYGH0E2Mrp8uZamfwF-TTmpBALnG2ja1u1sHeS4AE2AW0z6tGZtZ1m-Qv=w1920-h1080"

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