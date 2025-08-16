class Eye {
    constructor(eyeSelector, topLeftC, topRightC, bottomRightC, bottomLeftC, leftX, rightX) {
        this.eyeSelector = eyeSelector
        this.topLeftC = topLeftC
        this.topRightC = topRightC
        this.bottomRightC = bottomRightC
        this.bottomLeftC = bottomLeftC
        this.leftX = leftX
        this.rightX = rightX
    }
};

class EyeAnimation {
    static animate(eye, t, w) {
        gsap.to(`${eye.eyeSelector} .topLeftC`, {
            duration: t,
            attr: {d: eye.topLeftC},
            delay: w
        });
        gsap.to(`${eye.eyeSelector} .topRightC`, {
            duration: t,
            attr: {d: eye.topRightC},
            delay: w
        });
        gsap.to(`${eye.eyeSelector} .bottomLeftC`, {
            duration: t,
            attr: {d: eye.bottomLeftC},
            delay: w
        });
        gsap.to(`${eye.eyeSelector} .bottomRightC`, {
            duration: t,
            attr: {d: eye.bottomRightC},
            delay: w
        });
        gsap.to(`${eye.eyeSelector} .leftX`, {
            duration: t,
            attr: {d: eye.leftX},
            delay: w
        });
        gsap.to(`${eye.eyeSelector} .rightX`, {
            duration: t,
            attr: {d: eye.rightX},
            delay: w
        });
        gsap.to(`${eye.eyeSelector}ClipValue`, {
            duration: t,
            attr: {d: `${
                calculateClipValue.eye(eye)
            }`},
            delay: w
        });
    }
};

class Mouth {
    constructor(lip, teeths) {
        this.lip = lip
        this.teeths = teeths
    }
    
    animation(lipSelector, t, w) {
        gsap.to(`${lipSelector} .lip`, {
            duration: t,
            attr: {d: this.lip},
            delay: w
        });
        gsap.to(`${lipSelector} .teeths `, {
            duration: t,
            attr: {d: this.teeths},
            delay: w
        });
    };
};

class calculateClipValue {
    static eye(eye) {
        let result = eye.topLeftC + 
        eye.topRightC.replace("M", " L") + 
        eye.bottomRightC.replace("M", " L") + 
        eye.bottomLeftC.replace("M", " L") +
        eye.topLeftC.replace("M", " L");

        return result;
    };
    static mouth(upperLip, lowerLip) {
        let result = upperLip + lowerLip.replace("M", " L");
        return result;
    };
};

const leftEye = {
    normal: new Eye(
        "#leftEye",
        "M 60 120 C 60 99 71.16 78.96 90 68.04",
        "M 150 68.04 C 168.84 78.96 180 99 180 120",
        "M 180 240 C 180 261 168.84 281.04 150 291.96",
        "M 90 291.96 C 71.16 281.04 60 261 60 240",
        "M 72 84 168 276",
        "M 168 84 72 276"
    ),
    close: new Eye(
        "#leftEye",
        "M 60 180 C 90 180 120 180 120 180",
        "M 120 180 C 120 180 150 180 180 180",
        "M 180 180 C 150 180 120 180 120 180",
        "M 120 180 C 120 180 90 180 60 180", 
        "M 120 180 120 180",
        "M 120 180 120 180"
    ),
    disgust: new Eye(
        "#leftEye",
        "M 60 84 C 90 84 120 84 120 84",
        "M 120 84 C 120 84 150 84 180 84",
        "M 180 276 C 150 276 120 276 120 276",
        "M 120 276 C 120 276 90 276 60 276",
        "M 72 84 167 276",
        "M 168 84 72 276"
    ),
    angry: new Eye(
        "#leftEye",
        "M 60 120 C 60 99 71.16 78.96 90 68.04",
        "M 150 68.04 C 150 89.04 161.16 109.08 180 120",
        "M 180 240 C 180 261 168.84 281.04 150 291.96",
        "M 90 291.96 C 71.16 281.04 60 261 60 240",
        "M 72 84 168 276",
        "M 160 100 72 276"
    ),
    smug: new Eye(
        "#leftEye",
        "M 60 195 C 69 171 90 150 120 150",
        "M 120 150 C 150 150 171 171 180 195",
        "M 165 210 C 150 210 135 210 120 210",
        "M 120 210 C 105 210 90 210 75 210",
        "M 106 152 135 210",
        "M 134 152 105 210"
    ),
    wideEye: new Eye(
        "#leftEye",
        "M 60 120 C 60 99 71.16 78.96 90 68.04",
        "M 150 68.04 C 168.84 78.96 180 99 180 120",
        "M 180 240 C 180 261 168.84 281.04 150 291.96",
        "M 90 291.96 C 71.16 281.04 60 261 60 240",
        "M 110 160 130 200", 
        "M 130 160 110 200"
    ),
    slyAmusement: new Eye(
        "#leftEye",
        "M 60 150 C 90 150 105 150 120 150",
        "M 120 150 C 135 150 150 150 180 150",
        "M 180 165 C 171 189 150 210 120 210",
        "M 120 210 C 90 210 69 189 60 165",
        "M 105 150 134 208",
        "M 135 150 106 208"
    ),
    closedHappy: new Eye(
        "#leftEye",
        "M 60 195 C 69 171 90 150 120 150",
        "M 120 150 C 150 150 171 171 180 195",
        "M 180 195 C 171 171 150 150 120 150",
        "M 120 150 C 90 150 69 171 60 195",
        "M 106 152 106 152",
        "M 134 152 134 152"
    )
};

const rightEye = {
    normal: new Eye(
        "#rightEye",
        "M 270 120 C 270 99 281.16 78.96 300 68.04",
        "M 360 68.04 C 378.84 78.96 390 99 390 120",
        "M 390 240 C 390 261 378.84 281.04 360 291.96",
        "M 300 291.96 C 281.16 281.04 270 261 270 240",
        "M 282 84 378 276",
        "M 378 84 282 276"
    ),
    close: new Eye(
        "#rightEye",
        "M 270 180 C 300 180 330 180 330 180",
        "M 330 180 C 330 180 360 180 390 180",
        "M 390 180 C 360 180 330 180 330 180",
        "M 330 180 C 330 180 300 180 270 180",
        "M 330 180 330 180",
        "M 330 180 330 180"
    ),
    disgust: new Eye(
        "#rightEye",
        "M 270 84 C 300 84 330 84 330 84",
        "M 330 84 C 330 84 360 84 390 84",
        "M 390 276 C 360 276 330 276 330 276", 
        "M 330 276 C 330 276 300 276 270 276",
        "M 282 84 378 276",
        "M 378 84 282 276"
    ),
    angry: new Eye(
        "#rightEye",
        "M 270 120 C 288.84 109.08 300 89.04 300 68.04",
        "M 360 68.04 C 378.84 78.96 390 99 390 120",
        "M 390 240 C 390 261 378.84 281.04 360 291.96",
        "M 300 291.96 C 281.16 281.04 270 261 270 240",
        "M 290 100 378 276",
        "M 378 84 282 276"
    ),
    smug: new Eye(
        "#rightEye",
        "M 270 195 C 279 171 300 150 330 150",
        "M 330 150 C 360 150 381 171 390 195",
        "M 375 210 C 360 210 345 210 330 210",
        "M 330 210 C 315 210 300 210 285 210",
        "M 316 152 345 210",
        "M 344 152 315 210"
    ),
    wideEye: new Eye(
        "#rightEye",
        "M 270 120 C 270 99 281.16 78.96 300 68.04",
        "M 360 68.04 C 378.84 78.96 390 99 390 120",
        "M 390 240 C 390 261 378.84 281.04 360 291.96",
        "M 300 291.96 C 281.16 281.04 270 261 270 240",
        "M 320 160 340 200", 
        "M 340 160 320 200"
    ),
    slyAmusement: new Eye(
        "#rightEye",
        "M 270 150 C 300 150 315 150 330 150",
        "M 330 150 C 345 150 360 150 390 150",
        "M 390 165 C 381 189 360 210 330 210",
        "M 330 210 C 300 210 279 189 270 165",
        "M 315 150 344 208",
        "M 345 150 316 208"
    ),
    closedHappy: new Eye(
        "#rightEye",
        "M 270 195 C 279 171 300 150 330 150",
        "M 330 150 C 360 150 381 171 390 195",
        "M 390 195 C 381 171 360 150 330 150",
        "M 330 150 C 300 150 279 171 270 195",
        "M 316 152 316 152",
        "M 344 152 344 152"
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

const upperLip = {
    bigSmile: new Mouth(
        "M 45 225 C 115 280 180 240 225 240 C 270 240 335 280 405 225",
        `M 90 249 C 88 255 90 265 95 270 C 98 260 102 255
        106 252 C 104 256 105 280 112 287 C 116 264 128 254 
        132 254 C 128 275 132 288 138 303 C 139 290 145 270 
        160 251 C 156 270 162 290 168 311 C 172 290 180 262 
        190 245 C 189 262 195 290 204 314 C 207 291 213 268 
        225 243 C 237 268 243 291 246 314 C 255 290 261 262 
        260 245 C 270 262 278 290 282 311 C 288 290 294 270 
        290 251 C 305 270 311 290 312 303 C 318 288 322 275 
        318 254 C 322 254 334 266 338 287 C 345 280 346 256 
        344 252 C 348 255 352 260 355 270 C 360 265 362 255 360 249`
    )
    /*M 45 240 C 115 280 200 240 225 240 C 250 240 335 280 405 240*/ 
};

const underLip = {
    bigSmile: new Mouth(
        /*"M 45 225 C 120 280 100 315 225 315 C 350 315 330 280 405 225"*/
        "M 405 225 C 330 280 350 315 225 315 C 100 315 120 280 45 225",
       /*Not changed yet*/`M 95 270 C 98 260 102 255 106 252 C 104 256 105 280 
        112 287 C 116 266 128 254 132 254 C 128 275 132 288 
        138 303 C 139 290 145 270 160 251 C 156 270 162 290 
        168 311 C 172 290 180 262 190 245 C 189 262 195 290 
        204 314 C 207 291 213 268 225 243 C 237 268 243 291 
        246 314 C 255 290 261 262 260 245 C 270 262 278 290 
        282 311 C 288 290 294 270 290 251 C 305 270 311 290 
        312 303 C 318 288 322 275 318 254 C 322 254 334 266 
        338 287 C 345 280 346 256 344 252 C 348 255 352 260 355 270`
    )
};

const normalAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.normal, t, w)
    EyeAnimation.animate(rightEye.normal, t, w)
    mouthStates.uSmile.animation("#upperLip", t ,w)
    mouthStates.uSmile.animation("#lowerLip", t, w)
};

const closeAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.close, t, w)
    EyeAnimation.animate(rightEye.close, t, w)
};

const blinkAnimation = () => {
    if (closedEyes.includes(currentState)) {
        console.log("Already closed")
    }
    else {
        closeAnimation(0.15, 0)
        currentState(0.2, 0.25)
    }
};

const disgustAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.disgust, t, w)
    EyeAnimation.animate(rightEye.disgust, t, w)
    mouthStates.straight.animation("#upperLip", t, w)
    mouthStates.straight.animation("#lowerLip", t, w)
};

const angryAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.angry, t, w)
    EyeAnimation.animate(rightEye.angry, t, w)
    mouthStates.frown.animation("#upperLip", t, w)
    mouthStates.frown.animation("#lowerLip", t, w)
};

const smugAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.smug, t, w)
    EyeAnimation.animate(rightEye.smug, t, w)
    mouthStates.smile.animation("#upperLip", t, w)
    mouthStates.smile.animation("#lowerLip", t, w)
};

const stunnedAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.wideEye, t, w)
    EyeAnimation.animate(rightEye.wideEye, t, w)
    mouthStates.smallMouth.animation("#upperLip", t, w)
    mouthStates.smallMouth.animation("#lowerLip", t, w)
};

const slyAmusementAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.slyAmusement, t, w)
    EyeAnimation.animate(rightEye.slyAmusement, t, w)
    mouthStates.smile.animation("#upperLip", t, w)
    mouthStates.smile.animation("#lowerLip", t, w)
};

const grinAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.closedHappy, t, w)
    EyeAnimation.animate(rightEye.closedHappy, t, w)
    upperLip.bigSmile.animation("#upperLip", t, w)
    underLip.bigSmile.animation("#lowerLip", t, w)
    gsap.to(`#mouthClipValue`, {
            duration: t,
            attr: {d: "M 45 225 C 115 280 180 240 225 240 C 270 240 335 280 405 225 L 405 225 C 330 280 350 315 225 315 C 100 315 120 280 45 225"},
            delay: w
        });
};

const emotions = [
    grinAnimation,
    closeAnimation,
    disgustAnimation,
    angryAnimation,
    smugAnimation,
    stunnedAnimation,
    slyAmusementAnimation,
    normalAnimation
];

const closedEyes = [
    closeAnimation,
    grinAnimation
];

var currentState = normalAnimation;

let x = 0
function startAnimation() {
    if (x >= emotions.length) {
        x = 0
    }
    console.log(emotions[x])
    emotions[x](0.4, 0)
    currentState = emotions[x]
    x += 1
};

const savedColor = localStorage.getItem("newColor");
if (savedColor) {
    document.documentElement.style.setProperty("--color", savedColor);
}

const savedBackground = localStorage.getItem("newBackground");
if (savedBackground) {
    document.documentElement.style.setProperty("--backgroundColor", savedBackground);
}

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

$(document).ready(function () {
    setInterval(blinkAnimation, 10000);

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
});
