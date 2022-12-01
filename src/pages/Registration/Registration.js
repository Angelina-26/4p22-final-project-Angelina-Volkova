import './Registration.css';
import { useEffect } from 'react';


function RegistrationPage() {
    useEffect (() => { 
   
const input = document.querySelector('.reg__input');
const btn = document.querySelector('.reg__button');
const error = document.querySelector('.error');
const error2 = document.querySelector('.error2');
const input2 = document.querySelector('.reg__input2');
const input3 = document.querySelector('.reg__input3');
const error3 = document.querySelector('.error3');
const error8 = document.querySelector('.error8');
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

    if (String(input3.value) !== (input2.value)) {
        input3.classList.add('red');
        error3.classList.add('show3');

    } else {
        input3.classList.remove('red');
        error3.classList.remove('show3');
    }
   
     if (String(input2.value) === '') {
        input2.classList.add('red');
        error2.classList.add('show2');
        error8.classList.remove('show8');
    
     } else if (input2.value.length < 8) {
        input2.classList.add('red');
        error8.classList.add('show8');
        error2.classList.remove('show2');

    } else {
        input2.classList.remove('red');
        error2.classList.remove('show2');
        error8.classList.remove('show8');
    }
    if (!error2.classList.contains('show2') && !error.classList.contains('show') && !error3.classList.contains('show3') && !error8.classList.contains('show8')) {
        const result = {
            email: input.value,
            password: input2.value,
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
    
    <form className="reg" enctype="form-data" method="post">
        <h1 className="reg__heading">Регистрация</h1>
        <div className="reg__inputs">
        <div>
            <label className="reg__email" for="email">* Email</label> 
            <label className="error" for="email">Email введен некорректно</label> 
        </div> 
            <input className="reg__input" id="email" name="email" type="email" placeholder="Введите email"/>
        
        <div>
            <label className="reg__password" for="password">* Пароль</label>
            <label className="error2" for="email">Поле обязательно для заполнения</label>
            <label className="error8" for="email">Пароль должен содержать не менее 8 символов</label>
        </div>     
            <input className="reg__input2" id="password" name="password" type="password" placeholder="Введите пароль"/>
        <div>    
            <label className="reg__confirm" for="confirm">* Подтверждение пароля</label>  
            <label className="error3" for="email">Пароли не совпадают</label>  
        </div>
            <input className="reg__input3" id="confirm" name="confirm" type="email" placeholder="Подтвердите пароль"/>
        </div>
        <div class="reg__radio">
            <h4 className="reg__radio-heading">Пол</h4>
            <input className="reg__radio-input" id="radio-1" type="radio" name="radio" value="male" checked/>
            <label className="reg__radio-label" for="radio-1">Мужчина</label>
        </div>
        <div className="reg__radio">
            <input className="reg__radio-input" id="radio-2" type="radio" name="radio" value="female" checked/>
            <label className="reg__radio-label" for="radio-2">Женщина</label>
        </div>

        <div class="reg__about">
            <label className="reg__radio-heading" for="textarea">О себе</label>
           <p><textarea className="reg__about-textarea" id="textarea" name="text area" placeholder="Расскажите о себе..."></textarea></p>
        </div>

        <div className="reg__inputs2">
            <p><input className="reg__input__file" type="file" name="f"/>
            <button className="btn" type="submit" value="Отправить">Прикрепить</button></p></div>

        <div class="reg__checkbox">
            <input className="reg__checkbox-input" id="checkbox" type="checkbox" value="true"/>
            <label className="reg__checkbox-label" for="checkbox">Согласен на обработку персональных данных</label> 
        </div>      
            <button type="submit" className="reg__button">Отправить</button>
    </form>

    )
}

export default RegistrationPage;