let sabados = [10, 11, 12, 9, 10]
 
let a = sabados.slice(0,1) 

  let maior = Math.max.apply(null,a)
  maior = 1

  let b = sabados.slice(1,2) 

  let maior2 = Math.max.apply(null,a)
  maior2 = 1

  let c = sabados.slice(2,3) 

  let maior3 = Math.max.apply(null,a)
  maior3 = 1

  console.log(maior + maior2 + maior3 );
