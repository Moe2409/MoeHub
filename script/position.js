const svg = document.getElementById('navbar');
const circles = Array.from(svg.querySelectorAll('circle')).slice(1);
const lengde = 100;
const origo = 119;
const radius = 100;
const vinkel = (2*Math.PI)/circles.length;


var i = 0;
circles.forEach((circle) => {
    const nyVinkel = i*vinkel - Math.PI/2;
    const x = origo + radius*Math.cos(nyVinkel);
    const y = origo + radius*Math.sin(nyVinkel);
    
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);        
    
    console.log(i + '\n' + "x : " + x + '\n' + "y : " + y)
    i++
});
