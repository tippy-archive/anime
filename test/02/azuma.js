var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPpn99wajpUbqKL0P0UOur0M_Ct2DIHjXmVWvCkDVgZMsnUOn9NEY1j5OdvvTTaDpNWT0BUc-BEeJfjx1dV2P7KGNC_57B_sgOveih1dWz-YQGqrdNW04fXA9RmjhAhoz2HtlfgiOly5WomxP5KPH0c=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMN9jaFBlUoraZGSbJAFoWalAM902M7boEpMM4itowYnhF2Hr7qrqbbsa15KxBmFMD83L-dWn2HHw397V_9ziFxzh0VwVBBYZWQo8hyIb-pj-SMS8T6p-dRu-W39oFf1NABR9RSiDqnE02FKe_AJp5C=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPGQvH2_dwx4cPq4onXmfkNfUznej3QzKXiFcKlB4kO8--3I3ILw6UjQTJorxvsd6toAwyISubvjApC3tA2VGvmP4S5K87FWd83OjTeDOH8rHwa6UOnsC3Si6N06WWNGR3BGa8mM3ukIN5zuN2MTs-D=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPUwfI8RJNb-jb_epJXeWL4RSiT_dVkM6JMXxBUbXJVBNvOHKXOmmlQTopYCTBJR1U-dVpFuOXmWq62WC4snKUILdGO3ovGei4PydcVLeYIm_jtF4GqNcONhEGLumjqiuzmdgtrBC4VVVMMvROqH_5A=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOhVSNG5Fy_fQ0xNMT_svuMkxX1k8lbqgy5cGV0RDi8EDFk6E86DmeKcAppXT90x4pCcVs9fq2Ohlh2kQLjuHL-lw1Ceqo7OsiStZpCj43IT5GWvNVQIZTAb4jROeykVgxydFJyjqK2RH4z6qOw8qz9=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMrVA8xP0zgUO9YF69K0GFSKNEcNeTPj6t8SWSoE2y1n87e4T_YRh6FA_iHPqg5HMhuXqgC1QUFA87MkYm6O1eUXpApQ4ES0DxvsUeDW5FgWhGccne6FuZgAlzw8MZckO3yEFHVWwyWxxK9I8YXPmqQ=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMIBGhSYPlLVXl9TfFN3YnyEUZUgEkVjXVZmekEr49exTqeB4bxehpGbPfndJSObUpVQlslLesE5wY-qhbMCjQ0I6DStKZYyKs99WaPBvE11uA-dLWUgAEP8ukKC_eq6U9Aa4W4fAbOjw_7vjA5IM0x=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczONc6IRMCmlCfBxyZW_VomJMliL_f-hGwxZYkYmR4naB9meWiluZAfBQjOxeGqcvAiBRkIJeoRT6lo0m8QsRXYY4bkbvmkvDGwkSIxOlYjtExGEg2rp6DTzUor-Q2L6BgEQDnaCfMIDMMHLRNODsD32=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczM3F60Cz4noVsHJDlaP-_4PEQqEv6AifqViH6Rs5uTeZUBS4pvL4jJXMoDC_UJ7Qfk-Z3XwnlE0GNybmWph96422Ra-hA5lIFykjVt5g6qbe6Z76YxFRKt_yv1IUq_jGE2ZcQEfK0-UUo8qWJze0uSm=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOyHz6vjdXSSRYFhYTCe8FVF0mVZBNzE3TVUx4iCv_MuTTq3eAMEEtgh6TSGuJlLzKuw3v_OMsqpYI4nSDOr_CKiWI6t_0WDhLcWdNbYDfX3VT5hNEdX9F0m9I657jqJXVErHWh80_NpiK7w-kA6m9R=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMClzQo2Du5NJlQ64ru9bYVeieEV1bA_hETjl2zMQjbBA7lyXf2YfX-a8_NPiPJZMTZS_RcMYLm7qNqWTwSL6g7DK1msHeziEtRUC7xsLVOsGjDJT1Q9BcVjS4UF1Hm1vEklEBIURZ8X2PYuT473nk-=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMXw82_6sHrqIfCFiNBhYjmM4GsFS3MUSDs3HkxCbX2LbJaNd2emLjJ7-5CDNpVOGNYamj8G2J3izFXY2sOhcZa33RyBSRGeJyK3Dkfvxh01iDBRbneHt-fDIl2QUvSI94tHOMRCrXamHId3jKr62hY=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNZ6Qw2aFgmUH2ha4ERq4fZGX8kDkQPFsrWlsVxP-93heRepe1Y4Iyx63D5ocyimsMLp6bZBBHiUsdF1mCzt8Kfei-XHwq-ICzepKldbA46VdWyqBCpAAisPBVNM0uxMjKn8bxpKtgXHFmA22IjVAMN=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOPMnYDjl0I6la_TPDnRXX8p4MSulu0oyodDpF5dam72KHkxnDKJgUWavdK-B1BHLDqoFWh__AxkRr28_JqTDcDDBhXlxL5URQrK6GTYFarznsmpQ9ijuKEJXTQli2bDCtmA3SV-cHb4dk0vPg3Xj1f=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMWxil12elBUKBvsq5PEAvBKAWYA-Og-snx1Bneq2cRwzuOKsqyH3YSf9q6RZ-Q6nkmB046Wj1oCnQb95PMJwstiFCAvCYN1h8fi6s6CRte-o5n8Bo1p6cjyPxFV3OZGsQH12xeyYK-5oIY1qetGeQE=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPBUkeYqYx2X4kVfK-rWxZ-RyDYiXmLD-DZVK6BtJSlBZID-2sEBvTNIArRdT0Mjzd5ryGWFgN28RdfF2Ft_Om1XIS5PByk4LeyPL5a9KXd_wvj5HvHCnEJWV51bHOtOqYeTZzXbcJDxh9EsnuhC_mD=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczNT4BQqvQQS3TatIIkrc7xc1acY6nGdO9NoquOqbkQkMmO2wd2X1H5UOSG-oPcpYf4PpwjRROY8b5CSOdO4JcjFCJT7N_USCyT0Pc1NP8q7_SfdSSHNBwiqTcqno4OSiv2OP0O9gsCRWRGNRQdX8ZYE=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOqad_bP5jcQNdbtkLFthLPeMADmerhn-FFe_FhpEWncr8aJYGk49P4AtBVsNNOrdF5Yxoh-83QkFChK02oGW0oQ4fm7rNe9OvRxH3beLk9n0vhDYpqU93xtZDXhAq2a41Odt6Qa0cVOalKQTOBj0Rd=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczMK0gwEM24sSQm1r79jJqgmy8zYVkYrLR_gxzg12L9lmSbms5wgPxFO4v6h0IrEGXPytzIy8NLVFvGv_zDHKwrMcr_bEtAVuLqsqr_2M6rnLXEczzqFeinaWThjb5CtmdEYgU3o6J4Gpp56-V8X-DnQ=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczMk4lT5q2Xvnx9HPqtihfrnWh8b66mDHP413leIBSvfB_fggtmBiJFNUAbqZn_OAF3mZQ7xzh_3eMed7OZEmdLDu3SCw4YH0K5Sl4AzJHnzQQlQV0o7Zc7WCBI5OLSe1Te_8ORNFuonCTMdO-0Geywj=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczMdTwoAkXZKYH1SC83VbfNLq3wMecRhYasfUVoZ0Qc6jg8BSp0MzCzpwXZZYA1XDJJHNABPRjBL-Ku_NZYrqGJ38gYoi5BJluS0tZJID-QKMf_LPvrFihYOsRUQWRvNZhpltfCMCSfDyX0qB_oyTvGZ=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczNO8pYcWbZjiJ4PBzl-rDkY6F26RYNU3D3SUixD6UW8HLhFpnrWRrixLGghkyIjYvZMMimExbjXibg4WkEmmd1FijDjYF8HUVTBmM1HLuMR-oWlWnhzGg3JeAY7cXB4E-LZ0RyWyVcYaZh5WoCvzbfg=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczMDRNLMwQb9tlWtz2wckWIVIRAcNjXDJLxQjOtu3Gx0QynmbIqBHmiJ17neWbwPYOSpVMNpzSVsHiA23naa3u_3webn9G4TwwZBO0-MJpoFxSJa_OT0wf6RmN7g4N4vf7LiA_hXEzjrIS03ZaFIypni=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczNVpMMeltf0odPWuAL2lUbdtpbmqCSoth8z74Vg9E6tjQqIRZfeP1_6oPDs0XXkbDFPSp4a1JURT2dbQv_QRZTvUYYXXqDjfyFNzPz2XsPMVg8-hNgnnFRdijtTxRmxQPw1zGAryQH2LT8LCmnsahoz=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczOXBm2DZX3OG8TYfJWcrws-xeQYt1yrsyBmwYRAnAmjbOhqzJj8DT4dLRiq8VNoxi9IV_dtbeOMphcx3ENPIGA3cukIwrrU0Ho5e9sZHf_RmZEhZIN_EJjR_GpJaFs12BHUygin2GvaZ4ANR2GngDLw=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczMBhwCz2sX3dVCs-gdoxfaGk3oQWglM09_9mYRPmmTyGCiz0NAfyAWfoFIio4y09yx7lFbJh6KHrKw_YX4P3JPiuWLMTpOmHKkPrZRZcAvOlmlIdxO7sFOaRnHOENwS4wMjdQA0CcgR74s9dqRqJtFa=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczMR1vQnWWH5L85a-gV5Gjv-8RStdVcS8s5uyo03YUCRwO_K3FQi0WCVuvunQQ-6kjDf47JkahMqlzFIZfcezVskXxT09V_ogppm0bFivk06QNVXhl_kPkCIpUVy5dZkrRHlWFs0MHjvktsc3hODA-BA=w1920-h1080"

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