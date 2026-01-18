var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPhYuGxKsf8rOyAKzVVck-91Hv-kTKd1YUjARoK7wz1wVtctcDasO8Z23LMs4lLyrJJJ0E6Tklgxx8MljSlQun1PmHrnOutdTt7YggUiRnJR1gnsIOqrzU5TXOcS3by6AV1SS5fz27zEV2WyqbqS4QR=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNTCQ8gdXGT8c_-INHRBBO2ZRuCCZu9-IcpRCdR9-7HDGg3ARNXs3p2_RoJyeTqk-8KNuedgreaGIZ5QQnshty4Mel0M7JPtTnhe_EtkPtk0mzm_A8lwHMRlokLRjEmw2glIF3xdkflW4bJLpQzQuW8=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNJx0szwpicVUtRcc5DNIxGRnvdDsLORHxhzIZvHfadRARbHSVw3_b8GOFyCkBDV4nbEdOvwqIrGokF9gt307IwcRzevCoUI2V5qSuSEuqV3elAWMupst-9Hx-686A-TGCpbS075nE6RKjmG_z4Vjld=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczP24xf1l0Pfb--DLad8JaewDE0bQTL7nCAAgBbYIxehgFIwlm5f4-8q4u0Q1TgjmC5Mu-a1zjNoVaB_vaoJu5bTvMDjxAO_2BMvTKiq9VXISY8MMD2dtKbn_qWjNv6lgTSXUP1N_Ir7aI0O1sHvqfv2=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNrA2ParMDrrORUGgqbcJNZy_HjVHg3jiRDhY75QQx_AOIFfZBziIu388pJildzT5_U1OF39Kipu8WMLmcFiwB6km1stmRkHCLJE-RTG7jHte3tEgU3w-KgnaverDHr1x8W6Ff-GtHwZj60Nv2-kczy=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMHCITqWdDDV9Zeb2kkkM34OBzMBZo6Z4gZh4ANVuPDu83R5FFD0-52p4QAfhJ-AUX4pVwzGCYRQpuL-ZMeOXTBmqNT3FSgiRdQ_kkToSXioou9LiC-dM8v8Gx_xBVIfP6gY54k4fZELgMQI3dylFxe=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMUZG_5QjxZqxD2119GHp2s2q3s828kh8ViYSyLai4t3Ku763ZEmLyjbb5gpsaDUYcxaXvLoTXkllOMwzQyVx7di32flmDEKI8jCs2dZB2-1eI8EaInT9OjmPrMqKI3TmVCI5AtyNZ6juzN18b9rQBj=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNbb2K28EFOKiWcOgR2xbNAVAMPtDJMpQwCnnAVdrktXQvI7xR6wGn7kMwmiEAgvzqybC0y-ze2FQJVgS8rNDgUrAZy5JIYZE21AYe9mLsU9RPZMmz0PmCY669ULO9fiwbjmOcHDmKqDLkHWsGPGtIa=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOcHaP_8t6mEndCgY7_8a7X0IlNBrcMoecRyMtcL6YJ4IzOtWlW7L5sSzyMBVGmRYgqVObmYpoj9XBwTdUnLn4vcj3QtDceurQRn7izKPDzGMBIYMTbrshVXfu4fX-IHbMoNQqW1yZ86BW6LEO1hRIS=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNMwKrFmBW6n5PaYhENHlfN-XFTzKDR4lGcp2O8FavU88OJv_vS3zWeRB70CMpWVglWM2ttqn4r-N4xeA_-qBDaAoT5mU9bJqs9Oqlk8quPteAbd3YCBNxR-VId04ef-ZzqnOdtYbWW1wzQkGGrTLnh=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN86XcU62zZkx61ez1IcB8euBhg02gDTHtIi4KkFPpXrXaTIblC9lLctA-cLvqOrJJeKdprJjWFHfi3K6aep3EsX12blcED8gmAtN9vEblNBELnvvVTg3zx_WKh1IPY47E4HH_4gQpiu3ERWUYmHtg9=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMzEwAktQni1m72RcA7j99w4iqG3zJ2yCBfYmsbeF38UrDvn8G5sL2CSGDzLQPehprXsGkvCYn1aZJkFAN_vgUhWhnnB46gzsHsoQ26Zi3ERXidBmVFn9nB_8jrP77iXV9jlTdY1RaibFuVnk7qdd0Z=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczN0_8zOtwSBEnAXZMRzYAYMT9rZOrXenLbm487kw18dZX0ugE21KEe5Wlej38JWNq5SfvmhrkerUYOkJzqjZw9fJMjL3jHjyRf2kJQb83CB7IqFQUjY7DQ_RGmJY6TsRy5fQMfC2PndgQ2Rxk2BI-vA=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMWhmC4YmqXF4JHJp5xqWRWUGQUO8PwZR3r8FpCwesX2hCxPpZ-S55eLucBM_3j1BALLBrF-QKw_I_KXLjzsu_eETJF2K1HqdAlVb7zkQHhU5cVH8C1w_SwWuTQu-JRYI79RFxoTM6csyFM5JZPplSy=w1920-h1080"

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