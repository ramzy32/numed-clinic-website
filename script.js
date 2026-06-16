
// LANGUAGE
let isArabic = false;

function toggleLang() {
    isArabic = !isArabic;

    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = isArabic
            ? el.getAttribute("data-ar")
            : el.getAttribute("data-en");
    });
}

// SERVICES SLIDER
let services = [
    {
        img: "s.1.png",
        title: "Hair & Face Treatment",
        desc: "Skin and hair rejuvenation using modern safe techniques."
    },
    {
        img: "s.2.png",
        title: "Plastic Surgery",
        desc: "Advanced cosmetic surgical procedures with natural results."
    },
    {
        img: "s.3.png",
        title: "Laser Hair Removal",
        desc: "Safe and effective laser technology for smooth skin."
    }
];

let sIndex = 0;

function updateService() {
    document.getElementById("serviceImg").src = services[sIndex].img;
    document.getElementById("serviceTitle").innerText = services[sIndex].title;
    document.getElementById("serviceDesc").innerText = services[sIndex].desc;
}

function nextService() {
    sIndex = (sIndex + 1) % services.length;
    updateService();
}

function prevService() {
    sIndex = (sIndex - 1 + services.length) % services.length;
    updateService();
}

// BEFORE AFTER
let ba = ["ba.1.png", "ba.2.png", "ba.3.png"];
let bIndex = 0;

function nextBA() {
    bIndex = (bIndex + 1) % ba.length;
    document.getElementById("baImg").src = ba[bIndex];
}

function prevBA() {
    bIndex = (bIndex - 1 + ba.length) % ba.length;
    document.getElementById("baImg").src = ba[bIndex];
}
