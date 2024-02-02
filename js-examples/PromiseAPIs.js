//promise.all()
const P1= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 Success"),3000);
});
const P2= new Promise((resolve,reject)=>{
    //setTimeout(()=>resolve("P2 Success"),1000)
    setTimeout(()=>reject("P2 Fail"),1000)
});
const P3= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 Success"),2000)

});
Promise.any([P1,P2,P3]).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.error(err)
}
)
////promise.setteled()