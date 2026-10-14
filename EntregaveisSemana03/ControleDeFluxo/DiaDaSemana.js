function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido";
  }
}
 
console.log("\nDias da semana:");
console.log(diaDaSemana(1)); // Domingo
console.log(diaDaSemana(4)); // Quarta-feira
console.log(diaDaSemana(7)); // Sábado
console.log(diaDaSemana(9)); // Número inválido