
function x(){
    var a=10;
    Y();
    function Y(){
        console.log(a)  
  //js engine first try to find a in the local environment of Y. then check its lexical envmnt.
 
     }
    // return Y;
   
}
x();



