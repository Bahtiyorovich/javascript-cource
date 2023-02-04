// forEach() - array ichidagi elementlarni takror ravishda ishlatmoqchi bo'lsak ishlatamiz

const ismlar = ['ali', 'vali', 'soliha', 'muhammad'];
const newIsmlar = [];
//bu oddiy usuli;
// for(let i = 0; i <= ismlar.length; i++){
//     console.log(ismlar[i]);
// }


// Bu real proektlarda qo'llaniladigan usuli:
ismlar.forEach(item => {
    const newName = item.charAt().toUpperCase() + item.slice(1)
    console.log(newName)

    newIsmlar.push(newName)
})

console.log(newIsmlar)












