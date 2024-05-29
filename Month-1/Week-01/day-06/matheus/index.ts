function proximoPrimo(value) {
    
    function verPrimo(num) {
        if (num <= 1) return false; 
        if (num <= 3) return true; //5,3,2, SAO PRIMOS

        if (num % 2 === 0 || num % 3 === 0) //NAO PODE SER DIVISIVEL POR 2 NEM 3 POR SER PRIMO 
        return false;

        let divisor = 5;
        while (divisor * divisor <= num) {
            if (num % divisor === 0 || num % (divisor + 2) === 0) return false;
            divisor += 6;
        }

        return true;
    }

    if (verPrimo(value)) {
    return value;
} else {
    let proximo = value + 1;
    while (true) {
        if (verPrimo(proximo)) {
            return proximo;
        }
        proximo++;
    }
}
}


let numero = 17;
let proximoNumeroPrimo = proximoPrimo(numero);
console.log("Próximo primo depois do", numero, "é:", proximoNumeroPrimo);