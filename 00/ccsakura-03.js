var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1IeZRZ2nTIK4Q5Wuvt_al4ZpNoWPfXYn6"
randomimages[1] = "https://lh3.google.com/u/0/d/1hZO5Dp_vncNqVjyY8bi5UhNbYpTLs-hh"
randomimages[2] = "https://lh3.google.com/u/0/d/1FNrprJaPx8rSQ5-dm_-QwfQsjre9BIwx"
randomimages[3] = "https://lh3.google.com/u/0/d/13-LCDEObwA4Pc4zZnyqt6RS5GSg6XHj-"
randomimages[4] = "https://lh3.google.com/u/0/d/1eZpfjLEOttZyoEEfSVlSqZdjN89FxHGX"
randomimages[5] = "https://lh3.google.com/u/0/d/1snbduH-0OWq49J_fo7GliS9Qrv9MeLjr"
randomimages[6] = "https://lh3.google.com/u/0/d/1bXo5yAEzodNHfPLML0ToSuCEbu70oKm6"
randomimages[7] = "https://lh3.google.com/u/0/d/1GYLrWn5sly0UJnTfHeyP7wJuum7eJ8P-"
randomimages[8] = "https://lh3.google.com/u/0/d/1gftNPviqsHNe_NfQLOUE7QdFFpYPRlwS"
randomimages[9] = "https://lh3.google.com/u/0/d/16CtZLsVBMwHrZertWJAhTP2yczssDISa"
randomimages[10] = "https://lh3.google.com/u/0/d/15WpYR1-eQcUJbKjgA2UW4R_u1dqAK1RT"
randomimages[11] = "https://lh3.google.com/u/0/d/1WosO9-REOnTm0mYdRK3_lgDmRN1ZmnZH"
randomimages[12] = "https://lh3.google.com/u/0/d/1ffbBMUKRMX5a1cmWZXiD7sQvRbdUQa2L"
randomimages[13] = "https://lh3.google.com/u/0/d/17X1FVAPGtt_nhmTe9X_H1yaWB3KQvrDV"
randomimages[14] = "https://lh3.google.com/u/0/d/1d3cV1mas_BuAu23CnBYonnjcpX4tNUyK"
randomimages[15] = "https://lh3.google.com/u/0/d/1LI0pB3t0X7WtMI1eTQ4enx3_ZjJV1GXJ"
randomimages[16] = "https://lh3.google.com/u/0/d/1xNGSdvA6zFmsz2-ApfqINmT1ItOgmdDl"
randomimages[17] = "https://lh3.google.com/u/0/d/1OSJ-GsH8pvkRiHAZ65deo_LT9JMqomnv"
randomimages[18] = "https://lh3.google.com/u/0/d/1CPy-5U8krqPMvSgju4nxTWkzMXhBWh9P"
randomimages[19] = "https://lh3.google.com/u/0/d/1xWboe26YgkhF5MH9q3lVIVZ7Y22zJE05"
randomimages[20] = "https://lh3.google.com/u/0/d/1S55_SpKX3CGfLdVIC2BnjwUPfL_6ZMbI"
randomimages[21] = "https://lh3.google.com/u/0/d/1OBCjVbht0QJZvWMlAwrQCCe0dwIx2l0F"
randomimages[22] = "https://lh3.google.com/u/0/d/1BUcLw31pagmFI9itH4nt269szgdfmRru"
randomimages[23] = "https://lh3.google.com/u/0/d/1YB0xaDnD1PrM3rzDv0qGd4kxwYCN2GWE"
randomimages[24] = "https://lh3.google.com/u/0/d/1O11Ph1esWu5nfNg7yTmMMaoWLXcXowx2"
randomimages[25] = "https://lh3.google.com/u/0/d/1ZnJjGc4Yv_zbaPt_gz7W8MHXNLmkGLmE"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="random-img">')

function rotateimage() {
  var tempindex = Math.floor(Math.random() * randomimages.length);

  if (curindex === tempindex) {
    curindex = curindex === 0 ? 1 : curindex - 1;
  } else {
    curindex = tempindex;
  }

  var img = new Image();
  img.src = randomimages[curindex];

  img.onload = function() {
    document.images.defaultimage.src = randomimages[curindex];
  };

  img.onerror = function() {
    console.error(`Failed to load image: ${randomimages[curindex]}`);

    // 대체 이미지 배열
    var placeholderImages = [
"https://i.postimg.cc/gjfYMPB5/01.jpg",
"https://i.postimg.cc/RFpCHt1v/02.jpg",
"https://i.postimg.cc/0Qy2jnwt/03.jpg",
"https://i.postimg.cc/L5q9BsvL/04.jpg",
"https://i.postimg.cc/RVHCWNWz/05.jpg",
"https://i.postimg.cc/3r6JrgJB/06.jpg",
"https://i.postimg.cc/8zgpMNvf/07.jpg",
"https://i.postimg.cc/sgPVJqP6/08.jpg",
"https://i.postimg.cc/cHzZHSZH/09.jpg",
"https://i.postimg.cc/QCWDKyxq/10.jpg",
"https://i.postimg.cc/v8pg2R9b/11.jpg",
"https://i.postimg.cc/KcK35c10/12.jpg",
"https://i.postimg.cc/4xGKZzB0/13.jpg",
"https://i.postimg.cc/NfmyWN7T/14.jpg",
"https://i.postimg.cc/cJ4rtdqM/15.jpg",
"https://i.postimg.cc/NjxK05nj/16.jpg",
"https://i.postimg.cc/pdGyD3RN/17.jpg",
"https://i.postimg.cc/Y9v088Cv/18.jpg",
"https://i.postimg.cc/4djd0tYB/19.jpg",
"https://i.postimg.cc/5NdyqBdt/20.jpg",
"https://i.postimg.cc/L5fXFXfR/21.jpg",
"https://i.postimg.cc/bY2dt65M/22.jpg",
"https://i.postimg.cc/4xw3gjKK/23.jpg",
"https://i.postimg.cc/WbG39dTw/24.jpg",
"https://i.postimg.cc/wj9Bn9B8/25.jpg",
"https://i.postimg.cc/nLzhcT73/26.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);