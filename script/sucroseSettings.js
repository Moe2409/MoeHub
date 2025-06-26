$(document).ready(function () {
    const savedColor = localStorage.getItem("newColor");
    if (savedColor) {
        document.documentElement.style.setProperty("--color", savedColor);
        $("#sucroseColor").val(savedColor); // oppdater input-feltet visuelt også
    }
    $("#sucroseColor").on("input", function () {
        const color = $(this).val();
        localStorage.setItem("newColor", color);
        document.documentElement.style.setProperty("--color", color);
    });
});