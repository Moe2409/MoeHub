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