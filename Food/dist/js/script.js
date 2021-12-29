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









});