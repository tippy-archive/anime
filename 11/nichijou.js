var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPLoJgv3s45ygow-j21IliN4FDyLVewoLm47ZyjXw5NKEBCP_0pzrfTr95SxJduJhinwQOQktcJz4LwArfsAlZLai2M5QFi1NswzUqsX3-LLJmtpUCeOEXKBCGUChFGEhqOKBW6EsL0K0CV6YfO2yfU=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOrYWWIIRRnvhj8Oqpqy4jO-R6e2Zs3muW9gp5R28qIv8yEwqvcchsd7RS4SZkgMPQjyChpZ7TQxBsmlzCAdmUJ_2E195oG8rIL7AbbyDnMaGI6ymq1L2eyliQqYk3RUHh_8_xnIyRTH-2jCWJV049q=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNaoo7OO2O-05ntu4ZopEA3CCrK78XIfkputUo-r0exlcVpniwYm7-djqmn8O6BXD_6UI5IIrOVgK9uHbKOKUpfRjssNmBZPXvFVt8iDpj6IyUo74jEZgulmp6QRy-JE7rfRanWzHPsFb9uCk6VJ1D7=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOcFxHCajj0WMY5jX7NH4PWBN-zmNOUag52CkdlPZqn6cPcoTzZ4jRT6zqVGJTWatQXuq4XFcssVMo5HJqx09ZTUy0N4bN7o1SKOmzeVZfJimNblWSIVV_xml0yJ8dsJBscU2DDSjrQ16hcDGDmwkaH=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOS1NoD7Dsiuj7KcMwXMsSxpPLG0mvXfhkzMNjaqhqsqKVb_De05lWZSPqniamPJBK3kEezNSzCREjVAEBo3gyyi2XmOM0ZmgBLe3LixxZe-IDFqPO2Rhs2PzG2s5UogcVy44iNLLSFZyFduTMhbU8Q=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPpT4u8Vk1xTYOZIZPwcmkFWO-qYVhjyROjRF42nscuTSMw5swa76CQIawful4DuROd0JwoGGQ2ctlQZv3sImzEfzyPMKae0aY0VEe6U3dKsWmqGSMXIrIucEKA-hotJLPzuy70M1kuappHdpkxd28x=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczP75W-ibUWjMoBoDIHwrjCbIzOo0m-o9lFVw-hOsa4FSu82K81hQJ9Ei72CuFeA9C5SDlXDGVThbcla_nn37WVMsCHOAhmnlmOUlS7wSPBwE1boY2anASyRQFnPtSom0qRsieZdhTREwlXhZxeFCXWh=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPXB02DPhLC3ytivz8HdmUANt6QLvPdydGacSzQa4wYTefufmgh6Wh0n8w2gH7AP9y3cBTT5LOgUCVLbPXKhvQovIVFio5OX7te0RXBlksH3ivJJ6CLF5br2cPht2JQc-RnrKKjo6wLYlJeM1JXmjx3=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPgfuXoaaufs_qlkwCDQWWRXiB7XasS4hLn_aDVJmYvfytsblbzauCmw2oeNLb1TnJEmlp6ZeInQRo-V4IoiMTIl578ng0NJePvFtaoPi_mAe2fNbiKMXvUUdlzGPCDCLLwlEklXLKQj1ol-_o3Dvrz=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNPyhK7e_0WsErkRuao3vwbGYa7ofjT8LP_n6deNcGo7SS5zUMnu33z4Y_MGNelYiEn_QdPzbCrJ2QNhiHIcF8gvwTlcNqhPe86fw8KiZ1bOU6mhUFdWDf-4Y9zPeVJ5zM40uj2UdwcCZHIJNW5RPML=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOutH-avXWK0h1SkFW_TzchzwIbxbbt91BuBRSvoU7-4QfLBqE3Hv_Vy5XmBrvq3SZt2AkqvSIZF7j6TRWsEBWlRvWuAxPNlasDoWuQwutfnRr3gif2ExAEZCGZB4LM1v1HobOWLr2LAr1n9rAXh1QT=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOpXI8GM6SyXJyQt7ZU9ziQtFY2cV2fV2moCUqzqxbEfhu9wRsDckj9WJlKjevjJAEvOr0tDb9CHzneP-1OuOwxwfWY-SNmbeDyD-P5H--mzPg8QtWVEM845FIBcjfnPNd8b-A5vJFKFAW2P7b3IdMr=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOvOhw5riKkNO0hDXNX3pfMNgHHOC4C9_Xz956b4ki7KotEnpvsqOrctIJkPNcoSAhiqO0DO-s-XQejSs703WwFEQsebfZoP6F8J0cLR4r3AzbGsWu85Gjd3R7ArgZqSlfDHvYCi27oCd8_A5NugyBp=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPEND3FxTgLXlPpjXW2Ef3ZNnHhaBnETHTfKIW5IdKQQXqSHrzolTFnKlRz0_UuWB7QzYxUJ5kEDki6Qy0MRLLoQVWhnCGYNUhn5MMCx_G98ftMOX9QGHCTop-Hj-wRVEJLDoZZE0QYjDvFgUki5Nrg=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNygqubhNh9-x6i13c37qKVSIHxcQQNTD0GDf7xUS3KA71hAPaH7ulAbRupg5GqyHTrcxp0EB3BlNS4sRdPAHVhfoi6LvRNQzQC6HsIfSv2Lnc3H1Fz9TYpOLHq-OGYzgrShQ4twgZ-YMPbZOn_Mdwo=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczM4bI6iwzjf-pVCrsTUoGrpYNfLGJPkX5Ukt33-D8Vrkn2PjTgPw-_4Pp-cbHCAd2USXPLecJHHAPq_jw7f-nHjnBmmdfHTSWqSQUgh3TCEz5rmNyvQVoptKYSWfYBgzUjl-7Hzh-R8aLf1tsaTTaKI=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczMZ1C7O7ZUfxag1jB2eqRId-zV07cnvJ76VIwdncenfcdBHhXPXyXTsQrQtgFZJ2Xb_3Nu-GiWUblezKC8tu8Hd38qSHSM5G3GXfaojOVNGdUkZ0kBHXYWxL41TZ25v7lwZOMrdZtiIB7cEzD5adpRG=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczN_hRt8331NwzRmUtd39ZrP8Yu90-XVNVN45BAMBslt99OJAzYQxBM4uLU1Q9OKlXZHvc70Jbwbbblwn2LifkZxbfEX1gioBqUfIpJ8oa8vTUa0SmH3XRQ-O1ixfsADe-dItp6RsNqeTtdvp2WEJKi3=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczMH7t4PSk-9wL-UoWdrol802Q8HVZ6pbNGGQNqMdW4pV3KIPUvsEsXfCTF_O3UUf5cNo4vHkUDEWMp-HbG6I8s-YAHCx6Ii10wkSkLUR3ZDP04avMLRmkHx5s-kUhyshetTN0BAR-sARDzEce-KR0Fb=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczM1-6anSVJqxMSJ1_dH8i8eJcVAurCJ32JziZa_2isan4Df9ZhBG0YiBKsh_4ue_3Xurem5kk3LgS-VvWkdYnn_deUPtUCBi5JuAV59QRTqtze8xdsHX_sOWrmGcXsO5wPwlEVohehzUcioHjOWQj49=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczM5FDx5pHNiRHHF2gXCkUrD9iEUuh7FDohsaLllk0gKEU-9IL1HuybQDK96GKCALOr9SmZ96qg4n2l0AGJjxIh_pGM5L0csLRF1qL-vuYF-wE2rxCktt4poqCfQ8EavvP002W0RqXkbCG_A2AcOA3gz=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczNbtgWoujnWkAHHS8DAoLiqsIY9KYd7YFrJFs30vBm0-B92vESvyJdCyFZAeIdcV3HVig6LeNrzonSYDKe_jRO1GuFBJ733ewAKULXUaWdYErQ4gwAEP-fO61-ThJ00FSaNaDdIBNnfyBeyFcWhUsgf=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczOFb4fCTqGC5sQNhc7RAYgGynea1Kf4RQgy1Mqsh6I-lZfTza-LIXAqVmF-Gs0piZepbCwIvQ4uLyA-kO5bHEvGHnUrDjNbrrZRvuG_VK7S387NO56E4sq3W3fT1cveUzRNf5f889MYdNscwG1ALPUM=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczPrX8mbSVgDFfZKNlSAwaC3XGbUwG68QXuyK_OMj2gUTU9G8_l5shweDFxWMedJgs0B8qW_RWvq9y0FEanVkpRsAIX0GuwZJEEE6mGqCGxqglRaVsKuR4mjo2ONXPdqttS3Dm31bijj0C2kK3eAH6ny=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczO7zahd3DE3owGBMGrDU3dRJnGjjJipaexHlaMYpyElle78bMZIAZGyrGGwZyrc9qB-_4WtvbO4hiGCSngaGJfSOcUlTO5Zp1DwU6DKi1h-UzrTKsHwFpyD-unT5mR2nPf-XISghwGMZQHEoLrvOkb4=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczNFBs78vmRxCWOt4juKE7yNmqpmx09VIP_8QQ3xfL6rvBGBqC2d-uBS1Ex7wbnp3k-EAhHReiZy6cTkCIzmoZwOCUx4h0mHMlzmqakgJqnHD6-Y5UKgiQKLQOpWeb8erBpJH80-ElMzjP_7rcm7mnXm=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczNk3nBkKLdjLXp5FNcX2EFaN8NURj65SM0VNPAFZqTn-W_I-y_sjbSkOQiiHFkVe1ILYrZJgS1kBatt-WCdEGv9culEzll2914FEP7E34VlsSGk-VqGLT4S9hbQm9kg1BVCDDRBblVQONeLOlfhmzXB=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczOkaXB9rN6dOLqSEbl-u74OizdEYbmamviQi8TLLTrtS6coSh1ecO66GyKxs70Y_UUP-tuxujDNpx5Ag9Fdpo1f7TigEFNeCfp4CIHSGKRw3ef0MqqlsU8o40ZEEcngNghswkWMNU7jCAjIMQp2LxR6=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczMzJ5mj5Og6TWHgGSvCG7t0kAKmTtBJDq3-Htq4g5iF5uQikk60ANYUhI9PqHYAa8mnUkNdndXi3tOjuvd2jEyfAXz06YgFfPqsuiVgkvjyNaKs9CIRF7M8xdZNFrKulmPlBduZCAcbng27FLIaGJyp=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczO4z0e57MOC1EDfoezEMkqfkExkLJQdnocl9LUlTpRF6SlGKZtRrOmk3LHhdLNJ1atyQj3u45iLfPjnqpLdDHyDc6cVZ3oSAGgDnl4uOsYZwQSRf9HbmLNK7Ii9867cDB3FfCaihBpEHvbLFPtMlEX_=w1920-h1080"

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