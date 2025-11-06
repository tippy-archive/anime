var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMjCFfw3dHLjfmcEpv82cYwwEf-42BGTX4o8hS1quwHtNbdXFFuXj8rB2NF91R02o_Oz6BnvZ-UxFZwFPkVNkKPimDl9DDP8S09earXsywhQupB6no_TrbMViLdexC9nrH0WIO2wwxRiYP-oMQUvTk1=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNBmqboGI98QQvVW4jrrYzL7C96oONLJTXAgLDPmHEyQumPJUlYG6PPyvApnkhYVA83DLwbZbx5HTwCQmv3mBBjk2hHErEz5Z81c8vDQJIZz85Gn96vaSE844RMt-fEBP2evjb5ep-9jwANTDMX-s7s=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMcYIb6ypBuK3wo-L0_0uWRDY0Rm128_Z4gFC8fqeZhWFN1Idc407HMuTeqtb-f3TaWvyO0QRdaUsh-djkuG95IU113DgrQ6iX6pJEcKPuAgwV3NxRVvDtdrX0Y6uxCw1fYqRkT4eCoIC20-RPCs6AI=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPVu3-OaB8Xjhh9kKeIXFJn_aHJxacOir2LiKAerUl-LQcQpQrveHMtJYXdkNIQpqg9g7r6K7dPny-UPkpFiYNcwMx_VtSyYfIWGUJBw5nh66JESyyEZA42ClQDjYj66kaeDyBh5xobOd-78zH26_4s=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczN1iSrZBCibZMzgDDcMqly_TfrfmVPLK6p8CiRV4oM0C_sNx4RdypyJnEUf473zYttroYuaXF8XWLc82qmLy664AHBhmnwTM4glM-pUmkFWCP8-DIBB0bLWlcPq6S0gxlsLcEGrfT0ukFO8OLmQg4nl=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOFBHpz4YOits15iUbqPTtkAozTAR23mQebR7tBSdFcM0SRbWERUt6ijG3RSLc3cB7Bu3lcTyYgUx6yAidyntWnLR6-3zGoRvQ-uBXE4mR7HaXmnm06JnbwKAHOkk6WDy2z_Cu2vWPuOwEtIc1IhnB0=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPCIxyj9uKkzFutJ60HfHXaWVg1F8vEzaA-bRI1FwCPVT61eYwiYoke-HYycHcpJ31c-pp_BqbqAQ4chz26yg9zfJEvkWceiOy5tamoD_2t2jhQrBVmg8lFWvV4IdsprwwlvwkeLQ3CCWrUCDN_Inq6=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPaGwkahf_pWhTo7_hpyIE4el1s0Uz4dIwig0HE60TuFrptS-2vZ-Zu-Q9QcitN_-Jsv12BxknJOb3J-3pMtcGdutAuIrR0YFtsU4iO9X1F2otw9VkmKrLunxulCDS9yaNgP-34L1K7aoumWKCCRcAt=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczN4ImEk2gUSaXxgYrP5OGAZCULP_1B6bcHtkYmASWFvLR69HZ2idUwNfHTRC1lSngJnepFvT3uSVD-WOXL-DepNpuLq1KRgFRWPpPv2rYQ2gEfYVWlZJ34kJIpFm-hITdb3ghf4EQn8e8bJnhxznzvs=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPMsWgu8sKbfe5kWeFQosmGTwnnyfKvFqpkm0cnIpgc9y2yBib6piftR5XvMOyyX3_idRIlUO4I3-TLEfsLfNSoaTU0Kjfu5ewTf7EtE4ne8AF_SSgQmYEQgdvvdaoc55JVJ3Z1hX3E3aD1qedQzSbA=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOkH1JGvE1_ch3Erx6Km6eEjAe7nJmx-mtgKHiyS0E0Zv8VresjY67CWmCv3ru0s6KnM2xz88mgHIHlp7yCRZXYIpQYkFkV7lDvQpLfTbxWoBZeO2yDeqaoMizM_Do85F9n_VHG1FGPIQo0kV4Vg51j=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczM0BJjGyi_72Tupu60wsptC_OXxXbgQwv8n6DaTUL4y21mNrzEjSlTuQwyMTT9At8apEty-EF83ovnSzd88NzwYoqJkJ93O04kLDteVaLjI99k4b5R4nn87T3u8xSKyvZbtD-JCcu0qPbo5iX3B3lQs=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNkILSXK7uYzXUj34Y0TAzi2Q0L8ZtlNogdDrh_ieAOU_X1g0F3u6UpV1gDvuq_oVEh7YR0YSL-ejfFM7pterFvgOIONDsEFrRpC6DQMb83McAJvD7fHJ2HwUtG9PuucIWeKB-bEF3586OPy-BhaWvm=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMwUYqsLSZof_eorJp9C5qUMb-6d-OKH4pyByV3Fqw27n33Az5c7QG3S7h1obNA--nhUcNGoDaeD4_UjO7EkNH-olDe25C8UcRL7Y8utM_3UL-LOh8xksArvHKSN0uRKvK0j2a9PD1iBz0V9qfeeZuA=w1920-h1080"

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