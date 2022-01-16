'use strict';

let tip;
let bills = [125, 55, 44];
let tips = [];
let total = [];

//using function expression
const calcTip = function (bill) { return (tip = (bill >= 50 && bill < 300) ? (0.15 * bill) : (0.20 * bill))}   
//using arrow function
const calcTip2 = (bill) => {
    return (tip = (bill >= 50 && bill < 300) ? (0.15 * bill) : (0.20 * bill));
}

tips = bills.map(calcTip);
tips.forEach(tip => console.log(tip))
total = bills.map((num, idx) => {
    return num + tips[idx];
})
console.log(total);