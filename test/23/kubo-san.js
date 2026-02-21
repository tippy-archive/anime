var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOn5ckMBJcm6ftZO0nOVbVlekM4XT-ToeLRmFsLVRgI6r81w1Io-ulbhOOnlfIitD41Wrv6cxsP6dG_UXQraHbiYyJTMZSK5Dw13ze9QsMfj4abTjONWM6Sq0A8R-LWRdti7dMwXLiwS9Wv1Fz6GmUx=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNEWrMYnndjE_G2zNRY-deM0AjeNBuiZUIwyXiu4Qja6AWXYZ3uYzsb2IEF64882VqKDDCVrFupss6v5Zb3mpzEOM4Xib2_cqvMpne9V0ujUhd2Fhrw3pdR9ORJmJrg0JDfQ0g5XYkdUGRzYxuWxOVe=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNu_ZplmlYJTKTCdjHYZ7ItYgTac22VervbJj7xIbPIG1XedLYuEYGRrQkt3mR-aqfBIKxTZTCv2k4fGoZkpTTDzd9eG8HOLfgSOSplKvd1WrXHnfEdW0KMGJ04bvbKMhFpF7WxhKhJRYDOORT19WGI=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczP0arFUU8wnv3Je9cYKzetkw6ZUBlPtDIcTOKUdwLOqoQ7HInyemdgNUEnGSmnqwoLCgJEJ8L2GnRqGWWO3k8oAaLHPFC2hWirZWF0eR8YVAsZsOWH7thWCg6q6CtVIsc2Atw3hXUbNETANFdOFnegr=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOr_HKNfDj68PtEONeVeLFyrdBDtZrmndV8pHO4KBhS-jY_HmkMvVFOkLAYMiVVV_hu900mnyaJvLxO-o6xNPgXgIIW16FTVx13DCimlx0_RwZPu2gJuNRQjYb1KWuX8WNNiwW_VCzKBcIqS9oSp4Vj=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOcghL6aTDDD6QzM_tNtVkrp6ddLDba7V4H39k7cyVXvTH6TcM5QC49RwgffglWYfn_Nch72ESVJCLe-Ia-ZK08l0koHzJ1C6II3UQgNr8UhGoFj7uq3RqXoRRSUXxZpDIaSBkde7xMbOsgYLDwtoKZ=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPTvWcoC_ZMe5SaUXWKW2M4L61Fi-CL6wQ-BNg2tZS_x8hBZoKPFvAe-VGIsh6VYOQaR31yvckAlQH6Kdor8pNw50bHMSoWAixfPwAdcLuNdAv4Bg2l5Z6L9Zbvdpk6w9p6PnJB7BdMp2silmkkJRm_=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOEZo8JdWQ09nDMANNlrzSh3jCWJzF_42oKB8tzhgxrO3nokXJdjvHGnSxtUSTdc6PYCY6m9liMlo2AaDO1JizQrq5T9N5kDf1RCqKB36dNvxgCD0dRjfl4d5CZYdVADLfZumW2XWvZgAX2-Z8yXkYb=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPyoD_WPbniPfyA_gpodfr7L4jvUcbcayGxFcNLAy5xfHjIbCSO2L2vNenE-81WJ_iBLKZ9qQ4cAJx9rAtvbiZZlkjRzB4CiPSIwhfLMzaeaWeoEo-dnZK0CFLWjJ6dHIhvTCaIJxUkeh1dqMreQwMd=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNrtnuLfYZeyZsm4YfvTlPqmox2ADClZ5DUut_Lyg4wS1ah18x-2Y8LzcFay7I7bgZzbDVDDlIeCqPyjpvw-gEIpW7DqGw7YgbMdAFjex1kk3tC--DTPGQbnCjXNxVyP27-9h3DDNos5lyKDTpZJSji=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPpOzQjK9_7mwm-axKXFJgTlz-2uuzvT_02HQDhiTw8rPx9ueqzvbIm4xtqCwhzn7UEsLO1JIU_EyOJG0XsMRz6XTDjqnkSK-CAQxBqI-mBkv0MnR5P6qF6-1r8Sp8bq4qCLuwbN1Cw0JOw6PIBEu30=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNtKXrNbTjAuqcCbsARmCcFGnIDakUZVWBHgIP__sVDyfWlxE37Gg2puqGdEHtsVJ7tD4YX1ZqtY5woOxMF5Kgec46TgzEyeV2ZBA-FLPhJLTD_g9Rbo1cZoxNuePczSnaN75x__-gNZDVyhXI70sWm=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOdiiq8a1bL4z3F-BZ06Z_y6evMxlPcjcc-9-7QePac6W_JhJic3zSiavO9N7E3cRgXku1l5hhFLB3LnEuJOscHntjExRZaygiLZjwW12oCohGfgIzKHcneL4lA5TiQfH0jBUFVqMZRG6NQbDHpK9ec=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPuakdTFZWeFb8AKxdefkJbiepbMu9zKiebtFJMf2RRBkcZLWUjimXlAAUFi2qqpnLIRhz4r7mYglwuESA7MAOtTCmXpT3l3UmP1xbmoFnva7ysGp-k5tHT2RVsfznvbAt9WRGMDrV8GtP5OzoJ8io6=w1920-h1080"

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