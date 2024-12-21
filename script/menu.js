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

const svg = document.getElementById('navbar');
const circles = Array.from(svg.querySelectorAll('circle')).slice(1)
const circlesXY = [];
const lines = Array.from(svg.querySelectorAll('line'));
const lengde = 100;
const origo = 119;
const radius = 100;
const vinkel = (2*Math.PI)/circles.length;
const navbar = document.getElementById("navbar")

const k = 0.18;
const retningsVektor = [];
const faktiskVektor = [];
const circleTopPoint = [];

var i = 0;
circles.forEach((circle) => {
    const nyVinkel = i*vinkel - Math.PI/2;
    const x = origo + radius*Math.cos(nyVinkel);
    const y = origo + radius*Math.sin(nyVinkel);

    retningsVektor[i] = [origo - x, origo - y];
    faktiskVektor[i] = [k*retningsVektor[i][0], k*retningsVektor[i][1]];
    circlesXY[i] = [x, y];
    circleTopPoint[i] = [circlesXY[i][0] + faktiskVektor[i][0], circlesXY[i][1] + faktiskVektor[i][1]];

    
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);        
    circle.setAttribute('r', 18); 

    console.log(i + '\n' + "x : " + x + '\n' + "y : " + y);
    i++;
});


i = 0;
function lineAnimation() {
    if (i >= lines.length) {
        i = 0;
    };

    lines.forEach((line) => {
        line.setAttribute('x1', circleTopPoint[i][0]);
        line.setAttribute('y1', circleTopPoint[i][1]);
        line.setAttribute('x2', circleTopPoint[i][0]);
        line.setAttribute('y2', circleTopPoint[i][1]);
    }); 

    for (let j = 0; j < lines.length; j++) {
        gsap.to(lines[j], {
            duration: 1,
            attr: {x2:circleTopPoint[j][0], y2:circleTopPoint[j][1]}
        });
        gsap.to(lines[j], {
            duration: 1,
            attr: {x1:circleTopPoint[j][0], y1:circleTopPoint[j][1]},
            delay: 1
        });
    }

    i++;

    /*
    const line = lines[i];

    line.setAttribute('x1', circleTopPoint[0][0]);
    line.setAttribute('y1', circleTopPoint[0][1]);
    line.setAttribute('x2', circleTopPoint.at(i+1)[0]);
    line.setAttribute('y2', circleTopPoint.at(i+1)[1]);
    i++;
    */
};

setInterval(lineAnimation, 2500);


function fuck(s) {
    console.log(s)
}
