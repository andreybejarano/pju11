import React from "react";
import Movie from "../components/Movie";

class MoviesPage extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/movies', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ movies: data.data });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Movie movies={this.state.movies} />
        );
    }

}

export default MoviesPage;