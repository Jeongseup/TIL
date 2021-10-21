const mongoose = require("mongoose");
const MONGO_URL =
    "mongodb+srv://jeongseup:01028660894@clusterjeongseup.4x0ug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
    MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to database successfully");
        }
    }
);

// const { MongoClient } = require("mongodb");
// const uri =
// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// client.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Connected to database successfully");
//     }

//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
