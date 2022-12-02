import './Header.css'; 
import { Link } from 'react-router-dom';
import CustomizedInputBase from '../Search/Search';

function Header() {

return (
    <header className="Header">
        <h1 className="Header-name">NEW SHOPPING GALLERY</h1>
    <div className="Header-container">
        <a href="http://localhost:3000/4p22-final-project-angelina-volkova" target="" className="Header-container__link">About</a>
        <a href="http://localhost:3000/4p22-final-project-angelina-volkova" target="" className="Header-container__link">Payment</a>
        <a href="http://localhost:3000/4p22-final-project-angelina-volkova" target="" className="Header-container__link">Delivery</a>
        <a href="#contacts" className="Header-container__link">Contacts</a>
        <Link to={'contacts'} className="Header-container__link" >Feedback</Link> 
        <CustomizedInputBase />
    </div>
    </header>
)
}
export default Header;

