import React from 'react';
import PropTypes from 'prop-types';

import SmallCard from './SmallCard';

class ContentRowMovie extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.data.map((element, index) => {
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
}

ContentRowMovie.propTypes = {
    data: PropTypes.array.isRequired
}

ContentRowMovie.defaultProps = {
    data: []
}

export default ContentRowMovie;