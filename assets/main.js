const rowEl = document.querySelector(".row")
const headerEl = document.querySelector('header')
const containerEl = document.querySelector('.container')

fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => response.json())
    .then(data => {
        data.forEach(generalità => {
            rowEl.innerHTML += `
            <div class="col-3 col-2 col-1">
                    <div class="card">
                        <div class="pin"><img src="./img/pin.svg" alt=""></div>
                        <div class="foto"><img src="${generalità.url}" alt=""></div>
                        <h1>${generalità.title}<h1>
                        <p>${generalità.date}</p>
                    </div>
                </div>`

            //altro modo metodo
            /* const markup = `<div class="col-3 col-2 col-1">
                <div class="card">
                    <div class="pin"><img src="./img/pin.svg" alt=""></div>
                    <div class="foto"><img src="${generalità.url}" alt=""></div>
                    <h1>${generalità.title}
                    <p>${generalità.date}</p>
                </div>
            </div>`

            rowEl.insertAdjacentHTML("beforeend", markup) */


        });
        const cardEl = document.querySelectorAll('.card')
        const overlayEl = document.querySelector('.overlay')
        const chiudiEl = document.querySelector('i')

        cardEl.forEach(card => {
            const img = card.querySelector('.foto img');
            card.addEventListener('click', () => {
                overlayEl.classList.remove('d-none');

                const immagine = `<img src= ${img.src} alt="">`
                overlayEl.insertAdjacentHTML('beforeend', immagine)
                headerEl.classList.add('filter')
                containerEl.classList.add('filter')
            })
        })
        chiudiEl.addEventListener('click', () => {
            overlayEl.classList.toggle('d-none')
            headerEl.classList.remove('filter')
            containerEl.classList.remove('filter')

        })


    })