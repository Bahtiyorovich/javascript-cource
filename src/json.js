"use strict"

/*
    serverga ma'lumot yuborish uchun har doim "json" formatini ishlatish kerak
*/

// Obyektni JSON formatiga o'girish:

const person = {
    name: 'Sherzod',
    lastName: 'Yoqubov',
    job: 'Developer',
    skills: [
        'JavaScript', 'ReactJs', 'NodeJs', 'ExpressJs',
        'MongoDB', 'MaterialUI', 'Bootstrap',
        'Html', 'CSS'
    ]
};

// JSON.stringify(objectName) - bu kod obyektni json formatiga o'giradi
const objectToJson = JSON.stringify(person);
console.log(typeof(objectToJson))

// JSON.parse(objectToJson) - bu kod json formatida kelgan ma'lumotlarni object type ga o'tkazadi

const jsonToObject = JSON.parse(objectToJson)
console.log(typeof(jsonToObject))

// Chuqur clonlash: obektni to'liq clon qilish


const objColor = {
    firstColor: 'white',
    secondColor: 'black',
    colors: {
        green: 'green',
        red: 'red'
    }
}

/*
 Object ni to'liq klone qilish uchun avval uni json formatga o'girish
kerak va Json dan obekt formatiga o'girish kerak.
*/
const cloneObject = JSON.parse(JSON.stringify(objColor)) 
// shu qatordagi kod obj ni toliq clone qildi.

// clone qilinga objectni o'zgartirish :

cloneObject.colors.red = 'yellow';
console.log(objColor)
console.log(cloneObject)



