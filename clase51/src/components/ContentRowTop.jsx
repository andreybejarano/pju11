import ContentRowMovie from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";

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

const genres = [
    { name: 'Acción' },
    { name: 'imación' },
    { name: 'ventura' },
    { name: 'Ficción' },
    { name: 'Comedia' },
    { name: 'umental' },
    { name: 'Drama' },
    { name: 'antasia' },
    { name: 'antiles' },
    { name: 'Musical' }
];

const lastMovie = {
    id: 1,
    image: 'mandalorian.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?'
}

function ContentRowTop() {
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
                <LastMovieInDb data={lastMovie} />
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
                <GenresInDb genres={genres} />
            </div>
        </div>
    );
}

export default ContentRowTop;