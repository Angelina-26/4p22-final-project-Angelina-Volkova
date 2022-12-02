import './Footer.css';

function Footer () {
    return (
        <footer className="Footer">
        <h3 className="Footer-contacts" id="contacts">Contacts</h3>
            <a href="tel:+7123456789"className="Footer-link">+7123456789</a> <br />
            <a href= "email:example@ya.ru" className="Footer-link">example@ya.ru</a>
            <p><em>© Volkova 2022</em></p>
    
</footer>  

    )
}
export default Footer;