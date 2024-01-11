 var c=100;
 let a=200;

{
    let a=10;
    const b=20;
    var c =30;
    console.log(a,b,c);

}
console.log(c);//block scope.will print 30 bcz of shadowing
console.log(a);
// console.log(b);