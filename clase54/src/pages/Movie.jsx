import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class Movie extends React.Component {
    render() {
        return (
            <h1>Movie ID: {this.props.match.params.id}</h1>
        );
    }
}

Movie.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default withRouter(Movie);