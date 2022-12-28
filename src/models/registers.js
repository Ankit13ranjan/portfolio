const mongoose = require("mongoose");

// Schema Creation Code 

const registerSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true,
    },
    email : {
        type:String,
        require:true
    },
    phone: 
    { type: String,
         isUnique: true, 
        isRequired: false
    },
    message:
    {
        type: String
    }
    
});

// Creation of Collection 

const Register = new mongoose.model('Register',registerSchema);

module.exports = Register;