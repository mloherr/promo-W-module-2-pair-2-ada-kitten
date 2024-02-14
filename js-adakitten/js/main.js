'use strict';

const kittenDescOne = document.querySelector('.js-card_descriptionOne').value;
const kittenDescTwo = document.querySelector('.js-card_descriptionTwo').value;
const kittenDescThree = document.querySelector('.js-card_descriptionThree').value;

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

const formSection = document.querySelector('.js-new-form');
formSection.classList.remove('collapsed');


const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const inputDesc = document.querySelector('.js_in_search_desc');
const labelMessageError = document.querySelector('.js-label-error');
const buttonAdd = document.querySelector('.js-add-button');
const buttonCancel = document.querySelector('.js-cancel-button');


const valuePhoto = inputPhoto.value;
const valueName = inputName.value;
const valueRace = inputRace.value;
const valueDesc = inputDesc.value;

labelMessageError.classList.add('empty')

buttonAdd.addEventListener('click', (event)=>{
  if (valuePhoto === '' || valueName === ''|| valueRace === '' || valueDesc === '') {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"
  } else {
    //completa el código
  }
});

// Limpiar todos los inputs
// Ocultar el formulario
buttonCancel.addEventListener('click', (event)=>{
  if (valuePhoto === '' || valueName === ''|| valueRace === '' || valueDesc === '') {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo"
  } else {
    //completa el código
  }
});



// if( kittenDescOne.includes(descrSearchText) ) {
//    //añadir classlist y hacer que se oculte con la clase .collapsed del CSS!
//   }
  
//   if( kittenDescTwo.includes(descrSearchText) ) {
    
//   }
  
//   if( kittenDescThree.includes(descrSearchText) ) {
//   }

// EJERCICIOS  1 Y 2
// const list = document.querySelector('.js-list');
// const kittenImageOne = 'https://dev.adalab.es/gato-siames.webp';
// const kittenNameOne = 'Anastacio';
// const kittenDescOne =
//   'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
// const kittenRaceOne = 'Siamés';

// const kittenOne = `
// <li class="card">
// <article>
//   <img
//     class="card_img"
//     src="${kittenImageOne}"/>
//   <h3 class="card_title">${kittenNameOne.toUpperCase()}</h3>
//   <h4 class="card_race">${kittenRaceOne}</h4>
//   <p class="card_description">
//   ${kittenDescOne}
//   </p>
// </article>
// </li>
// `;

// const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
// const kittenNameTwo = 'Fiona';
// const kittenDescTwo =
//   'Produce fascinación y curiosidad. Éxotico, raro, bello, extraño... hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
// const kittenRaceTwo = 'Sphynx';

// const kittenTwo = `
// <li class="card">
//     <img
//         class="card_img"
//        src="${kittenImageTwo}"
//         alt="sphynx-cat"
//             />
//             <h3 class="card_title">${kittenNameTwo.toUpperCase()}</h3>
//             <h4 class="card_race">${kittenRaceTwo}</h4>
//             <p class="card_description">
//             ${kittenDescTwo}
//             </p>
//           </li> 
// `;

// const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp';
// const kittenNameThree = 'Cielo';
// const kittenDescThree =
//   ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.'
// const kittenRaceThree = 'Maine Coon';

// const kittenThree = `
// <li class="card">
//     <img
//         class="card_img"
//        src="${kittenImageThree}"
//         alt="sphynx-cat"
//             />
//             <h3 class="card_title">${kittenNameThree.toUpperCase()}</h3>
//             <h4 class="card_race">${kittenRaceThree}</h4>
//             <p class="card_description">
//             ${kittenDescThree}
//             </p>
//           </li> 
// `;

// list.innerHTML = `${kittenOne} ${kittenTwo} ${kittenThree}`;


