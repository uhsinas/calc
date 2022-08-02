//1.display no/operators inside the input box when we click on it 

function  display(num) {
    a.value+=num
    
}

//2.to clear all values inside the textboxfunction  display(num) 
    
    
function allclear(){
    a.value=""
}
//3.expression evaluation

function output()

{

a.value=eval(a.value)
}

//4.remove last digit
function remove(){
a.value=a.value.slice(0,-1)}