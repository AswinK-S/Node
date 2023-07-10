
// console.log("starting node")
// let a=3
// let b =4
// console.log("a is equal to : %s  and b is equal to : %s ",a,b)
// console.log(a+b)

// const os=require("os")
// console.log (os.type())
// console.log(os.platform())

// let bike=require("./module.js")
// console.log(bike)

// let vehicle=require("./module1.js")
// console.log(vehicle.car)

//------------------------Event Loop---------

// const bar=()=>console.log("bar")
// const baz=()=>console.log("baz")

// const foo=()=>{
//     console.log("foo")
//     setTimeout( bar,2000)
//     baz()
// }

// foo()

//-------------------------------call back---------------

// function getMessage(msg,callback){
//     setTimeout(()=>{
//         console.log(msg)
//         callback()
//     },1000)
// }

// function displayMessage(){
//     console.log("display message")
// }

// getMessage("get Message",displayMessage)

//----------------------promises-------------------------

// let promise= new Promise(function(resolve,reject){
//     setTimeout(()=>{resolve("aswin")},1000)
// })

// promise.then(result=>{
//     console.log(result)
//     after()
// },
// error=>{console.log(error)})

// function after(){
//     console.log("after");
// }

//-------------------------------async await----------------------

// function display(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{resolve("hello")},2000)
//     })
// }

// async function get(callback){
//     let msg= await display()
//     console.log("message",msg)
//     callback();
// }
// get(after)

// function after(){
//     console.log("after")
// }

                    //----------------\\

                    // function display(){
                    //     return new Promise(resolve=>{
                    //         setTimeout(()=>{resolve("hello")},2000)
                    //     })
                    // }
                    
                    // async function get(){
                    //     let msg= await display()
                    //     console.log("message",msg)
                    //     after();
                    // }
                    
                    // get()
                    
                    // function after(){
                    //     console.log("after")
                    // }

//----------------------------------HTTP Server------------------

// const http = require("http")

// const hostname ='127.0.0.1'
// const port = 3000;

// const server = http.createServer((req,res) =>{
//     res.statusCode = 300;
//     res.setHeader('Content-Type','text/plain');
//     res.end("Welcome to HTTP server");
// })

// server.listen(port,hostname,()=>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

                            //--------------------\\

                    // const http = require("http")
                    
                    // const hostname = '127.0.0.1'
                    // const port = 4000;

                    // http.createServer((req,res)=>{
                    //     res.writeHead(200,{'Conten-Type':'text/plain'})
                    //     res.write('Welcome to HTTP server');
                    //     res.end();
                    // }).listen(port,hostname,()=>{
                    //     console.log(`server is running at http://${hostname}:${port}/`);
                    // })


//--------------------------------HTTP get request-------------------------------------------

// let http = require('http')

// http.get('http://api.open-notify.org/astros.json',resp=>{
//     let data ='';
//     resp.on('data',chunk =>{
//         data +=chunk
//     });

//     resp.on('end',()=>{
//         let jsondata = JSON.parse(data)
//         console.log(jsondata)
//     });
// })

//---------------------------HTTP post request-------------------------------------------


// const axios = require("axios")
// const data = JSON.stringify({
//         name:"John",
//         Job:"Developer"
       
// })



// axios.post('http://reqres.in/api/users',data).then(res=>{
//         console.log(`Status Code:${res.status}`);
//         console.log(`Body :${JSON.stringify(res.data)}`)
// }).catch(err=>{
//         console.error(err);
// })

//--------------------------------------files-----------------

     //----asynchronous----\\

// const { error } = require("console");
// const fs = require("fs")

// fs.readFile("test.txt",'utf8',(err,data)=>{
//         if(err)throw err;
//         console.log(data)
// })

//      //-----synchronous----\\

//  const data=fs.readFileSync('test.txt',{encoding:'utf-8',flag:'r'})    

// console.log(data)

//------state of file---------\\

// fs.stat('test.txt',(err,stats)=>{
//         if(err){
//                 console.log(err)
//                 return
//         }
//         console.log(stats.isFile())
//         console.log(stats.isDirectory())
//         console.log(stats.isSymbolicLink())
//         console.log(stats.size)//bytes
// })


//----------------------------to update  fs.appendFile() ------------------------\\

// fs.appendFile('test.text','this is my text.',(err)=>{
//              if(err){
//                 throw err
//              }
//              console.log('updated')
// })

//----------------------------to replace fs.writeFile----------------------------\\

// fs.writeFile('test.text','This',(err)=>{
//         if(err){
//                 throw err
//         }
//         console.log('Replaced')
// })

//-----------------------------create a file fs.appendFile()------------------------------------\\

// fs.appendFile('test1.text','this is second file',(err)=>{
//         if(err){
//                 throw err
//         }
//         console.log('Updated')
// })


//----------------------------------delete fs.unlinkFile()----------------------------------------\\

// let {error}=require("console")
// let fs= require("fs")

// fs.unlink('test1.text',(err)=>{
//         if(err){
//                 throw err
//         }
//         console.log('file deleted')
// })

//---------------------------------

