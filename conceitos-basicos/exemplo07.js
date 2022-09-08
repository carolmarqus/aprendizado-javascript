/* Troca de valores associados a duas variáveis
Para evitar que o valor original c se perca é necessário associar a uma outra variável auxiliar */
let c = 89;
let b = 07;

//c = 07
//b = 89

//temp = 89
let temp = c;

c = b;
b = temp;

console.log(c);
console.log(b);