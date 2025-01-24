class Eye {
    constructor(topLeftC, topRightC, bottomleftC, bottomRightC, leftX, rightX) {
        this.topLeftC = topLeftC
        this.topRightC = topRightC
        this.bottomleftC = bottomleftC
        this.bottomRightC = bottomRightC
        this.leftX = leftX
        this.rightX = rightX
    }

    animation(eyeSelector, t, w) {
        gsap.to(`${eyeSelector} .topLeftC`, {
            duration: t,
            attr: {d: this.topLeftC},
            delay: w
        });
        gsap.to(`${eyeSelector} .topRightC`, {
            duration: t,
            attr: {d: this.topRightC},
            delay: w
        });
        gsap.to(`${eyeSelector} .bottomLeftC`, {
            duration: t,
            attr: {d: this.bottomleftC},
            delay: w
        });
        gsap.to(`${eyeSelector} .bottomRightC`, {
            duration: t,
            attr: {d: this.bottomRightC},
            delay: w
        });
        gsap.to(`${eyeSelector} .leftX`, {
            duration: t,
            attr: {d: this.leftX},
            delay: w
        });
        gsap.to(`${eyeSelector} .rightX`, {
            duration: t,
            attr: {d: this.rightX},
            delay: w
        });
    }
};

class Mouth {
    constructor(lips) {
        this.lips = lips
    }
    
    animation(lipSelector, t, w) {
        gsap.to(`${lipSelector}`, {
            duration: t,
            attr: {d: this.lips},
            delay: w
        });
    }
};

const leftEye = {
    normal: new Eye(
        "M 60 120 C 60 99 71.16 78.96 90 68.04",
        "M 180 120 C 180 99 168.84 78.96 150 68.04",
        "M 60 240 C 60 261 71.16 281.04 90 291.96",
        "M 180 240 C 180 261 168.84 281.04 150 291.96",
        "M 72 84 168 276",
        "M 168 84 72 276"
    ),
    close: new Eye(
        "M 60 180 C 90 180 120 180 120 180",
        "M 180 180 C 150 180 120 180 120 180",
        "M 60 180 C 90 180 120 180 120 180",
        "M 180 180 C 150 180 120 180 120 180", 
        "M 120 180 120 180",
        "M 120 180 120 180"
    ),
    disgust: new Eye(
        "M 60 84 C 90 84 120 84 120 84",
        "M 180 84 C 150 84 120 84 120 84",
        "M 60 276 C 90 276 120 276 120 276",
        "M 180 276 C 150 276 120 276 120 276",
        "M 72 84 168 276",
        "M 168 84 72 276"
    ),
    angry: new Eye(
        "M 60 120 C 60 99 71.16 78.96 90 68.04",
        "M 180 120 C 161.16 109.08 150 89.04 150 68.04",
        "M 60 240 C 60 261 71.16 281.04 90 291.96",
        "M 180 240 C 180 261 168.84 281.04 150 291.96",
        "M 72 84 168 276",
        "M 160 100 72 276"
    ),
    smug: new Eye(
        "M 60 195 C 69 171 90 150 120 150",
        "M 180 195 C 171 171 150 150 120 150",
        "M 75 210 C 90 210 105 210 120 210",
        "M 165 210 C 150 210 135 210 120 210",
        "M 106 152 135 210",
        "M 134 152 105 210"
    ),
    wideEye: new Eye(
        "M 60 120 C 60 99 71.16 78.96 90 68.04",
        "M 180 120 C 180 99 168.84 78.96 150 68.04",
        "M 60 240 C 60 261 71.16 281.04 90 291.96",
        "M 180 240 C 180 261 168.84 281.04 150 291.96",
        "M 110 160 130 200", 
        "M 130 160 110 200"
    ),
    slyAmusement: new Eye(
        "M 60 150 C 90 150 105 150 120 150",
        "M 180 150 C 150 150 135 150 120 150",
        "M 60 165 C 69 189 90 210 120 210",
        "M 180 165 C 171 189 150 210 120 210",
        "M 106 152 135 210",
        "M 134 152 105 210"
    )
};

const rightEye = {
    normal: new Eye(
        "M 270 120 C 270 99 281.16 78.96 300 68.04",
        "M 390 120 C 390 99 378.84 78.96 360 68.04",
        "M 270 240 C 270 261 281.16 281.04 300 291.96",
        "M 390 240 C 390 261 378.84 281.04 360 291.96",
        "M 282 84 378 276",
        "M 378 84 282 276"
    ),
    close: new Eye(
        "M 270 180 C 300 180 330 180 330 180",
        "M 390 180 C 360 180 330 180 330 180",
        "M 270 180 C 300 180 330 180 330 180",
        "M 390 180 C 360 180 330 180 330 180", 
        "M 330 180 330 180",
        "M 330 180 330 180"
    ),
    disgust: new Eye(
        "M 270 84 C 300 84 330 84 330 84",
        "M 390 84 C 360 84 330 84 330 84",
        "M 270 276 C 300 276 330 276 330 276",
        "M 390 276 C 360 276 330 276 330 276", 
        "M 282 84 378 276",
        "M 378 84 282 276"
    ),
    angry: new Eye(
        "M 270 120 C 288.84 109.08 300 89.04 300 68.04",
        "M 390 120 C 390 99 378.84 78.96 360 68.04",
        "M 270 240 C 270 261 281.16 281.04 300 291.96",
        "M 390 240 C 390 261 378.84 281.04 360 291.96",
        "M 290 100 378 276",
        "M 378 84 282 276"
    ),
    smug: new Eye(
        "M 270 195 C 279 171 300 150 330 150",
        "M 390 195 C 381 171 360 150 330 150",
        "M 285 210 C 300 210 315 210 330 210",
        "M 375 210 C 360 210 345 210 330 210",
        "M 316 152 345 210",
        "M 344 152 315 210"
    ),
    wideEye: new Eye(
        "M 270 120 C 270 99 281.16 78.96 300 68.04",
        "M 390 120 C 390 99 378.84 78.96 360 68.04",
        "M 270 240 C 270 261 281.16 281.04 300 291.96",
        "M 390 240 C 390 261 378.84 281.04 360 291.96",
        "M 320 160 340 200", 
        "M 340 160 320 200"
    ),
    slyAmusement: new Eye(
        "M 270 150 C 300 150 315 150 330 150",
        "M 390 150 C 360 150 345 150 330 150",
        "M 270 165 C 279 189 300 210 330 210",/*"M 270 195 C 300 210 315 210 330 210"*/
        "M 390 165 C 381 189 360 210 330 210",/*"M 390 195 C 360 210 345 210 330 210"*/ 
        "M 316 152 345 210",
        "M 344 152 315 210"
    )
};

