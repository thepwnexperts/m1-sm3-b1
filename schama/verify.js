const mongoose=require('mongoose');


const userDBSchema =new mongoose.Schema({
    mail:{
        type:String,
        required:true,
        min:5,
        max:64
    },
    otp:{
        type:String,
        required:true,
        
    }
    
});

module.exports=mongoose.model("verify",userDBSchema);