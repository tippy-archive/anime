(function() {
    if (window.innerWidth > 480) return;

    const loadingImages = [
        "https://lh3.googleusercontent.com/pw/AP1GczMtR-SAbn9C962_cG8H2P03TCv4CFjR0WtAR7_4hlwkHaElSUXJahuRZKzrH344hyTvnlU-ry_F8opsYTQ4J17Rt7gT8JAJTjKPO79YXuILvzQ5Qf9EcDEs-9simCHj-hAeHGjsxsS0bPoHwYAV5XLq=h1080=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczNLhrf4hZ-MnD8-FELWd3KJm3a_nacesn0lmQi9283okTWs7RpUXnffx0AYtb85lwFwp9abrhR1qBPqO2f-R1bzfo33qjD3L_ZUf6vfB_XBMxhmWk6wYOV8OIEBDt1ZwSFc98gFpPjA3Yk40sGZtHAJ=h1080=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczO0fgif17Ugtkd7VukgNGQtLM0KgJToR6Qbo40tuWKTKgntw5jGHOFBWVq1S1MNtg6zW5hZvFHjEFxuh3mUR8zqmIVwkOLpcQFAooNSXljMv72AmQzFXf2eEXJjjRlWL3vnNm_F4PJpgDNl4W4N1utd=h1080=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczONU2t9YupNJihC0zvma2eM-M3wxrjBNPdmFjWMzyutKHzTFfiSiaimxl7cp0aOGaXiMeEofodd8nVAqX4ylsUNwFjR9jTqf0U9DBRnOIGpubAjOk3gQSm_EeV7VEDbM8q2bwZsbRN43jDrqxAK_Anq=h1080=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczMMEOJtQY0GvpUi_zMhmUF-CzU6I7GLQdhYS8L94MPSxkMFCqnLrzwvj7OFWlSqUGyjV-YoyOaZJ_icMXzjzwh6MqcEsBOBWLXxHBEJYcR867Wts4icfalJVRfjXoSazjtoFfg0LJG3gBUGJk4K8E6L=h1080=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczMon84HNlDVCQMqaOHJOUUIcUJb-IbBblSLztUrjmGcuyalBpPXNDlOWO6PC5jeW0grFZynt7EyUGZIOkWv9ugdXSyquZwwCT0HCjPaAjCCQNpkIOjNmjn3hPRiRu-8q3LTSXLnh_FgdhqgLxcWyFjz=h1080=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczM0VoFWKJCSDSA7l3zx1ZIZygFn9nFm-kZxuSc7p2myuauZgWbjED-gypx-sq4DWhVUSVCODwtl0Kq6-5-Dn7NNvj2RMDMN7qsFdhZFGHIoPZkUygWqUx0Re_oTwOjtse3clKVhvwcdMxcYQE7UnEAO=h1080=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczNRbBfeN5es68FHEjBKJNJj-dGOa_zroxSxx6hhrjYrPDmZDo1dG2Lx__lfSGNz_158tDx85dlpswm495AsVhqrE39MlyD7hiVeS28P-htZK6daxNk74TIVpX1pT3zd6uK62kEes0brxA81GxI99Eee=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczOzn5_YuhtLSgNBu5OEbZOoqI-5SJh-y_-IJn0bmWPqY4Ztxp16JKMYz6U4DhGH6JXqhX8o3Mssz9pRJ6ruxiqC-L1JgRstc3tamFU1kTJHy6RzLlBpsfW64YcTyBDBVLVpY8nQjO52iQDvT6SGB0ei=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczPfWyKSJlWuVKCs_WxKntCMo53WdgSO0Sxd0qfCQCfh8dcDNDZPvExUjIc1zZtzfHELsJ-49dVR3Svrqk4Q7W8HK2ILwE09RLfQ2H8n-bFlvGeEnd1jjCv0x3ssd343gxvW4okA0bz9QghQaQbKCBpd=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczPWzdgMBRGEil1Cgy36a-m9P9qmuOK6dT0cCkynIrnk_OpQ_aX-_qn96igkVenk0l6IZ-2rv-O6TEM5Rb44sYloSROGJashtNtoX1nGzqYZL3XEMstoQe0NY9eUxu2-OwKVH66RWB9-fBAJLKxNX0fb=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczPgExiEnKM2ijX1nWT7UqM7EFMOR_VvTYLnzwuooIuoAu6oihLoUR6P8wdKg7JU66LHQC6qcfqEtT6l_-4m2dVapgZZbNuD5qW8RVFSCLwdRlYE7LwxEStYBUuIvMNAMFtr_gIBiBqvzqiGHgmJmb2P=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczN41CgJcBuKSLEsK0HalGH6DaPJLPzWSX5bvWrFF-7bXxLUZ1rs_Y2nijieqW5FiPk-jRsTSJKDmSh4f0LDIXo3Pef1iRErG9VBd7wFm7x3-LUZnwZ1FDSB61FfxuDWKyKKig-WxxN5FPvwMlORp_Fg=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczOIvDbR3TgwOBLzs8WejzJlB2AX_VDNTuDKGWJwMUKm5o2L0mpwSQc1CZqW-X-bPhAF6HV0Yoms4QE6p1r8srPb43hy-CbOvmFJNIzkjbcWk8Hz52jQpQNIe8xOeUABn3uCqVTlHDfZjNwpgcWtnngB=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczPUl7L5Dh_fu4e8pUyJHdVKBuvwHy8AjuLSeCJwagbKDLhwtWtFAWqTsznsF740ZfmAsJe9-905JzHX1SHH79vjgveWHjk-8GBsvCw0JqlVqErLfx8Ty3yYHYOlUaYyAKNPMSocDPDLjn1b6FTs5L4e=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczN0XR-CU4A_w530VVgV-xjQfWV215JWWoozwvzJMj2k5Jw2YlvT-ttY3m2D9LfcC2JhMJ2BNW8q0ohLLWAlQJ6zFbblHZemtyWBMTIRrz9EzVraLMviKj4HSu_PK3Z6I14Dm33AJg6VGhITCCqAxq2f=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczNV8EYviq-2Qn66gDon2TLa4MBEfCIy4fULjAov9Q5hhuLbMpj8ZVCwYK3q-FvIH0FjVOogX3hMfdTxPdLeDYpRZMxPj_WSMJZ5sQG1ZiVjA7WVJa4PKTlBwssk5HgFnz_eGAWDNFNgwRu4NsofQXQ1=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczORrH19b2FFPERbnwNiFD6SKxhOYK-bNPuSASJ7hdgXuY2f85ROvR4jsa5U3hPUJ4bXVRStdYuMex5ibQ9j8NK5BdLcB6rrzn6fiVJfK9vtjVThy6rpx_K_avdbtZCV8SszsYOv-dlQc-hRjY9oAb9n=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczMJBt8prT6rtk5GD2CVBn2gwWjBgOjaoOodDzQ7vHgSy5fWVABkVq438jP6t_a41KknUnptfM-bBmsGmrLRMDQvLGnkXfXAIdz3F2tjMJ1JKhCUZK9FhsyOAPOAkagtqRPOciPt-91Tpz1bvG1qFRfg=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczOzRATOc7x4NpVMYJAxk_WGZLN0mMyVZH3oaSt-kzgMpMQjYg6sDHmYl19Y77EroV8tFHVA6hKxozP_GiuNuwq1JMlh3cRAjayxaFdu0j3ODJZDDMswLDbvfcoXnZt90sS-Cr5KTsGAz56guRsSb-l0=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczO_JMMmJKHCjbmnaRd9OT2pWXTCFNKkW4UK2ogcl3v7YgiQRh24IQ0XBojUx5m_3o27eAtdVf6ufqleH-1EOT-ZgI0X8MPWiyqVgncyjIs09-TPe7zOOE0FqqI-WEbPEY5zxUw1oxwsdvW7pL3LNqrn=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczM7fL3LFMZadmdk9NcnfwC1WWSUx7xq4-zfcTIgnYUqslFbNyVs1UG3kDTdad2-xqICUt0f5PlJXWxiYwo9kuMDyr74V8uMKwZIG3ZQfyY1xuNlMe1cUYWbyAr_RiYgB_pOIy4XJeFtVmxTsm3cu4ZW=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczP9rRuTXQTb8QzUIhbOq6-TkqZk-Nnv9VVN_A_eRLWLGhJPG8orKx8yieHT1JTPj1JTw3ixL4ra0SwAg0CuLWb9svYG-eD7UNr5afcPG7kc2SYgzn2PTcVrQa4uZZblJF4zqrfsh8s5RDtffpq9-ixP=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczNeab-vVTWoawtRug_XB4Oa0Olc30cV6cQBR-vDuo6qooZw6UuswdPD29yf4WGeGLTv8kKbua2MSByWAfOv8THVlpmd--dV5wKXXAE7FinBQBObL_YrsN0D4saDKi0EkGl5wgpk1k2s3ttRihkNgd9B=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczOnlOqeKMFbMQDVnMkT3bcy5_9youagE03HQhgvHDnvbGbkKIeyEvm32bGWjM-BE-DakIdqESX4vgWZlmQ41DQqE4BcoeAqRH_xMrhJM7xUDj6TCO_XvcPDHRMCVDfEWu4FtYzg-qOjIsah8z7QNpQ3=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczNRx2zH1KEZMf32NrBLuoYP93laigoDVN_KgFA_hreLkp2sE9HqUpVjDD6SbalPuhNCofS5Ukwl1YLbECYUD3BX_CSdUoSdrheNdgKW9LOHX90bBjILFaSQcX_J4nJa5qpX4rMywciUH2Nvf9AA1Ztu=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczP812xRmqz55AXmXcIH6MePV5CUkoxMv_dq6lFRgQIh2GJdjgV4xEh_pPTRxb7DvWfqNfYecLa2twLkb0G7QeiduUmLHXKlxm0wXyODMD4xvFCUkkdS5G2JMdg2LTK5QlmlO7BQHNURVrndaB-_n_Zt=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczOAGISei8oQwvUCyjT7i6WaMPesaZAbBqUGbtuazW4ZEEYe6EhZfBbQyrgwJ4IRzZk0Ci05D8gs7QV3aGsyXXgbIlp6uJ6VVLRpwfYCcWBPjwFtZ1c5aBwGewqO4yj6MN9PaW9gbf3OSB_KzmNGGVyb=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczMsXk4i-b45yVGZOtXul1btq70-RLvj9-FMHOTPJDwyRrxqJcBBoWKUUK_GkQ0m3ROxTpNvE7xO-pzxMlBhn-ihGSFkxEvFd6qoeyPy5CLQ1qgsGU4Y-gMlZM0Fup6ItaHQaKBK1_Fq8EsuT60MWbHc=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczN68pkKkBH17pvUqxtYfVy0A0OxAT2tf30wS3v8WvsYg29cuvBQF0PSEoQgYbLuF60pmnBsdRoxVM8zeXF3w6GljMQd5k_PLYrf9xwC58pdc8RNcjU3mDyKSt2FKGn3O8HM1tdTo6NwKI8-808BfgBH=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczOHqbobLpAf7INRVMHHxLvz7cCVFj9b3uFvSznEe5ghDcLgQKvynm2lHr3AMMgnVcDP-hYVRy-O4GXmVkWwijlY944wQUhbgoSEpXJI_t1VNvAfnxImpkIhV3hL5ZOZfA8wXq_gPhI_3fbQgPPZTDZD=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczPic4-K3o-DPTR_4SGboCgRhWPg8_vnEBjiEdltRVc9Vjin6hsDJH6QSFVk5zYMtmYRVKd5iLntQFGb6FlRBbDfSM5IkItMTwb7-sAhT0weBhS1-14VEgxFlxdbrQaPs3MXoQW5iajnF07zIbsPawAv=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczMCJrlngOtxe-1zCn-6yhBl-ssnZfANhmRepE0gxPDw16hVUym3sWBvvLN4E-MZNwsiub7m1ZZWFFuFHUUPL6fYMoyAm5KyNn7ZCjspSixGRGZrXt8c0w4wkM0EWpYO2x23tx8io5-u44ZWAGt2hXq4=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczOeLeYTL14dvOgCtp8XgD0-CQx9ZdGINTPtjOGKIBVLaLiBKGEiFtHnDfMWLxErL4x797AFqeEqK43dWs5-C8oRPvcNsbIJ-s56GwdC70noa7GaJI2T6h3ihuAgsQuZLjLiNvLchGVbXS-1CE47pEit=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczMRhhjCDxOCWiDcJPOUz8JXMpsu-AgEwQ6kt4Wt0kH26foTbpEfjrs5Kpr2sbNfWucxmO734mbpOdp6SVkeupZSwMpcAbwDdY3-nAE61-gMdntUkjgJs4ctJoTP_aCYs-e21GkX6vXyYGEs_8mT-kA-=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczP07vjrjFeZ_NUuzrgZudOrG7ai8FX1Ho2WhbVxIrFcmZ6y1C3m6nIUWxZSaKkOMCPDdBnYom7DrIy9ozwIvGB81kNJOVILkR18hmppLDqGMvrEdvI0BCM9vs9sv8jHklchqZYGcF3cLctA2V1tJAxa=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczMsMf22jioJ6hDf3LV6Apefc32onhy5WFOsmG2OR5GGzfgoHJSbXFqcRenJy1z6nyU8Mr82tvujSz__pHbtdU6mVad30A3Ah97WyPX4Ht3V7ZWcT0qSEBza4Bvz6YcEk1DXeG8RWXjy_Fetcdh-jHfO=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczNmm7kYMhsss8T8if3wh-g89MgG4uUGyHnvdk2PQyU3HAsk8RhIJJDJnXtov-9ju_D6DFQB41SMCMznwUh-WLBhQ8A8jyh_3jyAo21EWocbAnC_3CjoeV_1JQLkCANqhTbpN7-JslbTjLRQSLG14nDj=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczPMFePe5mfjFDsSyXrkZ8GiobAhhiHXVf_vmcNX88-PiraAqGwbbYpRfgN3dajxzkDN0dxAI_7-kjWyPplJWvcAss3jDvpQ032JQRuk4atVx5gMwrJIysrd-xodr0ojRS1QZqgCJvyvg8wE5HF5KTLH=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczMkHkf7HFfvt0kdIDoPoK3z_4YRmQSCJrEXKhtarmXQ0u-mrAKeydtM2nMwWRcLbPB4HrWsFCDnVjySSRq-_E1oTGiO_A38l8qzyxVXFObWBKShLfJsCfnwf4wiqqdrOaBFL912dBLEe9fXJO4IWL4R=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczMMdBz9Qw6X95tC9MqwfOt8VNmiXeI8rPpwV2Fw0Xcppr8OBzDlUbIPhcTH3bOD_C3hRK533m4F1A4Co0fkw5-QRxZOLjG-513PjZkovzS7xA-u-HTvxJc-oSawqOKQLE8rPF2NBvKS4wdeQE2Mv0qc=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczOsqkx1KxZJgKCxb9WZfjmHdFBqHOyXKXiACHk7JF7DjHTektZB_7rd14dvfcfANi18QAsPy9AYCX8c092ytHqF-iKGOIt2w8OKqtL2ExW1MTzfQEKLjX9LhSMU_9vgOUoTcH1uSynnVqTvzVG6EuPX=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczPjIRCfp0HHWY7R2kSf1ub3_2XTCyVqI998OlJWxJgsIGrsKMo60Mf4s_NnXMj8ZObWaVqfN0PZ9vckks-o2BIItk0TQwCStGQK3UyuaBNw5gr7JW7ApVy0YLtjyNeE58ZhMDYrMjZhOgd1FY00Tayd=w800",
        "https://lh3.googleusercontent.com/pw/AP1GczN2c6o5XYsy4nKvZcAGKYsLSyv-Qu6D1nIU_PFqBPS_6GbarF5V9L8-OwYjGev4rz3iNHArGb_ChlGT_SbYRijm_kRQEFk4w54CERcVJcxiUiy5FpejVV-emS-81hhVg1DonHCGn5VR3oVACppH7daK=w800"
    ];
    const randomImg = loadingImages[Math.floor(Math.random() * loadingImages.length)];

    document.write(`
        <div id="mobile-loader" style="
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #fff; z-index: 9999; display: flex; flex-direction: column;
            align-items: center; justify-content: center; transition: opacity 0.5s ease;
        ">
            <img id="mobile-loader-img" src="${randomImg}" style="width: 90%; max-width: 400px; border-radius: 15px; margin-bottom: 20px;">
            <div class="loader-dots" style="font-size: 14px; color: #CBA2FF; font-weight: bold;">Loading...</div>
        </div>
    `);

    window.addEventListener('load', function() {
        const loader = document.getElementById('mobile-loader');
        if (!loader) return;

        const startTime = Date.now();
        const minDisplayTime = 1000;

        Promise.all([
            window.dataLoader || Promise.resolve(),
            new Promise(resolve => setTimeout(resolve, minDisplayTime))
        ]).then(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        });
    });
})();