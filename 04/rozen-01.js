var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczO_nXHoHrNKe-q5czHbi7EBk5RiWpBpmLZFHDaK4CINQ7gWyAUIaJTNpWQHuFeLOG3G8IbxFWurdzAKDcvh12a4I9P7zGwrKyE7DKhqr_zwUZqwjD20VNf1AFNkb8LZE8nG1FwIgP7LoGvsDigmhzg7=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOkv-2vv6EzrZjVnZw7jidp1Po73JhvINkAuaPkm26__tupaFKHuInxom1yEt1uHZ8Ve0O2QUa5lNDKA2NuMK11BOVMWpiivS044_UBi13UBzkuK_zu83YhMatXCImzQaqVJyluhhwLiVU8R6EsQwxK=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPc7nBaoN992TTtZWgfdw-MjYYb473LSDZV9xjr0v_LRvlzlMP4RnHTX3lefwIi8-O4rMP4MC-FADCHZl7X8xnluCLoFJ41hDH8R9TV3aGXSUxtMvfURuDQ2ZfhCFXz2LPQZ0ExUTC2b_zetJQsUjUK=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNMIUtRlZep41OR9Y_iQuqlE1OrCMYHVxIh70ohIhRd_iUFPfiP27hrI-tenOVGzkpf6XblpkUrSIGE_sILcMqUMJQivhu3c7ToZC5DRpxVq3P9yY6A-j5UAyAJdYjOrxR_KKeBUQpjF62NKJcJc6j-=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMRJ2QrPTWBo5BurxJu_uKlvUkT7IH27nnmkpBCpaPkc4GbOMmMrvPugYxOTOYZHVRZR82e8HEhrTIgSX7E3iTN4wxwtFX8wlfe4duDrUcklhG1Un_jfj8qpoWxzHDEztmvonS0EGTZ8YjOZncsRNFE=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOSwex6sxRnm0u9E2-5rWGmIGXBysPUdCmcKbF3hUJQ3bWKoJAaYVfZqIaDD_I6Msz4kgAqP6FFDvcAdZ8MIskvOrHAwao9vp0tBlM9rBYQ6-_nsEPj7sD2jmSxA_ckD9yIP3xgJ-rYKY5J6M19_L5Q=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNrG_TqTSc8e-I8zYwabPkF6IkOY1qyPE1wo4qrq2LG_-Jgf3l61UCQj3chddeMj2WGSl7YuvqDMhv_fOF7f5MDvw2lD5BHpkmIwwGqVnau6t2JzGKkHnLlMjAOOmJ6JI2CeSIeR9xXBxRhzKObHZ9h=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczN03R0qvcUzLRLqQzEHIBzKLMyg-y04K2MHLNvbwsvr3sNimDVvbDU-bDh2miGvPJKvrIBDAqB5d2KRnp9eZ9DYD8nRfIFbVIN6MgW62bAuBzg2xL40u4XRpB-slpwX3wcH24cbKkelWWoto8UUNlIR=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOp_Dqwgn8GSxhyyQao7OmsHoMSlEK5qBYTNnkGswrtAXrKzBcMcO0MYgkNvZ1O_UphhXJdyqu_MQj4OUoE8Flh088NWpvoIpuRpXJ8ZR1FXRbiuu1Aq84f3rHS19intuNFQ93hP3cBN45ZVX2HEkrK=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczN-Qo3m68ErNcKd1w1_tEyvdj4c_kOxokskYmEEwZmXFgv_2n5DJwaMatsb8e62wX_P9wA5BLmhd8nc7bKBhRoISaCm4O_i2_ZuDwHnZjVVu5bZwgy7svr_8woREisKd-DWoEdlKNVo1VA0Ut8D2exO=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczM_c_nFg4yJkxKuatF7A0hqOA5WQrgR_EM42cbc5Frbpdqhrpngz3_U6ThCiJeDSv4NNw9pyD1pmPPiKov-eRJCohXuK5eF9lKphjnC0TBpwVDd_ubKXxveQ3xKl5r2S7l0MBJDT6R2Qk1mV9Cm1dRI=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPKWhVQ96GfpgavEFl3pCngqZDayX46NNsPYb82bR1fz_tPYZzXCQG8hqu5mDkyBdpjyL8s8J6vGKHOL6A-NM7qx9LkjmeWjqAnktm6nI8TF0A_gMVmqxwnLC4hllA3lX3mYAB3A0YFx7VgJ9K2ePQJ=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPMYav_V3jYxMSpA8y8hKFy1J3TY89BpVEyH52FyfhsBJZbtPT4Z_Wxh5yhwo9P164_8tm94ZFb2mm1cyIGc9ESoWFXGCDxFzNL8latJQ3FXvueDv4yKm3djhPsCCoZBvn6JI1DT0ctsLoj0OXh_kBO=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczME5ADVp-0GPG2N9WFDYaxmxfHaE7XmskueMyxuRp4MK1YeaThcY2FFOKnwzz5tuhSB8ujvTE8xCIc0emBjD2sviwtn9-YGz_ynwjsTTwPECpihBu1kgMVRrdxgw-oTj7lO8D075vr1GYJiYz9GgJFt=w1920-h1080"

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