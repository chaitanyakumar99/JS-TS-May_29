let gotour=(success,failure)=>{

let acc_Bal=1500
acc_Bal>1000 ? success("Go and Enjoy..!"):failure("Go to Home")

}

gotour((msg)=>{console.log(msg);},(err)=>{console.log(err);})

// gotour(()=>{},()=>{})



