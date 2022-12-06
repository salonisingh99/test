const express= require('express');
const cors= require('cors');
const route=express.Router();
const Register = require('../model/register');

route.post('/register',(req,res)=>{
var {username,password,email,mobileno,company} = req.body;
console.log(username,password,email,mobileno,company);
const newuser=new Register({username,password,email,mobileno,company});
    newuser.save((err,docs)=>{
      if(docs){
        res.json({ message: "User registered successfully", status: 200 });
      }else{
        res.json({ message: "Not working...do something dude", status: 400 });
      }
    })
})

module.exports=route;
route.post('/login',(req,res)=>{
    var{ username, password } = req.body;
    Register.findOne({ username }, (err, docs) => {
        if (err) { throw err; }
        else if (!docs) {
            res.json({ message: "No such user exist", status: 401 });
        } else {
            if(password===docs.password){
                    res.json({ message: "Login Succesfull", status: 200 });
                } else {
                    res.json({ message: "password does not matches", status: 401 })
                }
            
        }
    })
});

module.exports=route;