import mongoose from "mongoose";
import { DB_NAME } from "./constants";








/*
import express from "express"
const app = express()

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error)=>{
      console.log("ERROR: ",error)
      throw error
    })  //to check whether express working or not

    app.listen(process.env.PORT, () => {
      console.log('app is listening at port ${process.env.PORT}');
    })

  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/