var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNCZtIarzGDrpmF7effpMa4iPrIK7VQIELhlDyjkY3CxeUD-R7FLqZzvHsggofgUh7K61s2Bsabtyx0LL38sTPw8eiFH0_MGc10QxLoojrA_p6X-9IUnycyBzrQ0LraEIXUUCHdWKlfY6u3rUY487yF=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNyYtNJIU58AqCTbLdh2XRAvLxWTrC8cjaEzPdFqyCGxgWj5Ww8svu4OkV5lDgz6EKvrK78yFpU-PwV7McrSo8lT7lE9e27DZnuqsWQV99kTsNahQuSG6aczv3eizURIXIf0fRAcG1uK7tiCCRmYr-O=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPZcWqm-hXDSZ4JlBOGxt9DFBwpDt7ndkDsRtW8mvLP1U2PTdwpRJKaTYK_lEywPBErs-6HQwDKrMloryPmIOMWVhUcMu3KwK7OO7TzQNJBHuIMPNGAJW3QrOxzo_Hu29dLLW1FiYRhAJh45jfQsAY8=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczN3oOIxZxfxLBiuQa9hsEMX8MwqEo000a_xN2tJOaHWkRdPSYX9HFDe-VpJ6RYVmGCfuYVKBauE8sVkeAXgZ8MxcTtlUPEEW6qxe322p-yTcObynM-4TzP6Mqb2sCyUORiuj7TZfFOkYaeFDUWdkhcs=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMrW6Vbi4XypDOtOnzlxcogqxsvsh4d2CVZxx7Pe3ZdfkUadjyNRdDPhjgY3QPo3wcA7V9HHLOHHthkf3uBhAeaWkmU9mdMjSZWDKKNT6mVyZq6x0xHDy0LzXQk8S0VK-xXbaW4wEXHRriTTDtIPTjl=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOXTahegCswFRZlRcNC5jgktQKByCO1Sc4dx7hxG1zM1xydqUbg_2f-y2OCpGfMWhvEGgoez-Pj7F5Af4mWIrTift0dV5enKfdRTUM8cfr8wMso8_t9Ch24ic0kKPUj7EJEFUV-9G1eqOdx_XyFmJZS=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPKa5iJMUuPfzcQLGHGD3xTrGt6WyxMZeV2o8mIkyyOiyCM6jpwIxmSs-NItn9J8oOgIKeMKc3XlZ4NBL-dEDTZ06nP7cqIq354DqoMLJlvXQiRvdEP5C--Na8I5J3RMGHD20kkx_XuM5BfLIIN_0Lm=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOeWjbqCyT1UlHwvItG6oWfYHQA8EMnX0VRTT_Vmeo5521_t9sherqA_cuXA9mD10bJBSyCLJI58SH1Rf75PekaWzknsqoIP7A7sTUhDI6pakjf9fKwOoZKz9k5F28W5zyGaXzQfLGGCVMPl74T598e=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNuGP7eUvOjrvUTqkKp00cNgjUbye1uLjoSIgAM9W_mbpuqAgr1F3srfYy9Xm7BZNF3kSNiZ4okIko5AlTQ_Cjhk6-ihGaAByR8Hh_HIgZivagbcZOHPHIJMX-E5jJQY0TDfVvLtZKrQraab4v018jx=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOpKmE1izUdoTogluVXfttXNb10RyBVsevS4JjmreBp7NU7XUTf-vOIIyXtGJOpb1_BpjE3hQ73y8YlFhodkkfIREqj2RTt0DL3Tf2GoiOp-KVngHkv3HWe_Ov45x5QtmDSpWqFv_oHyy7GOwkeuTNF=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczM21e9voJdlFiNDoqZgHOfom8NvIwNPlZPDq5Yn1MV5_nKpz-NE77YFuvOqgEeP-pXFXkaQ3vJFG55m8ZwhacP7P0yv8ZFHxazhKYnfrdybAAAdXMo3FMnTQDpZKdCVnmhY3XtJsfvNotGUZfdHbVWs=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPeGG_6mMy_ryg25umv_uKdZxrLUN9sqlLK7_SuV3L4ZzTWzaNUyOj9glbv95VrZEhf9Uzo629D5LyivBGmeGRCWaS-8EMfeD2pruQFTe7C08kD4IsxQhXS_9qWxyc7D9P63Lqz47179limNjDRPlZN=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMNwsLC3m859gjaYmJ_07xcIKxFXF69WCySGPTOvrHcU_G_ITV2xNiK1XZCHcIRxo6wYX3VJq7Kbr4VCY1n9_I_t6-ti-pcfK98VhwUXGBe9scof5R6u1U8Q2cbb1LipbbsMxp9F3a4SBp4FQVstK8U=w1920-h1080"

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