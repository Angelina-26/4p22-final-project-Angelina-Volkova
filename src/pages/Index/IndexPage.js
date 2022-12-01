import './IndexPage.css';
import { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';

function IndexPage() {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((result) => {
            setProducts(result);
            }) 
     }, []);

    return (
        <>
        <div className="IndexPage-container">
            { 
             products.map((item, index) => {
                return <Card key={index} title={item.title}
                  description={item.description}
                  id={item.id}
                  img={item.image}
                  price={item.price} />
            })
            }  
         </div>
         </>   
    )
}
export default IndexPage;