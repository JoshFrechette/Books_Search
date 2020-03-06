require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


const mongoURL = process.env.PROD_MONGODB || "mongodb://localhost/googlebooks"
mongoose.connect(mongoURL, {useNewUrlParser: true})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("error connecting to mongoDB")
    });

require("./routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });