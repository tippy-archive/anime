var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczO2nmwPs0vZqJPWRQw0MmdpNLuHJUdjkXjfOuj3lvw01WPcJqiHE87ol_dUpYD_HSIoOzo3594WGSBFtuLaVq2iKHQ1vIVZzPYr8U3i4PtWOv438vp23ZvDvzf99XBH613_rCLQFHKwLcBI88MAa3_O=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMeu3t57GMOW_mf7UJuWCQhZuKGNNriHL-bUWeSllbsh1bOoJfwzkdLqj692Xc1rETcGMNM_klDIJQBA1dJK0Ufkp9lWcewII3SXQOq1lkAh3iEMVHDxFy1OnMob_30aWPfFwbuq_dzLwxGkh0XLFuL=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczODQgcfBOGlpjkXqbKAJGmYPp8U4-ze4XrhYgzcEcsf9YNL9tFiDsEBRi44JoU631GOlCPFIVMrtAFXJ-FG5WAPhChGOxc-Jlh-CVhHNUzJs0ilZHx6DzumXnqjcGq2IH_8gxEkiIwDBRA-wtJ1mOHz=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOHJVP2QtM7IMEBBynhioumKaIziUakIJGgmRKte9w0cFwPi7UMlH70Lv-m3VLH_agKSdg3ci0i5DyMu0LJx3fhpVMYQIR2JLFkIUAy8nmtH3hLW-hB1oc7ZZ_yD3ePVkl4RRVbis_H69yX5LKsdimi=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNkjrXcIIOKF83YpfTe9oeMksG1C9sD3RfkNZs2iQ84Qf49OoXFvqCEIWVpADZhxHMSnVzMze1h2oaExQiTp6krkUc0oS-dvoeeCWg1Oa2jtGCWgW0eP-ZXZ_MfPay4P18lA4ET9I6bkc25VjIcmj46=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPt1o5J_U3OnqORs_kJJE0znYz8CZxa7QxpZQat3hPIwfYh-4z6v3RWB_imhgu6M_3bhAs7qVvGvn4c07YMhqI4vvvstzM-84aZmKfELepU7btWDHrBp3jfp-lzmxFb35yBozxCZFSOp1tJUMn3oJY2=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczM_YPFOqmjo-OkYvIH-U7GIi6w7IilHTwncFiLfqxOw6hGkkXlNUW6xaZMlVExSbKQPNzPLqeVbjdb2uQ5fqmzCcH37IiCDWAvmzXpFfc5fprXIupgG1EeFxbgMe8HnolSMc2tXvqK7Wq-QEEgOhBmV=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPtslzUd1lNW3w1inBOLBvmmI_4LjOVdoB-lByOp4UcGK4VuKkzMQyqCkaN_jNB3PMIFGikUIvmlZWGipRYn313BVV5Ox3WDhA2u1y9i-xb0R4rSZATkqpXOda0bDvSC-XX-kjm4SiTVcQicr8dp8hW=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNwKq80fY5A8n7s6eaNfXqFxoOX13iDXpF9ITtgajrvhwSp2awDXCnTzohyWWTorbMIWo3I6WzkJICyZp7K2AHGIZPHQRFhN_PBaJeq8KpB1GRgfQ3ifFmxrliZhJchXVqhxRQHiuATCkwndXGNGe2K=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczO4VAlgwYbvZskEmb_uBggm-Md4RlD1zeIV0jPCGdH5IloJOyyZtTolrg7vQctGGBgw9iE_xsmeLThs5lrxPjLdqE1c80uf5B9tJygtiHgLJklwV_t-TxQvdAZL7BivbS7oDTe4PpsVs9NgJ4ESaFf9=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOhU6P-qBLVHr6NtwOUwSBCQqq86Z2DU9smUeEcIrCxOoa_QkAe4cxwNomg013dTnCecgwvVFttJUbynRpT9UOUtudNTUpWk3aYMI80Tf8IV3rMjD21OthoLP5xgf-qIQedXewZqqOWnnMjRJmUB03L=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczN6uZhhtMq7wpZSXoxUWpQXabIs0u_EfO4w57HpvCLiuKOoVENGe62JNrFICIsMV52bEH39MLWt84Ap3jOkgHKRI1aWLFFEOpALk7sJcZP0qFhMvTwcieZYsl4vpVMJnS2NfTN9NwY1pbJZ1drIuPNH=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNKBSciPQyLIlY5x2Q2P_DnWRSkLaIm5DwVBHBnad1DztyN6HEaDKLP89SIQQqXcyLagisuzKRNcyc8rvv8MiEBy2If0FPai3PQNIsFtIdSU481qcWAitIxWP1YJfW0yEVZ7yKpy_-aLj61yZDHelFo=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOYeHFjGYCUdNLsoT-SK_XVgrlzvoqdvHXycyssFfFSvWRofmqk5acKraioehle2Yt84dB4FMmh7HJfbQd0TMXlnzC6vi70R5YuYgXOvYb9TknlDsHt9MMPq6G-9fATazcmyqetuts7AG0V_JwsSO4t=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczO2VjM2f27dhgCt969kW1VnRDVhUKp6vcBq2DNkY3SY3k3Oko49nSkz8D4e5rZqszWeufx3j5Pg7O_mIA78DESUC1rTGKi-PRSnf6ZHdUDIH7T6jOLIwOwsdl5Am3pkg3kkS7Yumf4nboYfAy5Edtmo=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPNMY0drIqfPhV5IjNkreDw3eSV0p3sqwbzCOhVJdNUbuObr_ZFvP867RPdUBwHtC1hyYpb9cRCnnHzE88wfT6cni8taS0cXCvmh4j0POh07To1GDePI96fzoILt6CoK3u9zU2sBB4uCWi-8R8zLl_J=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczNGt2t5hCTRKya1qe-A-6blB1vPJMj5ohBXJBLtQTkDaaDqkeG0SfrnC8vrUBNeB-SwjD8SlwfHqZVraGfP-NxQHF-tUyvUWGD2dUXmxHgD_ogVhN9fn9HT7a466pZQeYcyRz4P_pJHGnXegOmbRef6=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczNkddqiSMEIlwZrNOpazLXCYYCp1RnakY69Up8K3mz6RXxVfxQeipwdbEAHLCauir_Nn3bUyjRPwnC86xc8iSxQx3tSLQtQZG2qkAam5EGD5z4yoEQzwOKNFsaLosRol_5GI0SF4dx0gEb8ETrJ8vQS=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczOFYBnapNPkdsprfKfRKhfrmrLpSi7C-bKH0eViBArJ4hs6vJt3bWNbih_TPbJin8S6J24ddjGzarEE54hVNdNSy9oOHI5iSOyrbXbKuIhM_X9HcnwOPdX6NJHXTWDkZGZq0Tcjgz20l2F8-mqJQ7VZ=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczNAP6d-HbyctjqzCJaSomh7u2VMxtiO9C7cUx7SSNjbqizm74O2hf3tB3i0anqZAv8pU8D44q267IblAPpiY3PPcp0lPKjh6JtlCM9zbsTdbXgNHEos2IznyrcMnNSocBptW9ElTXeDs9leqWmFqFem=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczNQOyS7aWXK99sqRocWH7MM1bJmya3PMBKiOFfNEBRSkJUDahlGksEI8OkQ36ivhFnhYvnJmWEatptEGiiKTTIEaSVxNJSniWSRdBHPrmuCkPm6ygn571RbdU048ySA6St7dd0_9XxgkXxHk8RwEnEB=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczNzvBRtomzP0QGoHQb0DvEECLZwjDMwcA3zMm3mulz6PK-upjSA4f937eeH9nOnVBhpbOkyYbP1aWtpfH0LRRzzTgedGY49i6Ev-r9QDiS-jOw1PAE4Vq7IQh9UBDoS4aeIXxRD4fcz5kH8-lttrM1i=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczNbWDM--sH1XhX5wWKM3w8wboE8eYQWLcrI8HR0YWzIHx_LbwP2myEQmaGP18TgLXCpkU09wloD_mPohX_rAzcGgauayYC-0XDUTYsZrS49NoahSxYzoEETs4WuDhYuowdGTRkpy6o5JwtyESI0NS-f=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczOSXxY_qThah2P6y3k6DgQ1lET4rsnQA31-HmP3bVKlRi2fEt2zTFVH0p20vQ-xqa0dNfcey-WX-toaa43aklVT_RMq8fi30j9l2cShIOTm_d_n7E0aIT_qhWWVPoFEkOPBanr1hBUAPfJ-3GaVAuzK=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczOO3Ww6o281t9saHJ0PfHMJlwbvv4tqqceUgz_2FiK14p5lPr0Yg1Ueerunk8dPOaU10bo564vpkNUs92eKAh1PADiuLla1RRYvNivL-C4EEZ-4jscghsXcMmbhUi8cfC4QqFl0R34vEFnH3ePKWgLz=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczOt3rg9SML30-QG-QzRpCRlh3uboC9A0bfeKIDjpfTigaYTtvilUN6rJ4-2yKBNwsYlfT0biyFZS8IUf-pR5apdUHuIeEHyhzsCisTPwzYNSlPmtHFlX6ckmKiWiBif9OSbK-eqRivm2B_YZvxWE1hI=w1920-h1080"

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