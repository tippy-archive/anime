var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMxEeoAeXIz8C_0yKCl8pHls_CV6rj-NEr9bbKa9EH_bvd7E_6B3PnRTEN6rRZQCTV5WuNot87RJw5ELW1we3mSsXPw8XsdB8KA1HUYvRNeRvc3BBwlzKaJqf43Y4nn141d2qXB8wwJUcJPe9onC3z-=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNV1S97jmNkMpcWelgywT8VzQRoIZLJ0V6r73pfOW3d1lIvtzeCsKgPasQD6aZaYQATVj2ahSJ7cHN-I1fBoHC6sX3HE5V29kr4VQElg2WHua6urq0sIH3wwC8HcJUZQQuTqx27Ftqf-ytfeHih6qIb=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMHWSpg01NRaKwmYpId7vxcvkUdyx2VntNaFD5agZ9WF3LEd7uuHgZLGnsON88XSP0p0OP3JW-_6BRY9mqnJXSlbTn4I0tkP94mcemXDTh8J_NdJRmwOLgNpWlGAg5Hzw-Y3S0GDPecfxHdAlgmnzF2=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOdpAb2s2QGseE12zWcyy9YfARyjaiuV0PzDQk3ps3r0MILbnwc_UOWkhTHe9tDCOJ5OYWhf7Nm7u-9gWcLfv2HlcPG8XsoysCxd3t8Ak-ekyiFdt5U-syl1VBfB8SZWrQPsYfj5xwzxFUVhxl8n9-R=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPxOK3jQI4JG4VPjXmj9smGI9qiySuRUPQTQh2NFlQtqSX_joH5qUinFN0iF8AR6R6xvPMIMem9I3O3gp05nTo-hTSpbSdL2GzfBThEdueVbKYS1rXr2R_XnYU7YZbPthXkwvAixhYVVeVXUhw9LiLj=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczO2SeUXAr0jeSbU3gWedx_f5VC1XZzexsh19f_7dXvT9nDuwE4956DMw3eXXRQI0xRqU3-PPI9fy6c0vMsfhAn12UM5wWWjDNgQXGjoGBufMSAOkoEA63DkJ-9se942JwxocQrPl11as9dSfuKYNsJw=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPdB6YOH_7kfL8WmYtKvpoAo1NNam0NU-QB2nApykoK2FaDNi1pZolZ3vFabLSeP6nQN5Qwqq7-6a7ZvqEh_yvL12Uuz4yZcm34Z9MNxATz-FVEU_zbpbxh3J8UVcfnSLFOVRvnxYnfQ_TqUgQakg0F=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOF_RhblVv5QIP9mTonccOP_06hCEPMS9-Varn1qVy3l81nXYpc8kK1Zpx2WS21BFF7NLz4bPCyM982-q-gGrAqyC9GyFF9DyuX4yQ1FN-7aerPUO9ROmYrw0pD9SNKZZDvNc70qRb4x2Hhvhy9QkWn=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNRABXClfli2v-BWLnrOZRUcXnF3EtiP8av2Dm2J_e5DvDOawrnM6xPffpnBA7oeySUXRBksJvigISk6DiYZQxo7fPZTaHQ-s7H8NM1q6llnzjNMy8EmahbdyoiIbdurdrylqxaRdlXZGNKivEAALgZ=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNNbIuMaEq52aCbMsUlAV8qp7QGPcPeN0UwSBwVUXehFwm7arlR-WN4TMBDEP85UrUiZfYL_5QOCFkze-NlxYa3QHIpyKAmVsi7Cwi-k0XMXWm9P-EiJ26791I-FEaX3201RGx3eG4ZHvr6Kb9yZE8T=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPIIjrGjBpJrZ07c_o4ZHh1h9eIO_dr8rHvPWTiO_WVo10AY2BJwFgCXTEsd8R5tcA6b4CFcbVs90HC_xyKvbmUVp7ITxcqQJ__vgFqCi0tcP9G0vA3MT_m0n0YPfAfr7Bb6E2PBObRP7q4XK0jrZj-=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNpqerqnbMJAHjT6UybhjHRLyAt8MAkvDQGc0gUKqTGMumfLoLuIUgcfwUJy0ummzrVw4HyFxSfEuu03uZf7noW6cpbhYqF-QNIQD0C5f7j83r2lyWw_KezwlPB8It2wPLa7RkIzhEomqrKNa1z627f=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMvXLsCKE5tgbb0wC0emjlpn4TjajpQchKqD09jUif4WwstEafI65yemJMGdDDHNe7ViYxyMJxZKAtZqQFheZ40Gw0yXmO-lfnsApldEw1E-4xnf1G8YMCbvoI_0HWjrPySakt2iXm-hxv7GWw1CgrX=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMDVBCJEsb_oCQtmKYXJr76TYoQPM_z4DVuR7gh2DImIAOHYsecbb0o1pShR13NSaU8GojwlCWUq4ckPQuMb6wJU-c-vxVR3UJdLSBkEwYykuSX7qhAt6egkBLh5TmpYTILkZbDDlU7LpjogDZxDs5r=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPP1MUP1QuEHhCBUt2UoYr4NITwzZRWsiKK5ISOLnhOvzOZ9_lBPCG9sSBjzknx5x4l4vBLVWEBr6e3QvRZ9Jj5byn1VcQtB5XI3vzfKdYIufQPHHpktqClzE8GFgmtYWL1Lp6db8kKABTNH4K2dbY3=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczN3Et4Jfl8xOAsdFFVRX7NUKM3S9gUzY2tqTooOInVYAQWwrgVyZ_4HU_TgOjSW3iKnIpJiHMpIc9hB1ziva71vhEWZoB1hLhJkEdjBbTWR_eIOEIsBO_42Zxwq0m0oL367l9BZE1oNVolA65zugPrQ=w1920-h1080"

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