var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNwOecM-7juuv1QHBAXkUewP-HVUJpCUvEKUFyxoWK86rZs7rKpSJScwoNHI9fGLQUKWZRJGCXzcvXDaE6Vw0GMRy-CgQ_kP-cjl6XzrOJLzShChcN533Kx__BhzeXlsKq1-eex-dz602AnYFp6c3BI=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNqXlGROXxm4UwMP9qVUZl6v8FKYgOXUI7UPz6l-xkjUS8Lc8d2XJS7hSiGOPm6TTdhLK9M80FpmiBC7Bpmhk79ENYZrUyEwZctHipCetNMekngtxCtOckMMMMlzWUDxaxf3jP_oeTHXQcFRdlDSYty=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczN6E17fTbfc1ivm8T-ZOzgXi1vGkqhA2TFVIwb7d1X9jJNEVd7D-HOAP7bCgGjoHM6zXTNS8eh_KVB_7BX61CxMWdqSrW25fiC0774zRaPI9Jb-Fy067PYVx9G2hYXfU3SNfVVjDZw33eSsGAI5ymXc=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPrQIeK8qM5nzXnkA0DaTgJccfaILr36sk5iAi9hMvZ4k0feI2RV5P01_SKTNlF6PsOr1Nz18UxSRv7lKCdFjdql-vmg_qE5iXfLlGw9xOGmDLX2OktpsoMUbeecUTA6k6tXWe5DrqVPfXyN3NvlDGw=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMqRvijbv35uYcdooyatzbh4Cfbge34DJhZEpxJgN5Arbspt9R5aIwy8M0JHZRHKvoCIER2O4X4gKfyx6d_X125cxsIyoMv4b82jtqN9Nfc-bVUSapptxkQ00G4kyfWhY34xDanOOwagHQ6ST0hsmsm=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczN7c8Hg3voXfQMeKCIPISPin-uddMjMHzjN8qOUvaeQeSV3RquJtheESJsPC2tMCpzrgIBLu2QGEYagEnBECoIH2VmadFgwNIaGmYwJ9iSPBIV5Ypmm7Z8CXxrlkWxeLLVsS8bmTvice_Gz1JBNcKGV=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNN-dXMwOqFvNStL6TPO9a9lD27CRSvzUdnj4IkTMmfGQjO88mME7K_vt48TnzkJY6IBSSVmklg_yEiRwpz0jEuMy9BLIZZnTuhM-s1Jb3j8nUxEEijNYfwhz9q5Z5XbnA9LNm1ZxvtuZCKbx69rs6P=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOC6BViot865limi4LyOdMHuFwyCfFXAiR35vdKHkcaT4WFlYSA-1vnzbFb8AM3DMu41qjuX8pJIDh-w2IAgGxHti6dl5w_MvXiMpqFqEtKsnJoha1z81W2bLRPwOVVEQbZdTi8fJJM-FOMiNCqYDyI=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMFs1ercJ0H3Fkc62-lk0ZmdSVTZ8GqSHxuSpAAmJiCb3UkcGdvqS9uSIvNFI8MIKZWfQsplx_A4OdQi5ta6TDT4w2tBqnE4Qw2xV3SRoJkj1a4opCVHkInuzEPHP5CekaK6fRWUI-FxqwnkvgwJROh=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPzmNUpkBV0HFvs4CxAIcvrBgqgU5mFZaLCiplyvbugLRZDVvI9-L36dmxeoqJju9M4RJCdd0DyRkMaa85qMBPrkvvcwFMdHv91yc0r2PX9EIryZEdrCB8ZT9p4I8lEtx7YXWgxKVQDXCbSfpJZ7bcd=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPQn0M0gQIig6-PrjnbGXfX2JgMD235oMmPRWsIh-rrhHQX1Sv8pJfF8ztXAXE-BxMGUNIuDKfSp04wipdemAaOPX8lVgYM1R4EwmiaCg0htnWvTEekLxfr6slOJ_2Zm2Tk4a-G-_47s3yu0sdNMkoi=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczP1svfB21aPkAFc1e7mFDSd3xBhRpzUTHCp-C4Q5kh_MlGPuPpDsjiwfL08XxP5hl9BfkZ4Hpw7hbpWFWCUAHyMZ9l3QrnFlfhLRiemLIi_99YNZ1j4rbY7o-G1uYa-abzDDXiPQLmKY9Su0HLCp8R3=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczP09g9GOfl3hX__1vRPwyStDZ7Ruc4GUCVhby_jmZJW_O10HqsqfbuR_fmny27QEV-ljQskiG13taa8pUipQT9DwFNQ8V9WKf83tpUw9NCeY59efYOuVJgvgNd6IUp_Jm1sJwl3Xh6YEHFEsAGGtOrF=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNugkgpV6u2SMEh8337uPruLzJyeXKEzU9h3faoD80tV0LEN3z9m5dqQcHrhMMWR5XosI-RqEg7RS6NrN-q4muxMnBK5G7FjvvxRez0hqLP9zRmnQzCy8Y_F4OSo9NzR-vRipb8ckJHo-fVf_vLOcbJ=w1920-h1080"

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