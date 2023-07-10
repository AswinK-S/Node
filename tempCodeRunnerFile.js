
console.log("starting node")
let a=3
let b =4
console.log("a is equal to : %s  and b is equal to : %s ",a,b)
console.log(a+b)

const os=require("os")
console.log (os.type())
console.log(os.platform())

let bike=require("./module.js")
console.log(bike)

let vehicle=require("./module1.js")
console.log(vehicle.car)