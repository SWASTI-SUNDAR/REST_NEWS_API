const mongoose = require('mongoose');
// const { connect } = require('../routes/articles');/
const DB = process.env.DATABASE || "mongodb+srv://swastipradhan301:znWjcfWVc0iMDGbR@cluster0.uoonkjv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
    then(() => {
        console.log("connection successful to database yeeehee")
    }).catch((err) => console.log(err));


// module.exports = connectDB;

