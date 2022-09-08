let nome = new Array("Caroline", "Ana", "João", "Pedro", "Matheus");

console.log(nome);

console.log(nome[0]);
console.log(nome[1]);
console.log(nome[2]);
console.log(nome[3]);
console.log(nome[6]);

nome[3] = "Fernando";
console.log(nome[3]);

nome.push("Maria");
delete nome[0];
console.log(nome);

//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
nome.splice(1, 3, "Carol");
console.log(nome);
