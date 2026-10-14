try {
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
}
 
const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};
 
console.log("Expressão (depois):", ehMaiorDeIdadeExpressao(30)); 
// true