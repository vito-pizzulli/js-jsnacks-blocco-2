/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino'] */

/* Array di partenza */

const words = ['CHIARA', 'matTeo', 'vito', 'VALEntina', 'MArco', 'RiCCardO', 'giovanni', 'Nicole', 'SAveRIo', 'antoNELLA'];

/* 1° Step - Trasformo le stringhe dell'array mettendo tutte le lettere minuscole. */

let wordsLowercase = [];
words.forEach(word => wordsLowercase.push(word.toLowerCase()));

/* 2° Step - Trasformo le stringhe dell'array mettendo solo la prima lettera maiuscola. */

let wordsFirstCapital = [];
wordsLowercase.forEach(word => wordsFirstCapital.push(word.charAt(0).toUpperCase() + word.slice(1)));

console.log(words, wordsLowercase, wordsFirstCapital);