const express = require ("express")
const { enquiryInsert, enquiryList, enquiryDelete, enquirySingleRow, enquiryUpdae } = require("../controllers/enquiryController")


let enequiryRoutes = express.Router()

enequiryRoutes.post("/insert",enquiryInsert)
enequiryRoutes.get("/view",enquiryList)
enequiryRoutes.delete("/delete/:id",enquiryDelete)
enequiryRoutes.get("/single/:id",enquirySingleRow)
enequiryRoutes.put("/update/:id",enquiryUpdae)

module.exports = enequiryRoutes