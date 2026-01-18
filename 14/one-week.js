var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMbQcagMZWeeNVtseFQQXiLAgrVODxyr3qGQFUIn5H8Fjhu7iPhK635QretDYM1YHunJ8KmIdcCILSRdL_73rqZbchq6QsJjzvBC9HhNWIKm5umXQougAbREZiC5aVjeHaLIIahs9gWfZE584I_-5NM=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNCDQsS6rfnDRERBcIMtC73nz5Swlo1Ch8BAOzsONkpuU-pWcD4C2-tvGD-S4xRDiojVwp_z6HhvS3zVTQkEr7-gAlzwM2WiDscYsP-XSMtw5EmRszkAgkFEqA38rNfgtT2MvfKQO7gmRVvOFS5-Y9j=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNfaNiQQ04MTej7H5qxiNBRqeBWm9nMZFcvzdC7bGs3o7MXXBiWyxRaL1nKzM3eao-O_HGFKyoEVIQtNR6qniBK9FPPpJ0sInb29NyZLLPaC-ppBIjZKwdMFsqi_CCTCMxQoPfuOCbbsuFFXK9MBnna=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMCN-jSYbvGKVA8v8K5EwOG7Bcz5rBA67N5ECvhsBR_f0vkZorvQUZmM25WCgOJDWq5MvvG03BDkSaRPzSNWR_QSI88t-fRFqwPRnMHBJlJ4oQ5XPg7BOAy5VA3Vrg5d7X8ZGPS8Xgc4i_nZJ4jlywv=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczO5LS26d770eY53BWStNO616GApp7qR38dgk1IJI-hmdXy0nJLJ5qeLSJ-ioOij4pHOm3bYHlYK3SppgL4b3AKzh29sZeAWPaqWrLsJWkxOX7xiH35AAK5khY3H4fy5vXQJVY79Vm-1JqH4ShwYXFnr=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNmjGn_IJlb0iTOQqwEn_1RjZvAqEbm5WaUglnswvskAxOtmA8n5ANyXdQlrN3Sq6-rWVRWGmvNKhPd7kLvvHi8TLPskslz-Yf_ah-ZlY0rRtWWKtJhJFMi_h3UCNvqETqtcGDkPN5_cMRY6UaFkUwq=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczO2u4L6PQMverq82JxHNidEN72zDbQd7t2TOqeyNmFXnFoQj8q4Z5LELPRl4nU3RYsHhnnln-Xp6jItcsxtAcN76JDma_8h_njFolobHHKh2aqMDmnRc8NgJiTjUsTWAdo_ReohMWWFdVV6NNHJFZMK=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOLUJAyKP--580uGGHZyuQOuCb0JgaAku_AtgIKM3n7lmU4miARLjwtyjSmZ70UDfG3bDHSv7buyCNevskx-xzTXIOlTNivZ1bG-F9_KR0b8iU4-L4-QcVXXu7eV6T5lU1zicTDCj12cW5XmIWbECnU=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOdFJXWzndsYFNr2u2-ix5eGvMypc3jDIO2NN5CQkczcWE28zxCf3sRYQ-AfAzrgR2aNOyOezn83HhV8nLq7Dk88g8j9HdhZIV3ugl9AK43gtPI6v9z5m2evqmskdUdPMQIkHvGXjoEYq1QBawuslo9=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNvvv6y6AuUTpLz9CKLB1g5fhMGpuHCkS4T9bWaLEmsLz5IYPBiK4qazP0H0HdI_2I-69o8YgnP68Q8-6wJqnTnfjPjN8NlIw59CHh1aG-XCRctXeS7MpavEdsrarQLKsTvBNBcnymzHy9aG_evQ71a=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPe5X02rRFZ-Q0AKm213KnDpOiGi5X_7oZ4XtaHGlITk9U7wAsYFTzwsqGtJOGqyTI-hbtgTof6eKQpo6yhOFtHmhRfDphgYBdoNo13JoCtDRfTm_ka88pW99KlzVlfnjCOqHn44GCubRPLLMy1VPKl=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOz3FcMLyuHBAM-scT2CnQljNwAd5bNyIEM6FaBDzDTw6iLz8maqjq_b6QgPb0nEsUIIHOx-fOW5_sP4z0Mto9TO02yyBKlGYl71tiNnIjkmwyKS2SvZkkUvz4HJlDHUerxkCiJ9PPSVk651jgNJttg=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPPL3uPHZpcmUz2f5TBlZ9X5IrkPu1x9MeAiaopTe9HWO5wDa_HbWKj3ndZOSnt4YNWylESRlXkZPIvkyuULwIeOzN-9HGn7UgaV8uL_6oghq1P82-3F_9fQKVHM2b908AobKK8wE4nZ4CmzldYpixC=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNCoCO1V8TF214bZpPMQfH1IowFSpmIdJJ0W6GsOH9TsgnmB9CNAy5AxNtmDIZQerEuavSajaskk4E8jBc-HqoIfUua3rB8Jr1-pfum8578Zr0ce517FzjTw30SCzH2pgNSpgdEj2m-5UV6B3vhh8KM=w1920-h1080"

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