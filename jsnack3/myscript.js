/* Calcola la somma e la media dei primi 10 numeri. */

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("La somma dei primi 10 numeri è " + sum);
console.log("La media dei primi 10 numeri è " + (sum / 10));