var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMEStJJddP2zXReBR4OktjD5i8_lAboDLEvS1PNIacT8Es2UXMIggIRPKPGfFISjRW8Zam18AkKoKYhiAP8eSL1r7jgNHyoA9CgAj0N777lfGX7BF9wPrXyk0ovhWkOb5KNsgFelWfnmLZCtrmXobNR=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNarTW7BjbEcndh8WDyI-ZBTZNISDUCBwyYp-cmC858JtlOt_6qxg-kyoA2sIlPV51XRBLPQXR9Mcb1bt7XJORv2S8PP633jl2oM8lVMmo5pXOgqyNtulVAW4ebzc_ZIxJuBcpRLG7jyeZITn4wRe3H=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOAyVypTBT_wutXz2wPCpJ21jplrtqc181fpzVLLJhdFZQLgi71FNgNeR6zd-jXzDV_mGOWlAcL7qIz8LqSkJK73_B6BiiH_yMMog5NxSan0fzZGFRLtn0_zZwCotfj7yyYNwxBy_hNLUJAO0DrmMXR=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPjxFRMP3UTrn1N8v1PYM5Z2OjBv0gC5jOlWq2E9zBymy-a98KCIry5TWXB4t8PLknLvPQfI4mx3soVruU7t3bexSj4ipJwo52b4MiTwHF8Ii4sUvEeF6DUfJQxJQMm0uQEqptuHNC9sIiBi4isP1gu=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOZWlLXqNNLHPDj89jjZSeH7y4QMUfm9Rb2BH67hy-hqA4gsPzlI2t3gQg5m99lQSRzyCPHo-kHRTejGv7ZmSbWClVyqBPPewurv4l9X51sM5ykC4nW17UMHDRxILp3DVvPfGHxVfInXbqbxVPnLd5u=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNggRlsD-JiwUVyyuZCH6Y47iqnIFuWYWWHSUc91-hXKrDLp4N2oG8BGNqT-mZVeN_C3IYkgEVJRUFXHPOPE0jbsLn-NGIopM89-Y4bcrFH3KsisnHMjATYnDZUj61m_Gi0FBjhMNq0fRUqqycCU2eV=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOlJ3XFjlwS2pXp-bwCR_-emrsPS4gabV5vdsBbEQikkmMrNUA73itMVLj651tgPjajLsnCMITq1EdGTTUQYIG_JVoSK0weyCl4AoS2ZlBuoe0YzAdk8BWm7qLCV3RuVEJrRZ49rCPKosMG4Gs2b0mb=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPGRbF9zUesPIr-4sYp6WfgtEJIMOeKrF9iskbKdDHKPMVvtKh9KQDQPqfg5OVX1HEk3YnHSwTk2xtLPcQ99fiFnDUPsSTNMU3EOQvhz9GelTKnWp_pWMjwmZMk2Z0oVn9g3zl6h2UtFvxrSQ1R6kqH=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPP1n5GXaLy9jwUWbvubzSi91ieGRft0YIy7TQe_IESWoIM3si5x_CsKLZC3UmAYykXFxkKJ06t__epzW9nkvnDfn49Sf46oJjRG9ebPcfWSu_sVyhlvcim_XvrfU3LCkFQKZEwg9uEHuj8JU32aMn4=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOWM5K2Vyp7TbyGAKeADXeJ5bHbs1u8dd7-ByVp9WNEm74eCDcfUI0L2qOg6lbErTWEuj4cHOUnpFMecjMH8btSVjLdeS-aUUyDN2flFCesmKA6O7poHl0tphAIgrFSCA7VuWphMYlg0VvOLURh1jiA=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMzKKeCCJ7dsHz8bH6mFMisJhX4z9cYiaupktzWt5ci95VAv0_cY9sGMk6IhpyKo1PU6psv_z-DaFCVGcm09PRaBsN62n4O7Ys3Rt5xzP25L_EUqNhDmq4bwWQugOxKzNBPtPjX-GlSqsdHkpfXV45G=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMRrhnd3wnO-RoB-1UgktWsnc4aOgJIbTRp-9WrOYABN90C0FAmyHW5y1wm5LknaNW4C9D2pgFv2R3EHpciVmWi_OpJ5ZKQvs7ofV1y9qD4zfQjCyXi4hZv4XetSjrawlpcQ42Qm7noIWD7Lbvb0Eze=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMBR8oefYUHNv49PA5ixfkR4hxIJ_FzQyeDXgOSYoLVLc3PfqsFagOW1P9XFle7eikAA5Y-FVvK-QfufNXiqnPw2P6bcKtxBCsFrTpiJLuYPDoyxNd38djauAQ5WSskAuEQYSHe3kzvB_OFtpctyCyv=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPD3--rBATt_FCxyqu_fdPop7I8HllOJcJPMmyulvV8VU1ChDqRzTEW14Pt4m8ZqNiZkBS0PS9Wtwid_eGjcFw55-HM8SLqQTn568ajKfsu93orRtH19lYHdQz3xI5-opFHHmQ2CrtULa07FqrF3eyj=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczOf5xlviYtXBNDJCl6dj1K1V3Dpy-B6tn8lV4wYQnJDEjmdvseig7Jr9zug6FO39ARwpYWAHGTx9vQCuXTy53lul_MQ5iU2sA6FH36YgB8l_XeitMfu7aJDrRhmIu1E0EXbTT2RCfwe6NLmJYqfrLjU=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNhTvFW3V0T_U6O-Ih7XN1m_Vnn3OvF8plsErTF0YbWN9dZaa4OGW82SkWXbGWecXchm0hF73OhTD5GamOma416E_6NfNYh82jC_wwq87Ly9AsjuHVB45qGOT-WHldrHHdWAt6y-yjsM7C_7oUyStpM=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczMBxllTXjYe1zo2SrER9v0GwzZE8AGgIHFVOITfdIKBKi2AiTYoIAUsxWZ-GHBZ6MT4B2xLwhyH1_v2jYZT-9ZsX0p_iZUoNkr8bN27mPySMDakaPOZTkUhWUyqGeoAThBtPGW0KM2MSTrvhWHtbu9f=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczNQSsv2xOw0ABkZhBWAmuqIkQyC5u6r14TWDzyOb_FG09ODfd3WLMW677ktsu-lyoYaoNrPjuI49Y3muzRx2G8SKMCLDy0XxMfI344YDAKnxONEYyYP14_wCssji40qBzkgKOPLbCx24S7KRk_fiNL_=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczNDU5Gz3lCkuIAt7Lqyul-HK5lNg2uSWiF8aiwRjgXf758eaZorZkBOq_n1AZ7YrYQRDIECeRt3udGuRy1d9majasV1jeXEzDEI5K-0wiJGzLCEi7M87zYPf-v4-Gkw3EZR3IIFUn0iR9mo3Yfzyz0p=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczOq77JYuS9QFKNyV7Y8Ww23q4ZROcmDleDJJz3qiplyEh-J9QHFMN-6F8g5rwwMbDgFWjPl-R0coEUtNRzfQHUxmYvOR1SPMCJEK_TCE_gLmiWnrDPMfsopDq78-yr59CAxAqPZcEpRLK7DyZo3fm_b=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczOtcRVaiJGYQFVo7xlIBSluxju9bsoNF9ZcJAitAt7yXYlvKLQRz9aNWu54Q0tAPuo2fl1kXxxxmqOcCrHx_vLqxfMD_KSjb_qVHTARyGZZHnejENgntmq2R9HWEu95UeW2B65IjUE3rzNl-5U9WG8R=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczO3wTMrbnlE1KCgCX_q6RQcKfolTm5HALz4TMAJQF4tXCSC_RAPsaSmkHd8W-qiWPuNVU7mHVobOWPylY6-dGUSD0gdL8OBYZybMYA1pQ6T4NbW-2GjCAr3R-hcY_c2NDEmSvv9VmRTCsTFF6jKQpB1=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczPVW1KhaDEn-hjrF2s0i2oirYxIB8lMrKy5f-m7nNvlqFisQjzpXY0hJI6L07e6l6wIgTdaOhh9gXeRijIHINVMWhMHJCj1vNpt81ZWQTkDKmXhtUPYroP7sk9UXIn93yc0WlybZeMND1RBp0L2ZK3T=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczP8zUNYQE2h65610y-GOj0gf9pKzmghOXmn_M3Dkve9lj2U8ceZY9tdjOLNTGVdRFaG8_aHQ1ixwwb0rLQl6lKz4A2Xb5kqbpLADl4KWUXmkgUTJLLvc8zd-1UmJBS3iMZGTyafVXIHYVmVWZpImah_=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczMLSSez3HV-O3Uae35IQiKg9_osE-dkIFgghFujFWLZOyA3iHUcl-I7B1HIRFaqPVhljKz9rlzvuaQmk1f3QvWjJ5fh7Tng_dWOgVQCXcjEi-SM-i9WGp0qzE4DJAUSH8lxclXY2eZpR06U1AqmtkF6=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczP5e1H-thY8jNWHU-bzFAHH3A-NjG439DCa15UXnL8uB2YgUcEN_Ax09w5THTah3d3MOB93PdLT6XGaZx94xBX2kRQ587MJXaPS5utJsf_myyiSiS8C6sUpqm5AEzVTYbk_Oj8xmUCaf4mPzLyD-NWN=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczN6vryT1tKI8GjQC1j30q7bVpuigHeBmZJCJ-O1PC6usvKVxqbGsbIDL-p7Yy315XNv14ES8Ys1OIEQ1nbRfB01Kkwo9j1jb1C-k4d5nBPpGbdFe6x5Ft77h4dUCp7HtqvBLVVQv0zoBbTjmSernli8=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczNaUEJytlgTA0ecXRwsTHM_59UlHQbjzg5MZvBa76MjWquR4nT_5_d5gx-n8UJfCdWidq-tcsn2SlXwQ-wmKHV3mx1LqtZdVmh4VmQOgoa3srYi6CUMQJYyWv9PmR-gNsIe0GUWZYGBkpDR0VPWPUmx=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczPivsBtPjyfJqxzv-AzAnzSV88z3Q1UuT3m94Y_VnfDNJNdVUPa2kiJ7RPA-xoDAN4QkqsZZymGE-UfUph8_ePbuxxv4u2fDFgPe11Y9oafweqrs6b_1nmRPhAouasnmS-kielvVFGNvlUHC0RJHQlV=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczMb4NtmJOnQ9565rneiyoJBOcHE_q7JvE2TR6TSxbs0a0JPrXvgLvnPtco-efECKm7HfLbbnyBRhyC0LG0qMIJ6WRFJ-YoCrTk0eQ3HEItgNul_zzytr-HwXWdNgKtGL3kQybDCtaHVaA0mUQcaXkMT=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczOSX2Kck__EbTwnnfhcJsDWbXoNmOJ6sf_FUFQuhQCAcpeb4tbFlo1qfqzqG2BfXU_y0KeTFAXfx2MQSvOkLA6uiWAlrzJMNjPJkUbe2R9Vbg_CluFbig_Kq0k1O0OpD2sdSKCt3CY19WeyF4PypJ9i=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczMNFT65dFfPTR3jOJQg9yu9TNbMhurJ2KxLnYHonkPv9aOwiDkbkgoxF4SfHWARI0HMQm-D4D8bkxEXy-zE9d2iB_FCXdJqPTpwgsKW3l9_TvIIGI5jjXV4Esd1rFLzKqwxjO1t5XfC9v-qDARIJeXu=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczMdXGplbntfbdVpSczoyAQIKwG8xU9of1g7_ra-MlVFMtrfhJvSYWkZ9l8q4Hf9c3UEu3nzAtclRHsDcjoG5vr3XE-qBtxDwWUPZdHV7i5Y-yNYSQt477ZDCIzer9ewfOnZX2oK3G5pqnHhE5YCJqYy=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczNmwyrUhv-1csKeOpF-8--54fhsjGUl_Ue68QVsoVpKzSmiEdJfLcUZX4Gx_XoRjnAuyAYIDsCPxpLXJa5hc3IJK3oUyTPZVOSh5WlQCffuZaSDmdEfKoAWU_MCujFrig72lyR4cHlU7VNAaFSt4WaE=w1920-h1080"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczO28rLqVwk3vx7WL4InGACEvMYZ8eLGzWeC5HQo-pCjLY1uG7b-HrmdRdtR19BrWYoLhhKWnzEPoHJ7VjYVa7zxtc6LxcMMsLVlNGpJpjYseGYSl8Pgcssj5Y0qowWjlERKcBGTyy4HEx0kGLSGV8c5=w1920-h1080"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczPFwHbOkMfXo-R63F6sH9vtiUqeFV5lJnpODX9XpOAoS6ZsRbhgWYe3rZ67IrwGjWWUq9A8k5KaoylopOlCauTSrzizMzJgjoVpYcZE12mlmVxnen3NLshl4qS7u0320Ku-UTpDGYt6IHySUZpIaAsr=w1920-h1080"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczMd03vBPwjcqvF6G57o0JOCGk0zasWFB6rf6pI90e7NMW9qATRuM0xEkz2OVxO1PIvZV1SZQaydG4fX0HJL-sQDAEFLP9WH17iBNyf8Z6j4uyF124uHY_sw-RRKnTXGr6TRS97YoOc7jM04QwYUDfjg=w1920-h1080"

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