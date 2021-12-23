"use strict"

function first() {
    setTimeout(function() {
        console.log(1)
    }, 500)
}
function second() {
    console.log(2);
}
first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

learnJS("JS", function() {
    console.log("Да, он действительно это учит");
})

function done () {
    console.log("Yes, it's true")
}
learnJS("JS", done)