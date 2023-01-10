"use strict"

// shartli tekshirish operatorlari:

// if, else if, else:

function getDateInfo() {
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();

    const timeInfo = day + ',' + (month + 1) + ',' + year
    console.log(timeInfo);
}

//let date = 9;
// if(date == 10){
//     getDateInfo();
// } else if(date < 10){
//     console.log('Error')
// } else {
//     console.log('Shartlarni bajarishda moslik topilmadi');
// }


//let date1 = false;
let number = 10;
// if(number === '10'){
//     getDateInfo();
// } else if(number <= 11){
//     console.log('Error')
// }

// if(number === '10'){
//     getDateInfo();
// }  else {
//     console.log('Error')
// }


// if(syntax){}
// else if(){}
// else if(){}
// else if(){}
// .....
// .....
// .....
// else {}

//if (number < 10) { console.log('error') } else { getDateInfo(); }


//ternary operatori:
//(number < 10) ? console.log('error') : getDateInfo()


























