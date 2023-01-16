'use strict'
const text = document.querySelector('.title');


const data = [
    {name: "Html", task: "Tutorial"},
    {name: "JavaScript", task: "Tutorial,practice"},
    {name: "ReactJs", task: "JavaScript Library"},
    {name: "Css", task: "Styles Tutorial"},
]


data.forEach(item => {
    text.innerHTML += `
        <p>${item.name}, ${item.task} </p>
    `
})


// getAttribute(), setAttribute() -- html atributlarini o'zgartirish

text.innerHTML = `
        <a href="">w3Schools</a>
`
const link = document.querySelector('.title a')

// getAttribute - malumot olish:
console.log(link.getAttribute('href'))

// setAttribute() - ma'lumotni o'zgartirish:
link.setAttribute('href', 'https://www.w3schools.com')
text.setAttribute('class', 'text-content')

console.log(text.getAttribute('class'))
console.log(link.getAttribute('href'))
































































