var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczN6ORoCQHxd-YZIrCjHHPEybZb6_GePttmbvc0mibMwrJabglTf8Hlt2h8xBmN5UGCRWLTiIbZNBliq6k8cUxk7FTHKCSARY3UXlilDi-OhImAVWO75kotXNhWpxF1SQ2jn_SSPrDyqQYjrz-RPyUWy=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczN2xsgx3vRqPWe1NV-vEYc4tq95n5pZpXt-73LOXnqvYF9Q3BBDUIP-ho5HHWWJauU0VONXf_EnHzeM6fKbJqnkO2AcLY3ap7LALb_WnWFCSw6oTi0saJPHXeTtIatDe8iYKtTMgLJAguy6XPhKMSRM=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNKR6LCvyTWD5Zwy9q8oZnU2_GS8aVd-sou54hL6wqZPOQr2XYfp2_14iKzAtedVvKBNsNucuxx4rKygVPwek8COhXVrtfzxYb6RTz4NDIVH_PIMsx7qcBgwr2oQ_62Z5sOW6KPoUyetzJ5n2quHRPE=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOtOPk1kU2rE3MfQbm_6QUEiZwZMoXuJYECf2_Ydy7_bXH-KxKkngRzw2HwkW4wC1fG9mxNgFW88AQ491ru4EcOeO_Qxf1g_tLcSJ0d_5ZmA4hvvBijiM2rAJitwfqj1_UqrLdW_k0jW2xNT0cmRS5H=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczM3Ziow2Kdq2BWLQXtb2krzJFuaDupMcW2KEMptSwtqxlwv2AH47VQOSAINs4rmPT93F7KxomdfIcQE8Q39qhAluvaQkHMbN6GRty6FxQA3THXwFBmI0P32Y6cs1nM7MdNzudyDhGtkl9ODQqRFajOO=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczO304H-WQX6ZoQuvp6KbgPE4P3tc8rHZX1oQswyfXw1pmgFcj3Tebg54JTIqdUGi0HwI7x9vtisrlr4j8ICoVsMcU01jYZfkcRHxQ9jn3TQGGbc99cMLKQVPVDlDILgztvQbfAKS_ykgff_vPIUJLpn=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNynuaslQkFJh62LRMwAdZ5IEG41mTsbx8N3cTp2slqImIMbn3R_nVj5QTFi7dU7hEbFitW8kgeROEfw96MX-LKotdRUTR1Zg07XnhLsN_ILVNu8YXRXxfmhyqlvQqy0BriIGGrFXAlttiasNjsKBup=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMj4_tDj1cp2rbtq-V85plcVFMAABrs4hEvnG27bmdhRqt8xr3wtFBgStToiJMmkgqeJDPXVB4_9GFFofa50IDR-rCLwfEG-xCvDE82xf5DaxVADULcY8cxBgRWEgL9UrDIPS9ZZkodugASpgjs5f9W=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczP7LWxgZEVGdNiJE4g-jE00VmqQEaCVfhog9quVSiR9XgcxPNNePdoV-TVO550kZgWNZ9GTuH9qvlKiKGlmXyItzpuD5lw9gGw63ifdrRwE4ONUQjjH15kn7nvIAsmmByK9tRWlFJcT7iEuNtWElI74=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNZMCE28IeUihFG-06v0B9AxphHvI-iEJwhJ4otMEVf-lcuWYs26Y6BYFwPIeNUwcupJdWjj4Mn73Hq9ZdKITF6ZTE_28W7wyhDnOHzXMc3gOeuFeuREHd3fPhn9MBHg7sHkjxGB1Hil3-ZAu7NWLp-=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNJbBZLDoclb81AvdY1nGBAFeKvlGsPu0qdRf9yT7xmx9moKVe5Cv9M906D9tw-Ufd6TKjgYK1pdLTwZMCKGGLDQwzCf_pvoQjHflC-Gp63zANjjLlk6cwPo-hiNa2nj1AK1tjq-Qaoty76_zdwOHe3=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNA1g3yPhEX4RCeyuW5p4QB2xyGruKwn1wgpBhKE5iYUpQSJBRtQkndeGl4orvmeRnymmj-ZmF3TDSuGLrocHv1XQQoxEtXkpouauzac5BwXgI-5P8dibJmSVwAO2OapvWE14RnV722R2iwX46HkxXT=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczP43UgmvWYPSvkOGdShBmjfIP-zszkDzZgfdKkV2hiO7uKdZmY8yxfbdnWva1mg-PuAQTX8fDe9LUQajvuAqTSMTq_S51HEM6RD6Wdr1uAUbovQvHnkgXOuI3L5X-rP6TepREQMt1NZHcGLQKgHSuhf=w1920-h1080"

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