var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPmF5oVTG9JW6RdMtNbSEW_GUzvh0FSWsOaM0slLPoXq7HhiUGfhGfY3D9iF5fsDgDcTUolCUikjGkdqmmZJ1r-mUjovUYwLcPtL5jr9YBvgPC7c_TUTxO4IWyJclxo1A5N6UbKMMX9LUHqy8XYhsL9=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOQXPgISOopx0iGw4sZljFGvAtPyJI9VO_DdR2PzoMmJZElGAEzK1f0uvf0dOLZJtTvpkdqq7aFeKahU1rZttp6umiIoqnBf6AyP7BVRoDajoGVKLeOzULGRvlSYlUq8N5w9Yopc3Z3s75w2NVo8IP0=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczO-IsupLBdToRvWnWzuxHJ9TGO4uE22pE5sS4R0p7JVCP3oJltff4V40nR-I51J-G8Nm9PCLrxcVsGN-50tR8MHM5rRQ4ympLd22cGZD_pDIaqTnaEz9dA3iMzzp9heKOJkPOOPcluyxuigGiup5DlQ=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNTpnanujpBBpXSnDibtXPk36b1kgFf7rcGPQqQYS1GlfBly3teU6qFwgqcioGSYK6NMdHQjjyBlp5vYOc_QlCyxmgTEdoYnkop_PZ2CGb8c2Un6Fo5Fn2p88MT6cUuWIW812H-zEOFucTPmAhh4Xyo=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNSBfS_n2JbPu2Btr54mLsEtcNS-qVE47iG77XxlvaliqmG7jV7YmE8xlO42dOEJNEp5H15i-Jcg6vzcZUs-E6FAyiCjxg8XpYQs8Z7oz9japdd_kb6qSG3Zhl-xD4mAROBp94yJemMKgAzocwM62s5=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczMER32EXre-Cry9z8fXFnRiGnz_eDKzAAlWDv-HDBrWWdAKFSOVYnUrvVuFASFtQ6y3upzUYd0jBUlPgo5_0hVzqYy3rev0PGMwRGreSSq5LFSP1BbdrR-VmP8a5nuSAzXCwGzM_V60rhTutEvZNuy7=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOhFTgD3-IJ-oQl3bEZ7QpAw4X14SoujpMcDv9qRRir8OoeJhKO4y4IuaB4K_pLk4Z_DdH1BARozC0qVnO0xFB-fzjgswHeyPREVg9I5GrrvWyawkUWiFjEoPxNeBLKVYhYxm6WRfb8bIYg_NAjQIu4=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMigduvlTk_4tyRM7uo3X5iE0OiZhdVgg7ckEi-3_MVObf2gpcNDYQLXuAVB8XIWClRvp7dPj8IIat-Iz30qGVEQrOMFgybDtuSO6yHAOQbJpGGYCXXh2ZyhzfCBIvXTOp6wEHLTdUb2XSAv6sBc-2E=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNk61M-9wLiTjcGPbZUrsUSjof3PJcRfmiEhZhGEsdNmjQrL_HIFH6zlwjolg6SmxsdMb5OTiGKSOXJOxViAgoc-siFGhgpwO4DBNAdoUmah_fwvhO-TQVVKgu5fKNTlTdW1xMcMO9qFmgoZ_myg1gE=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczM_iObVblmAPUKIiTC3aCSkih_zZ6UG6htKiA_PodWZDN0PBJQuy87WecUc2C3y7nQ1iaURCuSD4EqivUa1mu9wu_KdaIH-JCzVqsysJD0Y1Qg8jLO2maoDG-mGRjg7NQGg4VNNVKA84QI60WlozzYg=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPAulNGUzyEnnJi4FCTcKeNmrOVNfhfoAdFkz7arVwWYi9ofkkWZkobGYEgK0YdeHEEaLcd7regAGPI61lG4Oj1UukQ6GLrV3gq85yb7JctLmjoSE-GrOmmCRCEB3VXrxHVthKZJNODsnORQnSYPpO3=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczP9MNZ_KuAhWjGFLopL9CbXriVPcJ_b5UUtaYseg_Y9HXCigDfYBUVErWUBG57JK5Sp2d2yZii0mrKLvDdY0_8mHqR7vBbl8biz-d7NmW78ptIv9CR9zs8iI42OXw_ZySaG9oy7VBLIuv5PjWcH1aRt=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPcmVcZoxMco576_nDsup8016T3O1zcPEE8bCKXQFIPiwTq9k8BWTnb6aIiX-_yoIcysD0DmxcIk1A_EF78foiK5rg5NzYxWvzcu7hZB4vnNrOYAKfyRjZmhnflaZGVoFYISWeivPN9iPuHYmraUduV=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczP7BJ5anOfx-mspAuBue2WJs2Rm47NWOaGNgCtGh5NjCGgUDWGgJNuohWyYSeTEoDgbkLKYIF3RlmjE1Zj7WbukstM07CgoPO0FJTcUnYYfhL9zRRjiSYmKpcNgB-AUQCp4M9uIUjbF8eAZEb9x5QBk=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczOBszS9ud_9PRPTgAtSWlmbqOb5WjhDuuIWxbt0V8Ot6QYbVtVnL1sql3X7V2sVpa0rT08x_e1Vdl4re1BHqdTSY-uMWFJSAT-qa2JvhcfvvM3cOCrccKSMl84pxIMEHR0mZ_YjyFLC_71XiqHHWl3_=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPr1y4ZMpbJma3YaDaXxSVG2X5uCXmsgJ-j8Y3Rt-jnyb3w9RtGBsBe2_tZKNy-qbqKHa92mf5hEU_Dq4nxsHvDjjYzZArgkZTsLZ_ZeU6M63JTiisW4sl7uXN4mrBl9qn70nzfDWyfu6qNplgv2GKO=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczMFZFVQ7KeW8ZlYuiD8ZRiPIkVqnDkIq7Vuf06YfYDr7R_j_W2zsK2-5ytpgxenv3T9_Tl9S0f17bXXtal5PFhrkRbkAvUIeVpn9nEmkh5LRbJ86HfkocEc5SWtn3fN4uHlFknbjBfnwVsBYhTf9Fhk=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOe8ZWQXF6R1Pi-tsYtAJBHis8CYx6cJ5Sw3xVOJHlanRrGtcp-AWZ_isVcQI_ncL3VL5mGR1x0AMtbnCIH_Ao-HHLAr1wWcm1BkzXpwZiu0Jn1ewUP4BM85RziiEhh-SN607t7FK_0hgQgDPUYQXv9=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczMBy-ADcIkItZWxopC4LVaJcZtv6NOXY38OveytymTpZc3LZn2-kO-tW7X0L-fbyP-FItlKeXe2wwvigsugMyE3HSlwlFNEZS99Cl5HeDkJFHgrsLwjaXNV8yqmTpAVu_gLm_1Poo78ozRBk2JM9_jj=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczPR4FuFOVvHsPCeCyoixWBeIjmerNFhlJWQolNObmlXSJhXEeWBCwH7Gu6fc3h5BLoIWFDoK_cVAL-vlGXFeV-ii3PNVXB7Va3aFIfAvhWN5emizv5LgAGeVvz6HNzVvkCGK7YQhmQX9PcqtkoMgL5i=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczOtRShxuV-8V7hRtwmT-NMQcEVqCGtvARujYJ4f6A4ERBdYERiO1KXov_TNxJRZKsPXg9_H08YxPhn3AH1GdmNfl_ubCfUyJ7jAr0TIlQSYiD095Mxf2HEqz61maeHcnhCnxgOfEuSBfmqnPxNRql_E=w1920-h1080"

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