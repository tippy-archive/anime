var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPGf2VBGsF3aFCCRRMeWoA4wvah7O3RtgIE_ZxdJvj3RcJn5oMYogYJwgQt5mqW9g7aWB7rF0nTpliP16xnrg5zDCM9cDoZ_4yyc8p7LRJqtwsZFN2lbZGfaVsQEV_Q_jJOGWNp19ooW9jgxHezl2Fu=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPyQpI3iG0h97V1ih0CnNH86FFlJnANbyZWwirsPHqUnY1BkcPfyaIjf18dfXu-MDuPRdDx8y9F02PFPysNphZWSqFAKOMi9mcj6efGeeFANP3sAno_Tr3DuFXopByyFvQ8vm2YZYiObQUylW1ERxOL=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPcpZIRr4WaGSv_Zlq-14RjGPw3B-2QmPjkiuo-WTBeOkbOoSd5r7hjpz3mABQI4nEnmydipcN_lq6oEgdDxzoPGbszd2w5GNipSF0QWjn5ONz1ur1MhOrUnKMxWRr4zHTHm25EHRgQliI86oulqUsH=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNMnZ_lDAxrfPY-vcMwYWeAl9R-JSyR7JXcRTCl48QkX5rY2z9Rydwc2SaK6YcscdQrvdg1wXjpo0VNzQ-xRGek0bQhFA7u_CEbZ4pKtNOVpII4sCLlOh-WQCZhswJ8V5-naWEOkl848oqMXirn0g7X=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNOQ_QypcsFiOpCfAHoSBVF4GE0Mz2hpKLBjPvY94VPv9JmHzB3215_tCmtFV6DsWqOVd21NV2i4eSG7x3FuobNz9kWCkOy8oVLkD6CveoEecfpqQ2fbJ68nglK15BBzrNEtSZ0K8gm09usbt445yKf=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNBEEQl80nj7YjcHKKqndJsn3TiUURYJA0W_TEGHU3rCigAV1twc5_HHdk1Dt88CTR-fa31VGil5_M_x0rbGQAOUabm07G1ktk5aewzCdmAW7IOEQ-PqqlGeGGvCcjItQGDr8zJ8Dfo0hAiAJmHbuRT=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPOTNiBxByY7rwiw18FmAulD93bQ5I-GSVj6Vtles6iUOm1g5cYpGM8nFMXr2Ut1Wx-rPZjZ9uD89wpanlsIMlVEgkjEF-e16vVFeI1k0aPM98FJauJS3lq32lFxsquP75cfYorZX1Y4KCoRXhA3IFw=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPRp_vRhOe6R4TRSp-Fz3ExXHgodPLAiBhL9k6UZBw4_Ezl5N571ah_Dh5KaRs8Gs3A_E2mvutDKtJ9Ig4dVrSNfV1ujhxZgFDe4c5kK-uUOcIjESoTqV85D9XELJaYoRc11vwjqDEBeozSi0exV_Yk=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOQloV_QIf9hH5LNgJgX-nVdY6o5EWaCiqOkPVTt6KtQKUDc8hR0z5VCTDtxf-_YN5a33TDU8adPB0aWTPpe6-Dt9mRQzcZ46eJZzqcMN9P1wrqsTrncy2Cpdrk_9l-J0ixYSkaFKyKtFO8maEnmyXo=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczN4qjSQAKiaj3dqzoFpNmSbGwCiWzeHDY50YeBjKn9DQhIpDW07exAizP3mSfDkxB0CbOmHfUJ_ubJMAWJStmo3sXWA-3cpybytUUrmcLAXS5nausIOZhTGme4EEH9ipXFrkyDtXNPavmIuwXfRoG4N=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPAmSgwG-2q1dSRG-3Q1H474dEao2PKQIhoXg-xHZBZ3v8BUKVYfbxem5mm4uw1RMDdrVRqIMUMNXBQX95B1PFmTXITPk2kj87Vgpre6-qjbw0UzaVHE6fuVpCr6MkewuH05_tjDKkG3czD0Xqhz2EE=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczM8tfREVCjcFeDSxnUFI_csz8ZCh2eyYb6ZBd4VwuaTah4h3jOHaSHbPIhHsYJXhOUnZ4tjZqhrHSOHFhUxo9a_W3O6gWprMUVGzV_1DSa47lbokPJ7H8FOWH-4Vw29o3EK3xJfx_tMuFcLmFeNPNAz=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPsE7W5JbgtmhTXD-tIj0tby5ZUftYauv47KJdDxtDBmhLbbDiy8C0yU73r5LTzNbdGF1oAMvlfFCtCxRVbt97Mj2INWGu5Pmsw6qwIWSl67nXm8NiynYM_LQxuaFdZLVr_yDkarG_Qo4X2MHzMeja3=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczO0VzHxAfXC5aP8_9vgNa9nnkHmbky0BWI84u4q0RXua6BP7-AfyW-HULkJ0WavuQQbraNV7wyt6Omz2EnuqU93DoK0a7S9_OlIENsR9prRe7tHSrP6CbIvEeDBH-P8rptJQESkNFphBsgdzo-QDSbZ=w1920-h1080"

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