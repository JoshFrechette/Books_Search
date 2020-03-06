// import React from "react";
import axios from "axios";
import Key from "./utils/key";

export default {
    // Search for a book
    getBooks: function(){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" ,{title}, "&key=",{Key})
    }
};