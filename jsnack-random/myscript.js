/* Creare una funzione che restituisca un array di quattro numeri randomici diversi tra loro tra 1 e 5 inclusi. */

randomNumbersGenerator(1, 5, 4);

/**
 * This function creates an array of random numbers. You can choose the min and max random number that will be generated, and how many elements will the array have.
 * @param {*} minNumber The min random number that will be generated.
 * @param {*} maxNumber The max random number that will be generated.
 * @param {*} totalNumbers The number of elements that the array will have.
 */
function randomNumbersGenerator(minNumber, maxNumber, totalNumbers) {

    let randomNumbersList = [];

    if ( (maxNumber - minNumber) < totalNumbers ){
        console.log("Non è possibile generare abbastanza numeri casuali nel range selezionato.");

    } else {
        
        while (randomNumbersList.length < totalNumbers) {
            const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

            if (!randomNumbersList.includes(randomNumber)) {
                randomNumbersList.push(randomNumber);
            }
        }
        console.log(randomNumbersList);
    }
}