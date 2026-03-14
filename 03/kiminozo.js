var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNcS-bwS_iDu-B2CR2ZMetqRAimkn1kHt2vB3djd9U2M8J5MpRQSY8sZBFGMuKqhwn7jn8UXBqgEL9W31vzZTAh7Ifa_xbFtuE1OYjbT9mlBcZVLIR7GTzTO9dxMOx6-4z-9ncva-Zok9IObCzQSty1=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNAZXOnNbHMmDahgXLDNtgpWc6sFgO_wjViXbfGJh16wP_g3cqpOisgWakZXiHp8_IUTxngNKZYj4mApGPjUbFyjyvxK05BmhPgCE0ZPnEYzR4AeSPcOBqMlJqmgFvh1QecA22vC5BV7XHnfLNRSDgy=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPTFIllx4t8Oi7T_bMLr2hvWasFfHLPY7aGMjEGn3kMCakQjDtwyWSkarCOYyVdAGHG_SD5-OtpEcU45sYzkrC1SW-XTb09txPS86LvFKOlowiSOrvOOKdrbzWjuqZpDOoXUHutv80JswSh-scAuBsq=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMrJNLmmhBZEsvvN9cxLTUphc_D0m_QQPyDzpXIvRlCs9xHl8p2_clr3vwb-WH8jPGhnEcaTR3N0jhpFacIpchKNzNu2Rega2VG5GomO-c3LdnAeS8SfwDmJBehNcwnzdWb8bJR05o-H6xQ5dLXglKQ=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOjcFP00YoYSMRZezlKgysIAOs3k4LhFnWkqyywNp0HOfi_aJlq24JV0w2ZO6nJj1i44Zre5yUYVlJv8IQI6uwfuYjLeoSXto1gUi9jN3LwbkNpxzVOpS8zOXMqAeufYjX10guOZY-URdhykZ9uXh27=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNlkZAujIi1h8HsokHf11PSVtw4_HlG0t784c9uQ2aCSKvQTgzcGaxs7DSRKv3iTOsMldrAVezoB8AhK2smdUrVZ7ZnRtHlC7yQ7H-h2O6U_hWPlmfKVcayXRmvJPJP_PhHPpRRDw0b4is63Bp2IS9N=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczM48x2ampwi1vEAr27YHm-X2n1zPQM04xJ51DNP_RMXe4TyCXICyY2ya_I0UExhPsuuk275io6xwZ_AQHqh8O2NOawjnVL0_Febp_ts-5BfjzRWy6PnPpXlWEA8COTXCvhSPZHhI3SsPuclPXKYbNLF=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOqIKlJ1ZvXyzsBL6yvUgxV9yRF2JN-bmS6F6kmBCZvRKm_F2irlgEj3tDR0WYEvhnfbORgZUJGaO-a91vas-NTbX_sYdyqvmEQU7wjg2DoMvlsmEL9Nr6xyTIjpdP0vpw_kBM5bnT6E7jq6Xguilre=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOklfXD_0i7X3zQG9QcKjtrvqDTyXYJRVHycJV57_S4V2FXQgyPCsyIhAVH0YjXBDfWWeRWOZ5DVwV-pHdZMybpMnVcAa0bLncSnoE9sJK0b_SDyqMNDJnfelC1wulZfKaldFTMHTKWnyjgXlA73541=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOgN3qDs44EO0k3_nv_xGJLEHZSD9WvDJXTJWk9T3TH-xNfKlHWC0AUiV1MLWuYX3YRkTO4UT9wuiP3mbAfI2BK320V4UKdb4kTQBzYQwIMtWhSsdGEQtFLIeEtUgJMoXaS1m9mn-xMAY2GijFocUnZ=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPFHIODtxsAnBq3S8URErQt4YHxgWsk_7dusBb61zFpHUNK_O_V7FAM38I7cOw77wsGes7RuSgpYH3h6fzeu36YvV_LCAc2e780MgJqVFUfBrbRyCLZZWSZWArDYJWFvE0aBC40XTLYwOuQ8XiG7taq=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNi7-_vOitEqW0ldnT3DrpGNAr_8KnPEcc6xk262o44rYxQDJUNAiS5hr9FSgikpGiwvLPgD_WJ4eS79NtFqBVKPVO52bM9XPsezkPlUtEsG8DJYoS7ahQb6Mj3k177Xx2AWJ1giWYPp9M_91RqQnuC=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNGR1WmdfyAmkJJk2Zz-6bUGvxN0HNiqeNxpMGt7dHzq7j2K64EBdVaHYUiUBpj69Bl5ycXw7mngoS35wCG09ozBGVycS9bSJYDEB18ufPIjJ3uvUloLfoWXKmh-vFzlP4JjtFugHowJiaj08Lnf0uA=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPo8i0VbGYajApAXijK1WAwvh3UoWNX0d3rPuwtvbQUWcer6qSDuYK6Pz7b9Bt5XC8e1QN3dq6uZco9R_FkGkjTzMBgIMxqeOyDbhgIzCLOyd1i4H0ZTFmSnFtIHWOZZ9J0Woy3QVrq7PYqOFdRO-JW=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMgsrl7Xgi6tpmysMW5T8COyBn3YUlvdnXKmTCThdcLKK-orobEWDmTp56iwyYkUOoIE8vS_gNNcEVJV7dLkI_mn1zO5XgcWIX6kH7ByiV1mq3PXHzFysm8jnzR-SnrJPqOmEUa6GrVu5qK7kMFvNv8=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczN4RLJZdL4s9ulcFeCbYfH73nWJ7Efpu3Ii5Fi8pLFgKNLwg_ZaGFKOJ_tgULwP8YbiQJaJQhmkSq35hx_ymh-XQ8O5wlWxZzOp8kjwTbUZKCfudTkr79uyYtYnP9WcViZtsJnRP4F9kpiI4FZ3ckqu=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczNqdsrmtD6FqfAK1WwqNvA79fAghYCpkUTF9mHFmFl1mpkwoFqgHbNfV6TsTOw-KJE9g1M_XT_Nb6VUK23tMr1Fg5n7lAwGCtFj45guJnumJU1N2lWOVhcji8WQjbf6R3jKIbXmRtMSjy3T_R2FCUDG=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOtIRnB5UMzPLPQufSWEvUhuXRoGqm0dqf0o922a3Oy-InQxejnqg4-KCwhqwYwP66FSQ6o-nWZkgq2Gf6mJbI_YHR4LTUbPi6r0aletXrJTDe3QQA1QPiS2TAwVJ-qLdE1RrKouG73R2B3S93qmzKy=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczNiKvDNWqDdg6zu5rNu60nHi9t3DPxfVW8Rs_QB4PFLLYhNIeiD60kIoOjH4uVx9GmBQEo8M9cyLNFEf4XzDX19ccUGaTy1JHVzXzlK3PX6JnFSGSL44Hj4tcPYxf-KQWYGXKysXUu46JNRE6whZi5k=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczPTu15i-yJFKriwkNMTSZCLHRNRs44MV43S0klVckm6BH5QIBmogF_bSYr1ZJ8kUjRKcDtged94fVqrRZMSudhykVxqhHHC7D5fG_OWhIb-jshG3v382wiPhy7yUPAOuB6NnKDvOIbJkS37zHyTt4OS=w1920-h1080"

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