function dobroDeclarada(n) {
  return n * 2; //Variavel n multiplicada por 2
}
 
const dobroExpressao = function (n) {
  return n * 2;
};
 
const dobro = (n) => n * 2; 
// arrow function (forma curta)
 

//Sempre o dobro do valor
console.log(dobroDeclarada(4)); // 8
console.log(dobroExpressao(4)); // 8
console.log(dobro(4)); // 8