var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNWjDO2T8BEBiZktZvLzjbwqAVkGYIDNnHe0bhBzkKy02b6obhVld0XQh8L7HqaW7fNs1Z_5kulCPEgorsV3IzWwilpTNbvvrh72bQwVF5rwkSkCyLRDe__uwPQGOS3XG7FYrmKKgcbwU4IVs-M-Sq5=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOlTbdpnSVrVeMQvAtoI6IuC5d_DxvCxpYBJwGwvOntf4ewpvkdVO87M3s2wF3Zve9VqU2Lxtz5yH6BjE9BG6hn0rGOx0bQ3xLaJvRqdUat_JWIh6LZm0BhHqVE4ycQCuV7Mo7shZ34I5KdlR4An0zS=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPkeWz3KCCww83ZmLc1iVfMaud9fXzAO5Cd7iyRvuXY4ERs9odlJjltEjwEsCrlh61FG0FhQGISY8UlSvBJJSyhhWvIVmbnOUqX6eLYP-aSBFaerS6wmK9Bnh0TqEtclHl-bRBxtm5DfRQD02va8Vac=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNq-wPB-JRTAbUuowrfG0b8PmfU_BFC1O-oP0FVuWL43tEoQwXH3h2pC4TeCoGRBNVUOX2NtrzyDCzxggqIAAuGr3FombQuFvebvea3cUp71v_tPpoos-wQN7A9cFr6xFo21Z1L4vixEKL7d6cjVFkB=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPvTjvj3t2KajeFf9nhWl8TEdTlHd-SXb2zQwd12m01v0mQJdpOjLF75STCbnKSY7udHqrCV1zF3U4UX6l7BcpSf0_30f00Par7MTkuFXP6ja8MNWQ-1Kit5j3m-XlgSx09zqUy5N2FDBBktVlNh-ex=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPEosC-5mOPwfXYMSylEka3ePHGqFMIUVp55u4aFDi-aXSMOjJgux22AgghGfV6ikZ6QVh04Ob5FGnqdXzRdEqijYQLAv3k19_CmOMNV6imr8weCwFVpCcP3TfCXMspUdAL7so2e8-IchB_n2c5f60b=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPR-HADsE_tN4wZAU7we0loZpzIPa5ApiLjoBQoPxcIeHvDKEZyc3Z9ammVhIrDbsYGwYIwFe7WlTAb7jz0U4keEchWXDcYur4G_Z-gMp5d7jXH1MQcPSCuD3f_PnBeXxS3P06sKPEeL6Lo0SPhLO80=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNbwHN28kDSl96xjy1D5fHTdLs7OD6-43WWhR8gNYQ6B3vD8QBavSeIccAjP9eQKDRUTlaGcZwbwuNDgJd8CQ77XotjbiYbYZ0_yxI4lJ3tyxGHcpVY159AdJbh76zZyuzvOV-9oPhDsqwglRd44MEL=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOXdhmVfVHM6xZwXBE943fib05s2eUczEabuU28_KEgCZM8MFMM4nk2zxWM1I1M15JXEZQ3pyWBe67lQb5M8IAijeYAYxRMmxdAVxZdkLhnjvXoqw1DvgNuEpsRMui1KkDy2cRZYg6rAAaRCs7avU1B=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczORtT4MG1wwstLJpEgkFEmEfE14Ec31nUErNLJtkfMbXndqhtJjIlF1VyMiKon28gEsAhdWL2nuDS3kZEdIWhfr2aljKreMHQ_Ye6i-2HSCZtm4Q_tWlxs-PXYtCYwV24ukS7G06lCNwvfTNM4nioRt=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPCw4AQcg_kl8wSQyOMhhfZ_b5gH7V0PCXQ3eYVGzIC7diNdBx0C6USXab311HZQtVEs_JxgFM-Ek761sud2yyxo2C0gW4oX4ITfpVVUFNrNa5mVT82qxgC-65QggRJTv9xZ2GzLPMf38NHuwPhZydJ=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPVhtmQsbGEhT9Ijp1OAg-kDbKDWsakoHXwdREc7kG_M5NnIGrtnnGcSgEBUhKC65EqZ1ZuRuGda1iG74MurHmoZqIQd1aak70K36iN14SuQPIsig-Xb2yN5lgRdQsh0S-jQ658fePcXj5r0cYpPY7k=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNn0roNYceB-iwkcYd2Gz4fW44YY5XgqiE75A1ZnqnRb1SAYUQZUxJNTp570kYgfAjrKMmX_Cc8pateSnvuSARdyFxb9n-7naoCE5KUjAcgOK6TwtdDT7PuKbr6yAwnLK26ARvIOUVqz8mF-_OIs_UE=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNTVwWVC5BGNGc_-wHkyUhH9EoAIZQCGfRNn1HexOCsbQkBUkHWXzczoaJdHGaebiiZZMBYgF6T1yZe5fMgVgsQ5fOQLZgL8hr34eGJOuJWwyj63SVGHtPXdZjfGYTeyYcHYfX2zBbjAoHFfHgnHKHm=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPzDaOcl8KVo8GX4ZnEXt1LF_g1dUfhOIH_I9JQOg2FvYFfvfQI9yaKg62P-NmQYORnZqGVuxvPyY2PUxI6jnf9k-dUkhUDRJJztECE1x_FwJCJOmc_KIBxLZBbmyNby4gSIKasO9OmXQF2sUi_gUhG=w1920-h1080"

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