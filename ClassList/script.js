const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');
// btns[0].classList.length вернет количество классов навешанных на итем
console.log(btns[0].classList.length);

// получим класс под индексом ноль, по сути первый класс
console.log(btns[0].classList.item(0));

// btns[0].classList.add('red');

 if (btns[1].classList.contains('red')) {

 }


btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red')
    }
})

btns[0].addEventListener('click', () => {
    btns[2].classList.toggle('red')
})

wrapper.addEventListener('click', (e) => {
    console.dir(e.target)
    // проверяем сначала, что у этого элемента target вообще существует
    if (e.target && e.target.tagName == "BUTTON"){
        console.log('Raa')
    };
    if (e.target && e.target.classList.contains('red') ){
        console.log('Booa')
    }
})

