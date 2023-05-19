/* Generare numero casuale tra 1 e 100 COMPRESI. Continuare a chiedere all'utente di indovinare il numero fino a quando non lo indovina.
Ogni volta che sbaglia stampiamo in console un messaggio che gli/le dice se il numero da indovinare è maggiore o minore.
Una volta che ha indovinato, stampiamo in console il numero di tentativi totali. */

const randomNumber = Math.floor((Math.random() * 100) + 1);
let guesses = 1;
let numberFound = false;

while (numberFound === false) {
    let userNumber = parseInt(prompt('Inserisci il tuo numero'));

    while (isNaN(userNumber)) {
    userNumber = parseInt(prompt('Hai inserito un valore non valido. Inserisci nuovamente il tuo numero.'));
    }

    if (userNumber === randomNumber) {
        console.log('Complimenti, il numero era ' + randomNumber + '! Per indovinarlo hai impiegato ' + guesses + " tentativi.");
        numberFound = true;

    } else if (userNumber < randomNumber) {
        console.log('Purtroppo non hai indovinato, il numero è maggiore di ' + userNumber + '.');
        guesses++;

    } else {
        console.log('Purtroppo non hai indovinato, il numero è minore di ' + userNumber + '.');
        guesses++;
    }
}