var express = require("express")
const nocache = require('nocache')
var router = express.Router()

const credential ={
    email:"admin@gmail.com",
    password:"admin12"
}

//login


router.post('/login',(req,res)=>{
    if(req.body.email===credential.email && req.body.password===credential.password){
        req.session.user=req.body.email;
        res.redirect('/route/dashboard')
        // res.end("Login Successful")
    }
    else{
        var string = encodeURIComponent("invalid username or password")
        res.redirect('/?valid=' + string)
    }
})

//route for dashboard

const authenticateUser = (req,res,next)=>{
    if(req.session.user){
        next();
    }
    else{
        res.render('base',{title:"Express",invalid:"invaild"})
    }
}

router.get('/dashboard',authenticateUser,(req,res)=>{
    // if(req.session.user){
    //   res.render('dashboard',{user:req.session.user})  
    // }
    // else{
    //     res.send("Unauthorized user")
    // }

    res.setHeader('Cache-Control','no-store')
    res.render('dashboard',{user:req.session.user})  


})

//route for logout

router.post('/logout',nocache(),(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log('err')
            res.send("Error")
        }
        else{
            var string = encodeURIComponent("Logout sucessful")
            res.redirect('/?valid=' + string)
            // res.render('base',{title:"Express",logout:"Logout sucessfull"})
        }
    })

})



module.exports = router;

