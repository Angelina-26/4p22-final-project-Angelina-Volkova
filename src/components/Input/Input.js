import './Input.css';
import Button from '../Button/Button';

function Input() {

    return (
    <div className="Input">
    <h3 className="Input-name">Подписаться на рассылку акций</h3>
    <input placeholder="email" type="email"/>
    <Button text="Подписаться"/>
    </div>
    )
}

export default Input;