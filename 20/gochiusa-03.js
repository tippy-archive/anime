var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOstb2gEXVbRE4BWwuUHNhKt-Ho2xopHwcptNEJ4lAh6MRmnTAX2l3uwVBGsx76Zh7giR_oyHjtsV_A0Bn7tARAB-mPMlooSBALLxQM8DqlQdUaX9gJxZKJKtMuhCra9Z9dPKLcZ3bJS0VtQdiXbuS9=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNfrD_DTMaxuPPEh1pk_rs7pyssDE-cOU4kieVAm7Wo24J1e_oRv2wVjpBQBGMhMhuWrUKoUFWKplnUg2SkbVt2zGaRwjw3VfeGcJ9tiV5eMyAYOkqAeLAgxO8V6l2J0NVw0qeWDcgxG_wNaPrV4TW6=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMbRfzW-CPwKIjpkyTZHiUBUh4hdTX1biAg1eXJasqjfaAhLDijHgEZ6jrJDPhg6lskg0XYoE6npGI-RdQgNrYN6E8c3zoJzDeYV9M-bDjddjreGApqLjlp4qL9wY5PBIwm9cK-Ci1g5L7E95hRcXyS=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPGeGYj1lTXPubN9QmDvSc9IPCSQ74Nd2AiigS_3uG1nOCCQGuYzGB-xR_xHLdnTSXq8WlXalXPAND6YNr2zgDem15InXXkYxJwYIVLNm2PO9ACqqJkGJCTKbb9ii12B3M7zXLIrVVqjFjUYF5IAycm=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczM5LxS2Ty0W6CY8KhP4Rasode1axMCw-ZXiNaeIXEnHlQKm4w66XgSvDlCASlaSjgLRsO5ZX4OiXnN6i0GaiwHCcZgSkkMKoDfp27zdXVvrj2JKecN-aiaLa7I1OobviRSF9bg4FR_2AFjsTHVqCx8F=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMq5iWpdgaUWl27q3n7IDqJRkQl-Shf33xI8mMGnBPu9wfT6zTuScjfWet0w_yn6KZN4fRqZTbgdDWaf4isSOlenhaazQJE7IQk3ClfIZLzhdiuM85TQq0GyRfSBnnLWyEyci40sSk2iM0HTcQxvPRO=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMozgAk5h3zlPDRHDSg7oGbJBxlphTDHESFoH9Y8f7nX1dW8bFPKD1BLHkbhznOxBBSGGXx32lL2SNIXeCnzaa3N_lhBWO0tCgz1fqqzF090rpumR5WZWM6FmM_E0cB3VvFDx2oojpTa1mZbuEuQgTU=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOwT4vej6n9KpsfACu3uy-VqOZ3nTWeii7DY6tAr2QAz_KVNwN33ffAaJfN74m36k5sWgqDbhRIGI3s634P2u4UYAwXIXsZQAJqdb9cZjfmVHci3T1dnEd5mKVnc_fpdp0i8f-WCyo-IdyHSKXzzTbD=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPOVqfZSvp2ah1YYRMiFV0dnN9lyf2Cpa2WDiw2RE8Aj4DCOKXpqmig1_09Vzv61QEsdF3QKXqvMZti-LzzJsUvB0utfMjd01UnbY6fuVVELmpzRtCNl21dZhMXLJZ3R_uMbQ4K7jHFg6uPsqj-DHn9=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMt84Ef7Ow2aw3jhKbKX2WcgqT3-s9pblJ5fFRIz9kjhepc2EGFQvz1JiyBm3mWNR9ilPHNYRqpYZqp-eyMaOEx-emWLDH0YFhpFR5ApjWUarmDie4scvgZ-Qnj8feEh52KxN-FQW_NDLz6Nd8MRW34=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPhIsJ5w5sA_YYfPaF0H-a9CRp1NXNSBNrJ93SKQXIDK-rcbenPETTllpUYIHyq-LMx6biYMkTtKPbK9CAZD9b_O5kOuIjdqigcp2dPMP4r3q_1HZiMMKGWT8YCMj0_l3GaCKYdVN-kzTAF1-eOewAg=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPestLNvg5Z2b8DOoUvy9ixME3uR8tq3suRJgsPduy08fR5g_1q5-5XxFgu1-rNm_-aIdfEbZlg5SDPDZi2cABvRTKXrQHxac8SBoOWx4Uqa7nWG2Mtr6LPQNAbNb50CiLPlA_Q-UrVjw1hz9hK-ToL=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMkfxzcmxRgC2k3k-eL23E8aePn-yJpm5LQ2C5vJZVdpCeruKUPWGlXdvc9FJ8cL2ELbMJiIsGS6DjQ8kHG1qHfGnRVMQFtXaopDNs35GtZUeuJBf9fNBmG_St_-2IZJicZX0Ar1UkXflV4RTRG2zjx=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNB3cEjQ-gy0vYijQuW31XjditmY_WTM5sqq5PJTk9iHcmRu0yey7kFSsrOBXiJgd60iNHfj2ggix9-OCy7JSpMsJO2qV1kLH3CTTTbnKaoYMNghIdFRIQ3Ad0AMaKVusdHMPKW-Jnnf61xzbRxflO0=w1920-h1080"

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