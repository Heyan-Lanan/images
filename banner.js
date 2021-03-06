const banner = document.querySelector("#navbar"), insertDom = document.createElement("div");
insertDom.className = "bannerContainer", insertDom.id = "bannerContainer";
const {location: currentLocal = {}} = window, {pathname: currentPath} = currentLocal,
    bannerImageURL = `${window.location.origin}/blog/images/banner/`,
    innerHTML = `\n            <div class="animated" style="transform: translateX(0);">\n                <div class="layer" style="opacity: 0;">\n                    <img src="${bannerImageURL}001.webp" alt="001"/>\n                </div>\n                <div class="layer" style="opacity: 1;">\n                    <img src="${bannerImageURL}002.webp" alt="002"/>\n                </div>\n                <div class="layer" style="opacity: 0;">\n                    <video loop autoplay muted src="${bannerImageURL}003.webm"></video>\n                </div>\n            </div>`;
insertDom.innerHTML = innerHTML, banner.append(insertDom);
const mainLayers = $(".bannerContainer"), [mainLayer, ..._] = mainLayers, animatedLayers = $(".animated"),
    animatedLayer = animatedLayers[0], [leftLayer, theLayer, rightLayer] = $(".layer");
let countEnter = 0;
const resistance = 110, opacityDistance = 70, sizeLimit = (e, a = 0, t = 1) => Math.min(Math.max(e, a), t),
    getWidth = () => (leftLayer.offsetWidth - animatedLayer.offsetWidth) / 2,
    onEnter = ({clientX: e}) => countEnter = e, onMove = ({clientX: e}) => {
        const a = (leftLayer.offsetWidth - animatedLayer.offsetWidth) / 2;
        let t = countEnter - e;
        const n = t / 110 / 100;
        t *= t > 0 ? n : -n, animatedLayer.style.transform = `translateX(${sizeLimit(t, -a, a)}px)`;
        const r = sizeLimit((t >= 0 ? t : -t) / 70);
        theLayer.style.opacity = (1 - r).toString(), t >= 0 ? leftLayer.style.opacity = r.toString() : rightLayer.style.opacity = r.toString()
    }, onLeave = () => {
        animatedLayer.classList.add("css-animated"), theLayer.style.opacity = "1", leftLayer.style.opacity = "0", rightLayer.style.opacity = "0", animatedLayer.style.transform = "translateX(0)", setTimeout((function () {
            animatedLayer.classList.remove("css-animated")
        }), 300)
    }, navbarDoms = $("#navbar");
navbarDoms && navbarDoms.length && (navbarDoms[0].addEventListener("mousemove", onMove), navbarDoms[0].addEventListener("mouseenter", onEnter), navbarDoms[0].addEventListener("mouseleave", onLeave));