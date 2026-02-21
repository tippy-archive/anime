var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczM7cdDIFfjBc7DAgYx9hyIwxO-lCVbEu7bsY0y3uZsdRmyoPjNsbIlVFzKumVEvXnupH3-fXGU0_QrXT7OEMVxWyaP8WrhdiuWTe32v0yUFN5pAnGwjwoe9_RdB-NTv1AejVQEpJgyCgaJHIXYiycB-=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMG9_e7QBhUFDOes0AAP9NQhdFIcz6AkAm13yG01fnn-o767IwGHSgnk66oYiOB9KkzTUWAWcOuUgWvN9Hm5PHKyN56CVDhVM05fuva1ZjALw6DgahFp107FE385V6AWwvSUEO0cHevYPjfpZx-cic6=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOkZuDproiJQbLfT5OSGpfpfKENqJzT1gWSEzxjFyVm9esveN9-Ga2XVdR-t25OVeim9eVQuCKZZJNkQhlqOd6IUJqL0FYeMrIBUFdlCpOtO9Ijk6srl3hKqJxSvtN7Qb3SDTH1SGEOeEYlutfCCQL0=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOOk4E22AdCoZY65no1bH6qpjNUYrtuK-j9kmBMZHv89ARGzzoZm5aIMPdfsJnGrRrc_yT1H0lNdO4dcUUuLzJ5WWA9wO4OI922UPUEHk0v3BKLKTcvMSOqSS7VUnBsB8vA2EofyMWwC0yJ7gcCsoA2=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczO77djkDQzGe_52sQrNukLulcrcb-ibLBMIGWzl5i-ZjPn8GEQ12WIqCH07SLqZcVZDwExLTFIKqU4wa9XUcWF53CvGzUliWuc4MV9wvFByOcDcVs9PspYat-rEpAZFBaIuRXRvsdjQrmdMvyeINfbY=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczM5Q7G1ECOUS71Vi5itJYHH1NK1xvTWvXVSUt_y87oeBvkRzylAieSw1Do_qyNI6rfGngF5gr2EDeXpPJGANPL3avdLywVGOuCWO1QrqJBfcHbq20kgwTPptFULhXGiaGpJ9KdkXChvrWG4rvgTQtqm=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMqyPCL5Vt1S6YLJgMcgu6Yr4_xXHUhBIgn16GXNSNxiHRjH_7WJQItwUVsJfpyQn5DJIQX1sfDiZgbwB1TAieU6ewnLyqq0D4y2xwNScMTYI7PJaRhVpqoFoRzeCWo9hZCKCPDX7uD9GSLyI-PYIZd=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPqitobZaWPj6WqotV5pLEg1oexMIlWdkEeics7sL_2yaS9mRgahcnYhkslgqdUa_PAbArj8EuaYVTCuW3ZDh3XCUt-WArynTgVdBU-1TT6bjlzZZUnvygv88PTVpoo59HcUtNXgnnjDMEESmYraDT9=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPt080Pdw3dZgL0YrHeV77luMCVEu4LHUWqqdszCoN6ePcRRYqWCZXx5ViHfggFH6Esre7pvc7QfHYE9eCTkSxfTl7aHWMbxg4Dqp9XRzUIbwhd6GCbM6v3uQgovQWi7XjQmqpH6tpWpKuxcPN-lIfP=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczP9elF451PvaA5h0T-K8P126Vl8cbWXE2go8yP7CBWE3FW7YhqZx2_GYlPq9wN1YNKCXfygpkSTnsbcbS0y4RX1HfMb-eWBPCse7cDijAk1LXruZjUSHPciLujOHw-k5CRGSUDhd3BgOq0ysBxg2SvX=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMrW6ddhrplRH7M6weof2ILgNKn6zxxm1p_m5_SMK2kARnJ2QL5mBYUxFiOuM45GMzp1VWzsWWf3Jc4MA9PKjB6V0GA9hzoZKOrbp4o3JdrPRjWaKoB-A3FjQ0S83f7KTN8EMB6qC7NPqTsGQz8mU8H=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMHKT89azUMzdAhKSkCSkOkbsI5cU39WyA_rCKc0tS1Jc8ha1LTDNTHbgluqM95d1MPTx28HQDs6bZTgkTEnoBLv2r751JbNGUTquZyWl2eEz0bPYnAOBf1UoweJXlc-X-nlHJ4K6uZYud7IPCGB0Xq=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNuve3YSF_7Gnph1Kvwk4dLg5BTJr2QlCTmemjk3gCyatR38X5UEzHEJU1-I9iR6ER0CLSSMVSC4ZjATOlu7aqNXMW1A-IOu8mUg9QuKjwy67gxEsXhPu8TgKNDJp0aijc0NhGryXEkjw49AGDDGacX=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMLS2iwK_fC_ZbTIKLAruXSX9LtL8byVsYgz3W4isLSrT5YeaFTBeb6MZiMABQU21O2z_jZIMfrF2F5GIg-ZaKdQnVLxs3IKxSCPz8M4_UKYrsfr-V9BTmtk9iegU6M700E7tJOXkjq9NsLbp7Pu1tV=w1920-h1080"

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