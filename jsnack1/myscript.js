/* Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50. */

const numberList = [];
let sum = 0;
let i = 0;

while (sum < 50) {
    let number = parseInt(prompt("Inserisci un numero"));

    while (isNaN(number)) {
        number = parseInt(prompt("Inserisci un numero"));
    }
    
    numberList.push(number);
    sum += number;
}

console.log(numberList, sum);