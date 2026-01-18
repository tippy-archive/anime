var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczM4oczmL1yMh7KNvN0wLEz-lNcsVFINHHULNpr8TrVhslY86-fv8BlMKkv95FddwtbQBKS4_o7IOxTvdAYiWC1eL5lvqpeKSdkDFRWz5NWXQVKoE2ovlbKPyRSJucXybmmzTuB1KOGbI-tUFOqTqTal=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOqnEHbeVhuLw8Ct93NaadTePW98m35daw25O-zSxAVyU7DVihjePKugZoPm39HkXEVq7MZwm3ahDwM6nswfziyzmUDiEUMkkx_-hiANl_MPp6A_TT7U_acXGvJYkpv-orO7CafnITQWpdD6tqozJoV=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczN-pMelcI_g2F4hgYQkjcUZ4XFhYzR9--jQyt4w1k68PxtxAkaAoiBOl1uBsBByGY_VbOvNTkiDyOH-ylmy7wk05Gv1C0ZXTdg2ANelLt-J_YAE8eBwNH-Rh2IIf0ukayqoE5QmLO-9fQQFk1NVX1c7=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNRmpf9bREdApiDqEBkQAg-og1uLncXd6asO8GPbMMbPZeDPnRhuaML6TFhEtjFMaG_8mZSUmIvqUdhyXzFPJE463-QjsYqihHi767aDJs5CEDcdbiuz2UaV_c6hNjny80veKDJrnKSw0fX_tiwTYMV=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNKWtczHbH1o4qTnDN9ZCwp6QEfXxFigTwptPraghzmOOu4sp6JiyXxhkKXUIO-jejUfJ0dhMroZZuJtCZ9J9n0zqIW10En49V-gTVNHrTUarCntLbeQPtsEhstxzNvTyO6cy0a9-DnnwCxhcQbVziB=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczO4TL0r-BVEN3JsDtIpa05qHYUVFX20BGSQYSlxEerCMoqplXNOS4Wr8Bj0frTmrb4_5EN6vBySlBq91oQELierrNeBUpZoXpfnEflZt-P1EZxiYXwQp0PphXn68AzfmKzH-UUwHhhSZ53ySTGPWrdU=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPpWRRWsMOnZump3Qr_8t0habTOYfJnEwzshrsQITlNH-03XTQJZjILcNT857o0HL1N87Nj5w82mFOdjkLmlHEno06NmLKIq8naYf_8t4IqALKKP0TEjcQsTmtHVSG6rgQ9TJpKlO8wlCqf17hnXqxR=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPWnq29VQBkOOv5kxAgaGm_m4MoMD9bplvqGiqLOKCX1QBIaUeIFkI6jVd2_4wMlH4ivaqyT6_dTPcPP1P9-mFJbWuoXJPXdvfSX5fq5cMoq30DnKln3Ron-vm4HKveCph27yJHJn7rs6xUVPQ9W6j1=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMvSttD0-zwPtFcUaz3W9I1kDv4S22Szv92SpuoceKLDF-YgNT7bjvf5uBXBnpLRai76lxvBunT6pQLTQKgGc2OCqtd0FIjAqEfmhIEdF2twVtnfIMEU018JpcwxVNzE3OdHSWTY7MdK5hGV5zcya4V=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczP3XYukdoifr0DTVsD5nZCdyHZqkrqPBg5hE_RKUC8gpT8HwCuje_V-p0OqaCNpCxQkWgeSIVygsi24Ebeo01NwnswZglTmP7bpwb97IiWt2cuzgTMp4_JYCR1ClDnclh60lKwt3pYRLZhmVjLyho0R=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNarXENoUM5Vu6tqwE-N-NtLkyLb6YOFMqbChAZvNepvYn6cNOaInWU2_UPDh5W89gT8ejpycRbpTw5pbSCmKUnf7fBt4-IVd_sGRpajS-FqR2mFjtucdxotDvMGCqYyVbmbc6jsrGP2WLUrOj6GRWS=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOJi3jBoP6ooExgzZwu_HbJ0B6YKJKZCGG5_Pr8pPoVYH1IAKdQyeQaF1oyuxbXRj7zYO7f3amAVqGn5LhLJqMSmKTERTM8r16u4UfghxrvS2NgQRFpzSsgoDRLEjtKrjWYG3h-fAGnduQqpEcqpuQL=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOkloxwuyF_OXSwPEn_XVT-zE_RT8TztY3PJ9VHkWKykdl8HpxYNPQrTVHMBHdPPqggXJ8VPjM9jklnQZrKPfjZr9lPWC4nqlOUD8nqtfFpGvnrwgJJCL__BGxD1u3ozTaFjf5MksTTwiCVCMfgrboA=w1920-h1080"

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