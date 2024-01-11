
 
    function X(){
        
            for(var i=0;i<=5;i++){
                function close(i){
                setTimeout(()=>{
                    console.log(i)
            
                },i*2000)
        }
        close(i);
 }
 
}
X();
//if use let instead of var in forloop, there is no need of inner function close