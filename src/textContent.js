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

data.forEach(item => {
    text.textContent += ` ${item.name} salom`
})

// getAttribute(), setAttribute() -- html atributlarini o'zgartirish
const container = document.querySelector('.set-get')

container.innerHTML = `
        <a href="">w3Schools</a>
`
const link = document.querySelector('.set-get a')

// getAttribute - malumot olish:
console.log(link.getAttribute('href'))

// setAttribute() - ma'lumotni o'zgartirish:
link.setAttribute('href', 'https://www.w3schools.com')
container.setAttribute('class', 'text-content')

console.log(container.getAttribute('class'))
console.log(link.getAttribute('href'))


link.setAttribute('style', 'color: red')





























































