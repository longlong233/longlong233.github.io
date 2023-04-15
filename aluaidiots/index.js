function initImage() {
    for (var ele of document.querySelectorAll(".image")) {
        ele.onclick = function (event) {
            var style = event.target.style;
            if (style.cursor === "zoom-out") {
                style.width = "60vw";
                style.cursor = "zoom-in";
            } else {
                style.width = "90vw";
                style.cursor = "zoom-out";
            }
        }
    }
}

initImage();