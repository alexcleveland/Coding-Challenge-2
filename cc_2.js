// Task 1 Calculate Tip

let billsize = 200;
let tip = (billsize >= 50 && billsize <= 300) ? billsize * 0.15 : billsize * 0.20;
console.log("Tip:",tip);

// Task 2 Output Details 
let total = billsize + tip;
console.log(`The Bill Was $${billsize}, The Tip Was $${tip}, The Total Altogther was $${total}`);
