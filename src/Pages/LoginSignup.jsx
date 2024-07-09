import React from "react";
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Зареєструватись</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Ваше імя" />
          <input type="email" placeholder="Ваша електрона почта" />
          <input type="password" placeholder="Пароль" />
        </div>
        <button>Продовжити</button>
        <p className="loginsignup-login">
          Маєте вже аккаунт? <span>Війти</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Продовжуючи, я згіден в зправилами пользування</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
