"use strict"
// Arraylarda objectlar;

const movies = [
    {name: 'Avatar "Suv Yoli"', moviesCount: 27000},
    {name: 'Iron Man 5', moviesCount: 456800},
    {name: 'Calm dovn mp4', moviesCount: 2700000},
    {name: 'GanNam Style mp4', moviesCount: 4600000000},
]

const cars = {
    name: 'Range Rover',
    color: 'gold-silver',
    price: 55000, 
    login: function() {
        // console.log(`Ro'yxatdan o'ting!`)
        console.log(this.name)
    },
    logout: function() {
        // console.log(`Delete Account!`)
        console.log(this.login())
    }

}

// cars.login();// method funksiya 
// cars.logout();// method function



cars.cinema = function (){
   return movies.forEach(item => {
        console.log(`Eng ko'p ko'rilgan kinolar top 10 taligidan o'rin oldi: ${item.name}, ko'rishlar soni: ${item.moviesCount}`)
    })
}
// cars.cinema();


// typeof == 'string' bo'lgan qiymatlarni ajratib oling
const elements = [[true, false], [97, 98],'Salom Array']

elements.forEach((element, index )=> {
    if(typeof element == 'string'){
        console.log(index)
    }
})

// typeof == array bo'lgan qiymatlarni ajratib birlashtirib oling
const array = [[1,2,3], 'salom', 98, [4,5,6], [true, false]]
const inArray = []
array.forEach(item => {
    const res = Array.isArray(item)
    if(res){
        item.forEach(i => {
            inArray.push(i);
        })
    }
})

console.log(inArray);


// false qiymatlarini ajratib oling
const booleanArray = [NaN, false, 0, '', 'false', undefined, null, '0', 99]
const falseItems = [];
booleanArray.forEach(item => {
    if(!item){
        falseItems.push(item);
    }
})

console.log(falseItems);










