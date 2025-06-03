const Book=require('../models/book');

const getBook=async(req , res)=>{

    const books=Book.find();

    res.status.send(200).json(books)
}




module.exports={
    getBook,
}
