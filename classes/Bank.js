//'this' point current class object 
class Bank {
    balance = 0;
    constructor(balance){
    //   this.balance // 'this' refers to the Class balance class scope not inside constructor
    
    this.balance = this.balance + balance;
//      this.credit() //the class function will call not inside constructor

    //   this.credit(){
    //   }
    }
    credit(balance){
        //Gaurd Clause
        if(balance <= 0) return;
        this.balance = this.balance + balance
    }
    getRef(){
        return this;
    }
    debit(balance){
if(balance <= 0 && balance < this.balance) return 0;
        this.balance = this.balance - balance;
    }
 
    getBal(){
        return this.balance;
    }
}

const user1 = new Bank(478)
user1.credit(200);
user1.debit(1000);
console.log('Your total Balance is:' + user1.getBal());


// const b2 = b1.getRef();
// if(b1 === b2){
//     console.log('yes');
// }
// else{

//     console.log('no');
// }