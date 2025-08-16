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
    constructor(lips, upperTeeths, lowerTeeths) {
        this.lips = lips
        this.upperTeeths = upperTeeths
        this.lowerTeeths = lowerTeeths
    }
};

class MouthAnimation {
    static animate(lips, t, w) {
        gsap.to(`#lips`, {
            duration: t,
            attr: {d: lips.lips},
            delay: w
        });
        gsap.to(`#upperTeeths`, {
            duration: t,
            attr: {d: lips.upperTeeths},
            delay: w
        });
        gsap.to(`#lowerTeeths`, {
            duration: t,
            attr: {d: lips.lowerTeeths},
            delay: w
        });
         gsap.to(`#mouthClipValue`, {
            duration: t,
            attr: {d: lips.lips},
            delay: w
        });
    }
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

const mouthStatesOld = {
    uSmile: new Mouth("M 210 330 C 210 350 240 350 240 330"),
    straight: new Mouth("M 210 345 C 225 345 225 345 240 345"),
    smile: new Mouth("M 150 300 C 195 330 255 330 300 300"), 
    frown: new Mouth("M 210 345 C 210 325 240 325 240 345"),
    smallMouth: new Mouth("M 220 345 C 225 345 225 345 230 345")
};

const mouthStates = {
    bigSmile: new Mouth(
        `M 45 225 C 115 280 180 240 225 240 C 270 240 335 280 405 225 
        L 405 225 C 330 280 350 315 225 315 C 100 315 120 280 45 225`,
        `M 90 249 C 88 255 90 265 95 270 C 98 260 102 255
        106 252 C 104 256 105 280 112 287 C 116 264 128 254 
        132 254 C 128 275 132 288 138 303 C 139 290 145 270 
        160 251 C 156 270 162 290 168 311 C 172 290 180 262 
        190 245 C 189 262 195 290 204 314 C 207 291 213 268 
        225 243 C 237 268 243 291 246 314 C 255 290 261 262 
        260 245 C 270 262 278 290 282 311 C 288 290 294 270 
        290 251 C 305 270 311 290 312 303 C 318 288 322 275 
        318 254 C 322 254 334 266 338 287 C 345 280 346 256 
        344 252 C 348 255 352 260 355 270 C 360 265 362 255 360 249`,
        `M 95 270 C 98 260 102 255 106 252 C 104 256 105 280 
        112 287 C 116 266 128 254 132 254 C 128 275 132 288 
        138 303 C 139 290 145 270 160 251 C 156 270 162 290 
        168 311 C 172 290 180 262 190 245 C 189 262 195 290 
        204 314 C 207 291 213 268 225 243 C 237 268 243 291 
        246 314 C 255 290 261 262 260 245 C 270 262 278 290 
        282 311 C 288 290 294 270 290 251 C 305 270 311 290 
        312 303 C 318 288 322 275 318 254 C 322 254 334 266 
        338 287 C 345 280 346 256 344 252 C 348 255 352 260 355 270`
    ),
    uSmile: new Mouth(
        `M 210 330 C 210 339 216 345 225 345 C 234 345 240 339 240 330 
        L 240 330 C 240 339 234 345 225 345 C 216 345 210 339 210 330`,
        `M 210.00 330.00 C 210.00 330.00 210.00 330.00 210.00 330.00 C 210.00 330.00 210.00 330.00 
        210.90 335.13 C 210.90 335.13 210.90 335.13 210.90 335.13 C 210.90 335.13 210.90 335.13 
        213.51 339.64 C 213.51 339.64 213.51 339.64 213.51 339.64 C 213.51 339.64 213.51 339.64 
        217.50 342.99 C 217.50 342.99 217.50 342.99 217.50 342.99 C 217.50 342.99 217.50 342.99 
        222.40 344.77 C 222.40 344.77 222.40 344.77 222.40 344.77 C 222.40 344.77 222.40 344.77 
        227.60 344.77 C 227.60 344.77 227.60 344.77 227.60 344.77 C 227.60 344.77 227.60 344.77 
        232.50 342.99 C 232.50 342.99 232.50 342.99 232.50 342.99 C 232.50 342.99 232.50 342.99 
        236.49 339.64 C 236.49 339.64 236.49 339.64 236.49 339.64 C 236.49 339.64 236.49 339.64 
        239.10 335.13 C 239.10 335.13 239.10 335.13 239.10 335.13 C 239.10 335.13 239.10 335.13 
        240.00 330.00 C 240.00 330.00 240.00 330.00 240.00 330.00 C 240.00 330.00 240.00 330.00 240.00 330.00`,
        `M 210.23 332.60 C 210.23 332.60 210.23 332.60 210.23 332.60 C 210.23 332.60 210.23 332.60 
        212.01 337.50 C 212.01 337.50 212.01 337.50 212.01 337.50 C 212.01 337.50 212.01 337.50 
        215.35 341.41 C 215.35 341.41 215.35 341.41 215.35 341.41 C 215.35 341.41 215.35 341.41 
        219.87 344.10 C 219.87 344.10 219.87 344.10 219.87 344.10 C 219.87 344.10 219.87 344.10
        225.00 345.00 C 225.00 345.00 225.00 345.00 225.00 345.00 C 225.00 345.00 225.00 345.00
        230.13 344.10 C 230.13 344.10 230.13 344.10 230.13 344.10 C 230.13 344.10 230.13 344.10 
        234.65 341.41 C 234.65 341.41 234.65 341.41 234.65 341.41 C 234.65 341.41 234.65 341.41 
        237.99 337.50 C 237.99 337.50 237.99 337.50 237.99 337.50 C 237.99 337.50 237.99 337.50 
        239.77 332.60 C 239.77 332.60 239.77 332.60 239.77 332.60 C 239.77 332.60 239.77 332.60 239.77 332.60`
    ),
    straight: new Mouth(
        `M 210 345 C 215 345 220 345 225 345 C 230 345 235 345 240 345
        L 240 345 C 235 345 230 345 225 345 C 220 345 215 345 210 345`,
        `M 210.00 345 C 210.00 345 210.00 345 210.00 345 C 210.00 345 210.00 345
        213.33 345 C 213.33 345 213.33 345 213.33 345 C 213.33 345 213.33 345
        216.67 345 C 216.67 345 216.67 345 216.67 345 C 216.67 345 216.67 345
        220.00 345 C 220.00 345 220.00 345 220.00 345 C 220.00 345 220.00 345
        223.33 345 C 223.33 345 223.33 345 223.33 345 C 223.33 345 223.33 345
        226.67 345 C 226.67 345 226.67 345 226.67 345 C 226.67 345 226.67 345
        230.00 345 C 230.00 345 230.00 345 230.00 345 C 230.00 345 230.00 345
        233.33 345 C 233.33 345 233.33 345 233.33 345 C 233.33 345 233.33 345
        236.67 345 C 236.67 345 236.67 345 236.67 345 C 236.67 345 236.67 345
        240.00 345 C 240.00 345 240.00 345 240.00 345 C 240.00 345 240.00 345 240.00 345`,
        `M 211.67 345 C 211.67 345 211.67 345 211.67 345 C 211.67 345 211.67 345
        215.00 345 C 215.00 345 215.00 345 215.00 345 C 215.00 345 215.00 345
        218.33 345 C 218.33 345 218.33 345 218.33 345 C 218.33 345 218.33 345
        221.67 345 C 221.67 345 221.67 345 221.67 345 C 221.67 345 221.67 345
        225.00 345 C 225.00 345 225.00 345 225.00 345 C 225.00 345 225.00 345
        228.33 345 C 228.33 345 228.33 345 228.33 345 C 228.33 345 228.33 345
        231.67 345 C 231.67 345 231.67 345 231.67 345 C 231.67 345 231.67 345
        235.00 345 C 235.00 345 235.00 345 235.00 345 C 235.00 345 235.00 345
        238.33 345 C 238.33 345 238.33 345 238.33 345 C 238.33 345 238.33 345 238.33 345`
    ),
    smile: new Mouth(
        `M 150 300 C 170 315 195 323 225 323 C 255 323 280 315 300 300
        L 300 300 C 280 315 255 323 225 323 C 195 323 170 315 150 300`,
        `M 150 300 C 150 300 150 300 150 300 C 150 300 150 300
        164.07 308.95 C 164.07 308.95 164.07 308.95 164.07 308.95 C 164.07 308.95 164.07 308.95
        179.63 315.76 C 179.63 315.76 179.63 315.76 179.63 315.76 C 179.63 315.76 179.63 315.76
        196.67 320.37 C 196.67 320.37 196.67 320.37 196.67 320.37 C 196.67 320.37 196.67 320.37
        215.19 322.71 C 215.19 322.71 215.19 322.71 215.19 322.71 C 215.19 322.71 215.19 322.71
        234.81 322.71 C 234.81 322.71 234.81 322.71 234.81 322.71 C 234.81 322.71 234.81 322.71
        253.33 320.37 C 253.33 320.37 253.33 320.37 253.33 320.37 C 253.33 320.37 253.33 320.37
        270.37 315.76 C 270.37 315.76 270.37 315.76 270.37 315.76 C 270.37 315.76 270.37 315.76
        285.93 308.95 C 285.93 308.95 285.93 308.95 285.93 308.95 C 285.93 308.95 285.93 308.95
        300 300 C 300 300 300 300 300 300 C 300 300 300 300 300 300`,
        `M 156.85 304.74 C 156.85 304.74 156.85 304.74 156.85 304.74 C 156.85 304.74 156.85 304.74
        171.67 312.63 C 171.67 312.63 171.67 312.63 171.67 312.63 C 171.67 312.63 171.67 312.63
        187.96 318.35 C 187.96 318.35 187.96 318.35 187.96 318.35 C 187.96 318.35 187.96 318.35
        205.74 321.83 C 205.74 321.83 205.74 321.83 205.74 321.83 C 205.74 321.83 205.74 321.83
        225 323 C 225 323 225 323 225 323 C 225 323 225 323
        244.26 321.83 C 244.26 321.83 244.26 321.83 244.26 321.83 C 244.26 321.83 244.26 321.83
        262.04 318.35 C 262.04 318.35 262.04 318.35 262.04 318.35 C 262.04 318.35 262.04 318.35
        278.33 312.63 C 278.33 312.63 278.33 312.63 278.33 312.63 C 278.33 312.63 278.33 312.63
        293.15 304.74 C 293.15 304.74 293.15 304.74 293.15 304.74 C 293.15 304.74 293.15 304.74 293.15 304.74`
    )
};

const normalAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.normal, t, w)
    EyeAnimation.animate(rightEye.normal, t, w)
    MouthAnimation.animate(mouthStates.uSmile, t, w)
};

const closeAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.close, t, w)
    EyeAnimation.animate(rightEye.close, t, w)
    MouthAnimation.animate(mouthStates.uSmile, t, w)
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
    MouthAnimation.animate(mouthStates.straight, t, w)
};

const angryAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.angry, t, w)
    EyeAnimation.animate(rightEye.angry, t, w)
    MouthAnimation.animate(mouthStates.uSmile, t, w)
};

const smugAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.smug, t, w)
    EyeAnimation.animate(rightEye.smug, t, w)
    MouthAnimation.animate(mouthStates.smile, t, w)
};

const stunnedAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.wideEye, t, w)
    EyeAnimation.animate(rightEye.wideEye, t, w)
    MouthAnimation.animate(mouthStates.uSmile, t, w)
};

const slyAmusementAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.slyAmusement, t, w)
    EyeAnimation.animate(rightEye.slyAmusement, t, w)
    MouthAnimation.animate(mouthStates.uSmile, t, w)
};

const grinAnimation = (t, w) => {
    EyeAnimation.animate(leftEye.closedHappy, t, w)
    EyeAnimation.animate(rightEye.closedHappy, t, w)
    MouthAnimation.animate(mouthStates.bigSmile, t, w)
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
    emotions[x](0.3, 0)
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

    function calculateTeethsPositions(p0, p1, p2, p3) {
        let points = [];
        for (i = 0; i < 10; i++) {
            let t = i/9;
            let x = (1-t)**3 * p0[0] + 3*(1-t)**2 * t * p1[0] + 3*(1-t) * t**2 * p2[0] + t**3 * p3[0];
            let y = (1-t)**3 * p0[1] + 3*(1-t)**2 * t * p1[1] + 3*(1-t) * t**2 * p2[1] + t**3 * p3[1];
            points.push([x, y]);
        }
        console.log(JSON.stringify(points, null));
    };
    let p0 = [225, 323];
    let p1 = [255, 323];
    let p2 = [280, 315];
    let p3 = [300, 300];
    calculateTeethsPositions(p0, p1, p2, p3)
});
