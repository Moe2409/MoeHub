$(document).ready(function () {
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