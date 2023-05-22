/* Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due. */

const firstInput = prompt("Inserisci la prima parola");
const secondInput = prompt("Inserisci la seconda parola");

/**
 * This function checks if two words have the same length.
 * @param {*} firstWord The first word whose lenght will be calculated and compared.
 * @param {*} secondWord The second word whose lenght will be calculated and compared.
 * @returns True if the words have the same lenght, false otherwise.
 */

function wordSameLenght(firstWord, secondWord) {
    if (firstWord.length === secondWord.length) {
        return true;
    } else {
        return false;
    }
}

if (wordSameLenght(firstInput, secondInput) === true) {
    console.log(firstInput, secondInput);
} else if (firstInput.length > secondInput.length) {
    console.log(firstInput);
}