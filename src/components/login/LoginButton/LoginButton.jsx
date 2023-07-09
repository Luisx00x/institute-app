'use client'

import loginHandler from "../LoginHandler";

const LoginButton = ({userName, password}) => {

  return (
    <input 
    type="button" 
    value="Ingresar" 
    onClick={(e) => {
      e.preventDefault();
      loginHandler(userName, password);
    }} />
  )

}

export default LoginButton;