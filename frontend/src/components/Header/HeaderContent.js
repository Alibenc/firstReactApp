import { Link } from "react-router-dom";

const HeaderContent = () => {
  return(
    <div className="header__content">
      <Link className="header__logo" to="/">
        <span className="header__logo-top">СУ<span>ШИ</span></span>
        <span className="header__logo-bottom">ВЫДУМАННЫЙ РЕСТОРАН</span>
      </Link>
      <div className="header__menu menu">
        <div className="menu__body">
          <ul className="menu__list">
            <li><Link to="/contact" className="menu__link">Контакты</Link></li>
            <li><Link to="/cart" className="menu__link">Меню ресторана</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent;