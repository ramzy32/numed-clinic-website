let isArabic = false;

function toggleLang() {
    isArabic = !isArabic;

    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = isArabic
            ? el.getAttribute("data-ar")
            : el.getAttribute("data-en");
    });
}
