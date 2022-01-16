'use strict';

//For loop in javascript


//Challenge-4-Done
let tip;
 const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
 const tips = new Array();
 const total = new Array();

 const calcTip = function (bill) { return ( tip = (bill >= 50 && bill < 300) ? (0.15 * bill) : (0.20 * bill))}

 for (let index = 0; index < bills.length; index++) {
     const element = calcTip(bills[index]);
     tips.push(element);
     total.push(bills[index]+tips[index]);
 }
console.log(bills)
console.log(tips)
console.log(total)