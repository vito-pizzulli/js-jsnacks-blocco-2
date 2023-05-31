/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino'] */

const words = ['CHIARA', 'matTeo', 'vito', 'VALEntina', 'MArco', 'RiCCardO', 'giovanni', 'Nicole', 'SAveRIo', 'antoNELLA'];

let wordsConverted = [];
words.forEach(word => wordsConverted.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()));

console.log(words, wordsConverted);