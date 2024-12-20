function iaMovement(){
    for (let combination of winCombinations){
        //prioriza ganar
        if (combination.filter(combi => tabla[combi].textContent === "O").length === 2 &&
        combination.some(combi => tabla[combi].textContent === "")){
           prueba = combination.find(combi => tabla[combi].textContent === "")
           console.log(prueba)
           return combination.find(combi => tabla[combi].textContent === "")
        }
    }
    for (let combination of winCombinations){
         // prioriza bloquear
        if (combination.filter(combi => tabla[combi].textContent === "X").length === 2 &&
            combination.some(combi => tabla[combi].textContent === "")){
                prueba = combination.find(combi => tabla[combi].textContent === "")
                console.log(prueba)
                return combination.find(combi => tabla[combi].textContent === "")
        
        }
    }
    for(let i = 0; i < tabla.length; i++){ 
        if (tabla[i].textContent == ""){
            return i   
        }
    }
}
    
    
