import React from "react";
import SearchResult from "../components/searchResult";


//Use better to DRY 
function SearchResults(props) {
    //Display for search page
    if(props.path === "/") {

        return(
            <div id="resultsContainer">
                <h3>Results</h3>

                {props.bookData.map((book) => {
                    console.log(book)
                    const bookResult = book.volumeInfo;
                    return <SearchResult
                    title={bookResult.title}
                    authors={bookResult.authors}
                    description={bookResult.description}
                    link={bookResult.canonicalVolumeLink}
                    img={bookResult.imageLinks}
                    path={props.path}
                    key={book.id} />


                })}
            </div>
        );
    //Display for saved page
    }  else if(props.path === "/saved") {
        if(props.savedBooks.length > 0) {
            return(
            <div id="resultsContainer">
                <h3>Saved Books</h3>
                {props.savedBooks.map((book) => {
                return <SearchResult
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    link={book.canonicalVolumeLink}
                    img={book.imageLinks}
                    path={props.path}
                    key={book.id} />
                })}
            </div>
            );
        } else {
        //Display if no books have been saved
            return(
                <div is="resultsContainer">
                    <h3>Saved Books</h3>
                    <p>No Saved Books!</p>
                </div>
            );
        }
    }
}

export default SearchResults;