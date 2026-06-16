
let isArabic = false;

function toggleLang() {
    isArabic = !isArabic;

    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = isArabic
            ? el.getAttribute("data-ar")
            : el.getAttribute("data-en");
    });
}

/* SERVICES (ALL 9 BACK — FIXED) */
let services = [
    { img:"s.1.png", title:"Hair & Face Treatment", desc:"Hair and skin rejuvenation." },
    { img:"s.2.png", title:"Plastic Surgery", desc:"Cosmetic surgical procedures." },
    { img:"s.3.png", title:"Laser Hair Removal", desc:"Permanent hair reduction." },
    { img:"s.4.png", title:"Cosmetic Procedures", desc:"Facial enhancement treatments." },
    { img:"s.5.png", title:"Skin Treatment", desc:"Advanced dermatology care." },
    { img:"s.6.png", title:"4 Plus Lifting", desc:"Skin tightening technology." },
    { img:"s.7.png", title:"Tecar Therapy", desc:"Therapeutic body treatment." },
    { img:"s.8.png", title:"Dental Services", desc:"Full dental care solutions." },
    { img:"s.9.png", title:"Fractional Laser", desc:"Advanced laser skin treatment." }
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

/* BEFORE AFTER */
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
