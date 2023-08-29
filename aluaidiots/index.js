$ = mdui.$;

fab = document.querySelector("#fab");

fab.onclick = function () {
    window.scrollTo(0, 0);
};

window.onscroll = function () {
    if (window.scrollY > 400) {
        fab.style.display = "block";
    } else {
        fab.style.display = "none";
    }
};

data = {
    "idiots": [
        {
            "id": "timestar",
            "name": "时光星球",
            "qq": "406631360",
            "data": [
                {
                    "desc": "时光帝国",
                    "img": "https://s1.ax1x.com/2023/05/13/p960wyd.png"
                },
                {
                    "desc": "三条边的四边形",
                    "img": "https://s1.ax1x.com/2023/05/13/p960dQH.png"
                },
                {
                    "desc": "追梦人",
                    "img": "https://s1.ax1x.com/2023/05/13/p960sTP.png"
                },
                {
                    "desc": "人像识别",
                    "img": "https://s1.ax1x.com/2023/05/13/p960NWD.png"
                },
                {
                    "desc": "时光奇论",
                    "img": "https://s1.ax1x.com/2023/05/13/p960aSe.png"
                },
                {
                    "desc": "时光奇论2",
                    "img": "https://s1.ax1x.com/2023/05/13/p9600OA.png"
                },
                {
                    "desc": "时说新语",
                    "img": "https://s1.ax1x.com/2023/05/13/p960DeI.png"
                },
                {
                    "desc": "GPT的师父",
                    "img": "https://s1.ax1x.com/2023/08/29/pPa4i0H.png"
                }
            ]
        },
        {
            "id": "triones",
            "name": "北斗星",
            "qq": "1965654167",
            "data": [
                {
                    "desc": "胡说八道",
                    "img": "https://s1.ax1x.com/2023/05/13/p960gfS.jpg"
                },
                {
                    "desc": "指点江山",
                    "img": "https://s1.ax1x.com/2023/05/13/p96B43D.png"
                },
                {
                    "desc": "勾罕见",
                    "img": "https://s1.ax1x.com/2023/05/13/p960fyj.png"
                },
                {
                    "desc": "lua取代java",
                    "img": "https://s1.ax1x.com/2023/05/13/p960RSg.png"
                },
                {
                    "desc": "java退出舞台",
                    "img": "https://s1.ax1x.com/2023/05/13/p960cY8.png"
                },
                {
                    "desc": "胡言乱语",
                    "img": "https://s1.ax1x.com/2023/05/13/p960hOs.png"
                },
                {
                    "desc": "安卓apk转苹果apk",
                    "img": "https://s1.ax1x.com/2023/05/13/p960WlQ.png"
                },
                {
                    "desc": "这就是未来，听北斗星说",
                    "img": "https://s1.ax1x.com/2023/05/13/p9605mn.png"
                },
                {
                    "desc": "狗屁不通的数学证明",
                    "img": "https://s1.ax1x.com/2023/05/16/p92Bjl8.png"
                },
                {
                    "desc": "学校学的是淘汰品",
                    "img": "https://s1.ax1x.com/2023/05/18/p9fdGNR.png"
                },
                {
                    "desc": "振动治好不育",
                    "img": "https://s1.ax1x.com/2023/07/20/pCH9rPP.png"
                }
            ]
        },
        {
            "id": "quzefei",
            "name": "曲泽飞",
            "qq": "3235314917",
            "data": [
                {
                    "desc": "心系苍生",
                    "img": "https://s1.ax1x.com/2023/05/13/p9606Ff.png"
                }
            ]
        },
        {
            "id": "yijianpa",
            "name": "一键爬",
            "qq": "1053062792",
            "data": [
                {
                    "desc": "垃圾AS",
                    "img": "https://s1.ax1x.com/2023/06/25/pCNRIE9.png"
                }
            ]
        },
        {
            "id": "starboy",
            "name": "star哥",
            "qq": "2821981550",
            "data": [
                {
                    "desc": "比一比谁的star多",
                    "img": "https://s1.ax1x.com/2023/07/07/pCchvsU.png"
                },
                {
                    "desc": "不用md用nm",
                    "img": "https://s1.ax1x.com/2023/07/07/pCchxLF.png"
                }
            ]
        }
    ],
    "trashes": [
        {
            "id": "timestar",
            "name": "时光星球",
            "data": [
                {
                    "desc": "智能出题语音机器人",
                    "video": "https://lyzz.top/file/24658"
                },
                {
                    "desc": "时光大制作",
                    "video": "https://lyzz.top/file/24657"
                }
            ]
        },
        {
            "id": "triones",
            "name": "北斗星",
            "data": []
        },
        {
            "id": "quzefei",
            "name": "曲泽飞",
            "data": []
        },
        {
            "id": "yijianpa",
            "name": "一键爬",
            "data": []
        },
        {
            "id": "starboy",
            "name": "star哥",
            "data": []
        }
    ]
};

