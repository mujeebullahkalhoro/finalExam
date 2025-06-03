const  express=require('express')
const  { getBook,getBookbyID, createBook, deletebook,updateBook}=require('../controllers/bookController')
const router=express.Router();



router.get('/books' , getBook)

router.get('/books/:id',getBookbyID)

router.post('/books',createBook )

router.delete('/books/:id', deletebook)

router.put('/books/:id',updateBook)



module.exports=router;