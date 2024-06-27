//ES5

let Account=require('./Account')

class CA extends Account{
    acc_Id;
    acc_Bal=0;
    min_Bal=500;
    constructor(id,name,email,amount,addr){
        super(name,email,addr)
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    get_Bal(){
        return this.acc_Bal - this.min_Bal
    }
}

let ca1=new CA(101,"Rahul","rahul123@.com",50000,"Delhi")
console.log(ca1);