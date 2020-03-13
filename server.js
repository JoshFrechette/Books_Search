require('dotenv').config()
const express = require("express");
// const logger = require("morgan");
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = 'mongodb+srv://Josh0422:GlobeHolder@jfdcluster-28xnz.gcp.mongodb.net/googlebooks?retryWrites=true&w=majority';





app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

mongoose.connect(MONGODB_URI || "mongodb://localhost/googlebooks");
// let db = mongoose.connection;
// db.once('open', function(){
//     console.log("connected to MongoDB");
// })

require("./routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });