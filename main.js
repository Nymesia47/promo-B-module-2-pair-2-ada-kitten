'use strickt';

const catList = document.querySelector('.js-list');
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

const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = 'Anastasio';
const kittenDescrip1 = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRac1 = 'Siamés';
const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = 'Fiona';
const kittenDescrip2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…   hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRac2 = 'Sphynx';
const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = 'Cielo';
const kittenDescrip3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su  bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRac3 = 'Maine Coon';

function renderKitten(url, name, race, desc){
    let kittenImage = url;
    let kittenName = name;
    let kittenRace = race;
    let kittenDesc = desc;
    let NewCat = `<li class="card">
                    <img class="card_img" src="${kittenImage}" alt="sphynx-cat" />
                    <h3 class="card_title">${kittenName}</h3>
                    <h4 class="card_race js-kitten-race2">${kittenRace}</h4>
                    <p class="card_description">${kittenDesc}</p>
                </li>`;
    return NewCat;

};

console.log(renderKitten(kittenImage1, kittenName1, kittenRac1, kittenDesc1));

const kittenOne = renderKitten(kittenImage1, kittenName1, kittenRac1, kittenDesc1);
const kittenTwo = renderKitten(kittenImage2, kittenName2, kittenRac2, kittenDesc2);
const kittenThree = renderKitten(kittenImage3, kittenName3, kittenRac3, kittenDesc3);

catList.innerHTML = catList.innerHTML + kittenOne + kittenTwo + kittenThree;

//const KittenOne = `<li class="card">
 //                   <article>
   //                     <img class="card_img" src="${kittenImage1}" alt="siames-cat" />
   //                     <h3 class="card_title">${kittenName1}</h3>
   // //                    <h4 class="card_race js-kitten-race1">${kittenRac1}</h4>
   //                     <p class="card_description">${kittenDescrip1}</p>
   //                 </article>
   //             </li>`;


//const KittenTwo =`<li class="card">
//                    <img class="card_img" src="${kittenImage2}" alt="sphynx-cat" />
//                    <h3 class="card_title">${kittenName2}</h3>
//                    <h4 class="card_race js-kitten-race2">${kittenRac2}</h4>
//                    <p class="card_description">${kittenDescrip2}</p>
//               </li>`;


//const KittenThree = `<li class="card">
//                    <img class="card_img" src="${kittenImage3}" alt="maine-coon-cat" />
//                    <h3 class="card_title">${kittenName3}</h3>
//                    <h4 class="card_race js-kitten-race3">${kittenRac3}</h4>
//                    <p class="card_description">${kittenDescrip3}</p>
//                </li>`;







//Mostrar/ocultar el formulario

function showNewCatForm(){
    newForm.classList.remove('collapsed');
}

function hideNewCatForm(){
    newForm.classList.add('collapsed');
}

function handleClickNewCatForm (event){
    if (newForm.classList.contains('collapsed')) {
        showNewCatForm();
    } else {
        hideNewCatForm();
    }

}

btnAddCat.addEventListener('click', handleClickNewCatForm);

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
        
        catList.innerHTML = kittenOne;

    }
    
    if (kittenDesc2.includes(descrSearchText)) {

        catList.innerHTML += kittenTwo;
        
    }
    
    if (kittenDesc3.includes(descrSearchText)) {

        catList.innerHTML += kittenThree;
        
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


