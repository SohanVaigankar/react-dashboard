import React, { useState, useContext } from "react";
import "./login.scss";

// firebase
import { auth } from "../../configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// context
import { AuthContext } from "../../context/AuthContext";
import { LOGIN } from "../../context/actions.type";

const Login = () => {
  const navigate = useNavigate();

  // context
  const { dispatch } = useContext(AuthContext);

  // state to track errors
  const [error, setError] = useState(false);

  // state to track email
  const [email, setEmail] = useState("");

  // state to track password
  const [password, setPassword] = useState("");

  // fn to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: LOGIN, payload: { currentUser: user } });
        navigate("/");
      })
      .catch((error) => {
        console.log(error)
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setError(true);
      });
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;

    //     // console.log(user);

    //   })
    //   .catch((error) => {
    //     console.log(error.errorMessage);
    //     // const errorCode = error.code;
    //     // const errrorMessage = error.errrorMessage;
    //     setError(true);
    //   });
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleLogin}>
        {error && (
          <span className="error-msg">{`whoops!! wrong email or password :(`}</span>
        )}
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
