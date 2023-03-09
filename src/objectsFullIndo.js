const element = document.getElementById('root')
    menu = document.getElementById('menu')

const obj = {
    name: 'Laptop',
    price:`$400`,
    myFunction : function(){
        return this.name + ' narhi ' + this.price
    }
}

// Objects Constructor

function Cars(carName,color, marka, position, price){
    this.name = carName
    this.color = color
    this.marka = marka
    this.carPosition = position
    this.carPrice = price
}
// yangi obektlarni obekt konstruktori yordamida yaratish
/*
    Bu bizga uzun sintaksisdan foydalanmaslik imkonini beradi.
    va dasturimiz tezroq ishlashiga yordam beradi
*/

Cars.prototype.fullInfo = function(){
    return 'Men yangi mashina sotib oldim! nomi ' + this.name + ' rangi ' +
    this.color + ' ' + this.carPrice + ' ga tushdi.'
}

Cars.prototype.karobkasi = 'Avtomat';

const malibu2 = new Cars('malibu2', 'black', 'chevrolet', 'LTZ', '$33000')
console.log(malibu2.fullInfo());
console.log(malibu2.carPosition);
console.log(malibu2.karobkasi)


// Objects' types

const cars2 = {
    filial1: {
        location: 'Norin',
        menu: ['gentra', 'nexi3', 'Malibu2']
    },
    filial2: {
        location: 'Chust',
        menu: ['Kia k8', 'Hundai', 'Tesla']
    }
}




console.log(cars2.filial1.location);

element.innerHTML = `
    Bizda Yangilik bor! ${cars2.filial1.location} tumaniga Avto salon ochdik

    Salonimizda quyidagi rusumdagi mashinalar mavjud:
`
cars2.filial1.menu.forEach(item => {
    menu.innerHTML += item + `<br>`
})

































































