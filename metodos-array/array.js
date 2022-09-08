const exemploArray = [20, 45, 32, 67]
//  exibindo o conteuo do array atraves dos indices
console.log(exemploArray[1], exemploArray[3])

// adicionando um indice e exibindo ele
exemploArray[4] = 'Caroline'
console.log(exemploArray[4])

// exibindo todo o array
console.log(exemploArray)

// exibindo a quantidade de elementos do array
console.log(exemploArray.length)

// O método push() adiciona um ou mais elementos ao final de um array 
exemploArray.push({codigo: 2}, false, null, 'teste')
console.log(exemploArray)

// O método pop() exclui o ultimo elemento do array
console.log(exemploArray.pop())

// excluindo o elemento do 4 indice do array
delete exemploArray[4]
console.log(exemploArray)



