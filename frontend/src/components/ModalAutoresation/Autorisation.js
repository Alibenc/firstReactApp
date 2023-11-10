import { React, useState } from "react";

const Autorisation = ({isLogin, setIsLogin, modalActive, setModalActive, setIsAutorisNow}) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isWarn, setIsWarn] = useState(false);
  const [warnTxt, setWarnTxt] = useState('');
  const [isLoginCopy, setIsLoginCopy] = useState(isLogin);

  // localStorage.setItem('loginObj', JSON.stringify({
  //   login: null,
  //   password: null,
  // }));
  // localStorage.setItem('isAutorisNow', JSON.stringify(false));

  const formSend = async (e) => {
    e.preventDefault();

    const user = {
      userEmail: emailValue,
      password: passwordValue,
    };

    if (isLoginCopy) {
      const response = await ((await fetch('/api/login', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })).json());

      console.log(response);

      if (response.success) {
        localStorage.setItem('isAutoris', JSON.stringify(true));
        localStorage.setItem('isAutorisNow', JSON.stringify(true));
        setModalActive(() => false);
        setPasswordValue(() => "");
        setEmailValue(() => "");
        setIsAutorisNow(() => true);
        setIsWarn(() => false);
      } else {
        setIsWarn(() => true);
        setWarnTxt(() => 'Неверные данные пользователя');
      }
    } else {
      const response = await ((await fetch('/api/reg', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })).json());
      console.log(response);
      if (response.success) {
        localStorage.setItem('loginObj', JSON.stringify({
          login: emailValue,
          password: passwordValue,
        }));
        localStorage.setItem('isAutoris', JSON.stringify(true));
        localStorage.setItem('isAutorisNow', JSON.stringify(true));
        // localStorage.removeItem('loginObj');
        setEmailValue(() => "");
        setPasswordValue(() => "");
        setModalActive(() => !modalActive);
        setIsLogin(() => true);
        setIsLoginCopy(() => true);
        setIsAutorisNow(() => true);
        setIsWarn(() => false);
      } else {
        setIsWarn(() => true);
        setWarnTxt(() => 'Такой пользователь уже существует');
      }
    }
  }

  return(
    <form action="" className="modal__autoris-wrapper">
      <h4 className="modal__title">{isLoginCopy ? "Вход в аккаунт" : "Регистрация"}</h4>
      <div className="modal__forms">
        <input value={emailValue} onChange={(e) => setEmailValue(() => e.target.value)}
        name="userEmail"
        placeholder="Введите email" type="email" className="modal__email modal__txt-form" />
        <p className="modal__warn">{isWarn ? warnTxt : ''}</p>
        <input value={passwordValue} onChange={(e) =>setPasswordValue(() => e.target.value)}
        name="password"
        placeholder={isLoginCopy ? "Введите пароль" : "Придумайте пароль"} type="password" 
        className="modal__password modal__txt-form" />
        <button onClick={(e) => formSend(e)} type="submit" className="modal__submit">
          {isLoginCopy ? "Войти" : "Зарегистрироваться"}
        </button>
      </div> 
      <div className="remove__modal-wrapper">
        <p onClick={() => setIsLoginCopy(!isLoginCopy)} className="remove__modal">
          {isLoginCopy ? "Нет аккаунта? Зарегистрируйтесь!" : "Есть аккаунт? Войдите!"}
        </p>
      </div>
      
    </form>
  )
}

export default Autorisation;