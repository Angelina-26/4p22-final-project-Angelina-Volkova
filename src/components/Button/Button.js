import './Button.css';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className="Common-button">{ props.text }</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;