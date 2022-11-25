import './Registration.css';

function RegistrationPage() {
    return (
        <>
    <form class="reg">
        <h1 class="reg__heading">Регистрация</h1>

        <div class="reg__inputs">
            <label class="reg__email" for="email">Email</label>    
            <input class="reg__input" id="email" name="email" type="email" placeholder="Введите email"/>
            <label class="reg__password" id="password">Пароль</label>
            <input class="reg__input" id="password" name="password" type="password" placeholder="Введите пароль"/>
            <label class="reg__confirm" for="confirm">Подтверждение пароля</label>    
            <input class="reg__input" id="confirm" name="confirm" type="email" placeholder="Подтвердите пароль"/>
        </div>
        <div class="reg__radio">
            <h4 class="reg__radio-heading">Пол</h4>
            <input class="reg__radio-input" id="radio-1" type="radio" name="radio" value="1" checked></input>
            <label class="reg__radio-label" for="radio-1">Мужчина</label>
        </div>
        <div class="reg__radio">
            <input class="reg__radio-input" id="radio-2" type="radio" name="radio" value="2" checked></input>
            <label class="reg__radio-label" for="radio-2">Женщина</label>
        </div>

        <div class="reg__about">
            <label class="reg__radio-heading" for="textarea">О себе</label>
           <p><textarea class="reg__about-textarea" id="textarea" name="text area" placeholder="Расскажите о себе..."></textarea></p>
        </div>

        <div class="reg__checkbox">
            <input class="reg__checkbox-input" id="checkbox" type="checkbox" value="true"/>
            <label class="reg__checkbox-label" for="checkbox">Я согласен получать обновления на почту</label> 
        </div>
        <button class="reg__button">Регистрация</button>
    </form> 
</ >
    )
}

export default RegistrationPage;