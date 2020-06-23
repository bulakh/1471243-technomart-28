let formLink = document.querySelector(".main-button--write");
let formPopup = document.querySelector(".popup-form-order");
let formClose = formPopup.querySelector(".popup-button-close");
let formForm = formPopup.querySelector(".popup-form-order__form");
let formName = formPopup.querySelector(".popup-form-order__input--name");
let formEmail = formPopup.querySelector(".popup-form-order__input--email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

formLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.add("popup-show");

    if (storage) {
        formName.value = storage;
        formEmail.focus();
      } else {
        formName.focus();
    }
});


formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.remove("popup-show");
    formPopup.classList.remove("popup-error");
});

formForm.addEventListener("submit", function (evt) {
    if (!formName.value || !formEmail.value) {
      evt.preventDefault();
      formPopup.classList.remove("popup-error");
      formPopup.offsetWidth = formPopup.offsetWidth;
      formPopup.classList.add("popup-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", formName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (formPopup.classList.contains("popup-show")) {
        evt.preventDefault();
        formPopup.classList.remove("popup-show");
        formPopup.classList.remove("popup-error");
      }
    }
});






