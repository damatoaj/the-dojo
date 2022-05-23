import './Avatar.css'
import  PropTypes from 'prop-types';

export default function Avatar({src}) {
    return (
        <div className='avatar'>
            <img src={src} alt='user avatar' />
        </div>
    )
};

Avatar.propTypes = {
    src : PropTypes.string
};