class Product {
    name;
    price;
    qty;

    deleviry = () =>{

    }
    bill = () =>{

        return this.price * this.qty
    }

    discount = () =>{
      
            return  this.price * this.qty * 0.1;
    }
}
// export default Product; | ES6
module.exports = Product;
// export{Product1, Product2} //named export more than one is possible