var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMFupXM12G-YzuKS_6TzX-tCuTsUTO95NVhnyGFy3YrFQqoh3N4FPJDh74Dxxkqlaf5-0CFbzRMHxy2bBoqYy_jf7XLdOzOr86OsrFIjjdTsLrIo-mg5MTEjSmfkk4q6FM39omiJtMgryDGlOYhk7Kw=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNm5Y36vMnwQ3Tppsnp9L_4zYYYYIyoBasrkV2EMziTajB6QCSKpCSyoRmC2vZt2BZ6usbyyOhUi-L2043I8zYpgQxfCJjfJ_dpMxsXP3F4U12HCd1VATRziJadmD65VaMPowe7RtSPhc3fuSe7yUUN=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczN07LhylbPGHjwPdGhJuXdBZ1DdWpasAYBFt_NWQIJiv2cnDpjvIhANXFdV09OA40waNtq4qzceXMdFhhj8wPsWaJiUwz3ODsMwlcXbOb2PSdEFDJq-rYsKYiu0n5whINJsfTSQlfsklls9v6dVlymF=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOIQ7tfkvb-KhJWCOD7wbISeQKxPthYhqEPzKoe7N9P2L5_vxxRkX6DUkz3IUG3JMNYmxl_kP8pyOOCGpil_wmu4sqhP_uBl3h8qcrMxMyAv2BqPc6UPBVUJwkbLq9ijInF4-u-5unihPDd8b3w0I5X=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMV81NXJPQrWg53jdcoRiunz0xVmOu3XAiplR8r8HLAbTH-NMuNQgiOeGGC3_s7kEXVrkZkl4MMT4annt093ZjQglCPBLQU1IjVFRvY4ty82Pm7DFJRrzDhEl4d7uctryzGCxKXw8kKNv5O9bD8l0mb=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPRsFYFcObYVLbhtdCb2D0mtSMcDM-NMaL5cXypthjc2nK-Ad7mQK2NXB9VNwLO510k-hHziCs89cCSXvVLp9Y_HBGG05mH58rFlOslro6m5PEcN_ufRC9UhQXABlUT1piZgTIab4KyvtLdxidC4698=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczM_P_2Jf6ZsLhMjRzb2MYZr1GJaqcK2bTJZB3qTGID9zLP8J4kl7XeLYcH-9a3qQv80kW0fFxzkGdtkQ2Y5eI9VD4tQ833LVOSVtnQYCeDtrGSUvGpLgUaZXawxcj8DmQdooV-2HdaWJpTv1CNMlpUL=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOx6Jx63c5I-dZ1fkrrj_0STU8x3fHlEOdWHWaPvEWIx_3SRbyWH1HZng-ugaCd5N_VKBhoPTWrKi9A6wl8LTau3SL07ZbO6mvy00rW5TNWikhtPQspYTUoh5fX_r6l5Ub08Hv8Vna1gPspPhFifxAu=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMxD79Y2YCTe93OVUNMFHq6IMNRjw0-81L3i28XoAms2lcW5mgtjrbHrqLIX63FIyrxQQC3pl-xtqTzEMfZvt93aRfb3Ic1UDpidCtQT5KnQGSHJtLg0LIif1LmEEr_4PX1zTjY-FxfL4Oiw8QGKh8C=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPSGhZ_oaQ9HlWXQ_8aZ616-FrFDxLg0DBIljnCqSKgc7Rx11tsWepxtdNXd4gIOoihhmtxL_KA9YC7vK_jUU4Gv_odNPAVcdsoCiEJawBoMNlaGc4NHLBcWSd576F8bEoEOP1Q0iFtDW2RyMTGKc1y=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPzHVdCyb4oC2uvfbAz8jg-2rzhV3jv-fO-RzIXiryBk3QwwrHVXils9FY_wqIX_zNAWbzZge_kh0UTp4J7Ah-d7xDfVhLMwPbKMxiSVzJnK7DJR34A35cydoRay09C6zK9UsS7rud4QLpJWuNuNtp9=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczO8gHw6z61UH94duLHclxC7gUfAZfF1r41YhA1HTWZHJT6hbSXy3EN2Yi8OT75-P5_kLngXvB9KIWDtpxe93QUscYdRej3-dFiaSWVVLKTH8S-3_I8CHkfdjh-EuRzozQw_zMCns7jP5IpKkKsvsyCh=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOOerAHbApQmsZ-8BUvi2cGXGnPC28lGQsexm8hs9fgOdN19k0ubDeMj_wOHkk-aMovu1nl85Ew_Trz8dpByNg3iek8dZjVgtgKf2MpbI5IMzbRLvNk434hqJzeR77H9v8U24dYsTwOkPIjIM3Pdqvy=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNuWMtv-g7uaMf2LlH6bCZ-6qHfBjGzIlhUG4fVJCU0I1F1GdSAPWjzndChhsmcC417wnTvP3YwFE-bsvrxE8iONvLeQr0FmGwlSutPHk3FOt5crWTtXcq-rjBJzzo6bJIqAc8ECWQKhJ8BRNgGbioM=w1920-h1080"

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