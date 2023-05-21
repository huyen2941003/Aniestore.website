/* js slider */
window.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.slider');
    var sliderContainer = document.querySelector('.slider-container');
    var slides = document.querySelectorAll('.slide');
    var currentIndex = 0;
    function adjustSliderSize() {
        var windowWidth = window.innerWidth;
        var slideWidth = windowWidth;
        slider.style.width = `${slideWidth}px`;
        sliderContainer.style.width = `${slideWidth * slides.length}px`;
        slides.forEach(function(slide) {
            slide.style.width = `${slideWidth}px`;
        });
    }
    function slideTo(index) {
        var slideWidth = slides[0].offsetWidth;
        sliderContainer.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }
    function slideNext() {
        currentIndex = (currentIndex + 1) % slides.length;
        slideTo(currentIndex);
    }
    window.addEventListener('resize', adjustSliderSize);
    adjustSliderSize();
    setInterval(slideNext, 3000);
});