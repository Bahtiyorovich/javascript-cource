// DOM elementlarini chaqirib olishda quyidagi metodlardan foydalanish mumkin
/*
    1. getElementById() // eng ko'p ishlatiladigan usul
    2. getElementByClassName() // ko'plik shakli getElementsByClassName
    3. getElementByTagName() // ko'plik shakli getElementsByTagName
    
    // universal usul:
    4 querySelector() - bitta element uchun 
    // querySelectorAll() -- bir nechta element uchun
*/ 

const menuItems = document.querySelector('.append')
    elementItems = document.getElementsByClassName('elements')
    body = document.getElementByTagName(body)

const data = [
    {title: 'salom'},
    {title: 'salom'},
    {title: 'salom'},
    {title: 'salom'},
    {title: 'salom'},
    {title: 'salom'},
]


