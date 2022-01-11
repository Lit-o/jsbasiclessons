window.addEventListener('DOMContentLoaded', () => {


    // TABS TABS TABS TABS TABS TABS TABS TABS TABS TABS TABS TABS
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabs.forEach(tab => {
            tab.classList.remove("tabheader__item_active")
        });
    }

    function showTabContent(i = 1) {
        tabsContent[i].classList.remove('hide');
        // tabsContent[i].classList.add('fade');
        tabsContent[i].classList.add("show", 'fade');
        tabs[i].classList.add("tabheader__item_active")
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        if (e.target &&
            e.target.classList.contains('tabheader__item') &&
            !e.target.classList.contains('tabheader__item_active')) {
            tabs.forEach((item, i) => {
                if (e.target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    });
    // END END END END END END END END END END END END END END END

    // TIMER TIMER TIMER TIMER TIMER TIMER TIMER TIMER TIMER TIMER
    const deadLine = "2022-01-01";

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        // console.log(t)
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor(t / (1000 * 60 * 60) % 24);
        let minutes = Math.floor(t / 1000 / 60 % 60);
        let seconds = Math.floor(t / 1000 % 60);

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),

            timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`
            } else {
                return num
            }
        }

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock('.timer', deadLine)
    // END END END END END END END END END END END END END END END

    // MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL 
    const modalBtns = document.querySelectorAll("[data-modal]");
    const modalWindow = document.querySelector(".modal");
    const modalClose = document.querySelector("[data-close]");

    const hideModal = () => {
        modalWindow.classList.remove('show');
        modalWindow.classList.add('hide');
        document.body.style.overflow = "";
    }

    const showModal = () => {
        modalWindow.classList.add('fade');
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        // modalWindow.style.display = "block";
        document.body.style.overflow = "hidden";
        clearInterval(modalTimerId);
    }

    modalBtns.forEach(item => {
        item.addEventListener('click', showModal)
    });
    modalClose.addEventListener('click', hideModal)
    modalWindow.addEventListener('click', (e) => {
        if (e.target &&
            e.target.classList.contains('modal') &&
            !e.target.classList.contains('modal__dialog')) {
            hideModal();
        }
        // alternative solution
        // if (e.target === modalWindow) {}
        // будет работать, тк строго совпадать 
        // должно именно с modalWindow, но не с его потомками
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow.classList.contains('show')) {
            hideModal()
        }
    });

    // madal shown after 5 sec
    const modalTimerId = setTimeout(showModal, 5000);

    const showModalByScroll = () => {
        // window.pageYOffset - сколько уже открутили
        // document.documentElement.clientHeight - сколько сейчас видит клиент
        // document.documentElement.scrollHeight - вся длинна документа
        // -1 пиксель в конце для кроссбраузерности, тк иногда не срабатывает
        // в итоге условие отслеживает, что клиент доскролил до конца сайта
        // чтобы сработало один раз, в функции потом отменяем слушателя с removeEventListener
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            showModal();
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    window.addEventListener('scroll', showModalByScroll);




});