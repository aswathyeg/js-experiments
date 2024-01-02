function X(){
    console.log("callback")
}
function Y(X){
    console.log("higher order")
}

Y();
Y(X())

const radius=[1,2,3,4]
const area=(radius)=>{
    const output=[]
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i])

    }
    return output;

   
}
console.log(area(radius));