const mouthStates = {
    normal: new Mouth("M 700 150 Q 750 150 800 150"),
    uSmile: new Mouth("M 210 330 C 210 350 240 350 240 330"),
    straight: new Mouth("M 210 345 C 225 345 225 345 240 345"),
    smile: new Mouth("M 150 300 C 195 330 255 330 300 300"), 
    frown: new Mouth("M 210 345 C 210 325 240 325 240 345"),
    smallMouth: new Mouth("M 220 345 C 225 345 225 345 230 345")
};

const normalAnimation = (t, w) => {
    leftEye.normal.animation("#leftEye", t, w)
    rightEye.normal.animation("#rightEye", t, w)
    mouthStates.uSmile.animation("#upperLip", t ,w)
    mouthStates.uSmile.animation("#underLip", t, w)
};

const closeAnimation = (t, w) => {
    leftEye.close.animation("#leftEye", t, w)
    rightEye.close.animation("#rightEye",t, w)
};

const blinkAnimation = () => {
    closeAnimation(0.15, 0)
    currentState(0.2, 0.25)
};

const disgustAnimation = (t, w) => {
    leftEye.disgust.animation("#leftEye", t, w)
    rightEye.disgust.animation("#rightEye", t, w)
    mouthStates.straight.animation("#upperLip", t, w)
    mouthStates.straight.animation("#underLip", t, w)
};

const angryAnimation = (t, w) => {
    leftEye.angry.animation("#leftEye", t, w)
    rightEye.angry.animation("#rightEye", t, w)
    mouthStates.frown.animation("#upperLip", t, w)
    mouthStates.frown.animation("#underLip", t, w)
};

const smugAnimation = (t, w) => {
    leftEye.smug.animation("#leftEye", t, w)
    rightEye.smug.animation("#rightEye", t, w)
    mouthStates.smile.animation("#upperLip", t, w)
    mouthStates.smile.animation("#underLip", t, w)
};

const stunnedAnimation = (t, w) => {
    leftEye.wideEye.animation("#leftEye", t, w)
    rightEye.wideEye.animation("#rightEye", t, w)
    mouthStates.smallMouth.animation("#upperLip", t, w)
    mouthStates.smallMouth.animation("#underLip", t, w)
}

const slyAmusementAnimation = (t, w) => {
    leftEye.slyAmusement.animation("#leftEye", t, w)
    rightEye.slyAmusement.animation("#rightEye", t, w)
    mouthStates.smile.animation("#upperLip", t, w)
    mouthStates.smile.animation("#underLip", t, w)
}

const emotions = [
    closeAnimation,
    disgustAnimation,
    angryAnimation,
    smugAnimation,
    stunnedAnimation,
    slyAmusementAnimation,
    normalAnimation
];

var currentState = normalAnimation;

let x = 0
function startAnimation() {
    if (x >= emotions.length) {
        x = 0
    }
    emotions[x](0.3, 0)
    currentState = emotions[x]
    x += 1
};

setInterval(blinkAnimation, 10000);
/*
function angryAnimation(t, w) {
    eyeStates.angryLeft.animation("#leftEye", t, w)
    eyeStates.angryRight.animation("#rightEye", t, w)
    mouthStates.frown.animation("#upperLip", t, w)
    mouthStates.frown.animation("#underLip", t, w)
};

function disgustAnimation(t, w) {
    eyeStates.disgust.animation("#leftEye", t, w)
    eyeStates.disgust.animation("#rightEye", t, w)
    mouthStates.straight.animation("#upperLip", t, w)
    mouthStates.straight.animation("#underLip", t, w)
};

function smugAnimation(t, w) {
    eyeStates.smug.animation("#leftEye", t, w)
    eyeStates.smug.animation("#rightEye", t, w)
    mouthStates.bigSmileUpper.animation("#upperLip", t, w)
    mouthStates.bigSmileUnder.animation("#underLip", t, w)
};

function stunnedAnimation(t, w) {
    eyeStates.wideEye.animation("#leftEye", t, w)
    eyeStates.wideEye.animation("#rightEye", t, w)
    mouthStates.smallMouth.animation("#upperLip", t, w)
    mouthStates.smallMouth.animation("#underLip", t, w)
}

const emotions = [
    smugAnimation,
    angryAnimation,
    closeAnimation,
    disgustAnimation,
    normalAnimation,
    stunnedAnimation
];
*/
const cube = document.getElementById("cube");

for (let i = 0; i <= 15; i++) {
    let div = document.createElement("div");
    div.className = "horisontal-line"; 
    div.style.top = `${i*100/15}%`;
    cube.appendChild(div);

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