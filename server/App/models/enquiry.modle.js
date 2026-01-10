let mongoose = require("mongoose")
let userEnquirySchema = mongoose.Schema({

     name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
} , { timestamps: true })
let enquiryModel = mongoose.model("Enquiry", userEnquirySchema)

module.exports = enquiryModel;

//, { timestamps: true }