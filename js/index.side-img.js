var delay = 6000
var stopAfter = 120 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOCLYZEc8pfD_mdIiOofGqv40bmsVeDYmwhfYMfpfTztPDJyss3wOjGePPmPqpEWQDhWt6AI1MB4dmBg4wY4sNiS9fCtBJWykkVaWymFsy_6VROhzu1YdurVdtpcE8gYOCtuRINfy0B_qv9fF3-EPJN"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPJWFklgRcCfbw-kqI5LgTOth7BpRhqcaK-QC8mH09cuzhc4_Kxm2ZH8WKE589hacT6eAByLAZr95l7OOB_vPSKNCQDtUJC2HbfXpvJe6l_UKWqWVPp-Fp-aTuF4MS1fbPb_n_crObUh4JFVuqg1Mhs"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPKUMeb4s2nD9bXCHSeBvIgBy6mGbU6zwJrBv2BKcORrTKGUJ0Qn7lFDpIjB-gA8RZuOE3bJsAcOvhapqZLC9usgt3LnXcLecC0XLivBoVnyK5ac6zX89TVH2rtnlW0uKUDWBjQ012uMZFwTYvgqIxZ"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPfN_OpwrJcsxUSPjauARG6kBWHuzUPqSW4C8X0MV9hTIglBE8ZF2q9DLSvqujEpJIngsMMGKIsXasvoWNAbJRfsHvlbnvw2ijty5OgT6fHv39hS0_qJqEp6Z324IKfopuQRKI0dpyM5dLMszQPfq9U"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczN6mmhiNR0sM9XOuC-Z33CwketC3bMQSD2el47-VCiH8i6zwW9JSLo-bZDsqlAFzJHvj7hqGaaQc411LXL7bd78W9LoVAQ8g5Y5riF4wdnBK_AXAy7LqIzKfnbfFC_fkgdYjGJYltMmWfOJvgIxn_5x"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNtvFLxiVNaCoSNAHX5p5exUW_Egrv_Jfly_LBMzEx-94QmZtgElXjN_YI5bzVw7Q6X_A0_0XrfaoW3SzNl57DuuFdR5hSfGoFYJ_FAskJvELJc89dt0rRAkuzlJu6thZG1n-Rz1mP8xcim54N3l7Hb"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczN3yhwbDiHKJD2I3S0I3551Qs-XwOvPgM6x61m01ZMSFvzFhYqKXwAoGXUhEW4-8kxQuaQgKXVL6aM2amTGTeWCBEF7a4Dpz3fZZNdKnT40nUHbl81RCe2xzxLK2PyrXq8yI32OvOHF7fmsA3lj8M4a"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMDtjvZJrtaYVSTw57Avgy0Mc1k0hZUrpZjOWVURbFBgIvTMwXsiCIuQkv1i47t9Ue-fiSmKPCLMIWJDY8tdvRi7ABBDH-1widzD0_LBp-mbF-dLusyudLk3QBTUgONSb-MeeTdIG7ingMhW4dvBA7d"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczP9q2Gi5lhhB7ONjpztxgy2H-yL3UKypFic-94TIrezCxDztuYwUW3sT0pqYwSG1RcuLJ0dMMI089ZdO78OpWiouPgYfLk76wEF6aYLggiB3xMd1YIr2a7YdNqu0szXPg8GbwzJr1TenKN1dJeXVJ1n"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczP505qyc5NOR_EwdNLMDTJeOrhYCfSAy801idsyMV0O2RaK__YvZ5cf3rk51m8YlNvpU13jgQEI9ZxzyMT0xPIey7TpNuA9C2C-irZ45lvpwRwv3V9WkfM24oEOEAmOKFeb4mw2oY5hADfwUAa-QuYv"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN7RSZTOy7QOlSiS_oRGMX3zX_3wVSlvX3sGw__MEfYEFdOQaaoBYNueEW0kbO9vTvfPAiwsBjjPftZnRrH98UtTnmDe0b47rnRfkBG8E_8scdjrb-A7ih-Yk-jj_AcHCT1sWbcIV8iGZ7VbaiYitSG"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczP6BkxqjRW9PYDJ5FBdyODZbqpeKgM1JXCaC3phXGDXSMZa7yfTlaecX0sh7V-6dQABr7XLj3gB0Siz2jKfSKqtn3t4OaXHlGHK23h1fMBK7zYPGZL2FoJ8eP2phvTb_G1vjQsPG3XCNpYKdFPOUhr-"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNsVaasvXcLof7308_hlglPn0U8cPD_IPXUrwvqz0_vAicyS564pG4gX4hJJYL0vAoYbP3Y42cGUlqcBTSulXLoGA0tK9wkgpatN6Xh6fPt_JXILUYY06LGq_ehsZdmvfIVScz-nBp9azE8xz0Yw_K1"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNtH3s6aCkT9vNntWO_JvkhV1liwsjtUNaF62Am4hqpLMp7YW6eWE5wlnyC02u-TdPWHt2JLSsMU1er_zarr4k4-McGjAepwmZsLv7UXHiPnCP8TSfPt0M9r1SSN9ooUa32uhqHJvuEX-OPLaLSv6Ei"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczP9mqBqTv5Sj-PnshFoGIDe3uxE-3AyVgI5yP9NPZaxwSuT890bWLbjH7T06mSmQQPjINU33viXvq8J6oals0-sLH20pHPZE21t0q4t_RWIR1oelFq_HtHS8kj4hAkLRcCdKg0SFtDNShJhR3cecgtU"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOmfG7WAfLXCn2VQ4UsRuhWZWUwYsLHla7TYkfXsmQHjzewowISX17aUh3qnnADcKHyh3BYhRaFryI2LSFwosTScUWAsoYZ21YBw1VPeF0aCWtemu6XvsOqxom4dHyy9fA3cnXCunQ6W7549pVc8RJk"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOfpahhe2GD6sS3NazJso2li_K3fgKQC3HgeVtjXio5HwzFgphAjUWKU1ZJEwwz_yv7BzJLR5ysM5z1BW27Pdo7yTTC-OSGlgLAJ8ApY_KGYsrtxGGPbuxLRILtVAiEYTCdLld3NMdPW65O_P5Bs5f5"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczNkcSf0JZ6gTa3CKslK62V05T2FXl3AKcL0xIKujc14l7x8JJkpFWjP-XhH48-r9YgsvUcH-XuTuW0TNkvG0QnXgzCnJUJYHOq_8O-Q2wjS16hECWETNk9_i9_Coc724udUpafE-SQrHIkPKPCgYMG6"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczO1mwvKusdOPDz4m9QxLE45ozg6WH0_Ci4gRH8rr1xEWnQNbTuBVhS5rWVWzY-3LXZ57Swwskr1hdtIiMfT-toaqqMPHmyDOroeqU0YS6ak25PeKkCEGwOY4pCMzUu912NQuX3MgjKdinKBdXDe-j8Y"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczPpet6AphDzGvJp84OPPACVjYv1Oi4xuFyqWcGF9NTZnHJWeeyjTi6b8mtQ1YrcFw17abXUkvnOcsSuMHqlgZel64ZsrJ9MJIPkOcAl6qaL7ylPHIUO_Phvvp62oGmEgtBplHABModyKjL5-VZIhO5g"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczOOxB8XGxFvpjZkgED5vPpwjtLA8na47KSwJ9t_DbkBxoL52AQRx_4YGMDYyTRorFOY7P5aYyncI9wm-QiMqFGz1UAYJGcJEINz0BbtMYfzwo7CZ8BDLF0x5mfghsX18HA-98zE3VfZzzRzOS5HjFk-"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczPfYVRe5uc1MWHEXcDaLBQlh1jCKvEOt7tCBDWyUFyoJqfM-_Q-yyljdpyzi3tJXFkh_FiaztM_wW20A4M4oHNW4s4Xz3Jp22y5sX8MwkjgkQzR3KYjXyue_bQgZKy27E3fif0tDi6tUbvW_fLA8ac0"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczMdeDNgcOD7-bCOxtqEcIVMc_flkOfihTjeKJK8VwwmZmm3vKgrbCCnLr5nE-ZLA7r_elsVraibRwgW9jdeNbNuE4RFWz08tOsMPDHzAT0tN5Hj5Ijcw_uvuJLRmROPDOykvF7u6LVvJUxRy5ZgfNfs"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczN1W_Eo4p3hlPuq4NmhyVmn4ZWmLijNnmSIGcW68zucIkrfOuW8xB8TKIO0yffm36NurlhsoDgK9dXNXQ5uhUdWaAUdLTKxhdDyAZdP0dXvWEV2xSSw36VWBHoV7t7zci5XRAXTI-Xd-PAT90zhgESV"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczOHEuksL-eCN6stobXf4GxxY00msCuXHZSPGiFDpgBd03Z1vCEMKOJN3xn0rf91AI5M0KHhVVT9erKwJoYB9o71_yGBMfYbugTMkLLJ06-DcPm-MctftQ5arT_heRZlbIM5e-fMUAR-NaBTGzVV1HfA"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczNEsVbi4nl5RMLTz9TrYLepMoABCT4-jfORtEMn5QYUtHI7foNhKoFuyJwVTp2dH3IfVe9yo0NrtdYFg3LJi8l6bbDYPozPuT3KuWveG9e-ZZTksiub0DW5z3c2yJl-kL6pPeB1iosE_yPGi4s54Aww"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczNEsVbi4nl5RMLTz9TrYLepMoABCT4-jfORtEMn5QYUtHI7foNhKoFuyJwVTp2dH3IfVe9yo0NrtdYFg3LJi8l6bbDYPozPuT3KuWveG9e-ZZTksiub0DW5z3c2yJl-kL6pPeB1iosE_yPGi4s54Aww"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczOyGEQd2_eS28h14h1HPY8oYYk2zFMG3DsYO39Wn8NFMRxhCtcfaduSEfdE_p9qQQnxzrYgfqONcHmntDCVeq3HFvNXnKlKxYP5kULeyFjGis5vjAo7d0L7lxirj29aUSD6HQsHXW7TGconHO21xqz5"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczPuH1CJuJlUJUkJd76Q8bP04Kwlsu-J7DNdFp2Vb8yx0mAwn7FEnTJCewfXws-jVq-uctLvOb1ev4jjWagV_Kqnw6SmbI4bGftDyAqahwkY-7bACeYpmSw_Troi7HiySzaegBO-LUU2z2VMD1eDIfCz"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczNBywGNoTWidoTifKtvkSp_ZGpXHvH1YB9Dz9_JVjyf5CWpggwxbtxu6kDh5aLncqFUtSMkmxVRKw5YHs3dQ7er6WjMpH5t9ArFxmz7Ph3AZi7uypuY22pmMiXS0qbsOyIAQHz2jwOJi_a-9FfDLoUu"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczP9KzTE2cOKI689OJmgHLRbNh579P0At25IW4BCtRyDcR0Iz4Cvgp6KRoJnF6ZdkecB60VYEpccvZZvl8W7qLGKwJuTm6BUZC8gSwtLtR1MWnyBplxGd5Rt0_KqHo0vF3vdtMnYKuLTwAlDM9ORX0iW"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczMZKggQuINx0e8O1lk0548L4cf_FtDYBKZe50fhqFcj-gSN0i9fjm9SVSyvLvE7oBb-WnUee_le1-jNviB0aTyCFcapiAcAuCW8nPH8FZ5bfkUFYSPAfJ27G4IJp1tE8igReIBKWrUXYljz4fSJdwy1"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczNyYuZo8nKMskEL5Fnk0kBAUMPius_Rh5TZZTLHRX9ccxnuI1JPD5Ar7Bma9CcmUaP4Wu6w7JsUEI3uzV3qCChzzaIooRE2XvXeis8REVhHBIZ5pWK3e_MNfD-T_c60ysTJtidV7PP4d6R-Tsg6Q7db"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczO1F68m1iXjT9M7qvUHB1uhrloX-I1zPURNw-4ev_vkgI1sDS9RAcjxTfQfoFuCqXlAm0JA9FuCz7YJAYvModvxyAj1SpU2r7FIpo4drRMtYbN_vzDqgZ9hDztk2IN416-xd6Acmd2O5h8FweXaMlu2"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczMVClfvo-HxXyg7wLeYVqtq28dkBw02K2TpzAQCZSBYUvUNcxH95c6JP5L67PX-H7aVGALSmD8gTHuYl0msBabY3lFc7dcla1jy91m52P5wE0kIgIAyZfxvvSWzDf0jzml2udZwp-cBYIeGuoi64oZi"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczOxdKGg6zerfotpyC_qslv8UMBQ7hLTn2I4_A6CIhrV3xWRF8Kon3l3HJAbiRKcWwJ0bNgpYN2Az-OQj_oi1m_M0aYIIZ0NZYH_eKBiakvKSJi5Og6njE2PKROXxIaEhzk9uFJzXTRa0sBkHfcUadbi"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczNzu5XhwlqAgFb5gr_UeT3ql3zX61zAhqht0gq5aEw3IQ6IGG-0YW85lW9oiBrO_XHpeP2TjmFS7POf8LDwHtc_8Z0CuKXV102OpxxeP7rHT4K5NyDw-1YHRW5x7Sc27UKX02dYFA-_X8dIwQLyqSP0"
randomimages[37] = "https://lh3.googleusercontent.com/pw/AP1GczN2G13hSa7cJXWw0DIxhwQbP8SgJBdganr8qIs_1rBFFj7xkA-ibGgKbXm-bdhSlM4aTzVFidPu-NvLU7nrAu7dK6uJ5Ib3L08SGt0XuPRQ-CRtha6hh7ANY5WAKkRA7r3LWHEqjuf2A5g6GOyEFwOu"
randomimages[38] = "https://lh3.googleusercontent.com/pw/AP1GczOv8xdnVBegQDXPYzJwfuf1D_QwvrL5vPI0lR38wPoowh6SJgG6uRt5vsR1K8_IGKFkOAJmNnUv9B1XRu6osahGSflrZPgjqNew8Ypu86zCMtgtoQcVcol2PqnyHyHn-Cbufn-vUrFrLYJ8i47qlckh"
randomimages[39] = "https://lh3.googleusercontent.com/pw/AP1GczM_IEuvoL3c2wgHMuJjroEq_gA--LTG0qFAS0RSQxGxfTZ3vghhDxZnMCVe1IjXSZebVlEWsXsqS812vxEbMqRrl5_UdVYwHia5_ct_uQoBLcAyqa6R0rlRrnGi7zPMFXyEfBHxKmEjvJZWxwwedmpI"
randomimages[40] = "https://lh3.googleusercontent.com/pw/AP1GczPciPlHcuG0r7X-eZBeJYc4GUHZWbH5arv0l1nMVkvDPRep290ax-9ifAlyILUaeZE6WYhN318JRU0TexzFhsry49RD14RtkPaOTDweDUYfZpjz3zYZQ-D7JM9O4SmD_lurgn_hsGf3uWs6C1_WSa9J"
randomimages[41] = "https://lh3.googleusercontent.com/pw/AP1GczOqNGEb7TU2DjbAsOMvem7ocf9ZYrSdd9Y7ba2pGvFPFLthoEy9exLYQ6L5JPiLmvEI5jIN92ABwPZsFB3jKQYFZu56BcTq87OkU4wpTLFbqstZCfivr3mv2Vr2j0SOCJ3zWo8IQkTVaAkicWB4SxGP"
randomimages[42] = "https://lh3.googleusercontent.com/pw/AP1GczOi69olyuWP0jKfQnHogRbLtub_KbulFWY57TMzblja41TxB6kT5BimaX4cYa8-xnMLX7eKmbPKSl0XTeFmsgcGfjCW2lTllN8r8KWKgVOzXs6Kguthxnv4mOsk5xHhAi8shGcn4fdp4_sk0iLD2Wu_"
randomimages[43] = "https://lh3.googleusercontent.com/pw/AP1GczO27AH58oIZe8ofTtskWa80Xz4f_30TcGXdlPxSpndIHeAThgqUsfYAVOr0NjoyOtW-04OyU30bH0-Zo7IBKpQP2UnwXUnOsNEZum1okYkziXb6s6PUVYnw9LYQBnbzRMkjJ91W9Pnz25jM_dc0K2w8"
randomimages[44] = "https://lh3.googleusercontent.com/pw/AP1GczMnn5C_pMuEUtZo8m4SPPoL7RsbBBpzcpPlqLm_V0NisfEesXumNKT128C7560yIfBSlwCEaadUiQF_iAgRuzDqn6gPcd4Rtsc_qBo1MYGO5jWC548abOv9vN3rcqgJ_sHlNU3j91QHauXtKYHMeMX5"
randomimages[45] = "https://lh3.googleusercontent.com/pw/AP1GczM8Ut2AFlLmTGC3OGzzBHogYE0vaVqOG4YC0EyyJAO86fK2RzwO1Xohs3ZOXQ3aMTdP-qdamEHvEBj9qDplzeNbALY3_DQqdUUgB0mYKScVgCK7kIL8Lnvf_2tPS3AkzXg23UH0eVu5bi89ECVDm1Q-"
randomimages[46] = "https://lh3.googleusercontent.com/pw/AP1GczPDUiCZ5yNOcDh8RjE3qIobij37VEsn8E5OYWitlR0kJAKIA1aSahtzkAvr-SLchhuxlzvQFyf4Fho4g6ni_ERGuJ-TnEQ7jIWWxlpEIeTAm9ZAjbWhFVdOcl3A1BjmAD6qDa7ErfAvR2Usb_RTiiGy"

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