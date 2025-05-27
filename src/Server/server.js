import express from "express"
import dotenv from 'dotenv'
import Razorpay from "razorpay"
import Cors from "cors"


dotenv.config()
const app=express()
const PORT=5000
app.use(Cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{
  res.send("Hello world")
})
app.post("/order",(req,res)=>{
  res.send("order placed")
})
app.post("/details",(req,res)=>{
  
  res.status(200).json({success:true})
})

app.post('/place-order',async(req,res)=>{
  try{
    const razorpay = new Razorpay({
      key_id:process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET 
    })
  
    const options=req.body;
    const order =await razorpay.orders.create(options)
    res.status(200).json({success:true,order})
  }
  catch (error) {
    console.error("Error creating order:", error); // Log the error
    res.status(500).json({ success: false, error: error.message });
  }
  
})

app.listen(PORT,()=>{
console.log('server is running on port '+ PORT);

})