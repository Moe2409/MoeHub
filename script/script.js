const dailyComments = [
    '"Have a great day"',
    '"You got this"',
    '"I believe in you"',
    `"You're doing great"`,
    '"Keep going"',
    '"One step at a time"',
    '"Take it easy today"'
];

$(document).ready(function () {
    const random = Math.floor(Math.random() * dailyComments.length);
    $("#sucroseWriting").text(dailyComments[random]);
});