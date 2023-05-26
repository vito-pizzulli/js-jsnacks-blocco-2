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
    ingredientInput.value = " ";
    ingredientList.push(ingredient);
    const ingredientLi = document.createElement('li');
    ingredientLi.innerHTML = ingredient;
    ingredientListUl.append(ingredientLi);
    ingredientsCounter++;
    console.log(ingredientList);

    if (ingredientsCounter >= 2) {
        imageCreateButton.disabled = false;
    }
})

imageCreateButton.addEventListener('click', function() {
    const imageTimer = ingredientsCounter * 1000 * 2;
    const timeout = setTimeout(addRandomImage, imageTimer, 'https://picsum.photos/300', container);
})

function addRandomImage(source, container) {
const randomImage = document.createElement('img');
        randomImage.src = source;
        container.append(randomImage);
}