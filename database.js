const mongoose = require("mongoose");/*hon 3am n3yet le mongoose men dependencies le e2der est3mlon bel database */
require('dotenv').config();

exports.connectDB = async () => {
    try{
        await mongoose.connect(process.env.MongoDB_URI);
        console.log("MongoDB connected !")

    }catch(err){
        console.error(err);
        process.exit(1);
    }
};

