var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOLM0qslpLKl-GbKWYW0TwZScBNn7nD-8aiZpBRHk2lWTj_On_LbiYBO5G0fcySwA9Y1Oofc97JN4BfG1YedqjJ9g3vUTvINaoSK7Opmp_nnWrGvF49zQ6TaMvNB0Ouz9jPDAU4gMLSUIYax5UArybW=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczO1APH68S7DiSn5i3tt7e-e2dAlcDxrOhDP9W12uDk6RBM9_IaJCH06ZJ-78fiVrxFnorCdHGlpJoUHJJsXslKIr79LiTy2rnsacnJDhOCby_DuQa2dpo_erqDpJPKjEuZw-I4yDmWE4wG_X4L0uhKb=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczO5KhXHPAWRD7ONxnJPc6dcxD1GUte4hNPJ4y3nSZRr71kAjfjI2MzNGIBZFZA2TJiam3FTG5v0aZEwWqzhVN3AJGqdVS6-rSQIQ_0q7CXISXr47G6flO_8Bn_RYTa6QwYFa9PEGNJQ6PuSBw1dtQve=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczO3uzB1eFM_eSVtNGnVprQTtaEBGhwR_gtAw4Wj7HIZ-05Mt7HYBupxegwmV0v4rOYDrmwmxRn9_RzRZwMYJwYOwuTiVjPBIGkyR2GBdaBcsMfKOq7nUAhIAS6tZE5L95Radq3CYgw2TRRJ5Chy8qJZ=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMyMivDdb6YM3qFRRgV_2kofgd3KXIktJR_Hx2dpDzEOeLol3d2jLhiBsZMn_1b05qXek7GMW-vfULTX-rqq4OOSothEkzNVLJ_twPJtG_wjjSjCgwHoR3qUx0uaGODg1zINMoKWZHkFe7Bvn_cAmpI=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMofzvmljrEnpMfY1-Ktr3okH2JwGQsFV0s7FMtLgYi93dxLrdbyBO_61THkPcK19VaOFIYncyuqt-E5vTybG9x35p3Lr2bDxLGL60nXaYvli8vUjAHb0LtGKi6bm6qsKvh-pOI12OVTFkS66A9HV0Y=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPdnZwjQb1tqYwjYGMWW4wDRwK-nYzW8Qe4o8fZl5cLYblfXK1qJv7-NpPP81bezgb2S4nGqf3gwkBgryspmu80Ztvjgxt4WQgpskBAlMBWOFci-xn6GQvnez8qwhathShtwEk0_pSwzPw5g28VepTe=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczO6nn6tDQ-sL8gMneLp1X0RMEaetjnclRTzQUIXPAlGzTcwvBY38C9VAKBlZNypGaLwjHVthQq-woaTn5Es535LO-TcpMjFd7Fz3j750avaUiR3zZslfAt19sJRa4oWbaS4pk7HQVFe_XY9OgR6pT73=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNjCrjZKvAL4bShUj_vsqrYSZqyjGNZMgIAbwDf00NjmSFDTc0tPJvbsSkjXPtl5MyZHJHGQk2mppJ86XRBkG2LT4_i7O2yOARBmWNedIkrg0mGHrp8r4z07JI-mrqSdFSIh2ZXPOPVydWylj7IKQuv=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOQXbM-XJaO2vKTFmG-nN1VysPOcPfm-Bx4-8AxY3ZmuWi5r4x12DNNC5wyOt8wrL7Jc0dRWMhXyfiIkX_027F_2CoYp-BaEXmLmSg2Zrun42J16lVvWZ3CrsF3yUyP6YU0LX3C0Afp1C_pXt7b404g=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNJnfZs9XuHbXdrCXWXzqJepdQCVlX4aLQW-9LQQ43IuCz8s2zqFwwIBLyd_67xNGzVBrcmgW_f9_En4iAlUMDXGUZkviKkvQXeRPOTgXWmKMXYHJxoCGt-O7nuWDnPBWqlBGybCytbGTdnE4at_PoY=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNaU2PzysdiPQ0-5k3DgOhx8QDGy7xDlNKBL1KMLb3tV9W2wM77N-fB2IpmrR4p4xJ7GAMgzk_326IAD6ZJ00oeZRW9j2_XC0rQf_q9t8Ez5gJW-7qTvAMTJA8-DWdaMy5xSWGTIWv-C3IynJvg6T06=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNv0YObzLRYrnRBwb_RFTFLcuvU1pFG7BckGMmq_LnvRTYengiSkuRB_g4JG17-ibTa744EpyhNc_u9uWqF9XKXHJIQ3vZZnGBfY4XSuwhA5vO99SXQEkRmYx4hI7O8yIDWzmQaI3y-LHdvF8tocBp9=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPJy8HOXW7VBZ91f5_FUo6pO5zErHssEC0UhXwbALtXvZ7CBLv0sApxHMj0aSzzoO2VSyVVPCJbs2Wz4h37pnpHdr7SiAbgjH0TK32OGti6TqyY_eP_0SHYm6yfSDOC0knJT5jyQqbWiNLF17Y5IAZa=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMCWffMiRwblU5fz8ofPirWUuFTLXdy81eNLptWDdvDrF72vb8V3mYuK6G58f9MOkApCjvN8jjt3ywVwzjriGkW3mv41vCDE1HwBLkckmMIJBwOYKq-EujUKIw2Nr48B6Wreiw1fQllxCMZf-EnPKBr=w1920-h1080"

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