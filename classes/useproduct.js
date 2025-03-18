// import Product from './Product';
//import product2 {Product3 as p3} '.Product' // product2 is default and product3 is named name can be changed
const Product = require('./Product')


const p1 = new Product(); //calling constructor | p1 is a refererance variable
p1.name = 'prod 1';
p1.price = 2344;
p1.qty = 10;
const bill = p1.bill();
// console.log(bill);

const p2 = new Product();
// console.log(p2);
p2.name = 'watch';
p2.price = 20;
p2.qty = 60;
const bill2 = p2.bill();
const disc = p2.discount
console.log(bill2,disc);