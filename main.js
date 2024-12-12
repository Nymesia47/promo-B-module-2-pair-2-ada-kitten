'use strickt';

const catList = document.querySelector('.js-list');

const KittenOne = `<li class="card">
                    <article>
                        <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
                        <h3 class="card_title">Anastacio</h3>
                        <h4 class="card_race js-kitten-race1">Siamés</h4>
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
                    <h4 class="card_race js-kitten-race2">Sphynx</h4>
                    <p class="card_description">
                        Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
                        hasta con pinta de alienígena han llegado a definir a esta raza
                        gatuna que se caracteriza por la «ausencia» de pelo.
                    </p>
                </li>`;

const KittenThree = `<li class="card">
                    <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
                    <h3 class="card_title">Cielo</h3>
                    <h4 class="card_race js-kitten-race3">Maine Coon</h4>
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
const searchButton = document.querySelector('.js_button-search');
const kittenDesc1 = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';



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

searchButton.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const descrSearchText = document.querySelector('.js_in_search_desc').value; // Recoge el valor del input de la descripción en una variable


    catList.innerHTML = '';

    if (kittenDesc1.includes(descrSearchText)){
        
        catList.innerHTML = KittenOne;

    }
    
    if (kittenDesc2.includes(descrSearchText)) {

        catList.innerHTML += KittenTwo;
        
    }
    
    if (kittenDesc3.includes(descrSearchText)) {

        catList.innerHTML += KittenThree;
        
    }

});
//1 - seleccionar elementos HTML: h4 (raza).
//2 - comprobar contenido if/else.
//3 - pintar resultado. 

let breedText = "";
const kittenRace1 = document.querySelector('.js-kitten-race1');
const kittenRace2 = document.querySelector('.js-kitten-race2');
const kittenRace3 = document.querySelector('.js-kitten-race3');

if (kittenRace1.innerHTML === "") {
    breedText = `Uy que despiste, no sabemos su raza`;
    kittenRace1.innerHTML = breedText;
};

if (kittenRace2.innerHTML === "") {
    breedText = `Uy que despiste, no sabemos su raza`;
    kittenRace2.innerHTML = breedText;
}

if (kittenRace3.innerHTML === "") {
    breedText = `Uy que despiste, no sabemos su raza`;
    kittenRace3.innerHTML = breedText;
} 

