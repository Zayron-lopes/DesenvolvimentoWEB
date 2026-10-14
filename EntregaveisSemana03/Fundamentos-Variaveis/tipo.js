// 1.3 Tipos primitivos e typeof
const texto = "Olá, JavaScript";
const numero = 42;
const verdadeiro = true;
let indefinido; // declarada sem valor => undefined
const nulo = null;
 
console.log(typeof texto); // tipo string/texto
console.log(typeof numero); // tipo number/numeros
console.log(typeof verdadeiro); //tipo boolean/ Verdadeiro ou falso
console.log(typeof indefinido); // undefined
console.log(typeof nulo); //object <- bug histórico da linguagem!