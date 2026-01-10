const express = require("express")


const cors = require("cors")
const connectDB = require("./db/connectDB")
const enequiryRoutes = require("./App/routes/enquiryRoutes")
require("dotenv").config()
let app = express()
connectDB()
app.use(express.json())

app.use(cors({
     origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["content-Type","Authorization"],
  credentials: true,
}))



//routes
app.use("/api/enquiry", enequiryRoutes)
app.get("/", (req,res)=>{
    return res.send("backend is running")
})
app.listen(process.env.PORT, () => {
  console.log("Server running on port");
});
module.exports= app