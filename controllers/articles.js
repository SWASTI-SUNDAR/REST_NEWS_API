const News=require('../model/userSchema');
const getAllNews= async (req,res)=>{
   const myNews=await News.find({}); 
   res.status(200).json({totalResults:myNews.length,myNews})
}
const getAllNewsTesting= async (req,res)=>{
   const myNews=await News.find(req.query); 
   res.status(200).json({totalResults:myNews.length,myNews})
}
module.exports={getAllNews, getAllNewsTesting};