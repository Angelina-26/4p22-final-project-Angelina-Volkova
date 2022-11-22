import './Header.css'; 


function Header() {

return (
    <header className="Header">
        <h1 className="Header-name">Best shop</h1>
    <div className="Header-container">
        <a href="https://fruitsparadise.ru/" target="blank" className="Header-container__link">О нас</a>
        <a href="https://fruitsparadise.ru/katalog/" target="blank" className="Header-container__link">Каталог</a>
        <a href="https://fruitsparadise.ru/oplata/" target="blank" className="Header-container__link">Оплата</a>
        <a href="https://fruitsparadise.ru/dostavka/" target="blank" className="Header-container__link">Доставка</a>
        <a href="https://fruitsparadise.ru/otzyvy/" target="blank" className="Header-container__link">Отзывы</a>
        <a href="#contacts" className="Header-container__link">Контакты</a>
    </div>
    </header>
)
}

export default Header;