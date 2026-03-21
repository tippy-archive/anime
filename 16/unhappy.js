var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczN5G5eP2_9LLKy5n3eGT9WxIMUV3dq2N_09PDIOnBnnQlafK7iQCshsrp7qN01cSei7OCvJcn-RLIzgqYekqhCz-ix9yGLocMlUuIdu722fEeDpCBySvp9oUn7QWBLIPMytMBqvYFbxIjJiQwubQQHc=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOQhYwHrLRkzw4kuDDog7y2LmuPMJ_WT9e2oz19i0wA5KVtiPkAIp7LN4FAv39VRcs8mfQoS9DziOf7yo3izNTpjw6WBE_aXyLnS2NvVLZAiQvS9hKO7zFNn_QYo7uavfkEP0AzcVb_zVLBI6CxQKyy=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOsd0IyCnfilDcYMCfyv1309X3EXpG2PRkpPvUjUjrweWel9IjgytE-xwMCPBcbWxLTabH_kW6sj525QqUR7LGuZzC_d7_Yc7XTs5LpKMDmX4tNGEPRyNQkPdKwClQnDspE2TqCuv2Yd7NyrsO-dTtW=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNhgICU7mpoV82RCPbJ00qa-fYe7zlIBtXXLbWe39qDJU_zflbQgC5RwI-A9xjJWTTSIFBRK4ZkVJdEe_MPd0G-Q64udJXwtC912uCkE2soR-hvP95E_754rv1mkrvNZKl8B18f_6lR0C-IPM2G8HZv=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMqZHnSqCLL27SH3PofU0OBV3P6iK6J62V6P801aHu1ylnfhB1PF3xd5-bfD5fURqNDlgXxckMi3mGVnUfJnysmDRJKNVnf_IdZOujswbgLzmktOetI2HLMVzZfyIkC0QkIayunCa8BPOcQBNMtDU5A=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMQEDXnJ5Y2HghmEjH0c4g0vl8zhktLGdTTVkqECmTsJShOxa1vqv_jtMx_shHumr6XOyKU1BHT2ri1jT_CVIUFeJAvfIOkoRug6ms6kIwrpcA53mvxt1JlafVkWxMO-gZ1KTD14IqPI48uDDOTGDyD=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOUHfK7SVdOXrGVfU_beu9RnZrs2b09G-b0AZk-qk5EP9INQVwwiOd2tMcvO_nYN8UEps65J7KJDEAJO1P9CnODNcgkDZ8MDBTucKF-CNzQAjjznXeob5bgf4W7A8K_YbbFlNeA7HNV_wRh7cYCJsr-=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOVL8Thd2lnRglYP0ZXCPKd3Py_d-HGxwKym78ZYoh5rpePwb8NTFL3_QeZk4mdQepWbnb95gGhxF4rrjxKnbXe8OzJ9BaKSWSZYRAOsHQ0jT8NrSxPnbJM21anH8EXyvUd9HkUcK1ExB1GW8JvyB-N=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOQoRASck0OMrn8SSZyneezuNURyqV6YE3grtbU25sfLSdmzGucQoyDeG4r7cVahHseEKRn6t4N_FF6LSuf-0rvN7yL1kioSXlQ99YPWOHW97tAL6qfvA6KDXvhc7e2DKdseSYrjZCQu6sXAvepgPkX=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNhGXX5Mif1A2mXrhrVsJIQeN4NNCKnjyUnbylouNB1B_TJWPSBL_m9lcTp-XF_ESzWHPzP4Ve_VzndS6dEg7mSInS8PRRK02LntMM6_n10pvf4MnPBzs-lrASKjvfkVqS7umXqMYchMp0sx99cqUtC=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMOKH-IbJn_zGKdeXKM2gNIb5WuA24tXmotfIlL8Ta-eUABlMzVscLDxw-h7SVhtBKuemE3yjG8pQEyCi5uIU2dJS_diXWqGcXnAwAEbUgCQjOmsBvTmpYJ6pfWufL_W4SXN3qxbAyeIeVX_4NEuD5A=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczObyeR6psrJqEqHM2L6IN1PNIItV5UzACHlN-oZ5jfJoZK2jsnEWoOswvKcIAIKE_6pY--pIGIAE8dNOV0pXGHF_8B35c530FOJYt08rne1AcJqfMVWj3EvZvk0As8s6gPT_cThR2sjpxei3PWbAVLa=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMes-A7dhxZAlf-T3Z1G0EIqBf1D6MOtzwb9GXaakeGxaGl0kLk7uOTwTExY1oJqes44zA-Ek6rUpiWW5Hd9X53WghUP3DB2B2QHbehp92xFrRa_0IRQqRzpgMoVmCu_E_ohHtBAw95nZfHg4qXloXt=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNZ1Two6Eyy8bPmV0f8JaLUa_bMsQpBsRl48roZ3V6nbB-Kpt6L5e9KXdFiiJrhP5Ttmihx1hDgcBjJewFkVCm7Bz23wfWyhR_6nIRdTyf-TiskNtgT_d8EP3re5QDBShFMDeLHpu5omVBBq8BRqbIC=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNwmJ5ablqiavaxyUfbxe9Pl6AJvLqE6O8B7k-wVPMK1XXmEXogjfZ_OGz2NhPeqKvxoSdBMGJluzZAZwgMin4dOLbymgnWtXlzvqkubhl9GnLS7cw53yPBU_ck914vUXArnjZdFpMQ-9Ew0XoxjX9Y=w1920-h1080"

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