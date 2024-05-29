function phone(numberValue) {
    
    let arrayLetras = [['']]
    const arrayNumber = numberValue.split('')
    console.log(arrayNumber.length);
    
    if (arrayNumber.length <= 0 ) {
        return []
    }
    arrayNumber.forEach(value => {
        switch (value) {
            case "1":
                // arrayLetras.push(['']);
                break;
            case "2":
                arrayLetras.push(['a', 'b', 'c']);
                break;
            case "3": 
            arrayLetras.push(['d', 'e', 'f']);
            break;
            case "4": 
            arrayLetras.push(['g', 'h', 'i']);
            break;
            case "5": 
            arrayLetras.push(['j', 'k', 'l']);
            break;
            case "6": 
            arrayLetras.push(['m', 'n', 'o']);
            break;
            case "7": 
            arrayLetras.push(['p', 'q', 'r','s']);
            break;
            case "8": 
            arrayLetras.push(['t', 'u', 'v']);
            break;
            case "9": 
            arrayLetras.push(['w', 'x', 'y','z']);
            break;
                
        }
    });
    console.log(arrayLetras);

    
    
}
console.log(phone(""))