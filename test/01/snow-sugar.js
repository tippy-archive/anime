var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOVZHJy1UtczNXxPxk87xPxrP2E83v330awTYpH1k9Wc51Kk3X2YpLK00ELSiWc1_BRPSj2a4r0dJOsvrCBMUdLYFcqxDSuCvBFtYQ7-JaJKWvJQwcdQ-eEzfmKWx8fIcfQPLFm3YUC-vf-nksdYFAM=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNj4vv7ku5kqtyaY4etv6fhpBXYhvwazo0_Mnvn5bTAzBPWVki55sloK305KteEYHxi4M4qA2vrCl8og-qUOz_AxJ6P-MsqrIcRRrmezjNfhXbPItpWdYdvSM0juvH1nai43dABb7lC0dQAqr2uUdNO=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOQU8qp864xe1BSMYU2FppTGs7Eh_gVfjeFQUjIsWn116Hn6jm5sddc-sIylDItf7lU-GjACFrQo9ytDk3pfuGTTA9uMP57ESeEAeS_8y7b1Wt_IofLV69lyzfp9UrkD9mvUGrrZi_Y7kvXX3fW0yRr=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPc1yl21dstmtEtjcVt_i4uLlg-K4K6_Ll1QaIUb2Cm--7iVcZfYaOQARP4G_hs8AvDq9z4qz038KGoHQiZ_09_HSYZ4gm5j2kZPWc5fEr8CGgEwhR4oydvDwbGBMsaemR0eX_HCzcIcRu9tp5_Gj_Z=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPmYvnJV8qFUtQpzL3IpNq0YwDVP-is9_9P-jMyk_8OTnwiYTOTpc8n0j3fQ39U8r1q867T8u5i51ICXhQ6TajRVPRf75YnFrGkzJRptckXIXtNkrsJZMI__NTZBB_Zm0Vi5B8-sxJqbfDZXu1aN8WT=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOq8-MTuEIqLhF_T-MZHX4RAzb76tmLh_cjjjOzvkL6DE8iuYt73ZXN1g6VLIhxcjRPjYT93BdhDmV83Mt5vmDImmQheA0MxrhYuOMxj6UeXxyi-aaqu2ShsoGDJkl-hp-aTU00Db8EhM9WQ8EWLYnu=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOFW6AE4lPay_fBNf0LNBvAV5bDOxaDlKHMAtmBJ8OEZcQjA97XE2DvOoR6jYAjaPmtVSMOS3JGMeQDCuGaWzFMDM41qYCdIrw47m7CEKvmvpC87ArHj4NqvsBp8GcvQnm3KokFmORwJphGClxShnOq=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNbumdlHqbI02ULWvxZubS134jnWlusuONqA95FE6Jnmtne7xxkL8U7RZcvF7ymTaNQo7gThxNP6d0AO9omFyyp_rfEP5RVGaVNQUk8VKxc0uaOVjQyTIsMcW6VWQ6xEBpAwGBDNCHqRTV7PUIkiZ0m=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMvpCRTg8kanj0SjXugQuLaBXwqsm0JBuO_hyXqmaEXRVxWjhpwdOiW3g500rBYIX1cbZCPYOWZ8_bnHDQut11RjD-Hn0H4IGHQQ8fYP-Fr2n4PlZyBXjjIveP-289ik-TVAI06A5EFAHtu3gh5XEMV=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPlgFBuhxesWEOADLLp3I1yFbwITFgArVSgJK3rpv2s1gBX0_Q_3RQDworAOL5Vn4mk7Thuv19g1eLhQ0ogIkobonXEIpNX9yTmKfVechqBXklXdV4nKS_OO8KMzF80ykDCWFd1qCUdaOtPJn5b6Dit=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPZWKmXaY9uKM_zdLAG_8Bm_losrTveqRlKVFOiYH2dGZE405sfgj1a7q8OUGB1B7JBFL3xdkBmbRaEfUpLTD7GwNoS0euQUQDEVuteRaQKNF6H5cX5rW_13RHSpcX9U5PkGysJBRIf9Ln3CImJrpIM=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMDiCH9-94z884vihvN9aIgs45kSKCtZpQKuA2pVZZ1PBQhtsTqnUEdIcKS9unYGeUpxaPlNFu95jkwktxL7QPOH7qennXikaJ8QkQBZq7juO9VZwaf5-rej43HCE1eZzibxD9ypYuY5cgcMAPHrJk9=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOn3fZR3JtC1OpjBfLFdFTAtC8GyOfO3kuN3nNU9bfpliP-PlZhLRwoTFgIUSInBAHJxpWmdt4oDQFKWUJiooXLniNgB0VSREJCQP-7QiT-KejpOghd8eOIySwg4JS7Hyh7_O1lzcySRYJGmhns-E8B=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNL89Pk_ogP56Gjq2kcpzUO3R2eqQUe-2HktFvX1VWB3NGH4IsTU8wKb93AD3Md5VqkBW4XnfbCCSjnkAK_NSOkdrUZYkWwlX07zaXA1kqEixaUFeSWddLfrPHMaPgpUCOs8kYzjBtZDZgILdUoqhKu=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPy0AV5PkGfXuHf43GzoFB7k5zF0TkabQXp-YLjltJ_bHySOlsR65OTb1d3-uYn5liScaGUb6hXLX9OAneNxfTwxKriUA5h0M3GCseRqcAcKt73O6U4fkAWZUaOKe9s44fnOh3_j1FBX2TnbjOk5jIT=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOpTVnya5g0hCwgB4dyN9Jr7TLegBTXmJYdCnb29ZXEmymlj-_qux9j_gPiNxM_J4FMiwTjnvaYYeGG-gUHWMBCu2w4Lhd5U62lHHH7rx_jBxQIXdM3PHgZFQ5Xrgpcav04RGd0LXNTSX0NdCwqJFvx=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczPDVaiwx5if5jIo1TEEr-RDseOQOEu6nCHTpYmbJZyUenk1G2_O-F5xjTvBFwBnHx7l-iEVim3pcIb2xN3miMMi5mkDcJoTl4vQ78v6N-2iKqc8iEOi6cDPtZrv3GiY2cGPsa459fMDbgXN9Tc5mCqb=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOyQLbAKHSejLIaGo87M8PnVCvdjh8Jzt3euH1AB4WnJepmdI22tKjv1JJtQV8-dcyzk4YWLOJ9qxB6BhTDE4HPULfn95F7b61DquDIlEzRlYL4b5wXERPZuYrxHd6kWzmw-v5HkhoRoNApOEsQeUIT=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczM2oXMB8K_KgkbSjQhnc03urdVxU4IzvNVMjNnujVsSRWnJ0-DoBIUYUUSZqaSuOAf44j3gUI2CAdSllcmdfH3KoGYDppOo4JgfmnoIY8dVD1b79c0_k8Bj0ODEeVfm9XdJ4xCxVQSCQofOajDcozS5=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczMZw-1ufEuBTdtakLggQdKSecX3QeFRUiGgbg29Vt0DJrHna8l2XeQrPufzxs8-s8J2ZkP7jzJScH-iajfSeGe8g2jizNufEGXSBwsyiIet42Uj_xt9UIaXa824B24eYk1NxCD-ICS6CwjhSRBbd7mC=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczNGDgfLHoi5jXQKxmI4IaOEZuOlRImssmineGWFrVNIC1_78txO8iLBRRv3yf3u7BrZv2C3V_rLRCsxRhZKNfV4RF8BiwbCxnGzxtzdeGknp1q4X5IDYXPR84dQC4NHr5R_9gpoKVq3WrTNQZRmGljZ=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczMZZObfMpsQIeTIVdx2MgRYdUE5HvpF8c2s-k0KZ2M1ww4WuQb_hKNQ-aITKQoPUirMmhFvG44U9wDblyaQ4UBBIgaqhSPH4pn00zQbFvWmdss-q8CHZdHDC4EuxVfS8fwFjiHNGi4vGhY15uQijuDC=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczOyiSPK23Hjio2ra5PwHb-HJIOz5L9qQvtlnuZmjAfqRnRdQsjLQPi-gPmY7Zc6uW3CTsaWtZZrRCR6VIUIKrBPZdItBDqH0wxTVpPFHME0YpWbEYuAQwUaCGoEAIXyJH5EotQq7SN771_gCTgicTjS=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczNiQ6lxJQqGjAhWXdOYvTZpk0VEb7xze9LrXpvxilPANUzI-NrLLDBJV1eCmaYlnKdgxTDmSnPmGOzZWPZvaV5iUqQuO7gpNXuh9--V5uk2miZsmXL5_pPDiYaXVMyWN71p1yO0wTON5c10Uzlk2pdd=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczNHan7Pcu4V9qUZqmo7ZnlX0JN-A9tb1Is_lUmtVGoBOnnge9vHwOOhSdYCj1CO_z2UIkejOLEZ_3d5kvYYq6OE4jlajnV-kHno5le5v4HPCmT0Rx6SfOXTnAHYdAcCKEU7Uec8c52N_gGiupOTilIA=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczMCprZBRzRfbHo5VzYdtaD_UFGvqZloz6MjclGvkNI7PASrhrnHrt-2OYScmpSbGvdUiVdm91FnXRLYld9utIpZZf6HtsgST5HrLb0A69uJ9lRuyRvU7nRFBn77fPiJYKvsde5sRfaDj0_Ym-gvIP4a=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczNLUbBCoWJWPHejhlsZuGR-LpwJWNBnNkcB54zpFSHa1viijTEj3FvnZS8LRkSls3XQg4TOeYbjMPkjKQHNYKymwg9RHNWX2jfzOzR2Cvbmfd5MkhdFa3MaEWJPkabMwIzIeMDHSM_2jvS31U9InVvQ=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczOWaZqebVqYYjKlG--_iO-nJQCWpHMsHnOAihczhRWul6uDyqrRQVAQXKYPBYyhVTDlw2GLSbGw1HY_vQ1WdeDU03qp1i0K7wfWAe_wde8Pe_RPvWPq9kzUfYKPlgOE4a-DHkXVc-gneSdp_DR6JeWy=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczPok9YTxEQrQk29AnqvjxLuu6dY9qMnU9xU62r25d4uiCv3-iIUKYh12gv0EgqF9jbFkpH2io2D7o7XUpr5o-DzfMo7MvoDtjk6vvgyrIpW1jIfwdNKjzji_royNoOER5fVlQIbwTD26ZID9s8ohsE3=w1920-h1080"

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