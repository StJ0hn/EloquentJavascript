function countBs(palavra) {
    let contador = 0;
    for (let char = 0; char < palavra.length; char++) {
        if (palavra.charAt(char) == "B") {
            contador++;
        }
    }
    return contador;
}

function countChar(palavra, letra) {
    let contador = 0;
    for (let char = 0; char < palavra.length; char++) {
        if (palavra.charAt(char) == letra) {
            contador++;
        }
    }
    return contador;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"))
