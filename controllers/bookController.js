const Book=require('../models/book');

const getBook=async(req , res)=>{

    const books= await Book.find();

    res.status.send(200).json(books)
}

const getBookbyID=async(req , res)=>{

    

    const id=req.params.id;

    const book= await Book.findOne({id});


    res.status.send(200).json(book)
}

const deletebook=async(req , res)=>{
    const id=req.params.id;

    const deletedbook=await Book.findByIdAndDelete({id})
    res.status(200).json({deletebook})
}




const createBook=async(req , res)=>{

    const {title , author}=req.body

    const createdBook=await Book.create({title,author})

    res.status.send(200).json(createdBook)
}

const updateBook=async(req , res)=>{
    const {title , author}=req.body
    const id=req.params.id;


    const deletedbook=await Book.findOneAndUpdate({id},{title,author});
    res.status(200).json({deletebook})
}


module.exports={
    getBook,getBookbyID, createBook, deletebook,updateBook
}
