import React, { useState } from "react";
import './CSS/LoginSignup.css'


const LoginSignup = () => {

	const [state, setState] = useState("Вхід");
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		email:""
	})

	const changeHandler = (e)=>{
		setFormData({...formData, [e.target.name]:e.target.value})
	}

	const login = async () =>{
		console.log("Ви ввійшли", formData);
		let responseData;
		await fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				Accept: 'application/form-data',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		}).then((response) => response.json()).then((data)=>responseData=data)

		if(responseData.success){
			localStorage.setItem('auth-token', responseData.token);
			window.location.replace("/");
		} 
		else{
			alert(responseData.errors);
		}
	}


	
	const signup = async () =>{
		console.log("Ви зареєструвались", formData);
		let responseData;
		await fetch('http://localhost:4000/signup', {
			method: 'POST',
			headers: {
				Accept: 'application/form-data',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		}).then((response) => response.json()).then((data)=>responseData=data)

		if(responseData.success){
			localStorage.setItem('auth-token', responseData.token);
			window.location.replace("/");
		} 
		else{
			alert(responseData.errors);
		}
	}

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Зареєструватись"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Ваше імя" />:<></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Ваша електрона почта" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Пароль" />
        </div>
        <button onClick={()=> {state === "Вхід"?login():signup()}}>Продовжити</button>
		  {state === "Зареєструватись" 
		  ? <p className="loginsignup-login">Маєте вже аккаунт? <span onClick={() =>{setState("Вхід")}}>Війти</span></p>
		  : <p className="loginsignup-login">Створити аккаунт? <span onClick={() =>{setState("Зареєструватись")}} >Нажміть тут</span></p>}

 
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Продовжуючи, я згіден в зправилами пользування</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
