fetch('http://localhost:3001/api/movie')
    .then((response) => {
        return response.json();
    })
    .then((data) => {

    })
    .catch((err) => {

    });

async function getMovies() {
    try {
        const response = await fetch('http://localhost:3001/api/movie');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}