function classificarNota(nota) {
  if (nota >= 6) { //perguntando se a nota sera maior ou igual a 6
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
 
console.log(`Nota 8.5 => ${classificarNota(8.5)}`);// vai dá aprovado, pois maior que 6
console.log(`Nota 4 => ${classificarNota(4)}`);//Vai mostrar reprovado pois foi menor que 6