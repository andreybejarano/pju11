import PropTypes from 'prop-types';

function LastMovieInDb({ data }) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '40rem' }} src={`/assets/images/${data.image}`} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>{data.description}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

LastMovieInDb.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
}

export default LastMovieInDb;