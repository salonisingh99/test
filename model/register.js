const mongoose = require('mongoose');
const RegisterSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
         type:String,
         required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileno:
    {
        type:String,
        required:true
    },
    company:
    {
        type:String,
        required:true
    }
    
}); 

const model = mongoose.model('Register',RegisterSchema);

module.exports = model;