var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczN1Wh_JJknz9AT9NwOgXz7hfXJA0Z4c8MfwkMgDfitlsFPbEqMVvbRRRxLwnsh1lgTNUKDmr4XQEMLkNf_mEaO5fhRuSIDcIafY9Q_zzlhE6ri-i2jd3gEY5KJlUm75HmNKoRkdfu05M4LDHOep2K_V=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczND_eaeskVJe82z9KnWez5Q_scu49eLpGfLAueyURmgTTJ-Z8VIw3eo6RvJgcHMldzw7xArYCNy2PLbZ7ejThAiobOuZ8_Txy1DDWDvjNwhRYqBMl74gxSifPcGug3b7VebNIphs57RfHwPRx3hVdFp=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczN7h0yomzac0QBzZ4Sa5vUa7uDy5dbyhWJTNtrVthJV1cPEHIVq6j3MYx1PqzsB7vLu6cVlacBx7ShAVkGEtAr6W0uFVRLBAcqfGAQ-n6OFjDa-FxnM14xMEgtOiWj1Xt_0FGPyux9U-FVNqEWF8tkW=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOEMBoDwSBVA2frZa6GrQn1wVRQyFOGPbOAfWsHUY5w0eoySx1hOxIKudHJXwMvt5svK6bvCpBpHu0OnJzsn1ZR-hpAHE3sB-rE0tvkKmqRSgceltStUm38xFA25lWI4U0O6htcv3A7jKoS2qLAOeYj=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMX37Zo_wJ8SO6zxQJul8D_tkEmCCpbr5iGKLm1LGUCoVGmQXfeMv668OlYyfn0lvKPOImRQyPj_JTRtp48eGUB0Q0d2jJ5VtTw_XFnPWnSIzcmj3lgEcNDQWth4_B6LaLnNWyhrC_E9jWExlHXG1Rp=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOefbPh0iNWI5s1-B2X5poQR4FPpddx8j8kPqfAHX7WJjRk8p33v1uUNAozZD5jH8DIwuH-N5laCWmv0UYv9OyjyIz2TZ6VMJcztalYfylMbhdpujBItVc7iENZoMuepWLvOuMI1chcAHmhvx-QFDKD=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczM5ssTtUrBGetYeLjy4euU9eviDyNpd_JDzclAstm067ztudGAvIJzRBbT_DW5Q6S8KswCUC2EVpdWC6q83d2udik-F6I7A6RNzZ0p4RyjROr_NLxsvTlw1GzBDsUpmXL4NqvFd2GVsX7LR-fNAS2EX=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNSVwtlufeopAfhk8yQl-C3zetvnapMH1t_ZSIDI4dVMbm4m-lIMHSUWGw9w8yXHKsADD9NYTQS6qEgsULo6z2XAmaU98F_xXNAEeLtXKI4gjkUxeyo_gbOBNKvbBrqyXyJavgfBccxtTN_5ob4aSqk=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPzpQk9O6xdJizwVGqr2fnaFchuULdDk6KRsET_NcFXPh-TTz1Baa9cDxRM_WKCfaEqYETKl0nJlJfrrXrd600VjeEkQw1Hr62HBQ3WnJBG8vkn--NGalOFDaGq_kcT32Ux2B1OYSCoqc6jWped1RgF=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczO5ysmbc1v4I0uUGvkaJAsDXysW3jFqloK9xC7W8swDSDro3YsN2bnXOzbFDxyUvMFH_Ti_YKL7qTLuu8PAfBwZf0Nq-HyBkmuvcfdqtX7zw_arDrUGbGBdCDlEroxPUd9hEz_r78FAlvFuzDYCfcEI=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMTPK3v3ROQlPsYrYVYMV0juJ8ZEWxLoYsYPQqiCdh7VzZja0YnQttr1YYIksmG3rngkgxfspJxK4HaI855KQUFS3NX1ckrZaxghBmTqDzCNvWJr71HYq2CyYdXhZ5TaRUm1FxFXKMoOx0fmfY3e1_H=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMDI3y5WNBVd6SXoQW5Tf7_0s9FBdb3sxlkDkd65hXLkd7rofIKGN8tbWMxb6Zx8c6xE3E_q9NXL4kPx1_ahOrmIKzz8xjyqFTBxXiLpEZ3RmTZWPl8BHKttjsppB5u2FbEnvkozMkjCUbq5bElT99N=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPn_jswHnuVxZN6WNZ6fyeBH1VzZeSYhBIMIliHDgwaxwRkQOIm_hM-lyiXYBrjbRjnN3HxhTRF7ELfFzqAZmdVJlkAgAjiT08NgVxRB13loid3AsiaB3594Uu_t4OqIUWDrJmgzFHB6nkpDIHcPWqN=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMejO73ZYi1MV0qsVH3Tac6HbjGrwgy8-mU8rgIr_86efNOvUCYqf_R-ktL2XfS56vqy7Zc8rju0AG-9FQDZnd8XuHlhqOCB2W6LLaUb4Gw2gvOG_fGbsbZuBDUERZ1MlwzP7OBVhvrURAoyV8cB3-F=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczN3-m06DzViXtxTtLHj5ig5da2PZjqPel05BGA5u7QQuSvETkKl1DcfU_H3RvzPcDeyWVMSDY49ssFdQ5rdd5_2otK35aAcfGJ1O3CYSbZFLUmU0L4WiLj_BKRgx9BDQjDk4npuEX4baLeUE5JAlEy1=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNu7dJx2-UxHvt-r9GqNkCUXDJxc7Gtu83KW4x8FnQ7JzsF23-1USWAldniiA8CTSi1Sb7Bw84NPi--Q7-ggDX3HMfj_DaPEEQU7AAc4vdro7VOUUjuV6zVTxz9iCY3JrRgbOQm8ruV46BYmXbDZU2H=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOTxb_kVJxDTAE0JlIiTwfg8_dwy3uQfooJqeB_AgTcbH1t6f8hTw8kS9VD0GFHLyb8ANREpRE-weN4a4AP86y0KlcrnyPrvM-fPQ00XStTWLpI9Tq4YklYzRofTWEz9HlvJJAlFxgyTKfSIpjdxMjB=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczN1iuEZjIUy0ZVmx-jFP-pBEcAA3o0bqV9gI2YFOpZJ7yohhIqj0V32wzsGrPBhJYdjSkZABv76cNtsQTNj1xelNIoWi352LDwFl9VRdX7geKTGJgPdEUNZnXfrrEUam8w-w5De_8fdA-AJt1bNaRbN=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczNTINKjj1KkTsOCRJSCCZmnSr9ntAwgrbW9-9Ig7swSfaO3VK7TNVqXZJpyfBOqn5-_vFQC08K7yFYgJt2i8HAdTbouNF0ezARXCiB-B5QqLE0avmxSVGOWJQsvgj-iegU110c9GboZan_6hsgy9EGL=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczPrU3txRsB0zsFCIAtde4ZrmgjsT91WYaWFCdFIhe0e8kP2EBILWnWHE1DFJtPSoSlaNSDTRMFO80fkJbBo-RVfSVypIGkYyPBgp7c1XabihbU3VAJbr1Oqum7WQphMnBNyVVelDJfUfvDqHqLifn0u=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczM_lqusbshi8-ELEU3GuNhJP1l6mBdq2BV8HMCBi8Kc0D5Oj-xao27o_9NzpQcDPER7aTwrLWL0D4zBUTXyWl8nhtB8xxHk8lGL8oTenYuf__Ii-tHV-GHbZkX6O0G172er737cz_S0i2Kq2iSu3ZkS=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczN0uX-nDwfJB9UYsAtbYQKHRIqk1HOoJSxoYX7s3QOWMlRbTmBHAF89T55WqzgUkG6kABgLYnpqZpETSKfrQr4gxHkTCsrW1r0A8-o-Ypn4odPcXiVEfxgqiMgQohkfzAe2z6Abk7aA_cL9wXZkf4ae=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczOTRa-YG46vULPH6XvYeTER9Sfi-bLzBimMiY22CpwJWCejv4ElW-MNBvt5VtdrBWtwAw73Wa20fzcxjUHjkmaV3YAGU0fFgETd4jg6Z0zsiNO7Pm7yU7diqUvFBqrQvpH9K_pD6T5mZiSH3u-qZigR=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczMQhY2gXnbc0YOA2hD_zsIYCYdNL6WilQTeqMCFOc_9zZBVx27BjFik8VBdcfqkwhhlHdmWhATbVx5Jp7mhEHyRwIewdQLrIIthO0jRGVsdzfcr7CpF6JY44kizsskdYCh0SkNHqUru_3Foj7lD_zE5=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczP-rm8aX-t7ZlTyNZ5XIVopPYzZSK2omKcNriyytGIZaX1eehffjfTPM7ttRwyTOjfvGUudiRjIdd5BuTGvG46-Ki-Jhcujf8JiyXRIvtLY_6Bw0wbeGDtxHRfFHbL3XlGPa_JmfuAgDhaXX73P2UTu=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczNN-ZBuuv-yu2ilAqNFfMwFh4P10meS306mZIUhxmQ0u-zvv0M9lmSlixj9-ULcsu4qHujkNiqyMWTM24TeOYhsFV7SPU2_B_UtdVJ9HNgCBBc663KnjnTAfBPJAWvrJoZtj08DP_jqenYT7yiUw__L=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczNhXr7vCFmu3b_dyoVQc6gl5nt9u0vdlcJfKJasZuSf2QBDrTv3xkizITsrAYMzua4zEZdGib8TaL0bFbMSBKKD8jxo_6bnPK-jKhkoh1juZjUcDBYdMTFIgeYpBAruDfrCGUsxBh4lKURAymEAYL1D=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczMaR-r7vdpzUGFl4EHCEZx99bnD7dQi2T9s8qyZWBxbpzipB5oHeNGTVp0cdazehVowOh1PkoAVMAz7RfIxsd6UPxQAP4bm99oc2WnBkeoMJRcq9iLdNBDZSw14fvgcC6dInbWuNTgbCeCoM0SQECnA=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczMSjFOpOc0t7pAyqf_Rsl1Pb-ZDtrTAcOMTrk9RGKkxkVsN6wRQh8NP7u67EpOChzjpYp8P8IobOJNjS6brJCc6tFtrAOmUFWFL_4NXhvZAxdzEGBFD_IseaUIWlpHWj4GDnneBNqDPnhuGeYoRaq3a=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczPFoogYEdpUs_dnxSsI4pBzM7FwFMw2ld9-PAyj7IONdLNKcKWIpaOwWhBU9NBp-F3m_6PmcIfHu9vmhPacHYeZ9jKfqs4bMeAfMBNFIV_SBdcF937c6nSnrC9ssZ-9Te3EEuaSswEaRSw_KJCjG4Fj=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczMdz4Ve5qwDxWmJqbTjSNyeS-JGrttk8nwSBlN9RgAkpeQTD7m2ZZ8jWBRx6GAUW68XgvR2yvcJNG7_B3JNHItFeCKBGFGDSr02A-zb03T9dVXp4qpxQqQNqsTsYa6L4RSiOaFmq4syCWasLCG6QC3C=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczM_TBbx86-5e4fZW2ZrZihUy74xuKV7ZOzbXxzm3qMCA9ye7gsH0nimYj827feATWjBaCEqJYrWHbU8uNkqKOxfARg4OJ_tPRECnvxoqECsEfgmzfLrxjjDQt2H2MMkbf6Mp8unQ-mmy0WW8cBmn6K6=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczPlR9HhzHNjiNbDXiBbcoI-Cxc0fYQnQ1skjNS9qhdfphuppxvBvwYy6htB9ltzjFYjPgG0cn4A4Z9SKSik3nmzrQOIMjTWwLPUjTcpNez4HAySYdue89c-MEvuX5pBBguHJKXFtWjnMSJ8T7t0nihm=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczOZ4ZTg3PDPAc3nXsgtcICUweia3hZhFhvcfA-GMSGFVTZXXUTWKWXcYJWIeEsgL-NeuPYXoNgFg3K6kGa-YNy6-L6BNBpghIXKwJ3MxXK0UOC74K2DHrTN4sZURauTyjeYEQsVMqDi3L2CAzut2-2l=w1920-h1080"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczMgmknFvdAzo0pa6WWbOXwk2l-p4O_lKaL3YkV403eqUVJyzjAUg2UasYxIMFgu2k595RtQZ-8nZoeiPHY1x734V3uW3q_1xmTMzqfYsdiCiHLTvuwZc8LQoJh7Ll23LC2rmpLLInOqkIm_SnJpI-LA=w1920-h1080"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczMG80odiR2sbDZJ4oRAAwA4zPPP47lp6LL7QF-H6wKyzG-GiNfX0ZLZuItxL35PjR-qCYrsG1sqFbsfXnGzsiL_4U9w2ZD3b6kh7Nb4SLPaN98tI4Jh-WPRDdTfDpL9eUas2PY0Yd-ofU1xIOyezvDi=w1920-h1080"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczNdMvJhLtwxYh0wuJ3jwQyFAh3Tsjohn2udKR2PwOtIBZQ_wBN42sqddMWoI1fEZdbCcowiPu_3Ns-za57KIdn9bnoWcEO9CsamfqpPPT_tZimG0rcGSkMSXC-IHk83YKOGaIT1ULvYcZz22U-lwgH2=w1920-h1080"
randomimages[37] = "https://lh3.googleusercontent.com/pw/AP1GczMot64xMa-y-UXgH0KAdwZtZp7rVnpv6Fd2F2RcxA_KG6xGcDK5LSRutM7xO0CyyDASvM3pq1PKq8bbsSbp8UXe77dcctGmtmtE5PvoeChrgyA8q8BHwNYJ07pWWTL_160U0zKQPKE1tfj4qg6rwYF9=w1920-h1080"
randomimages[38] = "https://lh3.googleusercontent.com/pw/AP1GczNdV_ncrUpi-UmnQHNtq_wLPkCU91sRd4GqOwUrBPV_YSxWwpngWHuoqeDh1SR7b5SIM-S5t6lFHL5_zetDK7JufcXqzOUv54DPdIVEecngFkLOlQyhdscdSjAjxXOO3PI1skK_uj9DudKWllwG1LKe=w1920-h1080"
randomimages[39] = "https://lh3.googleusercontent.com/pw/AP1GczMmx7msCXzYraMQeA7OMpSSpfcQgStMeDsfX-tldMTEIZ25WKPeFl7TJeiE7rv1EP-Mlcu9fTkHxHDnaMY-QOZ8cWk9mbNcZbDcQD0zqVSyLIGlda1xvtrmoGm57zBhixXu9Ve5ElwWlCH8pGuc0SzC=w1920-h1080"
randomimages[40] = "https://lh3.googleusercontent.com/pw/AP1GczP3QLW82MKTgTV0HYozE9lA5fC-4Ta6K50wvpsslSB2R5SOokE1XKUiqJ5qqu6rSjQnne0BQ94l36x2a7Be1G6_T368k_RQvPuqY9RGHVuFUrpMPRkLqhD4NhVtpX20H6L97Qrmt5QXr_zccT1VruCl=w1920-h1080"
randomimages[41] = "https://lh3.googleusercontent.com/pw/AP1GczMXrl0-f2E0GeAClbh7r3aDl8QkpBbF-xwY0MtL7DXY-7JG43B2xJi2uZpVKZZRfO5c_BLquHTDvJF_efUATeW1Ecu6CGLb66ZMV0DZwLxCx5WUflXZlTPxu-uD6Q8HXzOIzsd518fq2Z76FGQ-q-Z9=w1920-h1080"
randomimages[42] = "https://lh3.googleusercontent.com/pw/AP1GczNLJejGQikTnUZZg4DL8Xb4gzcslPr3HTx8PVz9-rvaJAV7D-qASO3LSU9Li6vhxUvrGCYfggD3OKob3OAID3TiwVKwVM0zrbDS37PqG9UpOAmFIx-1DrZZn3e-czAo5UAuWDI1cI5txeNJkmEhhUWW=w1920-h1080"
randomimages[43] = "https://lh3.googleusercontent.com/pw/AP1GczPnjJoVeBJLxXzboR7nTuddTgc5ZEMeqxNgXt3bvPictp3iLtpDKoVftOfIyVvPmu4_NloHTgzeD_IIX5bEKX9LPrFtLPCQdK5FXetPb6SgtueDod5I5ee4lC1TalnMYIT0Dnneu8TneR7DTx2HnQ1z=w1920-h1080"
randomimages[44] = "https://lh3.googleusercontent.com/pw/AP1GczPk4fY48OCMUByOhUVYctinwpZ1TK40_tIX7u6Mes_iFr0tTCU91y4Rb7RoZZrW4BQTNLDyXjbGgcGxJ1i2yCVM-Mm4boCGZs05nZJ3JBdZ2hssP--Kc4pQ_KJJJ6An481LASc_wwpSM8WmVhtAQDIY=w1920-h1080"
randomimages[45] = "https://lh3.googleusercontent.com/pw/AP1GczMPInqYKJDRLoNPBFwabU3Eg92Hrljea8dbESWyJJCodBlzmQh1j__711V7Wm6WStRS2H7VJ7emBbUVHtMAJUViQ_aG4EGO0SWl97zavk9BQ9I79k_UQJcPb1qF4hHFhmcrzAJQv9I8XkKujKhk2dYf=w1920-h1080"
randomimages[46] = "https://lh3.googleusercontent.com/pw/AP1GczMsaASgVD0wfn9bgbYWVaMJLlo7J-K9zNutbWxwHUFUOwp4SDLBZaIPWkbZWLSdL-G2gAcHmcoaAjaTMi2PyzdHLFDszeLQC3lJEhfSCm_D7jhzscQ8_QTTReB9on-s3qboKTvT_QYJ6lNOE8iSG5rW=w1920-h1080"
randomimages[47] = "https://lh3.googleusercontent.com/pw/AP1GczNzGeP9_iYHSlCBsFYSAl26oE_SiFVDzzVg6zET9QDFsMcM05ufRnzyRhsKvyWIiTReuynTQdZEE9zbrKvcquRp7E6DCfVzf9qJr9WomXYZDu6_DFIWWug38SdIl14TRN_phz1_kwds3gWn6ff4NQUF=w1920-h1080"
randomimages[48] = "https://lh3.googleusercontent.com/pw/AP1GczOpX9XDLCMSN7O_i_Jok8VGEbf4ayAfmR09Xlak_LR-Itv_hH_nded1QbDzD0-o81xU3lvTZDnZd5BW49PhSHNG7AANqdrMAYYe2aSSgbEfe5uwsyamkZSG309BqnYoEUjYxVTQPJEyvqqHEsuHJ0Pc=w1920-h1080"
randomimages[49] = "https://lh3.googleusercontent.com/pw/AP1GczPqHLJ4EayaYmianIfH3pXefvBbdbjbvuT489ism8yCG24el30KX3S7T8xtjGyeXq9iq78Y3ZLeDif_mulpjeoW2eXcZyY9GSKbFdUZzZR83zSGoNIBF4SxuqIbRiDg_7_Doy5mHctsgM_2gwZMllVs=w1920-h1080"
randomimages[50] = "https://lh3.googleusercontent.com/pw/AP1GczM5wk1wJO7MplNTf8Q1egpUm0h6UP5cgEcRA6_zra2_XIb-BW_yCZ0AB-l6oy-BCvvf9ZO3dUQoxB0bNiBTL1zkAGZEI_X9WpYWSVgZuyGtjv6c8BnRBv3rtMIx3gKgBu15hSqAzneNrS6MMI82vQiW=w1920-h1080"
randomimages[51] = "https://lh3.googleusercontent.com/pw/AP1GczMuRsTADnadwqnnZl7t4VXM_jGt6uP2ZQysgbsijPi43OqPnHheXBVQCoo5pWFCX-XWuWoAgtl1wyIE_ZvQI8gth5el_1ehDHW13Itg8ueYB9Xokt3ROFohKBRKZEpaZo2Xk39dQQB1fQUjH8OszRvF=w1920-h1080"

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