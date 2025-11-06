var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOo8y7QtZeT5X6L8ZhNUaQXAHqWgGRlD-znd0FfV--WaciZKjkkrpYjatLx6MRhTnUwaSKc_noXaoyHRSW_JkAIrWNZ4yy-7jkUCNlwa3T1f4W-Gey1P6uzhRMFgNC_bT8zJuWH0cY39zHGKJxw9ZhB=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNyytzZ1jF2O6_QXXNoDrGfwN8qU4XV6sj4bCMoIcJHqFTwPLD3cLOBXvFKv_Oxx9AhUYy-yfc4GLjpP49QqsblB_P9cAABmkJgKdm-P1ls-kJRUG99NqkflKBG7V1K-NvgODXP_QZscj_jCqQ0kGLT=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOLkUS6RwXDAEnXR-l5lk0ooI0BSnJDHKgsXi4rJsCJGc6uDva5fE3mkuNsyvkQLgf9Rh_EdjEM_QpzaGpwLHIvt4ePdH5Jeci-WDRvU9dsvK0JQeJzcglVwb8eiBMEJb_g5v9jxa6YiUrKsOqzYbBx=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczP2h7A2448IYa8p32QlMLFEYMPhhkPJAwVNwNvb1ADnYD5sBGgSC6p-5P9n8fOb7ZsBn93ar0rKtrHLRO-Tlp9PwRcZ5PPOli4zaWdn3R2o9WkxBGMlHQ0XI8O35BGYigaLh5dPgBJvc9TgrvEbUAq-=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNiOroJ3ERgrHaSUt_mkIhJ2Jq8ts-NfsZ7vUJoqtbHh9i17DjbY71zOwCGlxGwwUyS0hXgEMfWVrHbNRJTwOjjkViDoqJQuvTTqrE70G_iOZ3Pc6vpAi6P3CtkbtzYm0n_SO6Qv2s9lZYS-JFKy8QW=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczP5rdsV2vznxNFasdnnfnsTTh9sKijz4re0XYMIp385VYGmbmOhT9etcsdbZuEtOMheosWhHxJmZtOteCh_BfoqxSBCX2HkCxci777BRcwzWiu6oSzsNQIIEUBVkd7H6WfTfoxSC7yJK7MbIaNfittR=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNhaCmnGr0-5tnw9eH9UaRrFvHFA5E84Zhgwe8plJFhMbdxmv1Zfq__wP1H0cJqhpv1s6gifY5eJKnL3ImypjODg1OIq1tHRMGv3LQtVGu0yS2cnQJpAQDFTZzOZVo0TO5N4UrGyA4eiQNp4v6OYYdE=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczO_bAwBUN1CbEVFCJKcHO3HMvzz-w9Q90fM0PZaYj3fQB9bzPQGnSlKl1BZQdvib3YX9hw9rMvwGyu-rde2JXQCwBguwxE_bzdDb_MwRn1_ZnmZ6un2NY-cecUa4t0K42TPOTXge_lrhuKJiTQQcZsO=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOQe5hhlAaWHjKcH4oRR0MApL6dT7Lz9xbGv8YpFWAbMJdNAInLq5QyLC6oDV9F7zkPzNcpCIJ4LTlyVUc8fG3yfg0jbbo2m1-Oc76itWfdO674tuJfQG04EueqJx5uXSSEnts_1okOHjDYzVx6XqvK=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNtW2QFnZNgKVWqlLteIMSOqo3dBOvbgV_QXaXdzWwaUKWSkcZF5m6JPlqOLGwMADgJNDuTUBZIyYzX6tOpx11EVC_dP1Lxq5iyiYWhYnGMcnToOvet_SJ16PKkeehEim7oHYsnNzjafImYCw_u-Zh9=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPLkQw_jqXhVrw7gK3RK85i0iwPsgSeblMLQ1sPkB3LzcQ4U6xFLd-kl4hG8Sw_0r_SzGDi9X6lgLayjbhpwOIDle8hgBoLBVEXfBqkk9zWCM2TXsDHgwLQ32_HDu24ADwQ2zdr62ukM_v1O8ZMnjXo=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNXc2bqRB7K0CRQXQ_tSZnqzYpqXmWCBWfFbv5YYydv8PaV788m2XiTrfBbwiYc0Ul6jEEhnwx_Bn7TD5-awSb2SbOFqESKwSlu4uwD7XTmv8hWAIcUNw_ZR3x99S4mlRWl3simg1NydaJJf4FxESy5=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczO4F_lEJWdlmykeCSqtP-dAzP1i4KG-rU-972IByNWO-YLOn8oqR45P2wOmH8FhUPPGl1MIhKNHpeMD168fScn7YiKhSMHbGzD7uAuCyrekChcBa4HBRYcrym9lagybaOdux7DZC6bAqAt54o4i9anm=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPORaCZKSAbtaCbfAvsZH2jiN_hXCfLdEsz1X62S-1eiv2k5LYYMSYKrqiKLMwtEMsc8V3Dh5OyfIS5zYACN9oqt3NXdd1JHWgOW-81o-yUAO1FdtXFo5VD4dHo_OSWjAk-wdCFF0cR7oYqZ3X1pnmY=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczO80vzd75ZxSILGxszA53_0xEDCTO3PiUTh0dl62EYvqjcWHsVp55VC305fIVHZs1lS0Yvk2TPaxiQAK4iJuQIRM0gqLfmwMhBf-XxUNNDqffg-m-3akcaZ47krN-wzaP1-EauAXfFzWuQU6njsTukD=w1920-h1080"

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