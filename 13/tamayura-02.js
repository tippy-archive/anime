var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPAutsmdUFeqKN4GUESP01qdHItuI6Nv193VncBm-K6xgd3H6S2lSH69ZShdhJ4_OdA0nwEWxy_haLXxYTQ79HoZV-jmC4Hhlp6p3EGuc4jEbQ2Y60pZPtmZbCBSqB6VNQBodlMfkRLvzMjbo072beU=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOX7I3SJDcHjDT0lJB9ekpc28dNNibUDSfI7RGRkGYYEwq6hgbhAWVeMDCrdCROzQts9A-Vx_Nh_xSHrWAJHkkLd6dIJ5IFhmXNooLsVUT7wv6-QNOZeb2V1F-BZkjn0SHSR-NwBb3I2J4o5DQqJPv7=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOvl2loQSME34DUgmwVxt9-LIzz1rlfZmDwGgrBCNkPgpMeQBiQCls2NjpYuLkkksSR5YPeUdap-YsidUIz6sIMT6glzJWfuHMoTGGQyOXVUvXQgnw0Fnd6qtI9U86oUya67syE8O3ZlQIC5HfLnY8d=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPSQ6xrPrbctoXghwZUHt_M_LGqdKKehS6ETxWwSEUBdNOURYhf67RUKI5ZhfmKscgeBjQkEAcGUvkBzoW5ckwoO3uQPkBK_KtVpd7a2mR3CCoNCTYBWE-ujaj4pdeAF7B7mkpRfy_HJFVe_BxqwSa6=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczM2TYe2Mu5cqKkKxHeMfRlbw_RRB7iGf1y126BjGNlWMzuQqDzwmq8KIzGpkodzn93TdWCipWV5pYq5sDawZqM4k79xsfRZEHTzsw7mOLrJRq6hayW86HO_iS7E4RDCDa6ekRhStqkLBehoyGpeTujf=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPKAE1k7dS1rzcfCOhR11EZrXPJvH19Llm_WA2pwJb3CxUscmoNNqawdZH9dPgArIYDDZdOSTgp9TliOjXi53AC8uWlqdn4OGVeY0zOwFp3c4pXdbF5J9WV3CihP0fA7TFz-O8bQ5vUb7eSAunYeLfH=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczN60rzn_LZ44sgN5s9tmIJi6My94qkiD0zxEgn4RSRw6-5xoNOjpyY12Z3vXcMCXZJgd4dd-Hf-n_9MjszV49k8TmSJR4GJtCWlIQNFyiYdptnCIiyVlsBAeSQwOOZSIJsn1wFdV27sFVNm4ty22sFY=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMKyRTMhU7sVm2HSCZ8N0djAYtMfgsLWRpPeVD4-gyuZwAjego7Ec90XKIAUquqCs-UeP3gmlJfWcrOYSiXSapurAHbhPNTemAnEqM5kBB45QkHYEBTQDDe0pgzAvfQ3SPDamh-_r500fpJdlbcZ-L5=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNl4EQKB_W8w8fxL8hXQAlhQBNdHITr41LtBr-TjOcuenDmr-7x4FoVS_H_O4SyqIgAnuIHze1juideYO-jJQtjOS5iHmhKHZB2USeNSMJKXYP3ve5l9tQMP9urKGvNOXMDZPwIA1LxfVXmB9_wSNIf=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOJfTghZpFuEvM4ZCp6MzNPRkpRDdgN-uyx2FoG433oXxbS9479CmjCCknkUo942Sv8rJqTdPngGCR4gc7CUo9iJ7LbYfiln1b074Z8JndIVXoUuJqka8TbngXrgWNw18w0wnCerjwRODgF62J7Tvms=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMluaJL4LqTcBiMFu8eCHn1f8h70I_-8Mnms2RVZilCvL7g3NBlOu8-N7s9Oto3HRDy7CEm0o3IkSOMteWbYLwfPabl_tJOxt-uuJB_LESInILcvUmI52qay6JyP-PDOQ04dOvbY0oi5IKTn6cD5MoQ=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNHG338BOcpbUMZu46qXkWDNiNlZ6qgmTrPQ6iYajni9EGd24kfQXNOv_iegjCc1nB3iUus9OWb6pq094AMTXGDCl1S9V39daL0Qxvchyt6Oz7eFFqsUFeHvJ9mav_Jodvl41F07XE-bqGbtoljWrji=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczN4f1IB1XGDRvNswYDyVLe8xDD5uzX-ggURjaVL2uUnG-sTgnVf7H9-kc6H32R344Kmu1sqgt5NhWagX2vbiBUz6ja3d-EepRFVPjChonXnLF113aGmiITSMI8NdDD54GfDGM7SnDzXGVmrXpQE2dby=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOzkQwKI2uPF-Ri_z2ZfnSOO6BEoUlM9lhwToz8i7XY2_fW97i9FFUoxYCHpnqD4446grJPDPZdVSVs6sKSGpFnNIf_C1MZKiLiQueZfRmGd6LobOKZzfWiD_CFhXVdoHA0sHHH3oGTsQJM6UT5Zks0=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczO86fnlzkqWeCDoniFh8c1DqlfY_Yk4_QTjeVH80JgSgQukYscPcV1w08MHg4H0VcWBZTxyfdk7kf7jWvYIk4r06jpwSCdj5wckErCj_UR7yupzl3S-0Nz6AtIZlos8rKkgumK5VskkJZ9psNvVtE-M=w1920-h1080"

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