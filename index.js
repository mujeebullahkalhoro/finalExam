const express=require('express')
const connectDB=require('./config/db')
const bookRoutes=require('./routes/bookRoutes')
const app=express()
connectDB()


app.use(express.json())

app.use('/' ,bookRoutes)





app.listen(5000,()=>{
    console.log("server is running");
    
})