function init() {
    var idiots_ul = document.querySelector("#idiots>ul"), trashes_ul = document.querySelector("#trashes>ul");
    for (var idiot of data.idiots) {
        var li = document.createElement("li");
        li.innerHTML = '<a href="#' + idiot.id + '">' + idiot.name + '</a>';
        var ul = document.createElement("ul");
        for (var idiot_data of idiot.data) {
            ul.innerHTML += '<li><a href="#' + idiot.id + '-' + idiot_data.desc + '">' + idiot_data.desc + '</a></li>';
        }
        li.appendChild(ul);
        idiots_ul.appendChild(li);
    }
    for (var trash of data.trashes) {
        if (trash.data.length > 0) {
            var li = document.createElement("li");
            li.innerHTML = '<a href="#' + trash.id + '">' + trash.name + '</a>';
            var ul = document.createElement("ul");
            for (var trash_data of trash.data) {
                ul.innerHTML += '<li><a href="#' + trash.id + '-' + trash_data.desc + '">' + trash_data.desc + '</a></li>';
            }
            li.appendChild(ul);
            trashes_ul.appendChild(li);
        }
    }
    var container = document.querySelector(".mdui-container");
    for (var i in data.idiots) {
        var idiot = data.idiots[i];
        var chapter = document.createElement("div");
        chapter.className = "chapter";
        chapter.innerHTML = '<div class="mdui-typo"><h2 id="' + idiot.id + '" class="chapter-title chapter-title-first">' + idiot.name + '</h2>' +
            '<button id="' + idiot.id + '-open" class="mdui-btn mdui-btn-icon" data-i="' + i + '"><i class="mdui-icon material-icons">keyboard_arrow_down</i></button></div>' +
            '<p class="contact">(QQ: <a href="mqqapi://card/show_pslcard?src_type=internal&source=sharecard&version=1&uin=' + idiot.qq + '">' + idiot.qq + '</a>)</p>' +
            '<div id="' + idiot.id + '-container" data-opened="false"></div>';
        container.appendChild(chapter);
        document.getElementById(idiot.id + "-open").onclick = function (event) {
            var i = Number(event.target.dataset.i || event.target.parentNode.dataset.i);
            var idiot = data.idiots[i];
            var div = document.getElementById(idiot.id + "-container");
            if (div.dataset.opened === "false") {
                if (div.innerHTML === "") {
                    for (var idiot_data of idiot.data) {
                        var img = document.createElement("img");
                        img.id = idiot.id + "-" + idiot_data.desc;
                        img.className = "image mdui-center";
                        img.src = idiot_data.img;
                        img.alt = idiot_data.desc;
                        div.appendChild(img);
                        div.innerHTML += '<p class="desc">' + idiot_data.desc + '</p>';
                    }
                    for (var trash_data of data.trashes[i].data) {
                        div.innerHTML += '<video id="' + idiot.id + '-' + trash_data.desc + '" class="video mdui-center" controls="controls">' +
                            '<source src="' + trash_data.video + '" type="video/mp4" /></video><p class="desc">' + trash_data.desc + '</p>';
                    }
                    for (var img of div.querySelectorAll("img")) {
                        img.onclick = function (ev) {
                            var style = ev.target.style;
                            if (style.cursor === "zoom-out") {
                                style.width = "60vw";
                                style.cursor = "zoom-in";
                            } else {
                                style.width = "90vw";
                                style.cursor = "zoom-out";
                            }
                        };
                    }
                } else div.style.display = "block";
                div.dataset.opened = "true";
                event.target.nodeName === "I" ? event.target.parentNode.style.transform = "rotate(180deg)" : event.target.style.transform = "rotate(180deg)";
            } else {
                div.style.display = "none";
                div.dataset.opened = "false";
                event.target.nodeName === "I" ? event.target.parentNode.style.transform = "rotate(0deg)" : event.target.style.transform = "rotate(0deg)";
            }
        };
    }
}

init();