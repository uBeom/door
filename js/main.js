new fullpage('#fullpage', {
    licenseKey: '36C61764-B3964BEF-B89206D2-2B30A92A',
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    scrollingSpeed: 700,
    anchors: ['page1', 'page2', 'page3'],
});

//methods
fullpage_api.setAllowScrolling(false);
fullpage_api.setKeyboardScrolling(false);

window.onload = function () {
    const titLogo = document.querySelector('.title .logo');
    const titDesc = document.querySelector('.title .desc');
    const sentences = document.querySelectorAll('.sentence');
    const sliBtn = document.querySelector('.sliBtn');
    const secBtn = document.querySelector('.secBtn');
    const secBtnImg = document.querySelector('.secBtn .secBtnImg');
    const tools = document.querySelectorAll('.tools .tool');
    const prod = document.querySelector('.production');
    const copy = document.querySelector('.copyright');

    let sliBtnCheck = false;
    let secBtnCheck = false;

    sliBtn.addEventListener('click', sliMove, false);

    secBtn.addEventListener('mouseover', () => {
        if (secBtnCheck === false)
            secBtnImg.src = './img/1_3_title_btn2.png';
        else if (secBtnCheck === true)
            secBtnImg.src = './img/1_3_title_btn3.png';
    }, false);
    secBtn.addEventListener('mouseout', () => {
        if (secBtnCheck === false)
            secBtnImg.src = './img/1_3_title_btn.png';
        else if (secBtnCheck === true)
            secBtnImg.src = './img/1_3_title_btn3.png';
    }, false);
    secBtn.addEventListener('click', () => {
        secBtnCheck = true;
        secBtnImg.src = './img/1_3_title_btn3.png';
        setTimeout(fullpage_api.moveTo, 1000, 'page2', 0);
    }, false);

    titLogo.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
    titLogo.addEventListener('animationend', () => {
        titDesc.classList.add('animate__animated', 'animate__fadeIn');
    });

    if (fullpage_api.getActiveSection().index === 2) {
        // 유니티에서 게임 엔딩을후 버튼을 누를때 적용시켜야함
        prod.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        copy.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
    }

    function sliMove() {
        if (fullpage_api.getActiveSlide().index === 0 && sliBtnCheck === false) {
            fullpage_api.moveSlideRight();
        } else if (fullpage_api.getActiveSlide().index === 1 && sliBtnCheck === true) {
            fullpage_api.moveSlideRight();
        }
        switch (fullpage_api.getActiveSlide().index) {
            case 1:
                animSli02();
                break;
            case 2:
                animSli03();
                break;
        }
    }

    function animSli02() {
        sentences[0].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        tools[0].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        sentences[0].addEventListener('animationend', () => {
            sentences[0].classList.remove('animate__fadeIn');
            sentences[0].classList.add('animate__fadeOut');
            sentences[1].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
            tools[1].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        });
        sentences[1].addEventListener('animationend', () => {
            sentences[1].classList.remove('animate__fadeIn');
            sentences[1].classList.add('animate__fadeOut');
            sentences[2].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
            tools[2].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        })
        sentences[2].addEventListener('animationend', () => {
            sentences[2].classList.remove('animate__fadeIn');
            sentences[2].classList.add('animate__fadeOut');
            sentences[3].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
            tools[3].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        })
        sentences[3].addEventListener('animationend', () => {
            setTimeout(() => {
                sliBtnCheck = true;
            }, 1000);
        })
    }

    function animSli03() {
        secBtn.style.visibility = "visible";
        secBtn.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
    }
}