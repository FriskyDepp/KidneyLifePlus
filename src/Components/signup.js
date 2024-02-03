import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../config/firebase"; // Assuming db is exported correctly
import { Link, useNavigate } from "react-router-dom";
import SignUpBG from '../Assets/Group 80.png'
import './signup.css'
import LOgo from '../Assets/logo-small.png'
import { useTranslation } from "react-i18next";
import { addDoc, collection } from "firebase/firestore"; // Added imports

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const signUp = async () => {
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return; // Don't proceed with signup
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return; // Don't proceed with signup
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      const uid = user.uid;

      const docRef = await addDoc(collection(db, "users"), {
        uid,
        email,
      });
      navigate("/Service");
    } catch (error) {
      console.log(error);
    }
  };

  const {t, i18n} = useTranslation();

  return (
    <div className="sign-up-container">
      <img src={SignUpBG} alt="Sign Up Background" />
      <div className="signup-field">
        <center><img className="logo" src={LOgo}/></center>
        <h1>{t('SignUp')}</h1>
        <input
        type="email"
        placeholder={t('Email')}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={t('Password')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        type={showPassword ? "text" : "password"}
        placeholder={t('Re-en')}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></input>
      <center><button className="hide-butt" type="button" onClick={toggleShowPassword}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button></center>
      <center><button className="signup-butt" type="button" onClick={signUp}>
      {t('SignUp')}
      </button></center>
      <span className="ask-signup">{t('HaveAcc')}</span>
      <Link to="/login">{t('LogIn')}</Link>
      </div>
      
    </div>
  );
};

export default SignUp;
