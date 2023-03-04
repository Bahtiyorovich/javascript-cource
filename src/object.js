
// // Arraylarda objectlar;

// const movies = [
//     {name: 'Avatar "Suv Yoli"', moviesCount: 27000},
//     {name: 'Iron Man 5', moviesCount: 456800},
//     {name: 'Calm dovn mp4', moviesCount: 2700000},
//     {name: 'GanNam Style mp4', moviesCount: 4600000000},
// ]

// const cars = {
//     name: 'Range Rover',
//     color: 'gold-silver',
//     price: 55000, 
//     login: function() {
//         // console.log(`Ro'yxatdan o'ting!`)
//         console.log(this.name)
//     },
//     logout: function() {
//         // console.log(`Delete Account!`)
//         console.log(this.login())
//     }

// }

// // cars.login();// method funksiya 
// // cars.logout();// method function



// cars.cinema = function (){
//    return movies.forEach(item => {
//         console.log(`Eng ko'p ko'rilgan kinolar top 10 taligidan o'rin oldi: ${item.name}, ko'rishlar soni: ${item.moviesCount}`)
//     })
// }
// // cars.cinema();


// // typeof == 'string' bo'lgan qiymatlarni ajratib oling
// const elements = [[true, false], [97, 98],'Salom Array']

// elements.forEach((element, index )=> {
//     if(typeof element == 'string'){
//         console.log(index)
//     }
// })

// // typeof == array bo'lgan qiymatlarni ajratib birlashtirib oling
// const array = [[1,2,3], 'salom', 98, [4,5,6], [true, false]]
// const inArray = []
// array.forEach(item => {
//     const res = Array.isArray(item)
//     if(res){
//         item.forEach(i => {
//             inArray.push(i);
//         })
//     }
// })

// console.log(inArray);


// // false qiymatlarini ajratib oling
// const booleanArray = [NaN, false, 0, '', 'false', undefined, null, '0', 99]
// const falseItems = [];
// booleanArray.forEach(item => {
//     if(!item){
//         falseItems.push(item);
//     }
// })

// console.log(falseItems);

// Advanced Object Tutorial

/* Primitiv qiymat bu --- Hech qanday usul yoki xususiyatga ega bo'lmagan qiymatdir
    primitiv qiymatlar o'zgarmasdir

    Obyektlar o'zgaruvchilardir:

    let person = 'Sherzod';

*/

// Obj exm
const list = document.querySelector('.objects')
        nextPage = document.querySelector('.laptop')
        btnNextPage = document.getElementById('btn-1')

        btnNextPage.addEventListener('click', () => {
            list.classList.add('hidden')
            nextPage.classList.remove('hidden');
        })


    const men = [
        {
            ism: 'Sherzod', 
            familya: 'Yoqubov',
            jobs: 'Web-Developer',
            imgUrl: 'https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg',
        },
        {
            ism: 'Ahror', 
            familya: 'Muhammadjonov',
            jobs: 'Web-Developer',
            imgUrl: 'https://hairstyleonpoint.com/wp-content/uploads/2015/09/4ce06e936dcd5e5c5c3e44be9edbc8ff.jpg'
        },
        {
            ism: 'Abdulhay', 
            familya: 'Valijonov',
            jobs: 'Web-Developer',
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnn9ctWQd0CbETUDlKH9j0Uz-H4PohTepxgQ&usqp=CAU'
        },
        {
            ism: 'Abdurashid', 
            familya: 'Kamoldinov',
            jobs: 'Web-Developer',
            imgUrl: 'https://cmmodels.com/wp-content/uploads/2018/12/40-years-jahre-become-a-model-werden-best-ager-tipps-hilfe-modeling-agency.jpg'
        },
    ]

    

    men.forEach(item => {
        list.innerHTML += `
            <div class="card">
                <div class="item-info">
                    <h1> ${item.ism} ${item.familya}</h1>
                    <h3> ${item.jobs}</h3>
                </div>
                <div class="img">
                    <img src="${item.imgUrl}" alt="Error Image">
                </div>
            </div>
        `
    })

