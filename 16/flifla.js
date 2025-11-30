var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOGUBmg3UldIjGzpckLsniUFJu9PfxMtRJk-lxY9cvWLFpYF_ZtOPo_svuXEfZBeSPAi-eyBZ0t4I8iRyd6BMNL1_z1nMPXBKK0hYfGzbVNJm6Uoqd0m7b-HhcQOVGtelQt42V3h8tXkXYk1GlsrqLR=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMg2-8ngBIt3UFFlemP6qCNQPI_Cng06xP1EAMPLJ4wt-OgzJYIwFG0vMe64CZgdeVcc6yCEhKEZgT8WkoSVqHUedJ_9ihQ8hQ5jD4InrhxNvv8yvSIonNX0wY1O9sLuri4uD8ZOc510VgtuLxbFZWs=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNqrDgBsSo5OltLiZIoBbnyU9oUIW72cM2m7nK3rVy-H-bUVTbn6C6zFGtWpcVEI3XbC2ZTNeISyQfxK2g_7FTEwM1v_38AC-DI9xDV3aVpJ6SP03rwgi7Vbfuwq8Qjt5GQ7Wa4qOOEHHuHIf8gQ3IN=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMPDiT37yzkvlEXTh3q5iUPdNfdPvceGL1G8lX2QVMrT8TcVzA8SBAM0nzfdctQ3MP4a7eqJFteFT8UxibXlumolmFHzKv0Xtq8aVYqSELPxHSfhNpFSBwoDcOzTtbeaf5PYHSXhebAFprEFZcfoLoS=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczO_Dk-kpTn0jOxVWkqsvVulXP0hN2ja07iP9m6LqKJ93FaFoKd0RfAOFp9Kuscups-mneXD2G2bfwSnZrge5rHfyWnj8wCkCG3VtBYW-WoLfl5LJQrWmH975wMPxcoyQiUgKqr0mwDHkFtjTgryP7cw=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPN8t4-BA_I3F-qOOttqFlNIcaRwGRAW7YCyVkT3Ss9io6wHi1oNxRKEhgCf6rBPGf_eg8yPH-KM7GrSSzaBiImuqldeTSpcDBDbY5ofWf5ijQc03BwOZL0mMSwvixz2kGvwJgyEaXV3eWraBoutzpX=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMoT57NrT4PoLPRSkFikG_PjnH4eL1orWtMqaj-VB7QTUwog-WiFX07IAcaYfzW7yXkAx0J9rO7OnqxWUyHjWBtB6V6Oz_2L8_zJvWI3x7lkb7VAGVj2uuOIFd4S-C7OQW8MPvE7avvM6Ap7p7iamI-=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOWfcQ5UiXJtG9jvGWt90ERAUJNT_9CBzOgWszVxV0K7Yqt6iWRQNevpCPBINusTGYOwbm084itWJWQHTotRftb8MSkoeQYij1JJhTXhniJKdk5shTw6hqMXDd_isY7emmuTNQf_YV4iXrfr63gorsF=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOdZMmA4QHAVfCN2bTDMSvSTPNmvPoz8XelWzjplKPZ0V278OSzp-ZXH73p0EhFxlLHbDsYI-UpJtXgiC49WGKc20HGwJBxP2P0WuEG-BfkyAeQQL506aLerauzmPMAu5LXdWxkPwcSymLQWiGdNX_S=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNDJN0gEfiFYRLkgMIgz7A9N88CamHt91pZrgE1hJ6iIP0ZrpCuG9exr3Q2t76MRmkrPyqaxrxH7w-iJEKQfr2DKistUIj2KiFetet8_K2HfO3rd2mU5c5TXf7HD85rR1tAC0p9Txc1c6GwqH-iknWG=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPxt7e9jj8syWN0_2_9npKWBb9jbUO1TH0GzZCo2YFfNlUV9leVcndawwnPxwuJD-BFf_RsQ3WuK4_0KBBFTSLg1VXKG1n1cw0QRPrj0kUMcWjtqzgO-6vD7NmIZXPhfxMHw9ZR1To0Z83NqowomPTT=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNKV6pKdNKije4DBr3ZXqC34_KcHJ59IcPNMZe5-qwtuiNMMf0nCQmxO_xcmAI3sUIsG8i0OaGvtZ_O4_dsQPv2bYPqKpiW1k4pTLrjEZ7CxhVYgNtI_FIO1_xERodPCsnGxnPIHyDrfR8-4whgIdRa=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNx4OyiAhDYWfwQ2ASzHfwys8lW7Cwxwyi1zOtkG460P7oTmOQQ2q0wy9bTik10goE44ZZQlxlgE8R12U9dhhIGFCvrAhUU4nU_aQtdEvKqW52E13aBnBqOWrcI8pBL_0JLxvMoU6_kJxtzO_AWM2Vs=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOniE8EKNHyUQFQ2dICTsCdCTycHBNpPwQvNtyHRLFq7PdZW7BOaHlirbalFQmhfajo59cyxrHZZQC_kgKY9ZCvux1wDwm_6wJnsO-AxJ5GXu_AgiJoA5yqbRfCMNqDXirYBLq3BTi3bkVX54Gvnx5c=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNoO6GQw3sliKGjSQUSm4ztY36eyf4NPrK7jETOqiovdGo83-L5BDRCmtLmBucz50MC9nsnZkFmXCwt3jnZwRd3SCUKV7w4otmzvyqiAblM1-X-TpK8irZn4WXAiaoYSpIdE40xbb5oXCRqLBkw4rxT=w1920-h1080"

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