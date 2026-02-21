var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPdUg9U4WabZFxMYFrT9nlx_yAwHpptzwXz7Z7MZxa7W02g1O6dFUX8jvxABjGaAYWmD5-f55KbigTizqE66Feh9htB7t2H0eFgns3DXomZxwOmafIvUdiBfa7AA4ctkfX6FR08Kxw8Sw6Hn33gjzxg=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMQii5gR500c2j8__TenL_zeELWhODqp2fuSzdkTvfrxejC5zILwzuij8RlpHr_43gNusmT9tiJ5y0uYTm24pE5RnU1ViVIsS9UPbv5bgMGblk3eKaoL2eSQJ11UIw8aIUl71rOpYstN-qaaMsMc7mZ=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNTMry4S4S0bCAaFbQQuGoIFizh_bjX0Ns0iSWM4B0VPCJHB2MryHOuATvFgBfFSUkMRh23QsNIPPirQuoRt6p-UdDgwrUkAiA46-SMffrfmg0s60KPNej1kWfAvfcq0N6VgnACGJL7aTn1bc6F9ZjG=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPrdJSUBL3_6oYWpXfd63FstouaAU4jOLrGvuLTxDuyBrTYOsc1r5K4x5Wxv4YFYe2eMEvdYlG28kovWV6eb8M60n-SxiNSl9XuCVVnm3gE5UrDFAB5-onF5tHyJUfi9NpZrpUqYqIi883TGntOBIVt=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMOUeLCoPc2XQ_Tgj0LawN9sgABwteJEBfpkHy2Ypi1YKWHybzC3GwCpiyy2QbBqgf0hF2FhEBmYukgrb1UJwcNguh88MljxS5Mop7CU6bLyxpMlZ8fudmD6BEgs717Uox4m-qkHVfKs8RcbMO7UBWT=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOReQ15ppK87dib2YflXKSoDu1ScOWBfIQH7CH_hLxHgXMHTYMEXXjE6b0XFQXsE8K-KpzmueVks1uBfq1ew5RhXT704wlye95SlO27ZyjgOQ-lfvfjYn3EKFBa3uPi--wI6I1FdM86xeiIALsvqRvv=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPEe3qWqAgCFdsKI8Offd0XRSt_0ZLHeiZpwgDAfcUL875Nq8MovB9Svrzbmd0FJhL_5-uX65tcN01SJfFfV0IMk6zixBpFXNKOP8CodDX8noQc05ZKdqxDrjmikcbRVs4C8xuybO_NV9SMGt0YTBHp=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNz-u9-8nG4wHHC3ZNQijSXSfAWAuiVgOLy8xZkGkUbcQhC96poDeBaQAfvIYXDqJdvAO9gFlrxHm-qXS2VFKwslkXPvi0MIkj5ha20sGBFdZJnDoTkEVXbiVsJjhh-b0OvZjRcZkQ0zrHf-aZkO70h=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPEFOzuwP1ir06urhH1aeD0RayeQOokgbdAIOT-ux4_DvmaYzLTBPEJnBcj-XwEu6PiDxK5DvDZ9tIH3ul1dw_Ndx6FfVoHYakrFuHCL2iSZcELXKNn46driY8qiDWtqvJAjpWIEDSQtwI0S250u6Ku=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNeH8NtiGY0MFHHye_2wr0wp-UAmMKXQY7RGGRsi5KV0FdUveWB1X424En23T1AULFxcXqt1fSlQjxs27W34HwFdPodA55ER5taYV5qB3HQ7IWxQSRdgj6ljOamoHrlIO3ZGF7u09tbtlsLKSw3r15U=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczO6o2BSwR1SgVGkJeaA5yFHih8YGU1F_bhkVGB28IHArDVU2hu9UiboAu6PIAiiIKQgooRiBTflZow-FGWbtUgBs1mmOnJFGv4bAcF6dxC03S9aDIevPAQQMxAxb3RL2GCXf1hOCCVI33hGFBUr_qdH=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczP-62qH68tmYYfUJERLhYv8lXd0z4G956vio_kYq0yN9OnjRjXwDKm3GkdnIs2Mx7t0W9rOITuKJ0kgNgEd88ksM_42_CBZep4RBbY3wPV7VJq7ojWu7HOCVY6YdBgPXA88Tx5-pJXTwYTqRvMpL2xx=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOmYN5F48ToUKyKNdQsu1STFDBNIAe7rXH8AIE0hlLpcTSd2Zq_BjN3u3dBjnmVOrd8kEo4M60bXapXkk3H0PaRskZlSOUWGTeKaEVLYbRVliMHSUNxlekWknrf3lZfefpN1jRmfi1iOQHwWj8g-7uV=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczO3ziNaPeZ_sLVEpCTRQLYrRLvcvc0BO9H87_WBYHBvRoFXhr3jJhj7m9ZpsKOJKCs1TIrEv2X-5tdSoVGMYQpw5iKxsEoEru278IMput0id7Ew9ZES5WdjRVvKXk3kJqqoMmectS0ebEDHFCaxGtA_=w1920-h1080"

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