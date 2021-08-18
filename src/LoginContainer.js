import React, { useState } from "react";
import "./LoginContainer.css";
import harry from "./harry.png";
import {auth} from "./firebase";
import {useHistory} from 'react-router-dom';
function LoginContainer() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e =>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .then(auth =>{
        history.push('/')
      })
      .catch(error=>alert(error.message))
  }

  const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) =>{
      console.log(auth)
      if(auth){
        history.push('/')
      }
    })
    .catch(error=>alert(error.message))
  }

  return (
    <div className="login-container">
      <img src={harry}></img>
      <h1>Sign-in</h1>
      <form>
        <h5>Email</h5>
        <input type="text" value={email} onChange={e => {setEmail(e.target.value)}}/>
        <h5>Password</h5>
        <input type="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
        <button className="sign-in-btn" type='submit' onClick={signIn}>Sign-In</button>
        <p>OR</p>
        <p>Become a Potterhead!</p>
      </form>
      <button onClick={register} className="account-btn">Sign up Now! </button>
    </div>
  );
}

export default LoginContainer;
