import React, {useEffect, useState} from 'react';
import useLocalStorage from '../../Hooks/useLocalStorage'
import './ModalAutoresation.css';
import Autorisation from './Autorisation';

const ModalAutoresation = ({active, setActive, isAutorisNow, setIsAutorisNow}) => {
  const [loginObj] = useLocalStorage('loginObj', {password: null, login: null});
  const [loginObjCopy, setLoginObjCopy] = useState(Object.assign({}, loginObj));
  const [isLogin, setIsLogin] = useState(loginObjCopy.password ? true : false);

  useEffect(() => {
    if (active) {
      document.body.classList.add('_lock');
    } else {
      document.body.classList.remove('_lock');
    }
  }, [active]);

  return(
    <div onClick={() => setActive(false)}
    className={active ? "modal _active" : "modal"}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <div onClick={() => setActive(false)} className="modal__close"></div>
        <Autorisation setIsAutorisNow={setIsAutorisNow}
        modalActive={active} setModalActive={setActive}
        setIsLogin={setIsLogin} isLogin={isLogin} />
      </div>
    </div>
  )
}

export default ModalAutoresation;