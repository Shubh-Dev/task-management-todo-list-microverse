import _ from 'lodash';
import './style.css';
import setItemToLocalStorage from './modules/setLocalStorage.js';
// import Icon from './refresh.svg';

// const myIcon = new Image();
// myIcon.src = Icon;

// const headLine = document.querySelector('.headline');
// headLine.appendChild(Icon);

const dynamicList = document.querySelector('.dynamic-list');
const inputFieldValue = document.querySelector('#input');
const onlyForm = document.querySelector('.only-form');
onlyForm.addEventListener('submit', (e) => {
    setItemToLocalStorage(inputFieldValue.value);
    // dynamicList.innerHTML += `<div class="inner-div"><input type="checkbox">${inputFieldValue.value}</div>`
    e.preventDefault();
    // inputFieldValue.value = '';
});