const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    fathername:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    personalMail:{
        type:String,
        required:true,
        unique:true
    },
    companyMail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    job:{
        type:String,
        required:true
    },
    joiningdate:{
        type:String,
        required:true
    },
    Salary:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    address:{ 
        type:String,
        required:true

    },
    EmployeePicture:{
        type:String,
    },
    CNICPicture:{
        type:String,
    },
    ResumePicture:{
        type:String,
    },
    Transcript:{
        type:String,
    },
    PreviousExperience:{
        type:String,
    },
    Certificates:{
        type:String,
    },
    AccountDetails:{
        type:String,
        required:true
    }
});

   const users = new mongoose.model("users",userSchema);


   module.exports = users;