"use strict"  // bu qator qatiy rejimni taminlab beradi: eski kodlardan foydalanmaslikni nazorat qiladi
/* 
 String Methods

    slice(satr, end) - satrning bir qismini ajratib olish
    replace(string, newString) -- mattni o'zgartiradi
    /text/i -- katta kichik harflarni bir xil moslikka tenglaydi
    /text/g -- barcha moslikni kerakli text ga almashtiradi

*/
let text = "Web DEVELOPER, DEVELOPER, DEVELOPER JavaScript";
//  let txt = text.slice(4, 13);
//  console.log(txt);

// let txt2 = text.replace(/DEVELOPER/i, 'Programmer');
// console.log(txt2);

let txt3 = text.replace(/developer/i, 'Programmer');
console.log(txt3);

/*------Callback function-------- */

/* callback function -- Bu ma'lum bir funksiya 
ishga tushgandan keyin ishlaydigan funksiyadir */

