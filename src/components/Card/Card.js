import './Card.css';
import Button from '../Button/Button';

function Card(props) {
    return (
        <div className="Card">
            <img className="Card-img" src= { props.img }/>
             <div className="Card-container">
                 <h2 className="Card-title common-header">{ props.title }</h2>
                <p className="Card-description">{ props.description }</p>
                <div className="Card-price"> { props.price }</div>
                 <div className="Card-button"><Button text="В корзину" />
                 </div>
            </div>
    </div>
    )
}

export default Card;