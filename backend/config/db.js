import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://gobihanath:gobi077007@cluster0.jxgt06k.mongodb.net/Electronics-Shop').then(()=>console.log("DB Connected"));
}