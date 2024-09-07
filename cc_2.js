// Task 1 Calculate Tip

let billsize = 200;
let tip = (billsize >= 50 && billsize <= 300)?billsize* 0.15:billsize *.2;
console.log("Tip:",tip);

// Task 2 Output Details 
let total = billsize + tip;
console.log(`The Bill Was $${billsize}, The Tip Was $${tip}, The Total Altogther was $${total}`);

//Task 3 create function
function calculateTip(billsize) {
   return (billsize >= 50 && billsize <= 300)?billsize *.15:billsize *.2;
}
let anyBill = 100;
let anyTip = calculateTip(anyBill);
console.log(`the bill was $${anyBill}, the tip was $${anyTip}, the total altogether $${anyBill + anyTip}`);

// Task 4 Utilize Arrays

const bills = [275,40,430,125,555,44];
const tips = bills.map(billsize => calculateTip(billsize));
const totals = bills.map((billsize, index) => billsize + tips[index]);

console.log("Bills:",bills);
console.log("Tips:",tips);
console.log("Totals:",totals);


