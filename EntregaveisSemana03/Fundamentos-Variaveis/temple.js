const nome = "Ana"; //variavel nome "Ana"
const idade = 20; //Variavel idade "20"
 
const fraseTemplate = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
const fraseConcat = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";
 
console.log(fraseTemplate);
console.log(fraseConcat);
console.log("As frases são iguais?", fraseTemplate === fraseConcat); 
// true/verdadeiro