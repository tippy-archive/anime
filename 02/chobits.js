var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczO3CFf8XtbcgR3902or-7FjSx40WhwgEsGKJYPRB7d518eJUyTdThMliqvRieOL9hwgbaZXJM-XGUOjqImVSvwqgcWAHSibpvG-TxXvZx_d7xKFCMJ_ZG_QYDUnJLgRlWe_LcMkjiw5QC7otNO0JYw7=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOlbRkylJ0fs8QS0rQGU7igHOeGnlQsOs8KeA3dxXZu7dOwpXF4GXnVPCLMfBWof7-abJeh_ppIixnP8wHPS0_8-Ue955wTVMt4hgga6KqNNI-M4UpC_WZHmf1QaY2PT9tApFq0dst_yWWi5u23hABy=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOWT0syH7DroBsxSx_qOXkIvlCtBYhJoLFSVgl3C4x411I0fkXQk3s-CXzOJSzKauQm6v7X5jQ1bFZkwsEzln7fg8bgh7ZixI7GNQeCEj_nw44fgZw3-312rg0Yqe8hSo24RD8hq4g8c8oagJVwiJTU=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMo1XRBXaCeSX-64DsaRfJYdncuuzegUB6giNcQIM_EyCKTi-vlPAg_LSbbnrwSizwi4xXkMN1sgTD6xUHt27q8-0zCszAJkrIJ6WccAClmcjhaDeHf9PchouD52SEBvF9GSB3IxlZ03cwlXrt4K_HI=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOBx21ZEICq8W6gKeHeovapczP4H0k4g4fMv27Ip98Yecusqjmt165ablrDmf0iQWkSmn5fUREg83Vue5ltu1yfGrOf7n4K8kwk752-d4JG7JWtcRkNzC-imTXdFArktg0Bj7PgxiKDMTI7XWix85W4=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOhQaIGLvUhNM2nwDgLssI6rwUcXhuCtCpz7pEtOW58xPlOwZiFUolA4BEtOhiAeMLtCeCvnvygAo3PSgo4rP0BeL-yYMMpxzhT91sJeLmmD2j8_FctPGVLIjz7CurzYS94uWWuOriJzfjQHeG5jpVK=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMugTXJDzJWDnLr78it6CHhkthCLa79UgBWiV5x-gXEtQj6Ux6qGSnb19SXDTfsVyHKOrmPL9iFMis6ZoBkl-EaaMSAx-8jtBVsXISU-VAvDItKXmFXFZnQ_kCMgs_e897jydVw6kd-mNRXGOy2ytBa=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPdrTtOy8i6VA3yvWD4sg6HgLlP-O08lyoMZ5qNzY3x0qgQ_YnJcajfS59Rwvb02-IedzVgTRxCnYxRInFBeXlm75u1qHS5GRbjuglwSJww6Y-KoVDu9ut4LC7-iGr8liO3Gc30TsMLPV-ISFqlRLKA=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMS1q7tZ_6G5DIiW3tdjhtW-1c-xVAfoerNW14Gfbq2f0gSFij2qDLcYRsjo_p2WikSz4QdjrJ_d1if0jV_CQEXgBq-9oCXj0S-eTlBHXo30fnG-zbLBQLqB1dut1zdsP9LK-58akEnNo9ui_pbh_Wm=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczN0xj6JhVz1viePWlcqeXQ3hF5ajkrHsHB2M3q_og-7xAn9IUxfQ55ESuaDLvzSjgCnkz3X8zYEAKAQ4heGb4GxvAgLNh2K38G_1c2QINTGhwHAIhaPoa4SKRke5V31QHO4ZI1XOsC_H5Su2THF4hIp=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczP3MxVusehrgSoZNemkOcFo5ONeN9rZtWBwxfTZyaJ76_gOAgIi5HVPmQ8XIlnZdeJ1DetDYQgZfVOh1125RsHuUaRyautf5SFO9jFp66jhp1kc6APJd3YoN9yxce6ciSItoYTfGUtI70VGinGFxfcB=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMghCOg4Co4K2WLRk2zjSnUAkbyrORCf-oh51jtjhKsfPCYmLo45T1spFuEQNzlvxx3eLx8_rotMZeQFzHjlblM5A-DIaIbmTUOHxLnvJ2oF79zviOz3GbdbWXMtMpR-e8zAb2jcdtzh__V66-krSxk=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczM3bFlpS860XU1YQ47IjP2FOiq6NJFHvsZyTLADxoVS3PLPwJ7vCbRrPCTbMD5fva794a5b0fv1AYcSLmFvH9uT3y0VhhhCncck8iTK2KuWEF7OR__ZmsA4eseJ1igbz9UxZD4pJGR8c223brx3NwkU=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMy16tiJDUlPXFggcbaUJY_97kCtmzSDkhkazYQfJxFmx7HgGM8fYfOwNjCPrgF3TupfzdHxixrhk0316oO5wVzRLbRJVdNaC_CRpR24tv68pmCkXOK_5kOkwpqGDK63s1i4Vc_aMUHUvv3-sC9SfW7=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNcQM2KuWmL1TbShrVX2XERGQ8-i7_AfLJX7ncqMqd1O8wOGqZbpoN2suMe-Yj0grVkD5bvhOy0QlvWu8Gmg9JwziwmOzQnyL67fuBupOmvnlsVAl-Crp3cr-8Bfl3k5IA7S8KLUWucb6fs2hCyT3Ys=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczMZc63UxHZAao6olBlETi0EDK0gaoF0WVmH3pqHkyepO2oZM4yGD8Sn8nCdpL4iNVTBODLtDi7XED7nDgFRvVzEvqPP9DrA0qVWmCPl8VlIe-pt060Bdt7g0nWqvHC7a5iMjadNqLa9wRlMCabc_1EF=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOPo7_LeTUyHHTGX9jfTY3oohuU62oXLc9CGlVJtrhVvM0ZpjPmsR9MOMIeE5cawrABVfS2veI910LlHcHr8WVHpe4RjYDz-YQs0x_ci7ylXTAOE7TgQAlJ_ehbw0c1LdJpVHXPHcRhtp1IbY33sYHl=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczNjcGoLoK86C5ZHV_xsuAuNa4Uv0JrtfXKwxXLPzgSw5vohOZG2jOHA_Ic4YmSoKdVBExzAOaJYRliG7sv_bKCc2LuW1pnQL7io-AMJC8Ef85G8GyNIs2G8J8NcASlpk1OLTJPKI7UPqItCWc1HcS0q=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczNk4E-1o6rU28sspFbOH03ZnZ8BX013GhIhQLPye_lIieoj11pxJGuwP9DoSh4rYCDnf_ET2_z8SRHOjrdPfnvMhQ8whl-LTLiwXiYKmzkJ6aArwqmMF8s_tX0_e3_20JQ_Q723XNODqy4F3y00FwlE=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczNhRk5ua4oTtQoRC9mAjEwo9nLpbYl5QKu8yHdPXDLPWPa-adTUigttsB7LvysJndhti8eKez-6DTHs04BM3KbA8iVnqyLk5-v7bhLUhEo0o7qeUWjRkQppVFvjj2GkCDqbU45VPh2ZhLFlV_guBlAW=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczOiamlubgprHpR1EAJbrlsnSxvWBPIeNUsXehw2h6B5RUZ7vclakUv68kF5KLQkqtJNx0jzcFbheL9NYCk0O2xm6Wmhpvk0cnXZzzUMHbFDzdEXEYkbFahLjJdAPPQhkRjJGgTo7aMEFIc1aAHqi7YH=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczMDVAs2oKjJaTehkeFv2ztvcx4nAnH5fkAsllUSNr-z1-vQi64QXN3qDlII2m2eDBIvH2eSYIStmXvY_hVBaiGQ9tCsuB3e40_DAB8QerkEzjvJduVIsws_znPwk0z0LV3pXKkU_rH7TBN7erY84tr-=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczPLWk5JGGdraVsztfqi3pZuLN52r2u7gsrPLAN31eUFn1uSyKzSBncdS14_mklxIVdhh8gxAXm0w1qbZgs4ajv1GLAxUWMDkmpumf6uNNojLzyC5p0i_s_Ywo94c--DQBpOoQ2ziKF7i1EfiYyvOHBe=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczM-oYbIo6974vVSQHMP6CR_j0miKGVsX_VGU0x_K9vYzmDbRby4x-opQ6fKxAsVL3HW2B3Lrxx0THjsQa80o__g7Xjul-ua4IsT2u2QqEop4cZBYQvhbYHbUCb0KKEbUBkgDFT87uHM7qZn8LjLmLy2=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczO0sEVGqw4yuOkBqlnsBXMPFDUzXXqXy4nKS4nxBKiDdXtkzEQtwIQM6dj_t0b5oL8G4Egp0T7cUNQOjxsHyEW2ddjz6WMxaQVjAAnND6PNZPdL1KxCmM6NSmDt9MhWlr6xoNa-ccm5AVA4ZtFsxHdr=w1920-h1080"

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