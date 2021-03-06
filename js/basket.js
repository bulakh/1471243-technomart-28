let basketLink = document.querySelectorAll(".card-product__button--buy");
let basketPopup = document.querySelector(".popup-basket");
let basketClose = basketPopup.querySelector(".popup-button-close");
let basketContinue = basketPopup.querySelector(".main-button--basket-white");


basketLink.forEach(function(entry) {
    entry.addEventListener("click", function(evt) {
        evt.preventDefault();
        basketPopup.classList.add("popup-show-basket");
    });
});

basketClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    basketPopup.classList.remove("popup-show-basket");
});

basketContinue.addEventListener("click", function(evt) {
    evt.preventDefault();
    basketPopup.classList.remove("popup-show-basket");
});


window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (basketPopup.classList.contains("popup-show-basket")) {
            evt.preventDefault();
            basketPopup.classList.remove("popup-show-basket");
        }
    }
});