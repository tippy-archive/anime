var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMYDDFNe-zPUKTXpsH4jLLkh2UIPkgZNUa0v9gJ9v7YpQrxWdRm9q5zKY4ldpvoy6ZKCGLk6WQmu0aOrifL5LNeY28imDFuq3H77CIgMHINBxGM51C1ZVjOQcueGDXd2uFGuEMFbpSCimyt6Zc5F-kv=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOjZRo14OEB6QCup4KBJpD30m75IBRUJeSTCQozNS8uEAapre9sIZiB0ESIVyQmvOKd01WOzDYFFzUvfkBYp3q53naCCMufNgG7hOPPRZqAcoaHAUOTCdVgqP1HbarwSKmWVWG1-0D4TEsqj1D74UyX=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczP85iTwVrEN8cghLd50G7y7x7wpmlqaKUQSs488BxZgkc0rhaJ4WAdmqSwfpzXnrvcaJEJa82xh63G2aTVTULMQe0WSbwmj1fNuRKTqmGZL-62vFKkmifr3CFuhhb2QnsEY-m63ZaQckUVebWkNr32W=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOl1qOa6sxgHygMTf5Gn0DsEnWhn-tPZ1V81W1hyV21e_HhNGhoTIlc0A234KP6lmQzOsoMu2f4OgJ_QtM1yZefOHbO5Nq17xMxiuc5EvjulPLEgxCkOFNLWOMre8oTKZQa4gII5fot4uY0g8o2LNOx=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMaaVjC7ovxqTYKqbjby6K06eAcRo96Uie8BSERsqpbyiy1qMGIS6xXm8RIQJK1OCo9baT9m376L3LsRBvDUoJyYjiJ5joHNt79dxmJ4tTzgy697Sizucb0IUjDlwojrILrTOaBXyDxez4BYmN6dgI7=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOqO9D3CBDkaOByKWoDeNjeXupYegs3XYylxx5gR_oj3RBbkQ8FrTnE5DijBA1vgmShJyKLReDJbQa2_d8eSQgufXJCQaGYG9zYLDGpkw-soF0pEwG0QjoelVFcH7ClzjUrlrdNso7BZTxF7Of6rOrO=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczP-ujaAFYjNDLWVQ6Du4bUxxwna0VBBJWTHYxrNDjfYzzh2gTHfjPW4e_alvTuKmSrKMM0x6Ugxn1evn5Gg7g7hSky5JRb63qH8wwRoZfsnQUUynzo88aXekn7YledWO9zwLe2hNcXLze0T-4syo8_5=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMqDNAFuIEvw6HCftxBMIh3BWOypgOpULrODkEsyjXv3nGOguknqy-DJ7WG-G7RLIUSHpmmSCIh7opPJmZiq4QuTWrySdbenrd3_UPC-G0rxJFdsm-y4B3ciypYhT0esy87qylDXhq_4x-DC6xcOxav=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMAT3QqX6j4yXptzIZduY_cXzc8ZnMWx95olwGaillsloNjl_-jjUpsIPNEsB-Fy4bzpB7uTaZssurY-GKgBt-xaeMk9sIpWitRGcqBOtZJTojKMdRy7ZRD3zhcOnXHg-DZNl7_ZFoHtQ4AHvZbk7Sa=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczO9X5wQGCpJ1fx5v9IKEju_nTQBhwiRZtfZUOugmCcpPQSc_GUCAjsrPRKi26htwwKy8coQUqK8JQyRsZDQXEqME35TUPRu7QH2kZqO03EJUPbCEpuoRGQM2bQQImUPPGdTWcnmsk74klz6J8AT1l2G=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN9QrWZT2WQ6WRH0TFc7_OSf4lcdx78lthwIQ752dEzTUFUj4q0AoqK1nSXp2oV-xyhF_lKZfJ1CSlhUfs5trp-OmXu0BusBShzp3jjYfbBbFYilNF9xUGy4QpJsOrBktLUAputaR-ILyjsYMeJCoT4=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczN9XTzX-3JqNZa9gFfA5gvitlgXqD4XC9Oa8k632SQaRAfEoMLEjK7an2UhLCAXKx5J8hoBMbnDOTLm3lA59xTAwQj74QRvbN6JOcPhjXGDtIlPhznUgoJeo4GusvqLXGUyHX8C6JeG8tfrC3WEumtl=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNSkmL2XqINH9pihHZMFPNsUy2ZGpbvly9YTk9_EPacvLsmFLY7r8pvWCPhYgwKTdbyndmMHhBcAZJbgfF_YfgYkXpDOJlrGCagkGsndgVjJ_8YqWIqBappodsIdMhP8Kq-kxg27EgBEN5J-VgBSYUt=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPOtFPuwmr4-1o_hL2h2Ozs0aVaDFf887qUByFSgUNq3hFUJp8hIJnZfo6HS_eg_9J9imOzfXpzeN5cfzOEE1wd2mHnaHxPUa44xOQzYw_hFSszujbn5sUTK1K3NR9NQdKLkCjPg1q6ky1bdxNeUwSd=w1920-h1080"

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