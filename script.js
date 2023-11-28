var button = document.querySelector("button");
var ul = document.querySelector("ul");

button.addEventListener("click", function () {
    ul.classList.toggle("show");
});

ul.querySelectorAll("a").forEach(function (evt) {
    evt.addEventListener("click", function () {
        ul.classList.remove("show");
    });
});