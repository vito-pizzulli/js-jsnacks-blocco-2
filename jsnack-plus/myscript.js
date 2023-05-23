function createLi () {
    const liElement = document.createElement('li');
    liElement.innerHTML = "Contenuto";
    return liElement;
}

const ulElement = document.querySelector('ul');

for (let i = 0; i < 10; i++) {
    const li = createLi();
    ulElement.appendChild(li);
}