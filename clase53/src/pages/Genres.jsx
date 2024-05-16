import React from "react";
import GenresInDb from "../components/GenresInDb";

class Genres extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            genres: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/genres', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ genres: data.data });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <GenresInDb genres={this.state.genres} />
        )
    }
}

export default Genres;