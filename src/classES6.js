"use strict"

/* class - o'z ichiga obyektlarni hamda bir qancha metodlarni oladi
    va biz unda yangi obektlarni yaratishda foydalanamiz,
    metodlaridan esa istalgancha foydalanamiz 
*/

class Car {
    constructor(name, color, speed){
        this.name = name,
        this.color = color,
        this.speed = speed
    }

    calcSpeed() {
        return this.speed / 3.6
    }
}

// const bmw = new Car('BMWX S7', 'BLACK', 280)
// const merc = new Car('AMG', 'BLACK', 240)
// console.log(bmw);
// console.log(merc);
// console.log(bmw.calsSpeed());
// console.log(merc.calsSpeed())

/* Voris class yaratish */

class newCar extends Car {
    constructor(name, color, speed, position, price){
        super(name, color, speed);
        this.position = position;
        this.price = price
    }

    infoCar() {
        return this.name.concat(' ', this.color, ' ', this.position, ' ', this.price) 
    }
}

const captiva = new newCar('Captiva', 'black', 220,'4', '15000 $');
console.log(captiva);
const speed = Math.floor(captiva.calcSpeed())
console.log(captiva.infoCar())
console.log(`${speed} m/s`);