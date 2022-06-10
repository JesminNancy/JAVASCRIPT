console.log("welcome");

// How to create Promise-Pending,Resolve,Reject
const promise1 = new Promise((resolve,reject)=>{

let completePromise = true;
  if(completePromise){
    resolve ("Promise 1 completed");
  }else{
    reject("not promise1 completed");
  }

});

promise1.then((res) => {
  console.log(res)
}).catch(err=>{
  console.log(err)
});
console.log("End")