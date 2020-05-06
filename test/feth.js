const p = new Promise((resolve,reject)=>{
    resolve()
})
let n = 0
p.then(()=>{
    return new Promise((resolve,reject)=>{
        resolve("no")
    })
}).then((res)=>{
    console.log("then",res)
})