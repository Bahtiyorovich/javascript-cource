"use strict"

/* Array methods
    array - massiv "const" kalit so'zi bilan e'lon qilinadi

    toString() -- massiv elementlarini satrga aylantiradi.
    
    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
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
    const myCars = ["Gentra", "Nexia3"];
    myCars.splice(1, 0, "Lexuc", "KIA");

    // element olib tashlashda ishlatilishi
    const myCars = ["Gentra", "Nexia3"];
    myCars.splice(0, 1);// bunda "0 - indeks" qo'shiladigan element joyini bildiradi, "1" olib tashlanadigan element soni



    slice() - massivning bir qismini yangi massivga ajratadi. 
    slice() - yangi massivni yaratadi.

    slice() - manba massividan hech qanday elementni olib tashlamaydi
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1);   
*/