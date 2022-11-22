import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className="CommonButton">{ props.text }</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;