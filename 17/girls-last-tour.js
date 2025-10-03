var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNQEbGwRpJuCRc_Z0sq9dP_A8D8NVlx9DFZZgYiWPk5ZcGKOqIAJsb99ppVBS3P6ZZweV3JpqkR1578g67BZ0tCtlQkDRW_OnIta_eAeFsZ6cgEsQjh2oQcIS4WRABqs6WixgrBWt2801cqPZEsWn2e=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMzmlu5W6Ve7lUxdvSHKn4Fqzm0PST5khd54poF5uVc2Je2gn4_iM0wAishAa250N8IXaEJCrlFk2hodEuGSTXnzgcHs2Gsa73GhaJ9A8riKDCs4F2--8KQ9zpttQ6Js7OLGxWO8dJAB9hiU7SGGe6a=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczORIQL5eDSIwMDtLAp1WQdulQoO_SDfPFrJfVw5I3sUHEU9XV2CMhyqGVeNTPqtMrvmZqfAiu0nye6j_623k-Cr4P67jxdyaGWOkG7XXTNgaDZgNmtOK3yDpizKzA7k4xMEym1wPRR5EyF0-ebLHn0C=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczP2_7qVvDIiat2qy-UbpxniT06uwDd6yKuS_U97YtdlwTxENsL2u1YcLpQKcnNmDz7CSt4M8rCW_bvyWF_mB2peYyHbOoF4CabxP8_M2x-q1SKunZPIbYr4GUP05-dLFXt7eFqDpXVlMVmf9mzusHI8=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNNczT66qpvGcvUKDIp9jhKpK4DUtGGS68yB2irr2MtSXE4WalQOUSuWp0yvuqPULK1432ydELdcQ2e63vNvugn5-7tuH0zrZzoGzj2KFl2EbzsZ9nRPPLyGRViXD2_asrnfxi0SGyMF52Q0zyf7H-D=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMn_VG1kVbjU_jNulSLBRNEVh_3wHZA0ckyemk66WvJvuhYTpbfwXsiTDPKj9uYjQpmoW80pb6GTiEN1oytQYNFviXHMuhwXrlHab_JWBY2Qr-ZHWtwohTDNPgQ8girFai7WxNJ995AdhYSit1-LJWC=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNUnvZuXPBZN3AVMjPXYL2wPzLA_v8_-xNxy_TJmN15JeGi-LW8cZxNKZUgn3k0_Ws1zMUM6BmEb3PghXnHOolO5t8hke57j9mvYu2Svs8gES0Gna9QGJ7oey1b2Ys_HHnfv8xU39FveGJNFKAsX8jq=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPCXBvT8F8OE53XDaFoyrzEGvT4K1cLKPwkkFnaelU0RQqEBDW77ue4dApmvd2C26WsWAE587G9KL8nP6j_uiO11tO-y3wotI1nnbiznE2lHPCZVbRgk5s4tcd-GTjxEbFI1BdPxuzCut-8GR8oUms_=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMzUK2nDkJNI00ByZh3Wy00VbzXEzndZGVDzmjCSFhulbU1MTngKdfkUilbUxKI1Ngj9qi1P_zj0l9KmEbCntnwkgI9yKCoBf6opwAdyqXw02dquBW7EnEvyUkB_65UIWbW0EMLmt5b13NbS0p2S0Xh=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPurx13p9SRAN4p_V_wzD3oNUxEjOEx2t2X0gRVYLre3jtC24Ovw5ihn4Ab_84wk34Qb1z1mv1Kzpp9DUtct0QRDQxsHkndHsnCR9HV94XeO7Md4Tel-Wg6qTeo69wIqm_8x4sEqbZK0_WrGrhUxRqG=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczO_mJbaOrD8e8Cv36qy4rLmJna6j_kZWN6qrd610JFgdEj-2Ygd8wJGjoNlWVJ9JI3g0MAHPcz4ofH3IGqFAHsl-dmgympkyNkJwgz3eRWh65EPPq8dEXKnxDVJ9F6J41sb7IgjKkaOz7TdlSCpZyKy=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPykfOfhH5L71IgQepnOFTWGlXSG_1DbfuZ_W18fJEeKeLG8KkduEeCZ6IsCILfIlqLRDju-3WZWVihQxTba2v6RavVHOZHOK161wKMSN6uqzYxla1-VwzQfz_PuyV41AqbUTrUjK9ubzkEzEEp22Hz=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNjV3i9vMO-jN7uPmhKZQcYp3exZ6DpZlgMnKch-YXobnsl9h973Zu50WIZiQWf-Tx1_vX-VeXCHIs9WvTAtdg7j0I9-MKnAMMfX2gYhF0GjwLGwKQIiyedTA9B8PIHu9yes8O1KDLTQqvnZWGqm5kb=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNG4jKHp51i2vWh3oyMxY223OgHD9r-j0i7NB2IwIV3rwUFIsx3EZ5k1wbab0P1LzPtOhN6X3WyjhNBy3Dc76jrFeBdBI394qp79V9ptRya3TTFmGD1t9J5o1civnlM-UDaw1IY4_WzQe0Fr36iRzkJ=w1920-h1080"

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