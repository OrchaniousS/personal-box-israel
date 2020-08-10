import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  auth,
  // , signInWithGoogle
} from "../../firebase";

import styles from "../pages/auth.module.css";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location = "/";
      })
      .catch((error) => {
        setError("שגיאה בעת התחברות עם האימייל או סיסמה");
        console.error("שגיאה בעת התחברות עם האימייל או סיסמה", error);
      });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const loginInputs = [
    { placeHolder: "אימייל", label: "email" },
    { placeHolder: "סיסמה", label: "password" },
  ];

  const loginContainer = (
    <div className={styles.inputContainer}>
      <form>
        {loginInputs.map((input, index) => (
          <React.Fragment key={index}>
            <label htmlFor={input.label}></label>
            <input
              id={input.label}
              type={input.label}
              name={input.label}
              placeholder={input.placeHolder}
              onChange={(event) => onChangeHandler(event)}
            />
          </React.Fragment>
        ))}

        <button
          onClick={async (event) => {
            signInWithEmailAndPasswordHandler(event, email, password);
          }}
        >
          התחבר
        </button>
      </form>
      <div className={styles.loginContainer}>
        {/* <div>או</div>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
        >
          התחבר עם גוגל
        </button> */}
        <div>
          אין לך משתמש? <Link to="signUp">הרשם כאן</Link>
        </div>
        <div>
          <Link to="passwordReset">שכחת סיסמה?</Link>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className={styles.titleUser}>
        <h2>התחברות</h2>
      </div>
      {error !== null && <div>{error}</div>}
      {loginContainer}
    </React.Fragment>
  );
};

export default SignIn;
