document.addEventListener("DOMContentLoaded", function(event) {
    console.log('Starting up engines...');
    setConsoleLog();
    console.log('-----------------------------------------------------------------------');
});

//https://stackoverflow.com/questions/6604192/showing-console-errors-and-alerts-in-a-div-inside-the-page
function setConsoleLog() {
    if (typeof console != "undefined") {
        if (typeof console.log != 'undefined') {
            console.olog = console.log;
        }
        else {
            console.olog = function() {};
        }
    }

    console.log = function(message) {
        console.olog(message);
        document.getElementById('consoleDiv').innerHTML += ('<p>' + message + '</p>');
    };
    console.error = console.debug = console.info = console.log;
}

