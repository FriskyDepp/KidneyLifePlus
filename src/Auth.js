import firebase from "firebase";
import React, { useEffect, useState } from "react";
import app from "./base.js";
import Logo from "./Assets/KidneyLogo_mobile.png";

export const AuthContext = React.createContext();


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
      console.log(currentUser.uid)
    });
  }, []);

  if(pending){
    return <>
    <center style={{margin: "50px"}}>
    <img src={Logo} class="mt-2" />
      <div style={{fontSize: "30px"}}>
      <div className="spinner-border mr-3 " role="status"></div>
      Loading...
      </div>
      
      </center></>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser, 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};