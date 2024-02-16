'use strict';

// descripciones de los gatos

const kittenDescOne = document.querySelector('.js-card_descriptionOne');
const kittenDescTwo = document.querySelector('.js-card_descriptionTwo');
const kittenDescThree = document.querySelector('.js-card_descriptionThree');


const newForm = document.querySelector('.js-new-form');
newForm.classList.add('collapsed');

// llamando a los inputs del HTML

const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const inputDesc = document.querySelector('.js_input_search_desc');
const labelMessageError = document.querySelector('.js-label-error');
const buttonAdd = document.querySelector('.js-add-button');
const buttonCancel = document.querySelector('.js-cancel-button');

const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
const valueRace = inputRace.value;
const valueDesc = inputDesc.value;

const linkNewFormElement = document.querySelector('.js-cat-form');



// EJERCICIO FILTRAR GATO el evento click asociado al botón buscar//
// Llamamos al listado de gatos
const listElement = document.querySelector('.js-list');
const kittenOne = document.querySelector('.js-kittenOne');
const kittenTwo = document.querySelector('.js-kittenTwo');
const kittenThree = document.querySelector('.js-kittenThree');


// PASOS:
// 1º llamamos al input de la descripción en el HTML
// 2º escuchamos el dato/valor que se ha escrito en el input descripción

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

// PASOS:
// Cuando el usuario pulse el botón BUSCAR (filtterKitten) 
// 1- Si la descripción coincide con alguna palabra del 1er gato, te muestra el primer gato
// 2- Si la descripción no coincide con el 1er gato, buscará en el segundo gato
// 3- Si la descripción no coincide con el 2do gato, buscará en el tercer gato
// 4- si no coincide con ninguna palabra de ninguna descripción, no mostrará ningún gato
const filterKitten = (event) => {
  event.preventDefault();
  if (kittenDescOne.includes(descrSearchText)) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenDescTwo.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenDescThree.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree;
  }
};

// PASOS:
// 1º llamamos al botón BUSCAR del HTML
// 2º escuchamos al botón BUSCAR y tiene el evento click

const buttonSearch = document.querySelector('.js-button-search');
buttonSearch.addEventListener('click', filterKitten);



// JERCICIO : Que te salga texto de 'parece que te has olvidado algo' si no completas todo
labelMessageError.classList.add('empty');

buttonAdd.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    valuePhoto === '' ||
    valueName === '' ||
    valueRace === '' ||
    valueDesc === ''
  ) {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  } else {
    valuePhoto === true &&
      valueName === true &&
      valueRace === true &&
      valueDesc === true;
    const result = `${valuePhoto} + ${valueName} + ${valueRace} + ${valueDesc}`;
    return result;
    console.log(result);
  }
});

// Si se rellenan todos los datos del gato, el botón añadir, añadirá al gato.

// 1º. Recoger los valores del formulario.
//2º. Si todos los valores del formulario están rellenos, entonces
//3º El botón añadir, añadirá al gatico

buttonCancel.addEventListener('click', (event) => {
  if (
    valuePhoto === '' ||
    valueName === '' ||
    valueRace === '' ||
    valueDesc === ''
  ) {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  } else {
    //completa el código
  }
});

/* 
QUEREMOS que cuando el usuario haga click en +. muestre el formulario, y cuando volvamos a pulsarlo, se oculte.
*/

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}

function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

linkNewFormElement.addEventListener('click', handleClickNewCatForm);










