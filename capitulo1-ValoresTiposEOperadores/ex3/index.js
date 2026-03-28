const TAMANHO_ALTURA = Number(process.argv[2]);
const TAMANHO_LARGURA = Number(process.argv[3]);
let sequencia = "";
for (let i = 1; i < TAMANHO_LARGURA; i++) {
    for (let j = 0; j < TAMANHO_ALTURA; j++) {
        if ((i + j) % 2 == 0){
            sequencia += " ";
        }
        else {
            sequencia += "#";
        }
    }
    sequencia += "\n"
}
console.log(sequencia);
console.log(process.argc)