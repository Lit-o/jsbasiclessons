const btn = document.querySelector(".btn");
let timerId, timerIdInt, i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation, {once: true})

// let text = "tikki";
// const logger = () => {
//     if (i === 3) {
//         clearInterval(timerIdInt);
//     }
//     console.log(text);
//     i++;

// };

// btn.addEventListener("click", () => {
//     // timerId = setTimeout (logger, 2000);
//     timerIdInt = setInterval(logger, 700);
// })

// рекурсивный setTimeout, как альтернатива setInterval
// let id = setTimeout(function log(){
//     console.log("I'm func");
//     id = setTimeout(log, 500)
// }, 500)