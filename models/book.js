const mongoose=require('mongoose')

const bookShema=new mongoose.Schema({

    tile:String,
    author:String
})


const Book=mongoose.model('Book' , bookShema)

module.exports=Book;