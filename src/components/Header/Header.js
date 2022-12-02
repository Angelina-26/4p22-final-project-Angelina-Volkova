import './Header.css'; 
import { Link } from 'react-router-dom';
import CustomizedInputBase from '../Search/Search';

function Header() {

return (
    <header className="Header">
        <h1 className="Header-name">NEW SHOPPING GALLERY</h1>
    <div className="Header-container">
        <Link to={''} className="Header-container__link">About</Link>
        <Link to={''} className="Header-container__link">Payment</Link>
        <Link to={''} className="Header-container__link">Delivery</Link>
        <a href="#contacts" className="Header-container__link">Contacts</a>
        <Link to={'contacts'} className="Header-container__link" >Feedback</Link> 
        <CustomizedInputBase />
    </div>
    </header>
)
}
export default Header;

