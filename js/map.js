var mapLink = document.querySelector(".open-map");

var mapPopup = document.querySelector(".popup-map");
var mapClose = mapPopup.querySelector(".popup-button-close");
  
mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("popup-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("popup-show");
      }
    }
});