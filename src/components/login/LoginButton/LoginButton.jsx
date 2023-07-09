'use client'

import { useDispatch } from 'react-redux';
import { loginHandler } from './LoginButtonHandler.js';
import s from './LoginButton.module.css';

const LoginButton = ({userName, password}) => {

  const dispatch = useDispatch();

  return (
    <input 
    className={s.submit}
    type="button" 
    value="Ingresar" 
    onClick={(e) => {
      e.preventDefault();
      loginHandler(userName, password, dispatch);
    }} />
  )

}

export default LoginButton;