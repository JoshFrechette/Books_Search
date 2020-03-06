import React from "react";

// import API from "./utils/api";
import Routes from "./utils/routes";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handelChange(e) {
        e.preventDefault();
        Routes.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    this.setState({bookData: response.data});
                   this.setState({bookInput:""});
                }
            );
    }
    // Render search results
    render() {
        return (
            <main>
                <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0) ?
                    <ResultsContainer bookData={this.state.bookData} path={this.props.match.path} /> : null    
                }            
            </main>
        )
    }

}

export default Search;