// touchstart
// при возникновении касания к элементу


// touchmove
// При соприкосании начинает двигаться и каждое смещение отслеживается


// touchend
// Как только палец оторвался от элемента


// touchenter
// Срабатывает, когда мы уже вели пальцем по экрану, но 
// наскочили на отслеживаемый элемент


// touchleave
// Срабатывает, когда мы вели палец по элементу, а потом не 
// отрывая от экрана ушли с элемента


// touchcancel
// когда точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log("start");
    })
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    })
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log("touchend");
    })
})

// e.touches - свойство которое дает список всех пальцев 

// e.targetTouches - тоже самое, но для элемента

// e.changedTouches - список пальцев которые участвуют в событии 