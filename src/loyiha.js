window.addEventListener('DOMContentLoaded', () => { // bu qatordagi kod vazifasi: aval html css fayllari yuklanib olingandan keyin js faylni ishga tushiradi

    const tabsParent = document.querySelector('.tabheader__items'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent')

    /* elementlarni yashirib turish uchun funksiya */

    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        })
    }

    /* elementlarni ko'rsatish uchun funksiya */

    const showTabContent = (index = 0) => {
        tabsContent[index].classList.add('show', 'fade');
        tabsContent[index].classList.remove('hide');
        tabs[index].classList.add('tabheader__item_active');
    }


    /* funksiyalarni chaqirish */
    hideTabContent();
    showTabContent();


    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, index) => {
                if( target == item){
                    hideTabContent();
                    showTabContent(index);
                }
            } )
        }
    })












})