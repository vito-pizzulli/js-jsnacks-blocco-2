/* Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e 'lunghezza-cm'. Calcola quanto pesano tutti i peperoni.

Bonus:
Crea un peperone con una funzione. */

const peperoni = [
    {
        varietà: 'Pontecorvo',
        'peso-gr': 120,
        'lunghezza-cm': 10
    },
    {
        varietà: 'Carmagnola',
        'peso-gr': 90,
        'lunghezza-cm': 5
    },
    {
        varietà: 'Senise',
        'peso-gr': 80,
        'lunghezza-cm': 2
    },
    {
        varietà: 'Quadrato di Asti',
        'peso-gr': 30,
        'lunghezza-cm': 3
    },
    {
        varietà: 'Capriglio',
        'peso-gr': 15,
        'lunghezza-cm': 8
    },
    {
        varietà: 'Papaccella napoletana',
        'peso-gr': 35,
        'lunghezza-cm': 4
    },
    {
        varietà: 'Friggitello Torricello',
        'peso-gr': 55,
        'lunghezza-cm': 7
    },
    {
        varietà: 'Dolce di Altino',
        'peso-gr': 50,
        'lunghezza-cm': 2
    },
    {
        varietà: 'Polizzi Generosa',
        'peso-gr': 40,
        'lunghezza-cm': 3
    },
    {
        varietà: 'Cappello del Vescovo',
        'peso-gr': 110,
        'lunghezza-cm': 1
    }
]

let pesoTotale = 0;
for (let i = 0; i < peperoni.length; i++) {
    const pesoPeperone = peperoni[i]['peso-gr'];
    pesoTotale = pesoTotale + pesoPeperone;
}

console.log('Il peso totale dei peperoni è ' + pesoTotale + '.');