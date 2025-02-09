function moveElementRandomly(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandomButton = document.querySelector("#move-random");
moveRandomButton.addEventListener("mouseenter", function () {
    moveElementRandomly(moveRandomButton);
});
