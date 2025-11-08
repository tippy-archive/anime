var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPB292Tqa1HF9_ZPqNZM_i3vhnFUA7NGK7ZdC6jVMCegOomWo5LZ0auml1fHJxPBW88ApsKLFc_yfDlUrhTzN_UPsKUBdJJYgQYArdevgUmwlmzGsmECGeXIlLiq60ceoFNz4QdiXE0e1BfoyzDB5fx=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOv5j23O_0mXDO0bIS7gWrIwOuvAwRpJgysEtUWQvmzE6KFdyiutOW-Fwgt3JXgbHt-ggg6qi5A3SyL3COURU6ZPy74nmQdAOskqAWL0Zw5Vd3nA_xIYAnkzj5lfohU7tSYdyQVvhWuQiK7RW2PkI2Q=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczN0pVlyuC_JWWd8l6yxXbpccC3MlSgckKsTJFP0ozyC3kEQSZiMBQ8IMKmT9HRl1k_b_WnSrXB5czTUY9RCjQram7wKcTTpfeKV14kJYwxQK6MXPST15xSqcSKppHuLZD7T8xMCdEcoO-vUaex_ZPlF=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMDg799ifSf7cL7R-UbueY_cbZ1KNjbnC4bidqM_9Q9vRUOf02mOJHQtT4Z-CFqLb2zsYyeOGBo6JfR4MoibRMb_20Adf37MxX_ty7Xms256xROKBgvN7WmPayP06oZpIXv-jHagKRdlPGLQPfappZZ=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNBDB3M8NHdGv3V0foTMZsAmCUe-u3Q73AKdccqpO8DBrpIchcE4Vt15nD0jPW6ZuXS-_KHb3UcQVsG8oHAK1F_gyc9tw-43hQI6cLMBr_oWehKIwXqmtdUnXoqhKFIfuAMxmx1AQ5Z6sSOgw29HroV=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOfh42AZK8E9fMgGGSrFd2mzejnnWlJ99XC54viJM8LJO8-PBNPHeel7NuDED28AR9ANpnQOkhXAX-aXayS-OSI5mfpxVfWdl2cv9CjfzbWLk_qj63J3zgQloCibS5_QukDfKwMA77Hb2h0JY6knRX-=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMlAEyTProFbjcDtinAJJbDk_kl5ZZla1hWL0LizE5OJLPucajP45PYAegTb6xetN7jeV0Pjj85I5_2FjQLpyvuw8DofJ1AAMNdskO96u9ibvkh4RdjUHkqt3vC2JhQ-DqHXlNThmORvl619rv_EzlK=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNdiFCYk2Wdrz9OQKwF4Hdgx3erlBLS98YyPr0lLSmC0k_Ud_Sr61Auu1rrf4zgM5CQlrJVmcyIQGsxz2suuGQkjadRG96aufHy03e5FhNHyF4zPxIDGxnn_N1CoNr63HDKXWE9_3PB5KKnovNPi0PD=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMHfOzwziV8u0WMmLJ3NANMXmgQ2gNKB_1EEXzGAs_I9oDkegD2Vjk38ujiW3NpeuLq5on0-LI5eMnvTO2zxu2ApQqQ8I27dmKU3kkEbfmhHsF1zhdQdr_hzypKnO73LN1DkjmNKaxc9WQd5cZq-doO=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNMPFrNqiJm_mZij33-JFtM1YFmj8-vfZt02IarTGnzygop5_Zm8fZkvzhhtcRc9PIdhwgoQEYAdHNr3OdQy1LH4XAIWN2x7A3JXi5rBiqphClzKA7sR0O-cIADQhcoHEblvN1nvNAR4bFezPPMVn34=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMIEeq_895ZOFLPB3zDqWpm3uZnXlT-hA3HB0In_R-6VRgfx_BGdmkaSU6OE7LCJl402aTN97cjsfrPSBPZzccollKhTz_RzX7AMZVjM2c1-P9cmOrmeJZT6_pvhLt0n5uT1O71bic2F7FQqeo3aqkk=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNGXcV4sC0_Aqzt-QUygn8qy7uP-CHSvQrbqBr65x6DxFW04JrqbK-Lgfw9AOIrjS4bIYbIVy5X5AaB_CH-9I01zL1HXgDM7Z31xFnb0EcykEg5UQnsv7TYoaSbhfDAsjYyDfMaJutp0huhCjn37As2=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPNKJzCDC7W4N26cOtCLTflHRoV73J8FwExtJanIcZJwAxtN0XT_xYvekEXc5x0sFV_GAiZbV-14zHUBG8AgRJFC36bD4zbSXHyrq3DABuJdlnpNLB2s7O11UIFOqqYzogq4zPuR_nkr3TauhC9rxaR=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNI3n-Y-xgew8BD-MUcrnajAEgVqtmtl5a3enGCKkIAKI6N2pQ8iZCe2ixWZxEk4R8Lppg_NxO9ZWWH4ykaRMKn73MxgCMjvTNbYDNhgiOUkk6BEvYMKNOozX2gaL8TXw6bYsBDCswuc-4YLG-KW1cA=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPrwqqCDnOoCazlmAaVReJuNQ9kSWXzhC9wnlgekzb_hUNLsG_FovuY0mi7nlbDXq2_kcE6zvHZZJwFwcIjRi39CZIJBuFN77KUrV4Eq59ReiYLA6fbqQ4rpo_BXXibj5N_Q1VK41G3ml1gMWBZUX4U=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPi7nKkKjpNHZEZ82w29kH1NlDSRpFFZzp0eEC4viwBGyIah8Prb3zfFXEiX-auqk8hAZ-ra0JhENCKrxM3SQeyorGW6BUqCwshmlBHSfBWCy0s4pYd_8En_Dq_kShSgpH551ergxySAIK5brHCzkXJ=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczPmSB6JI0LiXDj434Oara2ebzovCZJ4OO27yEY3RJGNkoDx4Qb-fCtMqgTNLywUfk_r5-JnBOEMNrgU1kzH0VihUCN0HE6Sgl1MnBS-QVK_N82eK_z-poXwjcfHUDCFNjcy9yHqF57TiUYkAIwyf0S7=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczNIx5ATxLTzfiHsVXtrVzCxVCwYoGzjuPX0uSe11uqsw_JreQ9ADxtac_2qC7GpawQZyK9rMlYKg140DvN-Wkv01GA5CI5x8flRWSAtGdFfr_7xygted4HuvRzQk8w44Vn0HhFI67Nh2P0EUzY5b_jl=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczNwXmI_i34Ifqm0zslQ3pC4e7Z0tXgc0P5aJ6Wl9EXG8LlSgGhPKNPEotC8y2p7KAczxSW0qMHFWGqlVvgr9EzNMck6SXaYtuboopt_6zsnp6dV-H4SlNS6TYEvUQQpRIwLhzffbJMOLGbXtsYKQ0Gn=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczNyBjlbHBihw2xdDHHFomXg80MTnMZmJMQHtdaYh4ZcTFNtwjub6SwZKyeV_9lPzPuFMTshOVgpKP-IPDGGmUSSC2VPlJoaVyfM2LmB0O7dE9OwkESzPoJm5QD_yEj51mFaAmZLD5o5ys5p7A-_JidV=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczMqe6LU2T3E6iGCAgtDITfiHqUm6OJqBC4Gd0VJA6m8azYfDJiIpsduW1Xwe6fLObYRfE7GIfanGfU_niXjji_t30uWh3M6R_o92OE3meu8RQEWh5fBdxilA-Zhna3oEerKvO0K9e-3Csl38JKmQXgm=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczNL9sOQDNULcEOoPytBz7qyIDLuBiduxcHBJlBMOFPCQCb1kwnzsQRgQGXcx98sTqlBq8myM_b3XWfCmQcECAV4_iG6wsqe4FY1l8tROGqJ8OUR4aujuwKPkKYIbVjDWm6G7QNgaZEg0rbcuSol0vbT=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczPylTxvMbFsiNkvGoGjYPFzNYmLopsTG19W2mjSOThtL4hsyKn3ms5uyTwEfOZheWy02EsE3912UTeuc1JSUyA57ngGHremEDOyUneMQnRLf8-7XQTGW4CoSmBMsmmPZlXaoSpxXdggTSu6iQnxd7j2=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczOZHCGb4GcQpIuvq18iGXr_h0dyNh9yJ2X4q8TTH3fG9HZ8FCs0dijKmCMprmsoqabUAhgC28EbDRVq3K6JBS_46De5VX6Tr7N0poUTBrVMowET5nFaTaRTmwrcLaMqKpe-VhcVOZGwa2N3D6mTp-vr=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczOfuPjHm1Ec_HG53tgZTA7h-A4n4neLVWfmi-XhKdqy5P4Li_M2dx4OKcgVkeFTemxqRapWNiEYajXklagWCOtOy-gG2AHV3fyTx3q1fX8ic3tRz2WjvjOGloSkNxGenAoVQ8s0Aedlew7orZ_hpZN9=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczNi2sNoWF-HLxc8iH59QA3voAJhxr70gqwhoR_yAqel0UE4w21KftgeVcmSXPymdQCfppXo7Rqhde10IaBTJ5d-6h4Nl7-zASLdWnVsduzmN8XKJO9xcNm_oQt03ziv14NzqBsY_CfLZzSYVZSyf6Ee=w1920-h1080"

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