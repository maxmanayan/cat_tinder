const demoPromise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    // in 1 sec, this will be called

    if (Math.random() * 2 > 1) {
      resolve('greater than 1')
    } else {
      reject('Error - less than 1')
    }
  },1000)
})

console.log('before promise called')

demoPromise.then(x=>{
  console.log('in then')
  console.log(x)
}).catch(x=>{
  console.log('in catch')
  console.log(x)
})


console.log('after promise called')