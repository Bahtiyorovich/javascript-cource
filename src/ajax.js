"use strict"

const uzs = document.querySelector('#uzs'),
    usd = document.querySelector('#usd')


uzs.addEventListener('input', e => {
    const request = new XMLHttpRequest()

    request.open('GET', '../json/curent.json')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf8')
    request.send()

    request.addEventListener('load', () => {
        if(request.status === 200) {
            console.log(request.response)

            const data = JSON.parse(request.response)
            usd.value = (+uzs.value / data.curent.usd).toFixed(3)
        } else {
            usd.value = 'error'
        }
    })
})






