$(document).ready(function () {
    $.getJSON("./script/sample.json", function(data) {
        
    }).fail(function() {
        console.log("Failed to load json file")
    });
});