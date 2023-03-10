import React ,{ useState } from 'react';
import { auth, provider } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup({ setIsAuth }) {

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, { displayName: name }).catch(
            (err) => console.log(err))
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
        <h1>Create an account</h1>
        <div className="inputGp">
          <label> Name:</label>
          <input
            placeholder="Name..."
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
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
        <button onClick={signUp}> Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Signup