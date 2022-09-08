const notaCurso = function (nota){


    switch(nota){

        case 10: console.log('Sucesso, continue assim!')
        break
        case 9: console.log('Parabens, muito bom!') 
        break
        case 8: console.log('Parabens!')
        break
        case 7: console.log('Muito bom!') 
        break
        case 6: console.log('Bom!') 
        break
        case 5: console.log('Estude mais!') 
        break
        case 4: case 3: case 2: case 1: case 0:
            console.log('Você está reprovado!')
            break

            default: console.log('Nota inválida!')
    }
}

notaCurso(10)