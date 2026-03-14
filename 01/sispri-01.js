var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNtdYFYZ_3x55YvXKqi2v-nKm8xpy_DKh5Qwq_PLZoiiStDxpMQguY89lQdzuVZp4dMlORz7OAgE0Hlu6-SfOOKy55Qt85BzYzDIrOwXawB0Kl33a1wKiFv3-BnKbTX4h_li_Mz1F2wQpbfDZTuIH05=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNidC8nSqXhtMaemI7abP5g4WumjCFYfobWHZbtS-jOa96dRUCUyeOhfs5BH5Yls87xwn7M6hLXkZJJnk9uVZa_kOMOLnDyds3CH2yErISaNijLcCgT4nXqFiDdMib4scLQ7oH-qnnBIts15RmFhY8E=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOgiCGRJWvgP8HRqo6RsmcCMp1-bGEuE_HskFwBI9eURorbB_2Opy6xp9DoXWjCDRkDj9aRMLisAMjkj8yHRIsBA8nMG7eVyYbf_W1dD-_GcGGfRaDTuYbY_TqJuOG5eaaqQ-XCEqS06iVOcImLq2Yv=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczP7bP561O6wj2vuzt5mW1hy5VDgnFZiFIYURu3-3korhukHtt7LtrJUnvFz9AOsoWyxhAh9ktHSKWkZisZyTr2F8-b2gjHnf-LIJATUCULXKchszIUkc0Gg2OTunpE8hkNbYpQoXFjTSeS61GUMi5VP=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNjnQmbFK2rEofG9AOnr5KPNICxK8DtzDH_3e_SGnci8k-G3egeMwiC4LksgWJ3DXXJhUOQWuxi8sLEO8lif-iOfvis5OOLm-r2M0acPAXEALMvusYzbwcMDorl2oF_Qh7oSLnYxehxY9UxxCaTxDWW=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczN5jWVYY2nc4Zje7hiaPiju2BIm0Lspxnhvnytjb9mru7xBDv77pYKBpsotN6DlWeju-lLMg0UOrDv2ViNITY-wDeCF1P8JCYe5Al32XRPMh9XLSCizduJAw--zwQ7kPZfvsuytg6WV3S1liRfdfvnO=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczN5wQWOSra2Gumr0YNDNBuTdhnWMUqdz4pzMypErtOAKbkIeT98T7Q4bbg9KlC5S-bYeUC8XqYHwOmKlyLG-mMRABRQlyzesL-gKtVhtd10qRQDbeTKAp5vLtiGepKCYPDO1ialp6DOMeaD7XhPPawd=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOf2JPwPt9HnOUM7IQTMse4NNjfK0XPlXLbLyS4Fku9f9kYLbmP3D8thoGxL68K73GUoJMCUL_L1fKDksSJRJhrHMVGxRXPN-r_Sms4On3bmWCAsNKaUPe_KZifTdMtZhA9_8TUe1dnkujujS3cDmtG=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczP1s-qp5Cav_6If5CQ0BpOCY9wdnKqXLyJ8p_zmN2Arzsj_Xs-7p88YW5_N-cTrujNR7gnariG__rw7YQT13YdZGwXaGJocj85TSjMaGNn01NZTy9uaaIDbH6PIdL8zPpvAPIzU9j972CL-tR-cgKlG=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNuY9M04BwKZHb0-VJJFJ2r5et0sjgGaNWoKWp5Rq3iHiFwn-tLck223p6N0oIvn2GlMZ0BK3g_TmwQo1t3T0YdGIqviZhSC0MVxLgQqmeUXBKCutuUWT2skh9nIiSy19a9gKBVD3grN-y3bKuTXr3L=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNk6i3D5_QFk1hE_b_lCZ0Xqior0yCioT-wMcqDenAT6w5YysYTZnBLBVdcQk36PwT9PSAZBWJHnjsWkZnxsg3_e1K8lB8NUwVtSrRT5BlVmuyg0WFi2CLDCqUGRmw0EmKEtQeS47HM9Gto5Sps829f=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNi2qnO-UjCXo_9KdoBW5NFfVPncPAjuIt39-o6eOib5DfsKJk3ZfsakaLlIcOtrVy4vOsrkwmVgVtKFWszF1KFhCul0Lxz02W-tDzy9OC5T6PZXt8BRCWA8XCioWVN-7VGaNmjakbQgpSosqbZt7Ep=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMzQGC3_dDTLUZNCTdOfIL2HVOAO_JVAvTB3MR5OEk4VZZFsmSolOQyrw-F8x_7--GuuAxP39x5KmXgQkZH2_mFpc8lxIHGrjwU34-F-kD3HAlJhuuqMNZnsJbYamB_eo-r_-QFvbdJYDSTwLm3NPlE=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOQfhr2w8TKCy8AnTyaESB_rP3xhj57Qn-lpI7yW2EoxuFUaJQbcsJeEgk1ppW7FffXVeCycSUYIwbykRcUovDh9bj9LaS5DHaENtkBpiFoZnN3pwiPiXBgxa23pyYCnnlrWv1ieejQaoQunjJGTOVO=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNlUoD6kwasC8VX3f1r_bZnvdU960eiXhGMnn7AwS1kkKKZwy1REgu2WkvK5R0p6bMrq1h-TZa7b2fjL8CctoxzlbuBSJimS9TITf98x1V5dqvbrUm1j9sUlPR-msNlEgc2lA2FlsIKGrskmiY7R-JW=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNMzdUKwsNCcf6AyP0g1Pe8hrgTEfjlJprKEffTvmngnbK5_IJoR0jAPzZXPzvOKRhZpvdvDuCkcuTcAWufsTtgRF_QnjNOICAyCAv8gTp-NAtTOFuz-rmsi-Qy7C5v1wstY5GwNUzX7e-NrwHV6Anx=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczN9iQgBAV218vYGCaXbtPFEQG_Hnja2KtCr0CEVm9shA_lGg-ptOz_C9d3fPlhdxITQLYSV_sJxXarDZkjmvOq0mOhbXqdjYPp3rX3Ct-9VF3b-QRJoCvkGtbMZE9PvEh9-r8Kel88FlmX6VqxFF8Wf=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOLIcvx3j-ia2I4ERsI6ugHgvrI_D2F4NpM-LsQ0j8BWGQSkD2J_gVOyhx60xNKzqdFFlFvrmePF3beKWv7Y491ufQgAZQnkJuKweXi3G_32tr4XNGxZX2vD6AvdavMG1lxAhUt4KeCzuvCnSUwtW9e=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczMTdxv1YznLEdHqNCNlstjeoUkZAHHN3ClSvc2qhTOTLgCDPuIOfNGxGUwFp8xiIqcB-FccDPxuXUZURds94J-FVlOCsiSBw1keAr04WtfxEgpTjC8OSVbk5PSwlSP0k4NC0Sw3YAy_GAB_Fv-ck4GE=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczNOaivhqCLHj4LpzShxsNHbwe-vL0SOT9SO4b5yhIOFmzoLQo_rThz-2IitEnrHH-grT6dh4UKngy5KucsB1juC-ZyUXbxwlqUozTxVeUmgEr8wpNbGxqLOB0rj10yYuQJxjqc97j2ebp-B7gYqjVDw=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczNEec7D6_YyZWW5WX8lHt3NLhn1hWUm3UHsUtiZugNiO9oF4q32kDgzfTHShS_9IelpPKpbs5bYaQ8yqOqWwRf8EotCY3cxe5W9lsfBxGkXszykN2oVA6cDROk_Z1i7kz0LteqJy6ttAhqcGZGZDs1y=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczNvqTn5N6MqeIl9ujmdYEyhoncNfHT22cMWL5kq5Tn7uYjT5aF310CDIpgyxx39VoyP23uqpWpvNcrPwASh-sed8ISDPCMcgKtKFnoIl2KD6LA6vvUOybbRJA_22WLrVP7VltHEUYXgx2-Z5Hn_lxAQ=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczOR3rb4LHLG1x01m-Ny6tHnPADqsunkZHX-74HkmHC9OsnbTuE1Fsfst_JJ8O2KfBQF58wAn7fSbSD23yV5UPkbpEguGC32pGsVxuz0GCGljCZouulCLm7y2DzkeC4KqR1HezaM4shEUwH8PL8a2w06=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczO92f8noZ3VTNpRpiBFjgmZS_6LpVd6gDWXsioEs7AFBFX1IM4pI90o65TzSvEUSSmsNyP5Bme6AyMWGVd1nwJM62Qnbm_96Po31U3MBraN-vJjITGj5soVVSt38KKhZ2TZ43Wu_rk6pTQTUJmYOMp8=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczPKmv0x5mcTXXwgaRxwF8k4TCCp56FPe1KL4sdesQUZUPb2W0OSUSNBnQVztUHEQBmgQxybStsR52OerRJE1ml1zKNs4vx-APdh8hd2qpOPeaHg_6OWKRkwCkPTbuwT7ZCXGrAIFkTt9ewacP2obibE=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczOURw7QWOPFfg7XrTTIRvtfwaLdurb6gWywfL8-UKxS-Ys0plj-XHfsD32IjszcEa_cxibbXyz4VEJVhJCjXDL5NGI-KshIumFUg2l43UZ9yUoNwdE0ABe-q4smFxXtr7apQ1nIvuzd_LIh1hfxR3Ai=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczPNVfkYQJAI02R7HQC03bMHlT5gcp1zwRzJmXhkYHYrk46-5JkVv990_M8J4AscMvWP9adR505eny3d5kPHwEyP84PjhUH-7tbXMGOhX314gwypRKypWAdbqQJojNGxiGwJceLh09AH-5Gpg3eElgZv=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczNeRCVUPNeYjhdXogw5RVXn4A3SgM9gwSoHeHVGr5aY78AFtXhFYbOkEBjzhbAEeHkDB5v085m4ezANAGxNgWnyoJOyECGAbaSC3nSCmkSAyc6-r-QdyThjaOI_s9YijKT13H3SZKRZzmg9rdaZSWkL=w1920-h1080"

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