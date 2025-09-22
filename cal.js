


let input= document.querySelector(".input")
function appendNumber(num){
if (input.value==="0") 
    input.value="";

input.value+=num;
}

function appendOperator(op){
    input.value+=op
}

function clear(){
    input.value=""
}

function result(){
       try {
        input.value = eval(input.value); // evaluates expression
    } catch (error) {
        alert("Invalid Expression");
    }
}

document.querySelector(".delete").addEventListener('click',()=>{
    // appendOperator('+')
    clear();
})
document.querySelector(".add").addEventListener('click',()=>{
    appendOperator('+')
})
document.querySelector(".sub").addEventListener('click',()=>{
    appendOperator('-')
})
document.querySelector(".mul").addEventListener('click',()=>{
    appendOperator('*')
})
document.querySelector(".div").addEventListener('click',()=>{
    appendOperator('/')
})
document.querySelector(".equal").addEventListener('click',()=>{
    // appendOperator('+')
    result()
})

document.querySelector(".one").addEventListener('click',()=>{
    appendNumber(1)
})
document.querySelector(".two").addEventListener('click',()=>{
    appendNumber(2)
})
document.querySelector(".three").addEventListener('click',()=>{
    appendNumber(3)
})
document.querySelector(".four").addEventListener('click',()=>{
    appendNumber(4)
})
document.querySelector(".five").addEventListener('click',()=>{
    appendNumber(5)
})
document.querySelector(".six").addEventListener('click',()=>{
    appendNumber(6)
})
document.querySelector(".seven").addEventListener('click',()=>{
    appendNumber(7)
})
document.querySelector(".eight").addEventListener('click',()=>{
    appendNumber(8)
})
document.querySelector(".nine").addEventListener('click',()=>{
    appendNumber(9)
})
document.querySelector(".zero").addEventListener('click',()=>{
    appendNumber(0)
})


