console.log("\nPar ou ímpar (for):");

for (let n = 1; n <= 20; n++) {
  console.log(`${n} é ${n % 2 === 0 ? "par" : "ímpar"}`);
}