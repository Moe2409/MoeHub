$(document).ready(function () {
    if (savedColor) {
        $("#sucroseColor").val(savedColor); // oppdater input-feltet visuelt også
    }

    if (savedBackground) {
        $("#sucroseBackground").val(savedBackground); // oppdater input-feltet visuelt også
    }
    $("#sucroseColor").on("input", function () {
        const color = $(this).val();
        localStorage.setItem("newColor", color);
        document.documentElement.style.setProperty("--color", color);
    });

    $("#sucroseBackground").on("input", function () {
        const color = $(this).val();
        localStorage.setItem("newBackground", color);
        document.documentElement.style.setProperty("--backgroundColor", color);
    });
});