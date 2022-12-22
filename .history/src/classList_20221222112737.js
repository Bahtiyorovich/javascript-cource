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

btns