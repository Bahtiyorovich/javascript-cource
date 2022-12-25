"use strict"

/* Context - "this":  har doim nimagadur qaram bo'ladi

1. funksiya contexti ya'ni "this" har doim window global obyektga qaram bo'ladi.
    agar qatiy rejim yoqilgan bo'lsa context qiymati "undefined" ga teng bo'ladi.

*/

/* Closure local obyektda kerakli o'zgaruvchui bo'lsa funksiya shu bilan cheklanadi, 
agar yo'q bo'lsa global obyektga murojat qiladi 

const a = 7;
// global obyektga murojat qilish turi
function numOne() {
    console.log(a)
}

// local obyektga murojat qilish turi
function numTwo() {
    let a = 11;
    console.log(a);
}

2. Object context "this": Object ichida context "this" shu object ni o'ziga teng 

    const Numbers = {
        x: 15,
        y: 17,
        sum: function(){
            return this.x + this.y
            console.log(this) // sum : f()
            function logger(){
                console.log(this) // undefined chiqadi: yani this sum ichidagi funksiyaga tegishli
            }
        }
    }

    Numbers.sum();


    // Call, Apply, Bind :

    //call() - Bunda bir ob'ekt boshqa ob'ektga tegishli usuldan foydalanishi mumkin.
   
    const person = {
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    }

    const person1 = {
    firstName:"Sherzod",
    lastName: "developer"
    }

    const person2 = {
    firstName:"WebDeveloper",
    lastName: "developer"
    }

    // This will return "Sherzod developer":
    person.fullName.call(person1);
    
    // call() - argumentlarni qabul qilishi mumkin:
    person.fullName.call(person1, "html-css", "JavaScript");

    Call() va apply() o'rtasidagi farq
    Farqi shundaki:

    Usul call() - argumentlarni alohida oladi .

    Usul apply() - argumentlarni massiv sifatida oladi .

    apply() - massivdagi argumentlarni qabul qiladi:
    const person = {
        fullName: function(city, country) {
            return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
    }

    const person1 = {
    firstName:"Sherzod",
    lastName: "developer"
    }

    person.fullName.apply(person1, ["html-css", "JavaScript"]);

    Agar argumentlar roʻyxati oʻrniga massivdan foydalanmoqchi boʻlsangiz, apply() usuli juda qulay.

    //bind yordamida: ob'ekt boshqa ob'ektdan usulni olishi mumkin.
        yani bind() bizga yangi funksiya qaytarib beradi.

    const person = {
        firstName:"Sherzod",
        lastName: "developer"
        display: function () {
            let x = document.getElementById("demo");
            x.innerHTML = this.firstName + " " + this.lastName;
        }
    }

    let display = person.display.bind(person);
    setTimeout(display, 3000);

*/