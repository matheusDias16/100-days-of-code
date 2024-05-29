function verPares(value) {
    let pares = 0;
    let ar = {};

    
    for (let i = 0; i < value.length; i++) {
        let letra = value[i];
        if (ar[letra]) {
            ar[letra]++;
        } else {
            ar[letra] = 1;
        }
    }

    for (let array in ar) {
        if (ar[array] >= 2) {
            pares += Math.floor(ar[array] / 2);
        }
    }
    return pares;
}

let numeroDePares = verPares("CABBACCC");
console.log("Número de pares de letras idênticas:", numeroDePares);
