
 
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