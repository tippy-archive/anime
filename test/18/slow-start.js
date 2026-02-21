var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOLwHokM60OIOLhI2aqWdX7fQOeImErTz-bg1mulZAbWUn_OVpq9MyOwWB2NOZPMSD097ocyr0t29wxelNqSqmXz3zIoxgk0PTJ3Y7YLA-NXs4aLBmhefBkmjyQbGzCpDOZfi4qilLfAky1-YIvoFtR=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPudFS-y8tvbYKhcaA-Chb_JhUZn1RrdhLmcyM_xKxd7EFtSFB4x4EEiuqhXW-JXZvW7tLKz45RY-u7jQCHeyw0NB1jXKJUTMRJxukNCLvp7ka12FnekeGLpYDiFerKMTqBGHEcqdSTa73bIrZwcQ2d=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMbeSRjUZPfNOUIMLeTBW6i12qutY1ZYbT_MrRqZ1wK2uaeQL5cJkFd_dLVpprtyswio75-07rLrZdaxDxsQxVeXmLgI0ilNR9b6ycUJkEgxKKqiuHHbZuoLhKmG1ZgOp4FKcU0pITNxqFTXiolZnPH=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNXwtZf1Gwxl8K00Buuzehuf8-O2r2q0zYmt0wVEdqPTbdBGYDDHM0gNEsKoqN4cZXELR4bAA_qYLFK8wtL6SM0MivB6TN7gNzvfB2DiKuV3r7v8towloc_R4e3PxPOW-tlIUGl--5-CsKyLNsOHC-L=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPZEgwJqcf5dXaZAa0Lcemv-XmL8rvZp9dtL-ebVTapAwfyNXCqZQxOZ7S1YSkhr-YdyPv6z8_th7f52zqz7u1Maq3x2w7RVqwcUvrjie83xplXG_mwkyL-m05fFhwBA4ZxVNpaUW8BhR6paQ10giQw=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNf6WYowI0BRk28ALDIbpwfow8o1OQ191g_ClN3cZvtK3tiEACfgxH3AKmiHZDgPWok1qeu_xvYapXI_r3311PXcVmviMBilJ5mE7X6sfPOHXOC_JRKk1sb8CkVjpMXCol0eRoLQmQbPDIXSqZVFScg=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPKpceWdG_qVG6ToT5ZGbJ_4olhxWcoJfNGm9Qh2u9NKAFIm5RPcTU5ZPVOBLs8LIct3pguvv5NcxOn-meCZs_Pz-NBkOQHTqv1PXFTxE6dOdC-dcc_9OdktreOoa6pjozMu_qGL1-riHLDgjZ6FpDe=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPtcT5eb1MXa06_cmWnaUQ0d371WeeTS8-U7m9vknEQv0Hz0pyrvoPHSYViaovX7b4ewg_jtb1uA4alC2qN56bol9L-xkTRwuj7DFkuHaGiGiLtzACp5bR7E-8vhATrodJQQWk1uYmuBznN1Ivziy6-=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczP0nkt5sNzFO0en_8wu3gFfgkFa1yIKGpccHWStrxL3YzKBVXgZYPHHsR_TWVOn8EytzAyUfn10ezv4z35YmGwSETq0GHiYI6JGQ1kuyVZAt0WeatXKIRSqNDudrnfw0vRpMBNQCZl7dE9lFlcirEZq=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNf-N7FtBeLefiinV6mYUqc7GXAH233FZYe3Yzt0_IYQW2goSHBrO_AeZLhFuvg3E-dbRTg47_pgkj4yACIQ1ns9mjWkK6XXQZV4896In05HOLJhptv8KVBhdqkOqAiRQqnladVjzy0kw5KnKUGod-7=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczND7VdZh0hKMf3Sl96qxaFxJmOPAIB5wWWmxcXtBmHm_ahMEvWJHEIKm5h4XT_XW4xniDnEPfNKB3EqAPaQzc8d3sRYKmVgHw3JCINZK6_MvH9bqcfI537wgefQGTTxSCnPH_RvcJf5KFu2DLK5fVuy=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMoft0ZzSw300rZ_GIIIfhh4j-V4hBbQK-tPtqAyQsT3wKKxmwfr-jbjnkPYAHn_BNc2l4tNq8r3oNoFfozyRDek9MAluLIU2WleCg20B0_8z5Hn1qPTZ1TmaUizoyERE8VsG868Ze-Q1j7CllQOxsB=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPFN5MhQoJaJUsOtbUIDwQbmnCXETv1UFkA3CMWfS92AEfS4eoq-BG3NIcVetEP5wk_3sam6uhVe68N70gilga0ChqDSOc5rQg9qLQvRkEM3Fva745Y3uWTsqlMENGjLVOH5zvSVESAnkQhsR-k9UDf=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPVZENludDVJU6QpBetENmQumWSVnov2kcT7FCRHv6vWdCHEzv_WF_67WaTVeSJx1avuQwjS8mpnS41yENPDL-zbAfbEq-WxiOjL58d12GCKO3sKuUEQIKZWHXnoSC182Oi5AoVsPMUwvLnjkWl19x0=w1920-h1080"

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