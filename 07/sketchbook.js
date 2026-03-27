var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOm7rygkWo4Der5xBTcn5V5WyOEe7NwDF9JFvpq3W0HHu92F4yKyzjx6Sb2sCGvqHdmB3LbTAC93w1aXAM-aaSMXWb4dRVP8A-hhzK5wJmDMLbP0WPMyaU65LRnHsOx9gCLpWFsTQCuQOXnbDS0GBzl=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPP3ed_d1HkDR3Xd-P-9VyqU3FRLWFkx4fX8a4Bf3p4cdBmRxAlZzCPLScQtUGVnvvJqhv5dlJ1b_9W1mLMuRP6t_EiFlb983fitepyYPKq1JW_EO4f6mjEhFz6-rIf8l_DC62EM-rkb2tn-jZt5sXv=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOOZs0LCWnWnGpMcHn1DEkL-s2If0tzUMgbwYXo6tw4eYpmDoTPQTWDUfCg84GoMvItsZclatU5X1yDNeextLlndNDuhjQgTWZblUFGXShFO0THTfuNBTzCiiRuAJFjhwaDqWUZi8FpnrXm1GNqLEfM=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMCsv2stphnhzLLbbHucXM3wEqziXtMmYsKq4rY1nN4DsHBM6vPgELjah3INFVz6q2JYypMzKgaV2bWR-8oq3AEyOzGAQ80Jni2BHyyAuqu1cIPRTbv1pX6eLjHRNq-oHrwCdvGQhQIq4dfx-bpsPJk=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNNb5YgO-Ii9vAj7KQpOKVi1R2ml_Xjqteoewpm0O6BlQMuFFwozHAZC19r1ywdG1qiFbdBevorjnAnK3h3Rgpuiu3nUx0rdl3dniZPfJnSudSAQNi_dR2ZWYSH2AFC7Sapc42__X9bu8qqeFf6mwYb=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOGViE0vOYKFYMXRr61gIiTNwehXzT5X_aiguEkOsPQZ3Br93yto34vI32uLReUYCNO0eC1dIARv65LhkLZnT1ydSXjYsVPgKzX742f9NZXytuCh-iF2nE7U00wK139TFhpwUt4Z0a4K8vNLlRGikjN=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMsjAkHXufvRrUG9gJ7vtyQARlbWSqjqOq06o7NfXXKiUmgeM12VPN465yUdtMi6d57okQg6IWOUhikqMlo2w2mNIokusVDNx93gyUw1lLzin16URzvvx6rZY-fdHCpQD1NyulimYf85veMwNL7uII4=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczM0ris9UdzLP8BJor_ctwkNjZh11mY5bToa2dGZM6uAj5SLPHch3XOE23sl3SaudP24OX4QOY17wJ7_x4XORb4WxN0_zfTcQcXKLE7G_lUYVNbm-Qa9Fy6NPhr8TLwDXtlMZkpPZfoyH42ot9-HVMEk=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMKaLyKKKO4ew3LqLQ05-1avyqb-2dj14V9-jGKXUqJaauM11ft_U_qgQOVAnMrhKLLKk_GtlkadE4wnQQWU9OR7OM0RTILIBvUOcfyaRPvzFs6TsqMuDxlIlB2Tzi0O4dSPKRSkwTUWxtzrDgyRuKO=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPdtKEtI_wSVgosLbISVlkSob-La9dhIocxKih2t8OsYOp-QUajbHxMKv9AUmZevzF1l66mOXToO4JBuK1NrLIpY9XClJIqBUYfeXc-EA_CdYZCYWbQ-3EyKFhWcBmUnRaeKJQ7nVmgXFKz9HH7ySBF=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczM8ECy5grAoo08gCEK4kwgJcb30nMK-qwXkC0xrd-uFWP-Yy5bYvlnS0GnhEq0Z1U5OamoORVrULga_asBJB4rwpO98jaiysWRDFIqke5gWMdZGOzGxwOr7XGdCHwktClk4EEJsSZTcFfLp6iai2LwR=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczN0sgaDyXcMv8hG273X-S1nLtZxwRHcP18xZeV_A6ztxTtFf-KUVljYTp1ahub0EmN0Kuyo_ykPcaGkWsM01TUVDz7MmeqoRAmtZz4amh8sjaqd7YEely3yHZrr59pfay98v9Lrhe6wTGjt314DM_ts=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOjoUobtotp8p0SqqM6nNqgEFNmy1ezQNfSqQvt-O3uC1QHzHDKEuOCcNjL5AyvQTdKyx5QlP8a95Go3uK3QOruRR0IfYTiX2Bc0Tgq0UbWR2XINUgct7ktFKIAIG1ycVpj2tUCX3GJKA55fe2FmTZs=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNiSCgAB70Ptsya9PbqnVzHdSC6jW4x_zA3NZ2JDMG5QLtzGgx-X_WbO4VM6zvnYffisOWU4f-jSok2Khi0fVXzeb1d4BjqfwMAMoJYgn4J3_XXyceQ3w-1tIcbARrxNMPd4hvERCryU4cNAh-sixIn=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMet3tnOk7zd-FKDNYFZsA0Et4q3VKD1B4s154wUAvFFoScU8Tj4payV8auD5fNJlJJgpbfK7WsHL1YGjxT82ffNMKZ7nOGS9Gn3_dX7UcUZ6H-dNwklu9SaVxPhWnJhHK-UTf3N013H1vomHm0TsaQ=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNPvcX-RzjHVuwK8WqOQtLAkDP7idE5gCj4Ob04LJxQ-RlQQEwCvXNwPtqwgkUBhWARW6JqmPgECJrV4pcWGxZ5xhqE0FDwb0LbbYL8rjmk7nmti0_Bvn8gwddRh6jlViwjZQShb08lAbyAK4qpvhCd=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczNd0U-3750Bh1d33S6ERLMFxb-KhZl17VHgGw8vhUd3Pb4k1ruk-sMUc5o691kkyj4zA4XESiInWPa_8JdDSU5tsncR_VodQiMtkp0PAhf2jG6cjzu-VlJFL1aS-7JhDKSglXVdyHXtw0z-__V1G8mA=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczNbjUhLKwekBb25w-aJHgj76I0T5lVsdK7VsYoktcjgVQAo_1WwdHuSiWSVoJKg0i5JQQZEJa3eNASmzVpJFj3Qvqn0WPb3LYuXlewHD3VcylTMkoD2_pKIATND5WyX8Ub2msbLLjlO2H7ordVY1cuM=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczMU_AG2EfKgruRyCAQIVTUWQhWKXtt_BVWsaPCBHhOlKnnlIKKsOJ8sOXZ5i7ZbosNhOnWgfeWlT4T1r7OcZdTGZs5L1_PVGO7TbNFqGTwhsRrrFvcAgvAMcsOhh3L_yN-9SGJVTJ27-x5QLyBS829W=w1920-h1080"

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