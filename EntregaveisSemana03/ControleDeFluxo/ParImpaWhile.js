console.log("\nPar ou ímpar (while):");
let m = 1;
while (m <= 20) {
  console.log(`${m} é ${m % 2 === 0 ? "par" : "ímpar"}`);
  m++;
}