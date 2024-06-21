function changeColor(){

    //alert("Test Case 123")

    console.log("Test Case 123")
    let input_Tag_Ref = document.getElementById('abc')
    console.log(input_Tag_Ref)
    input_Tag_Ref.style.backgroundColor = "yellow";
    
}


let changeCase=()=>{
//alert('Text Case 123')
let input_Tag_Ref =document.getElementByTagName('input')[1]
//console.log(input_Tag_Ref);
let uname =input_Tag_Ref.value;
input_Tag_Ref.value=uname.toUpperCase()
}