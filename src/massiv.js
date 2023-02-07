   "use strict"

 /*Array methods
    array - massiv "const" kalit so'zi bilan e'lon qilinadi

    toString() -- massiv elementlarini satrga aylantiradi.

    const names = ["Shodiyor", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(names.toString()); // Natija; Shodiyor, Abdulhay,Ahror,Usmonjon,Muhammadali,Qobiljon

    join() - barcha massiv elementlarini satrga birlashtiradi.

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(names.join(" * "));

    pop() - massivdan oxirgi elementni olib tashlaydi

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(names.pop());

    push() - massivga yangi element qo'shadi (oxirida)

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(names.push("Kiwi"));

    shift() - massivning birinchi elementini olib tashlaydi va qolgan barcha elementlarni pastki indeksga "o'tkazadi".
    shift()"o'chirilgan" qiymatni qaytaradi:

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(names.shift());
    console.log(fruit); // farqini toping;

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    let fruit = names.shift();
    console.log(fruit)

    unshift() - massivga yangi element qo'shadi (boshida) va eski elementlarni "o'chiradi":

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    names.unshift("Lemon");

    Massiv elementlariga ularning indeks raqami orqali kirish mumkin :

    Massiv indekslari 0 dan boshlanadi:

    [0] massivning birinchi elementi
    [1] ikkinchi
    [2] uchinchi ...

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    names[0] = "Kiwi";

    Massivga yangi element qo'shishning oson yo'llaridan biri

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    names[names.length] = "Kiwi";

    Ogohlantirish!
    Massiv elementlari JavaScriptning "delete" operatori yordamida o'chirilishi mumkin .

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    delete names[0];

    "delete" foydalansangiz o'chirilgan element o'rni yo'q bo'lmaydi,
    const names = [....., "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];

    console.log(names[0]) // natija: undefined chiqadi.

    Buning o'rniga pop() yoki shift() dan foydalaning.

    concat() - mavjud massivlarni birlashtirish (birlashtirish) orqali yangi massiv yaratadi:
    concat() - mavjud massivlarni o'zgartirmaydi. U har doim yangi massivni qaytaradi.

    const myCars = ["Gentra", "Nexia3"];
    const myCars2 = ["Elantra", "Tesla", "Lexus"];

    const myGarage = myCars.concat(myCars2);

    splice() - massivga yangi elementlar qo'shadi, yoki olib tashlaydi

    // element qo'shish uchun ishlatilishi
    const myCarsf = ["Gentra", "Nexia3"];
    myCarsf.splice(1, 0, "Lexuc", "KIA");
   console.log(myCarsf)
    // element olib tashlashda ishlatilishi
    const myCars = ["Gentra", "Nexia3"];
    myCars.splice(0, 1);// bunda "0 - indeks" qo'shiladigan element joyini bildiradi, "1" olib tashlanadigan element soni



    slice() - massivning bir qismini yangi massivga ajratadi.
    slice() - yangi massivni yaratadi.
    slice() - manba massividan hech qanday elementni olib tashlamaydi

    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1);
  console.log(citrus)
    Ikki massivni birlashtirish "Spred operatori"

    const pupils = ['ali', 'vali'];
    const pupils2 = ['solih', 'holiq'];

    const children = [...pupils, ...pupils2];
    console.log(children);

    sort() - bu massiv ma'lumotlarini alifbo tartibida tartiblaydi
    reverse() - teskarisiga o'girish
*/

// console.log(typeof(numbers.toString())); console.log(typeof(numbers[0]));
// const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali",
// "Qobiljon"]; console.log(numbers.join(" ")); const numbers = [11, 12, 15, 25,
// 17, 98, 100];     numbers.push(101);     console.log(numbers);
// console.log(numbers); let number = numbers.pop(); console.log(numbers);
// console.log(number); const names = ["Shodiyor", "Abdulhay", "Ahror",
// "Usmonjon", "Muhammadali", "Qobiljon"]; console.log(names);
// console.log(names.sort()); const numbers = [45, 87, 96, 74,1, 2,3, 11, 102,
// 205, 305, 17, 98, 100]; console.log(numbers.sort()); sort metodini raqamlarda
// o'sish tartibida ishlatish const numbers7 = numbers.sort((a, b) => ( a - b) )
// console.log(numbers7); sort metodini raqamlarda kamayish tartibida ishlatish
// const numbers8 = numbers.sort((a, b) => ( b - a) ) console.log(numbers8);

/*==================== Massivning eng ko'p ishlatiladigan metodlari ===================== */

 /*1. forEach() - har bir massiv elementi uchun bir marta     funktsiyani
(qayta qo'ng'iroq funktsiyasi) chaqiradi.

const numbers1 = [45, 4, 9, 16, 25];
let txt = "";
numbers1.forEach((value) => {
    txt += value + '\n';
});
console.log(txt);


numbers1.forEach(item => {
  item = item*3
  console.log(item)
})

 /*2.  map() - har bir massiv elementida funksiyani bajarish orqali yangi
massiv yaratadi.  map() - massiv elementlari uchun qiymatsiz funksiyani
bajarmaydi.      map() - asl qatorni o'zgartirmaydi.

const numbersMap = [45, 4, 9, 16, 25];
const numbers2 = numbersMap.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2)

// 3. filter() - sinovdan o 'tgan massiv elementlari bilan yangi massiv yaratadi.

const numbersFilter = [45, 4, 9, 16, 25, 36, 58, 97, 1997];
const over18 = numbersFilter.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(over18)
4. reduce() - har bir massiv elementida bitta qiymat ishlab chiqarish(uni kamaytirish)uchun funksiyani ishga tushiradi.reduce() - massivda chapdan o 'ngga ishlaydi. Shuningdek qarang reduceRight().

reduce() - asl qatorni kamaytirmaydi.const numbers = [45, 4, 9, 16, 25];
const numbersReduce = [45, 4, 9, 16, 25];
let summa = numbersReduce.reduce(myFunction, 250);

function myFunction(total, value, index, array) {
  return total - value;
}
console.log(summa)
//reduce() - boshlang 'ich qiymatni qabul qilishi mumkin:

const numbersReduce2 = [45, 4, 9, 16, 25];
let sum = numbersReduce2.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}
console.log(sum)
//5. every() - barcha massiv qiymatlari sinovdan o 'tganligini tekshiradi. 

const numbersEvery = [45, 4, 9, 16 , 25];
let allOver18 = numbersEvery.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18)
//6. some() - ba 'zi massiv qiymatlari sinovdan o' tganligini tekshiradi.const numbers = [45, 4, 9, 16, 25];
const numbersSome = [45, 4, 9, 16, 25];
// 
numbersSome.forEach(item => {
  if(item > 18){
    console.log(item)
  }
})

function myFunction(value, index, array) {
  return value > 18;
}

//7. indexOf() - massivda element qiymatini qidiradi va uning o 'rnini qaytaradi.
// Array.indexOf() - Agar element topilmasa - 1 ni qaytaradi
  
 // array.indexOf(item, start) - sintaksis

//8. find() - sinov funktsiyasidan o 'tgan birinchi massiv elementining qiymatini qaytaradi.

const numbersFind = [4, 9, 16, 25, 29];
let first = numbersFind.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//find() - ES6 xususiyatidir(JavaScript 2015). * /*/