import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import LoginBG from "../Assets/Group 80.png";
import Logo from '../Assets/logo-small.png'
import './login.css'
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("Login Successful!");
        const user = userCredential.user;
        const uid = user.uid;

        setCurrentUser(uid);

        window.location.href = `/`;
      })
      .catch((error) => {
        console.log(error);
        alert("Wrong email or password");
      });
  };

  const {t, i18n} = useTranslation();

  return (
    <div className="sign-in-container">
      <img src={LoginBG} alt="log in background" />
      <div className="login-field">
       <center><img src={Logo}/></center>
      <h1>{t('LogIn')}</h1>
      <input 
        type="email"
        placeholder={t('Email')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder={t('Password')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
       <center> <button className="login-button-log" type="button" onClick={signIn}> LOG IN
      </button></center>
       <span className="ask-log">{t('HaveAcc')}</span>
       <Link to="/signup">{t('SignUp')}</Link>
        
       

      </div>
      
    </div>
  );
};

export default SignIn;
