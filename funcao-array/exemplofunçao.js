// Criando funções

//1 forma de criar uma função.
function soma(a,b=0){
    console.log(a+b)
 }
 soma(3,5)
 
 //2 forma de criar uma função. Arrowfunction:
 const soma2 = (a,b) => {
     return a + b
 }
 console.log(soma2(5,10))
 
 //3 forma de criar uma função. Arrowfunction de uma só instrução:
 const soma3 = (a,b) => a + b
 console.log(soma3(5,12))