"use strict"

const isFriendCome = false;

const meetingRequest = new Promise((resolve, reject) => {
    if(isFriendCome) {
        const msg = `Friend I'm There`
        resolve(msg)
    }else {
        const err = `I can't come there`
        reject(err)
    }
})
 
meetingRequest
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))
    .finally(() => console.log(`I'm Colling you`))


// Promise Methods

const request = time => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time)
    })
}

// all barcha promise larni yi'g'ib ishga tushririb keyin thenni ishga tushiradi
Promise.all([request(1000), request(2000), request(3000)]).then(() => {
    console.log(`All`)
})

// race qaysi promise birinchi ishga tushsha thenni ishlatib yuboradi
Promise.race([request(1000), request(2000), request(3000)]).then(() => {
    console.log(`All`)
})
















