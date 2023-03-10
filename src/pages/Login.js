import React ,{ useState } from 'react';
import { auth, provider } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/home");
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <div className="createPostPage">
      <div className="cpContainer">
        <h1>Login into an existing account</h1>
        <div className="inputGp">
          <label> Email:</label>
          <input
            placeholder="Email..."
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Password:</label>
          <input
            placeholder="Password..."
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button onClick={signIn}> Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Login


/*import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/home");
    });
  };

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;*/
