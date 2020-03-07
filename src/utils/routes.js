
import axios from "axios";
require('dotenv').config();
console.log(process.env.GOOGLEBOOKS_KEY)

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    searchBooks: (title) => {
        console.log(title)
        return axios.get( `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyAa-TGs32zTCTDbIWsLa6y9wcAW1-eVPvk`)
    },
    addBookToDB: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}