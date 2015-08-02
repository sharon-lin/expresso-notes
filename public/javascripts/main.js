var p;
$(document).ready(function () {
	maybeStart();
    var keyMap = {
            "87": "gs", // w
            "83": "a",  // s
            "69": "bb",  // e
            "68": "b",  // d
            "70": "c",  // f
            "84": "cs", // t
            "71": "d",  // g
            "89": "eb", // y
            "72": "e",  // h
            "74": "f",  // j
            "73": "fs", // i
            "75": "g"   // k
        },
        bodyElem = $('body');

    p = Piano.load('piano', {
        height: bodyElem.height(),
        width: bodyElem.width()
    });

    bodyElem.keydown(function (ev) {
        var key = ev.which.toString();
        console.log(key);

        if (keyMap.hasOwnProperty(key)) {
            key = keyMap[key];
            sendData(key);
        } else {
            console.log("Invalid key.");
        }
    });
});