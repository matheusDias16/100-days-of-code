let churrasqueira = ["Não vegetariano","Não vegetariano","Vegetariano","Não vegetariano","Não vegetariano"]

 let vezes = (ar , value ) => ar.reduce((acc,item)=>value === item ? acc + 1 : acc ,0 )
 console.log(vezes(churrasqueira, "Não vegetariano") + "," , vezes(churrasqueira,"Vegetariano"   ))
