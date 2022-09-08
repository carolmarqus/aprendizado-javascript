/* Estrutura de controle Encadeada */

/* Verificar se o número informado é menor do que 10, ou menor do que 20, ou menor do que 30
e tambem se o número informado é maior do que 30. */

function recebeValor(valor){

    if(valor < 10){
        console.log("O valor informado é menor do que 10.")
    }else{
        if(valor < 20){
            console.log("O valor informado é menor do que 20 e maior do que 10.")
        }else{
            if(valor < 30){
                console.log("O valor informado é menor do que 30 e maior do que 20.")
            }else{
                console.log("O valor informado é maior do que 30.")
            }
        }
    }
    
    };
    
    recebeValor(23);
    