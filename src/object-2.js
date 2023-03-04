const laptopInfo = document.querySelector('.laptop')
    noutInfo = document.getElementById('info')
    btnPrev = document.getElementById('btn-2')
    firstPage = document.querySelector('.objects')

btnPrev.addEventListener('click', ()=> {
    laptopInfo.classList.add('hidden')
    firstPage.classList.remove('hidden')
})

const laptop = [
    {
        nomi: 'Kompyuter',
        marka: 'hp',
        xotira: 'ssd-256GB',
        operativka: '8GB core-i3',
        price: '570$',

    fullInfo: function(){
        return 'New Laptop fullInfo:'+ ' ' +
            this.nomi + ' ' +
            this.marka + ' ' +
            this.xotira + ' ' +
            this.operativka + ' ' + 'price ' +
            this.price
        
        }
    },
]

// console.log(laptop[0].fullInfo())

laptop.forEach(item => {
    noutInfo.innerHTML += `
    <h3>
        ${item.fullInfo()}
    </h3>
        
    `
})    