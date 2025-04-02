import express from "express";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import Cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/order", (req, res) => {
  console.log("order received", req.body);
  res.status(200).json({ message: "Order placed succesfully" });
});
app.get("/",(req,res)=>{
    console.log("request got")
    res.send("hello world")
})

app.post("/payment-order", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);
    res.status(200).json({ message: "order placed" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in order");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port :", PORT);
});
