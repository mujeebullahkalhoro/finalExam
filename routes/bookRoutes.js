const  express=require('express')
const  {getBook,}=require('../controllers/bookController')
const router=express.Router();


router.get('/book' , getBook)



module.exports=router;