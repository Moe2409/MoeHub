const svg = document.getElementById('navbar');
const circles = Array.from(svg.querySelectorAll('circle')).slice(1)
const circlesXY = [];
const lines = Array.from(svg.querySelectorAll('line'));
const lengde = 100;
const origo = 119;
const radius = 100;
const vinkel = (2*Math.PI)/circles.length;

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
    }

    const line = lines[i];

    line.setAttribute('x1', circleTopPoint[0][0]);
    line.setAttribute('y1', circleTopPoint[0][1]);
    line.setAttribute('x2', circleTopPoint.at(i+1)[0]);
    line.setAttribute('y2', circleTopPoint.at(i+1)[1]);
    i++;
};

setInterval(lineAnimation, 2000);
