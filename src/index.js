import _ from 'lodash';
import './style.css';
import setItemToLocalStorage from './modules/setLocalStorage.js';
import getItemFromLocalStorage from './modules/getItemFromLocalStorage.js';
// import Icon from './refresh.svg';

// const myIcon = new Image();
// myIcon.src = Icon;

// const headLine = document.querySelector('.headline');
// headLine.appendChild(Icon);


const inputFieldValue = document.querySelector('#input');
const onlyForm = document.querySelector('.only-form');

let taskArray = [];
let itemArray = [];


onlyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let taskObj = {
        description: inputFieldValue.value,
        completed: false,
        index: Date.now()
    };
    taskArray.push(taskObj);
    setItemToLocalStorage(taskArray);
    onlyForm.reset();
    getItemFromLocalStorage(itemArray);
    
});