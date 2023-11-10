const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const conn = mongoose.connect(process.env.ATLAS_URI)
    .then(db => {
        console.log("Database connected");
        return db;
    })
    .catch(err => console.log(err));

module.exports = conn;