import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" />
        <img
          className="text_logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
        />
      </div>

      <button type="submit" onClick={signIn}>
        SIGN IN
      </button>
    </div>
  );
}

export default Login;
