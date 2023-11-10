import './Footer.css';
import HeaderContent from '../Header/HeaderContent';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__top">
          <HeaderContent/>
          <a href="tel:+78005553535" className="footer__phone">+7 (800) 555-35-35</a>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">
            &#169; СуШи - Выдуманный ресторан | Все права защищены
          </p>
          <p className="footer__dev">
            Разработчик - <a href="https://vk.com/alibenclox"  target="_blank" rel="noreferrer"
            className="footer__dev-link">Иван Крапивин</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;