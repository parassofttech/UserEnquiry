
const enquiryModel = require("./../models/enquiry.modle")

let enquiryInsert = (req,res)=>{
    let {name, email, phone, message} = req.body 
    let enquiry = new enquiryModel({
        name,
        email,
        phone,
        message
    })
    enquiry.save().then(()=>{
        res.send({status:1, msg:"data save successfully"})
    }).catch((err)=>{
        res.send({status:0, msg:"error while saving ",error:err })
    })
}
let enquiryList = async (req , res )=>{
    let enquiry = await enquiryModel.find()
    res.send({status:1, msg:"all data are", enquiryList:enquiry})
}

let enquiryDelete = async(req, res) =>{
    let enqId = req.params.id
    let enquiry =  await enquiryModel.deleteOne({_id:enqId})
        res.send({status:1, msg:"data deleted ",enquiry })
    
}

let enquirySingleRow = async (req,res)=>{
    let enqId = req.params.id
    let enquiry = await enquiryModel.findOne({_id:enqId})
    res.send({status:1,enquiry})
 }

 let enquiryUpdae = async (req,res)=>{
     let enqId= req.params.id
     let {name, email, phone, message} =req.body
     let updateObj ={
        name,
        email,
        phone,
        message
     }
     let enquiry= await enquiryModel.updateOne({_id:enqId},updateObj)
     res.send({status:1, msg:"data update successfully",enquiry})
 }


module.exports ={enquiryInsert,enquiryList,enquiryDelete,enquirySingleRow, enquiryUpdae}