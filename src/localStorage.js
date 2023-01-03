"use strict"

const name = document.querySelector('.name'),
    email = document.querySelector('.email'),
    formSubmit = document.querySelector('form'),
    title = document.querySelector('.title')

// Browser LocaStorage ga ma'lumot joylash; 

formSubmit.addEventListener('submit', (e) => {
    // refresh bo'lishni oldini oladi:
    e.preventDefault();

    const user = {
        name: firstname.value,
        email: email.value,
    }
    // Inputga kiritilgan ma'lumot submit qilingandan keyin formadan o'chib ketadi;
    e.target.reset()

    localStorage.setItem('user', JSON.stringify(user))

 })

const UserName = JSON.parse(localStorage.getItem('user'));
title.textContent = `${UserName.name}`










