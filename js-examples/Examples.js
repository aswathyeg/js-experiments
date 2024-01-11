function X(){
    console.log("callback")
}
function Y(X){
    console.log("higher order")
}

Y();
Y(X)

const radius=[1,2,3,4]
const area=(radius)=>{//callback function
    return Math.PI*radius*radius
}
const circumferance=(radius)=>{
    return 2*Math.PI*radius
}

const calculate=(radius,logic)=>{//higher order function
    const output=[]
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))

    }
    return output;

   
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumferance));
console.log(radius.map(area))//map is doing same functionality as higherorder function(calculate)

//promises
// const cart=["doormat","shoes","kurta"];

// createOrder(cart,function(orderId){//without promise
//     proceedToPayment(orderId)
// })
// const promise=createOrder(cart);
// promise.then(function (orderId){
//     proceedToPayment(orderId);
// })
//with promise

const array=[1,2,3,4,5]
const findAverage=(array)=>{
    let average=0
    for(let i=0;i<array.length;i++){
         average+=array[i]/(array.length)
    }
    return average;
}
console.log(findAverage(array))
//reduce function

const avgReduce=array.reduce((a,b)=>a+b,0)/array.length;
console.log(avgReduce)
//factotial
let n=0;
const factotial=(n)=>{
    if(n===0){
        return 1;
    }
    else return n*factotial(n-1)
}
console.log(factotial(n))
//hoisting
console.log(x);
console.log(findName('ash'))//hoisting
function findName(name){
    console.log(`my name is ${name}`)
}
var x=10;
//closure
function closureEx(){
    var a=7;//pointed to the referance 7
    function test(){
        var a=117;//pointed to value 117
        console.log(a);

    }
    return test;
    
}
var z= closureEx();
// console.log(z)
z();






























