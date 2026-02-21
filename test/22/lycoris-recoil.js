var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPfXXfvGZPJwRIJxTCcwJK11x3yH5g1f9cJUtXA1HUZhs1NYEvxi6-mDUcbUrL56Br6lnpDAoo3NBeLma8uwttHJ0PIFGdaDTXcq2_ISXgBPRlX6ZeRWz3Ap0kLKHVXgIZPWhYf1gy2D76RU9x8brfM=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOulCJykv28i0xRmOqLVshQ8VAzAexeKbcAArAJV3YYPSX1G8M4HhDviXCRW1ac3M9AeI4TVpcaAeycWw9DhZ7j0gI1BYFNYpFqURSJ_NV6NvnJFXsyiCPmh165tKrJtlF1D0SZMvV93WuTyeXFVE3c=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOxNaTq1GklRM2FMb2PaqsECiwl2YS7wev2nqT2iod3RuCP9FoyX5OgJDHg9aXQodEZpwOLz89DXZ-GEeHOoWO5tPFT2O2r-oMZj1pbHCiKZ2PpFzVXCwsOb9Z3HImZYJg1XhL7oYT7qgWQOdk6GW-n=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNZGbpBVs9OPClfHmRKLGxmk9liZ-cc_oWoCG7T5oarrXpeJfMh9KM6xV2xWBQZ5YgsSAr24oSmwyo_RLe1UiLtZtxaQ22yEsOEDL61eXuTq1zqOg6DGHpjNbSo_3MrPKZ9z2vwXLRmTMPLMP0la4Nm=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMWO2VimiG90s7bCuXQLsVT6To_dRrr30CEsuSxphuo2A-Q2XnskZTLoXKJet-4w51b9jjoRv902-I7-mCuKH7V4Edl7E7hWGYQF0hHtpOliDFA38Gv6SpbFJwn41NFau8eEw-niYXvrmSgeaiuIm-z=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPVmvbKH-ZdZr9RjjBa0OD8H0gqFEbh5pYkapjfPnrRuDl_SFT9nVcby5ycM7GaprbyLQwpwu_zTpPwo9m9lB_l3BxHKfbvfn_u_-8p9Tz1H7iq04LyGYih7mRwoip1aUepznB90Ooec3f4nq7VNfnf=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczP6pZrVs7BBcO-dX_lNGGxOeDQwe6j96O6B2vwaiRFSqu4y6sOrbdYyDwO9fyyI304OJ0kkjob37gSEQ-AlR7zPOM6FiI-Ww7GRVvUpchTwSE1fIiFC4cfPLC9peqj7w0EzN2A0mD47ikjpZfc_38uA=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPNOwa5c_-hkUKMj55zY9vOJfBHaIMg1HjOl_YxJc2aZE9Pk3FaGFe9z52MI2h405eKbv3S2txcgSDFJb5klV7mfemyXwrtwCz8KeT68DMKUeebeBQu9SqjZTMkbkkQmZLAY_VQ4lLQSK7PzNLD72z9=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPxWyHg4ToGJ4sOICVE8YhtYI6vIA3J_45MjqJ1qc1cVkTHc57VghfLxWl7Ltw6yCWs-53BGNNli62gNriVziDXCow74rxHoCHrGOCm15d0wP3NuN6vL-bW2hXMawlAH9H6SMWqJJFZHDdeVBU9B7ld=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOzwyPDDa5Sgxq_Po693cXK5VmsdNYag3ailoTkrYHmaCE5PwAha66ZYMeYmlIRkkQXb1U0UuNhK1RtuVS0Gsv45HXRkN3kiTOzIsMYJbqDKw0p6qRcAz2Ktz_RktW7D0ZnQDTd24Y-s1GAjnTEIow_=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMVts161K517JJ6D3PwIB2VI8u8jQ5DZCJfmhiQp5usjR8GEOCx0avr31NIQha4_QLj-ntsnIR68ziwBCj138fCkqaK8OYdH0q_9n6g2axqGah-hYEqgOvLmhBUn-A4Sv6WudcErCXJ9hsLyjnIOTpI=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPZHd_FlsY6OiW6QFB_8WpK0GyZmbh_XFL6GMZssfYKcWV2wrjk74jGqZjAq5uKgXiB9MwbEXelcrYK5J1bOZi7LElt2TyNTeNBY0bxFyY-M7D4w2sXvoVV_z8CwUIV59xgeVWziZEeYDBs-A7isJAM=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPkZ0U3fvu82Taz2l0AOoCsXGjkCa5GtDSrvL6zBEsbaLRx3nIKC2DJHjH2tfs2WtJqyxPudFK50_nopBBcFGyIhnLtBQsVBO73p2rQEzyBXLVbaiP_OVT-XdOQEEg-9JS0rgm0PA6zItAgjBrSCmxR=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczODbWsUXxo3Y3j1FYXJ6CaQdt7r0nT2s1e-5FbdyXXrMTzaCtSLx_xPmeWNoGznDyA6TNfFfNZqKWemh5uNTOHGiry4ku61niFa_OicMpECL7NiGcG2ccjjjI2LLtMXFPdCrSkJiB-3yEeBZL-b91PT=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNGdX9_gTVMjUU9ZJKHlhX9zbPa7Ot9D9-qxuRjpK8hZl0iJOB2H7nRoQiGQsZCYeSMcbdtyv-di8M0wU-VSzqIdwhRjCQgEZ4LZ384A-m_A-CSlLOBtzJRWM9aIXGsn_zxAsHJzCtxr7EzCXdwsgKj=w1920-h1080"

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