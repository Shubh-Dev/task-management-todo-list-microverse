const setItemToLocalStorage = (tasks) => {
    localStorage.setItem('task', JSON.stringify(tasks))
};

export default setItemToLocalStorage;