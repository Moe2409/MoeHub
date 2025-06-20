const svgNS ="http://www.w3.org/2000/svg";

class SvgContainer {
    constructor(id) {
        this.svg = document.getElementById(id);

        if (!this.svg) {
            throw new Error(`Element with id "${id}" not found.`);
        }
    }

    getDimensions() {
        const viewBox = this.svg.getAttribute("viewBox").split(" ").map(Number);

        return {
            width: viewBox[2],
            height: viewBox[3]
        };
    }

    getCenter() {
        const { width, height } = this.getDimensions();
        return [width / 2, height / 2];
    }
}

class Button {
    constructor(name) {
        this.name = name;
        this.subButtons = [];
    }
};

class MainNavigationButton extends Button {
    constructor(name, subButtons) {
        super(name, subButtons)
        this.x ;
        this.y;
    }
}

class MainNavigationButtonPosition {
    static calculatePosition(index, center, radius, totalButtons) {
        const angle = (2 * Math.PI) / totalButtons;
        const nextAngle = index*angle - Math.PI/2;
        const x = center[0] + radius*Math.cos(nextAngle);
        const y = center[1] + radius*Math.sin(nextAngle);
        
        return [Number(x.toFixed(2)), Number(y.toFixed(2))];
    }
};

class MainNavigationButtonRender {
    static render(id, svg, circleXY, radius) {
        const circle = document.createElementNS(svgNS, "circle");

        /*
        circle.setAttribute('id', id);
        circle.setAttribute('class', "main-navigation-button")
        circle.setAttribute('cx', circleXY[0]);
        circle.setAttribute('cy', circleXY[1]);        
        circle.setAttribute('r', radius);
        */

        $(circle).attr({
            id: id,
            class: "main-navigation-button",
            cx: circleXY[0],
            cy: circleXY[1],
            r: radius
        });

        svg.appendChild(circle);
    }
};

class MainLine {
    constructor() {
        this.x;
        this.y;
    }
}

class MainLinePosition {
    static calculatePosition(d, center, circleXY) {
        const directionVector = [center[0] - circleXY[0], center[1] - circleXY[1]];
        const length = Math.sqrt(directionVector[0]**2 + directionVector[1]**2);
        const constant = d/length;
        const actualVector = [constant*directionVector[0], constant*directionVector[1]];
        const x = circleXY[0] + actualVector[0];
        const y = circleXY[1] + actualVector[1];

        return [Number(x.toFixed(2)), Number(y.toFixed(2))];
    }
}

class MainLineRender {
    static render(svg, lineXY) {
        const line = document.createElementNS(svgNS, "line");

        /*
        line.setAttribute('x1', lineXY[0]);
        line.setAttribute('y1', lineXY[1]);
        line.setAttribute('x2', lineXY[0]);
        line.setAttribute('y2', lineXY[1]);        
        */

        $(line).attr({
            x1: lineXY[0],
            y1: lineXY[1],
            x2: lineXY[0],
            y2: lineXY[1]
        });

        svg.appendChild(line);
    }
}

const mainNavigation = new SvgContainer("navbar");
const mainNavigationButtons = {
    settings: new MainNavigationButton("settings"),
    bots: new MainNavigationButton("bots"),
    cams: new MainNavigationButton("cams"),
    noe1: new MainNavigationButton("noe1"),
};
const mainLines = [];

mainNavigationButtons.settings.subButtons = [new MainNavigationButton("changeColorTheme")];

// Make render a function

const mainNavigationButtonsKeys = Object.keys(mainNavigationButtons);

console.log(mainNavigationButtonsKeys)

mainNavigationButtonsKeys.forEach((key, index) => {
    const buttonRadius = 18;
    const navbarRadius = 100;
    const button = mainNavigationButtons[key];
    const buttonPosition = MainNavigationButtonPosition.calculatePosition(
        index, 
        mainNavigation.getCenter(),
        navbarRadius,
        mainNavigationButtonsKeys.length
    );
    const linePosition = MainLinePosition.calculatePosition(
        buttonRadius,
        mainNavigation.getCenter(),
        buttonPosition
    );

    button.x = buttonPosition[0];
    button.y = buttonPosition[1];

    console.log("Button :", button.x, button.y);
    MainNavigationButtonRender.render(
        button.name,
        mainNavigation.svg,
        buttonPosition,
        buttonRadius
    );

    mainLines.push(linePosition);
});

mainLines.forEach((line) => {
    MainLineRender.render(
        mainNavigation.svg,
        mainLines[0]
    );
});

const lines = $("line").toArray();

let i = 0;
function lineAnimation() {
    if (i >= lines.length) {
        i = 0;
    };

    lines.forEach((line) => {
        /*
        line.setAttribute('x1', mainLines[i][0]);
        line.setAttribute('y1', mainLines[i][1]);
        line.setAttribute('x2', mainLines[i][0]);
        line.setAttribute('y2', mainLines[i][1]);
        */
        $(line).attr({
            x1: mainLines[i][0],
            y1: mainLines[i][1],
            x2: mainLines[i][0],
            y2: mainLines[i][1]
    });
    }); 

    for (let j = 0; j < lines.length; j++) {
        gsap.to(lines[j], {
            duration: 1,
            attr: {x2:mainLines[j][0], y2:mainLines[j][1]}
        });
        gsap.to(lines[j], {
            duration: 1,
            attr: {x1:mainLines[j][0], y1:mainLines[j][1]},
            delay: 1
        });
    }
    i++;
};

setInterval(lineAnimation, 2500);


function menuPressed() {
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

/*
let test = document.getElementById("settings");
test.remove();
*/

$(document).ready(function () {
    $(".main-navigation-button").on("click", function() {
        const key = this.id;
        console.log(`You clicked: ${JSON.stringify(mainNavigationButtons[key].subButtons)}`)
    })
});