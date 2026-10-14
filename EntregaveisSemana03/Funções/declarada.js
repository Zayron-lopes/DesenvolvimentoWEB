console.log("Declarada (antes da declaração):", ehMaiorDeIdade(20)); 
// true/ verdadeira 
 
function ehMaiorDeIdade(idade) {
  return idade >= 18;
}
 
console.log("Declarada (depois):", ehMaiorDeIdade(15)); 
// false, pois idade declarada é 20, pois isso não é menor de idade, que serai 15