class Account{
    acc_Bal=0;
    min_Bal=500;
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
}
let a1=new Account();
a1.deposit_Amount(5000);
a1.deposit_Amount(50)


console.log(a1);

