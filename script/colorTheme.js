$(document).ready(function () {
    if (savedColor) {
        $("#nixyColor").val(savedColor); // oppdater input-feltet visuelt også
    }

    if (savedBackground) {
        $("#nixyBackground").val(savedBackground); // oppdater input-feltet visuelt også
    }
    $("#nixyColor").on("input", function () {
        const color = $(this).val();
        localStorage.setItem("newColor", color);
        document.documentElement.style.setProperty("--color", color);
    });

    $("#nixyBackground").on("input", function () {
        const color = $(this).val();
        localStorage.setItem("newBackground", color);
        document.documentElement.style.setProperty("--backgroundColor", color);
    });
});