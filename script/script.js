function menu_pressed() {
    var checkbox = document.getElementById('menu-icon');

    if (checkbox.checked) {
        gsap.to("#menu-icon-block1", {
            duration: 0.3,
            rotation: 45,
            top: "42.5%"
        });
        gsap.to("#menu-icon-block2", {
            duration: 0.3,
            rotation: 45,
            top: "42.5%"
        });
        gsap.to("#menu-icon-block3", {
            duration: 0.3,
            rotation: -45,
            top: "42.5%"
        });
    } else {
        gsap.to("#menu-icon-block1", {
            duration: 0.3,
            rotation: 0,
            top: "0",
        });
        gsap.to("#menu-icon-block2", {
            duration: 0.3,
            rotation: 0,
            top: "42.5%"
        });
        gsap.to("#menu-icon-block3", {
            duration: 0.3,
            rotation: 0,
            top: "85%"
        });
    };
};

gsap.to("#navbar", {
    duration: 60,
    rotation: -360,
    repeat: -1,
    ease: "none"
});

