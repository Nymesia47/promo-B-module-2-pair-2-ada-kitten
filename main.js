'use strickt';

//INFORMACION FORMULARIO
const catList = document.querySelector('.js-list');
const btnAddCat = document.querySelector('.js-btn-add');
const newForm = document.querySelector('.js-new-form');
const cancelForm = document.querySelector('.js-form-cancel');
const imgCat = document.querySelector('.js-cat-img');
const nameCat = document.querySelector('.js-cat-name');
const raceCat = document.querySelector('.js-cat-race');
const descCat = document.querySelector('.js-cat-description');
const searchButton = document.querySelector('.js_button-search');

//TARJETAS GATOS
//GATO UNO
const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = 'Anastasio';
const kittenDesc1 = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRac1 = 'Siamés';
//GATO DOS
const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = 'Fiona';
const kittenDesc2 = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRac2 = 'Sphynx';
//GATO TRES
const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3 = 'Cielo';
const kittenDesc3 = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRac3 = 'Maine Coon';

function renderKitten(url, name, race, desc){
    let kittenImage = url;
    let kittenName = name;
    let kittenRace = race;
    let kittenDesc = desc;
    let NewCat = `<li class="card">
                    <img class="card_img" src="${kittenImage}" alt="sphynx-cat" />
                    <h3 class="card_title">${kittenName.toUpperCase()}</h3>
                    <h4 class="card_race js-kitten-race">${kittenRace}</h4>
                    <p class="card_description">${kittenDesc}</p>
                </li>`;
    return NewCat;

};

const kittenOne = renderKitten(kittenImage1, kittenName1, kittenRac1, kittenDesc1);
const kittenTwo = renderKitten(kittenImage2, kittenName2, kittenRac2, kittenDesc2);
const kittenThree = renderKitten(kittenImage3, kittenName3, kittenRac3, kittenDesc3);

catList.innerHTML = catList.innerHTML + kittenOne + kittenTwo + kittenThree;

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

//FILTRAR BUSQUEDA POR DESCRIPCIÓN
function filterKitten(ev){
    ev.preventDefault();
    const descrSearchText = document.querySelector('.js_in_search_desc').value; // Recoge el valor del input de la descripción en una variable
    const raceSearchText = document.querySelector('.js_in_search_race').value;

    if ( descrSearchText !== '' ) {

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


    }

    if ( raceSearchText !== '') {
        catList.innerHTML = '';

        if (kittenRac1.includes(raceSearchText)){
        
            catList.innerHTML = kittenOne;

        }
    
        if (kittenRac2.includes(raceSearchText)) {

            catList.innerHTML += kittenTwo;
        
        }
    
        if (kittenRac3.includes(raceSearchText)) {

            catList.innerHTML += kittenThree;
        
        }
    }


    
};

searchButton.addEventListener('click', filterKitten);

//COMPROBAR SI HAY RAZA
//1 - seleccionar elementos HTML: h4 (raza).
//2 - comprobar contenido if/else.
//3 - pintar resultado. 

//let breedText = "";

const kittenRace = document.querySelector('.js-kitten-race');


function renderRace (race) {
    if (race === "") {
        return `Uy que despiste, no sabemos su raza`;
    } else {
        return race;
    };
}

kittenRace.innerHTML = renderRace(kittenRace);

// let breedText = "";
// const kittenRace = document.querySelector('.js-kitten-race');
// if (kittenRace.innerHTML === "") {
//     breedText = `Uy que despiste, no sabemos su raza`;
//     kittenRace.innerHTML = breedText;
// };