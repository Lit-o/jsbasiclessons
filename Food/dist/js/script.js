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
        console.log(t)
        let days = Math.floor(t/(1000 * 60 * 60 * 24));
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







});