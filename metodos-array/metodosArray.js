//alguns metodos de array
const jogadores = ['Ronaldinho','Romário','Rivaldo','Rivelino','Pelé']
//Remove o último elemento do array
jogadores.pop()

//Adiciona um elemento no final
jogadores.push('Bebeto')

//Remove o primeiro elemento
jogadores.shift()

//Adiciona um elemento na primeira posição
jogadores.unshift('Renato Gaúcho')

//Adiciona um elemnto e tambem pode remover
jogadores.splice(2,1, 'Cristiano Ronaldo')
console.log(jogadores)
