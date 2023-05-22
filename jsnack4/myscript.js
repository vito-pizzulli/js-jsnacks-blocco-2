/* Dare la possibilità di inserire due parole.
Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due. */

const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la secondaparola");

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

if (wordSameLenght(firstWord, secondWord) === true) {
    console.log(firstWord, secondWord);
} else if (firstWord.length > secondWord.length) {
    console.log(firstWord);
}