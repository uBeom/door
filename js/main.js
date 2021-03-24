new fullpage('#fullpage', {
    licenseKey: '36C61764-B3964BEF-B89206D2-2B30A92A',
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    scrollingSpeed: 700,
    anchors: ['page1', 'page2', 'page3', 'page4'],
});

//methods
fullpage_api.setAllowScrolling(false);
fullpage_api.setKeyboardScrolling(false);

window.onload = function () {
    const tits = document.querySelectorAll('.tit');
    const sentences = document.querySelectorAll('.sentence');
    const slideBtn = document.querySelector('.slideBtnOn');
    const sectionBtn = document.querySelector('.sectionBtn');
    let sectionBtnCheck = false;

    slideBtn.addEventListener('click', slide, false);
    sectionBtn.addEventListener('mouseover', over, false);
    sectionBtn.addEventListener('mouseout', out, false);
    sectionBtn.addEventListener('click', click, false);

    tits[0].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
    tits[0].addEventListener('animationend', () => {
        tits[1].classList.add('animate__animated', 'animate__fadeIn');
    });

    function sentenAnim() {
        sentences[0].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        sentences[0].addEventListener('animationend', () => {
            sentences[0].classList.remove('animate__fadeIn');
            sentences[0].classList.add('animate__fadeOut');
            sentences[1].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        });
        sentences[1].addEventListener('animationend', () => {
            sentences[1].classList.remove('animate__fadeIn');
            sentences[1].classList.add('animate__fadeOut');
            sentences[2].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        })
        sentences[2].addEventListener('animationend', () => {
            sentences[2].classList.remove('animate__fadeIn');
            sentences[2].classList.add('animate__fadeOut');
            sentences[3].classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
        })
    }

    function over() {
        if (sectionBtnCheck === false)
            sectionBtn.src = './img/1_3_title_btn2.png';
        else if (sectionBtnCheck === true)
            sectionBtn.src = './img/1_3_title_btn3.png';
    }

    function out() {
        if (sectionBtnCheck === false)
            sectionBtn.src = './img/1_3_title_btn.png';
        else if (sectionBtnCheck === true)
            sectionBtn.src = './img/1_3_title_btn3.png';
    }

    function click() {
        sectionBtnCheck = true;
        sectionBtn.src = './img/1_3_title_btn3.png';
        setTimeout(fullpage_api.moveTo, 1000, 'page2', 0);
    }

    function slide() {
        if (fullpage_api.getActiveSlide().index !== 2) {
            fullpage_api.moveSlideRight();
        }

        switch (fullpage_api.getActiveSlide().index) {
            case 1:
                sentenAnim();
                break;
            case 2:
                slideBtn.classList.remove('slideBtnOn');
                slideBtn.classList.add('slideBtnOff');
                break;
        }
    }
}