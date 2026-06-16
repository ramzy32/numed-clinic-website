
let isArabic = false;

function toggleLang() {
    isArabic = !isArabic;

    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = isArabic
            ? el.getAttribute("data-ar")
            : el.getAttribute("data-en");
    });
}

// SERVICES
let services = [
    {
        img: "s.1.png",
        title: "Hair & Face Treatment",
        desc: "Advanced skin and hair rejuvenation using safe modern techniques."
    },
    {
        img: "s.2.png",
        title: "Plastic Surgery",
        desc: "Natural-looking cosmetic surgical procedures with safety focus."
    },
    {
        img: "s.3.png",
        title: "Laser Hair Removal",
        desc: "Permanent hair reduction using advanced laser technology."
    }
];

let i = 0;

function updateService() {
    document.getElementById("serviceImg").src = services[i].img;
    document.getElementById("serviceTitle").innerText = services[i].title;
    document.getElementById("serviceDesc").innerText = services[i].desc;
}

function nextService() {
    i = (i + 1) % services.length;
    updateService();
}

function prevService() {
    i = (i - 1 + services.length) % services.length;
    updateService();
}

// BEFORE AFTER
let ba = ["ba.1.png","ba.2.png","ba.3.png"];
let b = 0;

function nextBA() {
    b = (b + 1) % ba.length;
    document.getElementById("baImg").src = ba[b];
}

function prevBA() {
    b = (b - 1 + ba.length) % ba.length;
    document.getElementById("baImg").src = ba[b];
}
