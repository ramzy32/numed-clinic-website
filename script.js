let isArabic = false;

function toggleLang() {
    isArabic = !isArabic;

    document.querySelectorAll("[data-en]").forEach(el => {
        const en = el.getAttribute("data-en");
        const ar = el.getAttribute("data-ar");

        if (en && ar) {
            el.innerText = isArabic ? ar : en;
        }
    });

    // optional RTL fix
    document.body.style.direction = isArabic ? "rtl" : "ltr";
    document.body.style.textAlign = isArabic ? "right" : "left";
}
