let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let varTemp;
console.log(varA, varB, varC);

varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC);
