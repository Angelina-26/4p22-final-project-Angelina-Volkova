import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((result) => {
      setProducts(result);
    }) 
  }, []);

return (
  <div className="App">
     <Header />
    <div className="App-container">
    { products.map((item, index) => {
      return <Card key={index} title={item.title}
                  description={item.description}
                  img={item.image}
                  price={item.price} />
    })
    }
    </div>
    <Input />
    <Footer />
    </div>
  
  );
}

export default App;
