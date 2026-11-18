// for (let controle = 0; controle < 100; controle = controle + 1) {
//     console.log(controle);
// }

let numero = Number(prompt("Digite um número para calcular o fatorial:"));

let fatorial = 1;

// Multiplica de 1 até o número digitado
for (let contador = numero; contador >= 1; contador--) {
    fatorial *= contador;
}

console.log("Fatorial de " + numero + ": " + fatorial);