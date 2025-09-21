var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPZ-pBaxPEbKlyfonsjyFdl33bav7MZxdokXiNTYYvEKkxQNIyyq84wGzONM7zZJTblX6IHIozCxPMs8vNHb1b-rMFL0hc-XJlHkv7avOZ1zDWq7c9q5l2e5Hhp4SGSjJGUMhrVD8WCJRRPFSj9wPxT=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNcFSbpSvDz-flUeR7h_DdPQf1NiFfu0-of9XK1BVUv-RnfElISzaXODB2p4IqENhL3amNl4X8-DdhNuczGU4VmA9v-7n_I_keLli7YWnx7GVhOlG2s6nO8fycuIRhiVnrQWsuqxaBYbPCPl9n3dSUo=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNUCinZxk2pjiPFY-Af1y14yTu7a1JYtp-d5HcoqvcaQDoTBs_XMTMxQkSldGkdFvu1kP70LyGG9WIGRgcLSPoI1VLywNAba5TKWpaz2AWqb4UOmdBy1cB3DOAAxBs9f9538pK6h8EmQfhDZhCgfTVZ=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczM9VUpfkSYjTZAw3MJwNWGV90iPDr5kYNuVVQalX0VbTWK_ADN3f_3fMBACbIQQxC-Uzq_qPnEEs1W1AEgK355tqm1jJ861C0ciynQhmutQ9b1RZFprOOdhTb32wRfLy6wbE9-kPGrYzWrIIczI9UXa=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOrbnGOI9nup99ZexWKdQIg83vFuYyw28m1_g_mqg5I_-HmU2ZDJSiuKvVy6WrO2lJXCohH4UUBUA08mLidRetZY7kYJtU4IyWkAFrCleaByKCsH43WeKpO9OlqmSQQEsgT0FZ_eX4589Fc54cTXef6=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczO6qche1YNvVNQfHRbhz2Fk-6unmjpss-eAgY4sJbTSasCWc_TnENcOFv22weyWTqpJ-_5rHElt43yQ8wQ-rWB0HZAIRHc6MryKYrSW7qq4F5s9UYu1JrkPg7ij03MgcjOMZsusRZMoau33q0PWJzen=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNbJo2tSEiDO511TShHpOjSz8e0qtX5EJFkH82_28yAZVOFJ_quIqeOrvySb2Jb9DOp5AbyBDHS0Swt7teABHGcjIX8MyfQZfZF9w5EbMf-BuF8mp7IsePfSI2uxYk7iaW1tkr3asdKELimo2ORwFoW=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNndCa9xFueCSmQX6Lh5tC5DGIX2pZiwQEFqNNO_6Wsj0g1cKAODpRyX8QP_JtcVLDBrDCD1YkyqAaTZOghWSLoce5EpfQcxmQ4Q9j9ybr2GGs5t5iBu1uT_bpNSrWIZ8ZTfaiBy_IGmVE3QI7EDrDm=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPnFRLxgV91-mo3CjQuUEtnlyCWHAxMcTY_xfOuPDJaLoD-g2BiIyxlRhTFvCv421Z7SF3Kbbl0rY-bimur54Jq2ic0fBGuqP4Bh_vymxRVKUNeXlhn-okirx4THsCopnvxaFevOWiResXmlI9Ra-UD=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPnfSIkH6r7y22ulkWIEwQBDFGNQ6AYMpuZwkgRVkkHmaVemPimJrPyfDGvU-S9pBXUK0Y5s5-vBvLN8-bdW7iyszr3W4ipM3MMfuonD7olxpcp3rKd9hm3pLSVisd7Vo3XYyLJEBRl-QB9QtLM_UU0=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczP5BsA48Z0JCCjLZAL2fHCNBPQilF1D-JQnOOACMe7wv_owmg3JkFLTCxtcCcncebuITG0kTmKFrET2HbISCl6SFlfwHwP1OIrqbd0lHYA3eFllxA5M14i-BKcCRbufHpWO23JEUiNgYArbDta3TwIT=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPezIANUlrTNRTPZ1qotkMpDzHszYurwPADkMsv8B5egJTQ5HiDAp1XoaSq5O6Vx9gyKex8n2HGDP4ArEcJnQwIl9dXoPP4OtpF4tgBGQM7eQ51yfS6L3-m14MgfsWH8sW2A-uXhZDlK0QWWN1tI7kp=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNkeRJCRSdxaKQgEtqFd1zupUHHLuxkrbga5NsQV4gKf6-mtN592FfwcGMyY480NrDgzw0ks3CPg5XfZMVUJzuhoufL79tH5CeWVjKMojveklJydvn7SFGO5gPg3kzlWvqgyAo444udFfAEQfmCNaMO=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczN8qqFiIsIDoDAhLHqbGyHw0Iqo4sbUXVJu_h_FbCpt8qgOq9GAp3WE9ABAYknsnX90qFT9L0SDE1GzU9MYxOJYg-f8Ms8kuvm38jtkB6uuXgdQMOO43DkUFe4a7ShnrfZWP0gxeSg_OthQm_ugfMhO=w1920-h1080"

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