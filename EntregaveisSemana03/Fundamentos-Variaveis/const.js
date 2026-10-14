const MAX_PONTOS = 100;
//const é imutaveil
try {
  MAX_PONTOS = 200;
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
  //const cria uma ligação imutavel. Depois de inicializada, o identificador não pode ter outro valor.
}