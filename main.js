'use strickt';

const catList = document.querySelector('.js-list');

const KittenOne = `<li class="card">
                    <article>
                        <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
                        <h3 class="card_title">Anastacio</h3>
                        <h4 class="card_race">Siamés</h4>
                        <p class="card_description">
                            Porte elegante, su patrón de color tan característico y sus ojos
                            de un azul intenso, pero su historia se remonta a Asía al menos
                            hace 500 años, donde tuvo su origen muy posiblemente.
                        </p>
                    </article>
                </li>`;

const KittenTwo =`<li class="card">
                    <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
                    <h3 class="card_title">Fiona</h3>
                    <h4 class="card_race">Sphynx</h4>
                    <p class="card_description">
                        Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
                        hasta con pinta de alienígena han llegado a definir a esta raza
                        gatuna que se caracteriza por la «ausencia» de pelo.
                    </p>
                </li>`;

const KittenThree = `<li class="card">
                    <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
                    <h3 class="card_title">Cielo</h3>
                    <h4 class="card_race">Maine Coon</h4>
                    <p class="card_description">
                        Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
                        bella mirada se ha convertido en una de sus señas de identidad.
                        Sus ojos son grandes y las orejas resultan largas y en punta.
                    </p>
                </li>`;

const btnAddCat = document.querySelector('.js-btn-add');
const newForm = document.querySelector('.js-new-form');
const cancelForm = document.querySelector('.js-form-cancel');
const imgCat = document.querySelector('.js-cat-img');
const nameCat = document.querySelector('.js-cat-name');
const raceCat = document.querySelector('.js-cat-race');
const descCat = document.querySelector('.js-cat-description');


catList.innerHTML = catList.innerHTML + KittenOne + KittenTwo + KittenThree;

btnAddCat.addEventListener('click',()=>{
    newForm.classList.toggle('collapsed');
});

cancelForm.addEventListener('click', ()=>{
    // newForm.reset();
    imgCat.value = "";
    nameCat.value = "";
    raceCat.value = "";
    descCat.value = "";

    newForm.classList.add('collapsed');
});