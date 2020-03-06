import React from "react";
import Routes from "../utils/routes";
// import { render } from "@testing-library/react";
import ResultsContainer from "../components/resultsContainer";

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            savedBooks: []
        }
    }
    //Replace with useEffect hook once overall app functions
    componentWillMount() {
        Routes.getBooks().then(
            (response) => {
                this.setState({savedBooks: response.data});
            }
        ).catch(
            (err) => {
                console.log(err);
            }
        );
    }
    // Iterate saved book response
    render() {
        return(
            <main>
                <ResultsContainer savedBooks={this.state.savedBooks} path={this.props.match.path} />
            </main>
        );
    }
}

export default Saved;