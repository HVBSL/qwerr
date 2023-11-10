const express = require("express");
const cors = require("cors");
const conn = require('./db/connection')
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(require('./routes/route'));

conn.then(db => {
    if (!db) return process.exit(1);

    app.listen(PORT, () => {
        console.log("Server is running on the port " + PORT);
    })

    app.on('error', err => console.log(`Failed to connect with the HTTP Server : ${err}`));
})
    .catch(err => console.log(`Connection Failed ${err}`));


