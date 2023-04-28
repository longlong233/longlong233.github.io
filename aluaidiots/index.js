$ = mdui.$;

Scrollbar.use(OverscrollPlugin);
scrollbar = Scrollbar.init(document.querySelector(".scroll"), {
    speed: 2.0,
    damping: 0.2,
    thumbMinSize: 24,
    alwaysShowTracks: true,
    overscrollEffect: 'bounce',
    overscrollDamping: 0.4
});

function initAnchor() {
    for (var ele of document.querySelectorAll("li>a")) {
        ele.href = "javascript:void(0);";
        ele.onclick = function (event) {
            scrollbar.scrollTo(0, document.querySelector(event.target.dataset.scrollto).offsetTop, 500);
        }
    }
}

function initImage() {
    for (var ele of document.querySelectorAll(".image")) {
        ele.insertAdjacentHTML('afterend', '<p class="desc">' + ele.alt + '</p>');
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

initAnchor();
initImage();
