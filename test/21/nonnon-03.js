var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPNNKrrGwP0P7_2JI9l-4VPEM_Ol6le4nMc303WJ0hUPg3OmaWdsxpBPqg2sJx0WeppzskkVjt5CiJHtOD4rfV7kdnvqZqjXturF4zHQfkAaSgx8-hvo2AG0JSEHHC7bozYB0RgNCbYDB4ylfvCcYxM=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOo9e3-uV_CAO-44OhVdVsnT0C8565zfH1YYC7-AyuanY6QPZOqPE3rBlLH0OM2zSMm4hbNy9qeJg2LNAt39EMFD_XM05MMnjsKeyHWd8T_TD-Y5zhr6mFxhG1Hy8xXilU3kj5oext1NCkcLHcY6Vcv=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNItbfXZDQx93TH6nyhkawsY-83TC_gug6M6n1Mq_kh2-6U91__DlnFfxxbRzfaqrhAhUpVrstavL_k22cmjTMCkeYZPTQyn_a-m0UVYa2dxgzlvRRVuHAaDCUqoxyUzLwGRKVkokDw7D5vT90VEumZ=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczM8vGfYrCbCHiD5NYCfTiSlCFbqUi_C4tVvkYJQYKOJJqE2y4MPJQvQQf6x-QRTIrjd9PJmLGMOTJWt6KjeqdlqS_Xb52A2C1-TzpeD44mXXCnzUqxK85H37SBBUmyi2iOvR6U_wwl1_QmlJUS-OA3T=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMG-mKLuXQPSediidty9c2ODaNtPJUqs1OawLuJag-o5KPpk1-meK8T_DORbjF3An8SAVbSBf84MqB2xiKsw9u5YRp2F6x-BpP_fkhPa-LeN3r2m03z3_UMBvM_h4-W-25T-hd-UURIJYXOcSy_Qn9s=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczO1gAxG73jHG6292NjVJAG2KDB_So-MvjcGdYDrRvzMWDvpv4BziBpDrjmIwtjlkMy5wutJGIkwE0ydW1QPANa_LD8m6rWfbnp5SxpUmfET7sDEYitCfkvn6-Tkebve-UYK7FZAsY8hCm31Y9GYFbUk=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMY73FnDELdt4_sIJE9xiXroItJ9o6AWZSLHc4jQ9zSGpRAV0cwgJCmd7pIecUyWNcxd8UNPbeFytB5ntYoTGOho0OKVpuyXlYbsWoRg-C8MKfve_IyXJ_mEBdmSKBQJcd2VwqashBYScOn-HFiOWg3=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPM_Pl6XNT7tMncEHFSnMvTiv2eCa9McJvwkCMJYZyf2iaeKw4aJOq-YGhi9h03u0cZahEc00IY72muICltT3mDDHGhjZJz3KxAALGhZtXeTAQSFdjQWY36jcazKrnhWF4B7xT5QrFGzVgANWsiTBUG=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMSTaVE7VkRTyAdmJoGKCxz3lsGFSn3DGTR2t8Cz23l_9Hx7WexCEZv_Cq3E8_KzZwJ8zRQn1EFolp61_5pVPrWoZudomqEvWcchRDGWmR0DU0TazXa6kzjEwNMoeSLtDc_PGgA3700-vToJg-cl1iK=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPJnV0q0g8AZH31QpS4Y21bHSuvTGXOXrcFBX9rt24Z5dS8XfGi7hE68kd8ZV-NCSvciJZm5ORBX-x_Kw5LSiIMgJ8UtaP4iYjR80VE5WNl78QS-FlhsWUTEmfw_ElC0pluHHQt2qQXo3FJRrsvbroQ=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMgZITNcYFC8sAjottx6oeqAPbA0fFqHJj_PZf3FMC3ScoWyJ8GHGG0dHfaPYe0rzeMJ8bVwVWHGnJRHCtT5qRg0FsFAJcjmK_7psCx3xGsQ7qL1Nzo93GYFqg1CAX119TbAU_eXmbIbPuaqbY-AOSj=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPtCv1rA_78sRV7Hjh5ZxkJooQLBMkmS1R5922qx1balFLTgTGSs9kKVlemXrbQgLGyG1J8xX8jXsvsV_l-o618caW75FZB6w4kgL5zOzrzRImtATvAbukfY03p-L27a_JSF1L_-ffqfdrO2g17cgRl=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOcEvESxKsyLQsPPZJbjcJP3a0OGVWIWQ91SRPD6KxN3sSeXIxL0YI9esDbvscwdyZyNK5bPFWeBaOAVy7H0wc1DrgBwgX1pSYiivq-4TZ7EysHW9RVrfS3M2EjICFuCoB71gbWBsjrFMLIM19ej6nj=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMWxS-OeRmEQ9eJGvn_MAVe4V-3A3iR4CwccJwHkVf6TmUKIhmP3tVjoumG8XzbxwPeKPy2NkVmo84A7NJZsIb-pEBiz3CMb57GAsOEZENUhmrqf3MCv4BiwoGBHjdptNDapRtiRutZMozfb18e0WSf=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNhe9VfcLpUkFTLT2beKwztRkD72ryVW47WIuYGk68wOiCIrpHmQsEWf7F9IyCFr9D_NbXZCyxNxk-hY-TNHP3Kxd5DzwOEjBYwrnBs4kZ5FFKQBmhVTOnoryUa6yJBmspxFGrl55OuW9xG7Dcu7wc5=w1920-h1080"

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