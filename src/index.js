import _ from 'lodash';
import './style.css';
// import setItemToLocalStorage from './modules/setLocalStorage.js';
// import getItemFromLocalStorage from './modules/getItemFromLocalStorage.js';
// import Icon from './refresh.svg';

// const myIcon = new Image();
// myIcon.src = Icon;

// const headLine = document.querySelector('.headline');
// headLine.appendChild(Icon);

const dynamicList = document.querySelector('.dynamic-list');
const inputFieldValue = document.querySelector('#input');
const onlyForm = document.querySelector('.only-form');

let taskArray = [
     { description: 'Wash car',
       completed: false,
       index: Date.now()
},
{ description: 'Hair cut',
    completed: false,
    index: Date.now()
},
{ description: 'Buy Grocery',
    completed: false,
    index: Date.now()
},
];


onlyForm.addEventListener('submit', (e) => {
    taskArray.forEach((taskObj) => {
    dynamicList.innerHTML += `<div class="inner-div"><input type="checkbox">${taskObj.description}</div>`
    });     
    e.preventDefault();
   onlyForm.reset();
});