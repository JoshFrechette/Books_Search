import React from "react";
import SearchResult from "./components/searchResults";


//Use better to DRY 
function SearchResults(props) {
    if(props.path === "/") {
        return(
            <div id="resultsContainer">
                <h3>Results</h3>
                {props.bookData.map((book) => {
                    const bookResult = book.volumeInfo;
                    return <BookResponse
                    title={bookInfo.title}
                    authors={bookInfo.authors}
                    description={bookInfo.description}
                    link={bookInfo.canonicalVolumeLink}
                    img={bookInfo.imageLinks}
                    path={props.path}
                    key={book.id} />


                })}
            </div>
        );
    }  else if(props.path === "/saved") {
        if(props.savedBooks.length > 0) {
            return(
            <div id="resultsContainer">
                <h3>Saved Books</h3>
                {props.savedBooks.map((book) => {
                return <BookResponse
                    title={bookInfo.title}
                    authors={bookInfo.authors}
                    description={bookInfo.description}
                    link={bookInfo.canonicalVolumeLink}
                    img={bookInfo.imageLinks}
                    path={props.path}
                    key={book.id} />
                })}
            </div>
            );
        } else {
            return(
                <div is="resultsContainer">
                    <h3>Saved Books</h3>
                    <p>No Saved Books!</p>
                </div>
            )
        }
    }
}