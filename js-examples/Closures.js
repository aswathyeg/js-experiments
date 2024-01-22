
 
//     function X(){
        
//             for(var i=0;i<=5;i++){
//                 function close(i){
//                 setTimeout(()=>{
//                     console.log(i)
            
//                 },i*2000)
//         }
//         close(i);
//  }
 
// }
// X();
//if use let instead of var in forloop, there is no need of inner function close

//eg:2
function outer(){
    
    function inner(){
        console.log(a)

    }
    let a=10
    return inner;//return is 
}
outer()();
//data hiding
function outerCount(){
    var count=0;
    function add(){
       count++ 
       console.log(count)
    }
    return add
}
//console.log(count); count is hiding inside outerCount function. no outsiders can access it
outerCount()();
var counter1=outerCount();
counter1();
counter1();
counter1();