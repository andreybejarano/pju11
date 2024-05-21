import { createContext, useEffect, useState } from "react";
import axios from 'axios';
import PropTypes from 'prop-types';

const InitDataContext = createContext();

function InitDataProvider({ children }) {
    const [data, setData] = useState({
        movies: null,
        genres: null
    });

    const getMovies = async () => {
        try {
            const movies = await axios.get('http://localhost:3001/api/movies');
            setData((value) => ({ ...value, movies: movies.data }));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        (async function () {
            try {
                const movies = await axios.get('http://localhost:3001/api/movies');
                const genres = await axios.get('http://localhost:3001/api/genres');
                setData({ movies: movies.data, genres: genres.data });
            } catch (error) {
                throw new Error(error);
            }
        })()
    }, []);

    return (
        <InitDataContext.Provider value={{...data, getMovies}}>
            {children}
        </InitDataContext.Provider>
    )
}

InitDataProvider.propTypes = {
    children: PropTypes.element
}

export { InitDataContext, InitDataProvider }