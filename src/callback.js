// callback function - qaysidir funksiya ichida ( parametr, argumentga ) sifatida funksiya berish

const myFunc = (callbackFunc) => {
    let number = 1997;
    callbackFunc(number)
}

myFunc(function(value){
    console.log(value)
})








