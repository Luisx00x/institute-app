'use client'
import { useState } from "react"
import LoginButton from "./LoginButton/LoginButton";
import s from './Login.module.css';
import { inputHandler } from "./LoginHandler.js";

const Login = () => {
  
  const [inputs, setInputs] = useState({
    userName: "",
    password: ""
  })

  return (
    <div className={s.container}>    
      <div className={s.formContainer}>
      <h1>
        Proyecto Institute
      </h1>
        <form className={s.userForm}>
          <div className={s.columns}>

            <label className={s.formItem} htmlFor="userNameInput">Nombre de usuario</label>
            <label className={s.formItem} htmlFor="passwordInput">Contraseña</label>

          </div>
          <div className={s.columns}>

            <input name="userName" onChange={(e) => inputHandler(e, setInputs)} 
            value={inputs.userName} className={s.formItem} type="text" id="userNameInput" />

            <input name="password" onChange={(e) => inputHandler(e, setInputs)} 
            value={inputs.password} className={s.formItem} type="password" id="passwordInput" />

          </div>
        </form>
        <LoginButton userName={inputs.userName} password={inputs.password} />
      </div>

      <div className={s.advice}>
        <div className={s.user}>
          <b>Admin</b>
          <p>userName: Ruben123</p>
          <p>password: 1234</p>
        </div>
      </div>

    </div>
  )

}

export default Login;