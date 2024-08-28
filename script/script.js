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
            attr: this.leftX,
            delay: w
        });
        gsap.to(`${eyeSelector} .rightX`, {
            duration: t,
            attr: this.rightX,
            delay: w
        });
    }
};

class Mouth {
    constructor(lips) {
        this.lips = lips
    }
    animation(t, w) {
        gsap.to("#lips", {
            duration: t,
            attr: {d: this.lips},
            delay: w
        });
    }
};

const eyeStates = {
    normal: new Eye(
        "M 100 40 Q 10 90 10 200",
        "M 300 40 Q 390 90 390 200",
        "M 100 760 Q 10 710 10 600",
        "M 300 760 Q 390 710 390 600",
        {x1: 44, y1: 88, x2: 356, y2: 712},
        {x1: 356, y1: 88, x2: 44, y2: 712}
    ),
    close: new Eye(
        "M 200 400 Q 100 400 0 400",
        "M 200 400 Q 300 400 400 400",
        "M 200 400 Q 100 400 0 400",
        "M 200 400 Q 300 400 400 400", 
        {x1: 200, y1: 400, x2: 200, y2:400},
        {x1: 200, y1: 400, x2: 200, y2:400}
    ),
    disgust: new Eye(
        "M 200 90 Q 100 90 0 90",
        "M 200 90 Q 300 90 400 90",
        "M 200 710 Q 100 710 0 710",
        "M 200 710 Q 300 710 400 710",
        {x1: 44, y1: 88, x2: 356, y2: 712},
        {x1: 356, y1: 88, x2: 44, y2: 712}
    ),
    angryLeft: new Eye(
        "M 100 40 Q 10 90 10 200",
        "M 300 40 Q 310 130 390 200",
        "M 100 760 Q 10 710 10 600",
        "M 300 760 Q 390 710 390 600",
        {x1: 44, y1: 88, x2: 356, y2: 712},
        {x1: 333, y1: 134, x2: 44, y2: 712}
    ),
    angryRight: new Eye(
        "M 100 40 Q 90 130 10 200",
        "M 300 40 Q 390 90 390 200",
        "M 100 760 Q 10 710 10 600",
        "M 300 760 Q 390 710 390 600",
        {x1: 67, y1: 134, x2: 356, y2: 712},
        {x1: 356, y1: 88, x2: 44, y2: 712} 
    ),
    smug: new Eye(
        "M 200 300 Q 50 300 10 450",
        "M 200 300 Q 350 300 390 450",
        "M 200 500 Q 100 500 50 500",
        "M 200 500 Q 300 500 350 500",
        {x1: 150, y1: 300, x2: 250, y2: 500},
        {x1: 250, y1: 300, x2: 150, y2: 500}
    )
};

const mouthStates = {
    normal: new Mouth("M 700 150 Q 750 150 800 150"),
    straight: new Mouth("M 650 150 Q 750 150 850 150"),
    smile: new Mouth("M 650 125 Q 750 175 850 125"),
    bigSmile: new Mouth("M 500 10 Q 750 150 1000 10"),
    frown: new Mouth("M 650 175 Q 750 125 850 175"),
};

function normalAnimation(t, w) {
    eyeStates.normal.animation("#leftEye", t, w)
    eyeStates.normal.animation("#rightEye", t, w)
    mouthStates.smile.animation(t, w)
};

function closeAnimation(t, w) {
    eyeStates.close.animation("#leftEye", t, w)
    eyeStates.close.animation("#rightEye", t, w)
};

function blinkAnimation() {
    closeAnimation(0.15, 0)
    currentState(0.2, 0.25)
};

setInterval(blinkAnimation, 10000);

function angryAnimation(t, w) {
    eyeStates.angryLeft.animation("#leftEye", t, w)
    eyeStates.angryRight.animation("#rightEye", t, w)
    mouthStates.frown.animation(t, w)
};

function disgustAnimation(t, w) {
    eyeStates.disgust.animation("#leftEye", t, w)
    eyeStates.disgust.animation("#rightEye", t, w)
    mouthStates.straight.animation(t, w)
};

function smugAnimation(t, w) {
    eyeStates.smug.animation("#leftEye", t, w)
    eyeStates.smug.animation("#rightEye", t, w)
    mouthStates.bigSmile.animation(t, w)
};

const emotions = [
    smugAnimation,
    angryAnimation,
    closeAnimation,
    disgustAnimation,
    normalAnimation
];

var currentState = normalAnimation

let x = 0
function startAnimation() {
    if (x >= emotions.length) {
        x = 0
    }
    emotions[x](0.3, 0)
    currentState = emotions[x]
    x += 1
};

