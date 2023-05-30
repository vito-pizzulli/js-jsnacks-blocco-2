/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

 */

automobili = [
    {
        marca: 'Peugeot',
        modello: '308',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Peugeot',
        modello: '208',
        alimentazione: 'Elettrico'
    },
    {
        marca: 'Peugeot',
        modello: '108',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'Metano'
    },
    {
        marca: 'Fiat',
        modello: 'Tipo',
        alimentazione: 'Gpl'
    },
    {
        marca: 'Fiat',
        modello: 'Panda',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Volkswagen',
        modello: 'Up',
        alimentazione: 'Benzina'
    },
    {
        marca: 'Volkswagen',
        modello: 'Golf',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Tesla',
        modello: 'Model S',
        alimentazione: 'Elettrico'
    },
    {
        marca: 'Lancia',
        modello: 'Y',
        alimentazione: 'Gpl'
    },
    {
        marca: 'Alfa Romeo',
        modello: 'Giulietta',
        alimentazione: 'Diesel'
    },
    {
        marca: 'Alfa Romeo',
        modello: 'Giulia',
        alimentazione: 'Benzina'
    },{
        marca: 'Fiat',
        modello: '600',
        alimentazione: 'Metano'
    },
    {
        marca: 'Fiat',
        modello: '500',
        alimentazione: 'Elettrico'
    },
    {
        marca: 'Peugeot',
        modello: '408',
        alimentazione: 'Benzina'
    },

]

console.log(automobili);

/* Primo array solo le auto a benzina, ciclo for */
let automobiliBenzina = [];

for (i = 0; i < automobili.length; i++) {

    if (automobili[i].alimentazione === 'Benzina') {;
    automobiliBenzina.push(automobili[i]);
    }
}

console.log(automobiliBenzina);


/* Secondo solo le auto a diesel, ciclo foreach */
let automobiliDiesel = [];

automobili.forEach(automobile => {
    if (automobile.alimentazione === 'Diesel') {
        automobiliDiesel.push(automobile);
    }
})

console.log(automobiliDiesel);