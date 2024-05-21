import { useContext, useState } from 'react';

import { InitDataContext } from '../context/InitDataContext';

function GenresInDb() {
    const [titleHovered, setTitleHovered] = useState(false);
    const {genres} = useContext(InitDataContext);

    const handleMouseEnter = () => {
        setTitleHovered((value) => !value);
    }

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3" >
                    <h5 className="m-0 font-weight-bold text-gray-800" onMouseEnter={handleMouseEnter}>Genres in Data Base</h5>
                </div>
                <div className={`card-body ${titleHovered && 'bg-secondary'}`}>
                    <div className="row">
                        {genres?.data?.map((genre, index) => {
                            return (
                                <div key={index} className="col-lg-6 mb-4" >
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            {genre.name}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenresInDb;