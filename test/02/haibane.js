var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczP12qXyh5vDncRvjkGk-RUmriRb0Tofn1fLMuqTgjznJlniko79BU1SYOiX84YHXcPd8DL15si8JkHHwD9ZMKokNpz7ZlSsCXSNVmISK1MYQQK4WW_W-Xy-89RIPG5H9eoa8EdzOoU2Mn3_i5YPW-n7=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNLgT-JypGE5vjw6TLWbl5Ub5FEUBcrqBBTRKvEnU4yop1AxdHSp4Yv5vNPl260ZVlANoOlD01Z_TxEloUb41Df7naY9XyjwaaV1XMbf_w9f3xpoDqfjAVrkqFsDjq6H1i4_gkGfyMbufBS0HXv4ZPq=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOEqR4CBykAJb0RYdIt6FZ-i_dVA8IM20htGv6nOgVxAghTjgGbk28qxP6huOHbT5zF-Ic_FYylifL3f316AVcyQpokTWU5xckRoeW06yNDI77YPTF3jaWcANuJ84Pu8JfS73we3FCKHj6hVikZrBhB=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczN9j2EGU4uPYocpH75cf22cjhf8v8g-ql_F7MyvrNGhqzbo8K1OrECzUEUXvwdQiPRe6VQeaFNyl53mIc3d3qZFh28lGLgeLxyYo_ebLugJAMu7LL_pYIinKo3Fb9oqmi3NHN0_JSwaCYenChL3lEjb=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNPm6_DtRg-fcxcxUqsJwFADN6jhIcn3-8GNqOuZ4XgIFWaR4WHep30aRZbBpWHc0MKQcYUuAp1dWtw6Sw12kHIh13yP-kMyqKVA8kXocawbld-l5USW_i7GmYaK_eXKW8x2O06pcUBMWnkHvGrYJPj=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczObPQZLXmAYvkhGwQD1fDjjoMU8YArwJOXoQtY7InC4VR2TdfMleWdgBQe-LbWZwG8H3_6fyUYQpY20tug9Zfnyl8nJWafSyq9P4UsGpoKQRK_frq1ZZBBpQHNcm1ECHApJ3JBlqiTTGFafpwO3v0Sq=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczP7PFBt87M3acsSYP43QnPYvy32OcAcsPmGivF0xApf7QHEjILe09AdRNAPMTnfcEESYsTpBsV08NraWI7tduLsjjrXgQNOOLNF7gmlTHbAOjv8ME5D68YzIReBTLdDrHSRtkZCpdaEpALbiQnnzc9u=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOupLO9HgS04nescRSiTaye0lmB1175VtExOJFETHjxZrP6-uaRhs5tJxCC3j6kr5zBAiEdeXFWXSNASC0hwKd9sRj8q2Id_x4qLcXJCPGS9KaaketrYTQJVjK2tB3vDo8vcJz91T_It_xcTvspUBvz=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPYmHRbgerSqTAdB2DA_vjyr9YO9ts-VTfEQ5iMySDtLmRG1wp-7DckegA4e3pCDa5Nf6-f3ZnJ7_FRlZQYmlJ2UGi8GG8-csPNrp53RVeBai44WGI5LR1eS9MvXQPZKYGDAo3YCfWqItW--6Vgpryi=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczO_jWGf0zR73DCvq4ZYniZPZSLvHtv3liSrpIU4mddRP6jKd5rvY6ntzzQqMRTMQT0YPPPARaZLcDlrY_4TIUS21UtzwfHZuiTy1Z_fJw_adbRA0BV3D66SuWKNm7koTdVJKJm2rqyxGS87h1pML4qx=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczP1mU70TIWV_UnI307dsls_EeSpl39YlBiYvCTNnOJ6d9YEkox8bVR-27bYsiQsp0vAJ_27IxD6zRfePueOoJ1LVcba3HeXZM25ZbPgXu2CWOyIOfr0-cQANS23s0lYP-y7W92YZuhgUQ9Y2KufUJx-=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNX61k86k9Opw82M2s3D9pwv9QZmCnuruqjGoRNZMyNh5Rr3kebfF-hxtvrIdLlaglVzLeA5gOt1Rj6K_TDJNbs7PWHVz5lZNUWyxtHkRAOahQ9IrLjx5usSuFj2Qop6OYNdPNkRyVZIhD_DOHwSYJQ=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMZSP1nRsRcq4yS_GTYfTSpK4dxj6Yqk-WvtVSXfkaQcWUk6U9KB_zmh2bPIOKufpczjvFvC4Qs06O5r8jVH-Xdy1M_rhmWxWuoqE5yadj5qdaA6uIM2f5Bup5jC_WnjlfapW_lNP-IWBSk5QinWHCy=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPASRRctvJiWF0hVuLEW3LRZrYgc0vhdo-fWUYsB0YHzjX14sBdZLv42QzYyZrMA-8hdZN0gsm8FvF0x8Cb2lSHGCer6-r0JJFnubR0XkDJRI3fS8f4AnC7hDuWbkx-HWB00OlxVjpefFxHYBwOIQV5=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMrOVR9Dr78iaE3G_12CVxG2qQk4zz0FS-mCVgl5iD3NNmLJ7pp6PdnebC0dqd2mhoQOrb1J3xqDoczQyh0-VxZEMK2--tw1DrZcmy7ltfxqBog4VzUnFSKBLIyYM5wWJ2CTIGhym5UuaGzfmkmR7a4=w1920-h1080"

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