var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMKBuiCXur-pOo3c1tH-6lfA7Y6nA0lBxUVppK5xPI58gFMwWssMlAYGa_ey8BbJ9o9Siemu358nZjfqRZ1bQX3dpA_4CYrs64idv9OqG-k-4LJZftglzRzE4lN3Hq4z26f_5v_URzAwtptKRVHCP-4=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNr8aryjJqWiO6co5-o4CAPfc_Lvl5qIgF54Fa9Bs2C6mS_kng4mfo_oVaECtGYxy_DnS2cVwnWF8rGcNMd9wXVMQB9DMT1dYdt7IEPVApHcAqbgFeMFQxH8RhCIiIDFqEu1OGVeuTgDgJQIRp2NGOg=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOPooHZH-NPgXGVN5TbR6erbwolSGaJxKgl8Oc7fQl2uYSX5dixSvLOuVQU8BPYSSHqh2XQ9xglPYdJ11RAQpwK00kDoJKVw4XMyHQCeHLPcJdVii93_xsHIQME05Nn8FYpTPlFsvvMcQerAQiRe5Jl=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOacqyyXjlXYMlbVRjtgrII0OR1cgbgCkCua-GQEdkcWPr7iDIfVR9Lki_dti_XWL-sr8oAJ32ALKTco1kXqGgXsEjHLlYXdLkGrzPKqYqIFQyfsak1tWZFIGOR6iaQtrJDs_G33drnKXhA6UYgOeIe=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMpiKqc7E972jJoIbCMnrxcAeYaxhyE59mzMinTqxRZcn3DGexbOnE3QO05fL18p4SWEWma4g56CURFzfvHUinhMeFCyhp_QyzogkQFbzJpYPvheVUw4NOiJ-OA1P0p7Xkhx8R8hwUg433jLuuf0me9=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNVi5--wzn-Z-dj-HIzM-jOvKPOiKnCkPDF0ihLy8nizlWnjKIRmynRKVKJkWGYubvuSjYJyR40fo8u2e2EuLFZ0ahCWyrGj1gZBX2Wm9VMJJw-lZQig6wAl46h3OgtXkhGBrypQ0hUGiA7OS9QU5ws=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOFbBJAJP3dk-275T1K-GuavvSOy0ZgivD9aqSsarWABfq-DNXyWedt1C9BXSvPeDsbDrQltcS45dx4SBGe3VYKr9o0XKjhOHjaRKxuCET9-Upg6s-KuyQ-id9PfXLnJQIzZpHBf6_7x4aW3x-xkHSV=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPrQ35FB23C3kgzT-_laFGy6dtMm_cSDQ5DEVK1G7Mi0wgRzKFIghtDGF8-eA_zxzmCx1tnfN_YsrSOPoAQi0omCNlZRa_adTyhbynlBnu0eyosHUmaG26M9JUZA-Pp3XHYizUdmTrYtq7hMoGOW8ou=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczP2rWx4NXuYtIyP__SIIIYCTPdomD1MSLhObeGy291HCkyWzLBY5cGIq35jiza8MTpjiZf3VlKD2cANl216GZ0wmtNOH5yrxOk3LOjBfbVZk92EKcnSVyS7a9YXAVXBv6rXTPrsdGbDQMT6Uimija9m=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOuKe6N1WcAxXed1-Gm8iekdLIAPieq_4vGEhgMZkuy6tIOEh_C0v4DfMUr3fIPw_ORFXOM5h2x6CG050FzTxza76DRx15_6KsV4VET16GDDy4OS4WMP4lVxEMCBCN3IfCvTrhzNNooBg_xQfQI0AuS=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNSII1LxRi9LdTq5zUiYEWvZ0KPL2WvvINeO86_ChLaOpuwbSQtxF4t2X-hyROAgbXQTgfAElxNOS-VVDdueoFGkmPWn5-g2Vgr8VZ-62ukrqAWcDx3jNS_I6goeR2823s9qYRKtZv5QDaFbBgv3YUj=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOkr76N5fSwPrJC3Mhj6gxl-bqzlTn7RdzYvEM2VcdSYb9t__Adb1vvkqnQ2thHIlqc9nNkJUzgkMwtXoWP5kLbzoLWfP92tVaND7P2v0ABR8rvt-yg_ztFexz8SFmFVoDb256D10ZwvO6VOPOCJd62=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMHWnED3pOR1fwRi6SItVc-N1oS07Fw4m-mOtyRN-LWOTWg3OT7CL4Dmyz5S77oh7uOr_JN_gsIYyU8bv53dha2qzMShAMpEogmtsAbtf2Uhflshnc1mRCXIJ0qW1AxnES59cTb9V5aGle913Hpk0TU=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNhWftBDj6AGmMOLzZCbjFHIqkhmHplGkUwU4REM_9v8ecIXVZh24AkveAi5hn1cFqGaF4A7sC6bmv7_tGVZLSqRy1u82ao4GLyI4oQjbcK26O_FET33hbXiPzGBtOPGuLjICe4mbodj_6_n0dau-3H=w1920-h1080"

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