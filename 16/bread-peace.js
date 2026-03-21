var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOTQeSf0LLwYprHen0m-h81BxpvYwWd_RlIVwx9j-EjZaq654cFGwc5_DaeLoe1U41WcuVK4DcrBzp3bSkfdxdNAI6OzOP6Ku8G-wATemLWOOIyD4rNsQO11IpUagvpiW7845wpU_0l_mEQwgF_AxHa=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMhgU-TEvkthb-uZ1AL5miD3lo27Cz8qIVsKeukNSMXcrhihsr1LhufcgfAPfEdXt4EixsxtaY-6CAqD1vSE_txU0xlMRvCm7yCitGTALWmlsOYhIJg6Oy6IOXDWrBITusw6s9EDOcjpyaufkiNJeBr=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPoXpJKhEWoResNtqEZf0NbpA4p0QxBiHWwRxkWfT2N6xcF7xO_jTEILwbyuTDuRmGTyMTCDXubwnKQw7HxhU-zyYBMW4q8lRqPbUH0HziXtrluUh8xP3pPBkUGEpyDHHN0L8J4NqAeJ0Recl-N5GH0=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNIUeCup_nBwVz3ZUUqJyblQeU1mEPUbm3PQxRP7huUJLnZQTQCjb7-1RzCEDXJp64OGBmBGUcn6RDk-Ix1Glt_r1bZoQF5GRAzdc680kp4loXLc07buoBGNSzLefS0ZmvMqPZcnbmqierBikLIWF9y=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOqs_jlxVAcLNflHHo51WzKKLjy9HwhPba2kJ5Hg4e5OYY3PLkVhsEEgVtuX3uxdSrB77KMUNnCPhBp8QL1PAo1Q_7XhLtxXJzUMwjJtJgBjsz6SAsjIWrnDKP8cDOIrSJxFVHbP214Lq_F_0CL8zby=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczM8GxM4tPx0GRznyiREQjaIhp50DlN62ur0gnQzeXuNyPbXBGD5DdkLs35SxtjLOAAitHvdBx6Ha6nNFU7EDcKZSpa0OG-EQSPFmOKUHF1cMVkr8q3hMYQVtA_9FZTrY3okrbWlZVYKr4iucO6l_Nl_=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMvBvQ2kkeVhX_4yWzZWFWvHYZ8300uH-VW3gKaMEEevHRlK7ph0pztagtQMedx8rWTiisM11C-PMmUn-BrrnDDbbH-osnHF2kXq4EJH-Lj321GHpVNyCTcl0px5DSOscDXiRtQ7DkWCdKlTKcCYNx0=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNnDc45yiDwsX-U-lUi5JfkRh53lXg3Gvmb_mqC39c7d4AKiWnE6hWP5625a10EPm0NtxBcmfc_hieDDLtINR48HBfn6K3aNBuI8stpUGiceRy-uSRBhaDSkBkXK6BXOkbOkE0CzflKOQa4rDv5jUV1=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOwh0v4YSpX6h97zA6t0xX6TizBIOAd1oaaY72gMwcTuP2mePlCXvZBu9-xakf6j6yT9b-b2P9Yo10dpwpoMM-du8ZLn1xZ9SplX-_vxX3se3Wmmv-boZr9uhCB6KsVuayHOGZ0MLD-iWo7a31YGU2S=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMu5PgOTso2N5BZGoZ-GHZ9ASXafSfJ9veBcQ-zl2qvLMQsafpm5F_gMBFEyjuemOmP9YnaU_y2Qnp4OGdONPFHNkIYIOfYKNfYQBysfI18eK6GetRaRSYJy7OR-Pv0sop9DwFBU3z5NXj37M5dMny7=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczO9E12vIhrWN3tuQkTI-WuVQ2glQM25GCgvLzozCI7cl3djg0gI54WaL81dfYmUrOZ6BWb4jC53vRKuiCRWhDGkbrzSLXtPhz8uJfks86-gqbU6yNuzK5hbeBXB_jJ1dPzypczKIqXfWfbwGXA9mxNS=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNSV4-4tCQ5ka5LJS18rt0faCzC-QD0obN3_Gk_aDsj5RgMU-6FirCo-YgQxl6SZ9K01tECq77Y5-TvWeLg6tsGZrp0QJVferIiCmObE2edXCoajsPAs542yFK1H7bw2QE4Bgu-WPNq3qflEmOgDpJl=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMMuUT2yGICPhbSzTMZJmoE2PnL_X-nakChBKdkpi8x0YyNAw_0fov5Tp3YWvyi5bsQIHjptiuYOo38kXYxE4Tf3t6Z5bIn7VTH0GBvk5_U5JbE5rcvXZNpL5nXGgWtqVRBP6CZ1sh1MCfTMY5U9Jla=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczM_OF5El1IcEyVlvxWdbO5ipN_SfXlwDMzPZn56sZFFg7J_ksnsi62TWIPqUIF6PSK2SNW7B8gJV-1GLGUGDg-pc6QEaLnKOySMgXkGNIcSqim-hUsI-bcJCYmbcKYv4CkhBY3bfIXmo85O5gaSiTVj=w1920-h1080"

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