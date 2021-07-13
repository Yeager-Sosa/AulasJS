const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//simulando reduce com for
let totalComFor = 0;
for (let valor of a1) {
    totalComFor += valor;
};
console.log(totalComFor);

//simulando reduce com forEach
let totalComForEach = 0;
a1.forEach(valor => totalComForEach += valor);
console.log(totalComForEach);