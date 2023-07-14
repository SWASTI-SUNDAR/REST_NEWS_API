require('dotenv').config();
const connectDB = require('./db/connect');
const News = require('./model/userSchema');
const NewsArticles = require('./news.json');
const start = async () => {
    try {
        await connectDB(process.env.DATABASE);
        await News.create(NewsArticles);
        // await News.deleteMany();
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}
start();