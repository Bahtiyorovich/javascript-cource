"using strict"

// Function Constructor: Bir xil xususiyatlarga ega bo'lgan ko'plab obektlar yaratish uchun foydalaniladi

function Car(name, color, mph) {
    this.name = name,
    this.color = color,
    this.mph = mph,
    this.isAirbag = true,
    this.Speed = function(){
        console.log(`Speed of Car ${this.name} is ${this.mph} km/h`)
    }

}

// Constructor ga yangi metod qo'shish
Car.prototype.hello = function() {
    console.log(`Car name of ${this.name} say Hello`)
}

// yangi xususiyat qo'shish
Car.prototype.price = '55000 $';
const BMW = new Car('BMW', 'Black', '260')
console.log(BMW);

BMW.Speed();
BMW.hello();
console.log(`This Car's price ${BMW.price}`);






































