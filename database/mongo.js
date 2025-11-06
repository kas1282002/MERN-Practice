import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const PORT = 3000;
dotenv.config();

const app = express();
app.use(express.json());
//mongo connection...
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to mongodb");
  })

  .catch(() => {
    console.log(err);
  });
  const User=mongoose.model("user",userSchema);
  app.post("/signup",async(req,res)=>{
    try{
      const {email,password}=req.body;
      const user=new User(req.body);
      const savedUser=await user.save();
      res.status(201).json({message:"user created sucessfully"});
      console.log(req.body);
    }catch(err){
        console.log("error",err);
      }
    
  });
app.listen(PORT, () => {
  console.log("server started");
});

