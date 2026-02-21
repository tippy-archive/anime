var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOBagYWpWya9iz89Iyn7jPVlJtUScNnwH1eUENUv2_XWztIUsjv9GSJc84XH1DzuxqSZqGdFo6o8D0VdpSFNDSze-QB40GS2wfsrg40WutXmDdRnoln-p5f_bOd3jeEZrY9yJ71ibunoTGb9-CcZPKu=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOg1upGxOY5wtJqwaaXL7FIcJtpudCTilZMk4BLavOVJ58TLiVgIVgDfdS-dgVrb5MsiakMx6BBzGwaQATxUGWT-14Zb_g9-DJroD4zz45337c_D6jEd-oYqnyz2_619ZWO_XsV5Y6g57qntcSnhSJ7=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPrvEG68iX19QV7NI237kFXZ08i6093H573xNOLYzYrsXfOp2kLqdHPqII0rjYmrbvMxHns-rwSjLUyW8BksJvgM3BhH6Awa6zyany6I83OYgbUbQzW999SxqAJ9WDmgBX3C0RSVfyGZIgncRyfNJqy=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNOSUtnDHY1YVDR-GLAQidvPynF1KmhVbfRF8cOnIqQDnUbR5zsQ5Yqg1lPpK-wM-RZRNmCq8t_HnWgF2moZwVWvfhPafldj-EqJWgMr3aGrxzLzb9aCRTXAHrZGLaFUIiTX66MLvXsmFMzcBLbLuaZ=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOe-v0kEYustHIy6z3MPYURxO-Jr9vXGWY4aSfNkBUfNrO4Yu_HvPEkNzeiay6fsUJm2EF-d1fSeY8bQNfAQwCEzs_AKc1M7IZbOB4YPfJFIbDIjBRXCku_uOGsUt7mDwaI7sKYPs3UTvHlQCf9dByc=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNDDqeaeCqid-XI2rcGxp3Q2tV4VIp6erED-bDbJzp0DIovk6Cm7evZ0m0GQl8Hfir-prdWSih9nbkWomDTTlWjwV5Jjd_I6bxHF6CvhEfp9xKRGHmFZf7u_neze0S5xvjMJo6mbUqjoEd5seBlqDDX=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNW8BQ29GZ3QnRwT0H10K51wHXGo4RXoXUcpJVCfyW0qxvW2DzdYEQt92z8JKgnzSm9cLQ-6YrRliuy94N71IQ5stOYCtjkQ4VyQMIh9Q_G-EVEyEmBKAfqURkmIbLHNpTuaFvJFbEXJ0_03F_ysMU5=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOX5epiWWWox3OjHu-DwtH47qVKoI2zqoFZ58m5Q4r6Hh16FAni9ufXPJleyUv1rGZLqlAFvHk82vj6PLe1gDta5OSHsI_mhgyFuPZ1-h3g304260e0WmO5d_9TS42iMOoy3Nu_Q9o6ESwP-0wz6Rf1=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPyHrMNMcK3lsGn5h5UpqKyCA_CaneZOf9HbDbDUaHBkKJIZqhKXX9EPzCysCbrd0oqwp44iGbWCyXdJ1Zsrce5XnmLZH0X9K4O6Yl1jUJ2BAmdyXtpxvEVeXQNNAiiNVPar2BdCNedd0wrVDTtEIKA=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczM8pm_TVrnbddH6qoHX2ITbVsNGeH_2JDoCT7XKl9Z3D0187SWtl-63IgdJBfWGEDVFq_0O8LaY31-uf_BaX-v-XxxdX3Lg5Rh2wvl3psDAE1ZZ4nQpF4XAhSLaZwAjWDTFuwD3aiMUSmP6omuXbvH3=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNq-ENscUGCTk9EbuWz9-vscvyKEd1YicYLpp1f9rxRsyWlTO-DAjbSf8OvPQk8SSyV0JUS2Ukr3zAsX1V63-0QPQjXmq4fyndQAAM_i4sURv_sG-GbGwKOBQARz6Pu3uaGTXuuycbsJ9VNHAjeIJUF=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczM01H_791jbSIzTl2jj7rGAwOSXWu6nA-W0S3uEgmfbSeZ_JQUOIqsSODWCsB8EfZXlaBLjZWhfw2urZWlInn0TT9F_pIMfuDVqIZi3rB-INW2FYPqMTs-70-IA6AFDgT0ev6K1hSbKt7BziPcYljoc=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOQEOHUtcX-YkhA5Yjcb_zhPMgfXKutrboYb9zVhuPlLtUWOoSDv6mfHiqNTpcQQTX11Iijo9eBrOlajjqPRjCLzu4sUN6M8RVhNWIlLzOZrkIL7oYjSzU_XKS_GRKUQmNYVILRNWpgkNCE9PGjdHHf=w1920-h1080"

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