import PropTypes from 'prop-types'
import Star from './Star';
import { v4 as uuid } from 'uuid';

function Stars(props) {
    const { count } = props;

    if (!Number.isInteger(count) || count < 0 || count > 5) {
        return null
    }

    const rating = [];
    for (let i = 0; i < count; i++) {
        rating.push({ key: uuid() });
    }

    return (
        <div className='rating'>
            <ul className="card-body-stars u-clearfix">
                {rating.map((item) => (
                    <Star key={item.key} />
                ))}
            </ul>
        </div>
    );
}

Stars.defaultProps = {
    count: 0,
}

Star.propTypes = {
    count: PropTypes.number,
}

export default Stars;
