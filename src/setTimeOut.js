window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#btn");
  const modal = document.querySelector('.modal');
  const btnModal = document.querySelector('.btn-modal')
  const time = document.querySelector('.time')

  
  setInterval(() => {
    time.innerHTML = `
      <h2>${new Date()}</h2>
    `
  }, 1000)

  function myAnimation() {
    const car = document.querySelector(".car");
    let pos = 0;

    const timerId = setInterval(frame, 10);

    function frame() {
      if (pos === 700) {
        clearInterval(timerId);
      } else {
        pos++;
        car.style.left = pos + "px";
      }
    }
  }

  btn.addEventListener("click", myAnimation);
  btnModal.addEventListener('click', () => {
    modal.classList.remove('hidden')

    setTimeout(() => {
     modal.classList.add('hidden')
    }, 5000)

   })

});
