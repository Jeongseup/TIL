require("dotenv").config({ path: ".env.local" });
const express = require("express");
const mongoose = require("mongoose");

const { PORT, MONGO_URI } = process.env;

// CONNECT TO MONGODB SERVER
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to mongodb"))
    .catch((e) => console.error(e));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", require("./routes"));
app.use("/api/paper", require("./routes/paper"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

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
