require('dotenv').config()
const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = function(app) {
    app.get("/api/books", (req, res) => {
        db.Book.find().then(
            (bookData) => {
                res.json(bookData);
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    app.post("/", (req, res) => {
        console.log(req.body.title)
        let bookTitle = req.body.title.replace(/\s/g, "+");
        console.log(bookTitle);
        axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${process.env.GOOGLEBOOKS_KEY}`
        ).then(
            (response) => {
                res.json(response.data.items)
            }
        ).catch(
            (err) => {
                res.json({error: error})
            }
        );
    });

    app.post("/api/books", (req, res) => {
        db.Book.create(req.body).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    app.delete("/api/books/:id", (req, res) => {
        db.Book.findByIdAndDelete(req.params.id).then(
            (response) => {
                res.json({successful: response});
            }
        ).catch(
            (err) => {
                rres.json({error: err});
            }
        );
    });

    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
    });
}