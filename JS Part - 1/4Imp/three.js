//what is object :- group of key:values pairs

//create

let emp={
    eid:101,
    ename:"Rahul",
    esal:65000
}

let user={}

console.log(Object.values(emp));
console.log(Object.values(emp).length);
console.log(Object.values(emp).length>0);

if(Object.keys(user).length>0){
console.log("Not an Empty object");
}
else{
    console.log("Empty Object");
}