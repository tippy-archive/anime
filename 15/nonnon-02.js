var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPZoLMjUB_aHF_PWnVOtmkoipgywQkvgnldGmMGAMeddTN0-9v3C429FnL5SxKRYBXH9RGgpEbO1PDDN3keH-V4L3nJ0yOdRGtEgSMepM1BFo6oMXmdt3VH9v3MimUbIfyUkKIN0A4xhTjjYGYtIrCD=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMr5neqm3n96oYvRNQSTaXJ9mPbyrFM-x4dNq9RxkICmPwVCgjRDiiiD4FliwuZPrI1PqT5RaRAmTFFsYJp6cgyTEQQfusXgLtArRg5MySXMy8YE5KDWEwxhVSQJyyUimf0gCk83m7JyqgjSHqLGpSc=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOuSDn5Ogl1efB3wXNlTOuEjf3zm59rMV7jyDlJ9_6ipu391-q-UEbAJTI5TMh_e5wqXFM-58X2SodblpqkE_y5c1HW5zmDrZzxhwekJ_Y4HPNq_juIDZFcaRJD3Yxsu4P3TLEd1Mn22C8M_2vlGOTq=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczN7G89oE5bTNMPUi40i4jL4rey3u1W3cfCJKSLemeAToXfy4ta_d6gh0whaKjDimAE0ARxkoEEEDTldV1XcUG9SqWzNWReBnqwOnWtSx3zZGN_kZyP--KayrNduAMCbjr_-A9aifuw5-tpZ_0eIloWO=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczN9TsWSz-qgADwhikybqiL3bGN6cksOJfz5Hbv7lwPL9IwrDrjNN5lvfHAzGJR_w4tsSSSlphAz1BMAQGr-7J7Z2nNB8wE_D0L4uZ4-iNB3sqDQMbbwc-e195e2fErTqBKQqlRPWC8LLUNW-yob0kVg=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMe6uWgNjpUNwgd78p8WmV7SIPFjwYzP35JYxupwppryOkspAXy-djOTaMC1mr69FRHe-url0o8om8IEb3orWclCVH9mlflEejf1wUzMNgPk8sL_rc4_QKKkCPEAEG3xjnBipVExEHqeqhWH7pNxqlS=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNHVQXI-9MCfqTShTkKkmBlc6z8t2W7ZSmxb-LggqIuE7ERfyTkTtkvI6JEvqDKeJjOux7nuTAnCRA8_LRzEfLsY0KNSR7LbgCBVQdN90nqsiDq99EgwTfhjG3dLYt1f0brBGUeXn-GzJff3U0KFXaD=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNEZTZGsTu7KF_xn4blJmfCQx3-y4m8k3ItT7880BpgFBhKG9Rt7Nerbar581lsvZYfDqPfvQhlJsWDVuLLJlUsWjW0URElGLXmkIK4TqEh-UJtbh68gcEYGmYFN9dZsNSN9cmtNq4hOpq-a_JLB6Pu=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPUH44imPVHf0ktz6Kk_RpSYDIDpGX9e6WQ1ram-t3PpKt3LybTiFdAXZfV0Cu0h5A7MOelshpapsPvgPsRJr-IbyK_-bV5RrbldPOrqnzyOiNTwkReS4NY1wOjeSS8oY4kdAP2EKTc7siXaCjHBY6G=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNDEpFC3zQgb00dk0XwDqh2gZ47nynhKlJpijTXHRd6_-sgQc13he0GtYH8AVkjkr8uYDu8eiq05cn_ZKQWOTIODso7gAUeV2bjarls5Z9lziXnJ1iod6db1e6WKzGVI-luqz4BuPKXYkbp-9N0uJxp=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczO3IY8IDZq-oB-n9UhvxfvzINHDDCpzFwcF-UZ678WDFxh2TTUBfeBBeKpxk86ionUc0EsaDIuFGKGwbfOQViuyEBEIxHt_OaVf4FPH2GKzWXJ26nRiTmQ1NPEDC3Z_lLEox0RcqmAw7JqqVLWkW0Dk=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNoDcn-ebzIuETYt1ZQwQ_Ena11BNWU_6SZ3wtjEKbkfkKvJWxve2nH33Qjv4vjAtXahYeWumRfTrkgfoUxEda9r3NeiSHjSkgLkUuZF-fZwXzu8DLkofsvGmXvdCnwuFdECDEdp6FrGvonMhq-bR_y=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNJur1pBP-VSWz88Ba147dneIWDSj3LMbDGSLD3Ip_IecKwrtjJpqvuZjfiVJwVXbVCePZOw0CfWwvBcyKJrEbssQxzN9vbXnSRyOH5fFIxraf0-Fw6HzmxYLxumMGpc8c-HJYy4CAkf_7YsM5eYKKq=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNZJEmvE3qcT2SAvrJiQ2HxZyHgJ0wfi9CIEOO8otptbo-xnj9m9Ny-iNFn_LkpIqHgVqoOfrxOG0-G3z0vvOVcvx9ht7ZzRqwqWTGGdiCF3FwuzwuS3RLaCAnquNcp3MrQIcuEZB3bUGL2UoO0OqSa=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNUeEHTwjg10RwcvLtqu89gqgsk1MUwdygOO2IJZvrLMJiE1dAEYFgGgOBg7vv61aJXlU2j7LoZrhVq26xVcwgGJNIFbiTJoAIcUdEQpbW8cJ2ufG7Yo10KK7J9DPgzAtThWuEAswBE4KnsDMbfXuEn=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczM-oV4OGubJAYd6n66jDDiPm7svpQUONC7UBjg3IMxnnTEGdQ3d0f82TCuTl3wE1mcawye91_-Xrp59gxEwR1D4fb_oIeCFmKX4rLuSQPB-ab9ZVJYxzN9uoycwypcytkfSQy06VVskUQo3fgq27_lS=w1920-h1080"

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