const nomes = ["Dory","Nemo","Geraldo","Baleia"]
let nome = "Nemo"

let encontra = nomes.findIndex((e) => e == nome)
if(encontra >= 0){
console.log(`encontrei o nemo no indice ${encontra}`);

}else{
console.log("Não consigo encontrar o nemo");

}