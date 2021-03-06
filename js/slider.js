document.addEventListener("DOMContentLoaded", function() {
    let sliderNext = document.querySelector(".slider__next");
    let sliderPrev = document.querySelector(".slider__previous");
    let sliderScreen = document.querySelectorAll(".slider__item");
    let sliderCircle = document.querySelectorAll(".slider__circle");
    let index = 0;

    sliderScreen[index].classList.add("slider__item--active");


    sliderNext.addEventListener("click", function(event) {

        sliderScreen[index].classList.remove("slider__item--active");
        sliderCircle[index].classList.remove("slider__circle--active");

        index++;

        if (index > sliderScreen.length - 1) {

            index = 0;

        }

        sliderScreen[index].classList.add("slider__item--active");
        sliderCircle[index].classList.add("slider__circle--active");
    });

    sliderPrev.addEventListener("click", function(event) {

        sliderScreen[index].classList.remove("slider__item--active");
        sliderCircle[index].classList.remove("slider__circle--active");

        index--;

        if (index < 0) {

            index = sliderScreen.length - 1;

        }
        sliderScreen[index].classList.add("slider__item--active");
        sliderCircle[index].classList.add("slider__circle--active");
    });


});