require('dotenv').config()
// const axios = require("axios");
const db = require("../models");
const path = require("path");
const axios = require("axios");
module.exports = function(app) {
    app.get("/api/googlebooks/:title", (req, res) => {
           let title = req.params.title;
           console.log(title)
           console.log(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.GOOGLEBOOKS_KEY}`)
         axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${process.env.GOOGLEBOOKS_KEY}`).then(function(response){
           console.log(response.data)    
         
         res.json(response.data);
         })
    })
    app.get("/api/books", (req, res) => {
        db.Book.find({}).then(bookData => {
                res.json(bookData);
            }
        ).catch(
            (err) => {
                res.json({error: err});
            }
        );
    });

    // app.get("/", (req, res) => {

    //     ).then(
    //         (response) => {
    //             res.json(response.data.items)
    //         }
    //     ).catch(
    //         (err) => {
    //             res.json({error: error})
    //         }
    //     );
    // });

    app.post("/api/books", (req, res) => {
        console.log(req.body)
        db.Book
        .create(req.body)
        .then(dbBook => {
            console.log(dbBook)
            res.json(dbBook)})
        .catch(err => {
                res.json(err);
        })
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
}