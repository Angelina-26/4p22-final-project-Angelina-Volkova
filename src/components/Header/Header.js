import './Header.css'; 


function Header() {

return (
    <header className="Header">
        <h1 className="Header-name">Best shop</h1>
    <div className="Header-container">
        <a href=" " target="blank" className="Header-container__link">О нас</a>
        <a href=" " target="blank" className="Header-container__link">Оплата</a>
        <a href=" " target="blank" className="Header-container__link">Доставка</a>
        <a href=" " target="blank" className="Header-container__link">Отзывы</a>
        <a href="#contacts" className="Header-container__link">Контакты</a>
    </div>
    </header>
)
}

export default Header;