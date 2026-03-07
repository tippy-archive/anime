var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOfqU4ZkQc-FEJvmjhdeaZ821HkHArNIJw1bNbh75LsqwEgueuLuLACyuWY3XpGmfZ8QAGfw08xQRkUFS4m2RA4s33O0dYe3ClcAUynZ_ua1n-NgwsQcGXxh6hDsKhPGmaNHSX9uCHdQDNzJyWf355Z=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNM8UbVWk9anAaYk-H-IfVpIMraV3r4UztIayVVM2SuFqVMCKnwfkL2eQQEr47YcuHmuVLTsu6EvGbHjwXWBIjc49NoU0tUyw745GoOyBzHUgvgLx06vlVEWtlHGujfNSgHTzw-nf9zQS2BPUOHFrTx=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNklfWDcVA0nRRK66JWUYgT8LnS_gN-W1VFML-a3vPepXvixvPgAoO7CI3uTqgbvYlObTESJicxxrsJKueFy6NkEgs_dz3HIRDWps6z0h1B5-TILy9hgnV0zyAz-dEFmi_xMlKsCjg97tPRcdndMEpm=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczN5R1MmEXaK0Xeq_sfYe2KksxPlffR7eQDCu56zuyCtzGeUqwZiJvWO0UWm0vVdGfK6vAAMyxpOzCR8kp9fzEaROuMC7BOizu5xbEMPsjrRgt2GlwQGDuvK-e-0Vk715x8Hme2jobjHOkR5esvsKpdK=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMzmrKA-_-ghQeyOaUyu7iXifBZclsdmbCsB6VJ-nIyJocbOAcJJAsZTCbhfrstw6LE2FE-2qLnnalVmxejEGDG7a1tY0G2kp9Sbvo9A1F3Y2aaP6PbpNTcihEA00VYTiwXO07RUyFEamtMLOqIFGEP=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOW1K58UFWqycDatfoU87cYfcRgRMeBv1h2ZAZLP1GLICfpAh7XuNmTmSl89wperEPS5xjj6RZw5_ksZAgdl04IwkGZBlHE0LYStvgKCWlu5CBP9lYvHvPmeD0FsE6yjvitEpXgjHH--CvQNONVTQLP=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPfbFwlrb24ReHGmGs8qSEDzcsfw4Xgy5_TPLKGXWPCrkDkrudfXBP-gZBZtGEQmwN6wgKBDNG3hHwYal5w6iuKeDi-VB4dQFxdAneZrJ98WyXtoOkKRaEmq7NBWoS0gt3ZPib8Sn1TzXBcnbDkx_mg=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMZjytX3MkGdif7hR_RAkbK5XLMLPwpYknKAvYtHQ0vapbWAOZ3pvCA8oLw59pgqkWIRXGTO5wLlRat3GuOroWEUSlwoqeMEg-3h4oX0yfrGEYbP3HcbE8yTnv4EPC3it-Jiu5aq-Rmj-_vgix-xvBc=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPjJ_p_1Npf0E3NQul1AIFSqqJzShIk5dM-WweK4MChNP04-ddOpOAy32zovF0IlOp1Of7Txj2pIzbIXY1Bg-RJUBhwzgoz4rHpvOiKQdES55GeUN05hbTT9xIFEPnv8v0IXCs3tfYwxm00GpeC8uoo=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPTqbEAOOoecFj_VV24l_W6hso-fJE6mERef7x4uMR1JBsa32yQzeIQCIAwJuaR4mXdwyV-Rg96wRKzHa2ru0SEqJ6HqphnDpSV2BduWfRsoTml9A5ImyBw77gARt3UWDzA2z5w17kPWWZfmguG-KXZ=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczO4l0SCIMz1oJuHh3FeExp9a2mL6vPwxPOxK99S4x2epkarY-KXihAYQfyHV-Dw4alFwsFLqd-9vCRG7WU3U8coDazUH7lTl-EZ3moG4IW_GdBTBF8naNF148bpnwP29WdvW6C23HSm2dpbLqYRKIbK=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOrTYDsZIlMwCW0KEt4HHWR-t_UdDRwMmR_m2rYvIt_Gc7HknX4w9cwRXqYARoXAcAFereiiOmCDwErRiaEqfSrZ_9rYjFgvRaNwJliw_gVun7wb1SEHEUFvuQOs6xUeLfsj37XbXe5s6A03Bnn__vP=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczN7xc8iwrpD4brGchhvZp4f5z9mtrfNjgERvEiCH9kOL57oYN6H_WdeU-K8VprOx4CKHqOonlSbMxbNfL_M1APbDOXvxj_OtV7b9VSvQLKuW6owzKIU0-wysOP1Qz8frqfdBnHOjUKHdXV3TAMmr3Kx=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPtsE2Gv91t83WC68yHnPVmUBoxFyMc8gymyY-zkiZCUhu6P1ZlTG5JdgWfKGUDeWP9jjjH5WXJVhi93N5BlvCaY7eZIZaGFMu_S51dIJHGf-tOnEO-KTQx3M0E-CSlV9byveydgd6hyrt-4Dn0-GSy=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPRMcdm5AtdswVj_Z5dfnQAoImtVoej8BQwLY0GbTiOopvlZTifBcHX6s3sgO_qAWXpMcApKmd5uuZFLXvqqN9yxcqTDhykIbis9qMU-XthDopgLt93ZYbxTm61Q7Wd2PdMMV-f1H78YVbli4b8HQVu=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOoPfPW5tZNTe1VTjgXIOHMfINXWqbtiDViUb41u6exHd-E42R6QYAEPof6Ne1bshxGCYhtaD-jC5t1wcDmuo0WudYKhRtztHL41wiDlWzYPclgCyCreS_ycnmZqVf68zqEcUvW6mvp7vNgzJXs0W-h=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOzF-ArlRCXIhWur8kN3450KMSOt63R-mojyaJjxBsOJ3-iNvWd3BuOLQlD-TMjTXDz7dQFYMmBFkabJjesXzZ2_KfpqRFAM5TZp5aWZWTPU3v925kd1ze3qB312VMcZOTioX7lPiWtcI23G-gVzduK=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOvcSMOj5Q8ge3lwt6hTuVDpYY_alOmLzMT_sdeA5iWFX1SINKbkBrHK7oRv9Vj8NfuAoExgYbUGrfNypHDAZaGPgNFS0g4bQ-1yIyVEVqUtLmlvLNdqRc4MCzWkFBIMlYusqizhVnGtJXfDvfg5OEs=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczPohV1nBRSHr8d89LRl1JCQ3tpr590X0EfkfqtxleQYP27TRhoofwqPsn7-zEKe9mszTyiKlokAe90cxemA219HvxIEDAs1kUIWi5LM9qbdYUDRoyu_8myaZybfRjzjTESkcWuVWfvBjATnjn4AoXS7=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczNhC_AgfaYaAigHAWT0K7FydJyyxIIsfsWUVWDHl13kA1oFItfExCztUjvwzMuX9MJcJ4CEMDDUIgWwNTCLBjJW0WRUOYh45lOygjeJmAh7xmH60p6VSuVFxMiQhFcU95_Mk-TMjlbhYgFIMmn6dCAE=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczOoDl3eWWf_Qq-Sct095rRp5YAGfLtyixmirB4wGyIUQUxBYNZIcSb_wpfeCOKAFu3BA69gLi3UagO06IFUhAEwPVfyq8vOlo-srtuGlKlx9DEfQ28HAyRuPPFhRFOAme_FLPP-Qqa8QLsGT-zoUS62=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczOytUL-Jc5UIWlur3Cs12AjoeguJ1vlGgHrUI6vG9YyzJAvsP-WPvLl-2Rse0cjQ_5f7TyZw6iVgHPRmKxZFK6mnGZmhEPsqLTVaIhfjW-AHi9_Rd_EfzO1gfXZ2zRqzZUY0JHlx-05BRhsR5YZ0_Xp=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczN-LRsSTgmxN62Gk4cqUSPJrhhU4ABntD5Ytq-bNuzEaWbs_yQgtQvHIEyAUjy_JXhKmE4W8dLgisu_QyKaUv7h9rhxIzhom_lNS4ukl0GjWVhY4rpgjVZ9-sC5KzC4O31nDoTkOJAdsa5lALNwVdBX=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczO8YMQ7j40HVfQSE9y1IS1183ZRqaXSWwiEUNDO3lL0jZWtuqWnQS8Gz9P36HE42dDa2tWMGl2Q27HzYedARhW-Etpkw-yE6dHVFnbQL4gRZCPXLa12nbaesnJs7dQVKbRIWer4We9I061qXJhlErDn=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczOLBH0p0bJd6RKTv-z-NX_FcSSIPmXCr5iAcVptwmJGm6X0LmpPM7AiHXUTAZdVkRCF56YwwNuW8oZN7bJ-6kX3iiyVe8ChG8pjjphBXcPYI2eQVSOv5y8lvoPxdmUi0ubTIE28VWoKReNiKIWHowzV=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczOjabIEBRo4rrH8wezEGF6QJYDJofYkp4FUAqTQ9TLJQT9yECieQsLyGfI66UhArO6MQRtoDWOKhYrJgT4knp2mBF-tI55ark0rdc0dmtZlRz_CjkarYPerlPxIXafP5Oq9Q-eNYI6Y0xo6YGpRGbRo=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczNMrmjJ8X8PLeWiFsGQjztQRHi1Gu1G8CXWpfZGLquUUkRXG9R9Mghr1uFwLMCpsGr6PyZYnQr7FJR7Qzgi3Jsvz40vIbafzqP7UGx22jvmJKge7KocxHmQeorAE-CiD0OE-HHaGWBUxLrgnWU_xzSM=w1920-h1080"

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