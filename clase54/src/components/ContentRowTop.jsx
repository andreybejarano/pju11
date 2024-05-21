import { useContext, useEffect, useState } from "react";
import ContentRowMovie from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import { InitDataContext } from "../context/InitDataContext";

const data = [
    {
        title: 'Movies in Data Base',
        color: 'primary',
        icon: 'fa-film',
        quantity: 21
    },
    {
        title: 'Total awards',
        color: 'success',
        icon: 'fa-award',
        quantity: 79
    },
    {
        title: 'Actors quantity',
        color: 'warning',
        icon: 'fa-user',
        quantity: 49
    }
]

function ContentRowTop() {
    const {movies} = useContext(InitDataContext);
    const [lastMovie, setLastMovie] = useState(null);

    useEffect(() => {
        setLastMovie(movies?.data[movies?.data?.length - 1]);
    }, [movies]);

    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <ContentRowMovie data={data} />
            {/* <!-- End movies in Data Base --> */}


            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Last Movie in DB --> */}
                {lastMovie && <LastMovieInDb data={lastMovie} />}
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
                <GenresInDb />
            </div>
        </div>
    );
}

export default ContentRowTop;