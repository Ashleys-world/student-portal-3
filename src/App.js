import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Main from "./pages/Main";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        

        {!isAuth ? (<> 
          <Link to="/"> Main page</Link>
          <Link to="/login"> Login </Link>
          <Link to="/signup"> Register </Link>
          </>
        ) : (
          <>

            <Link to="/home"> Home </Link>
            <Link to="/profile"> Modules </Link>
            <Link to="/createpost"> Create Post </Link>
            <button onClick={signUserOut}> Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Main isAuth={isAuth} />} />
        <Route path="/home" element={<Home isAuth={isAuth} />} />
        <Route path="/profile" element={<Profile isAuth={isAuth}/>} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
