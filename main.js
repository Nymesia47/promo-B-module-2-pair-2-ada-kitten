'use strickt';

//INFORMACION FORMULARIO
const catList = document.querySelector('.js-list');
const btnAddCat = document.querySelector('.js-btn-add');
const newForm = document.querySelector('.js-new-form');
const buttonCancelForm = document.querySelector('.js-form-cancel');
const buttonNewCat = document.querySelector('.js-btn-newCat');
const imgCat = document.querySelector('.js-cat-img');
const nameCat = document.querySelector('.js-cat-name');
const raceCat = document.querySelector('.js-cat-race');
const descCat = document.querySelector('.js-cat-description');
const searchButton = document.querySelector('.js_button-search');

//listado de gatitos (objetos)


//TARJETAS GATOS
//GATO UNO
const kittenData_1 ={
    image : "https://dev.adalab.es/gato-siames.webp",
    name : 'Anastasio',
    desc : 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
    race : 'Siamés'
};
//GATO DOS
const kittenData_2 ={
    image : "https://dev.adalab.es/sphynx-gato.webp",
    name : 'Fiona',
    desc : 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
    race : 'Sphynx'
};
//GATO TRES
const kittenData_3 ={
    image : "https://dev.adalab.es/maine-coon-cat.webp",
    name : 'Cielo',
    desc : 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
    race : 'Maine Coon' 
};

const newKittenData = {
    image : imgCat.value,
    name : nameCat.value,
    desc : descCat.value,
    race : raceCat.value,

};

function renderKitten(kittenData){
    let kittenImage = kittenData["image"];
    let kittenName = kittenData["name"];
    let kittenRace = kittenData["race"];
    let kittenDesc = kittenData["desc"];
    kittenRace = renderRace(kittenData["race"]); //Llamar a la función comprobar raza

    let newCat = `<li class="card">
                    <img class="card_img" src="${kittenImage}" alt="sphynx-cat" />
                    <h3 class="card_title">${kittenName.toUpperCase()}</h3>
                    <h4 class="card_race js-kitten-race">${kittenRace}</h4>
                    <p class="card_description">${kittenDesc}</p>
                </li>`;
    
    
    return newCat;
};

//COMPROBAR SI HAY RAZA
//1 - seleccionar elementos HTML: h4 (raza).
//2 - comprobar contenido if/else.
//3 - pintar resultado. 
function renderRace (kittenRace) {
    if (kittenRace === "") {
        return `Uy que despiste, no sabemos su raza`;
    } else {
        return kittenRace;
    };
};



const kittenOne = renderKitten(kittenData_1);
const kittenTwo = renderKitten(kittenData_2);
const kittenThree = renderKitten(kittenData_3);

catList.innerHTML = catList.innerHTML + kittenOne + kittenTwo + kittenThree;

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

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

function handleClickNewCat (event) {
    event.preventDefault();
    catList.innerHTML = catList.innerHTML + renderKitten(newKittenData);

}

 

function cancelNewKitten(event) {
    event.preventDefault();
    // newForm.reset();
    imgCat.value = "";
    nameCat.value = "";
    raceCat.value = "";
    descCat.value = "";

    newForm.classList.add('collapsed');

}


btnAddCat.addEventListener('click', handleClickNewCatForm);

buttonNewCat.addEventListener('click', handleClickNewCat);

buttonCancelForm.addEventListener('click', cancelNewKitten);

/*
1. recojer los valores del formolario y guardarlo en un objeto.
2. render new kitten

*/


//FILTRAR BUSQUEDA POR DESCRIPCIÓN
function filterKitten(ev){
    ev.preventDefault();
    const descrSearchText = document.querySelector('.js_in_search_desc').value; // Recoge el valor del input de la descripción en una variable
    const raceSearchText = document.querySelector('.js_in_search_race').value;

    if ( descrSearchText !== '' ) {

        catList.innerHTML = '';

        if (kittenData_1["desc"].includes(descrSearchText)){
        
            catList.innerHTML = kittenOne;

        }
    
        if (kittenData_2["desc"].includes(descrSearchText)) {

            catList.innerHTML += kittenTwo;
        
        }
    
        if (kittenData_3["desc"].includes(descrSearchText)) {

            catList.innerHTML += kittenThree;
        
        }
    }

    if ( raceSearchText !== '') {
        catList.innerHTML = '';

        if (kittenData_1["race"].includes(raceSearchText)){
        
            catList.innerHTML = kittenOne;

        }
    
        if (kittenData_2["race"].includes(raceSearchText)) {

            catList.innerHTML += kittenTwo;
        
        }
    
        if (kittenData_3["race"].includes(raceSearchText)) {

            catList.innerHTML += kittenThree;
        
        }
    }


    
};

searchButton.addEventListener('click', filterKitten);

