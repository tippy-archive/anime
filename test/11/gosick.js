var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOC38XjjXDOexH_ua_I54Gh4EmaqTbrvw-tX1bm6PVb6Tav3LQBF6ugRtLWQKyBvpaW8_VuUMHbfWVGX3GG_7Fm6xmF-GQcHfBgWFlk29RZFsKys0VHvTC8A5xZ9l6FpkbxIIxBACnCeKmh7QkkXaqg=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOwP72ZU8YO6FT63Cpc_lThiYp-FWEq1VnKZk1u-301dHNhoHJX4dPMjtpLn6oZihC8AjHgcSlFbxIhWcCO-KjKapD6c7s23Pi6Hz74QCwWHl2hCDe-UOknBLJl3ee9gcdWIyWdIpSAPdXIHkE3gWsH=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPy5CddffNar8Jo54fzXlLkDwm9RUk1DFdYjwmlqFE4U35ohgFFsA4wdovkQzyzNhZHNLLvAXa0BkPmGrD8Yk6zqoTg7jL1BPCO-2CjLjWgUd2EPx7icS9vT6uPCK6O-_wd9E-m3duEa5YToHdeM9Z5=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMSDk-Vd4Ew_gxAiNJvslBmMIG7cmWlcF5T39ZoF0pgrKLbiKTCuWjwhl7yooFWhnl7TIazfIYWnA4wbJxMpHss1Z8VS33tJIrBnVpqa8kgl9dHo7Jprz4G3VVFdV80KGBzZFJ_F2jw6UYFu1Ckwj0-=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczN8ZqRTjSbhuRczeg2aD-zRE2_YfCmB5tW6KdztHCTfwfbJDYonHvdZSmEoPzEfamXXr0Tn0Jm4rA6B7P5JN1jzd5zpQnGkc07PjpHcaRav503BhIy9q2Bjch1o-tbuqjw0CW3hvozTsgQBnGWAQWcw=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMpp-0XWVe4zBR_TrzwbMazNWz2mnmol6GnHL3Qhseulcys1eKCZN6XH1Hv09LAqgpojHjCwFEFpzz11_XMlMOTeixQr5tobVDPgy8gWTLleuIBLAAja_WNB-j8OxYzThSxhttLqo6cWbvW8Cno4Rsg=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOsnJxdHDZUvMJ6pr9n6R__FU0UKp1tVZ7Ya9hcbV-f8VgPqUs0jJWYcIqvCJAmjq12mlljj3EM45RgDw-ElGT9K2_C45FGvcd2Lrc73w4nWvFyV-XzOXn0A894BYXwhpvOJ_H5EPJV5WoCWb5zS9as=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczM2D_uXPZ8yUyEHfId-mB-QP82BwUnHA1UH0gn_m5EMbPBJzz3HR_iIc9GBpoH7sYdLwkkd0XL2SXTusAGd9x3nvNImfu1EbBM-r67HiZdlKh2tGKGuP8xgJKGr6sWGOtwmsIN_S-MDtV9XoJqWyuk_=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMBeo6pqoR5T_JGsl-fxY6mcnVZJzzfoSYdoiPYkSnhucHk0iHnA_0n7I40-J8xn8jO8KSeeaj_6GJ5ijqO2VOhySa8fU8Qigx_bez1YPKGYMt0AbzbJJoFhTYsGaNoR9NOfroplFyS4FDTdc259msX=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMjiZhaInpU1muCzakjr6YcF-QDZsxOOguN8mJvBtrFmmJknognvUmNeP4WluZND1-7AYKo6O7tJMpM-OMBTCTKI54Ti_O1xyLbnpH9bWfUl5u2LV2TrEM2GH92G-PCn9lqc835T-JiufArJ-17KIuI=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOUjbzNva8S9IVo-LfgZV2rPp820ddWBTft0O0NP1ptLSxDi-telIGRPPpgEmO3qoOT0tNDx1aUj6OQ3M2gauXPPhY5A0jr3m1-uRWrYCRhiZ-mJMn7HuJdqgb__7_yCybFJ_PLcVa9K4m_ykC91_o1=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMdvMcS2lGg1j2xtlKA18dz1tgUw60GeDvp3vTtN8BVPz8jk24HuH7ik6RFTSUa8D4KMFlFrw8uBx2BGsRoL2i53V7Xq_i6FtNk_Z1yxWZad9PuRE0FZ9d04KLKx8lFTVPfJiwxNYFWLY7gBTzaSmkw=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPE2UpMh1ICLaFUK0qQytcOWM2AD6b1YTfKv9IKqZvZn9CB2EqEbM9Cf8H4mKOULfnoCCvZtqiGjh0SNwfW_xPPgGX0yIY9fB3Iuy_x0ocPwC1jDhACl3_pMaXr2DKR0Eb1zyQd0oBX5vpqES7ctiFQ=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOy8oHtYPLHP9QqQnDnCKqqPd-kH3jKax_PqdTzYD9r_lrWnWMUaY1MrG2v80R97kf0kpVHWRUF6klIFefi6TVLQXg4HvEnzHngO7sk7RcxojXinKCdZavIF5J-POzW-vzWZPXrofaBhinUAAmtaz64=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczOyWwNrHuuRZnIUNz3McATlsLypUriaWqnsOfmOiig5kXiFeUPwLB6NP2DNiSFl0Obk6VlFk551gNlITXKisv-cp10I8NjcZdZGw24rFNet6IYJ0codPBUSFFTlcRZ1sKmf-aEgqp0wYCseRm6j4VDv=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczM3vT7UzUxYT34DNEX1jxVNjguGyzCMwZxvZoPs09qQ7YYA-nEu7Ukc0Kxz2SKI49a5ejvLRopnoBjtj0bTjF-uc80yUj-sHAvtdMi4jsg2_zYmltlL5te_TRw65OLVNvTkHGoTL1CA4VSOiJmRif44=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczNorCQXojsI899j5rOAs_muVl_q0KlV904S-Gx6doEZ85NU21IS-ptk41vGfELzEXKft6NR4K1f4WAfQ0CWolIkygXAWDN2bLw_oBO-KhUU64Dpsd1O_dGBW7lzgjKNOnDz0mYi5ebH9FwW4BAiC2ou=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczPeHQQO7f9SiWZtR2LYfHDU5LZIDyyzYR-OIFgZJLcnxYgbFJkjnOnCdpuZ5NIqhOOy3_FgNvibte5oxNVfFHAGHpNpT8A4BK73_q33wlPHtFgxtkur371tz4Je5P0bVBaJV_PuRKpd3cjlcKoNhU5I=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczMlcpif3a0qqCfriYqZp8PHneAx7s2scquUWnCqV_5QSWA0yereVT5PK0XAq_v5zjU1QySqHAKJRDuWz9u9WSNTLH7Y1f4rrqM2fFZynVU06CFWOfpixw0j56pJRahJiqk_USRJn1fPPuhPD_b9BWXv=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczN_jo2pCBlFM1lhZIBbkVueIW_HGF50kMW3LdrOLv9KaC81vvssrFHQJO91hv2mOnv700kvCMjjD6AlPJdUmjMlz7GLhKFEavxw6ao-NpifW1LhLHZG2TG-Zsf85X2WBOl59yeaIoPip9CI97_D41c5=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczO2HNoJZeXQLKyvBJhrEZ8rDnhFNvdF4AhBqoNVnu_Pnsc69mDKGay1969P67QPW5HEI8SIG3ovHsFEdi8khwJ-2OlTU-H5JePAdun9bM81dZRF7r3AFN9Up1mbzry9JlObWaC_lw5y97R59kh5czGm=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczP0SYbD5dlCcebiAkV0F5v9XpbR3joM1vaRABGMUEyr0sJDZvyGD6Hd0aKu6xzfJqduNrssNaXqil56EZp-6yCpB6NvFxbRMtD0p49l5KeUbPubuJZNM_f9evjyo_eiufM8NZut2d8_bGkIf9W1MOpJ=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczMbMrrptyNkA7yxYIcQpVaxtfLRZ5xrI1ERDWE8SmkTSf7YU1akmhc_apq4SZnguy7ZCGoFgirUh93U9A8ZOEpjdnaw8Aw1KGMOCQJ_iIJW5qSpin6ZIEC_kTggjw8yRJd-hWDlqGaF0aQlckyM6Cdn=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczN2M6GFSqVXojrr83iwZJoFVjm9g-Ei5ii4HYS6CF1QraEBfZELMAcdZnFEOnvLOpaXhrjKAEM3uH9NuwBcW16duC4kHtCGRo1tobNfTStwUMdlM1naR9B-lLEOKv9rHScBMn7RIzLLGAJg6jS_xdfm=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczMDaO7j6yBkiSUUf0Vs7DIxbEucjgCWIeyNh2qM5EsczUckJOROPxz3VYR0O9uJlmU1GG5BZpe_9RsAYSLUaRQN9HMyIBx4-0AfijqS2b9-U4ST16XqBy7EEanqVo-btlTL3RbF_Hknj2wUDNy_njoG=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczPNcqTIw6NXa5-apVh_qYbEmbRz8TsBskamN4ywAmtMbjnyh9oTJ5jKeyVkv6JWjoCQc1DF2fLWuAJua5jqN1EYJIkjt5iIDALbv12JwVcLW2D2sRS9NqHXhOi2DtcIRXE472EtdoRcE2wOEluLkZh3=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczNCg02xlT08PX2HdNg2BvfUwfiQVCsa6plOY6ubVxZAx5CO3q9uvg2MUZlv0FbpU0vpV9DhnpWIYqXjgmugi2qk6ru71In-guxnFzelX7K5rGQhoq_kNmtzAHa91bgK-aGg99pB0IwqJOlozy5by4Ry=w1920-h1080"

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