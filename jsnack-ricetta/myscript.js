// ? Dati un input e due bottoni, l'utente popola una lista di ingredienti usando il primo bottone, al termine della quale preme un secondo bottone e viene generata un'immagine casuale di un pasto al centro dello schermo dopo 2 secondi per ogni ingrediente nella ricetta.

let ingredientList = [];
const ingredientInput = document.getElementById('ingredient-input');
const addIngredientButton = document.getElementById('add-ingredient-button');
const imageCreateButton = document.getElementById('image-create-button');
const container = document.querySelector('div.container');
const ingredientListUl = document.getElementById('ingredients-list');
let ingredientsCounter = 0;
imageCreateButton.disabled = true;

addIngredientButton.addEventListener('click', function() {

    const ingredient = ingredientInput.value;

    if (ingredient != "") {
        ingredientInput.value = "";
        ingredientList.push(ingredient);
        const ingredientLi = document.createElement('li');
        ingredientLi.innerHTML = ingredient;
        ingredientListUl.append(ingredientLi);
        ingredientsCounter++;
        console.log(ingredientList);

        if (ingredientsCounter >= 2) {
            imageCreateButton.disabled = false;
        }
    }
})

imageCreateButton.addEventListener('click', function() {
    ingredientListUl.innerHTML = " ";
    const timer = (ingredientsCounter * 1000 * 2);
    const imageTimeout = setTimeout(imageGenerator, timer, 'https://source.unsplash.com/400x300/?meal', container);
    const titleTimeout = setTimeout(addElement, timer, 'h2', 'Ricetta:', container);
    const listTimeout = setTimeout(listGenerator, timer, ingredientList, container);
})


/* FUNCTIONS */

/**This function generates an image at the end of the chosen container.
 * 
 * @param {*} source The source of the image.
 * @param {*} container The container at the end of which the image will be generated.
 */
function imageGenerator(source, container) {

    const randomImage = document.createElement('img');
        randomImage.src = source;
        container.append(randomImage);
}

/**This function prints an array adding at the chosen container innerHTML. The array elements will be printed as p elements.
 * 
 * @param {*} array The array to print.
 * @param {*} container The container in which the array will be printed.
 */
function listGenerator(array, container) {

    for (let i = 0; i < array.length; i++) {
        const listElement = array[i];
        container.innerHTML += '<p>' + listElement + '</p>';
    }
}

/**This function creates an html element of the chosen type, with the chosen text, and adds it at the end of the selected container.
 * 
 * @param {*} type The type of html element that will be created. 
 * @param {*} innerText The text that the created element will have inside.
 * @param {*} container The container at the end of which the element will be added.
 */
function addElement(type, innerText, container) {
    type = document.createElement(type);
    type.innerHTML = innerText;
    container.append(type);
}