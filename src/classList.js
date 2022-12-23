"use strict"

const btns = document.querySelectorAll('button');

/* ClassList - xossasining methodlari:
    1. length - btns[0]  yani ( 0 ) indeksdagi button da nechta class borligini aniqlaydi.
    2. item - btnx[0] yani ( 0 ) indeksdagi buttonda "0" indeksdagi class nomi qaysi ekanligini aniqlaydi.
*/
// console.log(btns[0].classList.length)
// console.log(btns[0].classList.item(0))

btns[1].classList.add('blue', 'some'); // class qo'shish
btns[0].classList.remove('blue'); // classni o'chirish
btns[1].classList.toggle('green'); // agar green clasi bor bo'lsa yo'q qiladi, yo'q bo'lsa green clasini qo'shadi.

if(btns[0].classList.contains('blue')){ // contains - bu metod agar btns[0] da 'blue' bor bo'lsa consolga ma'lumot chiqaradi
    console.log('Welcome To Js');
}

btns[0].addEventListener('click', () => {
    // 1-usul 
    // if( !btns[0].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red')
    // }

    // 2-usul qisqa kod
    btns[0].classList.toggle('red');

})


/* Delegatsiya - yangi qo'shilgan elementga joriy metodni tadbiq qilish*/

const wrapper = document.querySelector('.btn-block'),
      buttons = document.querySelectorAll('button')

//Bu qatordagi kod (0) - indeksdagi buttonni bosganda (1) - indeksdagi buttonga "red" clasini beradi 
buttons[0].addEventListener('click', () => {
    buttons[1].classList.toggle('red')
})

// Bu qatordagi kodda agar barcha buttonlar ichida qaysi birida "red" klasi bo'lsa consolga malumot chiqadi
wrapper.addEventListener('click', (event) => {
    // 1-usul
    // if(event.target && event.target.classList.contains('red')){
    //     console.log('Button Clicked');
    // }

    // 2-usul yani "matches - metodi" red klasi mavjud button bosilganda consolga malumot chiqadi
    if(event.target && event.target.matches('button.red')){
        console.log('Button Clicked');
    }
})

// bu qatordagi kodda har bir button bosilganda consolga malumot chiqadi
buttons.forEach((item) => {
    item.addEventListener('click' , () => {
        console.log('Clicked')
    })
})


// bu qatordagi kodda wrapperga automatik ravishda yangi "red" klasli button qo'shilyapti 
const btn = document.createElement('button');
btn.classList.add('red')
wrapper.append(btn);

