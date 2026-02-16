var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMXgv80rdB5WIswdeg-uhB9vNXG6ovO1PSW4tD6RNnbsM5GKGgcP6sVJXIXpgLaL5PaenWyTnnwCOZVmH-VcIG2Bm5opxoMBMBV96VjoHvXWRAtV6vkdAWRgrmMJB-FeU9t8zPxJsiQoODgchTDRJMG=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMw5BS0pkQT1-MuWcHrjMioOgbW76zh9e-QgkI7xGKaEZ06ghhlV0vsYE6bENA1dR8jAT6KjZSkOuB4NVNS0a4Y7WJqiXWivQjl_bwZcB7qdBSP49jUiUw8jmH5xri0060hPkLcVjaqqXeP20AzJ3_y=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczO5Xs35Xa7MSdVDzSu1bQXumSQBMMCuMxTIw0ABCCJQlETGo7RL5WJZ0ZcrA22j3lPD-AIBku8bNNtv6CNLtObeVURsOdQxAXxggV4KlaBmjf_VG8qc7FXgF_Nm55YPiojJyj2hv2VTbgy5uea7ziBh=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMNEDSxHJSrE8yMj8WRMgcd1FYp4aZCRyQqqengSpUFlKHWoTkPQ7_B1piM8hhzBIGcvPtpH1cXH1YtOL2pDfwl-nqS06B_S3NbxWbbiuooSDvOmqTsJjRejXNDzR5GY0yjWnZxIdNfBZopJ_ov-pi_=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczN63sHl2JliRMSGX-I2L6cPGFJHJjlSVIDPmRXl-CI3L1UL_qZlwmSy2weJnS2rdZbL9QW8EoEqrFroTkWoRFrn5e34cu8AiYym8u-66G520Ds8SmXh4kjDfJN8C1jQC0c1wYxsL4QRhxkO-KcyEHOD=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczObl3ORwrnrszX0QRV5xExQ8ReAExYIVftNLoEgqanz1uXgIXqVnl45R1hdwyQbdU1gIxHbak3MCidCjeRB5mBu96HOd44moRcJcxoil6OoB-D-L4pZGcGpH3TzSr-U-3zm6bY-LzgoOX188nAR_4EP=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMLjsM_tXtFzcBnJVnIZDxPjbHLZc7OpOdmyGfIvIxWnT7wA8m0jTlH39gss-UP00Bp9Z985clRmtJ1BF42uBEtdnBtWt_jjsW_rWtsy0CpwQgXE_zJcElGe-CSTiuIKn4iNPe3kgHl1Q0_CoIQtzJD=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMNEeY5vti6m3Q-UBMOTfvMMGV-0Sfe5Fn5QOWoTJX2daRm2Jebm1iFUZo1CSBE-oWmRvUJTyqpNVduU47ejqmUdBSCU0asindZ2J_g5nxt3e3oWYE6eATgEfT4xg6NPHudnM3cRItkfHXqAu8rWhON=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMhMSl5d7qzEVLTHEP_v9jfZB-UpJJ_0uC5p-nbgiSC2_veA0V6jc1cQS6jU9KD5nJvvwb7cxMP_C3NmZ8iAzFPp-kgL9ywxSuNhHT6d240d9ALDU9WKkpE9uej3nSH4Hs5zWE2WlQAaglo6phY2VCa=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNHtEZbhTtJCO_3exfzN37WN4kKnAe6UiGSXBCtPQEiuHcvubq-ONfrMTcTf6T5oN4URXVPt_oVdQpJxDVI1_iVbgK4SrhQqyQK__zme0c_N4gaDyBgOqP68BLhvuzaVVjr0dFm5Bdc9Cp9O7SO5XGW=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNQ0Y7l-MUEQJD4ugYOhQZHlcbGpXcYsGj_i-ZGZODGHjrPQyCr0_sy_fzXRHKdtOtYRmXFM4KmtTFpfIKonDi0oAfOvrNEdI6VgwOe2ZVVqez2QpqCnYmlpUwCEtGGYmmxSMW2uUUL1M7xQ7bVpyyF=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMpBZs8orSFerNXWs0oxF0zxj1idr8UWER3BNY8DmkUGtzDzbmOcGJoZdWkiXzD8uYRoG1Ze3IX5yHUkmzzlTBLD4PlhDm_Ah2CR3CFjKx0jvLv204aW4rMKu9vFTD7aoz5ZetqWoK_llBojW62K3kT=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMM0lwGn1CwV0wIWXH9U3m1wegv3c1J22sDPUXMac0ogJWAIPXGIMFyIikRwF6tpW466IZCFI8IqSzIk17pozyRZpAoemT8NUYYFf5qPgGL5R15WpRhIDk98vEqRs4SqEsgPpeyQbcFsaBy03m0EJ-X=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMx74X499TtPzI8TqQROmHMqLV3ONzgRw-k4kLpb9wfQ54jk6MGUkT3PFkYJ2Sgu8QhyPjmaZNTa1UAl0NAqStEJVmgqsag95rooE7rXhZhxGILo0z2rSgUlaSQ_L1zAPv1_dpx1ymA1C5NLMBQoW0w=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczM_1Kun8lmguE5pqbQzu4avV1WtjwqINk-IC8Sig5QCP9xz7z5K6yt3MyMOesCOYwkf_7g83pVsOXwtu3dMjsGzVcKFc5mQlRV96zl6xByeOiUb5S2zSZBnQnQszYQJGAy0ModYs7u7Cx9QIOBQVprl=w1920-h1080"

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