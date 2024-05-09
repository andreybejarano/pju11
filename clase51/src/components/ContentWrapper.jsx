import TopBar from "./TopBar";
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Movie from "./Movie";

const movies = [
    {
        id: 1,
        title: 'Pelicula 1',
        rating: 10,
        awards: 13,
        length: 120,
    },
    {
        id: 2,
        title: 'Pelicula 2',
        rating: 11,
        awards: 12,
        length: 122,
    },
    {
        id: 3,
        title: 'Pelicula 3',
        rating: 9,
        awards: 12,
        length: 125,
    }
];

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <Movie movies={movies}/>
            </div>
            <Footer />
        </div>
    );
}

export default ContentWrapper;