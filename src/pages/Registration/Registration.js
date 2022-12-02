import './Registration.css';
import { useEffect } from 'react';


function RegistrationPage() {
    useEffect (() => { 
   
const input = document.querySelector('.reg__input');
const btn = document.querySelector('.reg__button');
const error = document.querySelector('.error');
const error2 = document.querySelector('.error2');
const input2 = document.querySelector('.reg__input2');
const about = document.querySelector('.reg__about-textarea');
const gender = document.querySelector('.reg__radio-input');
const subscribe = document.querySelector('.reg__checkbox-input');

    
btn.addEventListener('click', (e) => {
    e.preventDefault();

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
        console.log(re.test(String(email).toLowerCase()));
        return re.test(String(email).toLowerCase());
    }
  
    if (validateEmail(input.value)) {
        input.classList.remove('red');
        error.classList.remove('show');
        
    } else {
        input.classList.add('red');
        error.classList.add('show');  
    }
   
     if (String(input2.value) === '') {
        input2.classList.add('red');
        error2.classList.add('show2');
    
     } else if (input2.value.length < 8) {
        input2.classList.add('red');
        error2.classList.remove('show2');

    } else {
        input2.classList.remove('red');
        error2.classList.remove('show2');
    }
    if (!error2.classList.contains('show2') && !error.classList.contains('show')) {
        const result = {
            email: input.value,
            name: input2.value,
            about: about.value,
            gender: gender.value,
            subscribe: subscribe.value,
        }
        console.log('information' , result);
    }
    validateEmail(input.value);
})
}, [])

    return ( 
    
    <form className="reg" method="post">
        <h1 className="reg__heading">Feedback</h1>
        <div className="reg__inputs">
        <div>
            <label className="reg__email" htmlFor="email">* Email</label> 
            <label className="error" htmlFor="email">Email entered incorrectly</label> 
        </div> 
            <input className="reg__input" id="email" name="email" type="email" placeholder="Enter your email"/>
        
        <div>
            <label className="reg__password" htmlFor="password">* Name</label>
            <label className="error2" htmlFor="email">Required</label>
        </div>     
            <input className="reg__input2" id="password" name="password" type="text" placeholder="Enter your name"/>           
        </div>
        <div className="reg__radio">
            <h4 className="reg__radio-heading">Gender</h4>
            <input className="reg__radio-input" id="radio-1" type="radio" name="radio" value="male" checked/>
            <label className="reg__radio-label"htmlFor="radio-1">Male</label>
        </div>
        <div className="reg__radio">
            <input className="reg__radio-input" id="radio-2" type="radio" name="radio" value="female" checked/>
            <label className="reg__radio-label" htmlFor="radio-2">Female</label>
        </div>

        <div className="reg__about">
            <label className="reg__radio-heading" htmlFor="textarea"></label>
           <p><textarea className="reg__about-textarea" id="textarea" name="text area" placeholder="Enter your comment"></textarea></p>
        </div>

        <div className="reg__inputs2">
            <p><input className="reg__input__file" type="file" name="f"/>
            <button className="btn" type="submit" value="Отправить">Attach</button></p>

        <div className="reg__checkbox">
            <input className="reg__checkbox-input" id="checkbox" type="checkbox" value="true"/>
            <label className="reg__checkbox-label"htmlFor="checkbox">I agree to the processing of personal data</label> 
        </div> 
            <button className="reg__button" type="submit" >Send</button>
            </div>
    </form>
    )
}

export default RegistrationPage;