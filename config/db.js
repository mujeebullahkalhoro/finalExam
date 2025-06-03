
const mongoose=require('mongoose')
const  dotenv=require('dotenv')

dotenv.config()
const connectDB=async()=>{

    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("database is connted");
       

    }catch(err){

        console.log("databse is not not connted", err);


        

    }
}
module.exports=connectDB;