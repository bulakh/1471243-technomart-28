(function() {
    let servicesButton = [...document.querySelectorAll(".services__button")],
        servicesContent = [...document.querySelectorAll(".services__item")],
        servicesName;

    servicesButton[0].classList.add("services__button--active");
    servicesContent[0].classList.add("services__item--active");

    servicesButton.forEach(function(item) {
        item.addEventListener("click", selectServicesButton)
    });

    function selectServicesButton() {
        servicesButton.forEach(function(item) {
            item.classList.remove("services__button--active");
        });
        this.classList.add("services__button--active");
        servicesName = this.getAttribute("data-name");
        selectServicesContent(servicesName);
    }

    function selectServicesContent(tab) {
        servicesContent.forEach(function(item) {
            if (item.classList.contains(tab)) {
                item.classList.add("services__item--active");
            } else {
                item.classList.remove("services__item--active");
            }
        });
    }
})();