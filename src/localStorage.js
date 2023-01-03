"use strict"

const name = document.querySelector('.name'),
    email = document.querySelector('.email'),
    button = document.querySelector('.button'),
    btnDanger = document.querySelector('.btn-danger'),
    title = document.querySelector('.title')

// Browser LocaStorage ga ma'lumot joylash; 

 localStorage.setItem('name','Sherzod');

// const myName = localStorage.getItem('name');
// console.log(myName)

// title.textContent = `${myName}`;

btnDanger.addEventListener('click', () => {
    localStorage.removeItem('name')
})











