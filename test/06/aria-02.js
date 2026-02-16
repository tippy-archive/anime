var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNlUTVu6MTWKUbXVZOjECy49NZIY-u8j3nRgkfNNaVJAH8aFuVnEac9edASda2l5lCcZm4RsXcGf4Q6N-9vIw48XbMC9w1GBmpdamq_tc06oKw2AgJyAaAZwF31y6iBdvQpfeCLtVmJU4gC6tP7LJv0=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPqkVqPNW3PV5oJEIkRY4ck6pS_fCf4Y_dt83oHKSlkwKN8eBHT6fO7aHty0me3UxRoLu8vMHgLznm2x2tWyV2W7K5DMVHzGeBRAUwo6iF-oCXpAg9X7CIXRy3ObB-KmQA-TpiipvDWZUVJgPZ2LzBh=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNvaiTy0ZjPhsYDTRl3kTSs6Wg0ZnSZidyHQblI-WSE9m2wIFvAB2uU1O-W_nMaZNcW4TeYlyqZt6KKaIXgpXZkqDWoMZs43T-_HxXbSPi4_VmE_wmK1DoKTXC4IRxWb3huy-Av9SH7JNOI6hJlgCit=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNvh4q_TooGMnWtC7x3u-HmuTXwJOdHGC9CVJdZd-wpRULVngekZocIJfrVBy_7vhcBe30SKSL2sr1MbNb7mn9GcmH-94AklcpmBydRy7dP8tPVzCdv5ukrpUuP11dY3znnMt0KYkDEDI4nMbU6chTy=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMI2mEbw7y48O92lGNJHYpUwHQeHrkaRzRqydRp_qB-EMdFOYmYEhox4vOdatfcE_Ifjhq0oDd-OAEdxVaOc3JFnsq_KuD2_3HjpUIxgfdTHrp4lW7JF-FV6dwjWIi50xN0RQeKlL2Pm4lDLf52DkUT=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOdbfE2ckipqlFX-a11kfapKFGPBDlykotfy1RweOhTdZF-e8F7Y_8DlXD6wmWaBEIct0_eNdjDZn1OFkOKWIBX9ZF-Xzaqnc0mEfy3JbgCJpQcD20yPXt6FRkYDYCe5FkfewZ6sZCwPOdldvYt4MWH=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPyUPvtca3qyJgduHnGCw8bPw9dGyxdshh8-OmToL_GG1lXPrtA9nb97agFKgnizNZoYd5PGpPmc8DtZoavpwWnxfwDVO3zCN67WBQ5V0b39NVZZ5Dc_aLa0byv-SLOmr5MNV8mARwFlvKl_FkK96Qg=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPcwbiXMnczQmmd9jTrEO1QfbHq37FV9wwV_IhJXsQjJyVb8k81nnt6MG_2PO7RV1s2Fe_WOnhFc8xIy_E8tuU6tIq_r6qpiwcyHMNGxqNhtOM6XZDBTt3i0nBfDOHTmlOLMuwilOzZNUiEBWPVsOOj=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOluSLadbqjVNIZuXial1HYysrovkKqZNIqY8mD54QRcdeasX047dzS8WL5zUQHA7j7A6IEfzAgXS4o8Ykw9o7quW9fYElN5aQI7tT3ZjRKitQEVF4nY6JSQu7DcTRbQSunfVCXemxeb1oRnSvFNOBG=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOWQmt8ZNnDIiZLzFc2LKc1BUt7kFCNaWSBBMYqGYDxjCE-uFE7nIMSStSdGRjcVw7cEaXQwbxfLVF08va0zzB10592ZVMeWwy3I79RAJujw9PWgQMhrFf7wd3kkJhF91Flrb_3i0ZwpYM-iGCpIE8D=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczP5d0Ac_Pn-QE09ORa-dvmtd_Srh2js5FfL_bULConu6bU2Qd3PNmM-f_GMWwgN5a_p3sIBz5u428TaHNiyLm7j0IPGjuAgXG_FO-Ln5yG0lch5ifTcC9WxFPmxtG35-CJQ5k4NbTg17bXwrQMZOIpn=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNmAIkFZcSwzBcZ-gTNIdzW_wvIUVSbPOx4FOiVQ8Pfixgv816C_6HSUEHcvVEJ2PXIWN6s5Wv0B7_-kkaUUoMNPPF1e-iolKna9VVNv81zNch5fWWmw2AvxkNnTCCin38AwzHFSkHp_Rn7DITtACgW=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOf2ZAuZiHObM0BxKKcnZNuo-HKkNjFbF1VBdnOJ44R7rZCRj-_wyfblqHtPmieji7DeByQkxFoouCti7BB1OYgyjd7MvMvg7fnjpcIE13RpfqA5XsXzGRRFWkGbi9fLiznqrlRm8TSjAOGmvGhyaCr=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPCN-HhxJS8dWsoI8V8K5fJIFUpdZOem0n3gIWfOugnuDjlZHTjErTPh4xyox855xH3RDzLXNUMzZa2_GYrNyzH7ipUwMhfdC-C05kkaB0jtcWVA92rqfNafIrRdgS7FkYCN3v_SFR4OJLsQ3l-eOFp=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczP2MjKR8xpoFt3ESrwFpDhKrFVoS_lAqP02G6Xv6Nzv32bOQ3lAerq7o-PBQuVNyEuC7KN8iolBW-aVk5-uTn5JAraPsqKB3dQX19A3RaeJmhq66ddVwzb5f_6CR6LWq5iDusaqasUNfImw7DxIF7kn=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOXjtCkjx_ICMEwLMPNiw6MkZXplo_L1oyRhvEaeY0t_vrDFH9yoQHf_EnFK3USm6_OVY35klqdui9BeHl-YBSrjfwSt4Qs68KPyM6u4oQeEisEWDK3c56DgW-mUx0rBaX_Ho51NFpGSSkqkuKGUCxd=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczMrhMZGKC7tsXGZNYn18obBHxREpR2n11vQbfkxTJHtbrsl3S3KglCV-qTnSVQua2xBvZ15oqnuz-q7ADwbmdeJWZgrfaHbijXFcukTNpTW4rDgjkxdGr72TQVxoaHMKvB-Y20ROQhvprs09G7O1ZQh=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczN4RH8gc3BqOt_Byf3AgLdOw_G6t6WxabLZJXuno2Bu2Mo-YauSCpcllQgr5_ZBO6bXoLcsr70-DrkW_HcYIYf8dChcCFTWD0VDQ4QWLAM_FCmh6AB0b1b3EtQukufNdIt7wHQ9e9vFdFTG9HbtVCuj=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczM0VlFMPL_r5sooeW2WUUyXeNXy9i55nwnoLenSMc1ZFsFJ_erIVGzeqzNmPBhBabn1Yyz-Rgxi02e-gXrcxag8XRFmoZepmplDHuOVDaOnD--wuqDaPDVtuPMbXSwdy64hbHs022lci5rdKnD64sq5=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczO6gPYFRA1ISiXjd8Yw7_426Sxylem2WStshJBV-zdmVd70qvI7FC0VD-HtPrCFHz7UCRWVMjskMAxBqsPIg86phdWQJ34zUaJ0v0ONrUfWtgqzHgpzAIcN3sLShp6FqQ-9RFRF1i-dDWBVIEurhvSx=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczPJ205vCd12k8ZIv4Ey8MRG7PyOrlC14943OZ-wTXEkk0q8_UOcNU51NuarxG8-F3uIohycG59i871KKRvzb1dUq19Hmt3sVvW-8kJmgMgyie0UzkzsLF-nmzQQH9x6WwhmjlvDkIAs8Qod4h6i95Xa=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczMGW2iUKfze4_yPiYjc5Mzy2s3gGwG4_7pDj5v4e_ejtWK3tkzocvxDP1bsyagc30wddjz-PG_Vg-cWDzQ0zJ9x1jbPPgFWjM8OnRRyollfQvsyNIYTqZ9JMwPdk_b6qh4u57J2P79Aeur1twC_Nm4-=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczOUrxOQxIUqhTNCTDzhxPG62F44VTHKNrnp9ad6TuYY--kvJF7MJ71aRxAUXdlshAb33ivlThOikDlw5chfRbjIJ38527TVwQcZHYlAN8kmnQAGCq02vuiBA23q9cyCL-2sNDJ_w0Sq97wpKnKBCKN0=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczMXGKarRN2YgudDkEYGzqJmrKbYTEtmLhRvRov8he8VvB_WA4iUILXD_QdsEDRKAFQkuGw76oEXAoSV0D27SSEln1LBHdM1SAHya3uQML0967hNhyZiS0bbpCILF3305Gq4NPNM4T1QZcrpD-xPQ_nj=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczNEIOqEiWaMde1Le2oSH8qvBAlt_LmAqXKy_wMT8sEdsW2oRvO01etdXJuIqlPK-p8Qlvscsg7s_60vqO374f3KHxjXyFL-0nCsvtKBOaYgRnK-LdPzPCd6tPaXi_spixEdL-TX3OYVSx-xrEuJzjcF=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczOx6he5D1kkVwlZY8Qc4xhjbK-lHg2aROzZ7v88kttfSjc04IggGBGJ4T2Fr4oOWzvwW2_rDHqqHXrzhmXsiSjQSNfwAsLVrgm6y1JzQTyOEoZyHNbvEb6ib5PnIm7AZ5b_mf5GYvZUhbEXrv7zl-0t=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczOXmERhbhf5UWvX4jkcrNgbugv1wEU_vHBX81MNvbv3k9Sc1SRg-vb1_G5XNrl2O4LpbqUAoFNo3pj97ZSBr8b7q7LqGzydxHLCzJ4YisIrHbAJRKBK_8nu3vHeOsB-tO-IjRkc1uUGK6KYbAm6Wt2N=w1920-h1080"

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