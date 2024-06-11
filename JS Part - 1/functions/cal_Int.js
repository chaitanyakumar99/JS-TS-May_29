function cal_Interest(principal, rate,no_Of_Month){

    let total_Amount = principal + principal/100*rate*no_Of_Month;
    return total_Amount
}

let amoount=cal_Interest(1000000,2,4)
console.log(amoount);