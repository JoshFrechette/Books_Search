import React from "react";
import { Button, Colors } from 'react-foundation';

function SearchInput(props) {
    return(
        <div id="searchForm">
            <h3>Book Search</h3>
            <br></br>
            <p>Book</p>
            <br></br>
            <form id="bookSearch">
                <input type="text" name="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Enter Book Title" required />
                <br></br>
                <Button color={Colors.SUCCESS} type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</Button>
            </form>
        </div>
    );
}

export default SearchInput;