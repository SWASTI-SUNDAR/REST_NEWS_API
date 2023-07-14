const express=require('express');
const router=express.Router();

const {getAllNews, getAllNewsTesting}=require('../controllers/articles');

router.route('/').get(getAllNews);
router.route('/testing').get(getAllNewsTesting);

module.exports=router;