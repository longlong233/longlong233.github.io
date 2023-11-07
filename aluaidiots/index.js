const $ = mdui.$;
const fab = document.querySelector("#fab");

fab.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
    fab.style.display = window.scrollY > 400 ? "block" : "none";
});

function toggleEntry(idiot, i) {
    const div = document.getElementById(idiot.id + "-container");
    if (div.dataset.opened === "false") {
        if (div.innerHTML === "") {
            const fragment = document.createDocumentFragment();

            for (const idiot_data of idiot.data) {
                const img = document.createElement("img");
                img.id = idiot.id + "-" + idiot_data.desc;
                img.className = "image mdui-center";
                img.src = idiot_data.img;
                img.alt = idiot_data.desc;
                fragment.appendChild(img);

                const desc = document.createElement("p");
                desc.className = "desc";
                desc.textContent = idiot_data.desc;
                fragment.appendChild(desc);
            }

            for (const trash_data of data.trashes[i].data) {
                const video = document.createElement("video");
                video.id = idiot.id + "-" + trash_data.desc;
                video.className = "video mdui-center";
                video.setAttribute("controls", "controls");

                const source = document.createElement("source");
                source.src = trash_data.video;
                source.type = "video/mp4";
                video.appendChild(source);

                const desc = document.createElement("p");
                desc.className = "desc";
                desc.textContent = trash_data.desc;

                fragment.appendChild(video);
                fragment.appendChild(desc);
            }

            div.appendChild(fragment);

            const images = div.querySelectorAll("img");
            for (const img of images) {
                img.addEventListener("click", (ev) => {
                    const style = ev.target.style;
                    if (style.cursor === "zoom-out") {
                        style.width = "60vw";
                        style.cursor = "zoom-in";
                    } else {
                        style.width = "90vw";
                        style.cursor = "zoom-out";
                    }
                });
            }
        } else {
            div.style.display = "block";
        }
        div.dataset.opened = "true";
        document.getElementById(idiot.id + "-open").style.transform = "rotate(180deg)";
    } else {
        div.style.display = "none";
        div.dataset.opened = "false";
        document.getElementById(idiot.id + "-open").style.transform = "rotate(0deg)";
    }
}

function scrollToElement(selector) {
    document.querySelector(selector).scrollIntoView();
}

function init() {
    const idiots_ul = document.querySelector("#idiots>ul");
    const trashes_ul = document.querySelector("#trashes>ul");

    for (const i in data.idiots) {
        const idiot = data.idiots[i];
        const li = document.createElement("li");
        li.innerHTML = `<a href="#${idiot.id}">${idiot.name}</a>`;
        const ul = document.createElement("ul");

        for (const idiot_data of idiot.data) {
            const lj = document.createElement("li");
            lj.dataset.i = i;
            lj.dataset.desc = idiot_data.desc;
            lj.innerHTML = `<a href="#${idiot.id}-${idiot_data.desc}">${idiot_data.desc}</a>`;

            lj.addEventListener("click", (event) => {
                const i = Number(event.target.dataset.i || event.target.parentNode.dataset.i);
                const desc = event.target.dataset.desc || event.target.parentNode.dataset.desc;
                const idiot = data.idiots[i];

                if (document.getElementById(idiot.id + "-container").dataset.opened === "false") {
                    toggleEntry(idiot, i);
                }
                scrollToElement("#" + idiot.id + '-' + desc);
                setTimeout(() => {
                    scrollToElement("#" + idiot.id + '-' + desc);
                }, 1000);
            });

            ul.appendChild(lj);
        }

        li.appendChild(ul);
        idiots_ul.appendChild(li);
    }

    for (const i in data.trashes) {
        const trash = data.trashes[i];
        if (trash.data.length > 0) {
            const li = document.createElement("li");
            li.innerHTML = `<a href="#${trash.id}">${trash.name}</a>`;
            const ul = document.createElement("ul");

            for (const trash_data of trash.data) {
                const lj = document.createElement("li");
                lj.dataset.i = i;
                lj.dataset.desc = trash_data.desc;
                lj.innerHTML = `<a href="#${trash.id}-${trash_data.desc}">${trash_data.desc}</a>`;

                lj.addEventListener("click", (event) => {
                    const i = Number(event.target.dataset.i || event.target.parentNode.dataset.i);
                    const desc = event.target.dataset.desc || event.target.parentNode.dataset.desc;
                    const trash = data.trashes[i];

                    if (document.getElementById(trash.id + "-container").dataset.opened === "false") {
                        toggleEntry(data.idiots[i], i);
                    }
                    scrollToElement("#" + trash.id + '-' + desc);
                    setTimeout(() => {
                        scrollToElement("#" + trash.id + '-' + desc);
                    }, 1000);
                });

                ul.appendChild(lj);
            }

            li.appendChild(ul);
            trashes_ul.appendChild(li);
        }
    }

    const container = document.querySelector(".mdui-container");
    for (const i in data.idiots) {
        const idiot = data.idiots[i];
        const chapter = document.createElement("div");
        chapter.className = "chapter";
        chapter.innerHTML = `<div class="mdui-typo">
          <h2 id="${idiot.id}" class="chapter-title chapter-title-first">${idiot.name}</h2>
          <button id="${idiot.id}-open" class="mdui-btn mdui-btn-icon" data-i="${i}">
            <i class="mdui-icon material-icons">keyboard_arrow_down</i>
          </button>
        </div>
        <p class="contact">(QQ: <a href="mqqapi://card/show_pslcard?src_type=internal&source=sharecard&version=1&uin=${idiot.qq}">${idiot.qq}</a>)</p>
        <div id="${idiot.id}-container" data-opened="false"></div>`;
        container.appendChild(chapter);

        document.getElementById(idiot.id + "-open").addEventListener("click", (event) => {
            const i = Number(event.target.dataset.i || event.target.parentNode.dataset.i);
            const idiot = data.idiots[i];
            toggleEntry(idiot, i);
        });
    }

    if (location.hash !== "") document.querySelector(`a[href="${decodeURIComponent(location.hash)}"]`).click();
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        window.data = data;
        init();
    });