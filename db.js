const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const db = mongoose.connect(uri)

.then(() => {
    console.log("Database connected successfully");
})
.catch((error) => {
    console.log("Error in connection: ", error);
})

module.exports = db;
