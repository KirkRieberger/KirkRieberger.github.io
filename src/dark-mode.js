// Dark mode detection
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
// Initial detection
if (prefersDark.matches) {
    $("html").attr("data-bs-theme", "dark");
}
// Listener Function
function darkModeTest(event) {
    if (event.matches) {
        $("html").attr("data-bs-theme", "dark");
    } else {
        $("html").attr("data-bs-theme", "light");
    }
}
// System theme change listener
prefersDark.addEventListener("change", darkModeTest);