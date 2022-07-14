"use strict";
function simpleIntrest(p, n, r) {
    return (p * n * r) / 100;
}
function getAmount(p, si) {
    return p + si;
}
const p = 5000, n = 2, r = 2;
const si = simpleIntrest(p, n, r);
const amount = getAmount(p, si);
console.log('The Simple Intrest: ' + si);
console.log('The Amount: ' + amount);
