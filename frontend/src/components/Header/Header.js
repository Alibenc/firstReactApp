import React, {useState} from 'react';
import ProfileIMG from '../../assets/Header/user-profile.svg';
import HeaderContent from "./HeaderContent";
import './Header.css';
import ModalAutoresation from '../ModalAutoresation/ModalAutoresation';
import useLocalStorage from '../../Hooks/useLocalStorage';
// import logouter from './logouter';

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const [isAutorisNow] = useLocalStorage('isAutorisNow', false);
  const [isAutorisNowActual, setIsAutorisNowActual] = useState(() => {
    return JSON.parse(localStorage.getItem('isAutorisNow'));
  });
  const [logoutAvtive, setLogoutActive] = useState(false);
  localStorage.removeItem('isAutoris');
  // console.log(isAutorisNow);

  const logouter = () => {
    console.log('логаутер работает');
    localStorage.setItem('isAutorisNow', JSON.stringify(false));
    setIsAutorisNowActual(() => false);
    setLogoutActive(() => false);
  }

  console.log(logoutAvtive);

  return(
    <header className="header">
      <div className="header__container _container">
        <HeaderContent/>
        <div className="header__buttons">
          <div onClick={() => isAutorisNowActual ? setLogoutActive(() => !logoutAvtive) : setModalActive(() => true)} className="header__login">
            <img src={ProfileIMG} alt="авторизация" className="header__login-icon"/>
          </div>
          <div onClick={() => (logouter())}
          className={logoutAvtive ? "header__logout _active" : "header__logout" }>
            <p>Выйти из аккаунта</p>
          </div>
        </div>
      </div>
      <ModalAutoresation setIsAutorisNow={setIsAutorisNowActual}
      active={modalActive} setActive={setModalActive}/>
    </header>
  )
  
}

export default Header;