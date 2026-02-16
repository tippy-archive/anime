var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNlFUaiqFIJZyO1dW6e8q-alHQk3qsR6gglDje_dBN-Y1Q81A5y3qwmh8-ni1KUEvt3-_dzn7LEYCYk1ljx9Ffz8YjHGFDqFDR2NXMfGD6VhQ3or_ukHsTuZPJueagkWItu7l0KCJqcTAcaOAjnscrx=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNJmyUHRn9p1Z-ivnp7pnh-CqHQsEkONpJT_iAiEulmHPPDc7wuohrSmz5VBMp1n18KF64aUODaEFhtYm95eR2ilANyU1Wmg7FV1v54vkvw9sqa5B-ES0Dl5EKKXpwtMSFs5LY64idY9NnI65OsMrur=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczM23xzaR18Y2wDOwEolF_BsAbOvR0MvySNV93PUEZnhjgmP5LD-9fal9yW73vDVFjtjRnRwup3TgXx_L2QWqbm4iQNrmUkglRSekvUyr-1O29QIfOCfdVyPKIOn6Nz83i6MGkx8j1er48c16I-X4Xwi=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPgZiXGfxnlFjGKQqj7mbQ0L5UX4BXjoRg6iQTAXpUC7LtE5L0LYprU6HuJn1ZpqCLTgxrurDmDIE1i8BAu54rKv_xrkoSh6TUBG6xsa8EI09Phixn-FnVqeShDKlGfe_ikXhZbuLRJ22ytq_mrqySd=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPZq5ZvyqFpvqmQaEpylf4cijHB0vFQFns-lwbI8NfiPeuVCHTYVpX7c2s0B9sXlYPUAXU_UfR3dnet-unw8EoHBRhHqrtU6OvHUwR2pBH1jBftYMUm5rZJhn--Tk5fI_fT5T49q2aGJSamH3yRJpyR=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOaVuXW_J2Eh9RaA_impi5Cs_NzLujpucgDVl-2TMLDxycwCDJ7em6BEHBKtnMAL5LF3HvKIl0iOrWWs5UXjpZ7D8sZ0df3V3otp6V4bVuWbMxYFsPzLjt3Q1ig7yA5ha9_rL2eLRyUsq0xMJl1ervB=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOEXc1Y8jDTXqslkGp3ZBFJALF-S5IK1fCQcbvLEOXk2wmsk9UwpoLSrnxwVRjLCNhf5eCA_pvreEEUzs2Fm6HYk2n_8r3lUh-JMLf_tU3URTAL2YDUjxycx7YYe0K30Jonw3SsWzSzJ1X9Fap3FSNs=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPBkEtHHXCR2lZhSKkFel_wx6oFUjo5MwIPr9CQLMi1Jlf8e3I40E8-GXOpALb5R63OVu-bs2yzLuC7_eegzuBub0w8jEQpO3f1bSV0L8KgA3DyE5ssLuuzw_J7ltX2c5KJZIkAKWoA3jNBMYyopGt-=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOyQp6AX33acsvhJCrbkCIMdsKPR_bTm8rS0Ga3GFnOj_UUwNLl8RUmDUJThTvVfB8BA9XtxEZVsxd1b4HMDSpr-UNV5U3VyLJmnz-9MjQXblPAtKzn6rOUzx0waYabVTQmYgnWCCORnt_72RUd9MkS=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMmagxNjaczFg8DaW_aNPDUM48LroijBVbfxpClDu5CSRBLYyr9thRlZjDAyk60uixRcAxI2t0LWWDQ_tSqAh6bvywJrqY8XvHbdzliD3APJtOt6holPfIj0LR825j4slvNGrqC8sJYxESCIQ0gPEMS=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPMwakm4yt_QsLNed-XgEcqS-hkLwOrjWCbNZGVvVao8iSIYOzzTiGe2mp7w_V29Y0mLISUWZ0r_T3GGa7lFUlD1RInhtfWOS39jU4ctDOSaifjb6J3GVcRMnmkDXFN2aeuvAl3_ods3Qiw65YQWlcH=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOY8Emh_pwbcsdTAoZchdci4VvKqQkcunKya2WGC1Ym_VNWBR0nMOpIN7qstU_iffyv2tK6SQRkyvl6OrokaCZPs0p7H4J3F7mv70sej0A2-G3lTHbpfGVdbkde5Z8qktiYh-XVqnaGHoOLHCd_Zb-w=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPlSI6XrL6ea54QV7MvDICdChiSRymUrho-G6OnugZhhPDH4unsc1w4e7GxEuVG_MnjaL1WggiEHfmyCLOT1mroEj5omxRAmI74OCk9cvnGyoMMQAyaHVRe3uQHQqr52SPI_-F1po-ImnH9iS_yarsX=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMtJnH40CX6Y73wzY7UL_Tpd-MBT_kq4rYinFhLhjH4FeuKAP4kGL4JTendquZyLifaK2JKFZQLBsBAJTFS-6KUtKRBbGukg3pjYRVIEZs3d2YGwvuKjdRYOX6Pt4mh_VvnHR6c6lUNaDqt3KuJaQ-N=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczM7jxKsgg4eNhzfQ5MaKQZ6uapHXXlttXTcz4D39Kg3UjjoHyeMZaWs4oR14mjqCADl99kUpDsoaTif_0XD5mtG3XUmR7Lr14STV3al2YoDAVmoLRHXMiDADuXzu5Q_oCPtPNr0iCBv_VvQl6u6KU56=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPuxHq28irKIWOFOVZqMPc-Fm7x078uFI8R7pI5d4y33stiTowM88O3txmEJyGvpTizUtkvGmcXdmtVAX36YKTcHcpuPBd6d3iREtwwZvwp2VAvHVtIGjIN7308g0S3qVFVQkSdUWcJyX1LAQS4cVdo=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczORe7yN2hF9RbeNcEWckt6syoq7qCnJmqBiC53nx43PCUfcwz7CCFA_9hA5PCbgXPn4_gLHGGubiZMsesBCD1xSJM6XsQHA-LwCM4KheAPtYefOnwsV8DIJOt594oO3tkX7i3Yam8s9r5zNPhqTCwsA=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczNAEKmh_11nmsuvaMeKVtt4awdHq2iAQyuSeyOq0L6qYLLXqSSdM-d-HNZ007ncn74w4fSGDAAKKSiINpZ1bHF1CflOL77pLabvMNtY_013r0AvFpBLzIRvsX8NJu7Usk6IZV_DGo32KUw0KJaOmg0u=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczP7qYPGIBIE_hEQnY-SGQ7CpSxqN5FZw8t7Nas4dK7ega7-JCzzD5H_yuayuIpaw8U6SrRbUTZY1vJ65fwhkGLjEwOFS3hB5hdw_tZKhWlH0jvbnxk6OLHVok4mk4THpXt2HTeel3gtQe0C-MtO509Z=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczN5FQlMLM_xCPy6cfe6_Q3O_XIVxSM5RPF3gY1SoS-ksthBFEuZrkGByPy7VwQRKn89Hnusqxs_446i-wn_EjcW47UKjtlD8bZpJmRNR-IfVfBEPsVpRIiJ6oEZZ4BdmCATVzsm2ADv8hp-t2hWvpc8=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczMSq9hh6yX0zsn0I-v1lq1fYYUR2kLJRBjgoBxYKbVJcqeFKCUNy8rqqZmriroDLPxLhhm5ltyiBc6Mji5gNFGXfvAGOCFJoJBslmdMaaji38R-J2lKYvaeXonlvvvz1EZueqvoMPICqR-8hTEMugjB=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczPgHxZaHtX1o8KC4OxMbonyf30VTz5AIkJiVJbqaZWvn-ERQUZvFu9tBbGzNGF1wtA3TmlK2N49nrwR0OmDWssbHUIfCe9qgVESuwJFCTwq1V5zMHjy7O38l5eZ29Y_6rVmTe4MtTUi11L4xCd0C0bG=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczPp0KhBYLW4d1k986pHvGG2iIIGlqUgDcmbe3yYYZcnRxbtcDL_Iubq8XdDJ6YmJA4wyCsOh_5995kQWhHKkQ4qF0S1J-Yz5iYItOpYCPmWNLc5hUMCt5A5PWtnpzZ3vuLxe7tPrxw6QG-ba8QCK73e=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczOEGbHv2ccJEI6gz5JFOLySosKcFwFm7phFcdc-VWhAWBU0pR4VjGMe6or6a3OFiBnPFu51E1jyf_Bffp9WSXMMAuMPXmb6rihwz83PQ-7RTBSMGUU2sTo_1R75uy7NjNnCOF39apMStbLIVA09B46c=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczNylfL48XPdbaUUqvqZZl77mG5d3PYPwsQDLLmHRPt8XkKcY3wouHNYjcHh-cJMZC6oAQ5NMArgceGRrPM-bKgkRfzi_oOB8NQo0j9Ffi-p6bD3OFf9hXNktmWJcLIiKrVMutREGa91hETilt87kyM0=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczO7GE6PIrcnNgT2oBX9pHDf99Bh4GqpsVSrskWeh6zBQq5fcR5jZL8S3L6iI43ZrtJ_n7aKWXIhjRH6WEg6iAOl_TZKnQ1yrHcp3rVRLA9_Z5Q_7dLaah_IfNW2NzUiDnGkCgchv84THrLC4ocvEDE9=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczP9ZnJGUZHL-TDP3ft74_uV4ZItOe6LqRNYNaga0njhZ-1eIgZto6k4Jk-QCfRWs0WFptvy7PWTgJGIUjMLl8kpMvw2oqbt_PxaILWaHXr9aBqYSxSbr6vGf8sLEf9bMGqHwGSltehGY1be1niixPLX=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczNqnzjbOeP9BWm4YJzXvtS1SaHNEwYmNmrPAtjvpmvJTHCOO-005_2e5MlLJGDVzZWDLJJkIZAW4uOKLoN7W_7neY14Iov_EAJhbCWUBltMY2IsF0jOcZGXpxqDLvPreVMwgsd4DvDKjCryxqFGPjO_=w1920-h1080"

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