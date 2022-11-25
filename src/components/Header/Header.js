import './Header.css'; 
import { Link } from 'react-router-dom';


function Header() {

return (
    <header className="Header">
        <h1 className="Header-name">NEW SHOPPING GALLERY</h1>
    <div className="Header-container">
        <a href=" " target="blank" className="Header-container__link">О нас</a>
        <a href=" " target="blank" className="Header-container__link">Оплата</a>
        <a href=" " target="blank" className="Header-container__link">Доставка</a>
        <a href=" " target="blank" className="Header-container__link">Отзывы</a>
        <a href="#contacts" className="Header-container__link">Контакты</a>
        <Link to={'contacts'} className="Header-container__link" >Регистрация</Link> 
    </div>
    </header>
)
}

export default Header;