const btn = document.querySelector("button");
const btns = document.querySelectorAll("button");

const overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//     alert('OUOU')
// };

// коллбек. сначала выполнится 'click', а уже потом наша функция
// btn.addEventListener('click', (e, mySomeData) => {
//     console.log(e.target);
//     // e.target.style.backgroundColor = "gold";
//     e.target.remove();
//     alert("2");
// });

let i = 0;
const doWithElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // e.target.style.backgroundColor = "gold";
    // i++;
    // if (i === 1) {
    //     btn.removeEventListener('click', doWithElement);
    // }
    // e.target.remove();
    // alert("2");
}

btn.addEventListener('click', doWithElement);
overlay.addEventListener('click', doWithElement);


// отмена стандартных событий
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target)
})

// навешиваем события на коллекцию элементов
btns.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.target);
    }, {once: true});
})