var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPVsua6Bdik6GN8teqybHuS97zVmAMBS0ugW3h8tcrVqmKOirYrmSlgRvA7DY78eaaFGDowC7_yRgwkN6W48pfeM64ABVIRH6nxCzWB28WM1jSoqAf_665Y-1sHsO6Lg3pjHtEbGnN4YiPx7UAu3VMT=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNUaS8zRH1Vwto6xHkYSspfXKo7hhDkUweP8vDdjswojnUwzSC4SOVmIOmaJW4ClL9AVNOgS7kZfhiR27nZTF6ILHPOU_1BVFJ_-9FHbIuFE2Dwg39CDXr6VYmdVBbHfeZXnJHYUxKZvVGyumeVhVEy=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPQ8KrlhRzyQqegkw0H4QLl-FNSvM7-C5EdW32l_iy8MWy54_PSJjRrTMlspq2o_JkeH_WHh_WOyViyWWAY82d8Ccz2nJhF_xWeWKt34hZX-ca4uG4GzMnA-O-u9o_p3XdHOP2drvbnQa2AOdidrQhv=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOPzTuvGWCSNCPenRzh4SRtgVhKALCF4CL_thxplHgLKfP3weN-H_OoW_4Q7g6SgaiptXzn0m_vCt1BUcyTtrMSidWYgckljnVOspGOCY6psqTJI0clGDuJlJxLnv6hametHGOPfFzdm7Tg5bCkcarA=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczM3Y5xPCWmuPsJqT6VjHfvH4urKEgcPBbrSIIKD6kklN3tdUcyNrlormGkjM0FrgRp7hVcv7g3-ff8WXC6EjVdU4R_bjoDBgd0HqxOhOsxmyVObkH3KDSkfa2T3XCz62iFdFs5F3RpGdhPCmI4V1S-d=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczN4_Xlw72PrnAJWdYaTePcaly9UPBE6Tu_OoJTCiCLN8IhvNU3EPJ3KSRrDGimcH8IehcYnjvg1OwRUUhvOV8huNnpLIVeWzuzZMmMsFurwVdiFU9-7SR6n3kYAUSYp1dJmrYGFJVQd_RnBC5SGEZAG=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPcasrQYO6DMTecE_n384MnkOi61A4x_D6qqEBbTrdnUC3wBDEbW5EVkMRy8rNvVkxxjzRbRyKuB3GfdF0Is2Et2gbDakAUo9jko41n8puKMKmrlAtQyx7NvXvZi1uEay_3GtcjkP8grTt7whJa7hBQ=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczO8nG7wj30FevgjmGm44FD1mv5N1BPg8oBKQtmE9JMv0iZTm_FhEBN9nEN7bIKONN-R7j461nix7PoIZ5Pmog1pmNg6Gdx08lo6A-i9bHEmPv_7i50ndQPlfehPaVbZp0ZdD2FZ_BS9uitSDUqlcPZH=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMMITdxZhGVyZM1dbtawxG35y3VBT4gSUi4XTNBqZ0S_wzwDPdqc_oiTWnbKse5UlS3D1iSPxU7haDlANqEghykhlZ8wLGwFC2fCNHoHaMkoBm8--16HAAfXIuTpwVUHnwUjR4D-AbvnEnJkYdmaSem=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPK0Ll10QtUMDUbZKVu7RYGfxJA38cKY5sdsXahKrHv9SHVG151xdl2pQX9Ev1LenLhbY-QlKuDtQDhKlN4MgAkqOL7H1-3N52TpiN-Flw-95Nkxa8VymvcM27uQEKOqwptK1kq42Mi40o2PTP-97Ac=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNUjMPDcYKYnxFEt33TvOMZhyOItA_5bLgtnSlPaZH0fKFgDFNmO7cATXgmj_-9FWTzqVyrbkYrSD16AVOPgHzNz5crgbAQ62StextAKoDBINIZ1h3ML0TmO8ckjahNEDNS7ocsEs0icmbzm3P1tRXS=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPJT7AUUj7aQh_Pnlzmn-6I3xFkH-l38Pmnwi1w8GUL9ezSYPQGAAU6iqqXaa5XMjfSpkjG2p-OfzOK3iJj8n3nJxi_PpeInKyGXF0n7JYG8OzF5DHK5s5qb-Q9S5ziVngJo2KElOwtSkFhKEcPaaSl=w1920-h1080"

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