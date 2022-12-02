import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

function ProductPage() {
    const { userId } = useParams();
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${userId}`);
            const result = await response.json();
    
            setProduct(result);

        })();
      
    },[userId]);

    return (
        <div className="Product-card">
            <h2 className="Product-card__title">{ product.title }</h2>
            <img className="Product-card__image" src={ product.image } alt="product"></img>
            <p className="Product-card__description">{ product.description }</p>
            <div className="Product-card__price"> { product.price }</div>
            <button className="Product-card__button">{'Buy'}</button>
        </div>
    )

}

export default ProductPage;