const btn = document.querySelector('.btn')
    Element = document.querySelector('.container')
    form = document.querySelector('form')
    formInput = document.querySelectorAll('input');


btn.addEventListener('click', () => {
   // innerHTML yordamida element qo'shish
    // Element.innerHTML += `
    //     <input type="text" placeholder="Enter some information">Something new Text</input>
    // `

    // createElement yordamida element qo'shish 
    // const formInput = document.createElement('h2')
    //     formInput.textContent = 'Something new Text'
    //     Element.appendChild(formInput)

        //prepend() elementni old qatordan qo'shish
        //appendChild() elementni oxiridan qo'shish
        // remove() elementni o'chirish

})

form.forEach(item => {
    btn.addEventListener('submit', (e) => {
        e.preventDefault();
    })
})