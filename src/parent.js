const parentElement = document.querySelector('.parent-element')
    elements = document.querySelectorAll('.title')

const data = ['data', 'object', 'javascript', 'json', 'parent-element', 'children'];


elements.forEach((item, index) => {
    item.textContent += data[index]
})


//class qo'shishni birirnchi usuli:
elements.forEach(item => {
    item.setAttribute('class', 'children')
    item.classList.add('title-style')
})


// 2 -usul
/* Array.from(parentElement.children) - dan foydalanishdan maqsad:
 children - metodi forEach() metodini to'g'ridan to'g'ri qabul qilmaydi*/

Array.from(parentElement.children).forEach(child =>{
    child.classList.add('child-element')
})

// element olish usullari:

/* 
    1.parentElement - ko'rsatilgan elementning ota div ni olish
    2.parentElement.parentElement - ko'rsatilgan elementning ota divning ota divini olish
    3.nextElementSibling - ko'rsatilgan elementning bitta pastdagi elementni olish
    4.previousElementSibling - ko'rsatilgan elementning bitta yuqoridagi elementni olish
*/
const oneTag = document.querySelector('#first')
console.log(oneTag.previousElementSibling)
console.log(oneTag.nextElementSibling)
console.log(oneTag.parentElement)















