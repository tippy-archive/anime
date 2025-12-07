var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOSlDYsjF4IUFxGUg5W-OeSvdZpRETmllxmh06PwGj20MdN9sKxF7aZSBVaTQzebRaY6YeYyJN5VnoiBVJ2x-eLgm0De8gs5mqe0QWLfH9F89ARhhQthU-CgsVRe9urJQ_iU0P7DWT4ffofgo7t0LR-=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczO0YkaCJ8VOyKOsmiqL9GmYYdF2DSpWR-GEd5_JepCFsE2xHm-5dMDNuxxEfcrgQsxKDI5TMxLWqvSeSQPXp_fLXxWx_6IFZ9FClhFIzIFXTQeZj58BPpg7tqqkbZOgM2viW30MTCB9B9tqMGUDaYm4=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczO1i4jT5yKCqvTc9RU5bRmhB5OuTfd-2ww_ks0CghxqbRVET_jLswNXb_31vm1BWpfmmmolOzEsrNRa23HgOvfZ-qFc_ZdobIasc86wv3zAOF2oZWs5iFaJITH2nx_t2eVapJl7ebdD4omSHDJreX4e=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNDdtcrxypd3xRR1DHVDrHy6tiuQ1WlU-052t26c8SQsga1OibrtTKLez0oqfHu67U83scvEiR66TseMCiRwtHhXxQUKZh2xBcjrtwRbjhz0X9WnPERZeMwH4Fty3zyU1klCdKlGL8zkZUC6rVtvjbi=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMz7gfBpyNTUHIaXxU2tz1bwSw7oSQqS5uQCiRdwOXgEAQcfEIY1k_NxcGarasSgJyLt2Yhwqqjb0cb6OaaJ1yKm31SaXWhbKtcBaVc_tOkJHeLArFnSnQjVnwIX0HI7Ac-tDgp1Wz15RMbG7ydIdIx=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOCrpwCilYqIMBb7aQTyNUmjbOMs_sqI9PLqFlRgnkV6rslP3t0fc4ayR0cM7ZggtMnCCzvoDojLmz4OzZXVoAIEYqmFrUolz4rrVwfNpKPAMwwHLbrO5m2FrfT4Y7J5vjmA7scp-pNePc8SHrKAtWX=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNpDiGSj3EnxZfR77SiQtlhgTcdUDfoOeAC53yYXdnW0-X4sy5Lz7g-j3eGDkN9_L2S2PTWwdfZPw_EY7jqgTbY3nknfcTVVzx8XHaNAdAXSKZipQ2mhyBp6SJkYHWmsIMsHpKWf9htLS_41mXYMA3H=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOnIl5BTB71ykS30MuOwgYV5OMBbZ3CaBoAbRTwMkawXQ6LHvnsklSo_9kqnHK1qV9GvrCDhZkYqv1iyuw7cawc86yW0SRcJDuq0WLehZRhxtMvUg63ITAelQhmXxs4R73GiGoKUJK5LRrKKQRcPpT3=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPsosvsOza7gnLxDC9P2QcjojTEU7_msZ1CxDrcQzwcZthug0Zu-IxFzVWKdHo1JI-Tcy0w98bXcorpMFVqbKo3CBKfDwuFrXkJP8sw4H0Bor51sK7Hd9aA6Q5C1VJM1oS9pJamb4jNLmQLMyoNDLNX=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPJDO3fLB5wDjAOQoS73U09ypjpNeGVSoYONcBlbbkUsT6WPbEtAdMhPpeGKRtyB6AHqDGErQiL8FkMDOTYpz6IXI0CgphiqJPnh1iRiieT0CCXsHfxb06kNt9TD6vCwSZ-oZKOapmQE6to78uK8AsK=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMGFPtrY1xWw9sYQ47P7wpax0cYKVaT7D6SkAsNS6mhowjS8ARKwqF_iA3rkY_QTUpWCudNs60IMH7xzjVAofO-lnBduh5QEeRWR92bKBUBoT5IBr7LZ0PE27jlri1AHACe4qx4mUObb2cR7o47oxtK=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOObUu-AlsgvwjqMNS1sgqeBlLlhjilTMEK4UVhgLtKG94dw4-kVZsxlQEWw6lW9hylwtRe1gTLed29urpZPbeZtm1AE6AjCvYdvUOf-yTiq0dk-VdRIrOMiJ0-p5xui28OGA2Ghj-JglzXcC1OKDPe=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOs_LKGrwOdoTHSjC7Ki6kJnRLYGv-mwXc2Ru9lvvoNHvYeGsAhdJMVwvWWBwjpb6XOFL6oYRxMKjPjJm3hb_PNjpGyzYrNfpcRo9yanahNKEbNL6hA_kRINx_ONESIcwF3zot9QunXavCj-UW-Vkes=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczP8DZJuIj3iXRzKSKnWomy6JmX8JQ3Zd94WcmB8cCihV-7g6QbEhGKa9fW7ooc_OXhT66KuSkp8N3cy-lpbaP-oyJ9_unX7GbThd9xyuhGaT-8lFEP_xhkQIPEkazUsW4PmlL_6ztC2McajvqFMQw2_=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNBpVN6IcOznMFAh2o7Ca0G6BHYXbHI3cn2QboHUKc_1yVha457g5wS_wJVEquSRO6kXBJjl-eU2CMQcqiqC4ijndOqhu7CFyJj-nlbequps7vu_CyT3PbA84doQY5KVVUjQmJbRDu-CXwg9VCIkZMn=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPST8I_8skB0FLOBk9ZoZyBY5TDMMsaHewU3qEW8NCe38lvknsc470BnEaHprLAZMmL-PRVADAiyGxzO2nyqbVbrxwH87NLjW7S9QpoyqWKNcas6lguXb-T_VpqK-Wf94prG4sKCfl_Gcbfhtkw85dX=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczPe2En_a0MD19kk0cWI6ptkF6xfp_06L60uUrRErCl2LhF1zRL40cVvhy5wzxZ_VykUJK68XVBWJnH95v_cV5e4MPluPPG9wUlWSWyBGUmOOYHzzvWX1W0NoIJq7J9TKLiU7GAgw-P9Web8LQvI5C2W=w1920-h1080"

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