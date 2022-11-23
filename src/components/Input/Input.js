import './Input.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Input() {

    return (
    <div className="Input">
    <h3 className="Input-name">Подписаться на рассылку акций</h3>
    <TextField className="Input-textField" id="outlined-basic" label="email" variant="outlined" type="email"/>
    <Button variant="outlined" className="Input-button">Подписаться</Button>
    
    </div>
    )
}

export default Input;