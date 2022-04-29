const dynamicList = document.querySelector('.dynamic-list');

const getItemFromLocalStorage = (array) => {
    let dataFromLocalStorage = localStorage.getItem('task');
    array.push(JSON.parse(dataFromLocalStorage));
    array.forEach((item) => {
        dynamicList.innerHTML += `<div class="inner-div"><input type="checkbox">${item.description}</div>`;
    })


}

export default getItemFromLocalStorage;