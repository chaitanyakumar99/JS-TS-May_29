class Account{
    min_Bal=500;

    open_Account(){
        console.log("Account Opened Successfully");
    }
    deposit_Ammount(){
        console.log("Amount Deposited");
    }
    withdrawl_Amount(){
        console.log("Insufficient Bal");
    }
    get_St(){
        console.log("server Busy!");
    }
    get_Bal(){
        console.log("Negative Bal - deposit more!");
    }
    closer_Account(){
        console.log("Negative Bal - deposite more!");
    }
}


let a1=new Account();
a1.open_Account();
a1.deposit_Ammount();
a1.withdrawl_Amount();
a1.get_Bal()
a1.get_St()
a1.closer_Account()