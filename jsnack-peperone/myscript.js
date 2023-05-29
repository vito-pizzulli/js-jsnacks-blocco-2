/* Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e 'lunghezza-cm'. Calcola quanto pesano tutti i peperoni.

Bonus:
Crea un peperone con una funzione. */

const peperoni = [];

for (let i = 0; i < 10; i++) {
    const peperone = generaPeperone();
    peperoni.push(peperone);
}

let pesoTotale = 0;
for (let i = 0; i < peperoni.length; i++) {
    const pesoPeperone = peperoni[i].peso;
    pesoTotale += pesoPeperone;
}

console.log(peperoni);
console.log('Il peso totale dei peperoni è ' + pesoTotale + '.');

/**
 * This function generate an object of a random pepper, with a random variety, weight and length.
 * @returns An object with 3 random properties.
 */
function generaPeperone () {
    const listaVarietà = ['Pontecorvo', 'Carmagnola', 'Senise', 'Quadrato di Asti', 'Capriglio', 'Papaccella napoletana', 'Friggitello Torricello', 'Dolce di Altino', 'Polizzi Generosa', 'Cappello del Vescovo'];
    const indiceVarietà = Math.floor(Math.random() * listaVarietà.length);
    const varietà = listaVarietà[indiceVarietà];
    const peso = Math.floor(Math.random() * 100) + 5;
    const lunghezza = Math.floor(Math.random() * 100) + 5;
    const peperone = {
        varietà: varietà,
        peso: peso,
        lunghezza: lunghezza
    }
    return peperone;
}