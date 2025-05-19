// Dark mode detection
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
// Initial detection
if (prefersDark.matches) {
    $("html").attr("data-bs-theme", "dark");
    $("#top-nav").addClass("navbar-dark").addClass("bg-dark");
} else {
    $("#top-nav").addClass("navbar-light").addClass("bg-light");
}
// Listener Function
function darkModeTest(event) {
    if (event.matches) {
        $("html").attr("data-bs-theme", "dark");
        $("#top-nav").removeClass("navbar-light").addClass("navbar-dark");
        $("#top-nav").removeClass("bg-light").addClass("bg-dark");
    } else {
        $("html").attr("data-bs-theme", "light");
        $("#top-nav").removeClass("navbar-dark").addClass("navbar-light");
        $("#top-nav").removeClass("bg-dark").addClass("bg-light");
    }
}
// System theme change listener
prefersDark.addEventListener("change", darkModeTest);