import './Card.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';



function Card({img,title, price, id}) {
    return (
        
        <Link to={`products/${id}`} className="Card">
            <div className="Card-container">
                <img className="Card-img" alt="product" src= { img }/>
                <h2 className="Card-title">{ title }</h2>
                    <div className="Card-price-button">
                    <div className="Card-price"> { price }</div>
                <div className="Card-button"><Button text="Купить" /></div> </div>
                  
            </div>
        </Link>
    )
}

export default Card;
