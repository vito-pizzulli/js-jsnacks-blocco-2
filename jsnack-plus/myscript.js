

function createLi () {
    const liElement = document.createElement('li');
    liElement.innerHTML = "Contenuto";
    return liElement;
}

const ulElement = document.querySelector('ul');

for (let i = 0; i < 10; i++) {
    const li = createLi();

    li.addEventListener('click', function () {
        li.classList.toggle('txt-line-through');
    })

    ulElement.appendChild(li);
}