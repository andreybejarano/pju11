import PropTypes from 'prop-types';

import SmallCard from './SmallCard';

function ContentRowMovie({ data }) {
    return (
        <div className="row">
            {data.map((element, index) => {
                return <SmallCard
                    key={index}
                    title={element.title}
                    quantity={element.quantity}
                    color={element.color}
                    icon={element.icon}
                />
            })}
        </div>
    )
}

ContentRowMovie.propTypes = {
    data: PropTypes.array.isRequired
}

ContentRowMovie.defaultProps = {
    data: []
}

export default ContentRowMovie;