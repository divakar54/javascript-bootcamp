let bill = 430, tip;

tip = (bill >= 50 && bill < 300) ? (0.15 * bill) : (0.20 * bill);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)