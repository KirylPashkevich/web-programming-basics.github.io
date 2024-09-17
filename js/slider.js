// document.addEventListener('DOMContentLoaded', function() {
//     let mainDivLength; 
//     let offset = 0;
//     const sliderLine = document.querySelector('.swiper-wrapper');
    
//     document.querySelector('.SliderBtn-Next').addEventListener('click', function(){
//         mainDivLength = document.querySelector('.container').clientWidth;
//         offset = offset + mainDivLength;
//         if (offset > mainDivLength*2) {
//             offset = 0;
//         }
//         sliderLine.style.left = -offset + 'px';
//     });
    
//     document.querySelector('.SliderBtn-Prev').addEventListener('click', function () {
//         mainDivLength = document.querySelector('.container').clientWidth;
//         offset = offset - mainDivLength;
//         if (offset < 0) {
//             offset = mainDivLength*2;
//         }
//         sliderLine.style.left = -offset + 'px';
//     });
    
//     })

document.addEventListener('DOMContentLoaded', function() {
    let mainDivLength; 
    let offset = 0;
    let activeSlideIndex = 0;
    const sliderLine = document.querySelector('.swiper-wrapper');
    const slides = sliderLine.querySelectorAll('.swiper-slide');
    const prevBtn = document.querySelector('.SliderBtn-Prev');
    const nextBtn = document.querySelector('.SliderBtn-Next');

    // Функция для показа слайда с анимацией
    const showSlide = (index) => {
        slides.forEach((slide) => slide.style.display = 'none');
        slides[index].style.display = 'block';
        slides[index].classList.add('slide-in');
        setTimeout(() => {
            slides[index].classList.remove('slide-in');
        }, 500);
    };

    // Функция для перехода к следующему слайду
    const nextSlide = () => {
        activeSlideIndex = (activeSlideIndex + 1) % slides.length;
        showSlide(activeSlideIndex);
    };

    // Функция для перехода к предыдущему слайду
    const prevSlide = () => {
        activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
        showSlide(activeSlideIndex);
    };

    // Обработчики событий для кнопок
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Инициализация слайдера
    showSlide(activeSlideIndex);
});