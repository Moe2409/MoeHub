/*
const gammelA = [-10, 0];
const gammelB = [-10, 3.5];
const gammelC = [-8.14, 6.84];
const gammelD = [-5, 8.66];
const gammelOrigo = [0, 0];
const gammelRadius = 10;

const koordinatListe = [gammelA, gammelB, gammelC, gammelD];

const nyRadius = 60;
let nyOrigo = [330, 120];

const skaler = nyRadius/gammelRadius;
const points = document.querySelectorAll(".point");


for (i = 0; i < 4; i++) {
    points[i].setAttribute('cx', (nyOrigo[0] + (koordinatListe[i][0] - gammelOrigo[0])*skaler).toFixed(2));
    points[i].setAttribute('cy', (nyOrigo[1] - (koordinatListe[i][1] - gammelOrigo[1])*skaler).toFixed(2));
};

for (i = 0; i < 4; i++) {
    points[i+8].setAttribute('cx', (nyOrigo[0] - (koordinatListe[i][0] - gammelOrigo[0])*skaler).toFixed(2));
    points[i+8].setAttribute('cy', (nyOrigo[1] - (koordinatListe[i][1] - gammelOrigo[1])*skaler).toFixed(2));
};

nyOrigo = [330, 240];

for (i = 0; i < 4; i++) {
    points[i+4].setAttribute('cx', (nyOrigo[0] + (koordinatListe[i][0] - gammelOrigo[0])*skaler).toFixed(2));
    points[i+4].setAttribute('cy', (nyOrigo[1] + (koordinatListe[i][1] - gammelOrigo[1])*skaler).toFixed(2));
};

for (i = 0; i < 4; i++) {
    points[i+12].setAttribute('cx', (nyOrigo[0] - (koordinatListe[i][0] - gammelOrigo[0])*skaler).toFixed(2));
    points[i+12].setAttribute('cy', (nyOrigo[1] + (koordinatListe[i][1] - gammelOrigo[1])*skaler).toFixed(2));
};


points.forEach((point) => {
    console.log(point);
});  */

const cube = document.getElementById("cube");

for (let i = 0; i <= 15; i++) {
    let div = document.createElement("div");
    div.className = "horisontal-line"; 
    div.style.top = `${i*100/15}%`;
    cube.appendChild(div);

    console.log(div);

    div = document.createElement("div");
    div.className = "vertical-line"; 
    div.style.left = `${i*100/15}%`;
    cube.appendChild(div);
};

let showGridActive = false;
function showGrid() {
    const horisontal_lines = document.querySelectorAll('.horisontal-line');
    const vertical_lines = document.querySelectorAll('.vertical-line');

    if (showGridActive) {
        horisontal_lines.forEach(horisontal_line => {
            horisontal_line.style.display = 'none';
        });
    
        vertical_lines.forEach(vertical_line => {
            vertical_line.style.display = 'none';
        });

        showGridActive = false;
    } else {
        horisontal_lines.forEach(horisontal_line => {
            horisontal_line.style.display = 'block';
        });
    
        vertical_lines.forEach(vertical_line => {
            vertical_line.style.display = 'block';
        });

        showGridActive = true;
    };
};