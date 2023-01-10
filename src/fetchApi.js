

const container = document.getElementById('root');

/* Bugun biz ikki usulda api bilan ishlaymiz:
    1. XMLHTTPRequest() - eski usul
    2. FetchApi() -- yangi usul
    3. async, await -- zamonaviy usul
*/

// Ikkala usuldan foydalanishda ham bizga api manzili kerak bo'ladi
const API = 'https://restcountries.com/v3.1/all'

// XMLHTTPRequest() -- so'rovi

const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState == 4 && request.status == 200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if(request.readyState == 4) {
                reject('Error');
            }
        })

        request.open('GET', resource);
        request.send();

    })
}

getData(API)
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    })

//Fetch Api Methods:

fetch(API)
    .then((data) => {
        return data.json();
    })
    .then((dataInfo) => {
        console.log(dataInfo);
    })
    .catch((err) => {
        console.log(err);
    })


// async va await usuli:


const getDataInfo = async (resurs) => {
    const request = await fetch(resurs);
    if(request.status != 200){
        throw new Error('Error')
    }
    const data = await request.json();
    return data;
}

getDataInfo(API)
    .then((data) => console.log(data))
    .catch((err) => console.log(err.message)) 




























