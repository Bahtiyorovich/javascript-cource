"use strict"

/* Array methods
    array - massiv "const" kalit so'zi bilan e'lon qilinadi

    toString() -- massiv elementlarini satrga aylantiradi.
    
    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(names.toString()); // Natija; Shodiyor, Abdulhay,Ahror,Usmonjon,Muhammadali,Qobiljon
    
    join() - barcha massiv elementlarini satrga birlashtiradi.

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(fruits.join(" * "));

    pop() - massivdan oxirgi elementni olib tashlaydi

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(fruits.pop());

    push() - massivga yangi element qo'shadi (oxirida)

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(fruits.push("Kiwi"));

    shift() - massivning birinchi elementini olib tashlaydi va qolgan barcha elementlarni pastki indeksga "o'tkazadi".
    shift()"o'chirilgan" qiymatni qaytaradi:

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    console.log(fruits.shift());
    console.log(fruit); // farqini toping;

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    let fruit = fruits.shift(); 
    console.log(fruit)    

    unshift() - massivga yangi element qo'shadi (boshida) va eski elementlarni "o'chiradi":

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    fruits.unshift("Lemon");

    Massiv elementlariga ularning indeks raqami orqali kirish mumkin :

    Massiv indekslari 0 dan boshlanadi:

    [0] massivning birinchi elementi
    [1] ikkinchi
    [2] uchinchi ...

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    fruits[0] = "Kiwi";

    Massivga yangi element qo'shishning oson yo'llaridan biri

    const names = ["Shodiyo", "Abdulhay", "Ahror", "Usmonjon", "Muhammadali", "Qobiljon"];
    fruits[fruits.length] = "Kiwi";


*/