/*elebaore uma função que receba um array de numeros 
e retorne um array com todos os numeros pares 
e que também tenha indices pares */
let num = [0, 6, 7, 8, 9, 10, 12];

num.forEach((num, i)  => {
    if (i % 2 == 0 && num % 2 == 0) {
        console.log("Número: " + num + " Indice: " + i);
    }
});