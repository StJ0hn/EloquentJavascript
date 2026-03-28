function min(numeroUm, numeroDois) {
    let menor = numeroUm;
    if (numeroDois < menor) {
        menor = numeroDois;
    }
    return menor;
}

console.log(min(0,10));
console.log(min(0,-10))