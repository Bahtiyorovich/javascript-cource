"use strict"  // bu qator qatiy rejimni taminlab beradi: eski kodlardan foydalanmaslikni nazorat qiladi




 String Methods:

    length -- satr uzunligini qaytaradi
    slice(satr, end) - satrning bir qismini ajratib olish
    replace(string, newString) -- mattni o'zgartiradi
    concat() -- matnlarni birlashtirish
    indexOf() -- kerakli textni qaysi o'rinda turganini qaytaradi
    search() -- textdan berilgan ifodani qidiradi va joylashgan o'rnini qaytaradi
    match() -- text ichidagi o'xshash ifodalarni qidiradi va massivga joylaydi hamda shu massivni qaytaradi 
    includes() -- text ichida belgilangan qiymat bor bo'lsa "true" aks holda "false" qaytaradi

    
    /text/i -- katta kichik harflarni bir xil moslikka tenglaydi
    /text/g -- barcha moslikni kerakli text ga almashtiradi

// let matn = "bugun biz js da string metodlarini o'rganamiz";
// console.log(matn.length);

//  let text = "Web Developer, Developer, Developer JavaScript";
//  let txt = text.slice(4, 13);
//  console.log(txt);

// let txt2 = text.replace(/developer/i, 'Programmer');
// console.log(txt2);

// let text = "Web Developer, Developer, Developer JavaScript";
// let txt3 = text.replace(/Developer/g, 'Programmer');
// console.log(txt3);

// let str = "Web",
//     str2 = "Developer",
//     str3 = "Programmer",
//     string = str.concat(' ',str2);
// console.log(string);

// let txt4 = 'web',
//     txt5 = 'Developer';

// let text6 = 'Web' + " " + ' Developer'; // bu qator o'niga 
// let text7 = txt4.concat(' ', txt5); // bu qatordan foydalanish yaxshiroq va tajribali dasturchilar shunday qilishadi

// let str8 = 'Web Developer: JavaScript programming language';
// let str9 = str8.indexOf('JavaScript');
// console.log(str9); // natija 15 chiqadi chunki "JavaScript" so'zi 15 chi o'rindan boshlanayapti va javascriptda sanoq ( 0 ) dan boshlanadi.

// let str10 = 'Salom Men Web dasturchiman';
// let str11 = str10.search(/web/i);
// console.log(str11);


// let str12 = 'Web dasturchi: js, reactjs, vuejs, angularjs ni o\'rganishi kerak';
// let str13 = str12.match(/js/gi); // Bu qatordagi ( /..../gi ) kodi bir vaqtda katta kichik moslik nechta bo'lsa hammasini qaytaradi
// console.log(str13);

let str14 = 'Web dasturchi: js, reactjs, vuejs, angularjs ni o\'rganishi kerak';
let str15 = str14.includes('web');
console.log(str15);


let str16 = 'Web dasturchi: js, reactjs, vuejs, angularjs ni o\'rganishi kerak';
let str17 = str16.includes('web'); // bu yerdagi "10" raqami qidiruvni 10 chi indexdan boshlang degan ma'noni bildiradi
console.log(str17);


/*------Callback function-------- */

/* callback function -- Bu ma'lum bir funksiya 
ishga tushgandan keyin ishlaydigan funksiyadir */