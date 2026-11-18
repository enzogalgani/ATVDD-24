// for (let controle = 0; controle < 100; controle = controle + 1) {
//     console.log(controle);
// }

const numero = +prompt("Digite um número:");

let fatorial = 1;
let conta = numero;

for (let i = numero; i >= 1; i--) {
    fatorial *= i;
    if (i < numero) {
        conta += " * " + i;
    }
}

console.log("Fatorial de " + numero + ": " + conta + " = " + fatorial);