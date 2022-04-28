const getItemFromLocalStorage = () => {
    localStorage.getItem(JSON.parse('task'));
    console.log(task);
}

export default getItemFromLocalStorage;