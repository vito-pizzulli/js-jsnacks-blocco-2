/* Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore
    Nome
    Cognome
    Età
    Media punti fatti per partita
    Percentuale di successo per tiri da 3 punti
    Stoppate 
    Tiri 

Generare casualmente le statistiche di gioco, secondo queste regole:
    il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
    la media punti fatti per partita deve essere compresa tra 0 e 50
    la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
    le stoppate sono un numero intero compresot ra 0 e 30
    i tiri sono un numero intero compreso tra 20 e 100 */

    const basketPlayer = {
        'codice-giocatore': get3RandomLetters() + getRandomInteger(0, 9) + getRandomInteger(0, 9) + getRandomInteger(0, 9),
        nome: 'Mario',
        cognome: 'Rossi',
        età: '23',
        'media-punti-partita': getRandomInteger(0, 50),
        'percentuale-tiri-3-punti': getRandomInteger(0, 100),
        stoppate: getRandomInteger(0, 30),
        tiri: getRandomInteger(20, 100)
    };

    console.log(basketPlayer);

    /**
     * This function returns a random integer number from min to max, based on the set parameters.
     * @param {*} min The smallest possible random integer.
     * @param {*} max The biggest possible random integer.
     * @returns A random integer in the set range.
     */
    function getRandomInteger(min, max) {
        return Math.floor(Math.random() * max) + min;
    }


    /**
     * This function returns 3 random capital letters from all alphabet.
     * @returns 3 random capital letters.
     */
    function get3RandomLetters() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)] + alphabet[Math.floor(Math.random() * alphabet.length)];
    }